import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const AdminPage = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400">

            <div>
                <Link href="/">
                    <Button>
                        <LogOut className="h-4 w-4 mr-2" />
                        Back Home
                    </Button>
                </Link>
                
            </div>

            <div className="flex flex-col justify-between md:flex-row gap-4 ">
                <Link 
                    href="/admin/file-upload"
                    className="w-3/4 md:w-72 bg-white hover:bg-gray-100 p-6 rounded-md transition duration-300 transform hover:scale-105 shadow-md border border-gray-300 mb-4 md:mb-0"
                    >
                        <h2 className="md:text-lg font-semibold">File Upload</h2>
                        <p className="text-sm">Upload images of the crime scene.</p>
                </Link>

                <Link 
                    href="/admin/emails"
                    className="w-3/4 md:w-72 bg-white hover:bg-gray-100 p-6 rounded-md transition duration-300 transform hover:scale-105 shadow-md border border-gray-300 mb-4 md:mb-0"
                    >
                        <h2 className="md:text-lg font-semibold">Email and Files</h2>
                        <p className="text-sm">Send updates to the relevant informant.</p>
                </Link>

                <Link 
                    href="/admin/reports"
                    className="w-3/4 md:w-72 bg-white hover:bg-gray-100 p-6 rounded-md transition duration-300 transform hover:scale-105 shadow-md border border-gray-300 mb-4 md:mb-0"
                    >
                        <h2 className="md:text-lg font-semibold">Report</h2>
                        <p className="text-sm">Get project and database reports.</p>
                </Link>
            </div>
        </section>
    );
}
 
export default AdminPage;