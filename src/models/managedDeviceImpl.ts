import {ComplianceState} from './complianceState';
import {ConfigurationManagerClientEnabledFeatures} from './configurationManagerClientEnabledFeatures';
import {createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue} from './createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue';
import {createDeviceActionResultFromDiscriminatorValue} from './createDeviceActionResultFromDiscriminatorValue';
import {createDeviceCategoryFromDiscriminatorValue} from './createDeviceCategoryFromDiscriminatorValue';
import {createDeviceCompliancePolicyStateFromDiscriminatorValue} from './createDeviceCompliancePolicyStateFromDiscriminatorValue';
import {createDeviceConfigurationStateFromDiscriminatorValue} from './createDeviceConfigurationStateFromDiscriminatorValue';
import {createDeviceHealthAttestationStateFromDiscriminatorValue} from './createDeviceHealthAttestationStateFromDiscriminatorValue';
import {DeviceActionResult} from './deviceActionResult';
import {DeviceCategory} from './deviceCategory';
import {DeviceCompliancePolicyState} from './deviceCompliancePolicyState';
import {DeviceConfigurationState} from './deviceConfigurationState';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {DeviceHealthAttestationState} from './deviceHealthAttestationState';
import {DeviceManagementExchangeAccessState} from './deviceManagementExchangeAccessState';
import {DeviceManagementExchangeAccessStateReason} from './deviceManagementExchangeAccessStateReason';
import {DeviceRegistrationState} from './deviceRegistrationState';
import {ConfigurationManagerClientEnabledFeaturesImpl, DeviceActionResultImpl, DeviceCategoryImpl, DeviceCompliancePolicyStateImpl, DeviceConfigurationStateImpl, DeviceHealthAttestationStateImpl, EntityImpl} from './index';
import {ManagedDevice} from './managedDevice';
import {ManagedDeviceOwnerType} from './managedDeviceOwnerType';
import {ManagedDevicePartnerReportedHealthState} from './managedDevicePartnerReportedHealthState';
import {ManagementAgentType} from './managementAgentType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Devices that are managed or pre-enrolled through Intune */
export class ManagedDeviceImpl extends EntityImpl implements ManagedDevice, Parsable {
    /** Code that allows the Activation Lock on a device to be bypassed. This property is read-only. */
    public activationLockBypassCode?: string | undefined;
    /** Android security patch level. This property is read-only. */
    public androidSecurityPatchLevel?: string | undefined;
    /** The unique identifier for the Azure Active Directory device. Read only. This property is read-only. */
    public azureADDeviceId?: string | undefined;
    /** Whether the device is Azure Active Directory registered. This property is read-only. */
    public azureADRegistered?: boolean | undefined;
    /** The DateTime when device compliance grace period expires. This property is read-only. */
    public complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** Compliance state of the device. This property is read-only. Possible values are: unknown, compliant, noncompliant, conflict, error, inGracePeriod, configManager. */
    public complianceState?: ComplianceState | undefined;
    /** ConfigrMgr client enabled features. This property is read-only. */
    public configurationManagerClientEnabledFeatures?: ConfigurationManagerClientEnabledFeatures | undefined;
    /** List of ComplexType deviceActionResult objects. This property is read-only. */
    public deviceActionResults?: DeviceActionResult[] | undefined;
    /** Device category */
    public deviceCategory?: DeviceCategory | undefined;
    /** Device category display name. This property is read-only. */
    public deviceCategoryDisplayName?: string | undefined;
    /** Device compliance policy states for this device. */
    public deviceCompliancePolicyStates?: DeviceCompliancePolicyState[] | undefined;
    /** Device configuration states for this device. */
    public deviceConfigurationStates?: DeviceConfigurationState[] | undefined;
    /** Enrollment type of the device. This property is read-only. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement, windowsAzureADJoinUsingDeviceAuth, appleUserEnrollment, appleUserEnrollmentWithServiceAccount, azureAdJoinUsingAzureVmExtension, androidEnterpriseDedicatedDevice, androidEnterpriseFullyManaged, androidEnterpriseCorporateWorkProfile. */
    public deviceEnrollmentType?: DeviceEnrollmentType | undefined;
    /** The device health attestation state. This property is read-only. */
    public deviceHealthAttestationState?: DeviceHealthAttestationState | undefined;
    /** Name of the device. This property is read-only. */
    public deviceName?: string | undefined;
    /** Device registration state. This property is read-only. Possible values are: notRegistered, registered, revoked, keyConflict, approvalPending, certificateReset, notRegisteredPendingEnrollment, unknown. */
    public deviceRegistrationState?: DeviceRegistrationState | undefined;
    /** Whether the device is Exchange ActiveSync activated. This property is read-only. */
    public easActivated?: boolean | undefined;
    /** Exchange ActivationSync activation time of the device. This property is read-only. */
    public easActivationDateTime?: Date | undefined;
    /** Exchange ActiveSync Id of the device. This property is read-only. */
    public easDeviceId?: string | undefined;
    /** Email(s) for the user associated with the device. This property is read-only. */
    public emailAddress?: string | undefined;
    /** Enrollment time of the device. This property is read-only. */
    public enrolledDateTime?: Date | undefined;
    /** Ethernet MAC. This property is read-only. */
    public ethernetMacAddress?: string | undefined;
    /** The Access State of the device in Exchange. This property is read-only. Possible values are: none, unknown, allowed, blocked, quarantined. */
    public exchangeAccessState?: DeviceManagementExchangeAccessState | undefined;
    /** The reason for the device's access state in Exchange. This property is read-only. Possible values are: none, unknown, exchangeGlobalRule, exchangeIndividualRule, exchangeDeviceRule, exchangeUpgrade, exchangeMailboxPolicy, other, compliant, notCompliant, notEnrolled, unknownLocation, mfaRequired, azureADBlockDueToAccessPolicy, compromisedPassword, deviceNotKnownWithManagedApp. */
    public exchangeAccessStateReason?: DeviceManagementExchangeAccessStateReason | undefined;
    /** Last time the device contacted Exchange. This property is read-only. */
    public exchangeLastSuccessfulSyncDateTime?: Date | undefined;
    /** Free Storage in Bytes. This property is read-only. */
    public freeStorageSpaceInBytes?: number | undefined;
    /** Integrated Circuit Card Identifier, it is A SIM card's unique identification number. This property is read-only. */
    public iccid?: string | undefined;
    /** IMEI. This property is read-only. */
    public imei?: string | undefined;
    /** Device encryption status. This property is read-only. */
    public isEncrypted?: boolean | undefined;
    /** Device supervised status. This property is read-only. */
    public isSupervised?: boolean | undefined;
    /** whether the device is jail broken or rooted. This property is read-only. */
    public jailBroken?: string | undefined;
    /** The date and time that the device last completed a successful sync with Intune. This property is read-only. */
    public lastSyncDateTime?: Date | undefined;
    /** Automatically generated name to identify a device. Can be overwritten to a user friendly name. */
    public managedDeviceName?: string | undefined;
    /** Ownership of the device. Can be 'company' or 'personal'. Possible values are: unknown, company, personal. */
    public managedDeviceOwnerType?: ManagedDeviceOwnerType | undefined;
    /** Management channel of the device. Intune, EAS, etc. This property is read-only. Possible values are: eas, mdm, easMdm, intuneClient, easIntuneClient, configurationManagerClient, configurationManagerClientMdm, configurationManagerClientMdmEas, unknown, jamf, googleCloudDevicePolicyController, microsoft365ManagedMdm, msSense, intuneAosp. */
    public managementAgent?: ManagementAgentType | undefined;
    /** Manufacturer of the device. This property is read-only. */
    public manufacturer?: string | undefined;
    /** MEID. This property is read-only. */
    public meid?: string | undefined;
    /** Model of the device. This property is read-only. */
    public model?: string | undefined;
    /** Notes on the device created by IT Admin */
    public notes?: string | undefined;
    /** Operating system of the device. Windows, iOS, etc. This property is read-only. */
    public operatingSystem?: string | undefined;
    /** Operating system version of the device. This property is read-only. */
    public osVersion?: string | undefined;
    /** Indicates the threat state of a device when a Mobile Threat Defense partner is in use by the account and device. Read Only. This property is read-only. Possible values are: unknown, activated, deactivated, secured, lowSeverity, mediumSeverity, highSeverity, unresponsive, compromised, misconfigured. */
    public partnerReportedThreatState?: ManagedDevicePartnerReportedHealthState | undefined;
    /** Phone number of the device. This property is read-only. */
    public phoneNumber?: string | undefined;
    /** Total Memory in Bytes. This property is read-only. */
    public physicalMemoryInBytes?: number | undefined;
    /** An error string that identifies issues when creating Remote Assistance session objects. This property is read-only. */
    public remoteAssistanceSessionErrorDetails?: string | undefined;
    /** Url that allows a Remote Assistance session to be established with the device. This property is read-only. */
    public remoteAssistanceSessionUrl?: string | undefined;
    /** SerialNumber. This property is read-only. */
    public serialNumber?: string | undefined;
    /** Subscriber Carrier. This property is read-only. */
    public subscriberCarrier?: string | undefined;
    /** Total Storage in Bytes. This property is read-only. */
    public totalStorageSpaceInBytes?: number | undefined;
    /** Unique Device Identifier for iOS and macOS devices. This property is read-only. */
    public udid?: string | undefined;
    /** User display name. This property is read-only. */
    public userDisplayName?: string | undefined;
    /** Unique Identifier for the user associated with the device. This property is read-only. */
    public userId?: string | undefined;
    /** Device user principal name. This property is read-only. */
    public userPrincipalName?: string | undefined;
    /** Wi-Fi MAC. This property is read-only. */
    public wiFiMacAddress?: string | undefined;
    /**
     * Instantiates a new managedDevice and sets the default values.
     * @param managedDeviceParameterValue 
     */
    public constructor(managedDeviceParameterValue?: ManagedDevice | undefined) {
        super();
        this.activationLockBypassCode = managedDeviceParameterValue?.activationLockBypassCode ;
        this.androidSecurityPatchLevel = managedDeviceParameterValue?.androidSecurityPatchLevel ;
        this.azureADDeviceId = managedDeviceParameterValue?.azureADDeviceId ;
        this.azureADRegistered = managedDeviceParameterValue?.azureADRegistered ;
        this.complianceGracePeriodExpirationDateTime = managedDeviceParameterValue?.complianceGracePeriodExpirationDateTime ;
        this.complianceState = managedDeviceParameterValue?.complianceState ;
        this.configurationManagerClientEnabledFeatures = managedDeviceParameterValue?.configurationManagerClientEnabledFeatures ;
        this.deviceActionResults = managedDeviceParameterValue?.deviceActionResults ;
        this.deviceCategory = managedDeviceParameterValue?.deviceCategory ;
        this.deviceCategoryDisplayName = managedDeviceParameterValue?.deviceCategoryDisplayName ;
        this.deviceCompliancePolicyStates = managedDeviceParameterValue?.deviceCompliancePolicyStates ;
        this.deviceConfigurationStates = managedDeviceParameterValue?.deviceConfigurationStates ;
        this.deviceEnrollmentType = managedDeviceParameterValue?.deviceEnrollmentType ;
        this.deviceHealthAttestationState = managedDeviceParameterValue?.deviceHealthAttestationState ;
        this.deviceName = managedDeviceParameterValue?.deviceName ;
        this.deviceRegistrationState = managedDeviceParameterValue?.deviceRegistrationState ;
        this.easActivated = managedDeviceParameterValue?.easActivated ;
        this.easActivationDateTime = managedDeviceParameterValue?.easActivationDateTime ;
        this.easDeviceId = managedDeviceParameterValue?.easDeviceId ;
        this.emailAddress = managedDeviceParameterValue?.emailAddress ;
        this.enrolledDateTime = managedDeviceParameterValue?.enrolledDateTime ;
        this.ethernetMacAddress = managedDeviceParameterValue?.ethernetMacAddress ;
        this.exchangeAccessState = managedDeviceParameterValue?.exchangeAccessState ;
        this.exchangeAccessStateReason = managedDeviceParameterValue?.exchangeAccessStateReason ;
        this.exchangeLastSuccessfulSyncDateTime = managedDeviceParameterValue?.exchangeLastSuccessfulSyncDateTime ;
        this.freeStorageSpaceInBytes = managedDeviceParameterValue?.freeStorageSpaceInBytes ;
        this.iccid = managedDeviceParameterValue?.iccid ;
        this.imei = managedDeviceParameterValue?.imei ;
        this.isEncrypted = managedDeviceParameterValue?.isEncrypted ;
        this.isSupervised = managedDeviceParameterValue?.isSupervised ;
        this.jailBroken = managedDeviceParameterValue?.jailBroken ;
        this.lastSyncDateTime = managedDeviceParameterValue?.lastSyncDateTime ;
        this.managedDeviceName = managedDeviceParameterValue?.managedDeviceName ;
        this.managedDeviceOwnerType = managedDeviceParameterValue?.managedDeviceOwnerType ;
        this.managementAgent = managedDeviceParameterValue?.managementAgent ;
        this.manufacturer = managedDeviceParameterValue?.manufacturer ;
        this.meid = managedDeviceParameterValue?.meid ;
        this.model = managedDeviceParameterValue?.model ;
        this.notes = managedDeviceParameterValue?.notes ;
        this.operatingSystem = managedDeviceParameterValue?.operatingSystem ;
        this.osVersion = managedDeviceParameterValue?.osVersion ;
        this.partnerReportedThreatState = managedDeviceParameterValue?.partnerReportedThreatState ;
        this.phoneNumber = managedDeviceParameterValue?.phoneNumber ;
        this.physicalMemoryInBytes = managedDeviceParameterValue?.physicalMemoryInBytes ;
        this.remoteAssistanceSessionErrorDetails = managedDeviceParameterValue?.remoteAssistanceSessionErrorDetails ;
        this.remoteAssistanceSessionUrl = managedDeviceParameterValue?.remoteAssistanceSessionUrl ;
        this.serialNumber = managedDeviceParameterValue?.serialNumber ;
        this.subscriberCarrier = managedDeviceParameterValue?.subscriberCarrier ;
        this.totalStorageSpaceInBytes = managedDeviceParameterValue?.totalStorageSpaceInBytes ;
        this.udid = managedDeviceParameterValue?.udid ;
        this.userDisplayName = managedDeviceParameterValue?.userDisplayName ;
        this.userId = managedDeviceParameterValue?.userId ;
        this.userPrincipalName = managedDeviceParameterValue?.userPrincipalName ;
        this.wiFiMacAddress = managedDeviceParameterValue?.wiFiMacAddress ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activationLockBypassCode": n => { this.activationLockBypassCode = n.getStringValue(); },
            "androidSecurityPatchLevel": n => { this.androidSecurityPatchLevel = n.getStringValue(); },
            "azureADDeviceId": n => { this.azureADDeviceId = n.getStringValue(); },
            "azureADRegistered": n => { this.azureADRegistered = n.getBooleanValue(); },
            "complianceGracePeriodExpirationDateTime": n => { this.complianceGracePeriodExpirationDateTime = n.getDateValue(); },
            "complianceState": n => { this.complianceState = n.getEnumValue<ComplianceState>(ComplianceState); },
            "configurationManagerClientEnabledFeatures": n => { this.configurationManagerClientEnabledFeatures = n.getObjectValue<ConfigurationManagerClientEnabledFeaturesImpl>(createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue); },
            "deviceActionResults": n => { this.deviceActionResults = n.getCollectionOfObjectValues<DeviceActionResultImpl>(createDeviceActionResultFromDiscriminatorValue); },
            "deviceCategory": n => { this.deviceCategory = n.getObjectValue<DeviceCategoryImpl>(createDeviceCategoryFromDiscriminatorValue); },
            "deviceCategoryDisplayName": n => { this.deviceCategoryDisplayName = n.getStringValue(); },
            "deviceCompliancePolicyStates": n => { this.deviceCompliancePolicyStates = n.getCollectionOfObjectValues<DeviceCompliancePolicyStateImpl>(createDeviceCompliancePolicyStateFromDiscriminatorValue); },
            "deviceConfigurationStates": n => { this.deviceConfigurationStates = n.getCollectionOfObjectValues<DeviceConfigurationStateImpl>(createDeviceConfigurationStateFromDiscriminatorValue); },
            "deviceEnrollmentType": n => { this.deviceEnrollmentType = n.getEnumValue<DeviceEnrollmentType>(DeviceEnrollmentType); },
            "deviceHealthAttestationState": n => { this.deviceHealthAttestationState = n.getObjectValue<DeviceHealthAttestationStateImpl>(createDeviceHealthAttestationStateFromDiscriminatorValue); },
            "deviceName": n => { this.deviceName = n.getStringValue(); },
            "deviceRegistrationState": n => { this.deviceRegistrationState = n.getEnumValue<DeviceRegistrationState>(DeviceRegistrationState); },
            "easActivated": n => { this.easActivated = n.getBooleanValue(); },
            "easActivationDateTime": n => { this.easActivationDateTime = n.getDateValue(); },
            "easDeviceId": n => { this.easDeviceId = n.getStringValue(); },
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "enrolledDateTime": n => { this.enrolledDateTime = n.getDateValue(); },
            "ethernetMacAddress": n => { this.ethernetMacAddress = n.getStringValue(); },
            "exchangeAccessState": n => { this.exchangeAccessState = n.getEnumValue<DeviceManagementExchangeAccessState>(DeviceManagementExchangeAccessState); },
            "exchangeAccessStateReason": n => { this.exchangeAccessStateReason = n.getEnumValue<DeviceManagementExchangeAccessStateReason>(DeviceManagementExchangeAccessStateReason); },
            "exchangeLastSuccessfulSyncDateTime": n => { this.exchangeLastSuccessfulSyncDateTime = n.getDateValue(); },
            "freeStorageSpaceInBytes": n => { this.freeStorageSpaceInBytes = n.getNumberValue(); },
            "iccid": n => { this.iccid = n.getStringValue(); },
            "imei": n => { this.imei = n.getStringValue(); },
            "isEncrypted": n => { this.isEncrypted = n.getBooleanValue(); },
            "isSupervised": n => { this.isSupervised = n.getBooleanValue(); },
            "jailBroken": n => { this.jailBroken = n.getStringValue(); },
            "lastSyncDateTime": n => { this.lastSyncDateTime = n.getDateValue(); },
            "managedDeviceName": n => { this.managedDeviceName = n.getStringValue(); },
            "managedDeviceOwnerType": n => { this.managedDeviceOwnerType = n.getEnumValue<ManagedDeviceOwnerType>(ManagedDeviceOwnerType); },
            "managementAgent": n => { this.managementAgent = n.getEnumValue<ManagementAgentType>(ManagementAgentType); },
            "manufacturer": n => { this.manufacturer = n.getStringValue(); },
            "meid": n => { this.meid = n.getStringValue(); },
            "model": n => { this.model = n.getStringValue(); },
            "notes": n => { this.notes = n.getStringValue(); },
            "operatingSystem": n => { this.operatingSystem = n.getStringValue(); },
            "osVersion": n => { this.osVersion = n.getStringValue(); },
            "partnerReportedThreatState": n => { this.partnerReportedThreatState = n.getEnumValue<ManagedDevicePartnerReportedHealthState>(ManagedDevicePartnerReportedHealthState); },
            "phoneNumber": n => { this.phoneNumber = n.getStringValue(); },
            "physicalMemoryInBytes": n => { this.physicalMemoryInBytes = n.getNumberValue(); },
            "remoteAssistanceSessionErrorDetails": n => { this.remoteAssistanceSessionErrorDetails = n.getStringValue(); },
            "remoteAssistanceSessionUrl": n => { this.remoteAssistanceSessionUrl = n.getStringValue(); },
            "serialNumber": n => { this.serialNumber = n.getStringValue(); },
            "subscriberCarrier": n => { this.subscriberCarrier = n.getStringValue(); },
            "totalStorageSpaceInBytes": n => { this.totalStorageSpaceInBytes = n.getNumberValue(); },
            "udid": n => { this.udid = n.getStringValue(); },
            "userDisplayName": n => { this.userDisplayName = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
            "wiFiMacAddress": n => { this.wiFiMacAddress = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activationLockBypassCode){
        writer.writeStringValue("activationLockBypassCode", this.activationLockBypassCode);
        }
        if(this.androidSecurityPatchLevel){
        writer.writeStringValue("androidSecurityPatchLevel", this.androidSecurityPatchLevel);
        }
        if(this.azureADDeviceId){
        writer.writeStringValue("azureADDeviceId", this.azureADDeviceId);
        }
        if(this.azureADRegistered){
        writer.writeBooleanValue("azureADRegistered", this.azureADRegistered);
        }
        if(this.complianceGracePeriodExpirationDateTime){
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", this.complianceGracePeriodExpirationDateTime);
        }
        if(this.complianceState){
        writer.writeEnumValue<ComplianceState>("complianceState", this.complianceState);
        }
        if(this.configurationManagerClientEnabledFeatures){
        writer.writeObjectValue<ConfigurationManagerClientEnabledFeaturesImpl>("configurationManagerClientEnabledFeatures", new ConfigurationManagerClientEnabledFeaturesImpl(this.configurationManagerClientEnabledFeatures));
        }
        if(this.deviceActionResults && this.deviceActionResults.length != 0){        const deviceActionResultsArrValue: DeviceActionResultImpl[] = []; this.deviceActionResults?.forEach(element => {deviceActionResultsArrValue.push(new DeviceActionResultImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceActionResultImpl>("deviceActionResults", deviceActionResultsArrValue);
        }
        if(this.deviceCategory){
        writer.writeObjectValue<DeviceCategoryImpl>("deviceCategory", new DeviceCategoryImpl(this.deviceCategory));
        }
        if(this.deviceCategoryDisplayName){
        writer.writeStringValue("deviceCategoryDisplayName", this.deviceCategoryDisplayName);
        }
        if(this.deviceCompliancePolicyStates && this.deviceCompliancePolicyStates.length != 0){        const deviceCompliancePolicyStatesArrValue: DeviceCompliancePolicyStateImpl[] = []; this.deviceCompliancePolicyStates?.forEach(element => {deviceCompliancePolicyStatesArrValue.push(new DeviceCompliancePolicyStateImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyStateImpl>("deviceCompliancePolicyStates", deviceCompliancePolicyStatesArrValue);
        }
        if(this.deviceConfigurationStates && this.deviceConfigurationStates.length != 0){        const deviceConfigurationStatesArrValue: DeviceConfigurationStateImpl[] = []; this.deviceConfigurationStates?.forEach(element => {deviceConfigurationStatesArrValue.push(new DeviceConfigurationStateImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceConfigurationStateImpl>("deviceConfigurationStates", deviceConfigurationStatesArrValue);
        }
        if(this.deviceEnrollmentType){
        writer.writeEnumValue<DeviceEnrollmentType>("deviceEnrollmentType", this.deviceEnrollmentType);
        }
        if(this.deviceHealthAttestationState){
        writer.writeObjectValue<DeviceHealthAttestationStateImpl>("deviceHealthAttestationState", new DeviceHealthAttestationStateImpl(this.deviceHealthAttestationState));
        }
        if(this.deviceName){
        writer.writeStringValue("deviceName", this.deviceName);
        }
        if(this.deviceRegistrationState){
        writer.writeEnumValue<DeviceRegistrationState>("deviceRegistrationState", this.deviceRegistrationState);
        }
        if(this.easActivated){
        writer.writeBooleanValue("easActivated", this.easActivated);
        }
        if(this.easActivationDateTime){
        writer.writeDateValue("easActivationDateTime", this.easActivationDateTime);
        }
        if(this.easDeviceId){
        writer.writeStringValue("easDeviceId", this.easDeviceId);
        }
        if(this.emailAddress){
        writer.writeStringValue("emailAddress", this.emailAddress);
        }
        if(this.enrolledDateTime){
        writer.writeDateValue("enrolledDateTime", this.enrolledDateTime);
        }
        if(this.ethernetMacAddress){
        writer.writeStringValue("ethernetMacAddress", this.ethernetMacAddress);
        }
        if(this.exchangeAccessState){
        writer.writeEnumValue<DeviceManagementExchangeAccessState>("exchangeAccessState", this.exchangeAccessState);
        }
        if(this.exchangeAccessStateReason){
        writer.writeEnumValue<DeviceManagementExchangeAccessStateReason>("exchangeAccessStateReason", this.exchangeAccessStateReason);
        }
        if(this.exchangeLastSuccessfulSyncDateTime){
        writer.writeDateValue("exchangeLastSuccessfulSyncDateTime", this.exchangeLastSuccessfulSyncDateTime);
        }
        if(this.freeStorageSpaceInBytes){
        writer.writeNumberValue("freeStorageSpaceInBytes", this.freeStorageSpaceInBytes);
        }
        if(this.iccid){
        writer.writeStringValue("iccid", this.iccid);
        }
        if(this.imei){
        writer.writeStringValue("imei", this.imei);
        }
        if(this.isEncrypted){
        writer.writeBooleanValue("isEncrypted", this.isEncrypted);
        }
        if(this.isSupervised){
        writer.writeBooleanValue("isSupervised", this.isSupervised);
        }
        if(this.jailBroken){
        writer.writeStringValue("jailBroken", this.jailBroken);
        }
        if(this.lastSyncDateTime){
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        }
        if(this.managedDeviceName){
        writer.writeStringValue("managedDeviceName", this.managedDeviceName);
        }
        if(this.managedDeviceOwnerType){
        writer.writeEnumValue<ManagedDeviceOwnerType>("managedDeviceOwnerType", this.managedDeviceOwnerType);
        }
        if(this.managementAgent){
        writer.writeEnumValue<ManagementAgentType>("managementAgent", this.managementAgent);
        }
        if(this.manufacturer){
        writer.writeStringValue("manufacturer", this.manufacturer);
        }
        if(this.meid){
        writer.writeStringValue("meid", this.meid);
        }
        if(this.model){
        writer.writeStringValue("model", this.model);
        }
        if(this.notes){
        writer.writeStringValue("notes", this.notes);
        }
        if(this.operatingSystem){
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        }
        if(this.osVersion){
        writer.writeStringValue("osVersion", this.osVersion);
        }
        if(this.partnerReportedThreatState){
        writer.writeEnumValue<ManagedDevicePartnerReportedHealthState>("partnerReportedThreatState", this.partnerReportedThreatState);
        }
        if(this.phoneNumber){
        writer.writeStringValue("phoneNumber", this.phoneNumber);
        }
        if(this.physicalMemoryInBytes){
        writer.writeNumberValue("physicalMemoryInBytes", this.physicalMemoryInBytes);
        }
        if(this.remoteAssistanceSessionErrorDetails){
        writer.writeStringValue("remoteAssistanceSessionErrorDetails", this.remoteAssistanceSessionErrorDetails);
        }
        if(this.remoteAssistanceSessionUrl){
        writer.writeStringValue("remoteAssistanceSessionUrl", this.remoteAssistanceSessionUrl);
        }
        if(this.serialNumber){
        writer.writeStringValue("serialNumber", this.serialNumber);
        }
        if(this.subscriberCarrier){
        writer.writeStringValue("subscriberCarrier", this.subscriberCarrier);
        }
        if(this.totalStorageSpaceInBytes){
        writer.writeNumberValue("totalStorageSpaceInBytes", this.totalStorageSpaceInBytes);
        }
        if(this.udid){
        writer.writeStringValue("udid", this.udid);
        }
        if(this.userDisplayName){
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        }
        if(this.userId){
        writer.writeStringValue("userId", this.userId);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        if(this.wiFiMacAddress){
        writer.writeStringValue("wiFiMacAddress", this.wiFiMacAddress);
        }
    };
}
