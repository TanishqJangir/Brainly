import axios from "axios";
import { Button } from "../../../components/ui/Button";
import toast from "react-hot-toast";


const DeleteModal = ({ onOpen, onClose, contentId, setModalOpen, onDelete }: {
  onOpen?: boolean;
  onClose: (open: boolean) => void;
  contentId: string;
  setModalOpen?: (open: boolean) => void;
  onDelete?: (id:string) => void;
}) => {

  const deleteContent = async () => {

    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`http://localhost:8000/api/v1/vault/${contentId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = response.data;

      toast.success(data.message || "Deleted the content successfully.",{
        duration: 3000,
        icon: null,
      });

      if (onDelete) {
        onDelete(contentId);
      }

      onClose(false);

      if(setModalOpen) {
        setModalOpen(false);
      }

    } catch (error: any) {

      console.error("Error deleting content:", error);
      
      error.response?.data?.message
        ? toast.error(error.response.data.message)
        : toast.error("Failed to delete content. Please try again.");
    }
  }


  if (!onOpen) return null;
  return (
    <div className="fixed inset-0 z-51 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#151515] rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col items-start">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-left w-full">Are you sure?</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 text-left w-full">
          This action cannot be undone. Do you want to proceed?
        </p>
        <div className="flex gap-4 w-full justify-end">
          <Button variant="open" onClick={() => onClose(false)} className="rounded-xl">Cancel</Button>
          <Button variant="delete" onClick={deleteContent} className="rounded-xl">Confirm</Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
