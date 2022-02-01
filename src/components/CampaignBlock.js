import HorizontalScroll from 'react-scroll-horizontal';
import copy from '../images/copy.png';
import download from '../images/download.png';

function CampaignBlock({camp}) {

  const { campaign_icon_url: icon, campaign_name: name, id, medias, pay_per_install: payedInstalls } = camp;

  return (
    <>
      <div className='title-wrapper'>
        <div className='title'>
          <img src={icon} alt='media icon' className='icon' />
          <div className='title-desc-wrapper'>
            <div style={{fontWeight: 'bold'}}>{name}</div>
            <div style={{color: 'green'}}>{payedInstalls} per install</div>
          </div>
        </div>
      </div>
      <div className='media-wrapper'>
        <div className='container-react-scroll'>
          <HorizontalScroll>
          {medias.map((child, index) => {
            return (
              <div key={index} >
               <video className='video' controls>
                <source src={child} />
               </video>
               <div  className='video-buttons'>
               </div>
              </div>
            )
          })}
          </HorizontalScroll>
        </div>
      </div>
    </>
  )

}

export default CampaignBlock;