import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs'
import { User } from '../models/user'
import { Video } from '../models/video'

@Injectable({
  providedIn: 'root'
})
export class VideoService {

    constructor(private httpService: HttpClient) {}

    getAllVideos(): Observable<Video[]> {
        return this.httpService.get<Video[]>(`http://localhost:3000/videos/all`)
    }    

    getSingleVideo(id: number): Observable<Video> {
      return this.httpService.get<Video>(`http://localhost:3000/videos/single/` + id)
    } 
    
    uploadVideo(video: Video): Observable<Video> {
      return this.httpService.post<Video>(`http://localhost:3000/videos/upload`, video)
    }  
}
