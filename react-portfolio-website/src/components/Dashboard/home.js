import { useRef } from 'react';
// use firebase to improve workflows & making updates easier!
import { auth, storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc } from 'firebase/firestore'; // DO NOT IMPORT FROM firebase/firestore/lite
import { collection } from 'firebase/firestore'; // DO NOT IMPORT FROM firebase/firestore/lite
import { useNavigate } from 'react-router-dom';

// Logged in user page


const Home = () => {
     const form = useRef();  // target input elements
     const navigate = useNavigate(); // navigate object from react-router-dom


    const submitPortfolio = (e) => {
        e.preventDefault(); // doesn't submit the form by default
        const name = form.current[0]?.value;     
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const image = form.current[3]?.files[0];
        // `form.current[]?.value` syntax used in JavaScript, specifically in React, to access the 
        // value of the first input field of a form using its index.
        // The `?` operator is the optional chaining operator, which allows you 
        // to safely access properties of an object that might be undefined without causing an error.  
        // console.log(name, description, url, image);       

        const storageRef = ref(storage, `portfolio/${image.name}`);  

    //     console.log(name, description, url, image, storageRef);

        uploadBytes(storageRef, image).then( // upload successful
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {  // successful start downloading
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: downloadUrl
                    })
                }, (error) => {
                    console.log(error);
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: null
                    })
                })
            }, (error) => {
                console.log(error);
                savePortfolio({
                    name,
                    description,
                    url,
                    image: null
                })
            }
        )
 }

    const savePortfolio = async (portfolio) => {
        console.log(portfolio);
        try {
            await addDoc(collection(db, 'portfolio'), portfolio);
            window.location.reload(false);
          } catch (error) {
            alert('Failed to add portfolio');
          }
    }

    const handleSignOut = () => {
        auth.signOut()
          .then(() => navigate('/login'))  // navigate user to '/login' after sign out is successful
          .catch((error) => {
            console.log(error);
          });
      }    

    return (
        <div className="dashboard">

            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type="text" placeholder="Name" /></p>
                <p><textarea placeholder="Description" /></p>
                <p><input type="text" placeholder="Url" /></p>
                <p><input type="file" placeholder="Image" style={{ color: "whitesmoke" }} /></p>
                <button type="submit">Submit</button>
                <button onClick={handleSignOut}>Sign out</button>
            </form>
        </div>
    )
}

export default Home;