"use client";

import React from "react";
import { Button } from "@/components/UI/button";
import { Separator } from "@/components/UI/separator";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <div className="sm:mx-auto sm:max-w-2xl flex flex-col gap-3 justify-center bg-white rounded-lg p-10  my-20 shadow-2xl shadow-secondary/50">
        <Link href="/">
          <div className="max-w-24 flex items-center justify-start gap-2 hover:text-secondary hover:-translate-x-2 transition-transform duration-300">
            <FaArrowLeftLong />
            <h2>Regresar</h2>
          </div>
        </Link>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Register to workspace
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Take a few moments to register for your companys workspace
        </p>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="mt-8 accent-secondary"
        >
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="first-name" className="font-medium">
                First name
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="first-name"
                placeholder="First name"
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="last-name" className="font-medium">
                Last name
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="last-name"
                name="last-name"
                autoComplete="last-name"
                placeholder="Last name"
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full">
              <Label htmlFor="email" className="font-medium">
                Email
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full">
              <Label htmlFor="address" className="font-medium">
                Address
              </Label>
              <Input
                type="text"
                id="address"
                name="address"
                autoComplete="street-address"
                placeholder="Address"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="city" className="font-medium">
                City
              </Label>
              <Input
                type="text"
                id="city"
                name="city"
                autoComplete="address-level2"
                placeholder="City"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="state" className="font-medium">
                State
              </Label>
              <Input
                type="text"
                id="state"
                name="state"
                autoComplete="address-level1"
                placeholder="State"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="postal-code" className="font-medium">
                Postal code
              </Label>
              <Input
                id="postal-code"
                name="postal-code"
                autoComplete="postal-code"
                placeholder="Postal code"
                className="mt-2"
              />
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-start space-x-4 mt-6">
            <Button
              variant="secondary"
              type="submit"
              className="text-white px-6 py-4"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
