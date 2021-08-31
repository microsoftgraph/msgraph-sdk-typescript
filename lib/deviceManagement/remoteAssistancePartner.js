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
exports.RemoteAssistancePartner = void 0;
var entity_1 = require("../entity");
var RemoteAssistancePartner = /** @class */ (function (_super) {
    __extends(RemoteAssistancePartner, _super);
    /**
     * Instantiates a new remoteAssistancePartner and sets the default values.
     */
    function RemoteAssistancePartner() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(RemoteAssistancePartner.prototype, "displayName", {
        /**
         * Gets the displayName property value. Display name of the partner.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Display name of the partner.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RemoteAssistancePartner.prototype, "lastConnectionDateTime", {
        /**
         * Gets the lastConnectionDateTime property value. Timestamp of the last request sent to Intune by the TEM partner.
         * @returns a Date
         */
        get: function () {
            return this._lastConnectionDateTime;
        },
        /**
         * Sets the lastConnectionDateTime property value. Timestamp of the last request sent to Intune by the TEM partner.
         * @param value Value to set for the lastConnectionDateTime property.
         */
        set: function (value) {
            this._lastConnectionDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RemoteAssistancePartner.prototype, "onboardingStatus", {
        /**
         * Gets the onboardingStatus property value. A friendly description of the current TeamViewer connector status. Possible values are: notOnboarded, onboarding, onboarded.
         * @returns a remoteAssistanceOnboardingStatus
         */
        get: function () {
            return this._onboardingStatus;
        },
        /**
         * Sets the onboardingStatus property value. A friendly description of the current TeamViewer connector status. Possible values are: notOnboarded, onboarding, onboarded.
         * @param value Value to set for the onboardingStatus property.
         */
        set: function (value) {
            this._onboardingStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RemoteAssistancePartner.prototype, "onboardingUrl", {
        /**
         * Gets the onboardingUrl property value. URL of the partner's onboarding portal, where an administrator can configure their Remote Assistance service.
         * @returns a string
         */
        get: function () {
            return this._onboardingUrl;
        },
        /**
         * Sets the onboardingUrl property value. URL of the partner's onboarding portal, where an administrator can configure their Remote Assistance service.
         * @param value Value to set for the onboardingUrl property.
         */
        set: function (value) {
            this._onboardingUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    RemoteAssistancePartner.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["lastConnectionDateTime", function (o, n) { o.lastConnectionDateTime = n.getDateValue(); }],
            ["onboardingStatus", function (o, n) { o.onboardingStatus = n.getObjectValue(RemoteAssistanceOnboardingStatus); }],
            ["onboardingUrl", function (o, n) { o.onboardingUrl = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    RemoteAssistancePartner.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastConnectionDateTime", this.lastConnectionDateTime);
        writer.writeObjectValue("onboardingStatus", this.onboardingStatus);
        writer.writeStringValue("onboardingUrl", this.onboardingUrl);
    };
    ;
    ;
    ;
    ;
    ;
    return RemoteAssistancePartner;
}(entity_1.Entity));
exports.RemoteAssistancePartner = RemoteAssistancePartner;
