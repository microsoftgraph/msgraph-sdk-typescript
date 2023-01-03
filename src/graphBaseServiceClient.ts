import {AdminRequestBuilder} from './admin/adminRequestBuilder';
import {AgreementAcceptancesRequestBuilder} from './agreementAcceptances/agreementAcceptancesRequestBuilder';
import {AgreementAcceptanceItemRequestBuilder} from './agreementAcceptances/item/agreementAcceptanceItemRequestBuilder';
import {AgreementsRequestBuilder} from './agreements/agreementsRequestBuilder';
import {AgreementItemRequestBuilder} from './agreements/item/agreementItemRequestBuilder';
import {AppCatalogsRequestBuilder} from './appCatalogs/appCatalogsRequestBuilder';
import {ApplicationsRequestBuilder} from './applications/applicationsRequestBuilder';
import {ApplicationItemRequestBuilder} from './applications/item/applicationItemRequestBuilder';
import {ApplicationTemplatesRequestBuilder} from './applicationTemplates/applicationTemplatesRequestBuilder';
import {ApplicationTemplateItemRequestBuilder} from './applicationTemplates/item/applicationTemplateItemRequestBuilder';
import {AuditLogsRequestBuilder} from './auditLogs/auditLogsRequestBuilder';
import {AuthenticationMethodConfigurationsRequestBuilder} from './authenticationMethodConfigurations/authenticationMethodConfigurationsRequestBuilder';
import {AuthenticationMethodConfigurationItemRequestBuilder} from './authenticationMethodConfigurations/item/authenticationMethodConfigurationItemRequestBuilder';
import {AuthenticationMethodsPolicyRequestBuilder} from './authenticationMethodsPolicy/authenticationMethodsPolicyRequestBuilder';
import {BrandingRequestBuilder} from './branding/brandingRequestBuilder';
import {CertificateBasedAuthConfigurationRequestBuilder} from './certificateBasedAuthConfiguration/certificateBasedAuthConfigurationRequestBuilder';
import {CertificateBasedAuthConfigurationItemRequestBuilder} from './certificateBasedAuthConfiguration/item/certificateBasedAuthConfigurationItemRequestBuilder';
import {ChatsRequestBuilder} from './chats/chatsRequestBuilder';
import {ChatItemRequestBuilder} from './chats/item/chatItemRequestBuilder';
import {CommunicationsRequestBuilder} from './communications/communicationsRequestBuilder';
import {ComplianceRequestBuilder} from './compliance/complianceRequestBuilder';
import {ConnectionsRequestBuilder} from './connections/connectionsRequestBuilder';
import {ExternalConnectionItemRequestBuilder} from './connections/item/externalConnectionItemRequestBuilder';
import {ContactsRequestBuilder} from './contacts/contactsRequestBuilder';
import {OrgContactItemRequestBuilder} from './contacts/item/orgContactItemRequestBuilder';
import {ContractsRequestBuilder} from './contracts/contractsRequestBuilder';
import {ContractItemRequestBuilder} from './contracts/item/contractItemRequestBuilder';
import {DataPolicyOperationsRequestBuilder} from './dataPolicyOperations/dataPolicyOperationsRequestBuilder';
import {DataPolicyOperationItemRequestBuilder} from './dataPolicyOperations/item/dataPolicyOperationItemRequestBuilder';
import {DeviceAppManagementRequestBuilder} from './deviceAppManagement/deviceAppManagementRequestBuilder';
import {DeviceManagementRequestBuilder} from './deviceManagement/deviceManagementRequestBuilder';
import {DevicesRequestBuilder} from './devices/devicesRequestBuilder';
import {DeviceItemRequestBuilder} from './devices/item/deviceItemRequestBuilder';
import {DirectoryRequestBuilder} from './directory/directoryRequestBuilder';
import {DirectoryObjectsRequestBuilder} from './directoryObjects/directoryObjectsRequestBuilder';
import {DirectoryObjectItemRequestBuilder} from './directoryObjects/item/directoryObjectItemRequestBuilder';
import {DirectoryRolesRequestBuilder} from './directoryRoles/directoryRolesRequestBuilder';
import {DirectoryRoleItemRequestBuilder} from './directoryRoles/item/directoryRoleItemRequestBuilder';
import {DirectoryRoleTemplatesRequestBuilder} from './directoryRoleTemplates/directoryRoleTemplatesRequestBuilder';
import {DirectoryRoleTemplateItemRequestBuilder} from './directoryRoleTemplates/item/directoryRoleTemplateItemRequestBuilder';
import {DomainDnsRecordsRequestBuilder} from './domainDnsRecords/domainDnsRecordsRequestBuilder';
import {DomainDnsRecordItemRequestBuilder} from './domainDnsRecords/item/domainDnsRecordItemRequestBuilder';
import {DomainsRequestBuilder} from './domains/domainsRequestBuilder';
import {DomainItemRequestBuilder} from './domains/item/domainItemRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {DrivesRequestBuilder} from './drives/drivesRequestBuilder';
import {DriveItemRequestBuilder} from './drives/item/driveItemRequestBuilder';
import {EducationRequestBuilder} from './education/educationRequestBuilder';
import {ExternalRequestBuilder} from './external/externalRequestBuilder';
import {GroupLifecyclePoliciesRequestBuilder} from './groupLifecyclePolicies/groupLifecyclePoliciesRequestBuilder';
import {GroupLifecyclePolicyItemRequestBuilder} from './groupLifecyclePolicies/item/groupLifecyclePolicyItemRequestBuilder';
import {GroupsRequestBuilder} from './groups/groupsRequestBuilder';
import {GroupItemRequestBuilder} from './groups/item/groupItemRequestBuilder';
import {GroupSettingsRequestBuilder} from './groupSettings/groupSettingsRequestBuilder';
import {GroupSettingItemRequestBuilder} from './groupSettings/item/groupSettingItemRequestBuilder';
import {GroupSettingTemplatesRequestBuilder} from './groupSettingTemplates/groupSettingTemplatesRequestBuilder';
import {GroupSettingTemplateItemRequestBuilder} from './groupSettingTemplates/item/groupSettingTemplateItemRequestBuilder';
import {IdentityRequestBuilder} from './identity/identityRequestBuilder';
import {IdentityGovernanceRequestBuilder} from './identityGovernance/identityGovernanceRequestBuilder';
import {IdentityProtectionRequestBuilder} from './identityProtection/identityProtectionRequestBuilder';
import {IdentityProvidersRequestBuilder} from './identityProviders/identityProvidersRequestBuilder';
import {IdentityProviderItemRequestBuilder} from './identityProviders/item/identityProviderItemRequestBuilder';
import {InformationProtectionRequestBuilder} from './informationProtection/informationProtectionRequestBuilder';
import {InvitationsRequestBuilder} from './invitations/invitationsRequestBuilder';
import {InvitationItemRequestBuilder} from './invitations/item/invitationItemRequestBuilder';
import {OrganizationalBrandingLocalizationItemRequestBuilder} from './localizations/item/organizationalBrandingLocalizationItemRequestBuilder';
import {LocalizationsRequestBuilder} from './localizations/localizationsRequestBuilder';
import {MeRequestBuilder} from './me/meRequestBuilder';
import {OAuth2PermissionGrantItemRequestBuilder} from './oauth2PermissionGrants/item/oAuth2PermissionGrantItemRequestBuilder';
import {Oauth2PermissionGrantsRequestBuilder} from './oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder';
import {OrganizationItemRequestBuilder} from './organization/item/organizationItemRequestBuilder';
import {OrganizationRequestBuilder} from './organization/organizationRequestBuilder';
import {ResourceSpecificPermissionGrantItemRequestBuilder} from './permissionGrants/item/resourceSpecificPermissionGrantItemRequestBuilder';
import {PermissionGrantsRequestBuilder} from './permissionGrants/permissionGrantsRequestBuilder';
import {PlaceItemRequestBuilder} from './places/item/placeItemRequestBuilder';
import {PlacesRequestBuilder} from './places/placesRequestBuilder';
import {PlannerRequestBuilder} from './planner/plannerRequestBuilder';
import {PoliciesRequestBuilder} from './policies/policiesRequestBuilder';
import {PrintRequestBuilder} from './print/printRequestBuilder';
import {PrivacyRequestBuilder} from './privacy/privacyRequestBuilder';
import {ReportsRequestBuilder} from './reports/reportsRequestBuilder';
import {RoleManagementRequestBuilder} from './roleManagement/roleManagementRequestBuilder';
import {SchemaExtensionItemRequestBuilder} from './schemaExtensions/item/schemaExtensionItemRequestBuilder';
import {SchemaExtensionsRequestBuilder} from './schemaExtensions/schemaExtensionsRequestBuilder';
import {ScopedRoleMembershipItemRequestBuilder} from './scopedRoleMemberships/item/scopedRoleMembershipItemRequestBuilder';
import {ScopedRoleMembershipsRequestBuilder} from './scopedRoleMemberships/scopedRoleMembershipsRequestBuilder';
import {SearchRequestBuilder} from './search/searchRequestBuilder';
import {SecurityRequestBuilder} from './security/securityRequestBuilder';
import {ServicePrincipalItemRequestBuilder} from './servicePrincipals/item/servicePrincipalItemRequestBuilder';
import {ServicePrincipalsRequestBuilder} from './servicePrincipals/servicePrincipalsRequestBuilder';
import {SharedDriveItemItemRequestBuilder} from './shares/item/sharedDriveItemItemRequestBuilder';
import {SharesRequestBuilder} from './shares/sharesRequestBuilder';
import {SiteItemRequestBuilder} from './sites/item/siteItemRequestBuilder';
import {SitesRequestBuilder} from './sites/sitesRequestBuilder';
import {SolutionsRequestBuilder} from './solutions/solutionsRequestBuilder';
import {SubscribedSkuItemRequestBuilder} from './subscribedSkus/item/subscribedSkuItemRequestBuilder';
import {SubscribedSkusRequestBuilder} from './subscribedSkus/subscribedSkusRequestBuilder';
import {SubscriptionItemRequestBuilder} from './subscriptions/item/subscriptionItemRequestBuilder';
import {SubscriptionsRequestBuilder} from './subscriptions/subscriptionsRequestBuilder';
import {TeamItemRequestBuilder} from './teams/item/teamItemRequestBuilder';
import {TeamsRequestBuilder} from './teams/teamsRequestBuilder';
import {TeamsTemplateItemRequestBuilder} from './teamsTemplates/item/teamsTemplateItemRequestBuilder';
import {TeamsTemplatesRequestBuilder} from './teamsTemplates/teamsTemplatesRequestBuilder';
import {TeamworkRequestBuilder} from './teamwork/teamworkRequestBuilder';
import {UserItemRequestBuilder} from './users/item/userItemRequestBuilder';
import {UsersRequestBuilder} from './users/usersRequestBuilder';
import {DriveItemItemRequestBuilder} from './workbooks/item/driveItemItemRequestBuilder';
import {WorkbooksRequestBuilder} from './workbooks/workbooksRequestBuilder';
import {enableBackingStoreForSerializationWriterFactory, getPathParameters, ParseNodeFactoryRegistry, registerDefaultDeserializer, registerDefaultSerializer, RequestAdapter, SerializationWriterFactoryRegistry} from '@microsoft/kiota-abstractions';
import {FormParseNodeFactory, FormSerializationWriterFactory} from '@microsoft/kiota-serialization-form';
import {JsonParseNodeFactory, JsonSerializationWriterFactory} from '@microsoft/kiota-serialization-json';
import {TextParseNodeFactory, TextSerializationWriterFactory} from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export class GraphBaseServiceClient {
    /** Provides operations to manage the admin singleton. */
    public get admin(): AdminRequestBuilder {
        return new AdminRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of agreementAcceptance entities. */
    public get agreementAcceptances(): AgreementAcceptancesRequestBuilder {
        return new AgreementAcceptancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of agreement entities. */
    public get agreements(): AgreementsRequestBuilder {
        return new AgreementsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the appCatalogs singleton. */
    public get appCatalogs(): AppCatalogsRequestBuilder {
        return new AppCatalogsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of application entities. */
    public get applications(): ApplicationsRequestBuilder {
        return new ApplicationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of applicationTemplate entities. */
    public get applicationTemplates(): ApplicationTemplatesRequestBuilder {
        return new ApplicationTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the auditLogRoot singleton. */
    public get auditLogs(): AuditLogsRequestBuilder {
        return new AuditLogsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of authenticationMethodConfiguration entities. */
    public get authenticationMethodConfigurations(): AuthenticationMethodConfigurationsRequestBuilder {
        return new AuthenticationMethodConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the authenticationMethodsPolicy singleton. */
    public get authenticationMethodsPolicy(): AuthenticationMethodsPolicyRequestBuilder {
        return new AuthenticationMethodsPolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the organizationalBranding singleton. */
    public get branding(): BrandingRequestBuilder {
        return new BrandingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of certificateBasedAuthConfiguration entities. */
    public get certificateBasedAuthConfiguration(): CertificateBasedAuthConfigurationRequestBuilder {
        return new CertificateBasedAuthConfigurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of chat entities. */
    public get chats(): ChatsRequestBuilder {
        return new ChatsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the cloudCommunications singleton. */
    public get communications(): CommunicationsRequestBuilder {
        return new CommunicationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the compliance singleton. */
    public get compliance(): ComplianceRequestBuilder {
        return new ComplianceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of externalConnection entities. */
    public get connections(): ConnectionsRequestBuilder {
        return new ConnectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of orgContact entities. */
    public get contacts(): ContactsRequestBuilder {
        return new ContactsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of contract entities. */
    public get contracts(): ContractsRequestBuilder {
        return new ContractsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of dataPolicyOperation entities. */
    public get dataPolicyOperations(): DataPolicyOperationsRequestBuilder {
        return new DataPolicyOperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceAppManagement singleton. */
    public get deviceAppManagement(): DeviceAppManagementRequestBuilder {
        return new DeviceAppManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceManagement singleton. */
    public get deviceManagement(): DeviceManagementRequestBuilder {
        return new DeviceManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of device entities. */
    public get devices(): DevicesRequestBuilder {
        return new DevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the directory singleton. */
    public get directory(): DirectoryRequestBuilder {
        return new DirectoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of directoryObject entities. */
    public get directoryObjects(): DirectoryObjectsRequestBuilder {
        return new DirectoryObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of directoryRole entities. */
    public get directoryRoles(): DirectoryRolesRequestBuilder {
        return new DirectoryRolesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of directoryRoleTemplate entities. */
    public get directoryRoleTemplates(): DirectoryRoleTemplatesRequestBuilder {
        return new DirectoryRoleTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of domainDnsRecord entities. */
    public get domainDnsRecords(): DomainDnsRecordsRequestBuilder {
        return new DomainDnsRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of domain entities. */
    public get domains(): DomainsRequestBuilder {
        return new DomainsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the drive singleton. */
    public get drive(): DriveRequestBuilder {
        return new DriveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of drive entities. */
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the educationRoot singleton. */
    public get education(): EducationRequestBuilder {
        return new EducationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the external singleton. */
    public get external(): ExternalRequestBuilder {
        return new ExternalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of groupLifecyclePolicy entities. */
    public get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder {
        return new GroupLifecyclePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of group entities. */
    public get groups(): GroupsRequestBuilder {
        return new GroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of groupSetting entities. */
    public get groupSettings(): GroupSettingsRequestBuilder {
        return new GroupSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of groupSettingTemplate entities. */
    public get groupSettingTemplates(): GroupSettingTemplatesRequestBuilder {
        return new GroupSettingTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the identityContainer singleton. */
    public get identity(): IdentityRequestBuilder {
        return new IdentityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the identityGovernance singleton. */
    public get identityGovernance(): IdentityGovernanceRequestBuilder {
        return new IdentityGovernanceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the identityProtectionRoot singleton. */
    public get identityProtection(): IdentityProtectionRequestBuilder {
        return new IdentityProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of identityProvider entities. */
    public get identityProviders(): IdentityProvidersRequestBuilder {
        return new IdentityProvidersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the informationProtection singleton. */
    public get informationProtection(): InformationProtectionRequestBuilder {
        return new InformationProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of invitation entities. */
    public get invitations(): InvitationsRequestBuilder {
        return new InvitationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of organizationalBrandingLocalization entities. */
    public get localizations(): LocalizationsRequestBuilder {
        return new LocalizationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the user singleton. */
    public get me(): MeRequestBuilder {
        return new MeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of oAuth2PermissionGrant entities. */
    public get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder {
        return new Oauth2PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of organization entities. */
    public get organization(): OrganizationRequestBuilder {
        return new OrganizationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the collection of resourceSpecificPermissionGrant entities. */
    public get permissionGrants(): PermissionGrantsRequestBuilder {
        return new PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of place entities. */
    public get places(): PlacesRequestBuilder {
        return new PlacesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the planner singleton. */
    public get planner(): PlannerRequestBuilder {
        return new PlannerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the policyRoot singleton. */
    public get policies(): PoliciesRequestBuilder {
        return new PoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the print singleton. */
    public get print(): PrintRequestBuilder {
        return new PrintRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the privacy singleton. */
    public get privacy(): PrivacyRequestBuilder {
        return new PrivacyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the reportRoot singleton. */
    public get reports(): ReportsRequestBuilder {
        return new ReportsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the roleManagement singleton. */
    public get roleManagement(): RoleManagementRequestBuilder {
        return new RoleManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of schemaExtension entities. */
    public get schemaExtensions(): SchemaExtensionsRequestBuilder {
        return new SchemaExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of scopedRoleMembership entities. */
    public get scopedRoleMemberships(): ScopedRoleMembershipsRequestBuilder {
        return new ScopedRoleMembershipsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the searchEntity singleton. */
    public get search(): SearchRequestBuilder {
        return new SearchRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the security singleton. */
    public get security(): SecurityRequestBuilder {
        return new SecurityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of servicePrincipal entities. */
    public get servicePrincipals(): ServicePrincipalsRequestBuilder {
        return new ServicePrincipalsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of sharedDriveItem entities. */
    public get shares(): SharesRequestBuilder {
        return new SharesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of site entities. */
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the solutionsRoot singleton. */
    public get solutions(): SolutionsRequestBuilder {
        return new SolutionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of subscribedSku entities. */
    public get subscribedSkus(): SubscribedSkusRequestBuilder {
        return new SubscribedSkusRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of subscription entities. */
    public get subscriptions(): SubscriptionsRequestBuilder {
        return new SubscriptionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of team entities. */
    public get teams(): TeamsRequestBuilder {
        return new TeamsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of teamsTemplate entities. */
    public get teamsTemplates(): TeamsTemplatesRequestBuilder {
        return new TeamsTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the teamwork singleton. */
    public get teamwork(): TeamworkRequestBuilder {
        return new TeamworkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** Provides operations to manage the collection of user entities. */
    public get users(): UsersRequestBuilder {
        return new UsersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of driveItem entities. */
    public get workbooks(): WorkbooksRequestBuilder {
        return new WorkbooksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of agreementAcceptance entities.
     * @param id Unique identifier of the item
     * @returns a AgreementAcceptanceItemRequestBuilder
     */
    public agreementAcceptancesById(id: string) : AgreementAcceptanceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["agreementAcceptance%2Did"] = id
        return new AgreementAcceptanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of agreement entities.
     * @param id Unique identifier of the item
     * @returns a AgreementItemRequestBuilder
     */
    public agreementsById(id: string) : AgreementItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["agreement%2Did"] = id
        return new AgreementItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of application entities.
     * @param id Unique identifier of the item
     * @returns a ApplicationItemRequestBuilder
     */
    public applicationsById(id: string) : ApplicationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["application%2Did"] = id
        return new ApplicationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of applicationTemplate entities.
     * @param id Unique identifier of the item
     * @returns a ApplicationTemplateItemRequestBuilder
     */
    public applicationTemplatesById(id: string) : ApplicationTemplateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["applicationTemplate%2Did"] = id
        return new ApplicationTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of authenticationMethodConfiguration entities.
     * @param id Unique identifier of the item
     * @returns a AuthenticationMethodConfigurationItemRequestBuilder
     */
    public authenticationMethodConfigurationsById(id: string) : AuthenticationMethodConfigurationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["authenticationMethodConfiguration%2Did"] = id
        return new AuthenticationMethodConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of certificateBasedAuthConfiguration entities.
     * @param id Unique identifier of the item
     * @returns a CertificateBasedAuthConfigurationItemRequestBuilder
     */
    public certificateBasedAuthConfigurationById(id: string) : CertificateBasedAuthConfigurationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["certificateBasedAuthConfiguration%2Did"] = id
        return new CertificateBasedAuthConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of chat entities.
     * @param id Unique identifier of the item
     * @returns a ChatItemRequestBuilder
     */
    public chatsById(id: string) : ChatItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["chat%2Did"] = id
        return new ChatItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of externalConnection entities.
     * @param id Unique identifier of the item
     * @returns a ExternalConnectionItemRequestBuilder
     */
    public connectionsById(id: string) : ExternalConnectionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["externalConnection%2Did"] = id
        return new ExternalConnectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new GraphBaseServiceClient and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(requestAdapter: RequestAdapter) {
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.pathParameters = {};
        this.urlTemplate = "{+baseurl}";
        this.requestAdapter = requestAdapter;
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultSerializer(TextSerializationWriterFactory);
        registerDefaultSerializer(FormSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
        registerDefaultDeserializer(TextParseNodeFactory);
        registerDefaultDeserializer(FormParseNodeFactory);
        if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
            requestAdapter.baseUrl = "https://graph.microsoft.com/v1.0";
        }
    };
    /**
     * Provides operations to manage the collection of orgContact entities.
     * @param id Unique identifier of the item
     * @returns a OrgContactItemRequestBuilder
     */
    public contactsById(id: string) : OrgContactItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["orgContact%2Did"] = id
        return new OrgContactItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of contract entities.
     * @param id Unique identifier of the item
     * @returns a ContractItemRequestBuilder
     */
    public contractsById(id: string) : ContractItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contract%2Did"] = id
        return new ContractItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of dataPolicyOperation entities.
     * @param id Unique identifier of the item
     * @returns a DataPolicyOperationItemRequestBuilder
     */
    public dataPolicyOperationsById(id: string) : DataPolicyOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["dataPolicyOperation%2Did"] = id
        return new DataPolicyOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of device entities.
     * @param id Unique identifier of the item
     * @returns a DeviceItemRequestBuilder
     */
    public devicesById(id: string) : DeviceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["device%2Did"] = id
        return new DeviceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of directoryObject entities.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public directoryObjectsById(id: string) : DirectoryObjectItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new DirectoryObjectItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of directoryRole entities.
     * @param id Unique identifier of the item
     * @returns a DirectoryRoleItemRequestBuilder
     */
    public directoryRolesById(id: string) : DirectoryRoleItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryRole%2Did"] = id
        return new DirectoryRoleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of directoryRoleTemplate entities.
     * @param id Unique identifier of the item
     * @returns a DirectoryRoleTemplateItemRequestBuilder
     */
    public directoryRoleTemplatesById(id: string) : DirectoryRoleTemplateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryRoleTemplate%2Did"] = id
        return new DirectoryRoleTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of domainDnsRecord entities.
     * @param id Unique identifier of the item
     * @returns a DomainDnsRecordItemRequestBuilder
     */
    public domainDnsRecordsById(id: string) : DomainDnsRecordItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domainDnsRecord%2Did"] = id
        return new DomainDnsRecordItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of domain entities.
     * @param id Unique identifier of the item
     * @returns a DomainItemRequestBuilder
     */
    public domainsById(id: string) : DomainItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domain%2Did"] = id
        return new DomainItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of drive entities.
     * @param id Unique identifier of the item
     * @returns a DriveItemRequestBuilder
     */
    public drivesById(id: string) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["drive%2Did"] = id
        return new DriveItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of groupLifecyclePolicy entities.
     * @param id Unique identifier of the item
     * @returns a GroupLifecyclePolicyItemRequestBuilder
     */
    public groupLifecyclePoliciesById(id: string) : GroupLifecyclePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupLifecyclePolicy%2Did"] = id
        return new GroupLifecyclePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of group entities.
     * @param id Unique identifier of the item
     * @returns a GroupItemRequestBuilder
     */
    public groupsById(id: string) : GroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["group%2Did"] = id
        return new GroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of groupSetting entities.
     * @param id Unique identifier of the item
     * @returns a GroupSettingItemRequestBuilder
     */
    public groupSettingsById(id: string) : GroupSettingItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupSetting%2Did"] = id
        return new GroupSettingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of groupSettingTemplate entities.
     * @param id Unique identifier of the item
     * @returns a GroupSettingTemplateItemRequestBuilder
     */
    public groupSettingTemplatesById(id: string) : GroupSettingTemplateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupSettingTemplate%2Did"] = id
        return new GroupSettingTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of identityProvider entities.
     * @param id Unique identifier of the item
     * @returns a IdentityProviderItemRequestBuilder
     */
    public identityProvidersById(id: string) : IdentityProviderItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityProvider%2Did"] = id
        return new IdentityProviderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of invitation entities.
     * @param id Unique identifier of the item
     * @returns a InvitationItemRequestBuilder
     */
    public invitationsById(id: string) : InvitationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["invitation%2Did"] = id
        return new InvitationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of organizationalBrandingLocalization entities.
     * @param id Unique identifier of the item
     * @returns a OrganizationalBrandingLocalizationItemRequestBuilder
     */
    public localizationsById(id: string) : OrganizationalBrandingLocalizationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["organizationalBrandingLocalization%2Did"] = id
        return new OrganizationalBrandingLocalizationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of oAuth2PermissionGrant entities.
     * @param id Unique identifier of the item
     * @returns a OAuth2PermissionGrantItemRequestBuilder
     */
    public oauth2PermissionGrantsById(id: string) : OAuth2PermissionGrantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["oAuth2PermissionGrant%2Did"] = id
        return new OAuth2PermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of organization entities.
     * @param id Unique identifier of the item
     * @returns a OrganizationItemRequestBuilder
     */
    public organizationById(id: string) : OrganizationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["organization%2Did"] = id
        return new OrganizationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of resourceSpecificPermissionGrant entities.
     * @param id Unique identifier of the item
     * @returns a ResourceSpecificPermissionGrantItemRequestBuilder
     */
    public permissionGrantsById(id: string) : ResourceSpecificPermissionGrantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resourceSpecificPermissionGrant%2Did"] = id
        return new ResourceSpecificPermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of place entities.
     * @param id Unique identifier of the item
     * @returns a PlaceItemRequestBuilder
     */
    public placesById(id: string) : PlaceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["place%2Did"] = id
        return new PlaceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of schemaExtension entities.
     * @param id Unique identifier of the item
     * @returns a SchemaExtensionItemRequestBuilder
     */
    public schemaExtensionsById(id: string) : SchemaExtensionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["schemaExtension%2Did"] = id
        return new SchemaExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of scopedRoleMembership entities.
     * @param id Unique identifier of the item
     * @returns a ScopedRoleMembershipItemRequestBuilder
     */
    public scopedRoleMembershipsById(id: string) : ScopedRoleMembershipItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["scopedRoleMembership%2Did"] = id
        return new ScopedRoleMembershipItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of servicePrincipal entities.
     * @param id Unique identifier of the item
     * @returns a ServicePrincipalItemRequestBuilder
     */
    public servicePrincipalsById(id: string) : ServicePrincipalItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["servicePrincipal%2Did"] = id
        return new ServicePrincipalItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of sharedDriveItem entities.
     * @param id Unique identifier of the item
     * @returns a SharedDriveItemItemRequestBuilder
     */
    public sharesById(id: string) : SharedDriveItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sharedDriveItem%2Did"] = id
        return new SharedDriveItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of site entities.
     * @param id Unique identifier of the item
     * @returns a SiteItemRequestBuilder
     */
    public sitesById(id: string) : SiteItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["site%2Did"] = id
        return new SiteItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of subscribedSku entities.
     * @param id Unique identifier of the item
     * @returns a SubscribedSkuItemRequestBuilder
     */
    public subscribedSkusById(id: string) : SubscribedSkuItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subscribedSku%2Did"] = id
        return new SubscribedSkuItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of subscription entities.
     * @param id Unique identifier of the item
     * @returns a SubscriptionItemRequestBuilder
     */
    public subscriptionsById(id: string) : SubscriptionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subscription%2Did"] = id
        return new SubscriptionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of team entities.
     * @param id Unique identifier of the item
     * @returns a TeamItemRequestBuilder
     */
    public teamsById(id: string) : TeamItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["team%2Did"] = id
        return new TeamItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of teamsTemplate entities.
     * @param id Unique identifier of the item
     * @returns a TeamsTemplateItemRequestBuilder
     */
    public teamsTemplatesById(id: string) : TeamsTemplateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamsTemplate%2Did"] = id
        return new TeamsTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of user entities.
     * @param id Unique identifier of the item
     * @returns a UserItemRequestBuilder
     */
    public usersById(id: string) : UserItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["user%2Did"] = id
        return new UserItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the collection of driveItem entities.
     * @param id Unique identifier of the item
     * @returns a DriveItemItemRequestBuilder
     */
    public workbooksById(id: string) : DriveItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did"] = id
        return new DriveItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
