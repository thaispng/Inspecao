export default function Status({ status, backgroundColor, textColor }) {
    return (
      <div className={`${backgroundColor} font-medium text-center rounded-md w-[250px]`}>
        <div className={`status ${status.toLowerCase()} text-center font-normal ${textColor}`}> {status} </div>
      </div>
    );
  }
  