import { Component } from '@angular/core';
import { Counsellor } from '../items/counsellor';

@Component({
  selector: 'app-counselling',
  templateUrl: './counselling.component.html',
  styleUrls: ['./counselling.component.css']
})
export class CounsellingComponent{
  counsellors: Counsellor[]
  constructor() {
    this.counsellors = [
      {
        id: "ab56xDfjh",
        img_src: "../../assets/images/counsellor1.jpeg",
        name: "Dr. Albert Bandura",
        location: "Chicago, USA",
        phone_no: "+1 505-644-8999",
        email: "albertb@gmail.com",
        rating: "★★★★★",
        desc: "Dr. Albert has five years of experience in counselling people affected by FGM"
      },
      {
        id: "qw12eRtyu",
        img_src: "../../assets/images/counsellor2.jpeg",
        name: "Dr. Susan Carey",
        location: "London, UK",
        phone_no: "+44 7457 195385",
        email: "scarey@gmail.com",
        rating: "★★★☆☆",
        desc: "Dr. Susan has six years of experience in counselling people affected by FGM"
      },
      {
        id: "as34dFghj",
        img_src: "../../assets/images/counsellor3.jpeg",
        name: "Dr.Andrew Meltzoff",
        location: "Lagos, NIG",
        phone_no: "+234 702 872 0227",
        email: "andrewzoff@gmail.com",
        rating: "★★★★☆",
        desc: "Dr. Andrew has two years of experience in counselling people affected by FGM"
      }
    ]
  }
  ngOnInit(): void {}
}
