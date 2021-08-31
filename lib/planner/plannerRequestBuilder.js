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
exports.PlannerRequestBuilder = void 0;
var bucketsRequestBuilder_1 = require("./buckets/bucketsRequestBuilder");
var plannerBucketRequestBuilder_1 = require("./buckets/item/plannerBucketRequestBuilder");
var planner_1 = require("./planner");
var plannerPlanRequestBuilder_1 = require("./plans/item/plannerPlanRequestBuilder");
var plansRequestBuilder_1 = require("./plans/plansRequestBuilder");
var plannerTaskRequestBuilder_1 = require("./tasks/item/plannerTaskRequestBuilder");
var tasksRequestBuilder_1 = require("./tasks/tasksRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /planner  */
var PlannerRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new PlannerRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function PlannerRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/planner";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(PlannerRequestBuilder.prototype, "buckets", {
        get: function () {
            return new bucketsRequestBuilder_1.BucketsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlannerRequestBuilder.prototype, "plans", {
        get: function () {
            return new plansRequestBuilder_1.PlansRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlannerRequestBuilder.prototype, "tasks", {
        get: function () {
            return new tasksRequestBuilder_1.TasksRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.planner.buckets collection
     * @param id Unique identifier of the item
     * @returns a PlannerBucketRequestBuilder
     */
    PlannerRequestBuilder.prototype.bucketsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new plannerBucketRequestBuilder_1.PlannerBucketRequestBuilder(this.currentPath + this.pathSegment + "/buckets/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Get planner
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    PlannerRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update planner
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    PlannerRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Get planner
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Planner
     */
    PlannerRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, planner_1.Planner, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Update planner
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    PlannerRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.planner.plans collection
     * @param id Unique identifier of the item
     * @returns a PlannerPlanRequestBuilder
     */
    PlannerRequestBuilder.prototype.plansById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new plannerPlanRequestBuilder_1.PlannerPlanRequestBuilder(this.currentPath + this.pathSegment + "/plans/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.planner.tasks collection
     * @param id Unique identifier of the item
     * @returns a PlannerTaskRequestBuilder
     */
    PlannerRequestBuilder.prototype.tasksById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new plannerTaskRequestBuilder_1.PlannerTaskRequestBuilder(this.currentPath + this.pathSegment + "/tasks/" + id, this.httpCore, false);
    };
    ;
    return PlannerRequestBuilder;
}());
exports.PlannerRequestBuilder = PlannerRequestBuilder;
