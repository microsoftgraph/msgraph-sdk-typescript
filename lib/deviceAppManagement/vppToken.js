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
exports.VppToken = void 0;
var entity_1 = require("../entity");
var VppToken = /** @class */ (function (_super) {
    __extends(VppToken, _super);
    /**
     * Instantiates a new vppToken and sets the default values.
     */
    function VppToken() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(VppToken.prototype, "appleId", {
        /**
         * Gets the appleId property value. The apple Id associated with the given Apple Volume Purchase Program Token.
         * @returns a string
         */
        get: function () {
            return this._appleId;
        },
        /**
         * Sets the appleId property value. The apple Id associated with the given Apple Volume Purchase Program Token.
         * @param value Value to set for the appleId property.
         */
        set: function (value) {
            this._appleId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VppToken.prototype, "automaticallyUpdateApps", {
        /**
         * Gets the automaticallyUpdateApps property value. Whether or not apps for the VPP token will be automatically updated.
         * @returns a boolean
         */
        get: function () {
            return this._automaticallyUpdateApps;
        },
        /**
         * Sets the automaticallyUpdateApps property value. Whether or not apps for the VPP token will be automatically updated.
         * @param value Value to set for the automaticallyUpdateApps property.
         */
        set: function (value) {
            this._automaticallyUpdateApps = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VppToken.prototype, "countryOrRegion", {
        /**
         * Gets the countryOrRegion property value. Whether or not apps for the VPP token will be automatically updated.
         * @returns a string
         */
        get: function () {
            return this._countryOrRegion;
        },
        /**
         * Sets the countryOrRegion property value. Whether or not apps for the VPP token will be automatically updated.
         * @param value Value to set for the countryOrRegion property.
         */
        set: function (value) {
            this._countryOrRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VppToken.prototype, "expirationDateTime", {
        /**
         * Gets the expirationDateTime property value. The expiration date time of the Apple Volume Purchase Program Token.
         * @returns a Date
         */
        get: function () {
            return this._expirationDateTime;
        },
        /**
         * Sets the expirationDateTime property value. The expiration date time of the Apple Volume Purchase Program Token.
         * @param value Value to set for the expirationDateTime property.
         */
        set: function (value) {
            this._expirationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VppToken.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. Last modification date time associated with the Apple Volume Purchase Program Token.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. Last modification date time associated with the Apple Volume Purchase Program Token.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VppToken.prototype, "lastSyncDateTime", {
        /**
         * Gets the lastSyncDateTime property value. The last time when an application sync was done with the Apple volume purchase program service using the the Apple Volume Purchase Program Token.
         * @returns a Date
         */
        get: function () {
            return this._lastSyncDateTime;
        },
        /**
         * Sets the lastSyncDateTime property value. The last time when an application sync was done with the Apple volume purchase program service using the the Apple Volume Purchase Program Token.
         * @param value Value to set for the lastSyncDateTime property.
         */
        set: function (value) {
            this._lastSyncDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VppToken.prototype, "lastSyncStatus", {
        /**
         * Gets the lastSyncStatus property value. Current sync status of the last application sync which was triggered using the Apple Volume Purchase Program Token. Possible values are: none, inProgress, completed, failed. Possible values are: none, inProgress, completed, failed.
         * @returns a vppTokenSyncStatus
         */
        get: function () {
            return this._lastSyncStatus;
        },
        /**
         * Sets the lastSyncStatus property value. Current sync status of the last application sync which was triggered using the Apple Volume Purchase Program Token. Possible values are: none, inProgress, completed, failed. Possible values are: none, inProgress, completed, failed.
         * @param value Value to set for the lastSyncStatus property.
         */
        set: function (value) {
            this._lastSyncStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VppToken.prototype, "organizationName", {
        /**
         * Gets the organizationName property value. The organization associated with the Apple Volume Purchase Program Token
         * @returns a string
         */
        get: function () {
            return this._organizationName;
        },
        /**
         * Sets the organizationName property value. The organization associated with the Apple Volume Purchase Program Token
         * @param value Value to set for the organizationName property.
         */
        set: function (value) {
            this._organizationName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VppToken.prototype, "state", {
        /**
         * Gets the state property value. Current state of the Apple Volume Purchase Program Token. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM, duplicateLocationId.
         * @returns a vppTokenState
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value. Current state of the Apple Volume Purchase Program Token. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM, duplicateLocationId.
         * @param value Value to set for the state property.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VppToken.prototype, "token", {
        /**
         * Gets the token property value. The Apple Volume Purchase Program Token string downloaded from the Apple Volume Purchase Program.
         * @returns a string
         */
        get: function () {
            return this._token;
        },
        /**
         * Sets the token property value. The Apple Volume Purchase Program Token string downloaded from the Apple Volume Purchase Program.
         * @param value Value to set for the token property.
         */
        set: function (value) {
            this._token = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VppToken.prototype, "vppTokenAccountType", {
        /**
         * Gets the vppTokenAccountType property value. The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible values are: business, education. Possible values are: business, education.
         * @returns a vppTokenAccountType
         */
        get: function () {
            return this._vppTokenAccountType;
        },
        /**
         * Sets the vppTokenAccountType property value. The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible values are: business, education. Possible values are: business, education.
         * @param value Value to set for the vppTokenAccountType property.
         */
        set: function (value) {
            this._vppTokenAccountType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    VppToken.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appleId", function (o, n) { o.appleId = n.getStringValue(); }],
            ["automaticallyUpdateApps", function (o, n) { o.automaticallyUpdateApps = n.getBooleanValue(); }],
            ["countryOrRegion", function (o, n) { o.countryOrRegion = n.getStringValue(); }],
            ["expirationDateTime", function (o, n) { o.expirationDateTime = n.getDateValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["lastSyncDateTime", function (o, n) { o.lastSyncDateTime = n.getDateValue(); }],
            ["lastSyncStatus", function (o, n) { o.lastSyncStatus = n.getObjectValue(VppTokenSyncStatus); }],
            ["organizationName", function (o, n) { o.organizationName = n.getStringValue(); }],
            ["state", function (o, n) { o.state = n.getObjectValue(VppTokenState); }],
            ["token", function (o, n) { o.token = n.getStringValue(); }],
            ["vppTokenAccountType", function (o, n) { o.vppTokenAccountType = n.getObjectValue(VppTokenAccountType); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    VppToken.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("appleId", this.appleId);
        writer.writeBooleanValue("automaticallyUpdateApps", this.automaticallyUpdateApps);
        writer.writeStringValue("countryOrRegion", this.countryOrRegion);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        writer.writeObjectValue("lastSyncStatus", this.lastSyncStatus);
        writer.writeStringValue("organizationName", this.organizationName);
        writer.writeObjectValue("state", this.state);
        writer.writeStringValue("token", this.token);
        writer.writeObjectValue("vppTokenAccountType", this.vppTokenAccountType);
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
    ;
    ;
    ;
    return VppToken;
}(entity_1.Entity));
exports.VppToken = VppToken;
