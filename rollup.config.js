/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */


import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const copyRight = `/**
* -------------------------------------------------------------------------------------------
* Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
* See License in the project root for license information.
* -------------------------------------------------------------------------------------------
*/`;

const config = [
	// {
	// 	input: ["lib/src/models/index.js"],
	// 	output: {
	// 		file: "lib/models-js.js",
	// 		format: "es",
	// 		name: "MicrosoftGraph",
	// 	},
	// 	plugins: [
	// 		resolve({
	// 			browser: true,
	// 			preferBuiltins: false,
	// 		}),
	// 		commonjs({ include: "node_modules/**" })
	// 	],
	// },
    // {
	// 	input: ["lib/src/models/userImpl.js"],
	// 	output: {
	// 		file: "lib/user-js.js",
	// 		format: "es",
	// 		name: "MicrosoftGraph",
	// 	},
	// 	plugins: [
	// 		resolve({
	// 			browser: true,
	// 			preferBuiltins: false,
	// 		}),
	// 		commonjs({ include: "node_modules/**" })
	// 	],
	// },
    {
		input: ["lib/tests/userTests.js"],
		output: {
			file: "lib/userTest-js.js",
			format: "es",
			name: "MicrosoftGraph",
		},
		plugins: [
			resolve({
				browser: true,
				preferBuiltins: false,
			}),
			commonjs({ include: "node_modules/**" })
		],
	}
];

export default config;
