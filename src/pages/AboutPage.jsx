// Компонент со страницы About
import aboutImage from "../assests/images/about.jpg";

export const AboutPage = () => {
  return (
    <div className="pt-10">
      <h1 className="text-xl font-medium text-black mb-5">About Horror Movie App</h1>
      <img
        className="float-left w-1/3 mr-5 mb-1 rounded-md shadow-md"
        src={aboutImage}
        alt="about"
      />
      <p className="text-slate-500 mb-5">
      Welcome to the ultimate horror movie app! If you're a fan of spine-chilling thrills, blood-curdling screams, and heart-pounding suspense, then this is the perfect app for you. Our extensive collection of horror films spans decades, featuring classics like "Psycho," "The Exorcist," and "Night of the Living Dead," as well as modern masterpieces like "Get Out," "Hereditary," and "A Quiet Place."
      </p>
      <p className="text-slate-500 mb-5">
      With our app, you can easily browse through a wide range of horror genres, from supernatural and psychological thrillers to slasher and creature features. Whether you're in the mood for a ghostly haunting, a demonic possession, or a terrifying monster lurking in the shadows, we have something to satisfy every horror aficionado's craving.
      </p>
      <p className="text-slate-500 mb-5">
      Not only can you watch your favorite horror movies on the go, but you can also discover new releases, read reviews, and connect with fellow horror fans in our community forums. Get ready to experience the adrenaline rush of fear and the exhilaration of surviving a nightmarish encounter with our horror movie app. Are you brave enough to dive into the darkness?
      </p>
    </div>
  );
};
