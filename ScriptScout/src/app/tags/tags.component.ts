import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  tags = [
    {
      name: 'Artificial Intelligence',
      category: 'Technology',
      usage: 25
    },
    {
      name: 'Healthcare',
      category: 'Medical',
      usage: 18
    },
    {
      name: 'Machine Learning',
      category: 'Technology',
      usage: 15
    },
    {
      name: 'Cloud Computing',
      category: 'Technology',
      usage: 12
    },
    {
      name: 'Education',
      category: 'Learning',
      usage: 20
    }
  ];

  constructor() {}

  addTag(): void {

    const name = prompt('Enter Tag Name');

    if (!name || name.trim() === '') {
      return;
    }

    const category = prompt('Enter Category');

    this.tags.push({
      name: name.trim(),
      category: category ? category.trim() : 'General',
      usage: 0
    });

  }

  editTag(index: number): void {

    const updatedName = prompt(
      'Edit Tag',
      this.tags[index].name
    );

    if (updatedName && updatedName.trim() !== '') {
      this.tags[index].name = updatedName.trim();
    }

  }

  deleteTag(index: number): void {

    const confirmDelete = confirm(
      'Are you sure you want to delete this tag?'
    );

    if (confirmDelete) {
      this.tags.splice(index, 1);
    }

  }

}
