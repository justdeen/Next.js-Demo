"use client"

import {useTheme} from "@/components/theme-provider"
import { clientSideFunction } from "@/utils/client-utils";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ClientRoutePage(){
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <>
      <h1 style={{ color: theme.colors.secondary }}>Client router page</h1>
      <p>{result}</p>
    </>
  );
    // const result = serverSideFunction();
    // return <h1>Client Route {result}</h1>
}