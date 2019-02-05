<form #employeeForm="ngForm" (ngSubmit)="saveEmployee(employee)">
    <div class="panel-heading">
        <h3 class="panel-title">Create Employee</h3>
    </div>
    <div class="panel-body">
        <img [src]="photoPath" height="200" width="200" *ngIf="previewPhoto" />
        <div class="form-group" [class.has-error]="name.invalid && name.touched" [class.has-success]="name.valid">
            <label for="fullName" class="control-label">Full Name</label>
            <input id="fullName" required type="text" class="form-control" name="fullName" [(ngModel)]="employee.name" #name="ngModel">
            <span class="help-block" *ngIf="name.invalid && name.touched">
    Full Name is required
  </span>
        </div>
        <div class="form-group" [class.has-error]="email.invalid">
            <label for="email" class="control-label">Email</label>
            <input id="email" [required]="contactPreference.value=='email'" type="text" class="form-control" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                [(ngModel)]="employee.email" #email="ngModel" name="email">
            <span class="help-block" *ngIf="email.errors?.required">
    Email is required
  </span>
            <span class="help-block" *ngIf="email.errors?.pattern && email.touched">
    Email is Invalid
  </span>
        </div>
        <div class="form-group" [class.has-error]="phoneNumber.invalid">
            <label for="phoneNumber" class="control-label">Phone Number</label>
            <input id="phoneNumber" [required]="contactPreference.value=='phone'" #phoneNumber="ngModel" class="form-control" type="text"
                name="phoneNumber" [(ngModel)]="employee.phoneNumber">
            <span class="help-block" *ngIf="phoneNumber.errors?.required">
    Phone Number is required
  </span>
        </div>
        <div class="form-group" [class.has-error]="contactPreference.invalid">
            <label class="control-label">Contact Preference</label>
            <div class="form-control">
                <label class="radio-inline">
      <input type="radio" required #contactPreference="ngModel" name="contactPreference"
              value="email" [(ngModel)]="employee.contactPreference"> Email
    </label>
                <label class="radio-inline">
      <input type="radio" required #contactPreference="ngModel" name="contactPreference"
              value="phone" [(ngModel)]="employee.contactPreference"> Phone
    </label>
            </div>
            <span class="help-block" *ngIf="contactPreference.errors?.required">
      Contact Preference is required
  </span>
        </div>

        <div class="form-group" [class.has-error]="gender.invalid && gender.touched">
            <label class="control-label">Gender</label>
            <div class="form-control">
                <label class="radio-inline">
      <input type="radio" name="gender" required #gender="ngModel"
             value="male" [(ngModel)]="employee.gender"> Male
    </label>
                <label class="radio-inline">
      <input type="radio" name="gender" required #gender="ngModel"
             value="female" [(ngModel)]="employee.gender"> Female
    </label>
            </div>
            <span class="help-block" *ngIf="gender.errors?.required">
  Gender is required
</span>
        </div>
        <div class="form-group" [class.has-error]="isActive.invalid && isActive.touched">
            <div class="form-control">
                <label class="checkbox-inline control-label">
      <input type="checkbox" [required]="employee.isActive==null"  name="isActive"
             #isActive="ngModel" [(ngModel)]="employee.isActive">
      Is Active
    </label>
            </div>
            <span class="help-block" *ngIf="isActive.errors?.required && isActive.touched">
    Is Active is required
  </span>
        </div>

        <div class="form-group" [class.has-error]="department.touched && department.errors?.defaultSelected">
            <label for="department" class="control-label">
    Department
  </label>
            <select id="department" required #department="ngModel" name="department" [(ngModel)]="employee.department" appSelectValidator
                class="form-control">
    <!--<option disabled value="null">Select Department</option>  -->
    <option disabled value="-1">Select Department</option>
   <option *ngFor="let dept of departments" [value]="dept.id">{{dept.name}}</option>
  </select>
            <span class="help-block" *ngIf="department.touched && department.errors?.defaultSelected">
    Department is required
  </span>
        </div>

        <div class="form-group" [class.has-error]="password.touched && password.invalid">
            <label for="password" class="control-label">Password</label>
            <input id="password" required type="text" class="form-control" name="password" [(ngModel)]="employee.password" #password="ngModel">
            <span class="help-block" *ngIf="password.touched && password.errors?.required">
    Password is required
  </span>
        </div>

        <div class="form-group" [class.has-error]="confirmPassword.touched && confirmPassword.invalid">
            <label for="confirmPassword" class="control-label">Confirm Password</label>
            <input name="confirmPassword" appConfirmEqualValidator="password" required id="confirmPassword" type="text" class="form-control"
                [(ngModel)]="employee.confirmPassword" #confirmPassword="ngModel">
            <span class="help-block" *ngIf="confirmPassword.touched && confirmPassword.errors?.required">
    Confirm Password is required
  </span>
            <span class="help-block" *ngIf="confirmPassword.touched && confirmPassword.errors?.notEqual &&
          !confirmPassword.errors?.required">
    Password and Confirm Password does not match
  </span>
        </div>
        <div class="form-group">
            <label for="dateOfBirth">Date of Birth</label>
            <input id="dateOfBirth" name="dateOfBirth" [(ngModel)]="dateOfBirth" type="text" bsDatepicker class="form-control" />
        </div>
        <div class="panel-footer">
            <button class="btn btn-primary" type="submit">Save</button>
        </div>
    </div>
</form>
