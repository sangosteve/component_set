import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown, Edit, Archive, Copy, Move, Delete } from "lucide-react";
const DropdownMenuTemplate = () => {
  return (
    <div className="fixed top-16 w-48 text-right">
      <Menu as="div" className="relative">
        {/* MENU BUTTON */}
        <Menu.Button className="flex text-body-small text-gray-7 items-center py-1 px-4 border border-gray-5 rounded-md">
          Options Menu
          <ChevronDown className="w-4 h-4" />
        </Menu.Button>

        {/*MENU ITEMS  */}
        <Menu.Items className="bg-white mt-4 drop-shadow-md rounded-md w-full text-body-small absolute flex flex-col p-2">
          <li className="flex px-2 py-1 items-center justify-start text-gray-9 rounded-md hover:cursor-pointer hover:bg-gray-2">
            <Edit className="w-4 h-4  mr-2" />
            Edit
          </li>
          <li className="flex px-2 py-1 items-center justify-start text-gray-9 rounded-md hover:cursor-pointer hover:bg-gray-2">
            <Copy className="w-4 h-4 mr-2" />
            Duplicate
          </li>
          <li className="flex px-2 py-1 items-center justify-start text-gray-9 rounded-md hover:cursor-pointer hover:bg-gray-2">
            <Archive className="w-4 h-4 mr-2" />
            Archive
          </li>
          <li className="flex px-2 py-1 items-center justify-start text-gray-9 rounded-md hover:cursor-pointer hover:bg-gray-2">
            <Move className="w-4 h-4 mr-2" />
            Move
          </li>
          <li className="flex px-2 py-1 items-center justify-start text-gray-9 rounded-md hover:cursor-pointer hover:bg-gray-2">
            <Delete className="w-4 h-4 mr-2" />
            Delete
          </li>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default DropdownMenuTemplate;
