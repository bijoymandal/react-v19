export const Pratices = () => {
    const students = [];
    return (
        <>
            <p>{students.length===0 && "No Student Found"}</p>
            <p>Number of Students: {students.length}</p>
        </>
    );
}