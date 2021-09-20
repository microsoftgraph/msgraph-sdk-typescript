import {AgreementAcceptancesRequestBuilder} from './agreementAcceptances/agreementAcceptancesRequestBuilder';
import {AgreementAcceptanceRequestBuilder} from './agreementAcceptances/item/agreementAcceptanceRequestBuilder';
import {AgreementsRequestBuilder} from './agreements/agreementsRequestBuilder';
import {AgreementRequestBuilder} from './agreements/item/agreementRequestBuilder';
import {AppCatalogsRequestBuilder} from './appCatalogs/appCatalogsRequestBuilder';
import {ApplicationsRequestBuilder} from './applications/applicationsRequestBuilder';
import {ApplicationRequestBuilder} from './applications/item/applicationRequestBuilder';
import {ApplicationTemplatesRequestBuilder} from './applicationTemplates/applicationTemplatesRequestBuilder';
import {ApplicationTemplateRequestBuilder} from './applicationTemplates/item/applicationTemplateRequestBuilder';
import {AuditLogsRequestBuilder} from './auditLogs/auditLogsRequestBuilder';
import {AuthenticationMethodConfigurationsRequestBuilder} from './authenticationMethodConfigurations/authenticationMethodConfigurationsRequestBuilder';
import {AuthenticationMethodConfigurationRequestBuilder} from './authenticationMethodConfigurations/item/authenticationMethodConfigurationRequestBuilder';
import {AuthenticationMethodsPolicyRequestBuilder} from './authenticationMethodsPolicy/authenticationMethodsPolicyRequestBuilder';
import {BrandingRequestBuilder} from './branding/brandingRequestBuilder';
import {CertificateBasedAuthConfigurationRequestBuilder} from './certificateBasedAuthConfiguration/certificateBasedAuthConfigurationRequestBuilder';
import {ChatsRequestBuilder} from './chats/chatsRequestBuilder';
import {ChatRequestBuilder} from './chats/item/chatRequestBuilder';
import {CommunicationsRequestBuilder} from './communications/communicationsRequestBuilder';
import {ConnectionsRequestBuilder} from './connections/connectionsRequestBuilder';
import {ExternalConnectionRequestBuilder} from './connections/item/externalConnectionRequestBuilder';
import {ContactsRequestBuilder} from './contacts/contactsRequestBuilder';
import {OrgContactRequestBuilder} from './contacts/item/orgContactRequestBuilder';
import {ContractsRequestBuilder} from './contracts/contractsRequestBuilder';
import {ContractRequestBuilder} from './contracts/item/contractRequestBuilder';
import {DataPolicyOperationsRequestBuilder} from './dataPolicyOperations/dataPolicyOperationsRequestBuilder';
import {DataPolicyOperationRequestBuilder} from './dataPolicyOperations/item/dataPolicyOperationRequestBuilder';
import {DeviceAppManagementRequestBuilder} from './deviceAppManagement/deviceAppManagementRequestBuilder';
import {DeviceManagementRequestBuilder} from './deviceManagement/deviceManagementRequestBuilder';
import {DevicesRequestBuilder} from './devices/devicesRequestBuilder';
import {DeviceRequestBuilder} from './devices/item/deviceRequestBuilder';
import {DirectoryRequestBuilder} from './directory/directoryRequestBuilder';
import {DirectoryObjectsRequestBuilder} from './directoryObjects/directoryObjectsRequestBuilder';
import {DirectoryObjectRequestBuilder} from './directoryObjects/item/directoryObjectRequestBuilder';
import {DirectoryRolesRequestBuilder} from './directoryRoles/directoryRolesRequestBuilder';
import {DirectoryRoleRequestBuilder} from './directoryRoles/item/directoryRoleRequestBuilder';
import {DirectoryRoleTemplatesRequestBuilder} from './directoryRoleTemplates/directoryRoleTemplatesRequestBuilder';
import {DirectoryRoleTemplateRequestBuilder} from './directoryRoleTemplates/item/directoryRoleTemplateRequestBuilder';
import {DomainDnsRecordsRequestBuilder} from './domainDnsRecords/domainDnsRecordsRequestBuilder';
import {DomainDnsRecordRequestBuilder} from './domainDnsRecords/item/domainDnsRecordRequestBuilder';
import {DomainsRequestBuilder} from './domains/domainsRequestBuilder';
import {DomainRequestBuilder} from './domains/item/domainRequestBuilder';
import {DriveRequestBuilder as icbb5ef41e7b355663c7331e7422002ee2973f10408b110fbf820b0d849e121e5} from './drive/driveRequestBuilder';
import {DrivesRequestBuilder} from './drives/drivesRequestBuilder';
import {DriveRequestBuilder as i514bf51b7c4c33d2a25d47190f2e30470e04c5f737f18bcd446cd3feac5a6911} from './drives/item/driveRequestBuilder';
import {EducationRequestBuilder} from './education/educationRequestBuilder';
import {ExternalRequestBuilder} from './external/externalRequestBuilder';
import {GroupLifecyclePoliciesRequestBuilder} from './groupLifecyclePolicies/groupLifecyclePoliciesRequestBuilder';
import {GroupLifecyclePolicyRequestBuilder} from './groupLifecyclePolicies/item/groupLifecyclePolicyRequestBuilder';
import {GroupsRequestBuilder} from './groups/groupsRequestBuilder';
import {GroupRequestBuilder} from './groups/item/groupRequestBuilder';
import {GroupSettingsRequestBuilder} from './groupSettings/groupSettingsRequestBuilder';
import {GroupSettingRequestBuilder} from './groupSettings/item/groupSettingRequestBuilder';
import {GroupSettingTemplatesRequestBuilder} from './groupSettingTemplates/groupSettingTemplatesRequestBuilder';
import {GroupSettingTemplateRequestBuilder} from './groupSettingTemplates/item/groupSettingTemplateRequestBuilder';
import {IdentityRequestBuilder} from './identity/identityRequestBuilder';
import {IdentityGovernanceRequestBuilder} from './identityGovernance/identityGovernanceRequestBuilder';
import {IdentityProvidersRequestBuilder} from './identityProviders/identityProvidersRequestBuilder';
import {IdentityProviderRequestBuilder} from './identityProviders/item/identityProviderRequestBuilder';
import {InformationProtectionRequestBuilder} from './informationProtection/informationProtectionRequestBuilder';
import {InvitationsRequestBuilder} from './invitations/invitationsRequestBuilder';
import {InvitationRequestBuilder} from './invitations/item/invitationRequestBuilder';
import {OrganizationalBrandingLocalizationRequestBuilder} from './localizations/item/organizationalBrandingLocalizationRequestBuilder';
import {LocalizationsRequestBuilder} from './localizations/localizationsRequestBuilder';
import {MeRequestBuilder} from './me/meRequestBuilder';
import {OAuth2PermissionGrantRequestBuilder} from './oauth2PermissionGrants/item/oAuth2PermissionGrantRequestBuilder';
import {Oauth2PermissionGrantsRequestBuilder} from './oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder';
import {OrganizationRequestBuilder} from './organization/organizationRequestBuilder';
import {ResourceSpecificPermissionGrantRequestBuilder} from './permissionGrants/item/resourceSpecificPermissionGrantRequestBuilder';
import {PermissionGrantsRequestBuilder} from './permissionGrants/permissionGrantsRequestBuilder';
import {PlaceRequestBuilder} from './places/item/placeRequestBuilder';
import {PlacesRequestBuilder} from './places/placesRequestBuilder';
import {PlannerRequestBuilder} from './planner/plannerRequestBuilder';
import {PoliciesRequestBuilder} from './policies/policiesRequestBuilder';
import {PrintRequestBuilder} from './print/printRequestBuilder';
import {ReportsRequestBuilder} from './reports/reportsRequestBuilder';
import {RoleManagementRequestBuilder} from './roleManagement/roleManagementRequestBuilder';
import {SchemaExtensionRequestBuilder} from './schemaExtensions/item/schemaExtensionRequestBuilder';
import {SchemaExtensionsRequestBuilder} from './schemaExtensions/schemaExtensionsRequestBuilder';
import {ScopedRoleMembershipRequestBuilder} from './scopedRoleMemberships/item/scopedRoleMembershipRequestBuilder';
import {ScopedRoleMembershipsRequestBuilder} from './scopedRoleMemberships/scopedRoleMembershipsRequestBuilder';
import {SearchRequestBuilder} from './search/searchRequestBuilder';
import {SecurityRequestBuilder} from './security/securityRequestBuilder';
import {ServicePrincipalRequestBuilder} from './servicePrincipals/item/servicePrincipalRequestBuilder';
import {ServicePrincipalsRequestBuilder} from './servicePrincipals/servicePrincipalsRequestBuilder';
import {SharedDriveItemRequestBuilder} from './shares/item/sharedDriveItemRequestBuilder';
import {SharesRequestBuilder} from './shares/sharesRequestBuilder';
import {SiteRequestBuilder} from './sites/item/siteRequestBuilder';
import {SitesRequestBuilder} from './sites/sitesRequestBuilder';
import {SubscribedSkuRequestBuilder} from './subscribedSkus/item/subscribedSkuRequestBuilder';
import {SubscribedSkusRequestBuilder} from './subscribedSkus/subscribedSkusRequestBuilder';
import {SubscriptionRequestBuilder} from './subscriptions/item/subscriptionRequestBuilder';
import {SubscriptionsRequestBuilder} from './subscriptions/subscriptionsRequestBuilder';
import {TeamRequestBuilder} from './teams/item/teamRequestBuilder';
import {TeamsRequestBuilder} from './teams/teamsRequestBuilder';
import {TeamsTemplateRequestBuilder} from './teamsTemplates/item/teamsTemplateRequestBuilder';
import {TeamsTemplatesRequestBuilder} from './teamsTemplates/teamsTemplatesRequestBuilder';
import {TeamworkRequestBuilder} from './teamwork/teamworkRequestBuilder';
import {UserRequestBuilder} from './users/item/userRequestBuilder';
import {UsersRequestBuilder} from './users/usersRequestBuilder';
import {DriveItemRequestBuilder} from './workbooks/item/driveItemRequestBuilder';
import {WorkbooksRequestBuilder} from './workbooks/workbooksRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption, registerDefaultSerializer, enableBackingStoreForSerializationWriterFactory, SerializationWriterFactoryRegistry, registerDefaultDeserializer, ParseNodeFactoryRegistry} from '@microsoft/kiota-abstractions';
import {JsonParseNodeFactory, JsonSerializationWriterFactory} from '@microsoft/kiota-serialization-json';

