import { User } from "../../models/user"
import { Video } from 'src/app/models/video';

export interface AppState {
    auth: AuthState,
    videos: VideoState
}

export interface AuthState {
    user: User,
    loading: boolean,
    error: ErrorState | null
}

export interface VideoState {
    selectedVideo: Video | null,
    error: ErrorState | null
}

export interface ErrorState {
    header: any,
    status: any,
    statusText: any,
    url: any,
    name: any,
    message: any,
    error: any
}