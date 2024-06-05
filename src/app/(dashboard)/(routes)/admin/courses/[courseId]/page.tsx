import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
const CourseIdPage = async ({ params }: {
    params: { courseId: string }
}) => {
    const { userId } = auth();
    if (!userId) {
        return new Response("Unauthorized", { status: 401 });
    }
    const course = await db.course.findUnique({
        where: {
            id: params.courseId
        }
    })
    return (
        <div>
            Course Id: {params.courseId}
        </div >
    );
}

export default CourseIdPage;