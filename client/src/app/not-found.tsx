export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-xl mt-4">Trang bạn tìm kiếm không tồn tại.</p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Quay về trang chủ
      </a>
    </div>
  );
}
