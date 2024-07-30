import FirstScreen from 'templates/FirstScreen';
import HowItsWork from 'templates/HowItsWork';
import Comments from 'templates/Comments';
import QuestionAnswer from 'templates/QuestionAnswer';
import CommonInfo from 'templates/CommonInfo';
import SendForm from 'templates/SendForm';
import Footer from 'components/organisms/Footer';

function Home() {
   return (
      <>
         <FirstScreen />
         <HowItsWork />
         <Comments />
         <QuestionAnswer />
         <CommonInfo />
         <SendForm />
         <Footer />
      </>
   )
}

export default Home