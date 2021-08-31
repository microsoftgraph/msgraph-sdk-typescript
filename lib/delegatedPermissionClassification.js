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
exports.DelegatedPermissionClassification = void 0;
var entity_1 = require("./entity");
var DelegatedPermissionClassification = /** @class */ (function (_super) {
    __extends(DelegatedPermissionClassification, _super);
    /**
     * Instantiates a new delegatedPermissionClassification and sets the default values.
     */
    function DelegatedPermissionClassification() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DelegatedPermissionClassification.prototype, "classification", {
        /**
         * Gets the classification property value. The classification value being given. Possible value: low. Does not support $filter.
         * @returns a permissionClassificationType
         */
        get: function () {
            return this._classification;
        },
        /**
         * Sets the classification property value. The classification value being given. Possible value: low. Does not support $filter.
         * @param value Value to set for the classification property.
         */
        set: function (value) {
            this._classification = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DelegatedPermissionClassification.prototype, "permissionId", {
        /**
         * Gets the permissionId property value. The unique identifier (id) for the delegated permission listed in the publishedPermissionScopes collection of the servicePrincipal. Required on create. Does not support $filter.
         * @returns a string
         */
        get: function () {
            return this._permissionId;
        },
        /**
         * Sets the permissionId property value. The unique identifier (id) for the delegated permission listed in the publishedPermissionScopes collection of the servicePrincipal. Required on create. Does not support $filter.
         * @param value Value to set for the permissionId property.
         */
        set: function (value) {
            this._permissionId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DelegatedPermissionClassification.prototype, "permissionName", {
        /**
         * Gets the permissionName property value. The claim value (value) for the delegated permission listed in the publishedPermissionScopes collection of the servicePrincipal. Does not support $filter.
         * @returns a string
         */
        get: function () {
            return this._permissionName;
        },
        /**
         * Sets the permissionName property value. The claim value (value) for the delegated permission listed in the publishedPermissionScopes collection of the servicePrincipal. Does not support $filter.
         * @param value Value to set for the permissionName property.
         */
        set: function (value) {
            this._permissionName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DelegatedPermissionClassification.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["classification", function (o, n) { o.classification = n.getObjectValue(PermissionClassificationType); }],
            ["permissionId", function (o, n) { o.permissionId = n.getStringValue(); }],
            ["permissionName", function (o, n) { o.permissionName = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DelegatedPermissionClassification.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("classification", this.classification);
        writer.writeStringValue("permissionId", this.permissionId);
        writer.writeStringValue("permissionName", this.permissionName);
    };
    ;
    ;
    ;
    ;
    return DelegatedPermissionClassification;
}(entity_1.Entity));
exports.DelegatedPermissionClassification = DelegatedPermissionClassification;
