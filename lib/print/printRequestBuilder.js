"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintRequestBuilder = void 0;
var connectorsRequestBuilder_1 = require("./connectors/connectorsRequestBuilder");
var printConnectorRequestBuilder_1 = require("./connectors/item/printConnectorRequestBuilder");
var printOperationRequestBuilder_1 = require("./operations/item/printOperationRequestBuilder");
var operationsRequestBuilder_1 = require("./operations/operationsRequestBuilder");
var print_1 = require("./print");
var printerRequestBuilder_1 = require("./printers/item/printerRequestBuilder");
var printersRequestBuilder_1 = require("./printers/printersRequestBuilder");
var printServiceRequestBuilder_1 = require("./services/item/printServiceRequestBuilder");
var servicesRequestBuilder_1 = require("./services/servicesRequestBuilder");
var printerShareRequestBuilder_1 = require("./shares/item/printerShareRequestBuilder");
var sharesRequestBuilder_1 = require("./shares/sharesRequestBuilder");
var printTaskDefinitionRequestBuilder_1 = require("./taskDefinitions/item/printTaskDefinitionRequestBuilder");
var taskDefinitionsRequestBuilder_1 = require("./taskDefinitions/taskDefinitionsRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /print  */
var PrintRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new PrintRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function PrintRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/print";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(PrintRequestBuilder.prototype, "connectors", {
        get: function () {
            return new connectorsRequestBuilder_1.ConnectorsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrintRequestBuilder.prototype, "operations", {
        get: function () {
            return new operationsRequestBuilder_1.OperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrintRequestBuilder.prototype, "printers", {
        get: function () {
            return new printersRequestBuilder_1.PrintersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrintRequestBuilder.prototype, "services", {
        get: function () {
            return new servicesRequestBuilder_1.ServicesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrintRequestBuilder.prototype, "shares", {
        get: function () {
            return new sharesRequestBuilder_1.SharesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrintRequestBuilder.prototype, "taskDefinitions", {
        get: function () {
            return new taskDefinitionsRequestBuilder_1.TaskDefinitionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.print.connectors collection
     * @param id Unique identifier of the item
     * @returns a PrintConnectorRequestBuilder
     */
    PrintRequestBuilder.prototype.connectorsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new printConnectorRequestBuilder_1.PrintConnectorRequestBuilder(this.currentPath + this.pathSegment + "/connectors/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Get print
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    PrintRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Update print
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    PrintRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Get print
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Print
     */
    PrintRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, print_1.Print, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.print.operations collection
     * @param id Unique identifier of the item
     * @returns a PrintOperationRequestBuilder
     */
    PrintRequestBuilder.prototype.operationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new printOperationRequestBuilder_1.PrintOperationRequestBuilder(this.currentPath + this.pathSegment + "/operations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Update print
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    PrintRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.print.printers collection
     * @param id Unique identifier of the item
     * @returns a PrinterRequestBuilder
     */
    PrintRequestBuilder.prototype.printersById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new printerRequestBuilder_1.PrinterRequestBuilder(this.currentPath + this.pathSegment + "/printers/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.print.services collection
     * @param id Unique identifier of the item
     * @returns a PrintServiceRequestBuilder
     */
    PrintRequestBuilder.prototype.servicesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new printServiceRequestBuilder_1.PrintServiceRequestBuilder(this.currentPath + this.pathSegment + "/services/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.print.shares collection
     * @param id Unique identifier of the item
     * @returns a PrinterShareRequestBuilder
     */
    PrintRequestBuilder.prototype.sharesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new printerShareRequestBuilder_1.PrinterShareRequestBuilder(this.currentPath + this.pathSegment + "/shares/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.print.taskDefinitions collection
     * @param id Unique identifier of the item
     * @returns a PrintTaskDefinitionRequestBuilder
     */
    PrintRequestBuilder.prototype.taskDefinitionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new printTaskDefinitionRequestBuilder_1.PrintTaskDefinitionRequestBuilder(this.currentPath + this.pathSegment + "/taskDefinitions/" + id, this.httpCore, false);
    };
    ;
    return PrintRequestBuilder;
}());
exports.PrintRequestBuilder = PrintRequestBuilder;
