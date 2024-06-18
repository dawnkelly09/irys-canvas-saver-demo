"use client";

import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Query from "@irys/query";
import { FaLock } from "react-icons/fa";

type UploadViewerProps = {
	previewURL: string; // The latter half of the URL, not including the GATEWAY address
};

const UploadViewer: React.FC<UploadViewerProps> = ({ previewURL }) => {
	console.log(`URL=https://gateway.irys.xyz/${previewURL}`);
	return (
		<div className="w-full h-full rounded-xl resize-none bg-primary object-cover flex items-center justify-center">
			<img src={`https://gateway.irys.xyz/${previewURL}`} alt="Thumbnail" />
		</div>
	);
};

export default UploadViewer;
