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
exports.MobileAppAssignment = void 0;
var entity_1 = require("../entity");
var MobileAppAssignment = /** @class */ (function (_super) {
    __extends(MobileAppAssignment, _super);
    /**
     * Instantiates a new mobileAppAssignment and sets the default values.
     */
    function MobileAppAssignment() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(MobileAppAssignment.prototype, "intent", {
        /**
         * Gets the intent property value. The install intent defined by the admin. Possible values are: available, required, uninstall, availableWithoutEnrollment.
         * @returns a installIntent
         */
        get: function () {
            return this._intent;
        },
        /**
         * Sets the intent property value. The install intent defined by the admin. Possible values are: available, required, uninstall, availableWithoutEnrollment.
         * @param value Value to set for the intent property.
         */
        set: function (value) {
            this._intent = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileAppAssignment.prototype, "settings", {
        /**
         * Gets the settings property value. The settings for target assignment defined by the admin.
         * @returns a mobileAppAssignmentSettings
         */
        get: function () {
            return this._settings;
        },
        /**
         * Sets the settings property value. The settings for target assignment defined by the admin.
         * @param value Value to set for the settings property.
         */
        set: function (value) {
            this._settings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileAppAssignment.prototype, "target", {
        /**
         * Gets the target property value. The target group assignment defined by the admin.
         * @returns a deviceAndAppManagementAssignmentTarget
         */
        get: function () {
            return this._target;
        },
        /**
         * Sets the target property value. The target group assignment defined by the admin.
         * @param value Value to set for the target property.
         */
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    MobileAppAssignment.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["intent", function (o, n) { o.intent = n.getObjectValue(InstallIntent); }],
            ["settings", function (o, n) { o.settings = n.getObjectValue(MobileAppAssignmentSettings); }],
            ["target", function (o, n) { o.target = n.getObjectValue(DeviceAndAppManagementAssignmentTarget); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    MobileAppAssignment.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("intent", this.intent);
        writer.writeObjectValue("settings", this.settings);
        writer.writeObjectValue("target", this.target);
    };
    ;
    ;
    ;
    ;
    return MobileAppAssignment;
}(entity_1.Entity));
exports.MobileAppAssignment = MobileAppAssignment;
