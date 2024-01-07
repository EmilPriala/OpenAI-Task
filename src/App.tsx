import { FC } from 'react';
import { useId, useState } from 'react';

import './style.css';
import UserForm from './components/UserForm/UserForm';
import Ad from './components/Ad/Ad';
import { chatRequest } from './services/chat-ai';
import { imageRequest } from './services/image-ai';

export const App: FC<{ name: string }> = ({ name }) => {
  
  const [selectedAd, setSelectedAd] = useState('Instagram');
  const handleOptionChange = newSelectedAd => {
    setSelectedAd(newSelectedAd);
  }

  const handleFormSubmit = async description => {
      const response = await chatRequest(description);
      // const response = await imageRequest(description, selectedAd === "Twitter" ? "1024x1024" : "1792x1024");
      alert(response);
  }

  return (
    <div className='container'>
      <UserForm onOptionChange = { handleOptionChange } onFormSubmit={ handleFormSubmit }></UserForm>
      
      <div className="overflow">
          { selectedAd === "Instagram" &&
            <Ad width="500px" height="500px" text="Instagram" link="https://some-url.com"
                imageWidth="500px" imageHeight="285px" button="Call to Action"></Ad>
          }
          { selectedAd === "Twitter" &&
            <Ad width="1500px" height="500px" text="Twitter" link="https://some-url.com"
                imageWidth="500px" imageHeight="500px" button="Call to Action"></Ad>
          }
          { selectedAd === "Story" &&
            <Ad width="1080px" height="1920px" text="Story" link="https://some-url.com"
                imageWidth="1080px" imageHeight="617px" button="Call to Action"></Ad>
          }
      </div>
    </div>
  );
};
