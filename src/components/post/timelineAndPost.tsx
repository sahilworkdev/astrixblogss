"use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

import "quill/dist/quill.snow.css";
import IsolatedHTML from "./IsolatedHTML";


// const mockTimeline = [
//   { id: 1, title: "Introduction", link: "#introduction" },
//   { id: 2, title: "Background & NCPCR", link: "#background" },
//   { id: 3, title: "Key Directives", link: "#directives" },
//   { id: 4, title: "Future Implications", link: "#implications" },
//   { id: 5, title: "Conclusion", link: "#conclusion" },
// ];

// const mockPost = {
//   coverImage: "https://example.com/images/post-cover.jpg",
//   title: "Exploring the Depths of the Ocean",
//   description:
//     "A detailed dive into the mysteries and wonders of the underwater world.",
//   date: Date.now(),
//   view: 100,
//   like: 50,
//   disLike: 10,
//   content: [
//     {
//       id: "0",
//       header: "Header 1",
//       description: "Description 1",
//       lists: ["List 1 1", "List 1 2", "List 1 3"],
//       image: "Image 1",
//       content: [
//         {
//           id: "1",
//           header: "Header 1 1",
//           description: "Description 1 1",
//           lists: ["List 1 1 1", "List 1 1 2", "List 1 1 3"],
//           image: "Image 1 1",
//           content: [
//             {
//               id: "2",
//               header: "Header 1 1 1",
//               description: "Description 1 1 1",
//               lists: ["List 1 1 1 1", "List 1 1 1 2", "List 1 1 1 3"],
//               image: "Image 1 1 1",
//               content: [
//                 {
//                   id: "3",
//                   header: "Header 1 1 1 1",
//                   description: "Description 1 1 1 1",
//                   lists: ["List 1 1 1 1 1", "List 1 1 1 1 2", "List 1 1 1 1 3"],
//                   image: "Image 1 1 1 1",
//                   content: [],
//                 },
//               ],
//             },
//             {
//               id: "1dfzoo",
//               header: "New Header 1dfzoo",
//               description: "New Description",
//               lists: ["New List"],
//               image: "Image 1dfzoo",
//               content: [],
//             },
//           ],
//         },
//         {
//           id: "4",
//           header: "Header 1 2",
//           description: "Description 1 2",
//           lists: ["List 1 2 1", "List 1 2 2", "List 1 2 3"],
//           image: "Image 1 2",
//           content: [],
//         },
//         {
//           id: "vz3vhk",
//           header: "New Header vz3vhk",
//           description: "New Description",
//           lists: ["New List"],
//           image: "Image vz3vhk",
//           content: [],
//         },
//       ],
//     },
//     {
//       id: "5",
//       header: "Header 2",
//       description: "Description 2",
//       lists: ["List 2 1", "List 2 2", "List 2 3"],
//       image: "Image 2",
//       content: [
//         {
//           id: "6",
//           header: "Header 2 1",
//           description: "Description 2 1",
//           lists: ["List 2 1 1", "List 2 1 2", "List 2 1 3"],
//           image: "Image 2 1",
//           content: [
//             {
//               id: "7",
//               header: "Header 2 1 1",
//               description: "Description 2 1 1",
//               lists: ["List 2 1 1 1", "List 2 1 1 2", "List 2 1 1 3"],
//               image: "Image 2 1 1",
//               content: [
//                 {
//                   id: "50dqf",
//                   header: "New Header 50dqf",
//                   description: "New Description",
//                   lists: ["New List"],
//                   image: "Image -1",
//                   content: [],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "8",
//       header: "Header 3",
//       description: "Description 3",
//       lists: ["List 3 1", "List 3 2", "List 3 3"],
//       image: "Image 3",
//       content: [
//         {
//           id: "9",
//           header: "Header 3 1",
//           description: "Description 3 1",
//           lists: ["List 3 1 1", "List 3 1 2", "List 3 1 3"],
//           image: "Image 3 1",
//           content: [
//             {
//               id: "10",
//               header: "Header 3 1 1",
//               description: "Description 3 1 1",
//               lists: ["List 3 1 1 1", "List 3 1 1 2", "List 3 1 1 3"],
//               image: "Image 3 1 1",
//               content: [
//                 {
//                   id: "23sgis",
//                   header: "New Header 23sgis",
//                   description: "New Description",
//                   lists: ["New List"],
//                   image: "Image -1",
//                   content: [],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "5hcfz",
//       header: "New Header 5hcfz",
//       description: "New Description",
//       lists: ["New List"],
//       image: "Image 5hcfz",
//       content: [],
//     },
//   ],
// };

const TimelineAndPost = ({ html }: { html: string }) => {
  // const [activeSection, setActiveSection] = useState("");

  // useEffect(() => {
  //   const sections = document.querySelectorAll("div[id]");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     { rootMargin: "10px 0px 0px 0px", threshold: 0.5 }
  //   );

  //   sections.forEach((section) => observer.observe(section));
  //   return () => observer.disconnect();
  // }, []);

  return (
    <div className="flex justify-between w-full tablet:pb-4">
      {/* Timeline Section */}
      {/* <div className="sticky top-4 h-[calc(100vh-40rem)]  hidden mobile:block w-[36%]">
        <ul className="space-y-2 w-full px-4">
          {mockTimeline.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center w-full border-b border-grey-100"
            >
              <Link
                href={item.link}
                className={`text-xl font-medium block py-3 ${
                  activeSection === item.link.replace("#", "")
                    ? "text-blue-600"
                    : "text-grey-100"
                }`}
              >
                {item.title}
              </Link>
              <Image
                src={"/icons/arrow.svg"}
                width={14}
                height={12}
                alt="arrow icon"
              />
            </li>
          ))}
        </ul>
      </div> */}

      {/* Post Content Section */}
      <div className="px-2 mobile:px-4 tablet:px-6 overflow-y-auto w-full pt-4">
        {/* <div dangerouslySetInnerHTML={{ __html: html }} className="ql-editor" /> */}
        {/* <div className="ql-container ql-snow">
          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div> */}
        <IsolatedHTML htmlString={html} />
      </div>
    </div>
  );
};

export default TimelineAndPost;
