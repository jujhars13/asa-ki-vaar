/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const parsedUrl = new URL(window.location.href);\nconst bani = parsedUrl.searchParams.get('b') || 'asa-ki-vaar';\nconst section = Number(parsedUrl.searchParams.get('s')) || 1;\nconst validGurbani = ['asa-ki-vaar'];\n\n(function ready(fn) {\n  if (document.readyState != 'loading') {\n    initialize();\n  } else {\n    document.addEventListener('DOMContentLoaded', initialize);\n  }\n})();\n\n/**\n * setup the page and grab the next json\n */\nfunction initialize() {\n  if (!validGurbani.includes(bani)) {\n    renderError('error', `we don\\'t have ${bani}`);\n    return false;\n  }\n\n  // load gurmukhi from relevant text file\n  return fetch(`content/${bani}/${section}.txt`)\n    .then(response => {\n      if (!response.ok) {\n        throw new Error(\"HTTP error \" + response.status);\n      }\n      return response.text();\n    })\n    .then(body => {\n      let state = {\n        content: body,\n        bani,\n        section,\n      };\n      render(state);\n    })\n    .catch(err => {\n      renderError('error', JSON.stringify(err));\n    });\n}\n\n/**\n * render the Gurbani\n * @param {} state\n */\nfunction render(state) {\n  console.log(state);\n  document.getElementById('section-number').innerText = state.section;\n  document.getElementById('bani').innerText = state.content;\n}\n\n/**\n * button handlers\n */\nconst nextButtons = Array.from(document.getElementsByClassName('next-button'));\nnextButtons.forEach(el => {\n  el.addEventListener(\"click\", () => {\n    let nextSection = section + 1;\n    window.location.replace(`?b=${bani}&s=${nextSection}`);\n  });\n});\nconst prevButtons = Array.from(document.getElementsByClassName(\"prev-button\"));\nprevButtons.forEach(el => {\n\n  if (section <= 1) {\n    el.classList.add('disabled');\n  }\n  else {\n    let prevSection = section - 1;\n    el.classList.remove('disabled');\n    el.addEventListener(\"click\", () => {\n      window.location.replace(`?b=${bani}&s=${prevSection}`);\n    });\n  }\n\n});\n\n/**\n * render out errors\n *\n * @param {string} level\n * @param {string} msg\n */\nfunction renderError(level, msg) {\n  console.error(msg);\n\n  const el = document.getElementById('debug');\n  el.classList.remove('d-none');\n  el.innerText = msg;\n}\n\n\n//# sourceURL=webpack://asa-ki-vaar/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;