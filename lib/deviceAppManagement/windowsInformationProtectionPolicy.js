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
exports.WindowsInformationProtectionPolicy = void 0;
var windowsInformationProtection_1 = require("./windowsInformationProtection");
var WindowsInformationProtectionPolicy = /** @class */ (function (_super) {
    __extends(WindowsInformationProtectionPolicy, _super);
    /**
     * Instantiates a new windowsInformationProtectionPolicy and sets the default values.
     */
    function WindowsInformationProtectionPolicy() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WindowsInformationProtectionPolicy.prototype, "daysWithoutContactBeforeUnenroll", {
        /**
         * Gets the daysWithoutContactBeforeUnenroll property value. Offline interval before app data is wiped (days)
         * @returns a integer
         */
        get: function () {
            return this._daysWithoutContactBeforeUnenroll;
        },
        /**
         * Sets the daysWithoutContactBeforeUnenroll property value. Offline interval before app data is wiped (days)
         * @param value Value to set for the daysWithoutContactBeforeUnenroll property.
         */
        set: function (value) {
            this._daysWithoutContactBeforeUnenroll = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionPolicy.prototype, "mdmEnrollmentUrl", {
        /**
         * Gets the mdmEnrollmentUrl property value. Enrollment url for the MDM
         * @returns a string
         */
        get: function () {
            return this._mdmEnrollmentUrl;
        },
        /**
         * Sets the mdmEnrollmentUrl property value. Enrollment url for the MDM
         * @param value Value to set for the mdmEnrollmentUrl property.
         */
        set: function (value) {
            this._mdmEnrollmentUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionPolicy.prototype, "minutesOfInactivityBeforeDeviceLock", {
        /**
         * Gets the minutesOfInactivityBeforeDeviceLock property value. Specifies the maximum amount of time (in minutes) allowed after the device is idle that will cause the device to become PIN or password locked.   Range is an integer X where 0 <= X <= 999.
         * @returns a integer
         */
        get: function () {
            return this._minutesOfInactivityBeforeDeviceLock;
        },
        /**
         * Sets the minutesOfInactivityBeforeDeviceLock property value. Specifies the maximum amount of time (in minutes) allowed after the device is idle that will cause the device to become PIN or password locked.   Range is an integer X where 0 <= X <= 999.
         * @param value Value to set for the minutesOfInactivityBeforeDeviceLock property.
         */
        set: function (value) {
            this._minutesOfInactivityBeforeDeviceLock = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionPolicy.prototype, "numberOfPastPinsRemembered", {
        /**
         * Gets the numberOfPastPinsRemembered property value. Integer value that specifies the number of past PINs that can be associated to a user account that can't be reused. The largest number you can configure for this policy setting is 50. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then storage of previous PINs is not required. This node was added in Windows 10, version 1511. Default is 0.
         * @returns a integer
         */
        get: function () {
            return this._numberOfPastPinsRemembered;
        },
        /**
         * Sets the numberOfPastPinsRemembered property value. Integer value that specifies the number of past PINs that can be associated to a user account that can't be reused. The largest number you can configure for this policy setting is 50. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then storage of previous PINs is not required. This node was added in Windows 10, version 1511. Default is 0.
         * @param value Value to set for the numberOfPastPinsRemembered property.
         */
        set: function (value) {
            this._numberOfPastPinsRemembered = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionPolicy.prototype, "passwordMaximumAttemptCount", {
        /**
         * Gets the passwordMaximumAttemptCount property value. The number of authentication failures allowed before the device will be wiped. A value of 0 disables device wipe functionality. Range is an integer X where 4 <= X <= 16 for desktop and 0 <= X <= 999 for mobile devices.
         * @returns a integer
         */
        get: function () {
            return this._passwordMaximumAttemptCount;
        },
        /**
         * Sets the passwordMaximumAttemptCount property value. The number of authentication failures allowed before the device will be wiped. A value of 0 disables device wipe functionality. Range is an integer X where 4 <= X <= 16 for desktop and 0 <= X <= 999 for mobile devices.
         * @param value Value to set for the passwordMaximumAttemptCount property.
         */
        set: function (value) {
            this._passwordMaximumAttemptCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionPolicy.prototype, "pinExpirationDays", {
        /**
         * Gets the pinExpirationDays property value. Integer value specifies the period of time (in days) that a PIN can be used before the system requires the user to change it. The largest number you can configure for this policy setting is 730. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then the user's PIN will never expire. This node was added in Windows 10, version 1511. Default is 0.
         * @returns a integer
         */
        get: function () {
            return this._pinExpirationDays;
        },
        /**
         * Sets the pinExpirationDays property value. Integer value specifies the period of time (in days) that a PIN can be used before the system requires the user to change it. The largest number you can configure for this policy setting is 730. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then the user's PIN will never expire. This node was added in Windows 10, version 1511. Default is 0.
         * @param value Value to set for the pinExpirationDays property.
         */
        set: function (value) {
            this._pinExpirationDays = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionPolicy.prototype, "pinLowercaseLetters", {
        /**
         * Gets the pinLowercaseLetters property value. Integer value that configures the use of lowercase letters in the Windows Hello for Business PIN. Default is NotAllow. Possible values are: notAllow, requireAtLeastOne, allow.
         * @returns a windowsInformationProtectionPinCharacterRequirements
         */
        get: function () {
            return this._pinLowercaseLetters;
        },
        /**
         * Sets the pinLowercaseLetters property value. Integer value that configures the use of lowercase letters in the Windows Hello for Business PIN. Default is NotAllow. Possible values are: notAllow, requireAtLeastOne, allow.
         * @param value Value to set for the pinLowercaseLetters property.
         */
        set: function (value) {
            this._pinLowercaseLetters = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionPolicy.prototype, "pinMinimumLength", {
        /**
         * Gets the pinMinimumLength property value. Integer value that sets the minimum number of characters required for the PIN. Default value is 4. The lowest number you can configure for this policy setting is 4. The largest number you can configure must be less than the number configured in the Maximum PIN length policy setting or the number 127, whichever is the lowest.
         * @returns a integer
         */
        get: function () {
            return this._pinMinimumLength;
        },
        /**
         * Sets the pinMinimumLength property value. Integer value that sets the minimum number of characters required for the PIN. Default value is 4. The lowest number you can configure for this policy setting is 4. The largest number you can configure must be less than the number configured in the Maximum PIN length policy setting or the number 127, whichever is the lowest.
         * @param value Value to set for the pinMinimumLength property.
         */
        set: function (value) {
            this._pinMinimumLength = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionPolicy.prototype, "pinSpecialCharacters", {
        /**
         * Gets the pinSpecialCharacters property value. Integer value that configures the use of special characters in the Windows Hello for Business PIN. Valid special characters for Windows Hello for Business PIN gestures include: ! ' # $ % & ' ( )  + , - . / : ; < = > ? @ [ / ] ^  ` {
         * @returns a windowsInformationProtectionPinCharacterRequirements
         */
        get: function () {
            return this._pinSpecialCharacters;
        },
        /**
         * Sets the pinSpecialCharacters property value. Integer value that configures the use of special characters in the Windows Hello for Business PIN. Valid special characters for Windows Hello for Business PIN gestures include: ! ' # $ % & ' ( )  + , - . / : ; < = > ? @ [ / ] ^  ` {
         * @param value Value to set for the pinSpecialCharacters property.
         */
        set: function (value) {
            this._pinSpecialCharacters = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionPolicy.prototype, "pinUppercaseLetters", {
        /**
         * Gets the pinUppercaseLetters property value. Integer value that configures the use of uppercase letters in the Windows Hello for Business PIN. Default is NotAllow. Possible values are: notAllow, requireAtLeastOne, allow.
         * @returns a windowsInformationProtectionPinCharacterRequirements
         */
        get: function () {
            return this._pinUppercaseLetters;
        },
        /**
         * Sets the pinUppercaseLetters property value. Integer value that configures the use of uppercase letters in the Windows Hello for Business PIN. Default is NotAllow. Possible values are: notAllow, requireAtLeastOne, allow.
         * @param value Value to set for the pinUppercaseLetters property.
         */
        set: function (value) {
            this._pinUppercaseLetters = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionPolicy.prototype, "revokeOnMdmHandoffDisabled", {
        /**
         * Gets the revokeOnMdmHandoffDisabled property value. New property in RS2, pending documentation
         * @returns a boolean
         */
        get: function () {
            return this._revokeOnMdmHandoffDisabled;
        },
        /**
         * Sets the revokeOnMdmHandoffDisabled property value. New property in RS2, pending documentation
         * @param value Value to set for the revokeOnMdmHandoffDisabled property.
         */
        set: function (value) {
            this._revokeOnMdmHandoffDisabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionPolicy.prototype, "windowsHelloForBusinessBlocked", {
        /**
         * Gets the windowsHelloForBusinessBlocked property value. Boolean value that sets Windows Hello for Business as a method for signing into Windows.
         * @returns a boolean
         */
        get: function () {
            return this._windowsHelloForBusinessBlocked;
        },
        /**
         * Sets the windowsHelloForBusinessBlocked property value. Boolean value that sets Windows Hello for Business as a method for signing into Windows.
         * @param value Value to set for the windowsHelloForBusinessBlocked property.
         */
        set: function (value) {
            this._windowsHelloForBusinessBlocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WindowsInformationProtectionPolicy.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["daysWithoutContactBeforeUnenroll", function (o, n) { o.daysWithoutContactBeforeUnenroll = n.getNumberValue(); }],
            ["mdmEnrollmentUrl", function (o, n) { o.mdmEnrollmentUrl = n.getStringValue(); }],
            ["minutesOfInactivityBeforeDeviceLock", function (o, n) { o.minutesOfInactivityBeforeDeviceLock = n.getNumberValue(); }],
            ["numberOfPastPinsRemembered", function (o, n) { o.numberOfPastPinsRemembered = n.getNumberValue(); }],
            ["passwordMaximumAttemptCount", function (o, n) { o.passwordMaximumAttemptCount = n.getNumberValue(); }],
            ["pinExpirationDays", function (o, n) { o.pinExpirationDays = n.getNumberValue(); }],
            ["pinLowercaseLetters", function (o, n) { o.pinLowercaseLetters = n.getObjectValue(WindowsInformationProtectionPinCharacterRequirements); }],
            ["pinMinimumLength", function (o, n) { o.pinMinimumLength = n.getNumberValue(); }],
            ["pinSpecialCharacters", function (o, n) { o.pinSpecialCharacters = n.getObjectValue(WindowsInformationProtectionPinCharacterRequirements); }],
            ["pinUppercaseLetters", function (o, n) { o.pinUppercaseLetters = n.getObjectValue(WindowsInformationProtectionPinCharacterRequirements); }],
            ["revokeOnMdmHandoffDisabled", function (o, n) { o.revokeOnMdmHandoffDisabled = n.getBooleanValue(); }],
            ["windowsHelloForBusinessBlocked", function (o, n) { o.windowsHelloForBusinessBlocked = n.getBooleanValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WindowsInformationProtectionPolicy.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("daysWithoutContactBeforeUnenroll", this.daysWithoutContactBeforeUnenroll);
        writer.writeStringValue("mdmEnrollmentUrl", this.mdmEnrollmentUrl);
        writer.writeNumberValue("minutesOfInactivityBeforeDeviceLock", this.minutesOfInactivityBeforeDeviceLock);
        writer.writeNumberValue("numberOfPastPinsRemembered", this.numberOfPastPinsRemembered);
        writer.writeNumberValue("passwordMaximumAttemptCount", this.passwordMaximumAttemptCount);
        writer.writeNumberValue("pinExpirationDays", this.pinExpirationDays);
        writer.writeObjectValue("pinLowercaseLetters", this.pinLowercaseLetters);
        writer.writeNumberValue("pinMinimumLength", this.pinMinimumLength);
        writer.writeObjectValue("pinSpecialCharacters", this.pinSpecialCharacters);
        writer.writeObjectValue("pinUppercaseLetters", this.pinUppercaseLetters);
        writer.writeBooleanValue("revokeOnMdmHandoffDisabled", this.revokeOnMdmHandoffDisabled);
        writer.writeBooleanValue("windowsHelloForBusinessBlocked", this.windowsHelloForBusinessBlocked);
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
    ;
    return WindowsInformationProtectionPolicy;
}(windowsInformationProtection_1.WindowsInformationProtection));
exports.WindowsInformationProtectionPolicy = WindowsInformationProtectionPolicy;
