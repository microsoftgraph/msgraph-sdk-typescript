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
exports.ManagedEBook = void 0;
var entity_1 = require("../entity");
var deviceInstallState_1 = require("./deviceInstallState");
var managedEBookAssignment_1 = require("./managedEBookAssignment");
var eBookInstallSummary_1 = require("./managedEBooks/installSummary/eBookInstallSummary");
var userInstallStateSummary_1 = require("./userInstallStateSummary");
var ManagedEBook = /** @class */ (function (_super) {
    __extends(ManagedEBook, _super);
    /**
     * Instantiates a new managedEBook and sets the default values.
     */
    function ManagedEBook() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ManagedEBook.prototype, "assignments", {
        /**
         * Gets the assignments property value. The list of assignments for this eBook.
         * @returns a managedEBookAssignment
         */
        get: function () {
            return this._assignments;
        },
        /**
         * Sets the assignments property value. The list of assignments for this eBook.
         * @param value Value to set for the assignments property.
         */
        set: function (value) {
            this._assignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedEBook.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The date and time when the eBook file was created.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The date and time when the eBook file was created.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedEBook.prototype, "description", {
        /**
         * Gets the description property value. Description.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Description.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedEBook.prototype, "deviceStates", {
        /**
         * Gets the deviceStates property value. The list of installation states for this eBook.
         * @returns a deviceInstallState
         */
        get: function () {
            return this._deviceStates;
        },
        /**
         * Sets the deviceStates property value. The list of installation states for this eBook.
         * @param value Value to set for the deviceStates property.
         */
        set: function (value) {
            this._deviceStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedEBook.prototype, "displayName", {
        /**
         * Gets the displayName property value. Name of the eBook.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Name of the eBook.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedEBook.prototype, "informationUrl", {
        /**
         * Gets the informationUrl property value. The more information Url.
         * @returns a string
         */
        get: function () {
            return this._informationUrl;
        },
        /**
         * Sets the informationUrl property value. The more information Url.
         * @param value Value to set for the informationUrl property.
         */
        set: function (value) {
            this._informationUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedEBook.prototype, "installSummary", {
        /**
         * Gets the installSummary property value. Mobile App Install Summary.
         * @returns a eBookInstallSummary
         */
        get: function () {
            return this._installSummary;
        },
        /**
         * Sets the installSummary property value. Mobile App Install Summary.
         * @param value Value to set for the installSummary property.
         */
        set: function (value) {
            this._installSummary = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedEBook.prototype, "largeCover", {
        /**
         * Gets the largeCover property value. Book cover.
         * @returns a mimeContent
         */
        get: function () {
            return this._largeCover;
        },
        /**
         * Sets the largeCover property value. Book cover.
         * @param value Value to set for the largeCover property.
         */
        set: function (value) {
            this._largeCover = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedEBook.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. The date and time when the eBook was last modified.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. The date and time when the eBook was last modified.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedEBook.prototype, "privacyInformationUrl", {
        /**
         * Gets the privacyInformationUrl property value. The privacy statement Url.
         * @returns a string
         */
        get: function () {
            return this._privacyInformationUrl;
        },
        /**
         * Sets the privacyInformationUrl property value. The privacy statement Url.
         * @param value Value to set for the privacyInformationUrl property.
         */
        set: function (value) {
            this._privacyInformationUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedEBook.prototype, "publishedDateTime", {
        /**
         * Gets the publishedDateTime property value. The date and time when the eBook was published.
         * @returns a Date
         */
        get: function () {
            return this._publishedDateTime;
        },
        /**
         * Sets the publishedDateTime property value. The date and time when the eBook was published.
         * @param value Value to set for the publishedDateTime property.
         */
        set: function (value) {
            this._publishedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedEBook.prototype, "publisher", {
        /**
         * Gets the publisher property value. Publisher.
         * @returns a string
         */
        get: function () {
            return this._publisher;
        },
        /**
         * Sets the publisher property value. Publisher.
         * @param value Value to set for the publisher property.
         */
        set: function (value) {
            this._publisher = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedEBook.prototype, "userStateSummary", {
        /**
         * Gets the userStateSummary property value. The list of installation states for this eBook.
         * @returns a userInstallStateSummary
         */
        get: function () {
            return this._userStateSummary;
        },
        /**
         * Sets the userStateSummary property value. The list of installation states for this eBook.
         * @param value Value to set for the userStateSummary property.
         */
        set: function (value) {
            this._userStateSummary = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ManagedEBook.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignments", function (o, n) { o.assignments = n.getCollectionOfObjectValues(managedEBookAssignment_1.ManagedEBookAssignment); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["deviceStates", function (o, n) { o.deviceStates = n.getCollectionOfObjectValues(deviceInstallState_1.DeviceInstallState); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["informationUrl", function (o, n) { o.informationUrl = n.getStringValue(); }],
            ["installSummary", function (o, n) { o.installSummary = n.getObjectValue(eBookInstallSummary_1.EBookInstallSummary); }],
            ["largeCover", function (o, n) { o.largeCover = n.getObjectValue(MimeContent); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["privacyInformationUrl", function (o, n) { o.privacyInformationUrl = n.getStringValue(); }],
            ["publishedDateTime", function (o, n) { o.publishedDateTime = n.getDateValue(); }],
            ["publisher", function (o, n) { o.publisher = n.getStringValue(); }],
            ["userStateSummary", function (o, n) { o.userStateSummary = n.getCollectionOfObjectValues(userInstallStateSummary_1.UserInstallStateSummary); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ManagedEBook.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("assignments", this.assignments);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues("deviceStates", this.deviceStates);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("informationUrl", this.informationUrl);
        writer.writeObjectValue("installSummary", this.installSummary);
        writer.writeObjectValue("largeCover", this.largeCover);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("privacyInformationUrl", this.privacyInformationUrl);
        writer.writeDateValue("publishedDateTime", this.publishedDateTime);
        writer.writeStringValue("publisher", this.publisher);
        writer.writeCollectionOfObjectValues("userStateSummary", this.userStateSummary);
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
    ;
    return ManagedEBook;
}(entity_1.Entity));
exports.ManagedEBook = ManagedEBook;
