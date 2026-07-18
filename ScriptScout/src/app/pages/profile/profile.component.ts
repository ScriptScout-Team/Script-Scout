import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user = {
    fullName: 'Jagruti Bandikalla',
    email: 'jagruti@example.com',
    phone: '+91 9876543210',
    role: 'Frontend Developer',

    currentPassword: '',
    newPassword: '',

    language: 'English',
    theme: 'Light',

    notifications: true,
    autoSave: true
  };

  constructor() { }

  saveProfile(): void {

    console.log('Profile Details:', this.user);

    alert('Profile updated successfully!');

  }

  resetProfile(): void {

    this.user = {
      fullName: '',
      email: '',
      phone: '',
      role: '',

      currentPassword: '',
      newPassword: '',

      language: 'English',
      theme: 'Light',

      notifications: false,
      autoSave: false
    };

    alert('Profile has been reset.');

  }

  changePhoto(): void {

    alert('Upload Profile Picture feature will be added later.');

  }

}
