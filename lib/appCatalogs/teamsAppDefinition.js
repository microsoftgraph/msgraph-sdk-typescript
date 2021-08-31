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
exports.TeamsAppDefinition = void 0;
var entity_1 = require("../entity");
var identitySet_1 = require("../identitySet");
var teamworkBot_1 = require("./teamsApps/appDefinitions/bot/teamworkBot");
var TeamsAppDefinition = /** @class */ (function (_super) {
    __extends(TeamsAppDefinition, _super);
    /**
     * Instantiates a new teamsAppDefinition and sets the default values.
     */
    function TeamsAppDefinition() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TeamsAppDefinition.prototype, "bot", {
        /**
         * Gets the bot property value. The details of the bot specified in the Teams app manifest.
         * @returns a teamworkBot
         */
        get: function () {
            return this._bot;
        },
        /**
         * Sets the bot property value. The details of the bot specified in the Teams app manifest.
         * @param value Value to set for the bot property.
         */
        set: function (value) {
            this._bot = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAppDefinition.prototype, "createdBy", {
        /**
         * Gets the createdBy property value.
         * @returns a identitySet
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAppDefinition.prototype, "description", {
        /**
         * Gets the description property value. Verbose description of the application.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Verbose description of the application.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAppDefinition.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the app provided by the app developer.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the app provided by the app developer.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAppDefinition.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAppDefinition.prototype, "publishingState", {
        /**
         * Gets the publishingState property value. The published status of a specific version of a Teams app. Possible values are:submitted — The specific version of the Teams app has been submitted and is under review. published  — The request to publish the specific version of the Teams app has been approved by the admin and the app is published.  rejected — The request to publish the specific version of the Teams app was rejected by the admin.
         * @returns a teamsAppPublishingState
         */
        get: function () {
            return this._publishingState;
        },
        /**
         * Sets the publishingState property value. The published status of a specific version of a Teams app. Possible values are:submitted — The specific version of the Teams app has been submitted and is under review. published  — The request to publish the specific version of the Teams app has been approved by the admin and the app is published.  rejected — The request to publish the specific version of the Teams app was rejected by the admin.
         * @param value Value to set for the publishingState property.
         */
        set: function (value) {
            this._publishingState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAppDefinition.prototype, "shortDescription", {
        /**
         * Gets the shortDescription property value. Short description of the application.
         * @returns a string
         */
        get: function () {
            return this._shortDescription;
        },
        /**
         * Sets the shortDescription property value. Short description of the application.
         * @param value Value to set for the shortDescription property.
         */
        set: function (value) {
            this._shortDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAppDefinition.prototype, "teamsAppId", {
        /**
         * Gets the teamsAppId property value. The ID from the Teams app manifest.
         * @returns a string
         */
        get: function () {
            return this._teamsAppId;
        },
        /**
         * Sets the teamsAppId property value. The ID from the Teams app manifest.
         * @param value Value to set for the teamsAppId property.
         */
        set: function (value) {
            this._teamsAppId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAppDefinition.prototype, "version", {
        /**
         * Gets the version property value. The version number of the application.
         * @returns a string
         */
        get: function () {
            return this._version;
        },
        /**
         * Sets the version property value. The version number of the application.
         * @param value Value to set for the version property.
         */
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TeamsAppDefinition.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["bot", function (o, n) { o.bot = n.getObjectValue(teamworkBot_1.TeamworkBot); }],
            ["createdBy", function (o, n) { o.createdBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["publishingState", function (o, n) { o.publishingState = n.getObjectValue(TeamsAppPublishingState); }],
            ["shortDescription", function (o, n) { o.shortDescription = n.getStringValue(); }],
            ["teamsAppId", function (o, n) { o.teamsAppId = n.getStringValue(); }],
            ["version", function (o, n) { o.version = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TeamsAppDefinition.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("bot", this.bot);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeObjectValue("publishingState", this.publishingState);
        writer.writeStringValue("shortDescription", this.shortDescription);
        writer.writeStringValue("teamsAppId", this.teamsAppId);
        writer.writeStringValue("version", this.version);
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
    return TeamsAppDefinition;
}(entity_1.Entity));
exports.TeamsAppDefinition = TeamsAppDefinition;
