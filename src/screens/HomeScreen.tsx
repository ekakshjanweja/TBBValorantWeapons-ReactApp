import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { weaponsApi } from "../utils/url";
import Axios from "axios";

const HomeScreen = () => {
  const [nav, setNav] = useState(true);
  const [details, setDetails] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDetails = () => {
    setDetails(!details);
  };

  const [weaponCategory, setWeaponCategory] = useState(
    "EEquippableCategory::Sidearm"
  );
  const [weaponsData, setWeaponsData] = useState([]);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      await Axios.get(weaponsApi).then((result) => {
        console.log(result.data.data[0].displayName);
        console.log(result.data.data);
        setWeaponsData(result.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* NAVBAR       */}
      <div className="flex justify-between  items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-semibold text-[#fa4454]">
          VALORANT.
        </h1>
        <ul className="hidden md:flex">
          {/* <li
            className="p-4"
            onClick={() => {
              setWeaponCategory("All");
              handleDetails();
              console.log(details);
            }}
          >
            All
          </li> */}
          <li
            className="p-4"
            onClick={() => {
              setWeaponCategory("EEquippableCategory::Sidearm");
              handleDetails();
              console.log(details);
            }}
          >
            Sidearms
          </li>
          <li
            className="p-4"
            onClick={() => {
              setWeaponCategory("EEquippableCategory::Shotgun");
              handleDetails();
              console.log(details);
            }}
          >
            Shotgun
          </li>
          <li
            className="p-4"
            onClick={() => {
              setWeaponCategory("EEquippableCategory::SMG");
              handleDetails();
              console.log(details);
            }}
          >
            SMG
          </li>
          <li
            className="p-4"
            onClick={() => {
              setWeaponCategory("EEquippableCategory::Rifle");
              handleDetails();
              console.log(details);
            }}
          >
            Rifle
          </li>
          <li
            className="p-4 "
            onClick={() => {
              setWeaponCategory("EEquippableCategory::Heavy");
              handleDetails();
              console.log(details);
            }}
          >
            Heavy
          </li>
          <li
            className="p-4"
            onClick={() => {
              setWeaponCategory("EEquippableCategory::Sniper");
              handleDetails();
              console.log(details);
            }}
          >
            Sniper
          </li>
          <li
            className="p-4"
            onClick={() => {
              setWeaponCategory("EEquippableCategory::Melee");
              handleDetails();
              console.log(details);
            }}
          >
            Melee
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%]  h-full border-r border-r-gray-900 bg-[#0a0506] ease-in-out duration-500"
              : "fixed left-[-100%] top-0 w-[60%]  h-full border-r border-r-gray-900 bg-[#0a0506] ease-in-out duration-500"
          }
        >
          <h1 className="p-4 w-full text-3xl font-semibold text-[#fa4454] ">
            VALORANT.
          </h1>
          <ul className="pr-8 pl-8 uppercase p-4">
            {/* <li
              className="p-4 border-b border-gray-100 border-opacity-10"
              onClick={() => {
                setWeaponCategory("All");
                handleDetails();
                console.log(details);
              }}
            >
              All
            </li> */}
            <li
              className="p-4 border-b border-gray-100 border-opacity-10"
              onClick={() => {
                setWeaponCategory("EEquippableCategory::Sidearm");
                handleDetails();
                console.log(details);
              }}
            >
              Sidearms
            </li>
            <li
              className="p-4 border-b border-gray-100 border-opacity-10"
              onClick={() => {
                setWeaponCategory("EEquippableCategory::Shotgun");
                handleDetails();
                console.log(details);
              }}
            >
              Shotgun
            </li>
            <li
              className="p-4 border-b border-gray-100 border-opacity-10"
              onClick={() => {
                setWeaponCategory("EEquippableCategory::SMG");
                handleDetails();
                console.log(details);
              }}
            >
              SMG
            </li>
            <li
              className="p-4 border-b border-gray-100 border-opacity-10"
              onClick={() => {
                setWeaponCategory("EEquippableCategory::Sidearm");
                handleDetails();
                console.log(details);
              }}
            >
              Rifel
            </li>
            <li
              className="p-4 border-b border-gray-100 border-opacity-10"
              onClick={() => {
                setWeaponCategory("EEquippableCategory::Heavy");
                handleDetails();
                console.log(details);
              }}
            >
              Heavy
            </li>
            <li
              className="p-4 border-b border-gray-100 border-opacity-10"
              onClick={() => {
                setWeaponCategory("EEquippableCategory::Sniper");
                handleDetails();
                console.log(details);
              }}
            >
              Sniper
            </li>
            <li
              className="p-4 border-b border-gray-100 border-opacity-10"
              onClick={() => {
                setWeaponCategory("EEquippableCategory::Melee");
                handleDetails();
                console.log(details);
              }}
            >
              Melee
            </li>
          </ul>
        </div>
      </div>

      {/* HERO */}

      <div>
        {/* Details */}
        {!details ? (
          <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center text-center">
              <p>A 5v5 character-based tactical shooter</p>
              <h1 className=" text-[#fa4454] font-bold p-4 uppercase text-6xl tracking-widest">
                Valorant
              </h1>
              <p>A game for people who defy the limits</p>

              <button className="bg-[#fa4454] w-200px rounded-md font-medium my-6 mx-auto px-12 py-3">
                Button
              </button>
            </div>
          </div>
        ) : (
          <div className="text-white   mx-auto flex flex-col justify-center text-center">
            {weaponsData.map((weapon, index) => {
              if (
                weapon["category"] === weaponCategory &&
                weapon["category"] !== "EEquippableCategory::Melee"
              ) {
                return (
                  <div
                    className="flex justify-center py-10 "
                    onClick={() => {
                      console.log(weapon);
                    }}
                  >
                    <div className="rounded-lg shadow-lg bg-[#0f0e0e] max-w-sm  hover:bg-[#fa4454]">
                      <a href="#!">
                        <img
                          className="rounded-t-lg pt-6 px-10 "
                          src={weapon["displayIcon"]}
                          alt="error"
                        />
                      </a>
                      <div className="py-6">
                        <h5 className="text-white text-xl font-medium mb-2">
                          {weapon["displayName"]}
                        </h5>
                        <p className="text-white text-base mb-4">
                          {weapon["category"]}
                        </p>
                        <p className="text-white text-base mb-4 mx-auto">
                          Creds: {weapon["shopData"]["cost"]}
                        </p>
                        <div className="flex flex-row">
                          <p className="text-white text-base mb-4  mx-auto">
                            Fire Rate: {weapon["weaponStats"]["fireRate"]}
                          </p>
                          <p className="text-white text-base mb-4 mx-auto">
                            Magazine Capacity:{" "}
                            {weapon["weaponStats"]["magazineSize"]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return <div></div>;
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
