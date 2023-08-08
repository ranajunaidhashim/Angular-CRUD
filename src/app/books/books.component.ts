import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private service: ApiService, private elementRef: ElementRef) {}

  headers: string[] = ['ID', 'Name', 'Age', 'Gender', 'Actions'];
  data: any[] = [];
  form: any = {
    name: '',
    age: '',
    gender: '',
  };

  ngOnInit(): void {
    this.fetchData();
    const fragment = window.location.hash;
    if (fragment === '#addbook') {
      this.toAddPerson();
    }
  }

  toAddPerson() {
    const addbooksection =
      this.elementRef.nativeElement.querySelector('#addbook');
    if (addbooksection) {
      addbooksection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toBookDetails() {
    const bookdetailsSection =
      this.elementRef.nativeElement.querySelector('#bookdetails');
    if (bookdetailsSection) {
      bookdetailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  fetchData() {
    this.service.getData().subscribe({
      next: (value) => {
        this.data = value;
      },
      error: (err) => console.log(err),
    });
  }

  savePerson() {
    if (this.form.name && this.form.age && this.form.gender) {
      if (this.form.id) {
        // Updating existing person
        this.service.updateData(this.form.id, this.form).subscribe({
          next: () => {
            console.log('Person updated successfully');
            this.form = {
              id: '',
              name: '',
              age: '',
              gender: '',
            };
            this.fetchData();
            this.toBookDetails();
          },
          error: (err) => console.log(err),
        });
      } else {
        // Adding new person
        this.service.postData(this.form).subscribe({
          next: () => {
            console.log('Person added successfully');
            this.form = {
              name: '',
              age: '',
              gender: '',
            };
            this.fetchData();
            this.toBookDetails();
          },
          error: (err) => console.log(err),
        });
      }
    } else {
      alert('Please fill the required fields.');
    }
  }

  editPerson(person: any) {
    this.form = {
      id: person.id,
      name: person.name,
      age: person.age,
      gender: person.gender,
    };

    this.toAddPerson();
  }

  deletePerson(personId: string) {
    this.service.deleteData(personId).subscribe({
      next: () => {
        this.fetchData();
      },
      error: (err) => console.log(err),
    });
  }
}
