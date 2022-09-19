import {
  subscribeBasic, subscribeError, subscribeFast, subscribePipeline, subscribeRateLimited, subscribeReactivePipeline, subscribeSlow
} from './publications/index';
import {
  createPublication
} from 'meteor/zodern:relay';
import { getEvents } from './methods/index';

Tinytest.addAsync('publications - basic', (test, done) => {
  let sub = subscribeBasic({
    onReady() {
      sub.stop();
      done();
    }
  });
});

Tinytest.addAsync('publications - error', (test, done) => {
  let sub = subscribeError({
    onStop(err) {
      test.equal(err.message, '[pub err]');
      done();
    }
  });
});

Tinytest.addAsync('publications - args with options', (test, done) => {
  let sub = subscribeBasic(
    'input',
    {
    onReady() {
      sub.stop();
      done();
    }
  });
});

Tinytest.add('publications - config client', async (test) => {
  test.equal(Object.keys(subscribeBasic.config), ['name']);
  test.equal(subscribeBasic.config.name, 'basic');
});

Tinytest.addAsync('publications - rate limit', (test, done) => {
  for (let i = 0; i < 5; i++) {
    subscribeRateLimited();
  }

  subscribeRateLimited({
    onStop(err) {
      test.equal(err.error, 'too-many-requests');
      done()
    }
  });
});

Tinytest.addAsync('publications - async block by default', (test, done) => {
  let order = [];

  subscribeSlow({
    onReady() {
      order.push('slow')
    }
  });

  subscribeFast({
    onReady(){
      order.push('fast');
      test.equal(order, ['slow', 'fast']);
      done();
    }
  });
});

Tinytest.addAsync('publications - error if created on client', (test, done) => {
  try {
    createPublication({
      name: 'test'
    });
  } catch (e) {
    test.equal(e.message, `createPublication should never be called on the client.
Ensure you have @zodern/babel-plugin-meteor-reify configured, or
you are calling createPublication only in files inside a publications directory`);
    done();
  }
});

Tinytest.addAsync('publications - pipeline', (test, done) => {
  let sub = subscribePipeline(
    10,
    {
      async onReady() {
        sub.stop();
        let events = await getEvents();
        test.equal(events, ['input: 10', 'complete: 20'])
        done();
      }
    });
});
