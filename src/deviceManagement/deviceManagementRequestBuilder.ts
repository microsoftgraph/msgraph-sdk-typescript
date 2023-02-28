import {DeviceManagement} from '../models/';
import {createDeviceManagementFromDiscriminatorValue} from '../models/createDeviceManagementFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ApplePushNotificationCertificateRequestBuilder} from './applePushNotificationCertificate/applePushNotificationCertificateRequestBuilder';
import {AuditEventsRequestBuilder} from './auditEvents/auditEventsRequestBuilder';
import {AuditEventItemRequestBuilder} from './auditEvents/item/auditEventItemRequestBuilder';
import {ComplianceManagementPartnersRequestBuilder} from './complianceManagementPartners/complianceManagementPartnersRequestBuilder';
import {ComplianceManagementPartnerItemRequestBuilder} from './complianceManagementPartners/item/complianceManagementPartnerItemRequestBuilder';
import {ConditionalAccessSettingsRequestBuilder} from './conditionalAccessSettings/conditionalAccessSettingsRequestBuilder';
import {DetectedAppsRequestBuilder} from './detectedApps/detectedAppsRequestBuilder';
import {DetectedAppItemRequestBuilder} from './detectedApps/item/detectedAppItemRequestBuilder';
import {DeviceCategoriesRequestBuilder} from './deviceCategories/deviceCategoriesRequestBuilder';
import {DeviceCategoryItemRequestBuilder} from './deviceCategories/item/deviceCategoryItemRequestBuilder';
import {DeviceCompliancePoliciesRequestBuilder} from './deviceCompliancePolicies/deviceCompliancePoliciesRequestBuilder';
import {DeviceCompliancePolicyItemRequestBuilder} from './deviceCompliancePolicies/item/deviceCompliancePolicyItemRequestBuilder';
import {DeviceCompliancePolicyDeviceStateSummaryRequestBuilder} from './deviceCompliancePolicyDeviceStateSummary/deviceCompliancePolicyDeviceStateSummaryRequestBuilder';
import {DeviceCompliancePolicySettingStateSummariesRequestBuilder} from './deviceCompliancePolicySettingStateSummaries/deviceCompliancePolicySettingStateSummariesRequestBuilder';
import {DeviceCompliancePolicySettingStateSummaryItemRequestBuilder} from './deviceCompliancePolicySettingStateSummaries/item/deviceCompliancePolicySettingStateSummaryItemRequestBuilder';
import {DeviceConfigurationDeviceStateSummariesRequestBuilder} from './deviceConfigurationDeviceStateSummaries/deviceConfigurationDeviceStateSummariesRequestBuilder';
import {DeviceConfigurationsRequestBuilder} from './deviceConfigurations/deviceConfigurationsRequestBuilder';
import {DeviceConfigurationItemRequestBuilder} from './deviceConfigurations/item/deviceConfigurationItemRequestBuilder';
import {DeviceEnrollmentConfigurationsRequestBuilder} from './deviceEnrollmentConfigurations/deviceEnrollmentConfigurationsRequestBuilder';
import {DeviceEnrollmentConfigurationItemRequestBuilder} from './deviceEnrollmentConfigurations/item/deviceEnrollmentConfigurationItemRequestBuilder';
import {DeviceManagementPartnersRequestBuilder} from './deviceManagementPartners/deviceManagementPartnersRequestBuilder';
import {DeviceManagementPartnerItemRequestBuilder} from './deviceManagementPartners/item/deviceManagementPartnerItemRequestBuilder';
import {DeviceManagementRequestBuilderGetRequestConfiguration} from './deviceManagementRequestBuilderGetRequestConfiguration';
import {DeviceManagementRequestBuilderPatchRequestConfiguration} from './deviceManagementRequestBuilderPatchRequestConfiguration';
import {ExchangeConnectorsRequestBuilder} from './exchangeConnectors/exchangeConnectorsRequestBuilder';
import {DeviceManagementExchangeConnectorItemRequestBuilder} from './exchangeConnectors/item/deviceManagementExchangeConnectorItemRequestBuilder';
import {GetEffectivePermissionsWithScopeRequestBuilder} from './getEffectivePermissionsWithScope/getEffectivePermissionsWithScopeRequestBuilder';
import {ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder} from './importedWindowsAutopilotDeviceIdentities/importedWindowsAutopilotDeviceIdentitiesRequestBuilder';
import {ImportedWindowsAutopilotDeviceIdentityItemRequestBuilder} from './importedWindowsAutopilotDeviceIdentities/item/importedWindowsAutopilotDeviceIdentityItemRequestBuilder';
import {IosUpdateStatusesRequestBuilder} from './iosUpdateStatuses/iosUpdateStatusesRequestBuilder';
import {IosUpdateDeviceStatusItemRequestBuilder} from './iosUpdateStatuses/item/iosUpdateDeviceStatusItemRequestBuilder';
import {ManagedDeviceOverviewRequestBuilder} from './managedDeviceOverview/managedDeviceOverviewRequestBuilder';
import {ManagedDeviceItemRequestBuilder} from './managedDevices/item/managedDeviceItemRequestBuilder';
import {ManagedDevicesRequestBuilder} from './managedDevices/managedDevicesRequestBuilder';
import {MobileThreatDefenseConnectorItemRequestBuilder} from './mobileThreatDefenseConnectors/item/mobileThreatDefenseConnectorItemRequestBuilder';
import {MobileThreatDefenseConnectorsRequestBuilder} from './mobileThreatDefenseConnectors/mobileThreatDefenseConnectorsRequestBuilder';
import {NotificationMessageTemplateItemRequestBuilder} from './notificationMessageTemplates/item/notificationMessageTemplateItemRequestBuilder';
import {NotificationMessageTemplatesRequestBuilder} from './notificationMessageTemplates/notificationMessageTemplatesRequestBuilder';
import {RemoteAssistancePartnerItemRequestBuilder} from './remoteAssistancePartners/item/remoteAssistancePartnerItemRequestBuilder';
import {RemoteAssistancePartnersRequestBuilder} from './remoteAssistancePartners/remoteAssistancePartnersRequestBuilder';
import {ReportsRequestBuilder} from './reports/reportsRequestBuilder';
import {ResourceOperationItemRequestBuilder} from './resourceOperations/item/resourceOperationItemRequestBuilder';
import {ResourceOperationsRequestBuilder} from './resourceOperations/resourceOperationsRequestBuilder';
import {DeviceAndAppManagementRoleAssignmentItemRequestBuilder} from './roleAssignments/item/deviceAndAppManagementRoleAssignmentItemRequestBuilder';
import {RoleAssignmentsRequestBuilder} from './roleAssignments/roleAssignmentsRequestBuilder';
import {RoleDefinitionItemRequestBuilder} from './roleDefinitions/item/roleDefinitionItemRequestBuilder';
import {RoleDefinitionsRequestBuilder} from './roleDefinitions/roleDefinitionsRequestBuilder';
import {SoftwareUpdateStatusSummaryRequestBuilder} from './softwareUpdateStatusSummary/softwareUpdateStatusSummaryRequestBuilder';
import {TelecomExpenseManagementPartnerItemRequestBuilder} from './telecomExpenseManagementPartners/item/telecomExpenseManagementPartnerItemRequestBuilder';
import {TelecomExpenseManagementPartnersRequestBuilder} from './telecomExpenseManagementPartners/telecomExpenseManagementPartnersRequestBuilder';
import {TermsAndConditionsItemRequestBuilder} from './termsAndConditions/item/termsAndConditionsItemRequestBuilder';
import {TermsAndConditionsRequestBuilder} from './termsAndConditions/termsAndConditionsRequestBuilder';
import {DeviceManagementTroubleshootingEventItemRequestBuilder} from './troubleshootingEvents/item/deviceManagementTroubleshootingEventItemRequestBuilder';
import {TroubleshootingEventsRequestBuilder} from './troubleshootingEvents/troubleshootingEventsRequestBuilder';
import {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder} from './verifyWindowsEnrollmentAutoDiscoveryWithDomainName/verifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder';
import {WindowsAutopilotDeviceIdentityItemRequestBuilder} from './windowsAutopilotDeviceIdentities/item/windowsAutopilotDeviceIdentityItemRequestBuilder';
import {WindowsAutopilotDeviceIdentitiesRequestBuilder} from './windowsAutopilotDeviceIdentities/windowsAutopilotDeviceIdentitiesRequestBuilder';
import {WindowsInformationProtectionAppLearningSummaryItemRequestBuilder} from './windowsInformationProtectionAppLearningSummaries/item/windowsInformationProtectionAppLearningSummaryItemRequestBuilder';
import {WindowsInformationProtectionAppLearningSummariesRequestBuilder} from './windowsInformationProtectionAppLearningSummaries/windowsInformationProtectionAppLearningSummariesRequestBuilder';
import {WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilder} from './windowsInformationProtectionNetworkLearningSummaries/item/windowsInformationProtectionNetworkLearningSummaryItemRequestBuilder';
import {WindowsInformationProtectionNetworkLearningSummariesRequestBuilder} from './windowsInformationProtectionNetworkLearningSummaries/windowsInformationProtectionNetworkLearningSummariesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceManagement singleton.
 */
