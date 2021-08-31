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
exports.Team = void 0;
var channel_1 = require("./channel");
var conversationMember_1 = require("./conversationMember");
var entity_1 = require("./entity");
var group_1 = require("./group");
var schedule_1 = require("./teams/schedule/schedule");
var teamsTemplate_1 = require("./teams/template/teamsTemplate");
var teamsAppInstallation_1 = require("./teamsAppInstallation");
var teamsAsyncOperation_1 = require("./teamsAsyncOperation");
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    /**
     * Instantiates a new team and sets the default values.
     */
    function Team() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Team.prototype, "channels", {
        /**
         * Gets the channels property value. The collection of channels & messages associated with the team.
         * @returns a channel
         */
        get: function () {
            return this._channels;
        },
        /**
         * Sets the channels property value. The collection of channels & messages associated with the team.
         * @param value Value to set for the channels property.
         */
        set: function (value) {
            this._channels = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "classification", {
        /**
         * Gets the classification property value. An optional label. Typically describes the data or business sensitivity of the team. Must match one of a pre-configured set in the tenant's directory.
         * @returns a string
         */
        get: function () {
            return this._classification;
        },
        /**
         * Sets the classification property value. An optional label. Typically describes the data or business sensitivity of the team. Must match one of a pre-configured set in the tenant's directory.
         * @param value Value to set for the classification property.
         */
        set: function (value) {
            this._classification = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Timestamp at which the team was created.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Timestamp at which the team was created.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "description", {
        /**
         * Gets the description property value. An optional description for the team. Maximum length: 1024 characters.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. An optional description for the team. Maximum length: 1024 characters.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the team.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the team.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "funSettings", {
        /**
         * Gets the funSettings property value. Settings to configure use of Giphy, memes, and stickers in the team.
         * @returns a teamFunSettings
         */
        get: function () {
            return this._funSettings;
        },
        /**
         * Sets the funSettings property value. Settings to configure use of Giphy, memes, and stickers in the team.
         * @param value Value to set for the funSettings property.
         */
        set: function (value) {
            this._funSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "group", {
        /**
         * Gets the group property value.
         * @returns a group
         */
        get: function () {
            return this._group;
        },
        /**
         * Sets the group property value.
         * @param value Value to set for the group property.
         */
        set: function (value) {
            this._group = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "guestSettings", {
        /**
         * Gets the guestSettings property value. Settings to configure whether guests can create, update, or delete channels in the team.
         * @returns a teamGuestSettings
         */
        get: function () {
            return this._guestSettings;
        },
        /**
         * Sets the guestSettings property value. Settings to configure whether guests can create, update, or delete channels in the team.
         * @param value Value to set for the guestSettings property.
         */
        set: function (value) {
            this._guestSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "installedApps", {
        /**
         * Gets the installedApps property value. The apps installed in this team.
         * @returns a teamsAppInstallation
         */
        get: function () {
            return this._installedApps;
        },
        /**
         * Sets the installedApps property value. The apps installed in this team.
         * @param value Value to set for the installedApps property.
         */
        set: function (value) {
            this._installedApps = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "internalId", {
        /**
         * Gets the internalId property value. A unique ID for the team that has been used in a few places such as the audit log/Office 365 Management Activity API.
         * @returns a string
         */
        get: function () {
            return this._internalId;
        },
        /**
         * Sets the internalId property value. A unique ID for the team that has been used in a few places such as the audit log/Office 365 Management Activity API.
         * @param value Value to set for the internalId property.
         */
        set: function (value) {
            this._internalId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "isArchived", {
        /**
         * Gets the isArchived property value. Whether this team is in read-only mode.
         * @returns a boolean
         */
        get: function () {
            return this._isArchived;
        },
        /**
         * Sets the isArchived property value. Whether this team is in read-only mode.
         * @param value Value to set for the isArchived property.
         */
        set: function (value) {
            this._isArchived = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "members", {
        /**
         * Gets the members property value. Members and owners of the team.
         * @returns a conversationMember
         */
        get: function () {
            return this._members;
        },
        /**
         * Sets the members property value. Members and owners of the team.
         * @param value Value to set for the members property.
         */
        set: function (value) {
            this._members = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "memberSettings", {
        /**
         * Gets the memberSettings property value. Settings to configure whether members can perform certain actions, for example, create channels and add bots, in the team.
         * @returns a teamMemberSettings
         */
        get: function () {
            return this._memberSettings;
        },
        /**
         * Sets the memberSettings property value. Settings to configure whether members can perform certain actions, for example, create channels and add bots, in the team.
         * @param value Value to set for the memberSettings property.
         */
        set: function (value) {
            this._memberSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "messagingSettings", {
        /**
         * Gets the messagingSettings property value. Settings to configure messaging and mentions in the team.
         * @returns a teamMessagingSettings
         */
        get: function () {
            return this._messagingSettings;
        },
        /**
         * Sets the messagingSettings property value. Settings to configure messaging and mentions in the team.
         * @param value Value to set for the messagingSettings property.
         */
        set: function (value) {
            this._messagingSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "operations", {
        /**
         * Gets the operations property value. The async operations that ran or are running on this team.
         * @returns a teamsAsyncOperation
         */
        get: function () {
            return this._operations;
        },
        /**
         * Sets the operations property value. The async operations that ran or are running on this team.
         * @param value Value to set for the operations property.
         */
        set: function (value) {
            this._operations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "primaryChannel", {
        /**
         * Gets the primaryChannel property value. The general channel for the team.
         * @returns a channel
         */
        get: function () {
            return this._primaryChannel;
        },
        /**
         * Sets the primaryChannel property value. The general channel for the team.
         * @param value Value to set for the primaryChannel property.
         */
        set: function (value) {
            this._primaryChannel = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "schedule", {
        /**
         * Gets the schedule property value. The schedule of shifts for this team.
         * @returns a schedule
         */
        get: function () {
            return this._schedule;
        },
        /**
         * Sets the schedule property value. The schedule of shifts for this team.
         * @param value Value to set for the schedule property.
         */
        set: function (value) {
            this._schedule = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "specialization", {
        /**
         * Gets the specialization property value. Optional. Indicates whether the team is intended for a particular use case.  Each team specialization has access to unique behaviors and experiences targeted to its use case.
         * @returns a teamSpecialization
         */
        get: function () {
            return this._specialization;
        },
        /**
         * Sets the specialization property value. Optional. Indicates whether the team is intended for a particular use case.  Each team specialization has access to unique behaviors and experiences targeted to its use case.
         * @param value Value to set for the specialization property.
         */
        set: function (value) {
            this._specialization = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "template", {
        /**
         * Gets the template property value. The template this team was created from. See available templates.
         * @returns a teamsTemplate
         */
        get: function () {
            return this._template;
        },
        /**
         * Sets the template property value. The template this team was created from. See available templates.
         * @param value Value to set for the template property.
         */
        set: function (value) {
            this._template = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "visibility", {
        /**
         * Gets the visibility property value. The visibility of the group and team. Defaults to Public.
         * @returns a teamVisibilityType
         */
        get: function () {
            return this._visibility;
        },
        /**
         * Sets the visibility property value. The visibility of the group and team. Defaults to Public.
         * @param value Value to set for the visibility property.
         */
        set: function (value) {
            this._visibility = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Team.prototype, "webUrl", {
        /**
         * Gets the webUrl property value. A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not parsed.
         * @returns a string
         */
        get: function () {
            return this._webUrl;
        },
        /**
         * Sets the webUrl property value. A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not parsed.
         * @param value Value to set for the webUrl property.
         */
        set: function (value) {
            this._webUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Team.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["channels", function (o, n) { o.channels = n.getCollectionOfObjectValues(channel_1.Channel); }],
            ["classification", function (o, n) { o.classification = n.getStringValue(); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["funSettings", function (o, n) { o.funSettings = n.getObjectValue(TeamFunSettings); }],
            ["group", function (o, n) { o.group = n.getObjectValue(group_1.Group); }],
            ["guestSettings", function (o, n) { o.guestSettings = n.getObjectValue(TeamGuestSettings); }],
            ["installedApps", function (o, n) { o.installedApps = n.getCollectionOfObjectValues(teamsAppInstallation_1.TeamsAppInstallation); }],
            ["internalId", function (o, n) { o.internalId = n.getStringValue(); }],
            ["isArchived", function (o, n) { o.isArchived = n.getBooleanValue(); }],
            ["members", function (o, n) { o.members = n.getCollectionOfObjectValues(conversationMember_1.ConversationMember); }],
            ["memberSettings", function (o, n) { o.memberSettings = n.getObjectValue(TeamMemberSettings); }],
            ["messagingSettings", function (o, n) { o.messagingSettings = n.getObjectValue(TeamMessagingSettings); }],
            ["operations", function (o, n) { o.operations = n.getCollectionOfObjectValues(teamsAsyncOperation_1.TeamsAsyncOperation); }],
            ["primaryChannel", function (o, n) { o.primaryChannel = n.getObjectValue(channel_1.Channel); }],
            ["schedule", function (o, n) { o.schedule = n.getObjectValue(schedule_1.Schedule); }],
            ["specialization", function (o, n) { o.specialization = n.getObjectValue(TeamSpecialization); }],
            ["template", function (o, n) { o.template = n.getObjectValue(teamsTemplate_1.TeamsTemplate); }],
            ["visibility", function (o, n) { o.visibility = n.getObjectValue(TeamVisibilityType); }],
            ["webUrl", function (o, n) { o.webUrl = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Team.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("channels", this.channels);
        writer.writeStringValue("classification", this.classification);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("funSettings", this.funSettings);
        writer.writeObjectValue("group", this.group);
        writer.writeObjectValue("guestSettings", this.guestSettings);
        writer.writeCollectionOfObjectValues("installedApps", this.installedApps);
        writer.writeStringValue("internalId", this.internalId);
        writer.writeBooleanValue("isArchived", this.isArchived);
        writer.writeCollectionOfObjectValues("members", this.members);
        writer.writeObjectValue("memberSettings", this.memberSettings);
        writer.writeObjectValue("messagingSettings", this.messagingSettings);
        writer.writeCollectionOfObjectValues("operations", this.operations);
        writer.writeObjectValue("primaryChannel", this.primaryChannel);
        writer.writeObjectValue("schedule", this.schedule);
        writer.writeObjectValue("specialization", this.specialization);
        writer.writeObjectValue("template", this.template);
        writer.writeObjectValue("visibility", this.visibility);
        writer.writeStringValue("webUrl", this.webUrl);
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
    ;
    ;
    ;
    ;
    ;
    ;
    return Team;
}(entity_1.Entity));
exports.Team = Team;
