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
exports.ChangeTrackedEntity = void 0;
var entity_1 = require("../entity");
var identitySet_1 = require("../identitySet");
var ChangeTrackedEntity = /** @class */ (function (_super) {
    __extends(ChangeTrackedEntity, _super);
    /**
     * Instantiates a new changeTrackedEntity and sets the default values.
     */
    function ChangeTrackedEntity() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ChangeTrackedEntity.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChangeTrackedEntity.prototype, "lastModifiedBy", {
        /**
         * Gets the lastModifiedBy property value. Identity of the person who last modified the entity.
         * @returns a identitySet
         */
        get: function () {
            return this._lastModifiedBy;
        },
        /**
         * Sets the lastModifiedBy property value. Identity of the person who last modified the entity.
         * @param value Value to set for the lastModifiedBy property.
         */
        set: function (value) {
            this._lastModifiedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChangeTrackedEntity.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ChangeTrackedEntity.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["lastModifiedBy", function (o, n) { o.lastModifiedBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ChangeTrackedEntity.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
    };
    ;
    ;
    ;
    ;
    return ChangeTrackedEntity;
}(entity_1.Entity));
exports.ChangeTrackedEntity = ChangeTrackedEntity;
