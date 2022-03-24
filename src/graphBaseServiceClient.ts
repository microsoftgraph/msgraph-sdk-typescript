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
import {enableBackingStoreForSerializationWriterFactory, getPathParameters, HttpMethod, Parsable, ParsableFactory, ParseNodeFactoryRegistry, registerDefaultDeserializer, registerDefaultSerializer, RequestAdapter, RequestInformation, RequestOption, ResponseHandler, SerializationWriterFactoryRegistry} from '@microsoft/kiota-abstractions';
import {JsonParseNodeFactory, JsonSerializationWriterFactory} from '@microsoft/kiota-serialization-json';
import {TextParseNodeFactory, TextSerializationWriterFactory} from '@microsoft/kiota-serialization-text';

/** The main entry point of the SDK, exposes the configuration and the fluent API.  */
export class GraphBaseServiceClient {
    public get admin(): AdminRequestBuilder {
        return new AdminRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get agreementAcceptances(): AgreementAcceptancesRequestBuilder {
        return new AgreementAcceptancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get agreements(): AgreementsRequestBuilder {
        return new AgreementsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appCatalogs(): AppCatalogsRequestBuilder {
        return new AppCatalogsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applications(): ApplicationsRequestBuilder {
        return new ApplicationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applicationTemplates(): ApplicationTemplatesRequestBuilder {
        return new ApplicationTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get auditLogs(): AuditLogsRequestBuilder {
        return new AuditLogsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get authenticationMethodConfigurations(): AuthenticationMethodConfigurationsRequestBuilder {
        return new AuthenticationMethodConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get authenticationMethodsPolicy(): AuthenticationMethodsPolicyRequestBuilder {
        return new AuthenticationMethodsPolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get branding(): BrandingRequestBuilder {
        return new BrandingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get certificateBasedAuthConfiguration(): CertificateBasedAuthConfigurationRequestBuilder {
        return new CertificateBasedAuthConfigurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get chats(): ChatsRequestBuilder {
        return new ChatsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get communications(): CommunicationsRequestBuilder {
        return new CommunicationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get compliance(): ComplianceRequestBuilder {
        return new ComplianceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get connections(): ConnectionsRequestBuilder {
        return new ConnectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get contacts(): ContactsRequestBuilder {
        return new ContactsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get contracts(): ContractsRequestBuilder {
        return new ContractsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dataPolicyOperations(): DataPolicyOperationsRequestBuilder {
        return new DataPolicyOperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceAppManagement(): DeviceAppManagementRequestBuilder {
        return new DeviceAppManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceManagement(): DeviceManagementRequestBuilder {
        return new DeviceManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get devices(): DevicesRequestBuilder {
        return new DevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get directory(): DirectoryRequestBuilder {
        return new DirectoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get directoryObjects(): DirectoryObjectsRequestBuilder {
        return new DirectoryObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get directoryRoles(): DirectoryRolesRequestBuilder {
        return new DirectoryRolesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get directoryRoleTemplates(): DirectoryRoleTemplatesRequestBuilder {
        return new DirectoryRoleTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get domainDnsRecords(): DomainDnsRecordsRequestBuilder {
        return new DomainDnsRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get domains(): DomainsRequestBuilder {
        return new DomainsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get drive(): DriveRequestBuilder {
        return new DriveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get education(): EducationRequestBuilder {
        return new EducationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get external(): ExternalRequestBuilder {
        return new ExternalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder {
        return new GroupLifecyclePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get groups(): GroupsRequestBuilder {
        return new GroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get groupSettings(): GroupSettingsRequestBuilder {
        return new GroupSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get groupSettingTemplates(): GroupSettingTemplatesRequestBuilder {
        return new GroupSettingTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get identity(): IdentityRequestBuilder {
        return new IdentityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get identityGovernance(): IdentityGovernanceRequestBuilder {
        return new IdentityGovernanceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get identityProtection(): IdentityProtectionRequestBuilder {
        return new IdentityProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get identityProviders(): IdentityProvidersRequestBuilder {
        return new IdentityProvidersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get informationProtection(): InformationProtectionRequestBuilder {
        return new InformationProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get invitations(): InvitationsRequestBuilder {
        return new InvitationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get localizations(): LocalizationsRequestBuilder {
        return new LocalizationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get me(): MeRequestBuilder {
        return new MeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder {
        return new Oauth2PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get organization(): OrganizationRequestBuilder {
        return new OrganizationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get permissionGrants(): PermissionGrantsRequestBuilder {
        return new PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get places(): PlacesRequestBuilder {
        return new PlacesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get planner(): PlannerRequestBuilder {
        return new PlannerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get policies(): PoliciesRequestBuilder {
        return new PoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get print(): PrintRequestBuilder {
        return new PrintRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get privacy(): PrivacyRequestBuilder {
        return new PrivacyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get reports(): ReportsRequestBuilder {
        return new ReportsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get roleManagement(): RoleManagementRequestBuilder {
        return new RoleManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get schemaExtensions(): SchemaExtensionsRequestBuilder {
        return new SchemaExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get scopedRoleMemberships(): ScopedRoleMembershipsRequestBuilder {
        return new ScopedRoleMembershipsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get search(): SearchRequestBuilder {
        return new SearchRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get security(): SecurityRequestBuilder {
        return new SecurityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get servicePrincipals(): ServicePrincipalsRequestBuilder {
        return new ServicePrincipalsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get shares(): SharesRequestBuilder {
        return new SharesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get solutions(): SolutionsRequestBuilder {
        return new SolutionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get subscribedSkus(): SubscribedSkusRequestBuilder {
        return new SubscribedSkusRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get subscriptions(): SubscriptionsRequestBuilder {
        return new SubscriptionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get teams(): TeamsRequestBuilder {
        return new TeamsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get teamsTemplates(): TeamsTemplatesRequestBuilder {
        return new TeamsTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get teamwork(): TeamworkRequestBuilder {
        return new TeamworkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get users(): UsersRequestBuilder {
        return new UsersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get workbooks(): WorkbooksRequestBuilder {
        return new WorkbooksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.agreementAcceptances.item collection
     * @param id Unique identifier of the item
     * @returns a agreementAcceptanceItemRequestBuilder
     */
    public agreementAcceptancesById(id: string) : AgreementAcceptanceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["agreementAcceptance_id"] = id
        return new AgreementAcceptanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.agreements.item collection
     * @param id Unique identifier of the item
     * @returns a agreementItemRequestBuilder
     */
    public agreementsById(id: string) : AgreementItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["agreement_id"] = id
        return new AgreementItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.applications.item collection
     * @param id Unique identifier of the item
     * @returns a applicationItemRequestBuilder
     */
    public applicationsById(id: string) : ApplicationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["application_id"] = id
        return new ApplicationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.applicationTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a applicationTemplateItemRequestBuilder
     */
    public applicationTemplatesById(id: string) : ApplicationTemplateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["applicationTemplate_id"] = id
        return new ApplicationTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.authenticationMethodConfigurations.item collection
     * @param id Unique identifier of the item
     * @returns a authenticationMethodConfigurationItemRequestBuilder
     */
    public authenticationMethodConfigurationsById(id: string) : AuthenticationMethodConfigurationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["authenticationMethodConfiguration_id"] = id
        return new AuthenticationMethodConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.certificateBasedAuthConfiguration.item collection
     * @param id Unique identifier of the item
     * @returns a certificateBasedAuthConfigurationItemRequestBuilder
     */
    public certificateBasedAuthConfigurationById(id: string) : CertificateBasedAuthConfigurationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["certificateBasedAuthConfiguration_id"] = id
        return new CertificateBasedAuthConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.chats.item collection
     * @param id Unique identifier of the item
     * @returns a chatItemRequestBuilder
     */
    public chatsById(id: string) : ChatItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["chat_id"] = id
        return new ChatItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.connections.item collection
     * @param id Unique identifier of the item
     * @returns a externalConnectionItemRequestBuilder
     */
    public connectionsById(id: string) : ExternalConnectionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["externalConnection_id"] = id
        return new ExternalConnectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new GraphServiceClient and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(requestAdapter: RequestAdapter) {
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.pathParameters = {};
        this.urlTemplate = "{+baseurl}";
        this.requestAdapter = requestAdapter;
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultSerializer(TextSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
        registerDefaultDeserializer(TextParseNodeFactory);
        requestAdapter.baseUrl = "https://graph.microsoft.com/v1.0";
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.contacts.item collection
     * @param id Unique identifier of the item
     * @returns a orgContactItemRequestBuilder
     */
    public contactsById(id: string) : OrgContactItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["orgContact_id"] = id
        return new OrgContactItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.contracts.item collection
     * @param id Unique identifier of the item
     * @returns a contractItemRequestBuilder
     */
    public contractsById(id: string) : ContractItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contract_id"] = id
        return new ContractItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    public createGetRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.dataPolicyOperations.item collection
     * @param id Unique identifier of the item
     * @returns a dataPolicyOperationItemRequestBuilder
     */
    public dataPolicyOperationsById(id: string) : DataPolicyOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["dataPolicyOperation_id"] = id
        return new DataPolicyOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.devices.item collection
     * @param id Unique identifier of the item
     * @returns a deviceItemRequestBuilder
     */
    public devicesById(id: string) : DeviceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["device_id"] = id
        return new DeviceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.directoryObjects.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public directoryObjectsById(id: string) : DirectoryObjectItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject_id"] = id
        return new DirectoryObjectItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.directoryRoles.item collection
     * @param id Unique identifier of the item
     * @returns a directoryRoleItemRequestBuilder
     */
    public directoryRolesById(id: string) : DirectoryRoleItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryRole_id"] = id
        return new DirectoryRoleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.directoryRoleTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a directoryRoleTemplateItemRequestBuilder
     */
    public directoryRoleTemplatesById(id: string) : DirectoryRoleTemplateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryRoleTemplate_id"] = id
        return new DirectoryRoleTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.domainDnsRecords.item collection
     * @param id Unique identifier of the item
     * @returns a domainDnsRecordItemRequestBuilder
     */
    public domainDnsRecordsById(id: string) : DomainDnsRecordItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domainDnsRecord_id"] = id
        return new DomainDnsRecordItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.domains.item collection
     * @param id Unique identifier of the item
     * @returns a domainItemRequestBuilder
     */
    public domainsById(id: string) : DomainItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domain_id"] = id
        return new DomainItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.drives.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public drivesById(id: string) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["drive_id"] = id
        return new DriveItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    public get(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createGetRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groupLifecyclePolicies.item collection
     * @param id Unique identifier of the item
     * @returns a groupLifecyclePolicyItemRequestBuilder
     */
    public groupLifecyclePoliciesById(id: string) : GroupLifecyclePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupLifecyclePolicy_id"] = id
        return new GroupLifecyclePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item collection
     * @param id Unique identifier of the item
     * @returns a groupItemRequestBuilder
     */
    public groupsById(id: string) : GroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["group_id"] = id
        return new GroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groupSettings.item collection
     * @param id Unique identifier of the item
     * @returns a groupSettingItemRequestBuilder
     */
    public groupSettingsById(id: string) : GroupSettingItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupSetting_id"] = id
        return new GroupSettingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groupSettingTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a groupSettingTemplateItemRequestBuilder
     */
    public groupSettingTemplatesById(id: string) : GroupSettingTemplateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupSettingTemplate_id"] = id
        return new GroupSettingTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identityProviders.item collection
     * @param id Unique identifier of the item
     * @returns a identityProviderItemRequestBuilder
     */
    public identityProvidersById(id: string) : IdentityProviderItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityProvider_id"] = id
        return new IdentityProviderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.invitations.item collection
     * @param id Unique identifier of the item
     * @returns a invitationItemRequestBuilder
     */
    public invitationsById(id: string) : InvitationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["invitation_id"] = id
        return new InvitationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.localizations.item collection
     * @param id Unique identifier of the item
     * @returns a organizationalBrandingLocalizationItemRequestBuilder
     */
    public localizationsById(id: string) : OrganizationalBrandingLocalizationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["organizationalBrandingLocalization_id"] = id
        return new OrganizationalBrandingLocalizationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.oauth2PermissionGrants.item collection
     * @param id Unique identifier of the item
     * @returns a oAuth2PermissionGrantItemRequestBuilder
     */
    public oauth2PermissionGrantsById(id: string) : OAuth2PermissionGrantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["oAuth2PermissionGrant_id"] = id
        return new OAuth2PermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.organization.item collection
     * @param id Unique identifier of the item
     * @returns a organizationItemRequestBuilder
     */
    public organizationById(id: string) : OrganizationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["organization_id"] = id
        return new OrganizationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.permissionGrants.item collection
     * @param id Unique identifier of the item
     * @returns a resourceSpecificPermissionGrantItemRequestBuilder
     */
    public permissionGrantsById(id: string) : ResourceSpecificPermissionGrantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resourceSpecificPermissionGrant_id"] = id
        return new ResourceSpecificPermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.places.item collection
     * @param id Unique identifier of the item
     * @returns a placeItemRequestBuilder
     */
    public placesById(id: string) : PlaceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["place_id"] = id
        return new PlaceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.schemaExtensions.item collection
     * @param id Unique identifier of the item
     * @returns a schemaExtensionItemRequestBuilder
     */
    public schemaExtensionsById(id: string) : SchemaExtensionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["schemaExtension_id"] = id
        return new SchemaExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.scopedRoleMemberships.item collection
     * @param id Unique identifier of the item
     * @returns a scopedRoleMembershipItemRequestBuilder
     */
    public scopedRoleMembershipsById(id: string) : ScopedRoleMembershipItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["scopedRoleMembership_id"] = id
        return new ScopedRoleMembershipItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.servicePrincipals.item collection
     * @param id Unique identifier of the item
     * @returns a servicePrincipalItemRequestBuilder
     */
    public servicePrincipalsById(id: string) : ServicePrincipalItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["servicePrincipal_id"] = id
        return new ServicePrincipalItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.shares.item collection
     * @param id Unique identifier of the item
     * @returns a sharedDriveItemItemRequestBuilder
     */
    public sharesById(id: string) : SharedDriveItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sharedDriveItem_id"] = id
        return new SharedDriveItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.sites.item collection
     * @param id Unique identifier of the item
     * @returns a siteItemRequestBuilder
     */
    public sitesById(id: string) : SiteItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["site_id"] = id
        return new SiteItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.subscribedSkus.item collection
     * @param id Unique identifier of the item
     * @returns a subscribedSkuItemRequestBuilder
     */
    public subscribedSkusById(id: string) : SubscribedSkuItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subscribedSku_id"] = id
        return new SubscribedSkuItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.subscriptions.item collection
     * @param id Unique identifier of the item
     * @returns a subscriptionItemRequestBuilder
     */
    public subscriptionsById(id: string) : SubscriptionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subscription_id"] = id
        return new SubscriptionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.teams.item collection
     * @param id Unique identifier of the item
     * @returns a teamItemRequestBuilder
     */
    public teamsById(id: string) : TeamItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["team_id"] = id
        return new TeamItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.teamsTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a teamsTemplateItemRequestBuilder
     */
    public teamsTemplatesById(id: string) : TeamsTemplateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamsTemplate_id"] = id
        return new TeamsTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item collection
     * @param id Unique identifier of the item
     * @returns a userItemRequestBuilder
     */
    public usersById(id: string) : UserItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["user_id"] = id
        return new UserItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemItemRequestBuilder
     */
    public workbooksById(id: string) : DriveItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem_id"] = id
        return new DriveItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
