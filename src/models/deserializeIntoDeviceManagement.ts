import {ApplePushNotificationCertificate} from './applePushNotificationCertificate';
import {AuditEvent} from './auditEvent';
import {ComplianceManagementPartner} from './complianceManagementPartner';
import {createApplePushNotificationCertificateFromDiscriminatorValue} from './createApplePushNotificationCertificateFromDiscriminatorValue';
import {createAuditEventFromDiscriminatorValue} from './createAuditEventFromDiscriminatorValue';
import {createComplianceManagementPartnerFromDiscriminatorValue} from './createComplianceManagementPartnerFromDiscriminatorValue';
import {createDetectedAppFromDiscriminatorValue} from './createDetectedAppFromDiscriminatorValue';
import {createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue} from './createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue';
import {createDeviceCategoryFromDiscriminatorValue} from './createDeviceCategoryFromDiscriminatorValue';
import {createDeviceCompliancePolicyDeviceStateSummaryFromDiscriminatorValue} from './createDeviceCompliancePolicyDeviceStateSummaryFromDiscriminatorValue';
import {createDeviceCompliancePolicyFromDiscriminatorValue} from './createDeviceCompliancePolicyFromDiscriminatorValue';
import {createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue} from './createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue';
import {createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue} from './createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue';
import {createDeviceConfigurationFromDiscriminatorValue} from './createDeviceConfigurationFromDiscriminatorValue';
import {createDeviceEnrollmentConfigurationFromDiscriminatorValue} from './createDeviceEnrollmentConfigurationFromDiscriminatorValue';
import {createDeviceManagementExchangeConnectorFromDiscriminatorValue} from './createDeviceManagementExchangeConnectorFromDiscriminatorValue';
import {createDeviceManagementPartnerFromDiscriminatorValue} from './createDeviceManagementPartnerFromDiscriminatorValue';
import {createDeviceManagementReportsFromDiscriminatorValue} from './createDeviceManagementReportsFromDiscriminatorValue';
import {createDeviceManagementSettingsFromDiscriminatorValue} from './createDeviceManagementSettingsFromDiscriminatorValue';
import {createDeviceManagementTroubleshootingEventFromDiscriminatorValue} from './createDeviceManagementTroubleshootingEventFromDiscriminatorValue';
import {createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue} from './createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import {createIntuneBrandFromDiscriminatorValue} from './createIntuneBrandFromDiscriminatorValue';
import {createIosUpdateDeviceStatusFromDiscriminatorValue} from './createIosUpdateDeviceStatusFromDiscriminatorValue';
import {createManagedDeviceFromDiscriminatorValue} from './createManagedDeviceFromDiscriminatorValue';
import {createManagedDeviceOverviewFromDiscriminatorValue} from './createManagedDeviceOverviewFromDiscriminatorValue';
import {createMobileThreatDefenseConnectorFromDiscriminatorValue} from './createMobileThreatDefenseConnectorFromDiscriminatorValue';
import {createNotificationMessageTemplateFromDiscriminatorValue} from './createNotificationMessageTemplateFromDiscriminatorValue';
import {createOnPremisesConditionalAccessSettingsFromDiscriminatorValue} from './createOnPremisesConditionalAccessSettingsFromDiscriminatorValue';
import {createRemoteAssistancePartnerFromDiscriminatorValue} from './createRemoteAssistancePartnerFromDiscriminatorValue';
import {createResourceOperationFromDiscriminatorValue} from './createResourceOperationFromDiscriminatorValue';
import {createRoleDefinitionFromDiscriminatorValue} from './createRoleDefinitionFromDiscriminatorValue';
import {createSoftwareUpdateStatusSummaryFromDiscriminatorValue} from './createSoftwareUpdateStatusSummaryFromDiscriminatorValue';
import {createTelecomExpenseManagementPartnerFromDiscriminatorValue} from './createTelecomExpenseManagementPartnerFromDiscriminatorValue';
import {createTermsAndConditionsFromDiscriminatorValue} from './createTermsAndConditionsFromDiscriminatorValue';
import {createWindowsAutopilotDeviceIdentityFromDiscriminatorValue} from './createWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import {createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue} from './createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue';
import {createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue} from './createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DetectedApp} from './detectedApp';
import {DeviceAndAppManagementRoleAssignment} from './deviceAndAppManagementRoleAssignment';
import {DeviceCategory} from './deviceCategory';
import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {DeviceCompliancePolicyDeviceStateSummary} from './deviceCompliancePolicyDeviceStateSummary';
import {DeviceCompliancePolicySettingStateSummary} from './deviceCompliancePolicySettingStateSummary';
import {DeviceConfiguration} from './deviceConfiguration';
import {DeviceConfigurationDeviceStateSummary} from './deviceConfigurationDeviceStateSummary';
import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {DeviceManagement} from './deviceManagement';
import {DeviceManagementExchangeConnector} from './deviceManagementExchangeConnector';
import {DeviceManagementPartner} from './deviceManagementPartner';
import {DeviceManagementReports} from './deviceManagementReports';
import {DeviceManagementSettings} from './deviceManagementSettings';
import {DeviceManagementSubscriptionState} from './deviceManagementSubscriptionState';
import {DeviceManagementTroubleshootingEvent} from './deviceManagementTroubleshootingEvent';
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
import {serializeApplePushNotificationCertificate} from './serializeApplePushNotificationCertificate';
import {serializeAuditEvent} from './serializeAuditEvent';
import {serializeComplianceManagementPartner} from './serializeComplianceManagementPartner';
import {serializeDetectedApp} from './serializeDetectedApp';
import {serializeDeviceAndAppManagementRoleAssignment} from './serializeDeviceAndAppManagementRoleAssignment';
import {serializeDeviceCategory} from './serializeDeviceCategory';
import {serializeDeviceCompliancePolicy} from './serializeDeviceCompliancePolicy';
import {serializeDeviceCompliancePolicyDeviceStateSummary} from './serializeDeviceCompliancePolicyDeviceStateSummary';
import {serializeDeviceCompliancePolicySettingStateSummary} from './serializeDeviceCompliancePolicySettingStateSummary';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {serializeDeviceConfigurationDeviceStateSummary} from './serializeDeviceConfigurationDeviceStateSummary';
import {serializeDeviceEnrollmentConfiguration} from './serializeDeviceEnrollmentConfiguration';
import {serializeDeviceManagementExchangeConnector} from './serializeDeviceManagementExchangeConnector';
import {serializeDeviceManagementPartner} from './serializeDeviceManagementPartner';
import {serializeDeviceManagementReports} from './serializeDeviceManagementReports';
import {serializeDeviceManagementSettings} from './serializeDeviceManagementSettings';
import {serializeDeviceManagementTroubleshootingEvent} from './serializeDeviceManagementTroubleshootingEvent';
import {serializeImportedWindowsAutopilotDeviceIdentity} from './serializeImportedWindowsAutopilotDeviceIdentity';
import {serializeIntuneBrand} from './serializeIntuneBrand';
import {serializeIosUpdateDeviceStatus} from './serializeIosUpdateDeviceStatus';
import {serializeManagedDevice} from './serializeManagedDevice';
import {serializeManagedDeviceOverview} from './serializeManagedDeviceOverview';
import {serializeMobileThreatDefenseConnector} from './serializeMobileThreatDefenseConnector';
import {serializeNotificationMessageTemplate} from './serializeNotificationMessageTemplate';
import {serializeOnPremisesConditionalAccessSettings} from './serializeOnPremisesConditionalAccessSettings';
import {serializeRemoteAssistancePartner} from './serializeRemoteAssistancePartner';
import {serializeResourceOperation} from './serializeResourceOperation';
import {serializeRoleDefinition} from './serializeRoleDefinition';
import {serializeSoftwareUpdateStatusSummary} from './serializeSoftwareUpdateStatusSummary';
import {serializeTelecomExpenseManagementPartner} from './serializeTelecomExpenseManagementPartner';
import {serializeTermsAndConditions} from './serializeTermsAndConditions';
import {serializeWindowsAutopilotDeviceIdentity} from './serializeWindowsAutopilotDeviceIdentity';
import {serializeWindowsInformationProtectionAppLearningSummary} from './serializeWindowsInformationProtectionAppLearningSummary';
import {serializeWindowsInformationProtectionNetworkLearningSummary} from './serializeWindowsInformationProtectionNetworkLearningSummary';
import {SoftwareUpdateStatusSummary} from './softwareUpdateStatusSummary';
import {TelecomExpenseManagementPartner} from './telecomExpenseManagementPartner';
import {TermsAndConditions} from './termsAndConditions';
import {WindowsAutopilotDeviceIdentity} from './windowsAutopilotDeviceIdentity';
import {WindowsInformationProtectionAppLearningSummary} from './windowsInformationProtectionAppLearningSummary';
import {WindowsInformationProtectionNetworkLearningSummary} from './windowsInformationProtectionNetworkLearningSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagement(deviceManagement: DeviceManagement | undefined = {} as DeviceManagement) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceManagement),
        "applePushNotificationCertificate": n => { deviceManagement.applePushNotificationCertificate = n.getObjectValue<ApplePushNotificationCertificate>(createApplePushNotificationCertificateFromDiscriminatorValue); },
        "auditEvents": n => { deviceManagement.auditEvents = n.getCollectionOfObjectValues<AuditEvent>(createAuditEventFromDiscriminatorValue); },
        "complianceManagementPartners": n => { deviceManagement.complianceManagementPartners = n.getCollectionOfObjectValues<ComplianceManagementPartner>(createComplianceManagementPartnerFromDiscriminatorValue); },
        "conditionalAccessSettings": n => { deviceManagement.conditionalAccessSettings = n.getObjectValue<OnPremisesConditionalAccessSettings>(createOnPremisesConditionalAccessSettingsFromDiscriminatorValue); },
        "detectedApps": n => { deviceManagement.detectedApps = n.getCollectionOfObjectValues<DetectedApp>(createDetectedAppFromDiscriminatorValue); },
        "deviceCategories": n => { deviceManagement.deviceCategories = n.getCollectionOfObjectValues<DeviceCategory>(createDeviceCategoryFromDiscriminatorValue); },
        "deviceCompliancePolicies": n => { deviceManagement.deviceCompliancePolicies = n.getCollectionOfObjectValues<DeviceCompliancePolicy>(createDeviceCompliancePolicyFromDiscriminatorValue); },
        "deviceCompliancePolicyDeviceStateSummary": n => { deviceManagement.deviceCompliancePolicyDeviceStateSummary = n.getObjectValue<DeviceCompliancePolicyDeviceStateSummary>(createDeviceCompliancePolicyDeviceStateSummaryFromDiscriminatorValue); },
        "deviceCompliancePolicySettingStateSummaries": n => { deviceManagement.deviceCompliancePolicySettingStateSummaries = n.getCollectionOfObjectValues<DeviceCompliancePolicySettingStateSummary>(createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue); },
        "deviceConfigurationDeviceStateSummaries": n => { deviceManagement.deviceConfigurationDeviceStateSummaries = n.getObjectValue<DeviceConfigurationDeviceStateSummary>(createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue); },
        "deviceConfigurations": n => { deviceManagement.deviceConfigurations = n.getCollectionOfObjectValues<DeviceConfiguration>(createDeviceConfigurationFromDiscriminatorValue); },
        "deviceEnrollmentConfigurations": n => { deviceManagement.deviceEnrollmentConfigurations = n.getCollectionOfObjectValues<DeviceEnrollmentConfiguration>(createDeviceEnrollmentConfigurationFromDiscriminatorValue); },
        "deviceManagementPartners": n => { deviceManagement.deviceManagementPartners = n.getCollectionOfObjectValues<DeviceManagementPartner>(createDeviceManagementPartnerFromDiscriminatorValue); },
        "exchangeConnectors": n => { deviceManagement.exchangeConnectors = n.getCollectionOfObjectValues<DeviceManagementExchangeConnector>(createDeviceManagementExchangeConnectorFromDiscriminatorValue); },
        "importedWindowsAutopilotDeviceIdentities": n => { deviceManagement.importedWindowsAutopilotDeviceIdentities = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>(createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
        "intuneAccountId": n => { deviceManagement.intuneAccountId = n.getStringValue(); },
        "intuneBrand": n => { deviceManagement.intuneBrand = n.getObjectValue<IntuneBrand>(createIntuneBrandFromDiscriminatorValue); },
        "iosUpdateStatuses": n => { deviceManagement.iosUpdateStatuses = n.getCollectionOfObjectValues<IosUpdateDeviceStatus>(createIosUpdateDeviceStatusFromDiscriminatorValue); },
        "managedDeviceOverview": n => { deviceManagement.managedDeviceOverview = n.getObjectValue<ManagedDeviceOverview>(createManagedDeviceOverviewFromDiscriminatorValue); },
        "managedDevices": n => { deviceManagement.managedDevices = n.getCollectionOfObjectValues<ManagedDevice>(createManagedDeviceFromDiscriminatorValue); },
        "mobileThreatDefenseConnectors": n => { deviceManagement.mobileThreatDefenseConnectors = n.getCollectionOfObjectValues<MobileThreatDefenseConnector>(createMobileThreatDefenseConnectorFromDiscriminatorValue); },
        "notificationMessageTemplates": n => { deviceManagement.notificationMessageTemplates = n.getCollectionOfObjectValues<NotificationMessageTemplate>(createNotificationMessageTemplateFromDiscriminatorValue); },
        "remoteAssistancePartners": n => { deviceManagement.remoteAssistancePartners = n.getCollectionOfObjectValues<RemoteAssistancePartner>(createRemoteAssistancePartnerFromDiscriminatorValue); },
        "reports": n => { deviceManagement.reports = n.getObjectValue<DeviceManagementReports>(createDeviceManagementReportsFromDiscriminatorValue); },
        "resourceOperations": n => { deviceManagement.resourceOperations = n.getCollectionOfObjectValues<ResourceOperation>(createResourceOperationFromDiscriminatorValue); },
        "roleAssignments": n => { deviceManagement.roleAssignments = n.getCollectionOfObjectValues<DeviceAndAppManagementRoleAssignment>(createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue); },
        "roleDefinitions": n => { deviceManagement.roleDefinitions = n.getCollectionOfObjectValues<RoleDefinition>(createRoleDefinitionFromDiscriminatorValue); },
        "settings": n => { deviceManagement.settings = n.getObjectValue<DeviceManagementSettings>(createDeviceManagementSettingsFromDiscriminatorValue); },
        "softwareUpdateStatusSummary": n => { deviceManagement.softwareUpdateStatusSummary = n.getObjectValue<SoftwareUpdateStatusSummary>(createSoftwareUpdateStatusSummaryFromDiscriminatorValue); },
        "subscriptionState": n => { deviceManagement.subscriptionState = n.getEnumValue<DeviceManagementSubscriptionState>(DeviceManagementSubscriptionState); },
        "telecomExpenseManagementPartners": n => { deviceManagement.telecomExpenseManagementPartners = n.getCollectionOfObjectValues<TelecomExpenseManagementPartner>(createTelecomExpenseManagementPartnerFromDiscriminatorValue); },
        "termsAndConditions": n => { deviceManagement.termsAndConditions = n.getCollectionOfObjectValues<TermsAndConditions>(createTermsAndConditionsFromDiscriminatorValue); },
        "troubleshootingEvents": n => { deviceManagement.troubleshootingEvents = n.getCollectionOfObjectValues<DeviceManagementTroubleshootingEvent>(createDeviceManagementTroubleshootingEventFromDiscriminatorValue); },
        "windowsAutopilotDeviceIdentities": n => { deviceManagement.windowsAutopilotDeviceIdentities = n.getCollectionOfObjectValues<WindowsAutopilotDeviceIdentity>(createWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
        "windowsInformationProtectionAppLearningSummaries": n => { deviceManagement.windowsInformationProtectionAppLearningSummaries = n.getCollectionOfObjectValues<WindowsInformationProtectionAppLearningSummary>(createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue); },
        "windowsInformationProtectionNetworkLearningSummaries": n => { deviceManagement.windowsInformationProtectionNetworkLearningSummaries = n.getCollectionOfObjectValues<WindowsInformationProtectionNetworkLearningSummary>(createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue); },
    }
}
