import Content from './components/content';
import Link from './components/link';
import LinkContent from './components/linkCont';
import Profile from './components/profile'
import SocialSec from './components/socialSec';
import Footer from './components/footer';

function App() {

  const listValue = ['Zuri Team', 'Zuri Books', 'Python Books', 'Background Check for Coders', 'Design Books']
  const linkUrl = ['https://training.zuri.team/',  'http://books.zuri.team', 'https://books.zuri.team/python-for-beginners?ref_id=<Evangel>', 'https://background.zuri.team', 'https://books.zuri.team/design-rules']

  return (
    <div>
      <Content>
        <Profile/>
        <LinkContent>
          {listValue.map((listItem, i) => {
            return(
              <Link
                value = {listItem}
                path = {linkUrl[i]}
              />
            )
          })}
        </LinkContent>
        <SocialSec/>
      </Content>
      <Footer/>
    </div>

  );
}

export default App;
