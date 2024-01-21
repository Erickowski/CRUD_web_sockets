export function ConnectionStatus() {
  return (
    <div>
      <p>
        Service status:
        <span className="text-green-500 ml-2">Online</span>
        <span className="text-red-600">Offline</span>
      </p>
    </div>
  );
}
