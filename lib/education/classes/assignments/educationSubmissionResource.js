"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.EducationSubmissionResource = void 0;
var entity_1 = require("../../../entity");
var EducationSubmissionResource = /** @class */ (function (_super) {
    __extends(EducationSubmissionResource, _super);
    /**
     * Instantiates a new educationSubmissionResource and sets the default values.
     */
    function EducationSubmissionResource() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(EducationSubmissionResource.prototype, "assignmentResourceUrl", {
        /**
         * Gets the assignmentResourceUrl property value. Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource.
         * @returns a string
         */
        get: function () {
            return this._assignmentResourceUrl;
        },
        /**
         * Sets the assignmentResourceUrl property value. Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource.
         * @param value Value to set for the assignmentResourceUrl property.
         */
        set: function (value) {
            this._assignmentResourceUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSubmissionResource.prototype, "resource", {
        /**
         * Gets the resource property value. Resource object.
         * @returns a educationResource
         */
        get: function () {
            return this._resource;
        },
        /**
         * Sets the resource property value. Resource object.
         * @param value Value to set for the resource property.
         */
        set: function (value) {
            this._resource = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    EducationSubmissionResource.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignmentResourceUrl", function (o, n) { o.assignmentResourceUrl = n.getStringValue(); }],
            ["resource", function (o, n) { o.resource = n.getObjectValue(EducationResource); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    EducationSubmissionResource.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("assignmentResourceUrl", this.assignmentResourceUrl);
        writer.writeObjectValue("resource", this.resource);
    };
    ;
    ;
    ;
    return EducationSubmissionResource;
}(entity_1.Entity));
exports.EducationSubmissionResource = EducationSubmissionResource;
