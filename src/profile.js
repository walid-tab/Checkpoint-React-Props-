import image from './img-profil.jpg';

const GetsData  = (props) => {  
    var fullName = "Walid Tabbabi";
    var Bio ="Try Again";
    var Profession="full stack JS developer";
    const showAlert=()=> alert (`Profil user : ${fullName}`); 
    
    

    return (
        <div className="Name">
            <p className='title'>Profil</p>
            <img className="imgProfil" src={image} alt="Pic De Profil"/>
            <p className="profil name">FullName :{fullName}</p> 
            <p className="profil bio">Bio :{Bio}</p>
            <p className="profil prof">Profession :{Profession}</p>
            {showAlert()}
            
            
        </div>
        
    
    );
     
};
export default GetsData ;
