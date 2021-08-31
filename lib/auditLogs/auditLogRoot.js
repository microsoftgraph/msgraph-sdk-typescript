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
exports.AuditLogRoot = void 0;
var entity_1 = require("../entity");
var directoryAudit_1 = require("./directoryAudit");
var provisioningObjectSummary_1 = require("./provisioningObjectSummary");
var restrictedSignIn_1 = require("./restrictedSignIn");
var signIn_1 = require("./signIn");
var AuditLogRoot = /** @class */ (function (_super) {
    __extends(AuditLogRoot, _super);
    /**
     * Instantiates a new AuditLogRoot and sets the default values.
     */
    function AuditLogRoot() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AuditLogRoot.prototype, "directoryAudits", {
        /**
         * Gets the directoryAudits property value. Read-only. Nullable.
         * @returns a directoryAudit
         */
        get: function () {
            return this._directoryAudits;
        },
        /**
         * Sets the directoryAudits property value. Read-only. Nullable.
         * @param value Value to set for the directoryAudits property.
         */
        set: function (value) {
            this._directoryAudits = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuditLogRoot.prototype, "provisioning", {
        /**
         * Gets the provisioning property value.
         * @returns a provisioningObjectSummary
         */
        get: function () {
            return this._provisioning;
        },
        /**
         * Sets the provisioning property value.
         * @param value Value to set for the provisioning property.
         */
        set: function (value) {
            this._provisioning = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuditLogRoot.prototype, "restrictedSignIns", {
        /**
         * Gets the restrictedSignIns property value.
         * @returns a restrictedSignIn
         */
        get: function () {
            return this._restrictedSignIns;
        },
        /**
         * Sets the restrictedSignIns property value.
         * @param value Value to set for the restrictedSignIns property.
         */
        set: function (value) {
            this._restrictedSignIns = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuditLogRoot.prototype, "signIns", {
        /**
         * Gets the signIns property value. Read-only. Nullable.
         * @returns a signIn
         */
        get: function () {
            return this._signIns;
        },
        /**
         * Sets the signIns property value. Read-only. Nullable.
         * @param value Value to set for the signIns property.
         */
        set: function (value) {
            this._signIns = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AuditLogRoot.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["directoryAudits", function (o, n) { o.directoryAudits = n.getCollectionOfObjectValues(directoryAudit_1.DirectoryAudit); }],
            ["provisioning", function (o, n) { o.provisioning = n.getCollectionOfObjectValues(provisioningObjectSummary_1.ProvisioningObjectSummary); }],
            ["restrictedSignIns", function (o, n) { o.restrictedSignIns = n.getCollectionOfObjectValues(restrictedSignIn_1.RestrictedSignIn); }],
            ["signIns", function (o, n) { o.signIns = n.getCollectionOfObjectValues(signIn_1.SignIn); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AuditLogRoot.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("directoryAudits", this.directoryAudits);
        writer.writeCollectionOfObjectValues("provisioning", this.provisioning);
        writer.writeCollectionOfObjectValues("restrictedSignIns", this.restrictedSignIns);
        writer.writeCollectionOfObjectValues("signIns", this.signIns);
    };
    ;
    ;
    ;
    ;
    ;
    return AuditLogRoot;
}(entity_1.Entity));
exports.AuditLogRoot = AuditLogRoot;
