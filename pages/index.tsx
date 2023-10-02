import LandingPage from "@/src/Views/LandingPage";
import {useUser} from "@auth0/nextjs-auth0/client";
import View from "@/pages/layouts/View";

const IndexPage = () => {

    const {user, isLoading} = useUser(); // Use useAuth0 hook to access user information
    return (
        isLoading ? <div className='w-screen h-screen bg-amber-50 text-center text-8xl'>loading</div> :
            user ? <View/> : <LandingPage/>
    )
}
export default IndexPage;