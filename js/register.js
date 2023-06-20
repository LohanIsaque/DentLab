//função para registro 
async function registerUser(email, password, event){
    //evitar eventos padrões
    event.preventDefault();
    
    try{ //tentar
     //faz o processo de autenticação passando email e senha 
     const userCredital = await auth.createUserWithEmailAndPassword(email, password); // await = espere ; auth = objeto
     const user = userCredential.user; 

     //insere os dados no banco de daods, acessando a coleção users
     await db.collection("users").doc(user.uid).set(
           {
               email: email,
               uid: user.uid
           }
       );

       alert("Cadastro realizado com sucesso");

     }catch(error) { //pegue
      console.log(error);
    }
}

//pegar os dados do formulário e inserir na função
document.getElementById("registerButton").addEventListener("click", async (event)=>{
     
     //pega os dados do form
     const email = document.getElementById("email").value;
     const password = document.getElementById("password").value;
     const confirmPassword = document.getElementById("confirmPassword").value;

     if(password !== confirmPassword){
      alert("Senhas não são iguais");
     }
     //insere os dados na função
     registerUser(email, password, event);
} );