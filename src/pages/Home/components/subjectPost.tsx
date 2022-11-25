interface Props {
  hour: string;
  subject: string;
  teacher: string;
}

const SubjectPost = ({ hour, subject, teacher }: Props) => {
  return (
    <li className="bg-white w-full flex-wrap justify-between h-1/3 rounded-md mx-1 grid grid-rows-1 grid-cols-3">
      <div className="justify-center items-center flex col-span-1">
        <img src="/images/relogio-icon-laranja.png" alt="" className="w-5 h-7 pt-2" />
        <h1 className="pt-2 pl-1.5"> - {hour}</h1>
      </div>
      <div className="pl-2 border-l-2 my-2 flex-col flex border-slate-600 justify-center items-center col-span-2">
        <div className="text-xl justify-center items-center flex p-1">
          <h1>{subject}</h1>
        </div>
        <div className="justify-center items-center flex flex-row">
          <img src="/images/teacher-icon.png" className="w-3 h-4 mr-2" alt="" />
          <h1 className="text-sm">{teacher}</h1>
        </div>
      </div>
    </li>
  );
};

export default SubjectPost;
