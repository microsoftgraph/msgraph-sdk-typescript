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
exports.MobileApp = void 0;
var entity_1 = require("../entity");
var mobileAppAssignment_1 = require("./mobileAppAssignment");
var mobileAppCategory_1 = require("./mobileAppCategory");
var MobileApp = /** @class */ (function (_super) {
    __extends(MobileApp, _super);
    /**
     * Instantiates a new mobileApp and sets the default values.
     */
    function MobileApp() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(MobileApp.prototype, "assignments", {
        /**
         * Gets the assignments property value. The list of group assignments for this mobile app.
         * @returns a mobileAppAssignment
         */
        get: function () {
            return this._assignments;
        },
        /**
         * Sets the assignments property value. The list of group assignments for this mobile app.
         * @param value Value to set for the assignments property.
         */
        set: function (value) {
            this._assignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileApp.prototype, "categories", {
        /**
         * Gets the categories property value. The list of categories for this app.
         * @returns a mobileAppCategory
         */
        get: function () {
            return this._categories;
        },
        /**
         * Sets the categories property value. The list of categories for this app.
         * @param value Value to set for the categories property.
         */
        set: function (value) {
            this._categories = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileApp.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The date and time the app was created.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The date and time the app was created.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileApp.prototype, "description", {
        /**
         * Gets the description property value. The description of the app.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. The description of the app.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileApp.prototype, "developer", {
        /**
         * Gets the developer property value. The developer of the app.
         * @returns a string
         */
        get: function () {
            return this._developer;
        },
        /**
         * Sets the developer property value. The developer of the app.
         * @param value Value to set for the developer property.
         */
        set: function (value) {
            this._developer = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileApp.prototype, "displayName", {
        /**
         * Gets the displayName property value. The admin provided or imported title of the app.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The admin provided or imported title of the app.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileApp.prototype, "informationUrl", {
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
    Object.defineProperty(MobileApp.prototype, "isFeatured", {
        /**
         * Gets the isFeatured property value. The value indicating whether the app is marked as featured by the admin.
         * @returns a boolean
         */
        get: function () {
            return this._isFeatured;
        },
        /**
         * Sets the isFeatured property value. The value indicating whether the app is marked as featured by the admin.
         * @param value Value to set for the isFeatured property.
         */
        set: function (value) {
            this._isFeatured = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileApp.prototype, "largeIcon", {
        /**
         * Gets the largeIcon property value. The large icon, to be displayed in the app details and used for upload of the icon.
         * @returns a mimeContent
         */
        get: function () {
            return this._largeIcon;
        },
        /**
         * Sets the largeIcon property value. The large icon, to be displayed in the app details and used for upload of the icon.
         * @param value Value to set for the largeIcon property.
         */
        set: function (value) {
            this._largeIcon = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileApp.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. The date and time the app was last modified.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. The date and time the app was last modified.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileApp.prototype, "notes", {
        /**
         * Gets the notes property value. Notes for the app.
         * @returns a string
         */
        get: function () {
            return this._notes;
        },
        /**
         * Sets the notes property value. Notes for the app.
         * @param value Value to set for the notes property.
         */
        set: function (value) {
            this._notes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileApp.prototype, "owner", {
        /**
         * Gets the owner property value. The owner of the app.
         * @returns a string
         */
        get: function () {
            return this._owner;
        },
        /**
         * Sets the owner property value. The owner of the app.
         * @param value Value to set for the owner property.
         */
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileApp.prototype, "privacyInformationUrl", {
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
    Object.defineProperty(MobileApp.prototype, "publisher", {
        /**
         * Gets the publisher property value. The publisher of the app.
         * @returns a string
         */
        get: function () {
            return this._publisher;
        },
        /**
         * Sets the publisher property value. The publisher of the app.
         * @param value Value to set for the publisher property.
         */
        set: function (value) {
            this._publisher = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileApp.prototype, "publishingState", {
        /**
         * Gets the publishingState property value. The publishing state for the app. The app cannot be assigned unless the app is published. Possible values are: notPublished, processing, published.
         * @returns a mobileAppPublishingState
         */
        get: function () {
            return this._publishingState;
        },
        /**
         * Sets the publishingState property value. The publishing state for the app. The app cannot be assigned unless the app is published. Possible values are: notPublished, processing, published.
         * @param value Value to set for the publishingState property.
         */
        set: function (value) {
            this._publishingState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    MobileApp.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignments", function (o, n) { o.assignments = n.getCollectionOfObjectValues(mobileAppAssignment_1.MobileAppAssignment); }],
            ["categories", function (o, n) { o.categories = n.getCollectionOfObjectValues(mobileAppCategory_1.MobileAppCategory); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["developer", function (o, n) { o.developer = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["informationUrl", function (o, n) { o.informationUrl = n.getStringValue(); }],
            ["isFeatured", function (o, n) { o.isFeatured = n.getBooleanValue(); }],
            ["largeIcon", function (o, n) { o.largeIcon = n.getObjectValue(MimeContent); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["notes", function (o, n) { o.notes = n.getStringValue(); }],
            ["owner", function (o, n) { o.owner = n.getStringValue(); }],
            ["privacyInformationUrl", function (o, n) { o.privacyInformationUrl = n.getStringValue(); }],
            ["publisher", function (o, n) { o.publisher = n.getStringValue(); }],
            ["publishingState", function (o, n) { o.publishingState = n.getObjectValue(MobileAppPublishingState); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    MobileApp.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("assignments", this.assignments);
        writer.writeCollectionOfObjectValues("categories", this.categories);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("developer", this.developer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("informationUrl", this.informationUrl);
        writer.writeBooleanValue("isFeatured", this.isFeatured);
        writer.writeObjectValue("largeIcon", this.largeIcon);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("notes", this.notes);
        writer.writeStringValue("owner", this.owner);
        writer.writeStringValue("privacyInformationUrl", this.privacyInformationUrl);
        writer.writeStringValue("publisher", this.publisher);
        writer.writeObjectValue("publishingState", this.publishingState);
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
    ;
    ;
    return MobileApp;
}(entity_1.Entity));
exports.MobileApp = MobileApp;
