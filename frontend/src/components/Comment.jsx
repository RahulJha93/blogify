import { format } from "timeago.js";
import Image from "../components/resuable/Image";


const Comment = () => {
  
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">

          <Image
            src={""}
            className="w-10 h-10 rounded-full object-cover"
            w="40"
          />
       
        <span className="font-medium">rahul</span>
        <span className="text-sm text-gray-500">
          28-01-2002
        </span>
       
            <span
              className="text-xs text-red-300 hover:text-red-500 cursor-pointer"
           
            >
              delete
            in progess
            </span>
         
      </div>
      <div className="mt-4">
        <p>desc</p>
      </div>
    </div>
  );
};

export default Comment;