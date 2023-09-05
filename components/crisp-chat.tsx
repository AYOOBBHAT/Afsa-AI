"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("89b96545-ddfc-4203-86ef-faa215c39fd1");
  }, []);

  return null;
};
