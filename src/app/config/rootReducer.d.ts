declare const rootReducer: import("redux").Reducer<{
    cats: import("../../entities/Cats/lib/types").CatsState;
}, import("redux").UnknownAction, Partial<{
    cats: import("../../entities/Cats/lib/types").CatsState | undefined;
}>>;
export default rootReducer;
