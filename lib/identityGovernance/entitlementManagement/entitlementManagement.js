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
exports.EntitlementManagement = void 0;
var entity_1 = require("../../entity");
var approval_1 = require("../appConsent/appConsentRequests/userConsentRequests/approval/approval");
var EntitlementManagement = /** @class */ (function (_super) {
    __extends(EntitlementManagement, _super);
    /**
     * Instantiates a new EntitlementManagement and sets the default values.
     */
    function EntitlementManagement() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(EntitlementManagement.prototype, "accessPackageAssignmentApprovals", {
        /**
         * Gets the accessPackageAssignmentApprovals property value.
         * @returns a approval
         */
        get: function () {
            return this._accessPackageAssignmentApprovals;
        },
        /**
         * Sets the accessPackageAssignmentApprovals property value.
         * @param value Value to set for the accessPackageAssignmentApprovals property.
         */
        set: function (value) {
            this._accessPackageAssignmentApprovals = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    EntitlementManagement.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["accessPackageAssignmentApprovals", function (o, n) { o.accessPackageAssignmentApprovals = n.getCollectionOfObjectValues(approval_1.Approval); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    EntitlementManagement.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("accessPackageAssignmentApprovals", this.accessPackageAssignmentApprovals);
    };
    ;
    ;
    return EntitlementManagement;
}(entity_1.Entity));
exports.EntitlementManagement = EntitlementManagement;
