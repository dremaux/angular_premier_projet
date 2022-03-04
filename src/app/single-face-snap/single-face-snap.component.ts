import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  nomButtom!: string;
  b1: boolean = false;

  constructor(private faceSnapsService: FaceSnapService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.nomButtom = 'like';
      const faceSnapId = +this.route.snapshot.params['id'];
      this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(){
    if(this.b1 == false){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.b1=true;
      this.nomButtom = 'dislike';
    }else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.b1=false;
      this.nomButtom = 'like';
    }
  }


}
