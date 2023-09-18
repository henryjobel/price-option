
import { FaCloudsmith } from "react-icons/fa";

const Feature = ({feature}) => {
    const {features} = feature
    return (
        <div className="ml-2 pb-2">
            <h3 className="flex items-center gap-1"><FaCloudsmith className="text-red-700"></FaCloudsmith> {feature}</h3>
        </div>
    );
};

export default Feature;