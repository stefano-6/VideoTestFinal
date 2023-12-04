

// import * as fromRouter from '@ngrx/router-store';
import * as fromStates from "../states"
import * as fromReducers from "../reducers"
import { authReducer } from "./auth.reducer";
import { videoReducer } from "./video.reducers";
import { ActionReducerMap } from "@ngrx/store";

// export const reducers: any[] = [
//   // routerReducer: fromRouter.routerReducer,
//   authReducer,
//   videoReducer
// ]

export interface State {
    //  routerReducer: fromRouter.RouterReducerState<fromStates.RouterStateUrl>
     auth: fromStates.AuthState,
     videos: fromStates.VideoState
}

export const reducers: ActionReducerMap<State> = {
    // routerReducer: fromRouter.routerReducer,
    auth: authReducer,
    videos: videoReducer
}

// export const selectRouterState = createFeatureSelector<fromRouter.RouterReducerState<fromStates.RouterStateUrl>>('routerReducer')

// export class CustomSerializer implements fromRouter.RouterStateSerializer<fromStates.RouterStateUrl> {
//     serialize(routerState: RouterStateSnapshot): fromStates.RouterStateUrl {
//         let route = routerState.root;

//         while (route.firstChild) {
//           route = route.firstChild;
//         }
    
//         const {
//           url,
//           root: { queryParams },
//         } = routerState;
//         const { params } = route;

//         return { url, queryParams, params }
//     }
// }