import type { Subscription } from 'meteor/meteor';

export interface SubscriptionCallbacks {
  onStop?: (err?: any) => void,
  onReady?: () => void
}

export interface PipelineContext<T> {
  originalInput: T,
  type: 'method' | 'publication',
  name: string | null;
  onError: (err: any) => any;
  onResult: (result: any) => void;
  stop: () => void;
}

export interface CreateMethodPipeline<I, This = Meteor.MethodThisType> {
  <R1>(fn1: (this: This, input: I, context: PipelineContext<I>) => R1): (...args: I extends undefined ? [] : [I]) => Promise<R1>;
  <R1, R2>(fn1: (this: This, input: I, context: PipelineContext<I>) => R1, fn2: (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2,): (...args: I extends undefined ? [] : [I]) => Promise<R2>;
  <R1, R2, R3>(fn1: (this: This, input: I, context: PipelineContext<I>) => R1, fn2: (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2, fn3: (this: This, input: Awaited<R2>, context: PipelineContext<I>) => R3): (...args: I extends undefined ? [] : [I]) => Promise<R3>;
  <R1, R2, R3, R4>(fn1: (this: This, input: I, context: PipelineContext<I>) => R1, fn2: (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2, fn3: (this: This, input: Awaited<R2>, context: PipelineContext<I>) => R3, fn4: (this: This, input: Awaited<R3>, context: PipelineContext<I>) => R4): (...args: I extends undefined ? [] : [I]) => Promise<R4>;
  <R1, R2, R3, R4, R5>(fn1: (this: This, input: I, context: PipelineContext<I>) => R1, fn2: (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2, fn3: (this: This, input: Awaited<R2>, context: PipelineContext<I>) => R3, fn4: (this: This, input: Awaited<R3>, context: PipelineContext<I>) => R4, fn5: (this: This, input: Awaited<R4>, context: PipelineContext<I>) => R5): (...args: I extends undefined ? [] : [I]) => Promise<R5>;
  <R1, R2, R3, R4, R5, R6>(fn1: (this: This, input: I, context: PipelineContext<I>) => R1, fn2: (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2, fn3: (this: This, input: Awaited<R2>, context: PipelineContext<I>) => R3, fn4: (this: This, input: Awaited<R3>, context: PipelineContext<I>) => R4, fn5: (this: This, input: Awaited<R4>, context: PipelineContext<I>) => R5, fn6: (this: This, input: Awaited<R5>, context: PipelineContext<I>) => R6): (...args: I extends undefined ? [] : [I]) => Promise<R6>;
  <R1, R2, R3, R4, R5, R6, R7>(fn1: (this: This, input: I, context: PipelineContext<I>) => R1, fn2: (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2, fn3: (this: This, input: Awaited<R2>, context: PipelineContext<I>) => R3, fn4: (this: This, input: Awaited<R3>, context: PipelineContext<I>) => R4, fn5: (this: This, input: Awaited<R4>, context: PipelineContext<I>) => R5, fn6: (this: This, input: Awaited<R5>, context: PipelineContext<I>) => R6, fn7: (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R7): (...args: I extends undefined ? [] : [I]) => Promise<R7>;
  <R1, R2, R3, R4, R5, R6, R7, R8>(fn1: (this: This, input: I, context: PipelineContext<I>) => R1, fn2: (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2, fn3: (this: This, input: Awaited<R2>, context: PipelineContext<I>) => R3, fn4: (this: This, input: Awaited<R3>, context: PipelineContext<I>) => R4, fn5: (this: This, input: Awaited<R4>, context: PipelineContext<I>) => R5, fn6: (this: This, input: Awaited<R5>, context: PipelineContext<I>) => R6, fn7: (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R7, fn8: (this: This, input: Awaited<R7>, context: PipelineContext<I>) => R8): (...args: I extends undefined ? [] : [I]) => Promise<R8>;
} 

export interface CreatePubPipeline<I, This = Subscription> {
  <R1>(pipeline: [(this: This, input: I, context: PipelineContext<I>) => R1]): (...args: I extends undefined ? [] : [I]) => Promise<R1>;
  <R1, R2>(pipeline: [(this: This, input: I, context: PipelineContext<I>) => R1, (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2,]): (...args: I extends undefined ? [SubscriptionCallbacks?] : [I, SubscriptionCallbacks?]) => Meteor.SubscriptionHandle
  <R1, R2, R3>(pipeline: [(this: This, input: I, context: PipelineContext<I>) => R1, (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2, (this: This, input: Awaited<R2>, context: PipelineContext<I>) => R3]): (...args: I extends undefined ? [SubscriptionCallbacks?] : [I, SubscriptionCallbacks?]) => Meteor.SubscriptionHandle;
  <R1, R2, R3, R4>(pipeline: [(this: This, input: I, context: PipelineContext<I>) => R1, (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2, (this: This, input: Awaited<R2>, context: PipelineContext<I>) => R3, (this: This, input: Awaited<R3>, context: PipelineContext<I>) => R4]): (...args: I extends undefined ? [SubscriptionCallbacks?] : [I, SubscriptionCallbacks?]) => Meteor.SubscriptionHandle;
  <R1, R2, R3, R4, R5>(pipeline: [(this: This, input: I, context: PipelineContext<I>) => R1, (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2, (this: This, input: Awaited<R2>, context: PipelineContext<I>) => R3, (this: This, input: Awaited<R3>, context: PipelineContext<I>) => R4, (this: This, input: Awaited<R4>, context: PipelineContext<I>) => R5]): (...args: I extends undefined ? [SubscriptionCallbacks?] : [I, SubscriptionCallbacks?]) => Meteor.SubscriptionHandle;
  <R1, R2, R3, R4, R5, R6>(pipeline: [(this: This, input: I, context: PipelineContext<I>) => R1, (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2, (this: This, input: Awaited<R2>, context: PipelineContext<I>) => R3, (this: This, input: Awaited<R3>, context: PipelineContext<I>) => R4, (this: This, input: Awaited<R4>, context: PipelineContext<I>) => R5, (this: This, input: Awaited<R5>, context: PipelineContext<I>) => R6]): (...args: I extends undefined ? [SubscriptionCallbacks?] : [I, SubscriptionCallbacks?]) => Meteor.SubscriptionHandle;
  <R1, R2, R3, R4, R5, R6, R7>(pipeline: [(this: This, input: I, context: PipelineContext<I>) => R1, (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2, (this: This, input: Awaited<R2>, context: PipelineContext<I>) => R3, (this: This, input: Awaited<R3>, context: PipelineContext<I>) => R4, (this: This, input: Awaited<R4>, context: PipelineContext<I>) => R5, (this: This, input: Awaited<R5>, context: PipelineContext<I>) => R6, (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R7]): (...args: I extends undefined ? [SubscriptionCallbacks?] : [I, SubscriptionCallbacks?]) => Meteor.SubscriptionHandle;
  <R1, R2, R3, R4, R5, R6, R7, R8>(pipeline: [(this: This, input: I, context: PipelineContext<I>) => R1, (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R2, (this: This, input: Awaited<R2>, context: PipelineContext<I>) => R3, (this: This, input: Awaited<R3>, context: PipelineContext<I>) => R4, (this: This, input: Awaited<R4>, context: PipelineContext<I>) => R5, (this: This, input: Awaited<R5>, context: PipelineContext<I>) => R6, (this: This, input: Awaited<R1>, context: PipelineContext<I>) => R7, (this: This, input: Awaited<R7>, context: PipelineContext<I>) => R8]): (...args: I extends undefined ? [SubscriptionCallbacks?] : [I, SubscriptionCallbacks?]) => Meteor.SubscriptionHandle;
} 
