import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/Directory";

function Home() {

    return (
        <div>
            <Outlet></Outlet>
            <Directory />
        </div>
    );
}
export default Home;