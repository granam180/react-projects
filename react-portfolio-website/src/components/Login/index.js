import { useState, useEffect } from 'react';
import { signInWithGoogle, auth } from '../../firebase';

const Login = () => {
    // return (
    //     <div className="dashboard">
    //         <button className='log' onClick={signInWithGoogle}>
    //             Sign in with google
    //         </button>
    //     </div>
    // )

    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if (userAuth) {
          // User is signed in
          setUser(userAuth);
        } else {
          // User is signed out
          setUser(null);
        }
      });
  
      return unsubscribe;
    }, []);
  
    const handleSignInWithGoogle = async () => {
      try {
        await signInWithGoogle();
      } catch (error) {
        console.log(error);
      }
    }
  
    return (
      <div className="dashboard">
        {user ?
          <p>You are signed in as {user.email}</p>
          :
          <button className='log' onClick={handleSignInWithGoogle}>
            Sign in with Google
          </button>
        }
      </div>
    );    
}

export default Login;