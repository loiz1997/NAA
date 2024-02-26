class Login
{

    txtemail = '[aria-label="Email"]';
    txtpassword = '[aria-label="Password"]';
    submitbtn = 'button[type="submit"]';

    setEmail(email){
        cy.get(this.txtemail).type(email);

    }

    setPassword(password){
        cy.get(this.txtpassword).type(password);
    }

    clickLogin(){
        cy.get(this.submitbtn).click();
    }

}

export default Login;