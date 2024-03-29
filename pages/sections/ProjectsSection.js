import React from "react";
// import ch_dashboard from "/public/chazydes/ch_dashboard.png";
// import ch_item_list from "/public/chazydes/ch_item_list.png";
// import ch_item_details_page from "/public/chazydes/ch_item_details_page.png";
// import ch_transactions_list from "/public/chazydes/ch_transactions_list.png";
import gallery from "/public/zeta-retros/gallery.png";
import item_details_page from "/public/zeta-retros/item_details_page.png";
import shopping_cart_page from "/public/zeta-retros/shopping_cart_page.png";
import ImageContainer from "/components/ImageContainer";
import Link from "next/link";
// import ProjectsCarousel from "/components/ProjectsCarousel";

function ProjectsSection() {
  return (
    <div
      id="projects"
      className="projects py-16 px-10 md:px-20 lg:px-40 dark:bg-slate-800 min-h-[90vh]"
    >
      <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
      <hr className="my-4 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
      {/* <ProjectsCarousel /> */}
      <Link
        href="https://zeta-retros-server.vercel.app/products"
        className="project-1"
      >
        <h2 className="text-2xl py-1 dark:text-white ">Zeta-Retros</h2>
        <div className="all-projects-container">
          <div className="project-container">
              <ImageContainer
                imgClass={"gallery"}
                imageKey={gallery}
              />
            <h5 className="project-header">Gallery</h5>
          </div>
          <div className="project-container">
              <ImageContainer
                imgClass={"item_details_page"}
                imageKey={item_details_page}
              />
            <h5 className="project-header">Item Details Page</h5>
          </div>
          <div className="project-container">
              <ImageContainer
                imgClass={"shopping_cart_page"}
                imageKey={shopping_cart_page}
              />
            <h5 className="project-header">Shopping Cart</h5>
          </div>
        </div>
      </Link>
      
      {/* Second Project that is not deployed yet */}
      {/* <h2 className="text-2xl py-1 dark:text-white ">Chazydes</h2>
      <div className="all-projects-container">
        <div className="project-container">
          <a>
            <ImageContainer
              imgClass={"project-image"}
              imageKey={ch_dashboard}
            />
          </a>
          <h5 className="project-header">Dashboard</h5>
        </div>
        <div className="project-container">
          <a>
            <ImageContainer
              imgClass={"project-image"}
              imageKey={ch_item_list}
            />
          </a>
          <h5 className="project-header">Item List</h5>
        </div>
        <div className="project-container">
          <a>
            <ImageContainer
              imgClass={"project-image"}
              imageKey={ch_item_details_page}
            />
          </a>
          <h5 className="project-header">Details Page</h5>
        </div>
        <div className="project-container">
          <a>
            <ImageContainer
              imgClass={"project-image"}
              imageKey={ch_transactions_list}
            />
          </a>
          <h5 className="project-header">Transactions List</h5>
        </div>
      </div> */}
    </div>
  );
}

export default ProjectsSection;
