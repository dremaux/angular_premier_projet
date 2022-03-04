import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {


  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'test',
      description: 'blablablalba',
      imageUrl: 'https://pbs.twimg.com/profile_images/770260312104771584/WH4cU6Bg_400x400.jpg',
      createdDate: new Date(),
      snaps: 200,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'autre test',
      description: 'blablablalba',
      imageUrl: 'https://img-9gag-fun.9cache.com/photo/aDzOA7w_460s.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Lot et Garonne'
    },
    {
      id: 3,
      title: 'dernier test',
      description: 'blablablalba',
      imageUrl: 'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F176%2F903%2Fd82.jpg',
      createdDate: new Date(),
      snaps:0
    }

  ];

  getAllFaceSnaps(): FaceSnap[]{
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap){
      throw new Error('FaceSnap not found');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }


}
