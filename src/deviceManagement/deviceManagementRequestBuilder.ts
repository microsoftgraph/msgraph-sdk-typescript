import {createDeviceManagementFromDiscriminatorValue} from '../models/createDeviceManagementFromDiscriminatorValue';
import {deserializeIntoDeviceManagement} from '../models/deserializeIntoDeviceManagement';
import {DeviceManagement} from '../models/deviceManagement';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeDeviceManagement} from '../models/serializeDeviceManagement';
import {ApplePushNotificationCertificateRequestBuilder} from './applePushNotificationCertificate/applePushNotificationCertificateRequestBuilder';
import {AuditEventsRequestBuilder} from './auditEvents/auditEventsRequestBuilder';
import {ComplianceManagementPartnersRequestBuilder} from './complianceManagementPartners/complianceManagementPartnersRequestBuilder';
import {ConditionalAccessSettingsRequestBuilder} from './conditionalAccessSettings/conditionalAccessSettingsRequestBuilder';
import {DetectedAppsRequestBuilder} from './detectedApps/detectedAppsRequestBuilder';
import {DeviceCategoriesRequestBuilder} from './deviceCategories/deviceCategoriesRequestBuilder';
import {DeviceCompliancePoliciesRequestBuilder} from './deviceCompliancePolicies/deviceCompliancePoliciesRequestBuilder';
import {DeviceCompliancePolicyDeviceStateSummaryRequestBuilder} from './deviceCompliancePolicyDeviceStateSummary/deviceCompliancePolicyDeviceStateSummaryRequestBuilder';
import {DeviceCompliancePolicySettingStateSummariesRequestBuilder} from './deviceCompliancePolicySettingStateSummaries/deviceCompliancePolicySettingStateSummariesRequestBuilder';
import {DeviceConfigurationDeviceStateSummariesRequestBuilder} from './deviceConfigurationDeviceStateSummaries/deviceConfigurationDeviceStateSummariesRequestBuilder';
import {DeviceConfigurationsRequestBuilder} from './deviceConfigurations/deviceConfigurationsRequestBuilder';
import {DeviceEnrollmentConfigurationsRequestBuilder} from './deviceEnrollmentConfigurations/deviceEnrollmentConfigurationsRequestBuilder';
import {DeviceManagementPartnersRequestBuilder} from './deviceManagementPartners/deviceManagementPartnersRequestBuilder';
import {DeviceManagementRequestBuilderGetRequestConfiguration} from './deviceManagementRequestBuilderGetRequestConfiguration';
import {DeviceManagementRequestBuilderPatchRequestConfiguration} from './deviceManagementRequestBuilderPatchRequestConfiguration';
import {ExchangeConnectorsRequestBuilder} from './exchangeConnectors/exchangeConnectorsRequestBuilder';
import {GetEffectivePermissionsWithScopeRequestBuilder} from './getEffectivePermissionsWithScope/getEffectivePermissionsWithScopeRequestBuilder';
import {ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder} from './importedWindowsAutopilotDeviceIdentities/importedWindowsAutopilotDeviceIdentitiesRequestBuilder';
import {IosUpdateStatusesRequestBuilder} from './iosUpdateStatuses/iosUpdateStatusesRequestBuilder';
import {ManagedDeviceOverviewRequestBuilder} from './managedDeviceOverview/managedDeviceOverviewRequestBuilder';
import {ManagedDevicesRequestBuilder} from './managedDevices/managedDevicesRequestBuilder';
import {MobileThreatDefenseConnectorsRequestBuilder} from './mobileThreatDefenseConnectors/mobileThreatDefenseConnectorsRequestBuilder';
import {NotificationMessageTemplatesRequestBuilder} from './notificationMessageTemplates/notificationMessageTemplatesRequestBuilder';
import {RemoteAssistancePartnersRequestBuilder} from './remoteAssistancePartners/remoteAssistancePartnersRequestBuilder';
import {ReportsRequestBuilder} from './reports/reportsRequestBuilder';
import {ResourceOperationsRequestBuilder} from './resourceOperations/resourceOperationsRequestBuilder';
import {RoleAssignmentsRequestBuilder} from './roleAssignments/roleAssignmentsRequestBuilder';
import {RoleDefinitionsRequestBuilder} from './roleDefinitions/roleDefinitionsRequestBuilder';
import {SoftwareUpdateStatusSummaryRequestBuilder} from './softwareUpdateStatusSummary/softwareUpdateStatusSummaryRequestBuilder';
import {TelecomExpenseManagementPartnersRequestBuilder} from './telecomExpenseManagementPartners/telecomExpenseManagementPartnersRequestBuilder';
import {TermsAndConditionsRequestBuilder} from './termsAndConditions/termsAndConditionsRequestBuilder';
import {TroubleshootingEventsRequestBuilder} from './troubleshootingEvents/troubleshootingEventsRequestBuilder';
import {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder} from './verifyWindowsEnrollmentAutoDiscoveryWithDomainName/verifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder';
import {WindowsAutopilotDeviceIdentitiesRequestBuilder} from './windowsAutopilotDeviceIdentities/windowsAutopilotDeviceIdentitiesRequestBuilder';
import {WindowsInformationProtectionAppLearningSummariesRequestBuilder} from './windowsInformationProtectionAppLearningSummaries/windowsInformationProtectionAppLearningSummariesRequestBuilder';
import {WindowsInformationProtectionNetworkLearningSummariesRequestBuilder} from './windowsInformationProtectionNetworkLearningSummaries/windowsInformationProtectionNetworkLearningSummariesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceManagement singleton.
 */
