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
exports.ServicePrincipal = void 0;
var addIn_1 = require("./addIn");
var appRole_1 = require("./appRole");
var appRoleAssignment_1 = require("./appRoleAssignment");
var claimsMappingPolicy_1 = require("./claimsMappingPolicy");
var delegatedPermissionClassification_1 = require("./delegatedPermissionClassification");
var directoryObject_1 = require("./directoryObject");
var endpoint_1 = require("./endpoint");
var homeRealmDiscoveryPolicy_1 = require("./homeRealmDiscoveryPolicy");
var keyCredential_1 = require("./keyCredential");
var oAuth2PermissionGrant_1 = require("./oAuth2PermissionGrant");
var passwordCredential_1 = require("./passwordCredential");
var permissionScope_1 = require("./permissionScope");
var tokenIssuancePolicy_1 = require("./tokenIssuancePolicy");
var tokenLifetimePolicy_1 = require("./tokenLifetimePolicy");
var ServicePrincipal = /** @class */ (function (_super) {
    __extends(ServicePrincipal, _super);
    /**
     * Instantiates a new servicePrincipal and sets the default values.
     */
    function ServicePrincipal() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ServicePrincipal.prototype, "accountEnabled", {
        /**
         * Gets the accountEnabled property value. true if the service principal account is enabled; otherwise, false. Supports $filter (eq, ne, NOT, in).
         * @returns a boolean
         */
        get: function () {
            return this._accountEnabled;
        },
        /**
         * Sets the accountEnabled property value. true if the service principal account is enabled; otherwise, false. Supports $filter (eq, ne, NOT, in).
         * @param value Value to set for the accountEnabled property.
         */
        set: function (value) {
            this._accountEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "addIns", {
        /**
         * Gets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Microsoft 365 call the application in the context of a document the user is working on.
         * @returns a addIn
         */
        get: function () {
            return this._addIns;
        },
        /**
         * Sets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Microsoft 365 call the application in the context of a document the user is working on.
         * @param value Value to set for the addIns property.
         */
        set: function (value) {
            this._addIns = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "alternativeNames", {
        /**
         * Gets the alternativeNames property value. Used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. Supports $filter (eq, NOT, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._alternativeNames;
        },
        /**
         * Sets the alternativeNames property value. Used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. Supports $filter (eq, NOT, ge, le, startsWith).
         * @param value Value to set for the alternativeNames property.
         */
        set: function (value) {
            this._alternativeNames = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "appDescription", {
        /**
         * Gets the appDescription property value. The description exposed by the associated application.
         * @returns a string
         */
        get: function () {
            return this._appDescription;
        },
        /**
         * Sets the appDescription property value. The description exposed by the associated application.
         * @param value Value to set for the appDescription property.
         */
        set: function (value) {
            this._appDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "appDisplayName", {
        /**
         * Gets the appDisplayName property value. The display name exposed by the associated application.
         * @returns a string
         */
        get: function () {
            return this._appDisplayName;
        },
        /**
         * Sets the appDisplayName property value. The display name exposed by the associated application.
         * @param value Value to set for the appDisplayName property.
         */
        set: function (value) {
            this._appDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "appId", {
        /**
         * Gets the appId property value. The unique identifier for the associated application (its appId property).
         * @returns a string
         */
        get: function () {
            return this._appId;
        },
        /**
         * Sets the appId property value. The unique identifier for the associated application (its appId property).
         * @param value Value to set for the appId property.
         */
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "applicationTemplateId", {
        /**
         * Gets the applicationTemplateId property value. Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only. Supports $filter (eq, ne, NOT, startsWith).
         * @returns a string
         */
        get: function () {
            return this._applicationTemplateId;
        },
        /**
         * Sets the applicationTemplateId property value. Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only. Supports $filter (eq, ne, NOT, startsWith).
         * @param value Value to set for the applicationTemplateId property.
         */
        set: function (value) {
            this._applicationTemplateId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "appOwnerOrganizationId", {
        /**
         * Gets the appOwnerOrganizationId property value. Contains the tenant id where the application is registered. This is applicable only to service principals backed by applications.Supports $filter (eq, ne, NOT, ge, le).
         * @returns a string
         */
        get: function () {
            return this._appOwnerOrganizationId;
        },
        /**
         * Sets the appOwnerOrganizationId property value. Contains the tenant id where the application is registered. This is applicable only to service principals backed by applications.Supports $filter (eq, ne, NOT, ge, le).
         * @param value Value to set for the appOwnerOrganizationId property.
         */
        set: function (value) {
            this._appOwnerOrganizationId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "appRoleAssignedTo", {
        /**
         * Gets the appRoleAssignedTo property value. App role assignments for this app or service, granted to users, groups, and other service principals.Supports $expand.
         * @returns a appRoleAssignment
         */
        get: function () {
            return this._appRoleAssignedTo;
        },
        /**
         * Sets the appRoleAssignedTo property value. App role assignments for this app or service, granted to users, groups, and other service principals.Supports $expand.
         * @param value Value to set for the appRoleAssignedTo property.
         */
        set: function (value) {
            this._appRoleAssignedTo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "appRoleAssignmentRequired", {
        /**
         * Gets the appRoleAssignmentRequired property value. Specifies whether users or other service principals need to be granted an app role assignment for this service principal before users can sign in or apps can get tokens. The default value is false. Not nullable. Supports $filter (eq, ne, NOT).
         * @returns a boolean
         */
        get: function () {
            return this._appRoleAssignmentRequired;
        },
        /**
         * Sets the appRoleAssignmentRequired property value. Specifies whether users or other service principals need to be granted an app role assignment for this service principal before users can sign in or apps can get tokens. The default value is false. Not nullable. Supports $filter (eq, ne, NOT).
         * @param value Value to set for the appRoleAssignmentRequired property.
         */
        set: function (value) {
            this._appRoleAssignmentRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "appRoleAssignments", {
        /**
         * Gets the appRoleAssignments property value. App role assignment for another app or service, granted to this service principal. Supports $expand.
         * @returns a appRoleAssignment
         */
        get: function () {
            return this._appRoleAssignments;
        },
        /**
         * Sets the appRoleAssignments property value. App role assignment for another app or service, granted to this service principal. Supports $expand.
         * @param value Value to set for the appRoleAssignments property.
         */
        set: function (value) {
            this._appRoleAssignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "appRoles", {
        /**
         * Gets the appRoles property value. The roles exposed by the application which this service principal represents. For more information see the appRoles property definition on the application entity. Not nullable.
         * @returns a appRole
         */
        get: function () {
            return this._appRoles;
        },
        /**
         * Sets the appRoles property value. The roles exposed by the application which this service principal represents. For more information see the appRoles property definition on the application entity. Not nullable.
         * @param value Value to set for the appRoles property.
         */
        set: function (value) {
            this._appRoles = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "claimsMappingPolicies", {
        /**
         * Gets the claimsMappingPolicies property value. The claimsMappingPolicies assigned to this service principal. Supports $expand.
         * @returns a claimsMappingPolicy
         */
        get: function () {
            return this._claimsMappingPolicies;
        },
        /**
         * Sets the claimsMappingPolicies property value. The claimsMappingPolicies assigned to this service principal. Supports $expand.
         * @param value Value to set for the claimsMappingPolicies property.
         */
        set: function (value) {
            this._claimsMappingPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "createdObjects", {
        /**
         * Gets the createdObjects property value. Directory objects created by this service principal. Read-only. Nullable.
         * @returns a directoryObject
         */
        get: function () {
            return this._createdObjects;
        },
        /**
         * Sets the createdObjects property value. Directory objects created by this service principal. Read-only. Nullable.
         * @param value Value to set for the createdObjects property.
         */
        set: function (value) {
            this._createdObjects = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "delegatedPermissionClassifications", {
        /**
         * Gets the delegatedPermissionClassifications property value. The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand.
         * @returns a delegatedPermissionClassification
         */
        get: function () {
            return this._delegatedPermissionClassifications;
        },
        /**
         * Sets the delegatedPermissionClassifications property value. The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand.
         * @param value Value to set for the delegatedPermissionClassifications property.
         */
        set: function (value) {
            this._delegatedPermissionClassifications = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "description", {
        /**
         * Gets the description property value. Free text field to provide an internal end-user facing description of the service principal. End-user portals such MyApps will display the application description in this field. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, NOT, ge, le, startsWith) and $search.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Free text field to provide an internal end-user facing description of the service principal. End-user portals such MyApps will display the application description in this field. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, NOT, ge, le, startsWith) and $search.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "disabledByMicrosoftStatus", {
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
    Object.defineProperty(ServicePrincipal.prototype, "displayName", {
        /**
         * Gets the displayName property value. The display name for the service principal. Supports $filter (eq, ne, NOT, ge, le, in, startsWith), $search, and $orderBy.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The display name for the service principal. Supports $filter (eq, ne, NOT, ge, le, in, startsWith), $search, and $orderBy.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "endpoints", {
        /**
         * Gets the endpoints property value. Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences.
         * @returns a endpoint
         */
        get: function () {
            return this._endpoints;
        },
        /**
         * Sets the endpoints property value. Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences.
         * @param value Value to set for the endpoints property.
         */
        set: function (value) {
            this._endpoints = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "homepage", {
        /**
         * Gets the homepage property value. Home page or landing page of the application.
         * @returns a string
         */
        get: function () {
            return this._homepage;
        },
        /**
         * Sets the homepage property value. Home page or landing page of the application.
         * @param value Value to set for the homepage property.
         */
        set: function (value) {
            this._homepage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "homeRealmDiscoveryPolicies", {
        /**
         * Gets the homeRealmDiscoveryPolicies property value. The homeRealmDiscoveryPolicies assigned to this service principal. Supports $expand.
         * @returns a homeRealmDiscoveryPolicy
         */
        get: function () {
            return this._homeRealmDiscoveryPolicies;
        },
        /**
         * Sets the homeRealmDiscoveryPolicies property value. The homeRealmDiscoveryPolicies assigned to this service principal. Supports $expand.
         * @param value Value to set for the homeRealmDiscoveryPolicies property.
         */
        set: function (value) {
            this._homeRealmDiscoveryPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "info", {
        /**
         * Gets the info property value. Basic profile information of the acquired application such as app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, NOT, ge, le).
         * @returns a informationalUrl
         */
        get: function () {
            return this._info;
        },
        /**
         * Sets the info property value. Basic profile information of the acquired application such as app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, NOT, ge, le).
         * @param value Value to set for the info property.
         */
        set: function (value) {
            this._info = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "keyCredentials", {
        /**
         * Gets the keyCredentials property value. The collection of key credentials associated with the service principal. Not nullable. Supports $filter (eq, NOT, ge, le).
         * @returns a keyCredential
         */
        get: function () {
            return this._keyCredentials;
        },
        /**
         * Sets the keyCredentials property value. The collection of key credentials associated with the service principal. Not nullable. Supports $filter (eq, NOT, ge, le).
         * @param value Value to set for the keyCredentials property.
         */
        set: function (value) {
            this._keyCredentials = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "loginUrl", {
        /**
         * Gets the loginUrl property value. Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the Azure AD My Apps, or the Azure AD SSO URL.
         * @returns a string
         */
        get: function () {
            return this._loginUrl;
        },
        /**
         * Sets the loginUrl property value. Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the Azure AD My Apps, or the Azure AD SSO URL.
         * @param value Value to set for the loginUrl property.
         */
        set: function (value) {
            this._loginUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "logoutUrl", {
        /**
         * Gets the logoutUrl property value. Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect front-channel, back-channel or SAML logout protocols.
         * @returns a string
         */
        get: function () {
            return this._logoutUrl;
        },
        /**
         * Sets the logoutUrl property value. Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect front-channel, back-channel or SAML logout protocols.
         * @param value Value to set for the logoutUrl property.
         */
        set: function (value) {
            this._logoutUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "memberOf", {
        /**
         * Gets the memberOf property value. Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._memberOf;
        },
        /**
         * Sets the memberOf property value. Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand.
         * @param value Value to set for the memberOf property.
         */
        set: function (value) {
            this._memberOf = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "notes", {
        /**
         * Gets the notes property value. Free text field to capture information about the service principal, typically used for operational purposes. Maximum allowed size is 1024 characters.
         * @returns a string
         */
        get: function () {
            return this._notes;
        },
        /**
         * Sets the notes property value. Free text field to capture information about the service principal, typically used for operational purposes. Maximum allowed size is 1024 characters.
         * @param value Value to set for the notes property.
         */
        set: function (value) {
            this._notes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "notificationEmailAddresses", {
        /**
         * Gets the notificationEmailAddresses property value. Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications.
         * @returns a string
         */
        get: function () {
            return this._notificationEmailAddresses;
        },
        /**
         * Sets the notificationEmailAddresses property value. Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications.
         * @param value Value to set for the notificationEmailAddresses property.
         */
        set: function (value) {
            this._notificationEmailAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "oauth2PermissionGrants", {
        /**
         * Gets the oauth2PermissionGrants property value. Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable.
         * @returns a oAuth2PermissionGrant
         */
        get: function () {
            return this._oauth2PermissionGrants;
        },
        /**
         * Sets the oauth2PermissionGrants property value. Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable.
         * @param value Value to set for the oauth2PermissionGrants property.
         */
        set: function (value) {
            this._oauth2PermissionGrants = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "oauth2PermissionScopes", {
        /**
         * Gets the oauth2PermissionScopes property value. The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on the application entity's api property. Not nullable.
         * @returns a permissionScope
         */
        get: function () {
            return this._oauth2PermissionScopes;
        },
        /**
         * Sets the oauth2PermissionScopes property value. The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on the application entity's api property. Not nullable.
         * @param value Value to set for the oauth2PermissionScopes property.
         */
        set: function (value) {
            this._oauth2PermissionScopes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "ownedObjects", {
        /**
         * Gets the ownedObjects property value. Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._ownedObjects;
        },
        /**
         * Sets the ownedObjects property value. Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand.
         * @param value Value to set for the ownedObjects property.
         */
        set: function (value) {
            this._ownedObjects = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "owners", {
        /**
         * Gets the owners property value. Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or servicePrincipals who are allowed to modify this object. Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._owners;
        },
        /**
         * Sets the owners property value. Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or servicePrincipals who are allowed to modify this object. Read-only. Nullable. Supports $expand.
         * @param value Value to set for the owners property.
         */
        set: function (value) {
            this._owners = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "passwordCredentials", {
        /**
         * Gets the passwordCredentials property value. The collection of password credentials associated with the service principal. Not nullable.
         * @returns a passwordCredential
         */
        get: function () {
            return this._passwordCredentials;
        },
        /**
         * Sets the passwordCredentials property value. The collection of password credentials associated with the service principal. Not nullable.
         * @param value Value to set for the passwordCredentials property.
         */
        set: function (value) {
            this._passwordCredentials = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "preferredSingleSignOnMode", {
        /**
         * Gets the preferredSingleSignOnMode property value. Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml, notSupported, and oidc.
         * @returns a string
         */
        get: function () {
            return this._preferredSingleSignOnMode;
        },
        /**
         * Sets the preferredSingleSignOnMode property value. Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml, notSupported, and oidc.
         * @param value Value to set for the preferredSingleSignOnMode property.
         */
        set: function (value) {
            this._preferredSingleSignOnMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "preferredTokenSigningKeyThumbprint", {
        /**
         * Gets the preferredTokenSigningKeyThumbprint property value. Reserved for internal use only. Do not write or otherwise rely on this property. May be removed in future versions.
         * @returns a string
         */
        get: function () {
            return this._preferredTokenSigningKeyThumbprint;
        },
        /**
         * Sets the preferredTokenSigningKeyThumbprint property value. Reserved for internal use only. Do not write or otherwise rely on this property. May be removed in future versions.
         * @param value Value to set for the preferredTokenSigningKeyThumbprint property.
         */
        set: function (value) {
            this._preferredTokenSigningKeyThumbprint = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "replyUrls", {
        /**
         * Gets the replyUrls property value. The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to for the associated application. Not nullable.
         * @returns a string
         */
        get: function () {
            return this._replyUrls;
        },
        /**
         * Sets the replyUrls property value. The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to for the associated application. Not nullable.
         * @param value Value to set for the replyUrls property.
         */
        set: function (value) {
            this._replyUrls = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "samlSingleSignOnSettings", {
        /**
         * Gets the samlSingleSignOnSettings property value. The collection for settings related to saml single sign-on.
         * @returns a samlSingleSignOnSettings
         */
        get: function () {
            return this._samlSingleSignOnSettings;
        },
        /**
         * Sets the samlSingleSignOnSettings property value. The collection for settings related to saml single sign-on.
         * @param value Value to set for the samlSingleSignOnSettings property.
         */
        set: function (value) {
            this._samlSingleSignOnSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "servicePrincipalNames", {
        /**
         * Gets the servicePrincipalNames property value. Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For example,Client apps can specify a resource URI which is based on the values of this property to acquire an access token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued properties. Not nullable.  Supports $filter (eq, NOT, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._servicePrincipalNames;
        },
        /**
         * Sets the servicePrincipalNames property value. Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For example,Client apps can specify a resource URI which is based on the values of this property to acquire an access token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued properties. Not nullable.  Supports $filter (eq, NOT, ge, le, startsWith).
         * @param value Value to set for the servicePrincipalNames property.
         */
        set: function (value) {
            this._servicePrincipalNames = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "servicePrincipalType", {
        /**
         * Gets the servicePrincipalType property value. Identifies if the service principal represents an application or a managed identity. This is set by Azure AD internally. For a service principal that represents an application this is set as Application. For a service principal that represent a managed identity this is set as ManagedIdentity.
         * @returns a string
         */
        get: function () {
            return this._servicePrincipalType;
        },
        /**
         * Sets the servicePrincipalType property value. Identifies if the service principal represents an application or a managed identity. This is set by Azure AD internally. For a service principal that represents an application this is set as Application. For a service principal that represent a managed identity this is set as ManagedIdentity.
         * @param value Value to set for the servicePrincipalType property.
         */
        set: function (value) {
            this._servicePrincipalType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "signInAudience", {
        /**
         * Gets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values are:AzureADMyOrg: Users with a Microsoft work or school account in my organization’s Azure AD tenant (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization’s Azure AD tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school account in any organization’s Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only.
         * @returns a string
         */
        get: function () {
            return this._signInAudience;
        },
        /**
         * Sets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values are:AzureADMyOrg: Users with a Microsoft work or school account in my organization’s Azure AD tenant (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization’s Azure AD tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school account in any organization’s Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only.
         * @param value Value to set for the signInAudience property.
         */
        set: function (value) {
            this._signInAudience = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "tags", {
        /**
         * Gets the tags property value. Custom strings that can be used to categorize and identify the service principal. Not nullable. Supports $filter (eq, NOT, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._tags;
        },
        /**
         * Sets the tags property value. Custom strings that can be used to categorize and identify the service principal. Not nullable. Supports $filter (eq, NOT, ge, le, startsWith).
         * @param value Value to set for the tags property.
         */
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "tokenEncryptionKeyId", {
        /**
         * Gets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for this application encrypted using the key specified by this property. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
         * @returns a string
         */
        get: function () {
            return this._tokenEncryptionKeyId;
        },
        /**
         * Sets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for this application encrypted using the key specified by this property. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
         * @param value Value to set for the tokenEncryptionKeyId property.
         */
        set: function (value) {
            this._tokenEncryptionKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "tokenIssuancePolicies", {
        /**
         * Gets the tokenIssuancePolicies property value. The tokenIssuancePolicies assigned to this service principal. Supports $expand.
         * @returns a tokenIssuancePolicy
         */
        get: function () {
            return this._tokenIssuancePolicies;
        },
        /**
         * Sets the tokenIssuancePolicies property value. The tokenIssuancePolicies assigned to this service principal. Supports $expand.
         * @param value Value to set for the tokenIssuancePolicies property.
         */
        set: function (value) {
            this._tokenIssuancePolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "tokenLifetimePolicies", {
        /**
         * Gets the tokenLifetimePolicies property value. The tokenLifetimePolicies assigned to this service principal. Supports $expand.
         * @returns a tokenLifetimePolicy
         */
        get: function () {
            return this._tokenLifetimePolicies;
        },
        /**
         * Sets the tokenLifetimePolicies property value. The tokenLifetimePolicies assigned to this service principal. Supports $expand.
         * @param value Value to set for the tokenLifetimePolicies property.
         */
        set: function (value) {
            this._tokenLifetimePolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePrincipal.prototype, "transitiveMemberOf", {
        /**
         * Gets the transitiveMemberOf property value.
         * @returns a directoryObject
         */
        get: function () {
            return this._transitiveMemberOf;
        },
        /**
         * Sets the transitiveMemberOf property value.
         * @param value Value to set for the transitiveMemberOf property.
         */
        set: function (value) {
            this._transitiveMemberOf = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ServicePrincipal.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["accountEnabled", function (o, n) { o.accountEnabled = n.getBooleanValue(); }],
            ["addIns", function (o, n) { o.addIns = n.getCollectionOfObjectValues(addIn_1.AddIn); }],
            ["alternativeNames", function (o, n) { o.alternativeNames = n.getCollectionOfPrimitiveValues(); }],
            ["appDescription", function (o, n) { o.appDescription = n.getStringValue(); }],
            ["appDisplayName", function (o, n) { o.appDisplayName = n.getStringValue(); }],
            ["appId", function (o, n) { o.appId = n.getStringValue(); }],
            ["applicationTemplateId", function (o, n) { o.applicationTemplateId = n.getStringValue(); }],
            ["appOwnerOrganizationId", function (o, n) { o.appOwnerOrganizationId = n.getStringValue(); }],
            ["appRoleAssignedTo", function (o, n) { o.appRoleAssignedTo = n.getCollectionOfObjectValues(appRoleAssignment_1.AppRoleAssignment); }],
            ["appRoleAssignmentRequired", function (o, n) { o.appRoleAssignmentRequired = n.getBooleanValue(); }],
            ["appRoleAssignments", function (o, n) { o.appRoleAssignments = n.getCollectionOfObjectValues(appRoleAssignment_1.AppRoleAssignment); }],
            ["appRoles", function (o, n) { o.appRoles = n.getCollectionOfObjectValues(appRole_1.AppRole); }],
            ["claimsMappingPolicies", function (o, n) { o.claimsMappingPolicies = n.getCollectionOfObjectValues(claimsMappingPolicy_1.ClaimsMappingPolicy); }],
            ["createdObjects", function (o, n) { o.createdObjects = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["delegatedPermissionClassifications", function (o, n) { o.delegatedPermissionClassifications = n.getCollectionOfObjectValues(delegatedPermissionClassification_1.DelegatedPermissionClassification); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["disabledByMicrosoftStatus", function (o, n) { o.disabledByMicrosoftStatus = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["endpoints", function (o, n) { o.endpoints = n.getCollectionOfObjectValues(endpoint_1.Endpoint); }],
            ["homepage", function (o, n) { o.homepage = n.getStringValue(); }],
            ["homeRealmDiscoveryPolicies", function (o, n) { o.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValues(homeRealmDiscoveryPolicy_1.HomeRealmDiscoveryPolicy); }],
            ["info", function (o, n) { o.info = n.getObjectValue(InformationalUrl); }],
            ["keyCredentials", function (o, n) { o.keyCredentials = n.getCollectionOfObjectValues(keyCredential_1.KeyCredential); }],
            ["loginUrl", function (o, n) { o.loginUrl = n.getStringValue(); }],
            ["logoutUrl", function (o, n) { o.logoutUrl = n.getStringValue(); }],
            ["memberOf", function (o, n) { o.memberOf = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["notes", function (o, n) { o.notes = n.getStringValue(); }],
            ["notificationEmailAddresses", function (o, n) { o.notificationEmailAddresses = n.getCollectionOfPrimitiveValues(); }],
            ["oauth2PermissionGrants", function (o, n) { o.oauth2PermissionGrants = n.getCollectionOfObjectValues(oAuth2PermissionGrant_1.OAuth2PermissionGrant); }],
            ["oauth2PermissionScopes", function (o, n) { o.oauth2PermissionScopes = n.getCollectionOfObjectValues(permissionScope_1.PermissionScope); }],
            ["ownedObjects", function (o, n) { o.ownedObjects = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["owners", function (o, n) { o.owners = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["passwordCredentials", function (o, n) { o.passwordCredentials = n.getCollectionOfObjectValues(passwordCredential_1.PasswordCredential); }],
            ["preferredSingleSignOnMode", function (o, n) { o.preferredSingleSignOnMode = n.getStringValue(); }],
            ["preferredTokenSigningKeyThumbprint", function (o, n) { o.preferredTokenSigningKeyThumbprint = n.getStringValue(); }],
            ["replyUrls", function (o, n) { o.replyUrls = n.getCollectionOfPrimitiveValues(); }],
            ["samlSingleSignOnSettings", function (o, n) { o.samlSingleSignOnSettings = n.getObjectValue(SamlSingleSignOnSettings); }],
            ["servicePrincipalNames", function (o, n) { o.servicePrincipalNames = n.getCollectionOfPrimitiveValues(); }],
            ["servicePrincipalType", function (o, n) { o.servicePrincipalType = n.getStringValue(); }],
            ["signInAudience", function (o, n) { o.signInAudience = n.getStringValue(); }],
            ["tags", function (o, n) { o.tags = n.getCollectionOfPrimitiveValues(); }],
            ["tokenEncryptionKeyId", function (o, n) { o.tokenEncryptionKeyId = n.getStringValue(); }],
            ["tokenIssuancePolicies", function (o, n) { o.tokenIssuancePolicies = n.getCollectionOfObjectValues(tokenIssuancePolicy_1.TokenIssuancePolicy); }],
            ["tokenLifetimePolicies", function (o, n) { o.tokenLifetimePolicies = n.getCollectionOfObjectValues(tokenLifetimePolicy_1.TokenLifetimePolicy); }],
            ["transitiveMemberOf", function (o, n) { o.transitiveMemberOf = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ServicePrincipal.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        writer.writeCollectionOfObjectValues("addIns", this.addIns);
        writer.writeCollectionOfPrimitiveValues("alternativeNames", this.alternativeNames);
        writer.writeStringValue("appDescription", this.appDescription);
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("applicationTemplateId", this.applicationTemplateId);
        writer.writeStringValue("appOwnerOrganizationId", this.appOwnerOrganizationId);
        writer.writeCollectionOfObjectValues("appRoleAssignedTo", this.appRoleAssignedTo);
        writer.writeBooleanValue("appRoleAssignmentRequired", this.appRoleAssignmentRequired);
        writer.writeCollectionOfObjectValues("appRoleAssignments", this.appRoleAssignments);
        writer.writeCollectionOfObjectValues("appRoles", this.appRoles);
        writer.writeCollectionOfObjectValues("claimsMappingPolicies", this.claimsMappingPolicies);
        writer.writeCollectionOfObjectValues("createdObjects", this.createdObjects);
        writer.writeCollectionOfObjectValues("delegatedPermissionClassifications", this.delegatedPermissionClassifications);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("disabledByMicrosoftStatus", this.disabledByMicrosoftStatus);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues("endpoints", this.endpoints);
        writer.writeStringValue("homepage", this.homepage);
        writer.writeCollectionOfObjectValues("homeRealmDiscoveryPolicies", this.homeRealmDiscoveryPolicies);
        writer.writeObjectValue("info", this.info);
        writer.writeCollectionOfObjectValues("keyCredentials", this.keyCredentials);
        writer.writeStringValue("loginUrl", this.loginUrl);
        writer.writeStringValue("logoutUrl", this.logoutUrl);
        writer.writeCollectionOfObjectValues("memberOf", this.memberOf);
        writer.writeStringValue("notes", this.notes);
        writer.writeCollectionOfPrimitiveValues("notificationEmailAddresses", this.notificationEmailAddresses);
        writer.writeCollectionOfObjectValues("oauth2PermissionGrants", this.oauth2PermissionGrants);
        writer.writeCollectionOfObjectValues("oauth2PermissionScopes", this.oauth2PermissionScopes);
        writer.writeCollectionOfObjectValues("ownedObjects", this.ownedObjects);
        writer.writeCollectionOfObjectValues("owners", this.owners);
        writer.writeCollectionOfObjectValues("passwordCredentials", this.passwordCredentials);
        writer.writeStringValue("preferredSingleSignOnMode", this.preferredSingleSignOnMode);
        writer.writeStringValue("preferredTokenSigningKeyThumbprint", this.preferredTokenSigningKeyThumbprint);
        writer.writeCollectionOfPrimitiveValues("replyUrls", this.replyUrls);
        writer.writeObjectValue("samlSingleSignOnSettings", this.samlSingleSignOnSettings);
        writer.writeCollectionOfPrimitiveValues("servicePrincipalNames", this.servicePrincipalNames);
        writer.writeStringValue("servicePrincipalType", this.servicePrincipalType);
        writer.writeStringValue("signInAudience", this.signInAudience);
        writer.writeCollectionOfPrimitiveValues("tags", this.tags);
        writer.writeStringValue("tokenEncryptionKeyId", this.tokenEncryptionKeyId);
        writer.writeCollectionOfObjectValues("tokenIssuancePolicies", this.tokenIssuancePolicies);
        writer.writeCollectionOfObjectValues("tokenLifetimePolicies", this.tokenLifetimePolicies);
        writer.writeCollectionOfObjectValues("transitiveMemberOf", this.transitiveMemberOf);
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
    return ServicePrincipal;
}(directoryObject_1.DirectoryObject));
exports.ServicePrincipal = ServicePrincipal;
