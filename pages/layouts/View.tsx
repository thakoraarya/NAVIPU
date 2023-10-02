import {useMediaQuery} from 'usehooks-ts'
import Mobile from "@/src/Views/Mobile";
import Desktop from "@/src/Views/Desktop";

const View = () => {
    const matches = useMediaQuery('(min-width: 768px)')


    return (
        // you can set the mobile screen max width
        matches  ?  <Desktop/> : <Mobile/>

    )

}
export default View;