declare global {
   namespace Express {
	  interface Request {
		 authed: boolean;
         user: {
			first_name: string;
            last_name: string;
            username: string;
            password: string;
            confirm_password: string;
            email: string; 
		 }
      }
   }
}
export {};
