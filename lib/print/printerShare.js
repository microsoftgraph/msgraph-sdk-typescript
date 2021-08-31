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
exports.PrinterShare = void 0;
var group_1 = require("../group");
var user_1 = require("../invitations/invitedUser/user");
var printer_1 = require("./printer");
var printerBase_1 = require("./printerBase");
var PrinterShare = /** @class */ (function (_super) {
    __extends(PrinterShare, _super);
    /**
     * Instantiates a new printerShare and sets the default values.
     */
    function PrinterShare() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PrinterShare.prototype, "allowAllUsers", {
        /**
         * Gets the allowAllUsers property value. If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties.
         * @returns a boolean
         */
        get: function () {
            return this._allowAllUsers;
        },
        /**
         * Sets the allowAllUsers property value. If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties.
         * @param value Value to set for the allowAllUsers property.
         */
        set: function (value) {
            this._allowAllUsers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterShare.prototype, "allowedGroups", {
        /**
         * Gets the allowedGroups property value. The groups whose users have access to print using the printer.
         * @returns a group
         */
        get: function () {
            return this._allowedGroups;
        },
        /**
         * Sets the allowedGroups property value. The groups whose users have access to print using the printer.
         * @param value Value to set for the allowedGroups property.
         */
        set: function (value) {
            this._allowedGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterShare.prototype, "allowedUsers", {
        /**
         * Gets the allowedUsers property value. The users who have access to print using the printer.
         * @returns a user
         */
        get: function () {
            return this._allowedUsers;
        },
        /**
         * Sets the allowedUsers property value. The users who have access to print using the printer.
         * @param value Value to set for the allowedUsers property.
         */
        set: function (value) {
            this._allowedUsers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterShare.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The DateTimeOffset when the printer share was created. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The DateTimeOffset when the printer share was created. Read-only.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterShare.prototype, "printer", {
        /**
         * Gets the printer property value. The printer that this printer share is related to.
         * @returns a printer
         */
        get: function () {
            return this._printer;
        },
        /**
         * Sets the printer property value. The printer that this printer share is related to.
         * @param value Value to set for the printer property.
         */
        set: function (value) {
            this._printer = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PrinterShare.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["allowAllUsers", function (o, n) { o.allowAllUsers = n.getBooleanValue(); }],
            ["allowedGroups", function (o, n) { o.allowedGroups = n.getCollectionOfObjectValues(group_1.Group); }],
            ["allowedUsers", function (o, n) { o.allowedUsers = n.getCollectionOfObjectValues(user_1.User); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["printer", function (o, n) { o.printer = n.getObjectValue(printer_1.Printer); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PrinterShare.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("allowAllUsers", this.allowAllUsers);
        writer.writeCollectionOfObjectValues("allowedGroups", this.allowedGroups);
        writer.writeCollectionOfObjectValues("allowedUsers", this.allowedUsers);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue("printer", this.printer);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return PrinterShare;
}(printerBase_1.PrinterBase));
exports.PrinterShare = PrinterShare;
