import {ApplePushNotificationCertificateRequestBuilder} from './applePushNotificationCertificate/applePushNotificationCertificateRequestBuilder';
import {ComplianceManagementPartnersRequestBuilder} from './complianceManagementPartners/complianceManagementPartnersRequestBuilder';
import {ComplianceManagementPartnerRequestBuilder} from './complianceManagementPartners/item/complianceManagementPartnerRequestBuilder';
import {ConditionalAccessSettingsRequestBuilder} from './conditionalAccessSettings/conditionalAccessSettingsRequestBuilder';
import {DetectedAppsRequestBuilder} from './detectedApps/detectedAppsRequestBuilder';
import {DetectedAppRequestBuilder} from './detectedApps/item/detectedAppRequestBuilder';
import {DeviceCategoriesRequestBuilder} from './deviceCategories/deviceCategoriesRequestBuilder';
import {DeviceCategoryRequestBuilder} from './deviceCategories/item/deviceCategoryRequestBuilder';
import {DeviceCompliancePoliciesRequestBuilder} from './deviceCompliancePolicies/deviceCompliancePoliciesRequestBuilder';
import {DeviceCompliancePolicyRequestBuilder} from './deviceCompliancePolicies/item/deviceCompliancePolicyRequestBuilder';
import {DeviceCompliancePolicyDeviceStateSummaryRequestBuilder} from './deviceCompliancePolicyDeviceStateSummary/deviceCompliancePolicyDeviceStateSummaryRequestBuilder';
import {DeviceCompliancePolicySettingStateSummariesRequestBuilder} from './deviceCompliancePolicySettingStateSummaries/deviceCompliancePolicySettingStateSummariesRequestBuilder';
import {DeviceCompliancePolicySettingStateSummaryRequestBuilder} from './deviceCompliancePolicySettingStateSummaries/item/deviceCompliancePolicySettingStateSummaryRequestBuilder';
import {DeviceConfigurationDeviceStateSummariesRequestBuilder} from './deviceConfigurationDeviceStateSummaries/deviceConfigurationDeviceStateSummariesRequestBuilder';
import {DeviceConfigurationsRequestBuilder} from './deviceConfigurations/deviceConfigurationsRequestBuilder';
import {DeviceConfigurationRequestBuilder} from './deviceConfigurations/item/deviceConfigurationRequestBuilder';
import {DeviceEnrollmentConfigurationsRequestBuilder} from './deviceEnrollmentConfigurations/deviceEnrollmentConfigurationsRequestBuilder';
import {DeviceEnrollmentConfigurationRequestBuilder} from './deviceEnrollmentConfigurations/item/deviceEnrollmentConfigurationRequestBuilder';
import {DeviceManagement} from './deviceManagement';
import {DeviceManagementPartnersRequestBuilder} from './deviceManagementPartners/deviceManagementPartnersRequestBuilder';
import {DeviceManagementPartnerRequestBuilder} from './deviceManagementPartners/item/deviceManagementPartnerRequestBuilder';
import {ExchangeConnectorsRequestBuilder} from './exchangeConnectors/exchangeConnectorsRequestBuilder';
import {DeviceManagementExchangeConnectorRequestBuilder} from './exchangeConnectors/item/deviceManagementExchangeConnectorRequestBuilder';
import {ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder} from './importedWindowsAutopilotDeviceIdentities/importedWindowsAutopilotDeviceIdentitiesRequestBuilder';
import {ImportedWindowsAutopilotDeviceIdentityRequestBuilder} from './importedWindowsAutopilotDeviceIdentities/item/importedWindowsAutopilotDeviceIdentityRequestBuilder';
import {IosUpdateStatusesRequestBuilder} from './iosUpdateStatuses/iosUpdateStatusesRequestBuilder';
import {IosUpdateDeviceStatusRequestBuilder} from './iosUpdateStatuses/item/iosUpdateDeviceStatusRequestBuilder';
import {ManagedDeviceOverviewRequestBuilder} from './managedDeviceOverview/managedDeviceOverviewRequestBuilder';
import {ManagedDeviceRequestBuilder} from './managedDevices/item/managedDeviceRequestBuilder';
import {ManagedDevicesRequestBuilder} from './managedDevices/managedDevicesRequestBuilder';
import {MobileThreatDefenseConnectorRequestBuilder} from './mobileThreatDefenseConnectors/item/mobileThreatDefenseConnectorRequestBuilder';
import {MobileThreatDefenseConnectorsRequestBuilder} from './mobileThreatDefenseConnectors/mobileThreatDefenseConnectorsRequestBuilder';
import {NotificationMessageTemplateRequestBuilder} from './notificationMessageTemplates/item/notificationMessageTemplateRequestBuilder';
import {NotificationMessageTemplatesRequestBuilder} from './notificationMessageTemplates/notificationMessageTemplatesRequestBuilder';
import {RemoteAssistancePartnerRequestBuilder} from './remoteAssistancePartners/item/remoteAssistancePartnerRequestBuilder';
import {RemoteAssistancePartnersRequestBuilder} from './remoteAssistancePartners/remoteAssistancePartnersRequestBuilder';
import {ResourceOperationRequestBuilder} from './resourceOperations/item/resourceOperationRequestBuilder';
import {ResourceOperationsRequestBuilder} from './resourceOperations/resourceOperationsRequestBuilder';
import {DeviceAndAppManagementRoleAssignmentRequestBuilder} from './roleAssignments/item/deviceAndAppManagementRoleAssignmentRequestBuilder';
import {RoleAssignmentsRequestBuilder} from './roleAssignments/roleAssignmentsRequestBuilder';
import {RoleDefinitionRequestBuilder} from './roleDefinitions/item/roleDefinitionRequestBuilder';
import {RoleDefinitionsRequestBuilder} from './roleDefinitions/roleDefinitionsRequestBuilder';
import {SoftwareUpdateStatusSummaryRequestBuilder} from './softwareUpdateStatusSummary/softwareUpdateStatusSummaryRequestBuilder';
import {TelecomExpenseManagementPartnerRequestBuilder} from './telecomExpenseManagementPartners/item/telecomExpenseManagementPartnerRequestBuilder';
import {TelecomExpenseManagementPartnersRequestBuilder} from './telecomExpenseManagementPartners/telecomExpenseManagementPartnersRequestBuilder';
import {TermsAndConditionsRequestBuilder} from './termsAndConditions/termsAndConditionsRequestBuilder';
import {DeviceManagementTroubleshootingEventRequestBuilder} from './troubleshootingEvents/item/deviceManagementTroubleshootingEventRequestBuilder';
import {TroubleshootingEventsRequestBuilder} from './troubleshootingEvents/troubleshootingEventsRequestBuilder';
import {WindowsAutopilotDeviceIdentityRequestBuilder} from './windowsAutopilotDeviceIdentities/item/windowsAutopilotDeviceIdentityRequestBuilder';
import {WindowsAutopilotDeviceIdentitiesRequestBuilder} from './windowsAutopilotDeviceIdentities/windowsAutopilotDeviceIdentitiesRequestBuilder';
import {WindowsInformationProtectionAppLearningSummaryRequestBuilder} from './windowsInformationProtectionAppLearningSummaries/item/windowsInformationProtectionAppLearningSummaryRequestBuilder';
import {WindowsInformationProtectionAppLearningSummariesRequestBuilder} from './windowsInformationProtectionAppLearningSummaries/windowsInformationProtectionAppLearningSummariesRequestBuilder';
import {WindowsInformationProtectionNetworkLearningSummaryRequestBuilder} from './windowsInformationProtectionNetworkLearningSummaries/item/windowsInformationProtectionNetworkLearningSummaryRequestBuilder';
import {WindowsInformationProtectionNetworkLearningSummariesRequestBuilder} from './windowsInformationProtectionNetworkLearningSummaries/windowsInformationProtectionNetworkLearningSummariesRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceManagement  */
export class DeviceManagementRequestBuilder {
    public get applePushNotificationCertificate(): ApplePushNotificationCertificateRequestBuilder {
        return new ApplePushNotificationCertificateRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get complianceManagementPartners(): ComplianceManagementPartnersRequestBuilder {
        return new ComplianceManagementPartnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get conditionalAccessSettings(): ConditionalAccessSettingsRequestBuilder {
        return new ConditionalAccessSettingsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get detectedApps(): DetectedAppsRequestBuilder {
        return new DetectedAppsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceCategories(): DeviceCategoriesRequestBuilder {
        return new DeviceCategoriesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceCompliancePolicies(): DeviceCompliancePoliciesRequestBuilder {
        return new DeviceCompliancePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceCompliancePolicyDeviceStateSummary(): DeviceCompliancePolicyDeviceStateSummaryRequestBuilder {
        return new DeviceCompliancePolicyDeviceStateSummaryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceCompliancePolicySettingStateSummaries(): DeviceCompliancePolicySettingStateSummariesRequestBuilder {
        return new DeviceCompliancePolicySettingStateSummariesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceConfigurationDeviceStateSummaries(): DeviceConfigurationDeviceStateSummariesRequestBuilder {
        return new DeviceConfigurationDeviceStateSummariesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceConfigurations(): DeviceConfigurationsRequestBuilder {
        return new DeviceConfigurationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceEnrollmentConfigurations(): DeviceEnrollmentConfigurationsRequestBuilder {
        return new DeviceEnrollmentConfigurationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceManagementPartners(): DeviceManagementPartnersRequestBuilder {
        return new DeviceManagementPartnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get exchangeConnectors(): ExchangeConnectorsRequestBuilder {
        return new ExchangeConnectorsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get importedWindowsAutopilotDeviceIdentities(): ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder {
        return new ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get iosUpdateStatuses(): IosUpdateStatusesRequestBuilder {
        return new IosUpdateStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get managedDeviceOverview(): ManagedDeviceOverviewRequestBuilder {
        return new ManagedDeviceOverviewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get managedDevices(): ManagedDevicesRequestBuilder {
        return new ManagedDevicesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get mobileThreatDefenseConnectors(): MobileThreatDefenseConnectorsRequestBuilder {
        return new MobileThreatDefenseConnectorsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get notificationMessageTemplates(): NotificationMessageTemplatesRequestBuilder {
        return new NotificationMessageTemplatesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get remoteAssistancePartners(): RemoteAssistancePartnersRequestBuilder {
        return new RemoteAssistancePartnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get resourceOperations(): ResourceOperationsRequestBuilder {
        return new ResourceOperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get roleAssignments(): RoleAssignmentsRequestBuilder {
        return new RoleAssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get roleDefinitions(): RoleDefinitionsRequestBuilder {
        return new RoleDefinitionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get softwareUpdateStatusSummary(): SoftwareUpdateStatusSummaryRequestBuilder {
        return new SoftwareUpdateStatusSummaryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get telecomExpenseManagementPartners(): TelecomExpenseManagementPartnersRequestBuilder {
        return new TelecomExpenseManagementPartnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get termsAndConditions(): TermsAndConditionsRequestBuilder {
        return new TermsAndConditionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get troubleshootingEvents(): TroubleshootingEventsRequestBuilder {
        return new TroubleshootingEventsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get windowsAutopilotDeviceIdentities(): WindowsAutopilotDeviceIdentitiesRequestBuilder {
        return new WindowsAutopilotDeviceIdentitiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get windowsInformationProtectionAppLearningSummaries(): WindowsInformationProtectionAppLearningSummariesRequestBuilder {
        return new WindowsInformationProtectionAppLearningSummariesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get windowsInformationProtectionNetworkLearningSummaries(): WindowsInformationProtectionNetworkLearningSummariesRequestBuilder {
        return new WindowsInformationProtectionNetworkLearningSummariesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.complianceManagementPartners collection
     * @param id Unique identifier of the item
     * @returns a ComplianceManagementPartnerRequestBuilder
     */
    public complianceManagementPartnersById(id: String) : ComplianceManagementPartnerRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ComplianceManagementPartnerRequestBuilder(this.currentPath + this.pathSegment + "/complianceManagementPartners/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new DeviceManagementRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/deviceManagement";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get deviceManagement
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Update deviceManagement
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceManagement | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.detectedApps collection
     * @param id Unique identifier of the item
     * @returns a DetectedAppRequestBuilder
     */
    public detectedAppsById(id: String) : DetectedAppRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DetectedAppRequestBuilder(this.currentPath + this.pathSegment + "/detectedApps/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.deviceCategories collection
     * @param id Unique identifier of the item
     * @returns a DeviceCategoryRequestBuilder
     */
    public deviceCategoriesById(id: String) : DeviceCategoryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceCategoryRequestBuilder(this.currentPath + this.pathSegment + "/deviceCategories/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.deviceCompliancePolicies collection
     * @param id Unique identifier of the item
     * @returns a DeviceCompliancePolicyRequestBuilder
     */
    public deviceCompliancePoliciesById(id: String) : DeviceCompliancePolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceCompliancePolicyRequestBuilder(this.currentPath + this.pathSegment + "/deviceCompliancePolicies/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.deviceCompliancePolicySettingStateSummaries collection
     * @param id Unique identifier of the item
     * @returns a DeviceCompliancePolicySettingStateSummaryRequestBuilder
     */
    public deviceCompliancePolicySettingStateSummariesById(id: String) : DeviceCompliancePolicySettingStateSummaryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceCompliancePolicySettingStateSummaryRequestBuilder(this.currentPath + this.pathSegment + "/deviceCompliancePolicySettingStateSummaries/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.deviceConfigurations collection
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationRequestBuilder
     */
    public deviceConfigurationsById(id: String) : DeviceConfigurationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceConfigurationRequestBuilder(this.currentPath + this.pathSegment + "/deviceConfigurations/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.deviceEnrollmentConfigurations collection
     * @param id Unique identifier of the item
     * @returns a DeviceEnrollmentConfigurationRequestBuilder
     */
    public deviceEnrollmentConfigurationsById(id: String) : DeviceEnrollmentConfigurationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceEnrollmentConfigurationRequestBuilder(this.currentPath + this.pathSegment + "/deviceEnrollmentConfigurations/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.deviceManagementPartners collection
     * @param id Unique identifier of the item
     * @returns a DeviceManagementPartnerRequestBuilder
     */
    public deviceManagementPartnersById(id: String) : DeviceManagementPartnerRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceManagementPartnerRequestBuilder(this.currentPath + this.pathSegment + "/deviceManagementPartners/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.exchangeConnectors collection
     * @param id Unique identifier of the item
     * @returns a DeviceManagementExchangeConnectorRequestBuilder
     */
    public exchangeConnectorsById(id: String) : DeviceManagementExchangeConnectorRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceManagementExchangeConnectorRequestBuilder(this.currentPath + this.pathSegment + "/exchangeConnectors/" + id, this.httpCore, false);
    };
    /**
     * Get deviceManagement
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagement
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagement | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<DeviceManagement>(requestInfo, DeviceManagement, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.importedWindowsAutopilotDeviceIdentities collection
     * @param id Unique identifier of the item
     * @returns a ImportedWindowsAutopilotDeviceIdentityRequestBuilder
     */
    public importedWindowsAutopilotDeviceIdentitiesById(id: String) : ImportedWindowsAutopilotDeviceIdentityRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ImportedWindowsAutopilotDeviceIdentityRequestBuilder(this.currentPath + this.pathSegment + "/importedWindowsAutopilotDeviceIdentities/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.iosUpdateStatuses collection
     * @param id Unique identifier of the item
     * @returns a IosUpdateDeviceStatusRequestBuilder
     */
    public iosUpdateStatusesById(id: String) : IosUpdateDeviceStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new IosUpdateDeviceStatusRequestBuilder(this.currentPath + this.pathSegment + "/iosUpdateStatuses/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.managedDevices collection
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceRequestBuilder
     */
    public managedDevicesById(id: String) : ManagedDeviceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedDeviceRequestBuilder(this.currentPath + this.pathSegment + "/managedDevices/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.mobileThreatDefenseConnectors collection
     * @param id Unique identifier of the item
     * @returns a MobileThreatDefenseConnectorRequestBuilder
     */
    public mobileThreatDefenseConnectorsById(id: String) : MobileThreatDefenseConnectorRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MobileThreatDefenseConnectorRequestBuilder(this.currentPath + this.pathSegment + "/mobileThreatDefenseConnectors/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.notificationMessageTemplates collection
     * @param id Unique identifier of the item
     * @returns a NotificationMessageTemplateRequestBuilder
     */
    public notificationMessageTemplatesById(id: String) : NotificationMessageTemplateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new NotificationMessageTemplateRequestBuilder(this.currentPath + this.pathSegment + "/notificationMessageTemplates/" + id, this.httpCore, false);
    };
    /**
     * Update deviceManagement
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DeviceManagement | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.remoteAssistancePartners collection
     * @param id Unique identifier of the item
     * @returns a RemoteAssistancePartnerRequestBuilder
     */
    public remoteAssistancePartnersById(id: String) : RemoteAssistancePartnerRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new RemoteAssistancePartnerRequestBuilder(this.currentPath + this.pathSegment + "/remoteAssistancePartners/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.resourceOperations collection
     * @param id Unique identifier of the item
     * @returns a ResourceOperationRequestBuilder
     */
    public resourceOperationsById(id: String) : ResourceOperationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ResourceOperationRequestBuilder(this.currentPath + this.pathSegment + "/resourceOperations/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.roleAssignments collection
     * @param id Unique identifier of the item
     * @returns a DeviceAndAppManagementRoleAssignmentRequestBuilder
     */
    public roleAssignmentsById(id: String) : DeviceAndAppManagementRoleAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceAndAppManagementRoleAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/roleAssignments/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.roleDefinitions collection
     * @param id Unique identifier of the item
     * @returns a RoleDefinitionRequestBuilder
     */
    public roleDefinitionsById(id: String) : RoleDefinitionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new RoleDefinitionRequestBuilder(this.currentPath + this.pathSegment + "/roleDefinitions/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.telecomExpenseManagementPartners collection
     * @param id Unique identifier of the item
     * @returns a TelecomExpenseManagementPartnerRequestBuilder
     */
    public telecomExpenseManagementPartnersById(id: String) : TelecomExpenseManagementPartnerRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TelecomExpenseManagementPartnerRequestBuilder(this.currentPath + this.pathSegment + "/telecomExpenseManagementPartners/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.termsAndConditions collection
     * @param id Unique identifier of the item
     * @returns a TermsAndConditionsRequestBuilder
     */
    public termsAndConditionsById(id: String) : TermsAndConditionsRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TermsAndConditionsRequestBuilder(this.currentPath + this.pathSegment + "/termsAndConditions/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.troubleshootingEvents collection
     * @param id Unique identifier of the item
     * @returns a DeviceManagementTroubleshootingEventRequestBuilder
     */
    public troubleshootingEventsById(id: String) : DeviceManagementTroubleshootingEventRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceManagementTroubleshootingEventRequestBuilder(this.currentPath + this.pathSegment + "/troubleshootingEvents/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.windowsAutopilotDeviceIdentities collection
     * @param id Unique identifier of the item
     * @returns a WindowsAutopilotDeviceIdentityRequestBuilder
     */
    public windowsAutopilotDeviceIdentitiesById(id: String) : WindowsAutopilotDeviceIdentityRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WindowsAutopilotDeviceIdentityRequestBuilder(this.currentPath + this.pathSegment + "/windowsAutopilotDeviceIdentities/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.windowsInformationProtectionAppLearningSummaries collection
     * @param id Unique identifier of the item
     * @returns a WindowsInformationProtectionAppLearningSummaryRequestBuilder
     */
    public windowsInformationProtectionAppLearningSummariesById(id: String) : WindowsInformationProtectionAppLearningSummaryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WindowsInformationProtectionAppLearningSummaryRequestBuilder(this.currentPath + this.pathSegment + "/windowsInformationProtectionAppLearningSummaries/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.windowsInformationProtectionNetworkLearningSummaries collection
     * @param id Unique identifier of the item
     * @returns a WindowsInformationProtectionNetworkLearningSummaryRequestBuilder
     */
    public windowsInformationProtectionNetworkLearningSummariesById(id: String) : WindowsInformationProtectionNetworkLearningSummaryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new WindowsInformationProtectionNetworkLearningSummaryRequestBuilder(this.currentPath + this.pathSegment + "/windowsInformationProtectionNetworkLearningSummaries/" + id, this.httpCore, false);
    };
}
