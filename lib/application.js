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
exports.Application = void 0;
var addIn_1 = require("./addIn");
var appRole_1 = require("./appRole");
var directoryObject_1 = require("./directoryObject");
var extensionProperty_1 = require("./extensionProperty");
var homeRealmDiscoveryPolicy_1 = require("./homeRealmDiscoveryPolicy");
var keyCredential_1 = require("./keyCredential");
var passwordCredential_1 = require("./passwordCredential");
var requiredResourceAccess_1 = require("./requiredResourceAccess");
var tokenIssuancePolicy_1 = require("./tokenIssuancePolicy");
var tokenLifetimePolicy_1 = require("./tokenLifetimePolicy");
var Application = /** @class */ (function (_super) {
    __extends(Application, _super);
    /**
     * Instantiates a new application and sets the default values.
     */
    function Application() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Application.prototype, "addIns", {
        /**
         * Gets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Office 365 call the application in the context of a document the user is working on.
         * @returns a addIn
         */
        get: function () {
            return this._addIns;
        },
        /**
         * Sets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Office 365 call the application in the context of a document the user is working on.
         * @param value Value to set for the addIns property.
         */
        set: function (value) {
            this._addIns = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "api", {
        /**
         * Gets the api property value. Specifies settings for an application that implements a web API.
         * @returns a apiApplication
         */
        get: function () {
            return this._api;
        },
        /**
         * Sets the api property value. Specifies settings for an application that implements a web API.
         * @param value Value to set for the api property.
         */
        set: function (value) {
            this._api = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "appId", {
        /**
         * Gets the appId property value. The unique identifier for the application that is assigned by Azure AD. Not nullable. Read-only.
         * @returns a string
         */
        get: function () {
            return this._appId;
        },
        /**
         * Sets the appId property value. The unique identifier for the application that is assigned by Azure AD. Not nullable. Read-only.
         * @param value Value to set for the appId property.
         */
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "applicationTemplateId", {
        /**
         * Gets the applicationTemplateId property value. Unique identifier of the applicationTemplate.
         * @returns a string
         */
        get: function () {
            return this._applicationTemplateId;
        },
        /**
         * Sets the applicationTemplateId property value. Unique identifier of the applicationTemplate.
         * @param value Value to set for the applicationTemplateId property.
         */
        set: function (value) {
            this._applicationTemplateId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "appRoles", {
        /**
         * Gets the appRoles property value. The collection of roles assigned to the application. With app role assignments, these roles can be assigned to users, groups, or service principals associated with other applications. Not nullable.
         * @returns a appRole
         */
        get: function () {
            return this._appRoles;
        },
        /**
         * Sets the appRoles property value. The collection of roles assigned to the application. With app role assignments, these roles can be assigned to users, groups, or service principals associated with other applications. Not nullable.
         * @param value Value to set for the appRoles property.
         */
        set: function (value) {
            this._appRoles = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The date and time the application was registered. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  Supports $filter (eq, ne, NOT, ge, le, in) and $orderBy.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The date and time the application was registered. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  Supports $filter (eq, ne, NOT, ge, le, in) and $orderBy.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "createdOnBehalfOf", {
        /**
         * Gets the createdOnBehalfOf property value. Read-only.
         * @returns a directoryObject
         */
        get: function () {
            return this._createdOnBehalfOf;
        },
        /**
         * Sets the createdOnBehalfOf property value. Read-only.
         * @param value Value to set for the createdOnBehalfOf property.
         */
        set: function (value) {
            this._createdOnBehalfOf = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "description", {
        /**
         * Gets the description property value. An optional description of the application. Returned by default. Supports $filter (eq, ne, NOT, ge, le, startsWith) and $search.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. An optional description of the application. Returned by default. Supports $filter (eq, ne, NOT, ge, le, startsWith) and $search.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "disabledByMicrosoftStatus", {
        /**
         * Gets the disabledByMicrosoftStatus property value. Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, NOT).
         * @returns a string
         */
        get: function () {
            return this._disabledByMicrosoftStatus;
        },
        /**
         * Sets the disabledByMicrosoftStatus property value. Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, NOT).
         * @param value Value to set for the disabledByMicrosoftStatus property.
         */
        set: function (value) {
            this._disabledByMicrosoftStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "displayName", {
        /**
         * Gets the displayName property value. The display name for the application. Supports $filter (eq, ne, NOT, ge, le, in, startsWith), $search, and $orderBy.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The display name for the application. Supports $filter (eq, ne, NOT, ge, le, in, startsWith), $search, and $orderBy.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "extensionProperties", {
        /**
         * Gets the extensionProperties property value. Read-only. Nullable.
         * @returns a extensionProperty
         */
        get: function () {
            return this._extensionProperties;
        },
        /**
         * Sets the extensionProperties property value. Read-only. Nullable.
         * @param value Value to set for the extensionProperties property.
         */
        set: function (value) {
            this._extensionProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "groupMembershipClaims", {
        /**
         * Gets the groupMembershipClaims property value. Configures the groups claim issued in a user or OAuth 2.0 access token that the application expects. To set this attribute, use one of the following string values: None, SecurityGroup (for security groups and Azure AD roles), All (this gets all security groups, distribution groups, and Azure AD directory roles that the signed-in user is a member of).
         * @returns a string
         */
        get: function () {
            return this._groupMembershipClaims;
        },
        /**
         * Sets the groupMembershipClaims property value. Configures the groups claim issued in a user or OAuth 2.0 access token that the application expects. To set this attribute, use one of the following string values: None, SecurityGroup (for security groups and Azure AD roles), All (this gets all security groups, distribution groups, and Azure AD directory roles that the signed-in user is a member of).
         * @param value Value to set for the groupMembershipClaims property.
         */
        set: function (value) {
            this._groupMembershipClaims = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "homeRealmDiscoveryPolicies", {
        /**
         * Gets the homeRealmDiscoveryPolicies property value.
         * @returns a homeRealmDiscoveryPolicy
         */
        get: function () {
            return this._homeRealmDiscoveryPolicies;
        },
        /**
         * Sets the homeRealmDiscoveryPolicies property value.
         * @param value Value to set for the homeRealmDiscoveryPolicies property.
         */
        set: function (value) {
            this._homeRealmDiscoveryPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "identifierUris", {
        /**
         * Gets the identifierUris property value. The URIs that identify the application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant. For more information, see Application Objects and Service Principal Objects. The any operator is required for filter expressions on multi-valued properties. Not nullable. Supports $filter (eq, ne, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._identifierUris;
        },
        /**
         * Sets the identifierUris property value. The URIs that identify the application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant. For more information, see Application Objects and Service Principal Objects. The any operator is required for filter expressions on multi-valued properties. Not nullable. Supports $filter (eq, ne, ge, le, startsWith).
         * @param value Value to set for the identifierUris property.
         */
        set: function (value) {
            this._identifierUris = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "info", {
        /**
         * Gets the info property value. Basic profile information of the application, such as it's marketing, support, terms of service, and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more information, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, NOT, ge, le).
         * @returns a informationalUrl
         */
        get: function () {
            return this._info;
        },
        /**
         * Sets the info property value. Basic profile information of the application, such as it's marketing, support, terms of service, and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more information, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, NOT, ge, le).
         * @param value Value to set for the info property.
         */
        set: function (value) {
            this._info = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "isDeviceOnlyAuthSupported", {
        /**
         * Gets the isDeviceOnlyAuthSupported property value. Specifies whether this application supports device authentication without a user. The default is false.
         * @returns a boolean
         */
        get: function () {
            return this._isDeviceOnlyAuthSupported;
        },
        /**
         * Sets the isDeviceOnlyAuthSupported property value. Specifies whether this application supports device authentication without a user. The default is false.
         * @param value Value to set for the isDeviceOnlyAuthSupported property.
         */
        set: function (value) {
            this._isDeviceOnlyAuthSupported = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "isFallbackPublicClient", {
        /**
         * Gets the isFallbackPublicClient property value. Specifies the fallback application type as public client, such as an installed application running on a mobile device. The default value is false which means the fallback application type is confidential client such as a web app. There are certain scenarios where Azure AD cannot determine the client application type. For example, the ROPC flow where the application is configured without specifying a redirect URI. In those cases Azure AD interprets the application type based on the value of this property.
         * @returns a boolean
         */
        get: function () {
            return this._isFallbackPublicClient;
        },
        /**
         * Sets the isFallbackPublicClient property value. Specifies the fallback application type as public client, such as an installed application running on a mobile device. The default value is false which means the fallback application type is confidential client such as a web app. There are certain scenarios where Azure AD cannot determine the client application type. For example, the ROPC flow where the application is configured without specifying a redirect URI. In those cases Azure AD interprets the application type based on the value of this property.
         * @param value Value to set for the isFallbackPublicClient property.
         */
        set: function (value) {
            this._isFallbackPublicClient = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "keyCredentials", {
        /**
         * Gets the keyCredentials property value. The collection of key credentials associated with the application. Not nullable. Supports $filter (eq, NOT, ge, le).
         * @returns a keyCredential
         */
        get: function () {
            return this._keyCredentials;
        },
        /**
         * Sets the keyCredentials property value. The collection of key credentials associated with the application. Not nullable. Supports $filter (eq, NOT, ge, le).
         * @param value Value to set for the keyCredentials property.
         */
        set: function (value) {
            this._keyCredentials = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "logo", {
        /**
         * Gets the logo property value. The main logo for the application. Not nullable.
         * @returns a binary
         */
        get: function () {
            return this._logo;
        },
        /**
         * Sets the logo property value. The main logo for the application. Not nullable.
         * @param value Value to set for the logo property.
         */
        set: function (value) {
            this._logo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "notes", {
        /**
         * Gets the notes property value. Notes relevant for the management of the application.
         * @returns a string
         */
        get: function () {
            return this._notes;
        },
        /**
         * Sets the notes property value. Notes relevant for the management of the application.
         * @param value Value to set for the notes property.
         */
        set: function (value) {
            this._notes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "oauth2RequirePostResponse", {
        /**
         * Gets the oauth2RequirePostResponse property value.
         * @returns a boolean
         */
        get: function () {
            return this._oauth2RequirePostResponse;
        },
        /**
         * Sets the oauth2RequirePostResponse property value.
         * @param value Value to set for the oauth2RequirePostResponse property.
         */
        set: function (value) {
            this._oauth2RequirePostResponse = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "optionalClaims", {
        /**
         * Gets the optionalClaims property value. Application developers can configure optional claims in their Azure AD applications to specify the claims that are sent to their application by the Microsoft security token service. For more information, see How to: Provide optional claims to your app.
         * @returns a optionalClaims
         */
        get: function () {
            return this._optionalClaims;
        },
        /**
         * Sets the optionalClaims property value. Application developers can configure optional claims in their Azure AD applications to specify the claims that are sent to their application by the Microsoft security token service. For more information, see How to: Provide optional claims to your app.
         * @param value Value to set for the optionalClaims property.
         */
        set: function (value) {
            this._optionalClaims = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "owners", {
        /**
         * Gets the owners property value. Directory objects that are owners of the application. Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._owners;
        },
        /**
         * Sets the owners property value. Directory objects that are owners of the application. Read-only. Nullable. Supports $expand.
         * @param value Value to set for the owners property.
         */
        set: function (value) {
            this._owners = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "parentalControlSettings", {
        /**
         * Gets the parentalControlSettings property value. Specifies parental control settings for an application.
         * @returns a parentalControlSettings
         */
        get: function () {
            return this._parentalControlSettings;
        },
        /**
         * Sets the parentalControlSettings property value. Specifies parental control settings for an application.
         * @param value Value to set for the parentalControlSettings property.
         */
        set: function (value) {
            this._parentalControlSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "passwordCredentials", {
        /**
         * Gets the passwordCredentials property value. The collection of password credentials associated with the application. Not nullable.
         * @returns a passwordCredential
         */
        get: function () {
            return this._passwordCredentials;
        },
        /**
         * Sets the passwordCredentials property value. The collection of password credentials associated with the application. Not nullable.
         * @param value Value to set for the passwordCredentials property.
         */
        set: function (value) {
            this._passwordCredentials = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "publicClient", {
        /**
         * Gets the publicClient property value. Specifies settings for installed clients such as desktop or mobile devices.
         * @returns a publicClientApplication
         */
        get: function () {
            return this._publicClient;
        },
        /**
         * Sets the publicClient property value. Specifies settings for installed clients such as desktop or mobile devices.
         * @param value Value to set for the publicClient property.
         */
        set: function (value) {
            this._publicClient = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "publisherDomain", {
        /**
         * Gets the publisherDomain property value. The verified publisher domain for the application. Read-only. Supports $filter (eq, ne, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._publisherDomain;
        },
        /**
         * Sets the publisherDomain property value. The verified publisher domain for the application. Read-only. Supports $filter (eq, ne, ge, le, startsWith).
         * @param value Value to set for the publisherDomain property.
         */
        set: function (value) {
            this._publisherDomain = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "requiredResourceAccess", {
        /**
         * Gets the requiredResourceAccess property value. Specifies the resources that the application needs to access. This property also specifies the set of OAuth permission scopes and application roles that it needs for each of those resources. This configuration of access to the required resources drives the consent experience. Not nullable. Supports $filter (eq, NOT, ge, le).
         * @returns a requiredResourceAccess
         */
        get: function () {
            return this._requiredResourceAccess;
        },
        /**
         * Sets the requiredResourceAccess property value. Specifies the resources that the application needs to access. This property also specifies the set of OAuth permission scopes and application roles that it needs for each of those resources. This configuration of access to the required resources drives the consent experience. Not nullable. Supports $filter (eq, NOT, ge, le).
         * @param value Value to set for the requiredResourceAccess property.
         */
        set: function (value) {
            this._requiredResourceAccess = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "signInAudience", {
        /**
         * Gets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. Supported values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount, PersonalMicrosoftAccount. See more in the table below. Supports $filter (eq, ne, NOT).
         * @returns a string
         */
        get: function () {
            return this._signInAudience;
        },
        /**
         * Sets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. Supported values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount, PersonalMicrosoftAccount. See more in the table below. Supports $filter (eq, ne, NOT).
         * @param value Value to set for the signInAudience property.
         */
        set: function (value) {
            this._signInAudience = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "spa", {
        /**
         * Gets the spa property value. Specifies settings for a single-page application, including sign out URLs and redirect URIs for authorization codes and access tokens.
         * @returns a spaApplication
         */
        get: function () {
            return this._spa;
        },
        /**
         * Sets the spa property value. Specifies settings for a single-page application, including sign out URLs and redirect URIs for authorization codes and access tokens.
         * @param value Value to set for the spa property.
         */
        set: function (value) {
            this._spa = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "tags", {
        /**
         * Gets the tags property value. Custom strings that can be used to categorize and identify the application. Not nullable.Supports $filter (eq, NOT, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._tags;
        },
        /**
         * Sets the tags property value. Custom strings that can be used to categorize and identify the application. Not nullable.Supports $filter (eq, NOT, ge, le, startsWith).
         * @param value Value to set for the tags property.
         */
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "tokenEncryptionKeyId", {
        /**
         * Gets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD encrypts all the tokens it emits by using the key this property points to. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
         * @returns a string
         */
        get: function () {
            return this._tokenEncryptionKeyId;
        },
        /**
         * Sets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD encrypts all the tokens it emits by using the key this property points to. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
         * @param value Value to set for the tokenEncryptionKeyId property.
         */
        set: function (value) {
            this._tokenEncryptionKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "tokenIssuancePolicies", {
        /**
         * Gets the tokenIssuancePolicies property value.
         * @returns a tokenIssuancePolicy
         */
        get: function () {
            return this._tokenIssuancePolicies;
        },
        /**
         * Sets the tokenIssuancePolicies property value.
         * @param value Value to set for the tokenIssuancePolicies property.
         */
        set: function (value) {
            this._tokenIssuancePolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "tokenLifetimePolicies", {
        /**
         * Gets the tokenLifetimePolicies property value. The tokenLifetimePolicies assigned to this application. Supports $expand.
         * @returns a tokenLifetimePolicy
         */
        get: function () {
            return this._tokenLifetimePolicies;
        },
        /**
         * Sets the tokenLifetimePolicies property value. The tokenLifetimePolicies assigned to this application. Supports $expand.
         * @param value Value to set for the tokenLifetimePolicies property.
         */
        set: function (value) {
            this._tokenLifetimePolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Application.prototype, "web", {
        /**
         * Gets the web property value. Specifies settings for a web application.
         * @returns a webApplication
         */
        get: function () {
            return this._web;
        },
        /**
         * Sets the web property value. Specifies settings for a web application.
         * @param value Value to set for the web property.
         */
        set: function (value) {
            this._web = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Application.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["addIns", function (o, n) { o.addIns = n.getCollectionOfObjectValues(addIn_1.AddIn); }],
            ["api", function (o, n) { o.api = n.getObjectValue(ApiApplication); }],
            ["appId", function (o, n) { o.appId = n.getStringValue(); }],
            ["applicationTemplateId", function (o, n) { o.applicationTemplateId = n.getStringValue(); }],
            ["appRoles", function (o, n) { o.appRoles = n.getCollectionOfObjectValues(appRole_1.AppRole); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["createdOnBehalfOf", function (o, n) { o.createdOnBehalfOf = n.getObjectValue(directoryObject_1.DirectoryObject); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["disabledByMicrosoftStatus", function (o, n) { o.disabledByMicrosoftStatus = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["extensionProperties", function (o, n) { o.extensionProperties = n.getCollectionOfObjectValues(extensionProperty_1.ExtensionProperty); }],
            ["groupMembershipClaims", function (o, n) { o.groupMembershipClaims = n.getStringValue(); }],
            ["homeRealmDiscoveryPolicies", function (o, n) { o.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValues(homeRealmDiscoveryPolicy_1.HomeRealmDiscoveryPolicy); }],
            ["identifierUris", function (o, n) { o.identifierUris = n.getCollectionOfPrimitiveValues(); }],
            ["info", function (o, n) { o.info = n.getObjectValue(InformationalUrl); }],
            ["isDeviceOnlyAuthSupported", function (o, n) { o.isDeviceOnlyAuthSupported = n.getBooleanValue(); }],
            ["isFallbackPublicClient", function (o, n) { o.isFallbackPublicClient = n.getBooleanValue(); }],
            ["keyCredentials", function (o, n) { o.keyCredentials = n.getCollectionOfObjectValues(keyCredential_1.KeyCredential); }],
            ["logo", function (o, n) { o.logo = n.getObjectValue(Binary); }],
            ["notes", function (o, n) { o.notes = n.getStringValue(); }],
            ["oauth2RequirePostResponse", function (o, n) { o.oauth2RequirePostResponse = n.getBooleanValue(); }],
            ["optionalClaims", function (o, n) { o.optionalClaims = n.getObjectValue(OptionalClaims); }],
            ["owners", function (o, n) { o.owners = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["parentalControlSettings", function (o, n) { o.parentalControlSettings = n.getObjectValue(ParentalControlSettings); }],
            ["passwordCredentials", function (o, n) { o.passwordCredentials = n.getCollectionOfObjectValues(passwordCredential_1.PasswordCredential); }],
            ["publicClient", function (o, n) { o.publicClient = n.getObjectValue(PublicClientApplication); }],
            ["publisherDomain", function (o, n) { o.publisherDomain = n.getStringValue(); }],
            ["requiredResourceAccess", function (o, n) { o.requiredResourceAccess = n.getCollectionOfObjectValues(requiredResourceAccess_1.RequiredResourceAccess); }],
            ["signInAudience", function (o, n) { o.signInAudience = n.getStringValue(); }],
            ["spa", function (o, n) { o.spa = n.getObjectValue(SpaApplication); }],
            ["tags", function (o, n) { o.tags = n.getCollectionOfPrimitiveValues(); }],
            ["tokenEncryptionKeyId", function (o, n) { o.tokenEncryptionKeyId = n.getStringValue(); }],
            ["tokenIssuancePolicies", function (o, n) { o.tokenIssuancePolicies = n.getCollectionOfObjectValues(tokenIssuancePolicy_1.TokenIssuancePolicy); }],
            ["tokenLifetimePolicies", function (o, n) { o.tokenLifetimePolicies = n.getCollectionOfObjectValues(tokenLifetimePolicy_1.TokenLifetimePolicy); }],
            ["web", function (o, n) { o.web = n.getObjectValue(WebApplication); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Application.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("addIns", this.addIns);
        writer.writeObjectValue("api", this.api);
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("applicationTemplateId", this.applicationTemplateId);
        writer.writeCollectionOfObjectValues("appRoles", this.appRoles);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue("createdOnBehalfOf", this.createdOnBehalfOf);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("disabledByMicrosoftStatus", this.disabledByMicrosoftStatus);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues("extensionProperties", this.extensionProperties);
        writer.writeStringValue("groupMembershipClaims", this.groupMembershipClaims);
        writer.writeCollectionOfObjectValues("homeRealmDiscoveryPolicies", this.homeRealmDiscoveryPolicies);
        writer.writeCollectionOfPrimitiveValues("identifierUris", this.identifierUris);
        writer.writeObjectValue("info", this.info);
        writer.writeBooleanValue("isDeviceOnlyAuthSupported", this.isDeviceOnlyAuthSupported);
        writer.writeBooleanValue("isFallbackPublicClient", this.isFallbackPublicClient);
        writer.writeCollectionOfObjectValues("keyCredentials", this.keyCredentials);
        writer.writeObjectValue("logo", this.logo);
        writer.writeStringValue("notes", this.notes);
        writer.writeBooleanValue("oauth2RequirePostResponse", this.oauth2RequirePostResponse);
        writer.writeObjectValue("optionalClaims", this.optionalClaims);
        writer.writeCollectionOfObjectValues("owners", this.owners);
        writer.writeObjectValue("parentalControlSettings", this.parentalControlSettings);
        writer.writeCollectionOfObjectValues("passwordCredentials", this.passwordCredentials);
        writer.writeObjectValue("publicClient", this.publicClient);
        writer.writeStringValue("publisherDomain", this.publisherDomain);
        writer.writeCollectionOfObjectValues("requiredResourceAccess", this.requiredResourceAccess);
        writer.writeStringValue("signInAudience", this.signInAudience);
        writer.writeObjectValue("spa", this.spa);
        writer.writeCollectionOfPrimitiveValues("tags", this.tags);
        writer.writeStringValue("tokenEncryptionKeyId", this.tokenEncryptionKeyId);
        writer.writeCollectionOfObjectValues("tokenIssuancePolicies", this.tokenIssuancePolicies);
        writer.writeCollectionOfObjectValues("tokenLifetimePolicies", this.tokenLifetimePolicies);
        writer.writeObjectValue("web", this.web);
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
    return Application;
}(directoryObject_1.DirectoryObject));
exports.Application = Application;