export class DeviceManagementRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the applePushNotificationCertificate property of the microsoft.graph.deviceManagement entity.
     */
    public get applePushNotificationCertificate(): ApplePushNotificationCertificateRequestBuilder {
        return new ApplePushNotificationCertificateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the auditEvents property of the microsoft.graph.deviceManagement entity.
     */
    public get auditEvents(): AuditEventsRequestBuilder {
        return new AuditEventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the complianceManagementPartners property of the microsoft.graph.deviceManagement entity.
     */
    public get complianceManagementPartners(): ComplianceManagementPartnersRequestBuilder {
        return new ComplianceManagementPartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the conditionalAccessSettings property of the microsoft.graph.deviceManagement entity.
     */
    public get conditionalAccessSettings(): ConditionalAccessSettingsRequestBuilder {
        return new ConditionalAccessSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the detectedApps property of the microsoft.graph.deviceManagement entity.
     */
    public get detectedApps(): DetectedAppsRequestBuilder {
        return new DetectedAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceCategories property of the microsoft.graph.deviceManagement entity.
     */
    public get deviceCategories(): DeviceCategoriesRequestBuilder {
        return new DeviceCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceCompliancePolicies property of the microsoft.graph.deviceManagement entity.
     */
    public get deviceCompliancePolicies(): DeviceCompliancePoliciesRequestBuilder {
        return new DeviceCompliancePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceCompliancePolicyDeviceStateSummary property of the microsoft.graph.deviceManagement entity.
     */
    public get deviceCompliancePolicyDeviceStateSummary(): DeviceCompliancePolicyDeviceStateSummaryRequestBuilder {
        return new DeviceCompliancePolicyDeviceStateSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceCompliancePolicySettingStateSummaries property of the microsoft.graph.deviceManagement entity.
     */
    public get deviceCompliancePolicySettingStateSummaries(): DeviceCompliancePolicySettingStateSummariesRequestBuilder {
        return new DeviceCompliancePolicySettingStateSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceConfigurationDeviceStateSummaries property of the microsoft.graph.deviceManagement entity.
     */
    public get deviceConfigurationDeviceStateSummaries(): DeviceConfigurationDeviceStateSummariesRequestBuilder {
        return new DeviceConfigurationDeviceStateSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceConfigurations property of the microsoft.graph.deviceManagement entity.
     */
    public get deviceConfigurations(): DeviceConfigurationsRequestBuilder {
        return new DeviceConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceEnrollmentConfigurations property of the microsoft.graph.deviceManagement entity.
     */
    public get deviceEnrollmentConfigurations(): DeviceEnrollmentConfigurationsRequestBuilder {
        return new DeviceEnrollmentConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceManagementPartners property of the microsoft.graph.deviceManagement entity.
     */
    public get deviceManagementPartners(): DeviceManagementPartnersRequestBuilder {
        return new DeviceManagementPartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the exchangeConnectors property of the microsoft.graph.deviceManagement entity.
     */
    public get exchangeConnectors(): ExchangeConnectorsRequestBuilder {
        return new ExchangeConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the importedWindowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity.
     */
    public get importedWindowsAutopilotDeviceIdentities(): ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder {
        return new ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the iosUpdateStatuses property of the microsoft.graph.deviceManagement entity.
     */
    public get iosUpdateStatuses(): IosUpdateStatusesRequestBuilder {
        return new IosUpdateStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the managedDeviceOverview property of the microsoft.graph.deviceManagement entity.
     */
    public get managedDeviceOverview(): ManagedDeviceOverviewRequestBuilder {
        return new ManagedDeviceOverviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the managedDevices property of the microsoft.graph.deviceManagement entity.
     */
    public get managedDevices(): ManagedDevicesRequestBuilder {
        return new ManagedDevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the mobileThreatDefenseConnectors property of the microsoft.graph.deviceManagement entity.
     */
    public get mobileThreatDefenseConnectors(): MobileThreatDefenseConnectorsRequestBuilder {
        return new MobileThreatDefenseConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the notificationMessageTemplates property of the microsoft.graph.deviceManagement entity.
     */
    public get notificationMessageTemplates(): NotificationMessageTemplatesRequestBuilder {
        return new NotificationMessageTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the remoteAssistancePartners property of the microsoft.graph.deviceManagement entity.
     */
    public get remoteAssistancePartners(): RemoteAssistancePartnersRequestBuilder {
        return new RemoteAssistancePartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the reports property of the microsoft.graph.deviceManagement entity.
     */
    public get reports(): ReportsRequestBuilder {
        return new ReportsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourceOperations property of the microsoft.graph.deviceManagement entity.
     */
    public get resourceOperations(): ResourceOperationsRequestBuilder {
        return new ResourceOperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleAssignments property of the microsoft.graph.deviceManagement entity.
     */
    public get roleAssignments(): RoleAssignmentsRequestBuilder {
        return new RoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleDefinitions property of the microsoft.graph.deviceManagement entity.
     */
    public get roleDefinitions(): RoleDefinitionsRequestBuilder {
        return new RoleDefinitionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the softwareUpdateStatusSummary property of the microsoft.graph.deviceManagement entity.
     */
    public get softwareUpdateStatusSummary(): SoftwareUpdateStatusSummaryRequestBuilder {
        return new SoftwareUpdateStatusSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the telecomExpenseManagementPartners property of the microsoft.graph.deviceManagement entity.
     */
    public get telecomExpenseManagementPartners(): TelecomExpenseManagementPartnersRequestBuilder {
        return new TelecomExpenseManagementPartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the termsAndConditions property of the microsoft.graph.deviceManagement entity.
     */
    public get termsAndConditions(): TermsAndConditionsRequestBuilder {
        return new TermsAndConditionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the troubleshootingEvents property of the microsoft.graph.deviceManagement entity.
     */
    public get troubleshootingEvents(): TroubleshootingEventsRequestBuilder {
        return new TroubleshootingEventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the windowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity.
     */
    public get windowsAutopilotDeviceIdentities(): WindowsAutopilotDeviceIdentitiesRequestBuilder {
        return new WindowsAutopilotDeviceIdentitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the windowsInformationProtectionAppLearningSummaries property of the microsoft.graph.deviceManagement entity.
     */
    public get windowsInformationProtectionAppLearningSummaries(): WindowsInformationProtectionAppLearningSummariesRequestBuilder {
        return new WindowsInformationProtectionAppLearningSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the windowsInformationProtectionNetworkLearningSummaries property of the microsoft.graph.deviceManagement entity.
     */
    public get windowsInformationProtectionNetworkLearningSummaries(): WindowsInformationProtectionNetworkLearningSummariesRequestBuilder {
        return new WindowsInformationProtectionNetworkLearningSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DeviceManagementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement{?%24select,%24expand}");
    };
    /**
     * Read properties and relationships of the deviceManagement object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagement
     * @see {@link https://docs.microsoft.com/graph/api/intune-tem-devicemanagement-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceManagementRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagement | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
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
     * Update the properties of a deviceManagement object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagement
     * @see {@link https://docs.microsoft.com/graph/api/intune-enrollment-devicemanagement-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceManagement | undefined, requestConfiguration?: DeviceManagementRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagement | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DeviceManagement>(requestInfo, createDeviceManagementFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Read properties and relationships of the deviceManagement object.
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
     * Update the properties of a deviceManagement object.
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceManagement);
        return requestInfo;
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
}
