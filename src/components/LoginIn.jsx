import { useState } from "react";
import { useForm } from "react-hook-form";

function LoginIn() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const [correct,setCorrect] = useState('');


  

  const submit = (data) => {
    console.log(data);
setCorrect('Your data was sending!')

setTimeout(()=>{

  window.location.reload();
},4000);
    reset();
  };

  return (
    <form style={{ color: "#fff",display:'flex',flexDirection:'column',paddingBottom:'15px'}} onSubmit={handleSubmit(submit)}>
      <label style={{marginBottom:'22px'}}>📩Email</label>
      <input style={{height:'30px'}}
        {...register("email", {
            required: "You need to type something",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Type correct email,try again",
          },
          minLength: {
            value: 5,
            message: "You have to type min 5 letter",
          },
        })}
        className="inputForm"
        type="text"
        placeholder="Email"
      />
      {
        errors?.email &&<p>{errors.email.message || "Errors!"}</p>
      }
      <label style={{marginBottom:'22px'}}>🔑Password</label>
      <input style={{height:'30px'}}
        {...register("password", {
            required: "You need to enter a password",
          minLength: {
            value: 5,
            message: "You have to type min 5 letter",
          },
        })}
        type="password"
        className="inputForm"
        placeholder="Password"
      />
      {
        errors?.password && <p>{errors.password.message || 'Errors!'}</p>
      }

      {
        <div>
          {correct}
        </div>
      }
     
      <input type="submit" style={{background:'#fff',
        color:'black',marginTop:'15px',height:'30px'}}/>
    </form>
  );
}

export default LoginIn;
