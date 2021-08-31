"use strict";
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
exports.GraphServiceClient = void 0;
var agreementAcceptancesRequestBuilder_1 = require("./agreementAcceptances/agreementAcceptancesRequestBuilder");
var agreementAcceptanceRequestBuilder_1 = require("./agreementAcceptances/item/agreementAcceptanceRequestBuilder");
var agreementsRequestBuilder_1 = require("./agreements/agreementsRequestBuilder");
var agreementRequestBuilder_1 = require("./agreements/item/agreementRequestBuilder");
var appCatalogsRequestBuilder_1 = require("./appCatalogs/appCatalogsRequestBuilder");
var applicationsRequestBuilder_1 = require("./applications/applicationsRequestBuilder");
var applicationRequestBuilder_1 = require("./applications/item/applicationRequestBuilder");
var applicationTemplatesRequestBuilder_1 = require("./applicationTemplates/applicationTemplatesRequestBuilder");
var applicationTemplateRequestBuilder_1 = require("./applicationTemplates/item/applicationTemplateRequestBuilder");
var auditLogsRequestBuilder_1 = require("./auditLogs/auditLogsRequestBuilder");
var authenticationMethodConfigurationsRequestBuilder_1 = require("./authenticationMethodConfigurations/authenticationMethodConfigurationsRequestBuilder");
var authenticationMethodConfigurationRequestBuilder_1 = require("./authenticationMethodConfigurations/item/authenticationMethodConfigurationRequestBuilder");
var authenticationMethodsPolicyRequestBuilder_1 = require("./authenticationMethodsPolicy/authenticationMethodsPolicyRequestBuilder");
var brandingRequestBuilder_1 = require("./branding/brandingRequestBuilder");
var certificateBasedAuthConfigurationRequestBuilder_1 = require("./certificateBasedAuthConfiguration/certificateBasedAuthConfigurationRequestBuilder");
var chatsRequestBuilder_1 = require("./chats/chatsRequestBuilder");
var chatRequestBuilder_1 = require("./chats/item/chatRequestBuilder");
var communicationsRequestBuilder_1 = require("./communications/communicationsRequestBuilder");
var connectionsRequestBuilder_1 = require("./connections/connectionsRequestBuilder");
var externalConnectionRequestBuilder_1 = require("./connections/item/externalConnectionRequestBuilder");
var contactsRequestBuilder_1 = require("./contacts/contactsRequestBuilder");
var orgContactRequestBuilder_1 = require("./contacts/item/orgContactRequestBuilder");
var contractsRequestBuilder_1 = require("./contracts/contractsRequestBuilder");
var contractRequestBuilder_1 = require("./contracts/item/contractRequestBuilder");
var dataPolicyOperationsRequestBuilder_1 = require("./dataPolicyOperations/dataPolicyOperationsRequestBuilder");
var dataPolicyOperationRequestBuilder_1 = require("./dataPolicyOperations/item/dataPolicyOperationRequestBuilder");
var deviceAppManagementRequestBuilder_1 = require("./deviceAppManagement/deviceAppManagementRequestBuilder");
var deviceManagementRequestBuilder_1 = require("./deviceManagement/deviceManagementRequestBuilder");
var devicesRequestBuilder_1 = require("./devices/devicesRequestBuilder");
var deviceRequestBuilder_1 = require("./devices/item/deviceRequestBuilder");
var directoryRequestBuilder_1 = require("./directory/directoryRequestBuilder");
var directoryObjectsRequestBuilder_1 = require("./directoryObjects/directoryObjectsRequestBuilder");
var directoryObjectRequestBuilder_1 = require("./directoryObjects/item/directoryObjectRequestBuilder");
var directoryRolesRequestBuilder_1 = require("./directoryRoles/directoryRolesRequestBuilder");
var directoryRoleRequestBuilder_1 = require("./directoryRoles/item/directoryRoleRequestBuilder");
var directoryRoleTemplatesRequestBuilder_1 = require("./directoryRoleTemplates/directoryRoleTemplatesRequestBuilder");
var directoryRoleTemplateRequestBuilder_1 = require("./directoryRoleTemplates/item/directoryRoleTemplateRequestBuilder");
var domainDnsRecordsRequestBuilder_1 = require("./domainDnsRecords/domainDnsRecordsRequestBuilder");
var domainDnsRecordRequestBuilder_1 = require("./domainDnsRecords/item/domainDnsRecordRequestBuilder");
var domainsRequestBuilder_1 = require("./domains/domainsRequestBuilder");
var domainRequestBuilder_1 = require("./domains/item/domainRequestBuilder");
var driveRequestBuilder_1 = require("./drive/driveRequestBuilder");
var drivesRequestBuilder_1 = require("./drives/drivesRequestBuilder");
var educationRequestBuilder_1 = require("./education/educationRequestBuilder");
var externalRequestBuilder_1 = require("./external/externalRequestBuilder");
var groupLifecyclePoliciesRequestBuilder_1 = require("./groupLifecyclePolicies/groupLifecyclePoliciesRequestBuilder");
var groupLifecyclePolicyRequestBuilder_1 = require("./groupLifecyclePolicies/item/groupLifecyclePolicyRequestBuilder");
var groupsRequestBuilder_1 = require("./groups/groupsRequestBuilder");
var groupRequestBuilder_1 = require("./groups/item/groupRequestBuilder");
var groupSettingsRequestBuilder_1 = require("./groupSettings/groupSettingsRequestBuilder");
var groupSettingRequestBuilder_1 = require("./groupSettings/item/groupSettingRequestBuilder");
var groupSettingTemplatesRequestBuilder_1 = require("./groupSettingTemplates/groupSettingTemplatesRequestBuilder");
var groupSettingTemplateRequestBuilder_1 = require("./groupSettingTemplates/item/groupSettingTemplateRequestBuilder");
var identityRequestBuilder_1 = require("./identity/identityRequestBuilder");
var identityGovernanceRequestBuilder_1 = require("./identityGovernance/identityGovernanceRequestBuilder");
var identityProvidersRequestBuilder_1 = require("./identityProviders/identityProvidersRequestBuilder");
var identityProviderRequestBuilder_1 = require("./identityProviders/item/identityProviderRequestBuilder");
var informationProtectionRequestBuilder_1 = require("./informationProtection/informationProtectionRequestBuilder");
var invitationsRequestBuilder_1 = require("./invitations/invitationsRequestBuilder");
var invitationRequestBuilder_1 = require("./invitations/item/invitationRequestBuilder");
var organizationalBrandingLocalizationRequestBuilder_1 = require("./localizations/item/organizationalBrandingLocalizationRequestBuilder");
var localizationsRequestBuilder_1 = require("./localizations/localizationsRequestBuilder");
var meRequestBuilder_1 = require("./me/meRequestBuilder");
var oAuth2PermissionGrantRequestBuilder_1 = require("./oauth2PermissionGrants/item/oAuth2PermissionGrantRequestBuilder");
var oauth2PermissionGrantsRequestBuilder_1 = require("./oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder");
var organizationRequestBuilder_1 = require("./organization/organizationRequestBuilder");
var resourceSpecificPermissionGrantRequestBuilder_1 = require("./permissionGrants/item/resourceSpecificPermissionGrantRequestBuilder");
var permissionGrantsRequestBuilder_1 = require("./permissionGrants/permissionGrantsRequestBuilder");
var placeRequestBuilder_1 = require("./places/item/placeRequestBuilder");
var placesRequestBuilder_1 = require("./places/placesRequestBuilder");
var plannerRequestBuilder_1 = require("./planner/plannerRequestBuilder");
var policiesRequestBuilder_1 = require("./policies/policiesRequestBuilder");
var printRequestBuilder_1 = require("./print/printRequestBuilder");
var reportsRequestBuilder_1 = require("./reports/reportsRequestBuilder");
var roleManagementRequestBuilder_1 = require("./roleManagement/roleManagementRequestBuilder");
var schemaExtensionRequestBuilder_1 = require("./schemaExtensions/item/schemaExtensionRequestBuilder");
var schemaExtensionsRequestBuilder_1 = require("./schemaExtensions/schemaExtensionsRequestBuilder");
var scopedRoleMembershipRequestBuilder_1 = require("./scopedRoleMemberships/item/scopedRoleMembershipRequestBuilder");
var scopedRoleMembershipsRequestBuilder_1 = require("./scopedRoleMemberships/scopedRoleMembershipsRequestBuilder");
var searchRequestBuilder_1 = require("./search/searchRequestBuilder");
var securityRequestBuilder_1 = require("./security/securityRequestBuilder");
var servicePrincipalRequestBuilder_1 = require("./servicePrincipals/item/servicePrincipalRequestBuilder");
var servicePrincipalsRequestBuilder_1 = require("./servicePrincipals/servicePrincipalsRequestBuilder");
var sharedDriveItemRequestBuilder_1 = require("./shares/item/sharedDriveItemRequestBuilder");
var sharesRequestBuilder_1 = require("./shares/sharesRequestBuilder");
var siteRequestBuilder_1 = require("./sites/item/siteRequestBuilder");
var sitesRequestBuilder_1 = require("./sites/sitesRequestBuilder");
var subscribedSkuRequestBuilder_1 = require("./subscribedSkus/item/subscribedSkuRequestBuilder");
var subscribedSkusRequestBuilder_1 = require("./subscribedSkus/subscribedSkusRequestBuilder");
var subscriptionRequestBuilder_1 = require("./subscriptions/item/subscriptionRequestBuilder");
var subscriptionsRequestBuilder_1 = require("./subscriptions/subscriptionsRequestBuilder");
var teamRequestBuilder_1 = require("./teams/item/teamRequestBuilder");
var teamsRequestBuilder_1 = require("./teams/teamsRequestBuilder");
var teamsTemplateRequestBuilder_1 = require("./teamsTemplates/item/teamsTemplateRequestBuilder");
var teamsTemplatesRequestBuilder_1 = require("./teamsTemplates/teamsTemplatesRequestBuilder");
var teamworkRequestBuilder_1 = require("./teamwork/teamworkRequestBuilder");
var userRequestBuilder_1 = require("./users/item/userRequestBuilder");
var usersRequestBuilder_1 = require("./users/usersRequestBuilder");
var driveItemRequestBuilder_1 = require("./workbooks/item/driveItemRequestBuilder");
var workbooksRequestBuilder_1 = require("./workbooks/workbooksRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var kiota_serialization_json_1 = require("@microsoft/kiota-serialization-json");
/** The main entry point of the SDK, exposes the configuration and the fluent API.  */
var GraphServiceClient = /** @class */ (function () {
    /**
     * Instantiates a new GraphServiceClient and sets the default values.
     * @param httpCore The http core service to use to execute the requests.
     */
    function GraphServiceClient(httpCore) {
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "https://graph.microsoft.com/v1.0";
        this.httpCore = httpCore;
        (0, kiota_abstractions_1.registerDefaultSerializer)(kiota_serialization_json_1.JsonSerializationWriterFactory);
        (0, kiota_abstractions_1.registerDefaultDeserializer)(kiota_serialization_json_1.JsonParseNodeFactory);
    }
    Object.defineProperty(GraphServiceClient.prototype, "agreementAcceptances", {
        get: function () {
            return new agreementAcceptancesRequestBuilder_1.AgreementAcceptancesRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "agreements", {
        get: function () {
            return new agreementsRequestBuilder_1.AgreementsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "appCatalogs", {
        get: function () {
            return new appCatalogsRequestBuilder_1.AppCatalogsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "applications", {
        get: function () {
            return new applicationsRequestBuilder_1.ApplicationsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "applicationTemplates", {
        get: function () {
            return new applicationTemplatesRequestBuilder_1.ApplicationTemplatesRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "auditLogs", {
        get: function () {
            return new auditLogsRequestBuilder_1.AuditLogsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "authenticationMethodConfigurations", {
        get: function () {
            return new authenticationMethodConfigurationsRequestBuilder_1.AuthenticationMethodConfigurationsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "authenticationMethodsPolicy", {
        get: function () {
            return new authenticationMethodsPolicyRequestBuilder_1.AuthenticationMethodsPolicyRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "branding", {
        get: function () {
            return new brandingRequestBuilder_1.BrandingRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "certificateBasedAuthConfiguration", {
        get: function () {
            return new certificateBasedAuthConfigurationRequestBuilder_1.CertificateBasedAuthConfigurationRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "chats", {
        get: function () {
            return new chatsRequestBuilder_1.ChatsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "communications", {
        get: function () {
            return new communicationsRequestBuilder_1.CommunicationsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "connections", {
        get: function () {
            return new connectionsRequestBuilder_1.ConnectionsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "contacts", {
        get: function () {
            return new contactsRequestBuilder_1.ContactsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "contracts", {
        get: function () {
            return new contractsRequestBuilder_1.ContractsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "dataPolicyOperations", {
        get: function () {
            return new dataPolicyOperationsRequestBuilder_1.DataPolicyOperationsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "deviceAppManagement", {
        get: function () {
            return new deviceAppManagementRequestBuilder_1.DeviceAppManagementRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "deviceManagement", {
        get: function () {
            return new deviceManagementRequestBuilder_1.DeviceManagementRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "devices", {
        get: function () {
            return new devicesRequestBuilder_1.DevicesRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "directory", {
        get: function () {
            return new directoryRequestBuilder_1.DirectoryRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "directoryObjects", {
        get: function () {
            return new directoryObjectsRequestBuilder_1.DirectoryObjectsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "directoryRoles", {
        get: function () {
            return new directoryRolesRequestBuilder_1.DirectoryRolesRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "directoryRoleTemplates", {
        get: function () {
            return new directoryRoleTemplatesRequestBuilder_1.DirectoryRoleTemplatesRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "domainDnsRecords", {
        get: function () {
            return new domainDnsRecordsRequestBuilder_1.DomainDnsRecordsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "domains", {
        get: function () {
            return new domainsRequestBuilder_1.DomainsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "drive", {
        get: function () {
            return new driveRequestBuilder_1.DriveRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "drives", {
        get: function () {
            return new drivesRequestBuilder_1.DrivesRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "education", {
        get: function () {
            return new educationRequestBuilder_1.EducationRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "external", {
        get: function () {
            return new externalRequestBuilder_1.ExternalRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "groupLifecyclePolicies", {
        get: function () {
            return new groupLifecyclePoliciesRequestBuilder_1.GroupLifecyclePoliciesRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "groups", {
        get: function () {
            return new groupsRequestBuilder_1.GroupsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "groupSettings", {
        get: function () {
            return new groupSettingsRequestBuilder_1.GroupSettingsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "groupSettingTemplates", {
        get: function () {
            return new groupSettingTemplatesRequestBuilder_1.GroupSettingTemplatesRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "identity", {
        get: function () {
            return new identityRequestBuilder_1.IdentityRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "identityGovernance", {
        get: function () {
            return new identityGovernanceRequestBuilder_1.IdentityGovernanceRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "identityProviders", {
        get: function () {
            return new identityProvidersRequestBuilder_1.IdentityProvidersRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "informationProtection", {
        get: function () {
            return new informationProtectionRequestBuilder_1.InformationProtectionRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "invitations", {
        get: function () {
            return new invitationsRequestBuilder_1.InvitationsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "localizations", {
        get: function () {
            return new localizationsRequestBuilder_1.LocalizationsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "me", {
        get: function () {
            return new meRequestBuilder_1.MeRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "oauth2PermissionGrants", {
        get: function () {
            return new oauth2PermissionGrantsRequestBuilder_1.Oauth2PermissionGrantsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "organization", {
        get: function () {
            return new organizationRequestBuilder_1.OrganizationRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "permissionGrants", {
        get: function () {
            return new permissionGrantsRequestBuilder_1.PermissionGrantsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "places", {
        get: function () {
            return new placesRequestBuilder_1.PlacesRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "planner", {
        get: function () {
            return new plannerRequestBuilder_1.PlannerRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "policies", {
        get: function () {
            return new policiesRequestBuilder_1.PoliciesRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "print", {
        get: function () {
            return new printRequestBuilder_1.PrintRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "reports", {
        get: function () {
            return new reportsRequestBuilder_1.ReportsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "roleManagement", {
        get: function () {
            return new roleManagementRequestBuilder_1.RoleManagementRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "schemaExtensions", {
        get: function () {
            return new schemaExtensionsRequestBuilder_1.SchemaExtensionsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "scopedRoleMemberships", {
        get: function () {
            return new scopedRoleMembershipsRequestBuilder_1.ScopedRoleMembershipsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "search", {
        get: function () {
            return new searchRequestBuilder_1.SearchRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "security", {
        get: function () {
            return new securityRequestBuilder_1.SecurityRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "servicePrincipals", {
        get: function () {
            return new servicePrincipalsRequestBuilder_1.ServicePrincipalsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "shares", {
        get: function () {
            return new sharesRequestBuilder_1.SharesRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "sites", {
        get: function () {
            return new sitesRequestBuilder_1.SitesRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "subscribedSkus", {
        get: function () {
            return new subscribedSkusRequestBuilder_1.SubscribedSkusRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "subscriptions", {
        get: function () {
            return new subscriptionsRequestBuilder_1.SubscriptionsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "teams", {
        get: function () {
            return new teamsRequestBuilder_1.TeamsRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "teamsTemplates", {
        get: function () {
            return new teamsTemplatesRequestBuilder_1.TeamsTemplatesRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "teamwork", {
        get: function () {
            return new teamworkRequestBuilder_1.TeamworkRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "users", {
        get: function () {
            return new usersRequestBuilder_1.UsersRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphServiceClient.prototype, "workbooks", {
        get: function () {
            return new workbooksRequestBuilder_1.WorkbooksRequestBuilder(this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.agreementAcceptances collection
     * @param id Unique identifier of the item
     * @returns a AgreementAcceptanceRequestBuilder
     */
    GraphServiceClient.prototype.agreementAcceptancesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new agreementAcceptanceRequestBuilder_1.AgreementAcceptanceRequestBuilder(this.pathSegment + "/agreementAcceptances/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.agreements collection
     * @param id Unique identifier of the item
     * @returns a AgreementRequestBuilder
     */
    GraphServiceClient.prototype.agreementsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new agreementRequestBuilder_1.AgreementRequestBuilder(this.pathSegment + "/agreements/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.applications collection
     * @param id Unique identifier of the item
     * @returns a ApplicationRequestBuilder
     */
    GraphServiceClient.prototype.applicationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new applicationRequestBuilder_1.ApplicationRequestBuilder(this.pathSegment + "/applications/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.applicationTemplates collection
     * @param id Unique identifier of the item
     * @returns a ApplicationTemplateRequestBuilder
     */
    GraphServiceClient.prototype.applicationTemplatesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new applicationTemplateRequestBuilder_1.ApplicationTemplateRequestBuilder(this.pathSegment + "/applicationTemplates/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.authenticationMethodConfigurations collection
     * @param id Unique identifier of the item
     * @returns a AuthenticationMethodConfigurationRequestBuilder
     */
    GraphServiceClient.prototype.authenticationMethodConfigurationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new authenticationMethodConfigurationRequestBuilder_1.AuthenticationMethodConfigurationRequestBuilder(this.pathSegment + "/authenticationMethodConfigurations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.certificateBasedAuthConfiguration collection
     * @param id Unique identifier of the item
     * @returns a CertificateBasedAuthConfigurationRequestBuilder
     */
    GraphServiceClient.prototype.certificateBasedAuthConfigurationById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new certificateBasedAuthConfigurationRequestBuilder_1.CertificateBasedAuthConfigurationRequestBuilder(this.pathSegment + "/certificateBasedAuthConfiguration/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.chats collection
     * @param id Unique identifier of the item
     * @returns a ChatRequestBuilder
     */
    GraphServiceClient.prototype.chatsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new chatRequestBuilder_1.ChatRequestBuilder(this.pathSegment + "/chats/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.connections collection
     * @param id Unique identifier of the item
     * @returns a ExternalConnectionRequestBuilder
     */
    GraphServiceClient.prototype.connectionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new externalConnectionRequestBuilder_1.ExternalConnectionRequestBuilder(this.pathSegment + "/connections/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Gets an item from the MicrosoftGraph.contacts collection
     * @param id Unique identifier of the item
     * @returns a OrgContactRequestBuilder
     */
    GraphServiceClient.prototype.contactsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new orgContactRequestBuilder_1.OrgContactRequestBuilder(this.pathSegment + "/contacts/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.contracts collection
     * @param id Unique identifier of the item
     * @returns a ContractRequestBuilder
     */
    GraphServiceClient.prototype.contractsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new contractRequestBuilder_1.ContractRequestBuilder(this.pathSegment + "/contracts/" + id, this.httpCore, false);
    };
    ;
    GraphServiceClient.prototype.createGetRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.dataPolicyOperations collection
     * @param id Unique identifier of the item
     * @returns a DataPolicyOperationRequestBuilder
     */
    GraphServiceClient.prototype.dataPolicyOperationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new dataPolicyOperationRequestBuilder_1.DataPolicyOperationRequestBuilder(this.pathSegment + "/dataPolicyOperations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.devices collection
     * @param id Unique identifier of the item
     * @returns a DeviceRequestBuilder
     */
    GraphServiceClient.prototype.devicesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceRequestBuilder_1.DeviceRequestBuilder(this.pathSegment + "/devices/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.directoryObjects collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectRequestBuilder
     */
    GraphServiceClient.prototype.directoryObjectsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new directoryObjectRequestBuilder_1.DirectoryObjectRequestBuilder(this.pathSegment + "/directoryObjects/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.directoryRoles collection
     * @param id Unique identifier of the item
     * @returns a DirectoryRoleRequestBuilder
     */
    GraphServiceClient.prototype.directoryRolesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new directoryRoleRequestBuilder_1.DirectoryRoleRequestBuilder(this.pathSegment + "/directoryRoles/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.directoryRoleTemplates collection
     * @param id Unique identifier of the item
     * @returns a DirectoryRoleTemplateRequestBuilder
     */
    GraphServiceClient.prototype.directoryRoleTemplatesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new directoryRoleTemplateRequestBuilder_1.DirectoryRoleTemplateRequestBuilder(this.pathSegment + "/directoryRoleTemplates/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.domainDnsRecords collection
     * @param id Unique identifier of the item
     * @returns a DomainDnsRecordRequestBuilder
     */
    GraphServiceClient.prototype.domainDnsRecordsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new domainDnsRecordRequestBuilder_1.DomainDnsRecordRequestBuilder(this.pathSegment + "/domainDnsRecords/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.domains collection
     * @param id Unique identifier of the item
     * @returns a DomainRequestBuilder
     */
    GraphServiceClient.prototype.domainsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new domainRequestBuilder_1.DomainRequestBuilder(this.pathSegment + "/domains/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.drives collection
     * @param id Unique identifier of the item
     * @returns a DriveRequestBuilder
     */
    GraphServiceClient.prototype.drivesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new driveRequestBuilder_1.DriveRequestBuilder(this.pathSegment + "/drives/" + id, this.httpCore, false);
    };
    ;
    GraphServiceClient.prototype.get = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groupLifecyclePolicies collection
     * @param id Unique identifier of the item
     * @returns a GroupLifecyclePolicyRequestBuilder
     */
    GraphServiceClient.prototype.groupLifecyclePoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new groupLifecyclePolicyRequestBuilder_1.GroupLifecyclePolicyRequestBuilder(this.pathSegment + "/groupLifecyclePolicies/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups collection
     * @param id Unique identifier of the item
     * @returns a GroupRequestBuilder
     */
    GraphServiceClient.prototype.groupsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new groupRequestBuilder_1.GroupRequestBuilder(this.pathSegment + "/groups/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groupSettings collection
     * @param id Unique identifier of the item
     * @returns a GroupSettingRequestBuilder
     */
    GraphServiceClient.prototype.groupSettingsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new groupSettingRequestBuilder_1.GroupSettingRequestBuilder(this.pathSegment + "/groupSettings/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groupSettingTemplates collection
     * @param id Unique identifier of the item
     * @returns a GroupSettingTemplateRequestBuilder
     */
    GraphServiceClient.prototype.groupSettingTemplatesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new groupSettingTemplateRequestBuilder_1.GroupSettingTemplateRequestBuilder(this.pathSegment + "/groupSettingTemplates/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.identityProviders collection
     * @param id Unique identifier of the item
     * @returns a IdentityProviderRequestBuilder
     */
    GraphServiceClient.prototype.identityProvidersById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new identityProviderRequestBuilder_1.IdentityProviderRequestBuilder(this.pathSegment + "/identityProviders/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.invitations collection
     * @param id Unique identifier of the item
     * @returns a InvitationRequestBuilder
     */
    GraphServiceClient.prototype.invitationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new invitationRequestBuilder_1.InvitationRequestBuilder(this.pathSegment + "/invitations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.localizations collection
     * @param id Unique identifier of the item
     * @returns a OrganizationalBrandingLocalizationRequestBuilder
     */
    GraphServiceClient.prototype.localizationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new organizationalBrandingLocalizationRequestBuilder_1.OrganizationalBrandingLocalizationRequestBuilder(this.pathSegment + "/localizations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.oauth2PermissionGrants collection
     * @param id Unique identifier of the item
     * @returns a OAuth2PermissionGrantRequestBuilder
     */
    GraphServiceClient.prototype.oauth2PermissionGrantsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new oAuth2PermissionGrantRequestBuilder_1.OAuth2PermissionGrantRequestBuilder(this.pathSegment + "/oauth2PermissionGrants/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.organization collection
     * @param id Unique identifier of the item
     * @returns a OrganizationRequestBuilder
     */
    GraphServiceClient.prototype.organizationById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new organizationRequestBuilder_1.OrganizationRequestBuilder(this.pathSegment + "/organization/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.permissionGrants collection
     * @param id Unique identifier of the item
     * @returns a ResourceSpecificPermissionGrantRequestBuilder
     */
    GraphServiceClient.prototype.permissionGrantsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new resourceSpecificPermissionGrantRequestBuilder_1.ResourceSpecificPermissionGrantRequestBuilder(this.pathSegment + "/permissionGrants/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.places collection
     * @param id Unique identifier of the item
     * @returns a PlaceRequestBuilder
     */
    GraphServiceClient.prototype.placesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new placeRequestBuilder_1.PlaceRequestBuilder(this.pathSegment + "/places/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.schemaExtensions collection
     * @param id Unique identifier of the item
     * @returns a SchemaExtensionRequestBuilder
     */
    GraphServiceClient.prototype.schemaExtensionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new schemaExtensionRequestBuilder_1.SchemaExtensionRequestBuilder(this.pathSegment + "/schemaExtensions/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.scopedRoleMemberships collection
     * @param id Unique identifier of the item
     * @returns a ScopedRoleMembershipRequestBuilder
     */
    GraphServiceClient.prototype.scopedRoleMembershipsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new scopedRoleMembershipRequestBuilder_1.ScopedRoleMembershipRequestBuilder(this.pathSegment + "/scopedRoleMemberships/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals collection
     * @param id Unique identifier of the item
     * @returns a ServicePrincipalRequestBuilder
     */
    GraphServiceClient.prototype.servicePrincipalsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new servicePrincipalRequestBuilder_1.ServicePrincipalRequestBuilder(this.pathSegment + "/servicePrincipals/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.shares collection
     * @param id Unique identifier of the item
     * @returns a SharedDriveItemRequestBuilder
     */
    GraphServiceClient.prototype.sharesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new sharedDriveItemRequestBuilder_1.SharedDriveItemRequestBuilder(this.pathSegment + "/shares/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.sites collection
     * @param id Unique identifier of the item
     * @returns a SiteRequestBuilder
     */
    GraphServiceClient.prototype.sitesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new siteRequestBuilder_1.SiteRequestBuilder(this.pathSegment + "/sites/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.subscribedSkus collection
     * @param id Unique identifier of the item
     * @returns a SubscribedSkuRequestBuilder
     */
    GraphServiceClient.prototype.subscribedSkusById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new subscribedSkuRequestBuilder_1.SubscribedSkuRequestBuilder(this.pathSegment + "/subscribedSkus/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.subscriptions collection
     * @param id Unique identifier of the item
     * @returns a SubscriptionRequestBuilder
     */
    GraphServiceClient.prototype.subscriptionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new subscriptionRequestBuilder_1.SubscriptionRequestBuilder(this.pathSegment + "/subscriptions/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teams collection
     * @param id Unique identifier of the item
     * @returns a TeamRequestBuilder
     */
    GraphServiceClient.prototype.teamsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new teamRequestBuilder_1.TeamRequestBuilder(this.pathSegment + "/teams/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teamsTemplates collection
     * @param id Unique identifier of the item
     * @returns a TeamsTemplateRequestBuilder
     */
    GraphServiceClient.prototype.teamsTemplatesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new teamsTemplateRequestBuilder_1.TeamsTemplateRequestBuilder(this.pathSegment + "/teamsTemplates/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.users collection
     * @param id Unique identifier of the item
     * @returns a UserRequestBuilder
     */
    GraphServiceClient.prototype.usersById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new userRequestBuilder_1.UserRequestBuilder(this.pathSegment + "/users/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.workbooks collection
     * @param id Unique identifier of the item
     * @returns a DriveItemRequestBuilder
     */
    GraphServiceClient.prototype.workbooksById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new driveItemRequestBuilder_1.DriveItemRequestBuilder(this.pathSegment + "/workbooks/" + id, this.httpCore, false);
    };
    ;
    return GraphServiceClient;
}());
exports.GraphServiceClient = GraphServiceClient;
