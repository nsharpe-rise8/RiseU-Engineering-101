// jest.setup.ts
import "react";
import "@testing-library/jest-dom";
window.HTMLElement.prototype.scrollIntoView = function () {};
