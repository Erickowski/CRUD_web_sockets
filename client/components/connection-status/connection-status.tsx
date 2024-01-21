interface IConnectionStatus {
  isOnline: boolean;
}

export function ConnectionStatus({ isOnline }: IConnectionStatus) {
  return (
    <div>
      <p>
        Service status:
        <span
          className={`${isOnline ? "text-green-500" : "text-red-600"} ml-2`}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </p>
    </div>
  );
}
