import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  image: any = null;
  @ViewChild("fileLoader") imgld: any;

  constructor() {
  }

  ngOnInit(): void {

  }

  addImage() {
    this.imgld.nativeElement.click();
  }

  subirImagen(fileInput) {
    console.log(fileInput);
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(fileInput.target.files[0]);
      console.log(reader);
      reader.onload = ((e) => {
        this.image = e.target['result'];
      });
    }
  }
}
