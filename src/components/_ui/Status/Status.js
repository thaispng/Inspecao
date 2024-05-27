export default function Status({ status, backgroundColor, textColor }) {
  const statusColors = {
      "Em andamento": {
          background: "bg-blue-100",
          text: "text-blue-500",
      },
      "Concluida": {
          background: "bg-green-100",
          text: "text-green-500",
      },
      "Pendente": {
          background: "bg-yellow-100",
          text: "text-yellow-500",
      },
      "Cancelada": {
          background: "bg-red-100",
          text: "text-red-500",
      },
  };

  const { background, text } = statusColors[status] || {};

  return (
      <div className={`${background} font-medium text-center rounded-md w-[250px]`}>
          <div className={`status ${status.toLowerCase()} text-center font-normal ${text}`}>{status}</div>
      </div>
  );
}