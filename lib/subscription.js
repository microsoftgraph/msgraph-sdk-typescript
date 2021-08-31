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
exports.Subscription = void 0;
var entity_1 = require("./entity");
var Subscription = /** @class */ (function (_super) {
    __extends(Subscription, _super);
    /**
     * Instantiates a new subscription and sets the default values.
     */
    function Subscription() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Subscription.prototype, "applicationId", {
        /**
         * Gets the applicationId property value. Identifier of the application used to create the subscription. Read-only.
         * @returns a string
         */
        get: function () {
            return this._applicationId;
        },
        /**
         * Sets the applicationId property value. Identifier of the application used to create the subscription. Read-only.
         * @param value Value to set for the applicationId property.
         */
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Subscription.prototype, "changeType", {
        /**
         * Gets the changeType property value. Indicates the type of change in the subscribed resource that will raise a change notification. The supported values are: created, updated, deleted. Multiple values can be combined using a comma-separated list. Required. Note: Drive root item and list change notifications support only the updated changeType. User and group change notifications support updated and deleted changeType.
         * @returns a string
         */
        get: function () {
            return this._changeType;
        },
        /**
         * Sets the changeType property value. Indicates the type of change in the subscribed resource that will raise a change notification. The supported values are: created, updated, deleted. Multiple values can be combined using a comma-separated list. Required. Note: Drive root item and list change notifications support only the updated changeType. User and group change notifications support updated and deleted changeType.
         * @param value Value to set for the changeType property.
         */
        set: function (value) {
            this._changeType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Subscription.prototype, "clientState", {
        /**
         * Gets the clientState property value. Specifies the value of the clientState property sent by the service in each change notification. The maximum length is 255 characters. The client can check that the change notification came from the service by comparing the value of the clientState property sent with the subscription with the value of the clientState property received with each change notification. Optional.
         * @returns a string
         */
        get: function () {
            return this._clientState;
        },
        /**
         * Sets the clientState property value. Specifies the value of the clientState property sent by the service in each change notification. The maximum length is 255 characters. The client can check that the change notification came from the service by comparing the value of the clientState property sent with the subscription with the value of the clientState property received with each change notification. Optional.
         * @param value Value to set for the clientState property.
         */
        set: function (value) {
            this._clientState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Subscription.prototype, "creatorId", {
        /**
         * Gets the creatorId property value. Identifier of the user or service principal that created the subscription. If the app used delegated permissions to create the subscription, this field contains the ID of the signed-in user the app called on behalf of. If the app used application permissions, this field contains the ID of the service principal corresponding to the app. Read-only.
         * @returns a string
         */
        get: function () {
            return this._creatorId;
        },
        /**
         * Sets the creatorId property value. Identifier of the user or service principal that created the subscription. If the app used delegated permissions to create the subscription, this field contains the ID of the signed-in user the app called on behalf of. If the app used application permissions, this field contains the ID of the service principal corresponding to the app. Read-only.
         * @param value Value to set for the creatorId property.
         */
        set: function (value) {
            this._creatorId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Subscription.prototype, "encryptionCertificate", {
        /**
         * Gets the encryptionCertificate property value. A base64-encoded representation of a certificate with a public key used to encrypt resource data in change notifications. Optional. Required when includeResourceData is true.
         * @returns a string
         */
        get: function () {
            return this._encryptionCertificate;
        },
        /**
         * Sets the encryptionCertificate property value. A base64-encoded representation of a certificate with a public key used to encrypt resource data in change notifications. Optional. Required when includeResourceData is true.
         * @param value Value to set for the encryptionCertificate property.
         */
        set: function (value) {
            this._encryptionCertificate = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Subscription.prototype, "encryptionCertificateId", {
        /**
         * Gets the encryptionCertificateId property value. A custom app-provided identifier to help identify the certificate needed to decrypt resource data. Optional. Required when includeResourceData is true.
         * @returns a string
         */
        get: function () {
            return this._encryptionCertificateId;
        },
        /**
         * Sets the encryptionCertificateId property value. A custom app-provided identifier to help identify the certificate needed to decrypt resource data. Optional. Required when includeResourceData is true.
         * @param value Value to set for the encryptionCertificateId property.
         */
        set: function (value) {
            this._encryptionCertificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Subscription.prototype, "expirationDateTime", {
        /**
         * Gets the expirationDateTime property value. Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to.  See the table below for maximum supported subscription length of time. Required.
         * @returns a Date
         */
        get: function () {
            return this._expirationDateTime;
        },
        /**
         * Sets the expirationDateTime property value. Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to.  See the table below for maximum supported subscription length of time. Required.
         * @param value Value to set for the expirationDateTime property.
         */
        set: function (value) {
            this._expirationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Subscription.prototype, "includeResourceData", {
        /**
         * Gets the includeResourceData property value. When set to true, change notifications include resource data (such as content of a chat message). Optional.
         * @returns a boolean
         */
        get: function () {
            return this._includeResourceData;
        },
        /**
         * Sets the includeResourceData property value. When set to true, change notifications include resource data (such as content of a chat message). Optional.
         * @param value Value to set for the includeResourceData property.
         */
        set: function (value) {
            this._includeResourceData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Subscription.prototype, "latestSupportedTlsVersion", {
        /**
         * Gets the latestSupportedTlsVersion property value. Specifies the latest version of Transport Layer Security (TLS) that the notification endpoint, specified by notificationUrl, supports. The possible values are: v1_0, v1_1, v1_2, v1_3. For subscribers whose notification endpoint supports a version lower than the currently recommended version (TLS 1.2), specifying this property by a set timeline allows them to temporarily use their deprecated version of TLS before completing their upgrade to TLS 1.2. For these subscribers, not setting this property per the timeline would result in subscription operations failing. For subscribers whose notification endpoint already supports TLS 1.2, setting this property is optional. In such cases, Microsoft Graph defaults the property to v1_2.
         * @returns a string
         */
        get: function () {
            return this._latestSupportedTlsVersion;
        },
        /**
         * Sets the latestSupportedTlsVersion property value. Specifies the latest version of Transport Layer Security (TLS) that the notification endpoint, specified by notificationUrl, supports. The possible values are: v1_0, v1_1, v1_2, v1_3. For subscribers whose notification endpoint supports a version lower than the currently recommended version (TLS 1.2), specifying this property by a set timeline allows them to temporarily use their deprecated version of TLS before completing their upgrade to TLS 1.2. For these subscribers, not setting this property per the timeline would result in subscription operations failing. For subscribers whose notification endpoint already supports TLS 1.2, setting this property is optional. In such cases, Microsoft Graph defaults the property to v1_2.
         * @param value Value to set for the latestSupportedTlsVersion property.
         */
        set: function (value) {
            this._latestSupportedTlsVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Subscription.prototype, "lifecycleNotificationUrl", {
        /**
         * Gets the lifecycleNotificationUrl property value. The URL of the endpoint that receives lifecycle notifications, including subscriptionRemoved and missed notifications. This URL must make use of the HTTPS protocol. Optional. Read more about how Outlook resources use lifecycle notifications.
         * @returns a string
         */
        get: function () {
            return this._lifecycleNotificationUrl;
        },
        /**
         * Sets the lifecycleNotificationUrl property value. The URL of the endpoint that receives lifecycle notifications, including subscriptionRemoved and missed notifications. This URL must make use of the HTTPS protocol. Optional. Read more about how Outlook resources use lifecycle notifications.
         * @param value Value to set for the lifecycleNotificationUrl property.
         */
        set: function (value) {
            this._lifecycleNotificationUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Subscription.prototype, "notificationQueryOptions", {
        /**
         * Gets the notificationQueryOptions property value. OData Query Options for specifying value for the targeting resource. Clients receive notifications when resource reaches the state matching the query options provided here. With this new property in the subscription creation payload along with all existing properties, Webhooks will deliver notifications whenever a resource reaches the desired state mentioned in the notificationQueryOptions property eg  when the print job is completed, when a print job resource isFetchable property value becomes true etc.
         * @returns a string
         */
        get: function () {
            return this._notificationQueryOptions;
        },
        /**
         * Sets the notificationQueryOptions property value. OData Query Options for specifying value for the targeting resource. Clients receive notifications when resource reaches the state matching the query options provided here. With this new property in the subscription creation payload along with all existing properties, Webhooks will deliver notifications whenever a resource reaches the desired state mentioned in the notificationQueryOptions property eg  when the print job is completed, when a print job resource isFetchable property value becomes true etc.
         * @param value Value to set for the notificationQueryOptions property.
         */
        set: function (value) {
            this._notificationQueryOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Subscription.prototype, "notificationUrl", {
        /**
         * Gets the notificationUrl property value. The URL of the endpoint that receives the change notifications. This URL must make use of the HTTPS protocol. Required.
         * @returns a string
         */
        get: function () {
            return this._notificationUrl;
        },
        /**
         * Sets the notificationUrl property value. The URL of the endpoint that receives the change notifications. This URL must make use of the HTTPS protocol. Required.
         * @param value Value to set for the notificationUrl property.
         */
        set: function (value) {
            this._notificationUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Subscription.prototype, "resource", {
        /**
         * Gets the resource property value. Specifies the resource that will be monitored for changes. Do not include the base URL (https://graph.microsoft.com/beta/). See the possible resource path values for each supported resource. Required.
         * @returns a string
         */
        get: function () {
            return this._resource;
        },
        /**
         * Sets the resource property value. Specifies the resource that will be monitored for changes. Do not include the base URL (https://graph.microsoft.com/beta/). See the possible resource path values for each supported resource. Required.
         * @param value Value to set for the resource property.
         */
        set: function (value) {
            this._resource = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Subscription.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["applicationId", function (o, n) { o.applicationId = n.getStringValue(); }],
            ["changeType", function (o, n) { o.changeType = n.getStringValue(); }],
            ["clientState", function (o, n) { o.clientState = n.getStringValue(); }],
            ["creatorId", function (o, n) { o.creatorId = n.getStringValue(); }],
            ["encryptionCertificate", function (o, n) { o.encryptionCertificate = n.getStringValue(); }],
            ["encryptionCertificateId", function (o, n) { o.encryptionCertificateId = n.getStringValue(); }],
            ["expirationDateTime", function (o, n) { o.expirationDateTime = n.getDateValue(); }],
            ["includeResourceData", function (o, n) { o.includeResourceData = n.getBooleanValue(); }],
            ["latestSupportedTlsVersion", function (o, n) { o.latestSupportedTlsVersion = n.getStringValue(); }],
            ["lifecycleNotificationUrl", function (o, n) { o.lifecycleNotificationUrl = n.getStringValue(); }],
            ["notificationQueryOptions", function (o, n) { o.notificationQueryOptions = n.getStringValue(); }],
            ["notificationUrl", function (o, n) { o.notificationUrl = n.getStringValue(); }],
            ["resource", function (o, n) { o.resource = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Subscription.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("applicationId", this.applicationId);
        writer.writeStringValue("changeType", this.changeType);
        writer.writeStringValue("clientState", this.clientState);
        writer.writeStringValue("creatorId", this.creatorId);
        writer.writeStringValue("encryptionCertificate", this.encryptionCertificate);
        writer.writeStringValue("encryptionCertificateId", this.encryptionCertificateId);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeBooleanValue("includeResourceData", this.includeResourceData);
        writer.writeStringValue("latestSupportedTlsVersion", this.latestSupportedTlsVersion);
        writer.writeStringValue("lifecycleNotificationUrl", this.lifecycleNotificationUrl);
        writer.writeStringValue("notificationQueryOptions", this.notificationQueryOptions);
        writer.writeStringValue("notificationUrl", this.notificationUrl);
        writer.writeStringValue("resource", this.resource);
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
    return Subscription;
}(entity_1.Entity));
exports.Subscription = Subscription;
