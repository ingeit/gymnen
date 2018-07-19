import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  image: any = null;
  formulario: FormGroup;
  @ViewChild("fileLoader") imgld: any;

  constructor(private fBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formulario = this.fBuilder.group({
      nombreForm: [ null, [ Validators.required ] ],
      descripcionForm: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  submitFormulario(): void {
    for (const i in this.formulario.controls) {
      this.formulario.controls[i].markAsDirty();
      this.formulario.controls[i].updateValueAndValidity();
    }
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
