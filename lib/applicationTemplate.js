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
exports.ApplicationTemplate = void 0;
var entity_1 = require("./entity");
var ApplicationTemplate = /** @class */ (function (_super) {
    __extends(ApplicationTemplate, _super);
    /**
     * Instantiates a new applicationTemplate and sets the default values.
     */
    function ApplicationTemplate() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ApplicationTemplate.prototype, "categories", {
        /**
         * Gets the categories property value. The list of categories for the application. Supported values can be: Collaboration, Business Management, Consumer, Content management, CRM, Data services, Developer services, E-commerce, Education, ERP, Finance, Health, Human resources, IT infrastructure, Mail, Management, Marketing, Media, Productivity, Project management, Telecommunications, Tools, Travel, and Web design & hosting.
         * @returns a string
         */
        get: function () {
            return this._categories;
        },
        /**
         * Sets the categories property value. The list of categories for the application. Supported values can be: Collaboration, Business Management, Consumer, Content management, CRM, Data services, Developer services, E-commerce, Education, ERP, Finance, Health, Human resources, IT infrastructure, Mail, Management, Marketing, Media, Productivity, Project management, Telecommunications, Tools, Travel, and Web design & hosting.
         * @param value Value to set for the categories property.
         */
        set: function (value) {
            this._categories = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApplicationTemplate.prototype, "description", {
        /**
         * Gets the description property value. A description of the application.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. A description of the application.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApplicationTemplate.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the application.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the application.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApplicationTemplate.prototype, "homePageUrl", {
        /**
         * Gets the homePageUrl property value. The home page URL of the application.
         * @returns a string
         */
        get: function () {
            return this._homePageUrl;
        },
        /**
         * Sets the homePageUrl property value. The home page URL of the application.
         * @param value Value to set for the homePageUrl property.
         */
        set: function (value) {
            this._homePageUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApplicationTemplate.prototype, "logoUrl", {
        /**
         * Gets the logoUrl property value. The URL to get the logo for this application.
         * @returns a string
         */
        get: function () {
            return this._logoUrl;
        },
        /**
         * Sets the logoUrl property value. The URL to get the logo for this application.
         * @param value Value to set for the logoUrl property.
         */
        set: function (value) {
            this._logoUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApplicationTemplate.prototype, "publisher", {
        /**
         * Gets the publisher property value. The name of the publisher for this application.
         * @returns a string
         */
        get: function () {
            return this._publisher;
        },
        /**
         * Sets the publisher property value. The name of the publisher for this application.
         * @param value Value to set for the publisher property.
         */
        set: function (value) {
            this._publisher = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApplicationTemplate.prototype, "supportedProvisioningTypes", {
        /**
         * Gets the supportedProvisioningTypes property value. The list of provisioning modes supported by this application. The only valid value is sync.
         * @returns a string
         */
        get: function () {
            return this._supportedProvisioningTypes;
        },
        /**
         * Sets the supportedProvisioningTypes property value. The list of provisioning modes supported by this application. The only valid value is sync.
         * @param value Value to set for the supportedProvisioningTypes property.
         */
        set: function (value) {
            this._supportedProvisioningTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApplicationTemplate.prototype, "supportedSingleSignOnModes", {
        /**
         * Gets the supportedSingleSignOnModes property value. The list of single sign-on modes supported by this application. The supported values are oidc, password, saml, and notSupported.
         * @returns a string
         */
        get: function () {
            return this._supportedSingleSignOnModes;
        },
        /**
         * Sets the supportedSingleSignOnModes property value. The list of single sign-on modes supported by this application. The supported values are oidc, password, saml, and notSupported.
         * @param value Value to set for the supportedSingleSignOnModes property.
         */
        set: function (value) {
            this._supportedSingleSignOnModes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ApplicationTemplate.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["categories", function (o, n) { o.categories = n.getCollectionOfPrimitiveValues(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["homePageUrl", function (o, n) { o.homePageUrl = n.getStringValue(); }],
            ["logoUrl", function (o, n) { o.logoUrl = n.getStringValue(); }],
            ["publisher", function (o, n) { o.publisher = n.getStringValue(); }],
            ["supportedProvisioningTypes", function (o, n) { o.supportedProvisioningTypes = n.getCollectionOfPrimitiveValues(); }],
            ["supportedSingleSignOnModes", function (o, n) { o.supportedSingleSignOnModes = n.getCollectionOfPrimitiveValues(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ApplicationTemplate.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfPrimitiveValues("categories", this.categories);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("homePageUrl", this.homePageUrl);
        writer.writeStringValue("logoUrl", this.logoUrl);
        writer.writeStringValue("publisher", this.publisher);
        writer.writeCollectionOfPrimitiveValues("supportedProvisioningTypes", this.supportedProvisioningTypes);
        writer.writeCollectionOfPrimitiveValues("supportedSingleSignOnModes", this.supportedSingleSignOnModes);
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
    return ApplicationTemplate;
}(entity_1.Entity));
exports.ApplicationTemplate = ApplicationTemplate;
