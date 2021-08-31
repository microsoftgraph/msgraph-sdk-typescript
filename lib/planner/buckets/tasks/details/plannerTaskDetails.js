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
exports.PlannerTaskDetails = void 0;
var entity_1 = require("../../../../entity");
var PlannerTaskDetails = /** @class */ (function (_super) {
    __extends(PlannerTaskDetails, _super);
    /**
     * Instantiates a new PlannerTaskDetails and sets the default values.
     */
    function PlannerTaskDetails() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PlannerTaskDetails.prototype, "checklist", {
        /**
         * Gets the checklist property value. The collection of checklist items on the task.
         * @returns a plannerChecklistItems
         */
        get: function () {
            return this._checklist;
        },
        /**
         * Sets the checklist property value. The collection of checklist items on the task.
         * @param value Value to set for the checklist property.
         */
        set: function (value) {
            this._checklist = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTaskDetails.prototype, "description", {
        /**
         * Gets the description property value. Description of the task
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Description of the task
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTaskDetails.prototype, "previewType", {
        /**
         * Gets the previewType property value. This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference. When set to automatic the displayed preview is chosen by the app viewing the task.
         * @returns a plannerPreviewType
         */
        get: function () {
            return this._previewType;
        },
        /**
         * Sets the previewType property value. This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference. When set to automatic the displayed preview is chosen by the app viewing the task.
         * @param value Value to set for the previewType property.
         */
        set: function (value) {
            this._previewType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTaskDetails.prototype, "references", {
        /**
         * Gets the references property value. The collection of references on the task.
         * @returns a plannerExternalReferences
         */
        get: function () {
            return this._references;
        },
        /**
         * Sets the references property value. The collection of references on the task.
         * @param value Value to set for the references property.
         */
        set: function (value) {
            this._references = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PlannerTaskDetails.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["checklist", function (o, n) { o.checklist = n.getObjectValue(PlannerChecklistItems); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["previewType", function (o, n) { o.previewType = n.getObjectValue(PlannerPreviewType); }],
            ["references", function (o, n) { o.references = n.getObjectValue(PlannerExternalReferences); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PlannerTaskDetails.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("checklist", this.checklist);
        writer.writeStringValue("description", this.description);
        writer.writeObjectValue("previewType", this.previewType);
        writer.writeObjectValue("references", this.references);
    };
    ;
    ;
    ;
    ;
    ;
    return PlannerTaskDetails;
}(entity_1.Entity));
exports.PlannerTaskDetails = PlannerTaskDetails;
