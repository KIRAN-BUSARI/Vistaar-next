import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursePage = () => {
    return (
        <div className="">
            <Link href={"/admin/create-course"}>
                <Button>
                    New Course
                </Button>
            </Link>
        </div>
    );
}

export default CoursePage;