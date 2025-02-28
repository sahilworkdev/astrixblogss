"use client";

export default function ErrorPage(error: Error) {
  console.log("error is >>>>>>>>>>>>>>>>>>>>>>", error);
  return (
    <main className=" w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-20 gap-4">
        <div className="text-5xl font-medium ">Ooops!</div>
        <p className="text-3xl font-medium">Something went wrong!</p>
      </div>
    </main>
  );
}
