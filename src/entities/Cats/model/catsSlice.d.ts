import { Cats } from "../lib/types";
export declare const fetchCatsStart: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"cats/fetchCatsStart">, fetchCatsSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<Cats[], "cats/fetchCatsSuccess">, fetchCatsFailure: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "cats/fetchCatsFailure">, saveRemainingCats: import("@reduxjs/toolkit").ActionCreatorWithPayload<Cats[], "cats/saveRemainingCats">, incrementPage: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"cats/incrementPage">, toggleFavorite: import("@reduxjs/toolkit").ActionCreatorWithPayload<Cats, "cats/toggleFavorite">;
declare const _default: import("redux").Reducer<import("../lib/types").CatsState>;
export default _default;
