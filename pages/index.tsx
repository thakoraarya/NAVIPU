import LandingPage from "@/src/Views/LandingPage";
import {useUser} from "@auth0/nextjs-auth0/client";
import View from "@/pages/layouts/View";

const IndexPage = () => {

    const {user, isLoading} = useUser(); // Use useAuth0 hook to access user information
    return (
        isLoading ? <div>loading</div> :
            user ? <View/> : <LandingPage/>
    )
}
export default IndexPage;