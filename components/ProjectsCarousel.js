import React from "react";
import { Carousel } from "react-responsive-carousel";
import ch_dashboard from "../public/chazydes/ch_dashboard.png";
import ch_item_list from "../public/chazydes/ch_item_list.png";
import ch_item_details_page from "../public/chazydes/ch_item_details_page.png";
import ch_add_transaction from "../public/chazydes/ch_add_transaction.png";
import ch_transaction_details from "../public/chazydes/ch_transaction_details.png";
import ch_transactions_list from "../public/chazydes/ch_transactions_list.png";
import Image from "next/image";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProjectsCarousel() {
  return (
    <Carousel showArrows="true" showThumbs={false}>
      <div className="tech-stack sc1 shadow-lg p-10 rounded-xl dark:bg-white">
        <div className="tech-stack-details">
          <div className="tech-stack-details-header">
            <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
              Chazydes
            </h2>
            <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
              Item Inventory System
            </h3>
            <div style={{ display: "flex" }}>
              <div className="vue-section">
                <div className="screenshot-img">
                  <Image
                    src={ch_dashboard}
                    alt="ch_dashboard"
                    priority={true}
                  />
                </div>
                <h4 className="screenshot-label text-center dark:text-teal-600">
                  Dashboard
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-stack sc2 shadow-lg p-10 rounded-xl dark:bg-white">
        <div>
          <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
            Chazydes
          </h2>
          <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
            Item Inventory System
          </h3>
          <div style={{ display: "flex" }}>
            <div className="vue-section">
              <div className="screenshot-img">
                <Image src={ch_item_list} alt="ch_item_list" priority={true} />
              </div>
              <h4 className="screenshot-label text-center dark:text-teal-600">
                Item List
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-stack sc3 shadow-lg p-10 rounded-xl dark:bg-white">
        <div>
          <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
            Chazydes
          </h2>
          <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
            Item Inventory System
          </h3>
          <div style={{ display: "flex" }}>
            <div className="vue-section">
              <div className="screenshot-img">
                <Image
                  src={ch_item_details_page}
                  alt="ch_item_details_page"
                  priority={true}
                />
              </div>
              <h4 className="screenshot-label md:text-xs text-center dark:text-teal-600">
                Item Details Page
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-stack sc4 shadow-lg p-10 rounded-xl dark:bg-white">
        <div>
          <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
            Chazydes
          </h2>
          <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
            Item Inventory System
          </h3>
          <div style={{ display: "flex" }}>
            <div className="vue-section">
              <div className="screenshot-img">
                <Image
                  src={ch_add_transaction}
                  alt="ch_add_transaction"
                  priority={true}
                />
              </div>
              <h4 className="screenshot-label text-center dark:text-teal-600">
                Add Transaction
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-stack sc5 shadow-lg p-10 rounded-xl dark:bg-white">
        <div>
          <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
            Chazydes
          </h2>
          <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
            Item Inventory System
          </h3>
          <div style={{ display: "flex" }}>
            <div className="vue-section">
              <div className="screenshot-img">
                <Image
                  src={ch_transaction_details}
                  alt="ch_transaction_details"
                  priority={true}
                />
              </div>
              <h4 className="screenshot-label text-center dark:text-teal-600">
                Transaction Details
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-stack sc6 shadow-lg p-10 rounded-xl dark:bg-white">
        <div>
          <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
            Chazydes
          </h2>
          <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
            Item Inventory System
          </h3>
          <div style={{ display: "flex" }}>
            <div className="vue-section">
              <div className="screenshot-img">
                <Image
                  src={ch_transactions_list}
                  alt="ch_transactions_list"
                  priority={true}
                />
              </div>
              <h4 className="screenshot-label text-center dark:text-teal-600">
                Transactions List
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-stack sc7 shadow-lg p-10 rounded-xl dark:bg-white">
        <div>
          <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
            Chazydes
          </h2>
          <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
            Item Inventory System
          </h3>
          <div style={{ display: "flex" }}>
            <div className="vue-section">
              <div className="screenshot-img">
                <ReactPlayer
                  className="react-player fixed-bottom"
                  url="videos/add-chopsticks-item.mp4"
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
              <h4 className="screenshot-label text-center dark:text-teal-600">
                Add Item Demo
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-stack sc8 shadow-lg p-10 rounded-xl dark:bg-white">
        <div>
          <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
            Chazydes
          </h2>
          <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
            Item Inventory System
          </h3>
          <div style={{ display: "flex" }}>
            <div className="vue-section">
              <div className="screenshot-img">
                <ReactPlayer
                  className="react-player fixed-bottom"
                  url="videos/items-out-of-stock.mp4"
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
              <h4 className="screenshot-label text-center dark:text-teal-600">
                Check Quantity of Items Demo
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-stack sc9 shadow-lg p-10 rounded-xl dark:bg-white">
        <div>
          <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
            Chazydes
          </h2>
          <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
            Item Inventory System
          </h3>
          <div style={{ display: "flex" }}>
            <div className="vue-section">
              <div className="screenshot-img">
                <ReactPlayer
                  className="react-player fixed-bottom"
                  url="videos/add-transaction.mp4"
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
              <h4 className="screenshot-label text-center dark:text-teal-600">
                Add Transaction Demo
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default ProjectsCarousel;
