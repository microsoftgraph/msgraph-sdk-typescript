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
exports.ThreatAssessmentRequest = void 0;
var entity_1 = require("../entity");
var identitySet_1 = require("../identitySet");
var threatAssessmentResult_1 = require("./threatAssessmentResult");
var ThreatAssessmentRequest = /** @class */ (function (_super) {
    __extends(ThreatAssessmentRequest, _super);
    /**
     * Instantiates a new threatAssessmentRequest and sets the default values.
     */
    function ThreatAssessmentRequest() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ThreatAssessmentRequest.prototype, "category", {
        /**
         * Gets the category property value. The threat category. Possible values are: spam, phishing, malware.
         * @returns a threatCategory
         */
        get: function () {
            return this._category;
        },
        /**
         * Sets the category property value. The threat category. Possible values are: spam, phishing, malware.
         * @param value Value to set for the category property.
         */
        set: function (value) {
            this._category = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ThreatAssessmentRequest.prototype, "contentType", {
        /**
         * Gets the contentType property value. The content type of threat assessment. Possible values are: mail, url, file.
         * @returns a threatAssessmentContentType
         */
        get: function () {
            return this._contentType;
        },
        /**
         * Sets the contentType property value. The content type of threat assessment. Possible values are: mail, url, file.
         * @param value Value to set for the contentType property.
         */
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ThreatAssessmentRequest.prototype, "createdBy", {
        /**
         * Gets the createdBy property value. The threat assessment request creator.
         * @returns a identitySet
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value. The threat assessment request creator.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ThreatAssessmentRequest.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ThreatAssessmentRequest.prototype, "expectedAssessment", {
        /**
         * Gets the expectedAssessment property value. The expected assessment from submitter. Possible values are: block, unblock.
         * @returns a threatExpectedAssessment
         */
        get: function () {
            return this._expectedAssessment;
        },
        /**
         * Sets the expectedAssessment property value. The expected assessment from submitter. Possible values are: block, unblock.
         * @param value Value to set for the expectedAssessment property.
         */
        set: function (value) {
            this._expectedAssessment = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ThreatAssessmentRequest.prototype, "requestSource", {
        /**
         * Gets the requestSource property value. The source of the threat assessment request. Possible values are: user, administrator.
         * @returns a threatAssessmentRequestSource
         */
        get: function () {
            return this._requestSource;
        },
        /**
         * Sets the requestSource property value. The source of the threat assessment request. Possible values are: user, administrator.
         * @param value Value to set for the requestSource property.
         */
        set: function (value) {
            this._requestSource = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ThreatAssessmentRequest.prototype, "results", {
        /**
         * Gets the results property value. A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
         * @returns a threatAssessmentResult
         */
        get: function () {
            return this._results;
        },
        /**
         * Sets the results property value. A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
         * @param value Value to set for the results property.
         */
        set: function (value) {
            this._results = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ThreatAssessmentRequest.prototype, "status", {
        /**
         * Gets the status property value. The assessment process status. Possible values are: pending, completed.
         * @returns a threatAssessmentStatus
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. The assessment process status. Possible values are: pending, completed.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ThreatAssessmentRequest.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["category", function (o, n) { o.category = n.getObjectValue(ThreatCategory); }],
            ["contentType", function (o, n) { o.contentType = n.getObjectValue(ThreatAssessmentContentType); }],
            ["createdBy", function (o, n) { o.createdBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["expectedAssessment", function (o, n) { o.expectedAssessment = n.getObjectValue(ThreatExpectedAssessment); }],
            ["requestSource", function (o, n) { o.requestSource = n.getObjectValue(ThreatAssessmentRequestSource); }],
            ["results", function (o, n) { o.results = n.getCollectionOfObjectValues(threatAssessmentResult_1.ThreatAssessmentResult); }],
            ["status", function (o, n) { o.status = n.getObjectValue(ThreatAssessmentStatus); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ThreatAssessmentRequest.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("category", this.category);
        writer.writeObjectValue("contentType", this.contentType);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue("expectedAssessment", this.expectedAssessment);
        writer.writeObjectValue("requestSource", this.requestSource);
        writer.writeCollectionOfObjectValues("results", this.results);
        writer.writeObjectValue("status", this.status);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return ThreatAssessmentRequest;
}(entity_1.Entity));
exports.ThreatAssessmentRequest = ThreatAssessmentRequest;
