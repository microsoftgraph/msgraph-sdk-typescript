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
exports.Invitation = void 0;
var entity_1 = require("./entity");
var user_1 = require("./user");
var Invitation = /** @class */ (function (_super) {
    __extends(Invitation, _super);
    /**
     * Instantiates a new invitation and sets the default values.
     */
    function Invitation() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Invitation.prototype, "invitedUser", {
        /**
         * Gets the invitedUser property value. The user created as part of the invitation creation. Read-Only
         * @returns a user
         */
        get: function () {
            return this._invitedUser;
        },
        /**
         * Sets the invitedUser property value. The user created as part of the invitation creation. Read-Only
         * @param value Value to set for the invitedUser property.
         */
        set: function (value) {
            this._invitedUser = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Invitation.prototype, "invitedUserDisplayName", {
        /**
         * Gets the invitedUserDisplayName property value. The display name of the user being invited.
         * @returns a string
         */
        get: function () {
            return this._invitedUserDisplayName;
        },
        /**
         * Sets the invitedUserDisplayName property value. The display name of the user being invited.
         * @param value Value to set for the invitedUserDisplayName property.
         */
        set: function (value) {
            this._invitedUserDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Invitation.prototype, "invitedUserEmailAddress", {
        /**
         * Gets the invitedUserEmailAddress property value. The email address of the user being invited. Required. The following special characters are not permitted in the email address:Tilde (~)Exclamation point (!)At sign (@)Number sign (#)Dollar sign ($)Percent (%)Circumflex (^)Ampersand (&)Asterisk (*)Parentheses (( ))Hyphen (-)Plus sign (+)Equal sign (=)Brackets ([ ])Braces ({ })Backslash (/)Slash mark (/)Pipe (`
         * @returns a string
         */
        get: function () {
            return this._invitedUserEmailAddress;
        },
        /**
         * Sets the invitedUserEmailAddress property value. The email address of the user being invited. Required. The following special characters are not permitted in the email address:Tilde (~)Exclamation point (!)At sign (@)Number sign (#)Dollar sign ($)Percent (%)Circumflex (^)Ampersand (&)Asterisk (*)Parentheses (( ))Hyphen (-)Plus sign (+)Equal sign (=)Brackets ([ ])Braces ({ })Backslash (/)Slash mark (/)Pipe (`
         * @param value Value to set for the invitedUserEmailAddress property.
         */
        set: function (value) {
            this._invitedUserEmailAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Invitation.prototype, "invitedUserMessageInfo", {
        /**
         * Gets the invitedUserMessageInfo property value. Additional configuration for the message being sent to the invited user, including customizing message text, language and cc recipient list.
         * @returns a invitedUserMessageInfo
         */
        get: function () {
            return this._invitedUserMessageInfo;
        },
        /**
         * Sets the invitedUserMessageInfo property value. Additional configuration for the message being sent to the invited user, including customizing message text, language and cc recipient list.
         * @param value Value to set for the invitedUserMessageInfo property.
         */
        set: function (value) {
            this._invitedUserMessageInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Invitation.prototype, "invitedUserType", {
        /**
         * Gets the invitedUserType property value. The userType of the user being invited. By default, this is Guest. You can invite as Member if you're are company administrator.
         * @returns a string
         */
        get: function () {
            return this._invitedUserType;
        },
        /**
         * Sets the invitedUserType property value. The userType of the user being invited. By default, this is Guest. You can invite as Member if you're are company administrator.
         * @param value Value to set for the invitedUserType property.
         */
        set: function (value) {
            this._invitedUserType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Invitation.prototype, "inviteRedeemUrl", {
        /**
         * Gets the inviteRedeemUrl property value. The URL the user can use to redeem their invitation. Read-only.
         * @returns a string
         */
        get: function () {
            return this._inviteRedeemUrl;
        },
        /**
         * Sets the inviteRedeemUrl property value. The URL the user can use to redeem their invitation. Read-only.
         * @param value Value to set for the inviteRedeemUrl property.
         */
        set: function (value) {
            this._inviteRedeemUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Invitation.prototype, "inviteRedirectUrl", {
        /**
         * Gets the inviteRedirectUrl property value. The URL user should be redirected to once the invitation is redeemed. Required.
         * @returns a string
         */
        get: function () {
            return this._inviteRedirectUrl;
        },
        /**
         * Sets the inviteRedirectUrl property value. The URL user should be redirected to once the invitation is redeemed. Required.
         * @param value Value to set for the inviteRedirectUrl property.
         */
        set: function (value) {
            this._inviteRedirectUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Invitation.prototype, "sendInvitationMessage", {
        /**
         * Gets the sendInvitationMessage property value. Indicates whether an email should be sent to the user being invited or not. The default is false.
         * @returns a boolean
         */
        get: function () {
            return this._sendInvitationMessage;
        },
        /**
         * Sets the sendInvitationMessage property value. Indicates whether an email should be sent to the user being invited or not. The default is false.
         * @param value Value to set for the sendInvitationMessage property.
         */
        set: function (value) {
            this._sendInvitationMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Invitation.prototype, "status", {
        /**
         * Gets the status property value. The status of the invitation. Possible values: PendingAcceptance, Completed, InProgress, and Error
         * @returns a string
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. The status of the invitation. Possible values: PendingAcceptance, Completed, InProgress, and Error
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Invitation.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["invitedUser", function (o, n) { o.invitedUser = n.getObjectValue(user_1.User); }],
            ["invitedUserDisplayName", function (o, n) { o.invitedUserDisplayName = n.getStringValue(); }],
            ["invitedUserEmailAddress", function (o, n) { o.invitedUserEmailAddress = n.getStringValue(); }],
            ["invitedUserMessageInfo", function (o, n) { o.invitedUserMessageInfo = n.getObjectValue(InvitedUserMessageInfo); }],
            ["invitedUserType", function (o, n) { o.invitedUserType = n.getStringValue(); }],
            ["inviteRedeemUrl", function (o, n) { o.inviteRedeemUrl = n.getStringValue(); }],
            ["inviteRedirectUrl", function (o, n) { o.inviteRedirectUrl = n.getStringValue(); }],
            ["sendInvitationMessage", function (o, n) { o.sendInvitationMessage = n.getBooleanValue(); }],
            ["status", function (o, n) { o.status = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Invitation.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("invitedUser", this.invitedUser);
        writer.writeStringValue("invitedUserDisplayName", this.invitedUserDisplayName);
        writer.writeStringValue("invitedUserEmailAddress", this.invitedUserEmailAddress);
        writer.writeObjectValue("invitedUserMessageInfo", this.invitedUserMessageInfo);
        writer.writeStringValue("invitedUserType", this.invitedUserType);
        writer.writeStringValue("inviteRedeemUrl", this.inviteRedeemUrl);
        writer.writeStringValue("inviteRedirectUrl", this.inviteRedirectUrl);
        writer.writeBooleanValue("sendInvitationMessage", this.sendInvitationMessage);
        writer.writeStringValue("status", this.status);
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
    return Invitation;
}(entity_1.Entity));
exports.Invitation = Invitation;
