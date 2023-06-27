import {ApplePushNotificationCertificate} from './applePushNotificationCertificate';
import {AuditEvent} from './auditEvent';
import {ComplianceManagementPartner} from './complianceManagementPartner';
import {DetectedApp} from './detectedApp';
import {DeviceAndAppManagementRoleAssignment} from './deviceAndAppManagementRoleAssignment';
import {DeviceCategory} from './deviceCategory';
import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {DeviceCompliancePolicyDeviceStateSummary} from './deviceCompliancePolicyDeviceStateSummary';
import {DeviceCompliancePolicySettingStateSummary} from './deviceCompliancePolicySettingStateSummary';
import {DeviceConfiguration} from './deviceConfiguration';
import {DeviceConfigurationDeviceStateSummary} from './deviceConfigurationDeviceStateSummary';
import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {DeviceManagementExchangeConnector} from './deviceManagementExchangeConnector';
import {DeviceManagementPartner} from './deviceManagementPartner';
import {DeviceManagementReports} from './deviceManagementReports';
import {DeviceManagementSettings} from './deviceManagementSettings';
import {DeviceManagementSubscriptionState} from './deviceManagementSubscriptionState';
import {DeviceManagementTroubleshootingEvent} from './deviceManagementTroubleshootingEvent';
import {Entity} from './entity';
import {ImportedWindowsAutopilotDeviceIdentity} from './importedWindowsAutopilotDeviceIdentity';
import {IntuneBrand} from './intuneBrand';
import {IosUpdateDeviceStatus} from './iosUpdateDeviceStatus';
import {ManagedDevice} from './managedDevice';
import {ManagedDeviceOverview} from './managedDeviceOverview';
import {MobileThreatDefenseConnector} from './mobileThreatDefenseConnector';
import {NotificationMessageTemplate} from './notificationMessageTemplate';
import {OnPremisesConditionalAccessSettings} from './onPremisesConditionalAccessSettings';
import {RemoteAssistancePartner} from './remoteAssistancePartner';
import {ResourceOperation} from './resourceOperation';
import {RoleDefinition} from './roleDefinition';
import {SoftwareUpdateStatusSummary} from './softwareUpdateStatusSummary';
import {TelecomExpenseManagementPartner} from './telecomExpenseManagementPartner';
import {TermsAndConditions} from './termsAndConditions';
import {WindowsAutopilotDeviceIdentity} from './windowsAutopilotDeviceIdentity';
import {WindowsInformationProtectionAppLearningSummary} from './windowsInformationProtectionAppLearningSummary';
import {WindowsInformationProtectionNetworkLearningSummary} from './windowsInformationProtectionNetworkLearningSummary';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagement extends Entity, Parsable {
    /**
     * Apple push notification certificate.
     */
    applePushNotificationCertificate?: ApplePushNotificationCertificate | undefined;
    /**
     * The Audit Events
     */
    auditEvents?: AuditEvent[] | undefined;
    /**
     * The list of Compliance Management Partners configured by the tenant.
     */
    complianceManagementPartners?: ComplianceManagementPartner[] | undefined;
    /**
     * The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access
     */
    conditionalAccessSettings?: OnPremisesConditionalAccessSettings | undefined;
    /**
     * The list of detected apps associated with a device.
     */
    detectedApps?: DetectedApp[] | undefined;
    /**
     * The list of device categories with the tenant.
     */
    deviceCategories?: DeviceCategory[] | undefined;
    /**
     * The device compliance policies.
     */
    deviceCompliancePolicies?: DeviceCompliancePolicy[] | undefined;
    /**
     * The device compliance state summary for this account.
     */
    deviceCompliancePolicyDeviceStateSummary?: DeviceCompliancePolicyDeviceStateSummary | undefined;
    /**
     * The summary states of compliance policy settings for this account.
     */
    deviceCompliancePolicySettingStateSummaries?: DeviceCompliancePolicySettingStateSummary[] | undefined;
    /**
     * The device configuration device state summary for this account.
     */
    deviceConfigurationDeviceStateSummaries?: DeviceConfigurationDeviceStateSummary | undefined;
    /**
     * The device configurations.
     */
    deviceConfigurations?: DeviceConfiguration[] | undefined;
    /**
     * The list of device enrollment configurations
     */
    deviceEnrollmentConfigurations?: DeviceEnrollmentConfiguration[] | undefined;
    /**
     * The list of Device Management Partners configured by the tenant.
     */
    deviceManagementPartners?: DeviceManagementPartner[] | undefined;
    /**
     * The list of Exchange Connectors configured by the tenant.
     */
    exchangeConnectors?: DeviceManagementExchangeConnector[] | undefined;
    /**
     * Collection of imported Windows autopilot devices.
     */
    importedWindowsAutopilotDeviceIdentities?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
    /**
     * Intune Account Id for given tenant
     */
    intuneAccountId?: string | undefined;
    /**
     * intuneBrand contains data which is used in customizing the appearance of the Company Portal applications as well as the end user web portal.
     */
    intuneBrand?: IntuneBrand | undefined;
    /**
     * The IOS software update installation statuses for this account.
     */
    iosUpdateStatuses?: IosUpdateDeviceStatus[] | undefined;
    /**
     * Device overview
     */
    managedDeviceOverview?: ManagedDeviceOverview | undefined;
    /**
     * The list of managed devices.
     */
    managedDevices?: ManagedDevice[] | undefined;
    /**
     * The list of Mobile threat Defense connectors configured by the tenant.
     */
    mobileThreatDefenseConnectors?: MobileThreatDefenseConnector[] | undefined;
    /**
     * The Notification Message Templates.
     */
    notificationMessageTemplates?: NotificationMessageTemplate[] | undefined;
    /**
     * The remote assist partners.
     */
    remoteAssistancePartners?: RemoteAssistancePartner[] | undefined;
    /**
     * Reports singleton
     */
    reports?: DeviceManagementReports | undefined;
    /**
     * The Resource Operations.
     */
    resourceOperations?: ResourceOperation[] | undefined;
    /**
     * The Role Assignments.
     */
    roleAssignments?: DeviceAndAppManagementRoleAssignment[] | undefined;
    /**
     * The Role Definitions.
     */
    roleDefinitions?: RoleDefinition[] | undefined;
    /**
     * Account level settings.
     */
    settings?: DeviceManagementSettings | undefined;
    /**
     * The software update status summary.
     */
    softwareUpdateStatusSummary?: SoftwareUpdateStatusSummary | undefined;
    /**
     * Tenant mobile device management subscription state.
     */
    subscriptionState?: DeviceManagementSubscriptionState | undefined;
    /**
     * The telecom expense management partners.
     */
    telecomExpenseManagementPartners?: TelecomExpenseManagementPartner[] | undefined;
    /**
     * The terms and conditions associated with device management of the company.
     */
    termsAndConditions?: TermsAndConditions[] | undefined;
    /**
     * The list of troubleshooting events for the tenant.
     */
    troubleshootingEvents?: DeviceManagementTroubleshootingEvent[] | undefined;
    /**
     * The Windows autopilot device identities contained collection.
     */
    windowsAutopilotDeviceIdentities?: WindowsAutopilotDeviceIdentity[] | undefined;
    /**
     * The windows information protection app learning summaries.
     */
    windowsInformationProtectionAppLearningSummaries?: WindowsInformationProtectionAppLearningSummary[] | undefined;
    /**
     * The windows information protection network learning summaries.
     */
    windowsInformationProtectionNetworkLearningSummaries?: WindowsInformationProtectionNetworkLearningSummary[] | undefined;
}
