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
exports.ResourceOperation = void 0;
var entity_1 = require("../entity");
var ResourceOperation = /** @class */ (function (_super) {
    __extends(ResourceOperation, _super);
    /**
     * Instantiates a new resourceOperation and sets the default values.
     */
    function ResourceOperation() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ResourceOperation.prototype, "actionName", {
        /**
         * Gets the actionName property value. Type of action this operation is going to perform. The actionName should be concise and limited to as few words as possible.
         * @returns a string
         */
        get: function () {
            return this._actionName;
        },
        /**
         * Sets the actionName property value. Type of action this operation is going to perform. The actionName should be concise and limited to as few words as possible.
         * @param value Value to set for the actionName property.
         */
        set: function (value) {
            this._actionName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ResourceOperation.prototype, "description", {
        /**
         * Gets the description property value. Description of the resource operation. The description is used in mouse-over text for the operation when shown in the Azure Portal.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Description of the resource operation. The description is used in mouse-over text for the operation when shown in the Azure Portal.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ResourceOperation.prototype, "resourceName", {
        /**
         * Gets the resourceName property value. Name of the Resource this operation is performed on.
         * @returns a string
         */
        get: function () {
            return this._resourceName;
        },
        /**
         * Sets the resourceName property value. Name of the Resource this operation is performed on.
         * @param value Value to set for the resourceName property.
         */
        set: function (value) {
            this._resourceName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ResourceOperation.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["actionName", function (o, n) { o.actionName = n.getStringValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["resourceName", function (o, n) { o.resourceName = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ResourceOperation.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("actionName", this.actionName);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("resourceName", this.resourceName);
    };
    ;
    ;
    ;
    ;
    return ResourceOperation;
}(entity_1.Entity));
exports.ResourceOperation = ResourceOperation;