/** The main entry point of the SDK, exposes the configuration and the fluent API.  */
export class ApiClient {
    public get agreementAcceptances(): AgreementAcceptancesRequestBuilder {
        return new AgreementAcceptancesRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get agreements(): AgreementsRequestBuilder {
        return new AgreementsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get appCatalogs(): AppCatalogsRequestBuilder {
        return new AppCatalogsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get applications(): ApplicationsRequestBuilder {
        return new ApplicationsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get applicationTemplates(): ApplicationTemplatesRequestBuilder {
        return new ApplicationTemplatesRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get auditLogs(): AuditLogsRequestBuilder {
        return new AuditLogsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get authenticationMethodConfigurations(): AuthenticationMethodConfigurationsRequestBuilder {
        return new AuthenticationMethodConfigurationsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get authenticationMethodsPolicy(): AuthenticationMethodsPolicyRequestBuilder {
        return new AuthenticationMethodsPolicyRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get branding(): BrandingRequestBuilder {
        return new BrandingRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get certificateBasedAuthConfiguration(): CertificateBasedAuthConfigurationRequestBuilder {
        return new CertificateBasedAuthConfigurationRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get chats(): ChatsRequestBuilder {
        return new ChatsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get communications(): CommunicationsRequestBuilder {
        return new CommunicationsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get connections(): ConnectionsRequestBuilder {
        return new ConnectionsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get contacts(): ContactsRequestBuilder {
        return new ContactsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get contracts(): ContractsRequestBuilder {
        return new ContractsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get dataPolicyOperations(): DataPolicyOperationsRequestBuilder {
        return new DataPolicyOperationsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get deviceAppManagement(): DeviceAppManagementRequestBuilder {
        return new DeviceAppManagementRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get deviceManagement(): DeviceManagementRequestBuilder {
        return new DeviceManagementRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get devices(): DevicesRequestBuilder {
        return new DevicesRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get directory(): DirectoryRequestBuilder {
        return new DirectoryRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get directoryObjects(): DirectoryObjectsRequestBuilder {
        return new DirectoryObjectsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get directoryRoles(): DirectoryRolesRequestBuilder {
        return new DirectoryRolesRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get directoryRoleTemplates(): DirectoryRoleTemplatesRequestBuilder {
        return new DirectoryRoleTemplatesRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get domainDnsRecords(): DomainDnsRecordsRequestBuilder {
        return new DomainDnsRecordsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get domains(): DomainsRequestBuilder {
        return new DomainsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get drive(): icbb5ef41e7b355663c7331e7422002ee2973f10408b110fbf820b0d849e121e5 {
        return new icbb5ef41e7b355663c7331e7422002ee2973f10408b110fbf820b0d849e121e5(this.pathSegment, this.httpCore, false);
    }
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get education(): EducationRequestBuilder {
        return new EducationRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get external(): ExternalRequestBuilder {
        return new ExternalRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder {
        return new GroupLifecyclePoliciesRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get groups(): GroupsRequestBuilder {
        return new GroupsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get groupSettings(): GroupSettingsRequestBuilder {
        return new GroupSettingsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get groupSettingTemplates(): GroupSettingTemplatesRequestBuilder {
        return new GroupSettingTemplatesRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get identity(): IdentityRequestBuilder {
        return new IdentityRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get identityGovernance(): IdentityGovernanceRequestBuilder {
        return new IdentityGovernanceRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get identityProviders(): IdentityProvidersRequestBuilder {
        return new IdentityProvidersRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get informationProtection(): InformationProtectionRequestBuilder {
        return new InformationProtectionRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get invitations(): InvitationsRequestBuilder {
        return new InvitationsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get localizations(): LocalizationsRequestBuilder {
        return new LocalizationsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get me(): MeRequestBuilder {
        return new MeRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder {
        return new Oauth2PermissionGrantsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get organization(): OrganizationRequestBuilder {
        return new OrganizationRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get permissionGrants(): PermissionGrantsRequestBuilder {
        return new PermissionGrantsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get places(): PlacesRequestBuilder {
        return new PlacesRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get planner(): PlannerRequestBuilder {
        return new PlannerRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get policies(): PoliciesRequestBuilder {
        return new PoliciesRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get print(): PrintRequestBuilder {
        return new PrintRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get reports(): ReportsRequestBuilder {
        return new ReportsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get roleManagement(): RoleManagementRequestBuilder {
        return new RoleManagementRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get schemaExtensions(): SchemaExtensionsRequestBuilder {
        return new SchemaExtensionsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get scopedRoleMemberships(): ScopedRoleMembershipsRequestBuilder {
        return new ScopedRoleMembershipsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get search(): SearchRequestBuilder {
        return new SearchRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get security(): SecurityRequestBuilder {
        return new SecurityRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get servicePrincipals(): ServicePrincipalsRequestBuilder {
        return new ServicePrincipalsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get shares(): SharesRequestBuilder {
        return new SharesRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get subscribedSkus(): SubscribedSkusRequestBuilder {
        return new SubscribedSkusRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get subscriptions(): SubscriptionsRequestBuilder {
        return new SubscriptionsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get teams(): TeamsRequestBuilder {
        return new TeamsRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get teamsTemplates(): TeamsTemplatesRequestBuilder {
        return new TeamsTemplatesRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get teamwork(): TeamworkRequestBuilder {
        return new TeamworkRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get users(): UsersRequestBuilder {
        return new UsersRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    public get workbooks(): WorkbooksRequestBuilder {
        return new WorkbooksRequestBuilder(this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.agreementAcceptances.item collection
     * @param id Unique identifier of the item
     * @returns a agreementAcceptanceRequestBuilder
     */
    public agreementAcceptancesById(id: String) : AgreementAcceptanceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AgreementAcceptanceRequestBuilder(this.pathSegment + "/agreementAcceptances/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.agreements.item collection
     * @param id Unique identifier of the item
     * @returns a agreementRequestBuilder
     */
    public agreementsById(id: String) : AgreementRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AgreementRequestBuilder(this.pathSegment + "/agreements/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.applications.item collection
     * @param id Unique identifier of the item
     * @returns a applicationRequestBuilder
     */
    public applicationsById(id: String) : ApplicationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ApplicationRequestBuilder(this.pathSegment + "/applications/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.applicationTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a applicationTemplateRequestBuilder
     */
    public applicationTemplatesById(id: String) : ApplicationTemplateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ApplicationTemplateRequestBuilder(this.pathSegment + "/applicationTemplates/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.authenticationMethodConfigurations.item collection
     * @param id Unique identifier of the item
     * @returns a authenticationMethodConfigurationRequestBuilder
     */
    public authenticationMethodConfigurationsById(id: String) : AuthenticationMethodConfigurationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AuthenticationMethodConfigurationRequestBuilder(this.pathSegment + "/authenticationMethodConfigurations/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.certificateBasedAuthConfiguration.item collection
     * @param id Unique identifier of the item
     * @returns a certificateBasedAuthConfigurationRequestBuilder
     */
    public certificateBasedAuthConfigurationById(id: String) : CertificateBasedAuthConfigurationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new CertificateBasedAuthConfigurationRequestBuilder(this.pathSegment + "/certificateBasedAuthConfiguration/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.chats.item collection
     * @param id Unique identifier of the item
     * @returns a chatRequestBuilder
     */
    public chatsById(id: String) : ChatRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ChatRequestBuilder(this.pathSegment + "/chats/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.connections.item collection
     * @param id Unique identifier of the item
     * @returns a externalConnectionRequestBuilder
     */
    public connectionsById(id: String) : ExternalConnectionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ExternalConnectionRequestBuilder(this.pathSegment + "/connections/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new ApiClient and sets the default values.
     * @param httpCore The http core service to use to execute the requests.
     */
    public constructor(httpCore: HttpCore) {
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "https://graph.microsoft.com/v1.0";
        this.httpCore = httpCore;
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.contacts.item collection
     * @param id Unique identifier of the item
     * @returns a orgContactRequestBuilder
     */
    public contactsById(id: String) : OrgContactRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OrgContactRequestBuilder(this.pathSegment + "/contacts/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.contracts.item collection
     * @param id Unique identifier of the item
     * @returns a contractRequestBuilder
     */
    public contractsById(id: String) : ContractRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ContractRequestBuilder(this.pathSegment + "/contracts/" + id, this.httpCore, false);
    };
    public createGetRequestInformation(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri('', this.pathSegment, false);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.dataPolicyOperations.item collection
     * @param id Unique identifier of the item
     * @returns a dataPolicyOperationRequestBuilder
     */
    public dataPolicyOperationsById(id: String) : DataPolicyOperationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DataPolicyOperationRequestBuilder(this.pathSegment + "/dataPolicyOperations/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.devices.item collection
     * @param id Unique identifier of the item
     * @returns a deviceRequestBuilder
     */
    public devicesById(id: String) : DeviceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceRequestBuilder(this.pathSegment + "/devices/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.directoryObjects.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectRequestBuilder
     */
    public directoryObjectsById(id: String) : DirectoryObjectRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DirectoryObjectRequestBuilder(this.pathSegment + "/directoryObjects/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.directoryRoles.item collection
     * @param id Unique identifier of the item
     * @returns a directoryRoleRequestBuilder
     */
    public directoryRolesById(id: String) : DirectoryRoleRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DirectoryRoleRequestBuilder(this.pathSegment + "/directoryRoles/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.directoryRoleTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a directoryRoleTemplateRequestBuilder
     */
    public directoryRoleTemplatesById(id: String) : DirectoryRoleTemplateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DirectoryRoleTemplateRequestBuilder(this.pathSegment + "/directoryRoleTemplates/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.domainDnsRecords.item collection
     * @param id Unique identifier of the item
     * @returns a domainDnsRecordRequestBuilder
     */
    public domainDnsRecordsById(id: String) : DomainDnsRecordRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DomainDnsRecordRequestBuilder(this.pathSegment + "/domainDnsRecords/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.domains.item collection
     * @param id Unique identifier of the item
     * @returns a domainRequestBuilder
     */
    public domainsById(id: String) : DomainRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DomainRequestBuilder(this.pathSegment + "/domains/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.drives.item collection
     * @param id Unique identifier of the item
     * @returns a driveRequestBuilder
     */
    public drivesById(id: String) : i514bf51b7c4c33d2a25d47190f2e30470e04c5f737f18bcd446cd3feac5a6911 {
        if(!id) throw new Error("id cannot be undefined");
        return new i514bf51b7c4c33d2a25d47190f2e30470e04c5f737f18bcd446cd3feac5a6911(this.pathSegment + "/drives/" + id, this.httpCore, false);
    };
    public get(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createGetRequestInformation(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groupLifecyclePolicies.item collection
     * @param id Unique identifier of the item
     * @returns a groupLifecyclePolicyRequestBuilder
     */
    public groupLifecyclePoliciesById(id: String) : GroupLifecyclePolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new GroupLifecyclePolicyRequestBuilder(this.pathSegment + "/groupLifecyclePolicies/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groups.item collection
     * @param id Unique identifier of the item
     * @returns a groupRequestBuilder
     */
    public groupsById(id: String) : GroupRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new GroupRequestBuilder(this.pathSegment + "/groups/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groupSettings.item collection
     * @param id Unique identifier of the item
     * @returns a groupSettingRequestBuilder
     */
    public groupSettingsById(id: String) : GroupSettingRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new GroupSettingRequestBuilder(this.pathSegment + "/groupSettings/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groupSettingTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a groupSettingTemplateRequestBuilder
     */
    public groupSettingTemplatesById(id: String) : GroupSettingTemplateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new GroupSettingTemplateRequestBuilder(this.pathSegment + "/groupSettingTemplates/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.identityProviders.item collection
     * @param id Unique identifier of the item
     * @returns a identityProviderRequestBuilder
     */
    public identityProvidersById(id: String) : IdentityProviderRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new IdentityProviderRequestBuilder(this.pathSegment + "/identityProviders/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.invitations.item collection
     * @param id Unique identifier of the item
     * @returns a invitationRequestBuilder
     */
    public invitationsById(id: String) : InvitationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new InvitationRequestBuilder(this.pathSegment + "/invitations/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.localizations.item collection
     * @param id Unique identifier of the item
     * @returns a organizationalBrandingLocalizationRequestBuilder
     */
    public localizationsById(id: String) : OrganizationalBrandingLocalizationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OrganizationalBrandingLocalizationRequestBuilder(this.pathSegment + "/localizations/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.oauth2PermissionGrants.item collection
     * @param id Unique identifier of the item
     * @returns a oAuth2PermissionGrantRequestBuilder
     */
    public oauth2PermissionGrantsById(id: String) : OAuth2PermissionGrantRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OAuth2PermissionGrantRequestBuilder(this.pathSegment + "/oauth2PermissionGrants/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.organization.item collection
     * @param id Unique identifier of the item
     * @returns a organizationRequestBuilder
     */
    public organizationById(id: String) : OrganizationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OrganizationRequestBuilder(this.pathSegment + "/organization/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.permissionGrants.item collection
     * @param id Unique identifier of the item
     * @returns a resourceSpecificPermissionGrantRequestBuilder
     */
    public permissionGrantsById(id: String) : ResourceSpecificPermissionGrantRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ResourceSpecificPermissionGrantRequestBuilder(this.pathSegment + "/permissionGrants/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.places.item collection
     * @param id Unique identifier of the item
     * @returns a placeRequestBuilder
     */
    public placesById(id: String) : PlaceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PlaceRequestBuilder(this.pathSegment + "/places/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.schemaExtensions.item collection
     * @param id Unique identifier of the item
     * @returns a schemaExtensionRequestBuilder
     */
    public schemaExtensionsById(id: String) : SchemaExtensionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SchemaExtensionRequestBuilder(this.pathSegment + "/schemaExtensions/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.scopedRoleMemberships.item collection
     * @param id Unique identifier of the item
     * @returns a scopedRoleMembershipRequestBuilder
     */
    public scopedRoleMembershipsById(id: String) : ScopedRoleMembershipRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ScopedRoleMembershipRequestBuilder(this.pathSegment + "/scopedRoleMemberships/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.servicePrincipals.item collection
     * @param id Unique identifier of the item
     * @returns a servicePrincipalRequestBuilder
     */
    public servicePrincipalsById(id: String) : ServicePrincipalRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ServicePrincipalRequestBuilder(this.pathSegment + "/servicePrincipals/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.shares.item collection
     * @param id Unique identifier of the item
     * @returns a sharedDriveItemRequestBuilder
     */
    public sharesById(id: String) : SharedDriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SharedDriveItemRequestBuilder(this.pathSegment + "/shares/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.sites.item collection
     * @param id Unique identifier of the item
     * @returns a siteRequestBuilder
     */
    public sitesById(id: String) : SiteRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SiteRequestBuilder(this.pathSegment + "/sites/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.subscribedSkus.item collection
     * @param id Unique identifier of the item
     * @returns a subscribedSkuRequestBuilder
     */
    public subscribedSkusById(id: String) : SubscribedSkuRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SubscribedSkuRequestBuilder(this.pathSegment + "/subscribedSkus/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.subscriptions.item collection
     * @param id Unique identifier of the item
     * @returns a subscriptionRequestBuilder
     */
    public subscriptionsById(id: String) : SubscriptionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SubscriptionRequestBuilder(this.pathSegment + "/subscriptions/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teams.item collection
     * @param id Unique identifier of the item
     * @returns a teamRequestBuilder
     */
    public teamsById(id: String) : TeamRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TeamRequestBuilder(this.pathSegment + "/teams/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.teamsTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a teamsTemplateRequestBuilder
     */
    public teamsTemplatesById(id: String) : TeamsTemplateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TeamsTemplateRequestBuilder(this.pathSegment + "/teamsTemplates/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.item collection
     * @param id Unique identifier of the item
     * @returns a userRequestBuilder
     */
    public usersById(id: String) : UserRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new UserRequestBuilder(this.pathSegment + "/users/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public workbooksById(id: String) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DriveItemRequestBuilder(this.pathSegment + "/workbooks/" + id, this.httpCore, false);
    };
}