export class DeviceManagementRequestBuilder {
    /** Provides operations to manage the applePushNotificationCertificate property of the microsoft.graph.deviceManagement entity. */
    public get applePushNotificationCertificate(): ApplePushNotificationCertificateRequestBuilder {
        return new ApplePushNotificationCertificateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the auditEvents property of the microsoft.graph.deviceManagement entity. */
    public get auditEvents(): AuditEventsRequestBuilder {
        return new AuditEventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the complianceManagementPartners property of the microsoft.graph.deviceManagement entity. */
    public get complianceManagementPartners(): ComplianceManagementPartnersRequestBuilder {
        return new ComplianceManagementPartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the conditionalAccessSettings property of the microsoft.graph.deviceManagement entity. */
    public get conditionalAccessSettings(): ConditionalAccessSettingsRequestBuilder {
        return new ConditionalAccessSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the detectedApps property of the microsoft.graph.deviceManagement entity. */
    public get detectedApps(): DetectedAppsRequestBuilder {
        return new DetectedAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceCategories property of the microsoft.graph.deviceManagement entity. */
    public get deviceCategories(): DeviceCategoriesRequestBuilder {
        return new DeviceCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceCompliancePolicies property of the microsoft.graph.deviceManagement entity. */
    public get deviceCompliancePolicies(): DeviceCompliancePoliciesRequestBuilder {
        return new DeviceCompliancePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceCompliancePolicyDeviceStateSummary property of the microsoft.graph.deviceManagement entity. */
    public get deviceCompliancePolicyDeviceStateSummary(): DeviceCompliancePolicyDeviceStateSummaryRequestBuilder {
        return new DeviceCompliancePolicyDeviceStateSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceCompliancePolicySettingStateSummaries property of the microsoft.graph.deviceManagement entity. */
    public get deviceCompliancePolicySettingStateSummaries(): DeviceCompliancePolicySettingStateSummariesRequestBuilder {
        return new DeviceCompliancePolicySettingStateSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceConfigurationDeviceStateSummaries property of the microsoft.graph.deviceManagement entity. */
    public get deviceConfigurationDeviceStateSummaries(): DeviceConfigurationDeviceStateSummariesRequestBuilder {
        return new DeviceConfigurationDeviceStateSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceConfigurations property of the microsoft.graph.deviceManagement entity. */
    public get deviceConfigurations(): DeviceConfigurationsRequestBuilder {
        return new DeviceConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceEnrollmentConfigurations property of the microsoft.graph.deviceManagement entity. */
    public get deviceEnrollmentConfigurations(): DeviceEnrollmentConfigurationsRequestBuilder {
        return new DeviceEnrollmentConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceManagementPartners property of the microsoft.graph.deviceManagement entity. */
    public get deviceManagementPartners(): DeviceManagementPartnersRequestBuilder {
        return new DeviceManagementPartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the exchangeConnectors property of the microsoft.graph.deviceManagement entity. */
    public get exchangeConnectors(): ExchangeConnectorsRequestBuilder {
        return new ExchangeConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the importedWindowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity. */
    public get importedWindowsAutopilotDeviceIdentities(): ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder {
        return new ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the iosUpdateStatuses property of the microsoft.graph.deviceManagement entity. */
    public get iosUpdateStatuses(): IosUpdateStatusesRequestBuilder {
        return new IosUpdateStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the managedDeviceOverview property of the microsoft.graph.deviceManagement entity. */
    public get managedDeviceOverview(): ManagedDeviceOverviewRequestBuilder {
        return new ManagedDeviceOverviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the managedDevices property of the microsoft.graph.deviceManagement entity. */
    public get managedDevices(): ManagedDevicesRequestBuilder {
        return new ManagedDevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the mobileThreatDefenseConnectors property of the microsoft.graph.deviceManagement entity. */
    public get mobileThreatDefenseConnectors(): MobileThreatDefenseConnectorsRequestBuilder {
        return new MobileThreatDefenseConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the notificationMessageTemplates property of the microsoft.graph.deviceManagement entity. */
    public get notificationMessageTemplates(): NotificationMessageTemplatesRequestBuilder {
        return new NotificationMessageTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the remoteAssistancePartners property of the microsoft.graph.deviceManagement entity. */
    public get remoteAssistancePartners(): RemoteAssistancePartnersRequestBuilder {
        return new RemoteAssistancePartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the reports property of the microsoft.graph.deviceManagement entity. */
    public get reports(): ReportsRequestBuilder {
        return new ReportsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the resourceOperations property of the microsoft.graph.deviceManagement entity. */
    public get resourceOperations(): ResourceOperationsRequestBuilder {
        return new ResourceOperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleAssignments property of the microsoft.graph.deviceManagement entity. */
    public get roleAssignments(): RoleAssignmentsRequestBuilder {
        return new RoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleDefinitions property of the microsoft.graph.deviceManagement entity. */
    public get roleDefinitions(): RoleDefinitionsRequestBuilder {
        return new RoleDefinitionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the softwareUpdateStatusSummary property of the microsoft.graph.deviceManagement entity. */
    public get softwareUpdateStatusSummary(): SoftwareUpdateStatusSummaryRequestBuilder {
        return new SoftwareUpdateStatusSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the telecomExpenseManagementPartners property of the microsoft.graph.deviceManagement entity. */
    public get telecomExpenseManagementPartners(): TelecomExpenseManagementPartnersRequestBuilder {
        return new TelecomExpenseManagementPartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the termsAndConditions property of the microsoft.graph.deviceManagement entity. */
    public get termsAndConditions(): TermsAndConditionsRequestBuilder {
        return new TermsAndConditionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the troubleshootingEvents property of the microsoft.graph.deviceManagement entity. */
    public get troubleshootingEvents(): TroubleshootingEventsRequestBuilder {
        return new TroubleshootingEventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** Provides operations to manage the windowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity. */
    public get windowsAutopilotDeviceIdentities(): WindowsAutopilotDeviceIdentitiesRequestBuilder {
        return new WindowsAutopilotDeviceIdentitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the windowsInformationProtectionAppLearningSummaries property of the microsoft.graph.deviceManagement entity. */
    public get windowsInformationProtectionAppLearningSummaries(): WindowsInformationProtectionAppLearningSummariesRequestBuilder {
        return new WindowsInformationProtectionAppLearningSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the windowsInformationProtectionNetworkLearningSummaries property of the microsoft.graph.deviceManagement entity. */
    public get windowsInformationProtectionNetworkLearningSummaries(): WindowsInformationProtectionNetworkLearningSummariesRequestBuilder {
        return new WindowsInformationProtectionNetworkLearningSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the auditEvents property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a AuditEventItemRequestBuilder
     */
    public auditEventsById(id: string) : AuditEventItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["auditEvent%2Did"] = id
        return new AuditEventItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the complianceManagementPartners property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a ComplianceManagementPartnerItemRequestBuilder
     */
    public complianceManagementPartnersById(id: string) : ComplianceManagementPartnerItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["complianceManagementPartner%2Did"] = id
        return new ComplianceManagementPartnerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceManagementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Provides operations to manage the detectedApps property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a DetectedAppItemRequestBuilder
     */
    public detectedAppsById(id: string) : DetectedAppItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["detectedApp%2Did"] = id
        return new DetectedAppItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the deviceCategories property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a DeviceCategoryItemRequestBuilder
     */
    public deviceCategoriesById(id: string) : DeviceCategoryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCategory%2Did"] = id
        return new DeviceCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the deviceCompliancePolicies property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a DeviceCompliancePolicyItemRequestBuilder
     */
    public deviceCompliancePoliciesById(id: string) : DeviceCompliancePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicy%2Did"] = id
        return new DeviceCompliancePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the deviceCompliancePolicySettingStateSummaries property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a DeviceCompliancePolicySettingStateSummaryItemRequestBuilder
     */
    public deviceCompliancePolicySettingStateSummariesById(id: string) : DeviceCompliancePolicySettingStateSummaryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicySettingStateSummary%2Did"] = id
        return new DeviceCompliancePolicySettingStateSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the deviceConfigurations property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationItemRequestBuilder
     */
    public deviceConfigurationsById(id: string) : DeviceConfigurationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfiguration%2Did"] = id
        return new DeviceConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the deviceEnrollmentConfigurations property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a DeviceEnrollmentConfigurationItemRequestBuilder
     */
    public deviceEnrollmentConfigurationsById(id: string) : DeviceEnrollmentConfigurationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceEnrollmentConfiguration%2Did"] = id
        return new DeviceEnrollmentConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the deviceManagementPartners property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a DeviceManagementPartnerItemRequestBuilder
     */
    public deviceManagementPartnersById(id: string) : DeviceManagementPartnerItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementPartner%2Did"] = id
        return new DeviceManagementPartnerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the exchangeConnectors property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a DeviceManagementExchangeConnectorItemRequestBuilder
     */
    public exchangeConnectorsById(id: string) : DeviceManagementExchangeConnectorItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementExchangeConnector%2Did"] = id
        return new DeviceManagementExchangeConnectorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagement
     */
    public get(requestConfiguration?: DeviceManagementRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagement | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceManagement>(requestInfo, createDeviceManagementFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the getEffectivePermissions method.
     * @param scope Usage: scope='{scope}'
     * @returns a getEffectivePermissionsWithScopeRequestBuilder
     */
    public getEffectivePermissionsWithScope(scope: string | undefined) : GetEffectivePermissionsWithScopeRequestBuilder {
        if(!scope) throw new Error("scope cannot be undefined");
        return new GetEffectivePermissionsWithScopeRequestBuilder(this.pathParameters, this.requestAdapter, scope);
    };
    /**
     * Provides operations to manage the importedWindowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a ImportedWindowsAutopilotDeviceIdentityItemRequestBuilder
     */
    public importedWindowsAutopilotDeviceIdentitiesById(id: string) : ImportedWindowsAutopilotDeviceIdentityItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["importedWindowsAutopilotDeviceIdentity%2Did"] = id
        return new ImportedWindowsAutopilotDeviceIdentityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the iosUpdateStatuses property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a IosUpdateDeviceStatusItemRequestBuilder
     */
    public iosUpdateStatusesById(id: string) : IosUpdateDeviceStatusItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["iosUpdateDeviceStatus%2Did"] = id
        return new IosUpdateDeviceStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the managedDevices property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceItemRequestBuilder
     */
    public managedDevicesById(id: string) : ManagedDeviceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDevice%2Did"] = id
        return new ManagedDeviceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the mobileThreatDefenseConnectors property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a MobileThreatDefenseConnectorItemRequestBuilder
     */
    public mobileThreatDefenseConnectorsById(id: string) : MobileThreatDefenseConnectorItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileThreatDefenseConnector%2Did"] = id
        return new MobileThreatDefenseConnectorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the notificationMessageTemplates property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a NotificationMessageTemplateItemRequestBuilder
     */
    public notificationMessageTemplatesById(id: string) : NotificationMessageTemplateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["notificationMessageTemplate%2Did"] = id
        return new NotificationMessageTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagement
     */
    public patch(body: DeviceManagement | undefined, requestConfiguration?: DeviceManagementRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagement | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceManagement>(requestInfo, createDeviceManagementFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the remoteAssistancePartners property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a RemoteAssistancePartnerItemRequestBuilder
     */
    public remoteAssistancePartnersById(id: string) : RemoteAssistancePartnerItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["remoteAssistancePartner%2Did"] = id
        return new RemoteAssistancePartnerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the resourceOperations property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a ResourceOperationItemRequestBuilder
     */
    public resourceOperationsById(id: string) : ResourceOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resourceOperation%2Did"] = id
        return new ResourceOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the roleAssignments property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a DeviceAndAppManagementRoleAssignmentItemRequestBuilder
     */
    public roleAssignmentsById(id: string) : DeviceAndAppManagementRoleAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceAndAppManagementRoleAssignment%2Did"] = id
        return new DeviceAndAppManagementRoleAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the roleDefinitions property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a RoleDefinitionItemRequestBuilder
     */
    public roleDefinitionsById(id: string) : RoleDefinitionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["roleDefinition%2Did"] = id
        return new RoleDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the telecomExpenseManagementPartners property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a TelecomExpenseManagementPartnerItemRequestBuilder
     */
    public telecomExpenseManagementPartnersById(id: string) : TelecomExpenseManagementPartnerItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["telecomExpenseManagementPartner%2Did"] = id
        return new TelecomExpenseManagementPartnerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the termsAndConditions property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a TermsAndConditionsItemRequestBuilder
     */
    public termsAndConditionsById(id: string) : TermsAndConditionsItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["termsAndConditions%2Did"] = id
        return new TermsAndConditionsItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceManagementRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceManagement | undefined, requestConfiguration?: DeviceManagementRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Provides operations to manage the troubleshootingEvents property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a DeviceManagementTroubleshootingEventItemRequestBuilder
     */
    public troubleshootingEventsById(id: string) : DeviceManagementTroubleshootingEventItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementTroubleshootingEvent%2Did"] = id
        return new DeviceManagementTroubleshootingEventItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to call the verifyWindowsEnrollmentAutoDiscovery method.
     * @param domainName Usage: domainName='{domainName}'
     * @returns a verifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder
     */
    public verifyWindowsEnrollmentAutoDiscoveryWithDomainName(domainName: string | undefined) : VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder {
        if(!domainName) throw new Error("domainName cannot be undefined");
        return new VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder(this.pathParameters, this.requestAdapter, domainName);
    };
    /**
     * Provides operations to manage the windowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a WindowsAutopilotDeviceIdentityItemRequestBuilder
     */
    public windowsAutopilotDeviceIdentitiesById(id: string) : WindowsAutopilotDeviceIdentityItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsAutopilotDeviceIdentity%2Did"] = id
        return new WindowsAutopilotDeviceIdentityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the windowsInformationProtectionAppLearningSummaries property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a WindowsInformationProtectionAppLearningSummaryItemRequestBuilder
     */
    public windowsInformationProtectionAppLearningSummariesById(id: string) : WindowsInformationProtectionAppLearningSummaryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsInformationProtectionAppLearningSummary%2Did"] = id
        return new WindowsInformationProtectionAppLearningSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the windowsInformationProtectionNetworkLearningSummaries property of the microsoft.graph.deviceManagement entity.
     * @param id Unique identifier of the item
     * @returns a WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilder
     */
    public windowsInformationProtectionNetworkLearningSummariesById(id: string) : WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsInformationProtectionNetworkLearningSummary%2Did"] = id
        return new WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
