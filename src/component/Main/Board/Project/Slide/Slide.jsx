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
                            <a key={index} href={link.url} target='blank'>{link.button}</a>                  
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slide;

