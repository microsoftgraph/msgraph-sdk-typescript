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
exports.EducationClassRequestBuilder = void 0;
var educationClass_1 = require("../../educationClass");
var assignmentCategoriesRequestBuilder_1 = require("../assignmentCategories/assignmentCategoriesRequestBuilder");
var educationCategoryRequestBuilder_1 = require("../assignmentCategories/item/educationCategoryRequestBuilder");
var assignmentDefaultsRequestBuilder_1 = require("../assignmentDefaults/assignmentDefaultsRequestBuilder");
var assignmentsRequestBuilder_1 = require("../assignments/assignmentsRequestBuilder");
var educationAssignmentRequestBuilder_1 = require("../assignments/item/educationAssignmentRequestBuilder");
var assignmentSettingsRequestBuilder_1 = require("../assignmentSettings/assignmentSettingsRequestBuilder");
var groupRequestBuilder_1 = require("../group/groupRequestBuilder");
var membersRequestBuilder_1 = require("../members/membersRequestBuilder");
var schoolsRequestBuilder_1 = require("../schools/schoolsRequestBuilder");
var teachersRequestBuilder_1 = require("../teachers/teachersRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /education/classes/{educationClass-id}  */
var EducationClassRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new EducationClassRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function EducationClassRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(EducationClassRequestBuilder.prototype, "assignmentCategories", {
        get: function () {
            return new assignmentCategoriesRequestBuilder_1.AssignmentCategoriesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationClassRequestBuilder.prototype, "assignmentDefaults", {
        get: function () {
            return new assignmentDefaultsRequestBuilder_1.AssignmentDefaultsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationClassRequestBuilder.prototype, "assignments", {
        get: function () {
            return new assignmentsRequestBuilder_1.AssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationClassRequestBuilder.prototype, "assignmentSettings", {
        get: function () {
            return new assignmentSettingsRequestBuilder_1.AssignmentSettingsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationClassRequestBuilder.prototype, "group", {
        get: function () {
            return new groupRequestBuilder_1.GroupRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationClassRequestBuilder.prototype, "members", {
        get: function () {
            return new membersRequestBuilder_1.MembersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationClassRequestBuilder.prototype, "schools", {
        get: function () {
            return new schoolsRequestBuilder_1.SchoolsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationClassRequestBuilder.prototype, "teachers", {
        get: function () {
            return new teachersRequestBuilder_1.TeachersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.education.classes.assignmentCategories collection
     * @param id Unique identifier of the item
     * @returns a EducationCategoryRequestBuilder
     */
    EducationClassRequestBuilder.prototype.assignmentCategoriesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new educationCategoryRequestBuilder_1.EducationCategoryRequestBuilder(this.currentPath + this.pathSegment + "/assignmentCategories/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.education.classes.assignments collection
     * @param id Unique identifier of the item
     * @returns a EducationAssignmentRequestBuilder
     */
    EducationClassRequestBuilder.prototype.assignmentsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new educationAssignmentRequestBuilder_1.EducationAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/assignments/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Delete navigation property classes for education
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    EducationClassRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Get classes from education
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    EducationClassRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update the navigation property classes in education
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    EducationClassRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Delete navigation property classes for education
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    EducationClassRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Get classes from education
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationClass
     */
    EducationClassRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, educationClass_1.EducationClass, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Update the navigation property classes in education
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    EducationClassRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return EducationClassRequestBuilder;
}());
exports.EducationClassRequestBuilder = EducationClassRequestBuilder;
