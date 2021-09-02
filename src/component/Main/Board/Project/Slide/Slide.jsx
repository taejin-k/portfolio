// css
import './Slide.css';

const Slide = ({ ProjectArray }) => {

    return(
        <div className='slide'>
            <p className='name'>{ProjectArray.name}</p>
            <p className='skill'>{ProjectArray.skill}</p>
            {
                ProjectArray.desc.map((desc, index) => {
                    return (
                        <p key={index} className='desc'>{desc}</p>                  
                    )
                })
            }
            <div className='link'>
                {
                    ProjectArray.link.map((link, index) => {

                        return (
                            link.button === '서비스 종료'
                            ?   <span key={index}>{link.button}</span>               
                            :   <a key={index} href={link.button === '서비스 종료' ? '' : link.url} target='blank'>{link.button}</a>                  
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Slide;

