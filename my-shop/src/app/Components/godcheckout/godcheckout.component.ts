import { Component, OnInit } from '@angular/core';
import { BagService } from 'src/app/services/bag.service';
import { TokenService } from 'src/app/services/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-godcheckout',
  templateUrl: './godcheckout.component.html',
  styleUrls: ['./godcheckout.component.css']
})
export class GodcheckoutComponent implements OnInit {

  profileForm: any = FormGroup
    name: FormControl = new FormControl('', [Validators.required])
    number: FormControl= new FormControl('')
    honeypot:FormControl =  new FormControl('') // we will use this to prevent spam
    message: FormControl = new FormControl('')

  ;

  // userForm:any = FormGroup;
  // name: FormControl = new FormControl("", [Validators.required]);
  // number: FormControl = new FormControl("");
	// honeypot: FormControl = new FormControl('') // we will use this to prevent spam
  // message: FormControl = new FormControl('')
  
  

  submitted: boolean = false; // show and hide the success message
	isLoading: boolean = false; // disable the submit button if we're loading
	responseMessage?: string; // the response message to show to the user

items = JSON.parse(`${localStorage.getItem('CartItems')}`)
totalAmount = JSON.parse(`${localStorage.getItem('Total')}`)
userId:any
//items: any



  constructor(private fb: FormBuilder, private http: HttpClient ,private bagService: BagService, private tokenService: TokenService, private router: Router){
    this.profileForm = this.fb.group({
      name: this.name,
      message: this.message,
      number: this.number,
      honeypot: this.honeypot,
      
    });
  }
  onSubmi() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  ngOnInit(): void {
    //console.log(this.dataForm)
    this.retrieveCheckout()
    this.items
    this.totalAmount
    console.log(this.items)
    const user = this.tokenService.getUser()
    this.userId = user.id
    
    //this.items =this.totalItems.length
  }


  retrieveCheckout(): void {
    if(!window.sessionStorage.getItem('auth-token')){
      this.router.navigate(['/login'])
    }

  }

  payWithAyoba(){
    //Since this is south african only, currency always set to ZAR TODO: use dynamic currencies
    let currency = "ZAR";
    let provider = "Ozow"
    console.log("I am here")
    window["Android"].startPayment(provider,this.totalAmount,currency,"Test123");
  }

  postToCart(){
    let pid;
    let userId = this.userId
    this.items.forEach((items:{id:any})=>{
      pid = items.id
      console.log(pid)
      this.bagService.sendToCart({pid, userId}).subscribe({
      next(data){
        console.log(data)
      },
    })
    this.clearCart()
    this.replacePage()
    })
  console.log(this.items[0].id)
  pid = this.items[0].id
  userId = this.userId  
  console.log(this.userId)
  }

  clearCart() {

    localStorage.removeItem('CartItems')
    localStorage.removeItem('Total')
    setTimeout(()=>{
      window.location.href = '/menu'
    }, 500)
    
    
    }

    replacePage(): void {
      this.router.navigate(['/Payment'])
    }

    onSubmit(): void {
      console.warn(this.profileForm.value);
      setTimeout(() => {
        //this.router.navigate(['/closing-page'])
      }, 3500);
      if (this.profileForm.status == "VALID" && this.honeypot.value == "") {
        this.profileForm.disable(); // disable the form if it's valid to disable multiple submissions
        var formData: any = new FormData();
       
        formData.append("name", this.profileForm.get("name")?.value);
        formData.append("number", this.profileForm.get("number")?.value);
         console.log(this.profileForm.value.name)
        
        this.items.map((item: any) => {
          formData.append("item", item.itemname)
          formData.append("quantity", item.quantity)
    
        })
        
        // formData.append("total", this.totalItems.name);
        
        
        
        this.isLoading = true; // sending the post request async so it's in progress
        this.submitted = false; // hide the response message on multiple submits
        this.http.post("https://script.google.com/macros/s/AKfycbwifHe-fTtnSjj5NmjBKH0tP6vXlysTpZn6zL_sqBSMWpfEucNLo6conCWv9LAyAUFK/exec", formData).subscribe({
          next: response => {
            // choose the response message
            if (response["result"] == "success") {
              this.responseMessage = "Thanks for the message! I'll get back to you soon!";
            } else {
              this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
            }
            this.profileForm.enable(); // re enable the form after a success
            this.submitted = true; // show the response message
            this.isLoading = false; // re enable the submit button
            console.log(response);
          },
          error: e => {
            this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
            this.profileForm.enable(); // re enable the form after a success
            this.submitted = true; // show the response message
            this.isLoading = false; // re enable the submit button
            console.log(e);
          }}
        );
      }
    }
}

