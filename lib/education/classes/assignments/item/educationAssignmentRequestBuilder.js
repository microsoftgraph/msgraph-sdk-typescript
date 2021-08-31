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
exports.EducationAssignmentRequestBuilder = void 0;
var educationAssignment_1 = require("../../../educationAssignment");
var categoriesRequestBuilder_1 = require("../categories/categoriesRequestBuilder");
var educationCategoryRequestBuilder_1 = require("../categories/item/educationCategoryRequestBuilder");
var microsoft_graph_publishRequestBuilder_1 = require("../microsoft/graph/publish/microsoft.graph.publishRequestBuilder");
var educationAssignmentResourceRequestBuilder_1 = require("../resources/item/educationAssignmentResourceRequestBuilder");
var resourcesRequestBuilder_1 = require("../resources/resourcesRequestBuilder");
var rubricRequestBuilder_1 = require("../rubric/rubricRequestBuilder");
var educationSubmissionRequestBuilder_1 = require("../submissions/item/educationSubmissionRequestBuilder");
var submissionsRequestBuilder_1 = require("../submissions/submissionsRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /education/classes/{educationClass-id}/assignments/{educationAssignment-id}  */
var EducationAssignmentRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new EducationAssignmentRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function EducationAssignmentRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(EducationAssignmentRequestBuilder.prototype, "categories", {
        get: function () {
            return new categoriesRequestBuilder_1.CategoriesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationAssignmentRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    EducationAssignmentRequestBuilder.prototype.publish = function () {
        return new microsoft_graph_publishRequestBuilder_1.Microsoft.graph.publishRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(EducationAssignmentRequestBuilder.prototype, "resources", {
        get: function () {
            return new resourcesRequestBuilder_1.ResourcesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationAssignmentRequestBuilder.prototype, "rubric", {
        get: function () {
            return new rubricRequestBuilder_1.RubricRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationAssignmentRequestBuilder.prototype, "submissions", {
        get: function () {
            return new submissionsRequestBuilder_1.SubmissionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.education.classes.assignments.categories collection
     * @param id Unique identifier of the item
     * @returns a EducationCategoryRequestBuilder
     */
    EducationAssignmentRequestBuilder.prototype.categoriesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new educationCategoryRequestBuilder_1.EducationCategoryRequestBuilder(this.currentPath + this.pathSegment + "/categories/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * All assignments associated with this class. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    EducationAssignmentRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * All assignments associated with this class. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    EducationAssignmentRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * All assignments associated with this class. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    EducationAssignmentRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * All assignments associated with this class. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    EducationAssignmentRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * All assignments associated with this class. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationAssignment
     */
    EducationAssignmentRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, educationAssignment_1.EducationAssignment, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * All assignments associated with this class. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    EducationAssignmentRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.education.classes.assignments.resources collection
     * @param id Unique identifier of the item
     * @returns a EducationAssignmentResourceRequestBuilder
     */
    EducationAssignmentRequestBuilder.prototype.resourcesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new educationAssignmentResourceRequestBuilder_1.EducationAssignmentResourceRequestBuilder(this.currentPath + this.pathSegment + "/resources/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.education.classes.assignments.submissions collection
     * @param id Unique identifier of the item
     * @returns a EducationSubmissionRequestBuilder
     */
    EducationAssignmentRequestBuilder.prototype.submissionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new educationSubmissionRequestBuilder_1.EducationSubmissionRequestBuilder(this.currentPath + this.pathSegment + "/submissions/" + id, this.httpCore, false);
    };
    ;
    return EducationAssignmentRequestBuilder;
}());
exports.EducationAssignmentRequestBuilder = EducationAssignmentRequestBuilder;
