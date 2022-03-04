import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  nomButtom!: string;
  b1: boolean = false;

  constructor(private faceSnapsService: FaceSnapService, private router: Router) {}

  ngOnInit(): void {
      this.nomButtom = 'like'
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

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}
