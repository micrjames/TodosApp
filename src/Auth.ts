export class Auth {
   private _authed: boolean;
   constructor() {
	  this._authed = false;
   }
    
   validate(cb: () => boolean) {
	  this._authed = cb();
	  if(this._authed) // this.localStorage.setItem("auth", "auth");
		 console.log("authed");
	  else throw Error("Not Validated.");
   }

   get authed(): boolean {
	  return this._authed;
   }
    
   logout() {
	  this._authed = false;
	  // this.localStorage.removeItem("auth");
	  window.location.replace("/");
   }
}
