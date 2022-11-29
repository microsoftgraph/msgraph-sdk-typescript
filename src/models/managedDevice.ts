import {ComplianceState} from './complianceState';
import {createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue} from './createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue';
import {createDeviceActionResultFromDiscriminatorValue} from './createDeviceActionResultFromDiscriminatorValue';
import {createDeviceCategoryFromDiscriminatorValue} from './createDeviceCategoryFromDiscriminatorValue';
import {createDeviceCompliancePolicyStateFromDiscriminatorValue} from './createDeviceCompliancePolicyStateFromDiscriminatorValue';
import {createDeviceConfigurationStateFromDiscriminatorValue} from './createDeviceConfigurationStateFromDiscriminatorValue';
import {createDeviceHealthAttestationStateFromDiscriminatorValue} from './createDeviceHealthAttestationStateFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {DeviceManagementExchangeAccessState} from './deviceManagementExchangeAccessState';
import {DeviceManagementExchangeAccessStateReason} from './deviceManagementExchangeAccessStateReason';
import {DeviceRegistrationState} from './deviceRegistrationState';
import {ConfigurationManagerClientEnabledFeatures, DeviceActionResult, DeviceCategory, DeviceCompliancePolicyState, DeviceConfigurationState, DeviceHealthAttestationState, Entity, User} from './index';
import {ManagedDeviceOwnerType} from './managedDeviceOwnerType';
import {ManagedDevicePartnerReportedHealthState} from './managedDevicePartnerReportedHealthState';
import {ManagementAgentType} from './managementAgentType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Devices that are managed or pre-enrolled through Intune */
export class ManagedDevice extends Entity implements Parsable {
    /** Code that allows the Activation Lock on a device to be bypassed. This property is read-only. */
    private _activationLockBypassCode?: string | undefined;
    /** Android security patch level. This property is read-only. */
    private _androidSecurityPatchLevel?: string | undefined;
    /** The unique identifier for the Azure Active Directory device. Read only. This property is read-only. */
    private _azureADDeviceId?: string | undefined;
    /** Whether the device is Azure Active Directory registered. This property is read-only. */
    private _azureADRegistered?: boolean | undefined;
    /** The DateTime when device compliance grace period expires. This property is read-only. */
    private _complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** Compliance state. */
    private _complianceState?: ComplianceState | undefined;
    /** ConfigrMgr client enabled features. This property is read-only. */
    private _configurationManagerClientEnabledFeatures?: ConfigurationManagerClientEnabledFeatures | undefined;
    /** List of ComplexType deviceActionResult objects. This property is read-only. */
    private _deviceActionResults?: DeviceActionResult[] | undefined;
    /** Device category */
    private _deviceCategory?: DeviceCategory | undefined;
    /** Device category display name. This property is read-only. */
    private _deviceCategoryDisplayName?: string | undefined;
    /** Device compliance policy states for this device. */
    private _deviceCompliancePolicyStates?: DeviceCompliancePolicyState[] | undefined;
    /** Device configuration states for this device. */
    private _deviceConfigurationStates?: DeviceConfigurationState[] | undefined;
    /** Possible ways of adding a mobile device to management. */
    private _deviceEnrollmentType?: DeviceEnrollmentType | undefined;
    /** The device health attestation state. This property is read-only. */
    private _deviceHealthAttestationState?: DeviceHealthAttestationState | undefined;
    /** Name of the device. This property is read-only. */
    private _deviceName?: string | undefined;
    /** Device registration status. */
    private _deviceRegistrationState?: DeviceRegistrationState | undefined;
    /** Whether the device is Exchange ActiveSync activated. This property is read-only. */
    private _easActivated?: boolean | undefined;
    /** Exchange ActivationSync activation time of the device. This property is read-only. */
    private _easActivationDateTime?: Date | undefined;
    /** Exchange ActiveSync Id of the device. This property is read-only. */
    private _easDeviceId?: string | undefined;
    /** Email(s) for the user associated with the device. This property is read-only. */
    private _emailAddress?: string | undefined;
    /** Enrollment time of the device. This property is read-only. */
    private _enrolledDateTime?: Date | undefined;
    /** Ethernet MAC. This property is read-only. */
    private _ethernetMacAddress?: string | undefined;
    /** Device Exchange Access State. */
    private _exchangeAccessState?: DeviceManagementExchangeAccessState | undefined;
    /** Device Exchange Access State Reason. */
    private _exchangeAccessStateReason?: DeviceManagementExchangeAccessStateReason | undefined;
    /** Last time the device contacted Exchange. This property is read-only. */
    private _exchangeLastSuccessfulSyncDateTime?: Date | undefined;
    /** Free Storage in Bytes. Default value is 0. Read-only. This property is read-only. */
    private _freeStorageSpaceInBytes?: number | undefined;
    /** Integrated Circuit Card Identifier, it is A SIM card's unique identification number. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only. */
    private _iccid?: string | undefined;
    /** IMEI. This property is read-only. */
    private _imei?: string | undefined;
    /** Device encryption status. This property is read-only. */
    private _isEncrypted?: boolean | undefined;
    /** Device supervised status. This property is read-only. */
    private _isSupervised?: boolean | undefined;
    /** whether the device is jail broken or rooted. This property is read-only. */
    private _jailBroken?: string | undefined;
    /** The date and time that the device last completed a successful sync with Intune. This property is read-only. */
    private _lastSyncDateTime?: Date | undefined;
    /** Automatically generated name to identify a device. Can be overwritten to a user friendly name. */
    private _managedDeviceName?: string | undefined;
    /** Owner type of device. */
    private _managedDeviceOwnerType?: ManagedDeviceOwnerType | undefined;
    /** The managementAgent property */
    private _managementAgent?: ManagementAgentType | undefined;
    /** Reports device management certificate expiration date. This property is read-only. */
    private _managementCertificateExpirationDate?: Date | undefined;
    /** Manufacturer of the device. This property is read-only. */
    private _manufacturer?: string | undefined;
    /** MEID. This property is read-only. */
    private _meid?: string | undefined;
    /** Model of the device. This property is read-only. */
    private _model?: string | undefined;
    /** Notes on the device created by IT Admin. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select.  $Search is not supported. */
    private _notes?: string | undefined;
    /** Operating system of the device. Windows, iOS, etc. This property is read-only. */
    private _operatingSystem?: string | undefined;
    /** Operating system version of the device. This property is read-only. */
    private _osVersion?: string | undefined;
    /** Available health states for the Device Health API */
    private _partnerReportedThreatState?: ManagedDevicePartnerReportedHealthState | undefined;
    /** Phone number of the device. This property is read-only. */
    private _phoneNumber?: string | undefined;
    /** Total Memory in Bytes. Return default value 0 in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. Default value is 0. Read-only. This property is read-only. */
    private _physicalMemoryInBytes?: number | undefined;
    /** An error string that identifies issues when creating Remote Assistance session objects. This property is read-only. */
    private _remoteAssistanceSessionErrorDetails?: string | undefined;
    /** Url that allows a Remote Assistance session to be established with the device. This property is read-only. */
    private _remoteAssistanceSessionUrl?: string | undefined;
    /** Reports if the managed iOS device is user approval enrollment. This property is read-only. */
    private _requireUserEnrollmentApproval?: boolean | undefined;
    /** SerialNumber. This property is read-only. */
    private _serialNumber?: string | undefined;
    /** Subscriber Carrier. This property is read-only. */
    private _subscriberCarrier?: string | undefined;
    /** Total Storage in Bytes. This property is read-only. */
    private _totalStorageSpaceInBytes?: number | undefined;
    /** Unique Device Identifier for iOS and macOS devices. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only. */
    private _udid?: string | undefined;
    /** User display name. This property is read-only. */
    private _userDisplayName?: string | undefined;
    /** Unique Identifier for the user associated with the device. This property is read-only. */
    private _userId?: string | undefined;
    /** Device user principal name. This property is read-only. */
    private _userPrincipalName?: string | undefined;
    /** The primary users associated with the managed device. */
    private _users?: User[] | undefined;
    /** Wi-Fi MAC. This property is read-only. */
    private _wiFiMacAddress?: string | undefined;
    /**
     * Gets the activationLockBypassCode property value. Code that allows the Activation Lock on a device to be bypassed. This property is read-only.
     * @returns a string
     */
    public get activationLockBypassCode() {
        return this._activationLockBypassCode;
    };
    /**
     * Sets the activationLockBypassCode property value. Code that allows the Activation Lock on a device to be bypassed. This property is read-only.
     * @param value Value to set for the activationLockBypassCode property.
     */
    public set activationLockBypassCode(value: string | undefined) {
        this._activationLockBypassCode = value;
    };
    /**
     * Gets the androidSecurityPatchLevel property value. Android security patch level. This property is read-only.
     * @returns a string
     */
    public get androidSecurityPatchLevel() {
        return this._androidSecurityPatchLevel;
    };
    /**
     * Sets the androidSecurityPatchLevel property value. Android security patch level. This property is read-only.
     * @param value Value to set for the androidSecurityPatchLevel property.
     */
    public set androidSecurityPatchLevel(value: string | undefined) {
        this._androidSecurityPatchLevel = value;
    };
    /**
     * Gets the azureADDeviceId property value. The unique identifier for the Azure Active Directory device. Read only. This property is read-only.
     * @returns a string
     */
    public get azureADDeviceId() {
        return this._azureADDeviceId;
    };
    /**
     * Sets the azureADDeviceId property value. The unique identifier for the Azure Active Directory device. Read only. This property is read-only.
     * @param value Value to set for the azureADDeviceId property.
     */
    public set azureADDeviceId(value: string | undefined) {
        this._azureADDeviceId = value;
    };
    /**
     * Gets the azureADRegistered property value. Whether the device is Azure Active Directory registered. This property is read-only.
     * @returns a boolean
     */
    public get azureADRegistered() {
        return this._azureADRegistered;
    };
    /**
     * Sets the azureADRegistered property value. Whether the device is Azure Active Directory registered. This property is read-only.
     * @param value Value to set for the azureADRegistered property.
     */
    public set azureADRegistered(value: boolean | undefined) {
        this._azureADRegistered = value;
    };
    /**
     * Gets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires. This property is read-only.
     * @returns a Date
     */
    public get complianceGracePeriodExpirationDateTime() {
        return this._complianceGracePeriodExpirationDateTime;
    };
    /**
     * Sets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires. This property is read-only.
     * @param value Value to set for the complianceGracePeriodExpirationDateTime property.
     */
    public set complianceGracePeriodExpirationDateTime(value: Date | undefined) {
        this._complianceGracePeriodExpirationDateTime = value;
    };
    /**
     * Gets the complianceState property value. Compliance state.
     * @returns a complianceState
     */
    public get complianceState() {
        return this._complianceState;
    };
    /**
     * Sets the complianceState property value. Compliance state.
     * @param value Value to set for the complianceState property.
     */
    public set complianceState(value: ComplianceState | undefined) {
        this._complianceState = value;
    };
    /**
     * Gets the configurationManagerClientEnabledFeatures property value. ConfigrMgr client enabled features. This property is read-only.
     * @returns a configurationManagerClientEnabledFeatures
     */
    public get configurationManagerClientEnabledFeatures() {
        return this._configurationManagerClientEnabledFeatures;
    };
    /**
     * Sets the configurationManagerClientEnabledFeatures property value. ConfigrMgr client enabled features. This property is read-only.
     * @param value Value to set for the configurationManagerClientEnabledFeatures property.
     */
    public set configurationManagerClientEnabledFeatures(value: ConfigurationManagerClientEnabledFeatures | undefined) {
        this._configurationManagerClientEnabledFeatures = value;
    };
    /**
     * Instantiates a new managedDevice and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deviceActionResults property value. List of ComplexType deviceActionResult objects. This property is read-only.
     * @returns a deviceActionResult
     */
    public get deviceActionResults() {
        return this._deviceActionResults;
    };
    /**
     * Sets the deviceActionResults property value. List of ComplexType deviceActionResult objects. This property is read-only.
     * @param value Value to set for the deviceActionResults property.
     */
    public set deviceActionResults(value: DeviceActionResult[] | undefined) {
        this._deviceActionResults = value;
    };
    /**
     * Gets the deviceCategory property value. Device category
     * @returns a deviceCategory
     */
    public get deviceCategory() {
        return this._deviceCategory;
    };
    /**
     * Sets the deviceCategory property value. Device category
     * @param value Value to set for the deviceCategory property.
     */
    public set deviceCategory(value: DeviceCategory | undefined) {
        this._deviceCategory = value;
    };
    /**
     * Gets the deviceCategoryDisplayName property value. Device category display name. This property is read-only.
     * @returns a string
     */
    public get deviceCategoryDisplayName() {
        return this._deviceCategoryDisplayName;
    };
    /**
     * Sets the deviceCategoryDisplayName property value. Device category display name. This property is read-only.
     * @param value Value to set for the deviceCategoryDisplayName property.
     */
    public set deviceCategoryDisplayName(value: string | undefined) {
        this._deviceCategoryDisplayName = value;
    };
    /**
     * Gets the deviceCompliancePolicyStates property value. Device compliance policy states for this device.
     * @returns a deviceCompliancePolicyState
     */
    public get deviceCompliancePolicyStates() {
        return this._deviceCompliancePolicyStates;
    };
    /**
     * Sets the deviceCompliancePolicyStates property value. Device compliance policy states for this device.
     * @param value Value to set for the deviceCompliancePolicyStates property.
     */
    public set deviceCompliancePolicyStates(value: DeviceCompliancePolicyState[] | undefined) {
        this._deviceCompliancePolicyStates = value;
    };
    /**
     * Gets the deviceConfigurationStates property value. Device configuration states for this device.
     * @returns a deviceConfigurationState
     */
    public get deviceConfigurationStates() {
        return this._deviceConfigurationStates;
    };
    /**
     * Sets the deviceConfigurationStates property value. Device configuration states for this device.
     * @param value Value to set for the deviceConfigurationStates property.
     */
    public set deviceConfigurationStates(value: DeviceConfigurationState[] | undefined) {
        this._deviceConfigurationStates = value;
    };
    /**
     * Gets the deviceEnrollmentType property value. Possible ways of adding a mobile device to management.
     * @returns a deviceEnrollmentType
     */
    public get deviceEnrollmentType() {
        return this._deviceEnrollmentType;
    };
    /**
     * Sets the deviceEnrollmentType property value. Possible ways of adding a mobile device to management.
     * @param value Value to set for the deviceEnrollmentType property.
     */
    public set deviceEnrollmentType(value: DeviceEnrollmentType | undefined) {
        this._deviceEnrollmentType = value;
    };
    /**
     * Gets the deviceHealthAttestationState property value. The device health attestation state. This property is read-only.
     * @returns a deviceHealthAttestationState
     */
    public get deviceHealthAttestationState() {
        return this._deviceHealthAttestationState;
    };
    /**
     * Sets the deviceHealthAttestationState property value. The device health attestation state. This property is read-only.
     * @param value Value to set for the deviceHealthAttestationState property.
     */
    public set deviceHealthAttestationState(value: DeviceHealthAttestationState | undefined) {
        this._deviceHealthAttestationState = value;
    };
    /**
     * Gets the deviceName property value. Name of the device. This property is read-only.
     * @returns a string
     */
    public get deviceName() {
        return this._deviceName;
    };
    /**
     * Sets the deviceName property value. Name of the device. This property is read-only.
     * @param value Value to set for the deviceName property.
     */
    public set deviceName(value: string | undefined) {
        this._deviceName = value;
    };
    /**
     * Gets the deviceRegistrationState property value. Device registration status.
     * @returns a deviceRegistrationState
     */
    public get deviceRegistrationState() {
        return this._deviceRegistrationState;
    };
    /**
     * Sets the deviceRegistrationState property value. Device registration status.
     * @param value Value to set for the deviceRegistrationState property.
     */
    public set deviceRegistrationState(value: DeviceRegistrationState | undefined) {
        this._deviceRegistrationState = value;
    };
    /**
     * Gets the easActivated property value. Whether the device is Exchange ActiveSync activated. This property is read-only.
     * @returns a boolean
     */
    public get easActivated() {
        return this._easActivated;
    };
    /**
     * Sets the easActivated property value. Whether the device is Exchange ActiveSync activated. This property is read-only.
     * @param value Value to set for the easActivated property.
     */
    public set easActivated(value: boolean | undefined) {
        this._easActivated = value;
    };
    /**
     * Gets the easActivationDateTime property value. Exchange ActivationSync activation time of the device. This property is read-only.
     * @returns a Date
     */
    public get easActivationDateTime() {
        return this._easActivationDateTime;
    };
    /**
     * Sets the easActivationDateTime property value. Exchange ActivationSync activation time of the device. This property is read-only.
     * @param value Value to set for the easActivationDateTime property.
     */
    public set easActivationDateTime(value: Date | undefined) {
        this._easActivationDateTime = value;
    };
    /**
     * Gets the easDeviceId property value. Exchange ActiveSync Id of the device. This property is read-only.
     * @returns a string
     */
    public get easDeviceId() {
        return this._easDeviceId;
    };
    /**
     * Sets the easDeviceId property value. Exchange ActiveSync Id of the device. This property is read-only.
     * @param value Value to set for the easDeviceId property.
     */
    public set easDeviceId(value: string | undefined) {
        this._easDeviceId = value;
    };
    /**
     * Gets the emailAddress property value. Email(s) for the user associated with the device. This property is read-only.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. Email(s) for the user associated with the device. This property is read-only.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        this._emailAddress = value;
    };
    /**
     * Gets the enrolledDateTime property value. Enrollment time of the device. This property is read-only.
     * @returns a Date
     */
    public get enrolledDateTime() {
        return this._enrolledDateTime;
    };
    /**
     * Sets the enrolledDateTime property value. Enrollment time of the device. This property is read-only.
     * @param value Value to set for the enrolledDateTime property.
     */
    public set enrolledDateTime(value: Date | undefined) {
        this._enrolledDateTime = value;
    };
    /**
     * Gets the ethernetMacAddress property value. Ethernet MAC. This property is read-only.
     * @returns a string
     */
    public get ethernetMacAddress() {
        return this._ethernetMacAddress;
    };
    /**
     * Sets the ethernetMacAddress property value. Ethernet MAC. This property is read-only.
     * @param value Value to set for the ethernetMacAddress property.
     */
    public set ethernetMacAddress(value: string | undefined) {
        this._ethernetMacAddress = value;
    };
    /**
     * Gets the exchangeAccessState property value. Device Exchange Access State.
     * @returns a deviceManagementExchangeAccessState
     */
    public get exchangeAccessState() {
        return this._exchangeAccessState;
    };
    /**
     * Sets the exchangeAccessState property value. Device Exchange Access State.
     * @param value Value to set for the exchangeAccessState property.
     */
    public set exchangeAccessState(value: DeviceManagementExchangeAccessState | undefined) {
        this._exchangeAccessState = value;
    };
    /**
     * Gets the exchangeAccessStateReason property value. Device Exchange Access State Reason.
     * @returns a deviceManagementExchangeAccessStateReason
     */
    public get exchangeAccessStateReason() {
        return this._exchangeAccessStateReason;
    };
    /**
     * Sets the exchangeAccessStateReason property value. Device Exchange Access State Reason.
     * @param value Value to set for the exchangeAccessStateReason property.
     */
    public set exchangeAccessStateReason(value: DeviceManagementExchangeAccessStateReason | undefined) {
        this._exchangeAccessStateReason = value;
    };
    /**
     * Gets the exchangeLastSuccessfulSyncDateTime property value. Last time the device contacted Exchange. This property is read-only.
     * @returns a Date
     */
    public get exchangeLastSuccessfulSyncDateTime() {
        return this._exchangeLastSuccessfulSyncDateTime;
    };
    /**
     * Sets the exchangeLastSuccessfulSyncDateTime property value. Last time the device contacted Exchange. This property is read-only.
     * @param value Value to set for the exchangeLastSuccessfulSyncDateTime property.
     */
    public set exchangeLastSuccessfulSyncDateTime(value: Date | undefined) {
        this._exchangeLastSuccessfulSyncDateTime = value;
    };
    /**
     * Gets the freeStorageSpaceInBytes property value. Free Storage in Bytes. Default value is 0. Read-only. This property is read-only.
     * @returns a int64
     */
    public get freeStorageSpaceInBytes() {
        return this._freeStorageSpaceInBytes;
    };
    /**
     * Sets the freeStorageSpaceInBytes property value. Free Storage in Bytes. Default value is 0. Read-only. This property is read-only.
     * @param value Value to set for the freeStorageSpaceInBytes property.
     */
    public set freeStorageSpaceInBytes(value: number | undefined) {
        this._freeStorageSpaceInBytes = value;
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
            "configurationManagerClientEnabledFeatures": n => { this.configurationManagerClientEnabledFeatures = n.getObjectValue<ConfigurationManagerClientEnabledFeatures>(createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue); },
            "deviceActionResults": n => { this.deviceActionResults = n.getCollectionOfObjectValues<DeviceActionResult>(createDeviceActionResultFromDiscriminatorValue); },
            "deviceCategory": n => { this.deviceCategory = n.getObjectValue<DeviceCategory>(createDeviceCategoryFromDiscriminatorValue); },
            "deviceCategoryDisplayName": n => { this.deviceCategoryDisplayName = n.getStringValue(); },
            "deviceCompliancePolicyStates": n => { this.deviceCompliancePolicyStates = n.getCollectionOfObjectValues<DeviceCompliancePolicyState>(createDeviceCompliancePolicyStateFromDiscriminatorValue); },
            "deviceConfigurationStates": n => { this.deviceConfigurationStates = n.getCollectionOfObjectValues<DeviceConfigurationState>(createDeviceConfigurationStateFromDiscriminatorValue); },
            "deviceEnrollmentType": n => { this.deviceEnrollmentType = n.getEnumValue<DeviceEnrollmentType>(DeviceEnrollmentType); },
            "deviceHealthAttestationState": n => { this.deviceHealthAttestationState = n.getObjectValue<DeviceHealthAttestationState>(createDeviceHealthAttestationStateFromDiscriminatorValue); },
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
            "managementCertificateExpirationDate": n => { this.managementCertificateExpirationDate = n.getDateValue(); },
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
            "requireUserEnrollmentApproval": n => { this.requireUserEnrollmentApproval = n.getBooleanValue(); },
            "serialNumber": n => { this.serialNumber = n.getStringValue(); },
            "subscriberCarrier": n => { this.subscriberCarrier = n.getStringValue(); },
            "totalStorageSpaceInBytes": n => { this.totalStorageSpaceInBytes = n.getNumberValue(); },
            "udid": n => { this.udid = n.getStringValue(); },
            "userDisplayName": n => { this.userDisplayName = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
            "users": n => { this.users = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); },
            "wiFiMacAddress": n => { this.wiFiMacAddress = n.getStringValue(); },
        };
    };
    /**
     * Gets the iccid property value. Integrated Circuit Card Identifier, it is A SIM card's unique identification number. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only.
     * @returns a string
     */
    public get iccid() {
        return this._iccid;
    };
    /**
     * Sets the iccid property value. Integrated Circuit Card Identifier, it is A SIM card's unique identification number. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only.
     * @param value Value to set for the iccid property.
     */
    public set iccid(value: string | undefined) {
        this._iccid = value;
    };
    /**
     * Gets the imei property value. IMEI. This property is read-only.
     * @returns a string
     */
    public get imei() {
        return this._imei;
    };
    /**
     * Sets the imei property value. IMEI. This property is read-only.
     * @param value Value to set for the imei property.
     */
    public set imei(value: string | undefined) {
        this._imei = value;
    };
    /**
     * Gets the isEncrypted property value. Device encryption status. This property is read-only.
     * @returns a boolean
     */
    public get isEncrypted() {
        return this._isEncrypted;
    };
    /**
     * Sets the isEncrypted property value. Device encryption status. This property is read-only.
     * @param value Value to set for the isEncrypted property.
     */
    public set isEncrypted(value: boolean | undefined) {
        this._isEncrypted = value;
    };
    /**
     * Gets the isSupervised property value. Device supervised status. This property is read-only.
     * @returns a boolean
     */
    public get isSupervised() {
        return this._isSupervised;
    };
    /**
     * Sets the isSupervised property value. Device supervised status. This property is read-only.
     * @param value Value to set for the isSupervised property.
     */
    public set isSupervised(value: boolean | undefined) {
        this._isSupervised = value;
    };
    /**
     * Gets the jailBroken property value. whether the device is jail broken or rooted. This property is read-only.
     * @returns a string
     */
    public get jailBroken() {
        return this._jailBroken;
    };
    /**
     * Sets the jailBroken property value. whether the device is jail broken or rooted. This property is read-only.
     * @param value Value to set for the jailBroken property.
     */
    public set jailBroken(value: string | undefined) {
        this._jailBroken = value;
    };
    /**
     * Gets the lastSyncDateTime property value. The date and time that the device last completed a successful sync with Intune. This property is read-only.
     * @returns a Date
     */
    public get lastSyncDateTime() {
        return this._lastSyncDateTime;
    };
    /**
     * Sets the lastSyncDateTime property value. The date and time that the device last completed a successful sync with Intune. This property is read-only.
     * @param value Value to set for the lastSyncDateTime property.
     */
    public set lastSyncDateTime(value: Date | undefined) {
        this._lastSyncDateTime = value;
    };
    /**
     * Gets the managedDeviceName property value. Automatically generated name to identify a device. Can be overwritten to a user friendly name.
     * @returns a string
     */
    public get managedDeviceName() {
        return this._managedDeviceName;
    };
    /**
     * Sets the managedDeviceName property value. Automatically generated name to identify a device. Can be overwritten to a user friendly name.
     * @param value Value to set for the managedDeviceName property.
     */
    public set managedDeviceName(value: string | undefined) {
        this._managedDeviceName = value;
    };
    /**
     * Gets the managedDeviceOwnerType property value. Owner type of device.
     * @returns a managedDeviceOwnerType
     */
    public get managedDeviceOwnerType() {
        return this._managedDeviceOwnerType;
    };
    /**
     * Sets the managedDeviceOwnerType property value. Owner type of device.
     * @param value Value to set for the managedDeviceOwnerType property.
     */
    public set managedDeviceOwnerType(value: ManagedDeviceOwnerType | undefined) {
        this._managedDeviceOwnerType = value;
    };
    /**
     * Gets the managementAgent property value. The managementAgent property
     * @returns a managementAgentType
     */
    public get managementAgent() {
        return this._managementAgent;
    };
    /**
     * Sets the managementAgent property value. The managementAgent property
     * @param value Value to set for the managementAgent property.
     */
    public set managementAgent(value: ManagementAgentType | undefined) {
        this._managementAgent = value;
    };
    /**
     * Gets the managementCertificateExpirationDate property value. Reports device management certificate expiration date. This property is read-only.
     * @returns a Date
     */
    public get managementCertificateExpirationDate() {
        return this._managementCertificateExpirationDate;
    };
    /**
     * Sets the managementCertificateExpirationDate property value. Reports device management certificate expiration date. This property is read-only.
     * @param value Value to set for the managementCertificateExpirationDate property.
     */
    public set managementCertificateExpirationDate(value: Date | undefined) {
        this._managementCertificateExpirationDate = value;
    };
    /**
     * Gets the manufacturer property value. Manufacturer of the device. This property is read-only.
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Sets the manufacturer property value. Manufacturer of the device. This property is read-only.
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        this._manufacturer = value;
    };
    /**
     * Gets the meid property value. MEID. This property is read-only.
     * @returns a string
     */
    public get meid() {
        return this._meid;
    };
    /**
     * Sets the meid property value. MEID. This property is read-only.
     * @param value Value to set for the meid property.
     */
    public set meid(value: string | undefined) {
        this._meid = value;
    };
    /**
     * Gets the model property value. Model of the device. This property is read-only.
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Sets the model property value. Model of the device. This property is read-only.
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        this._model = value;
    };
    /**
     * Gets the notes property value. Notes on the device created by IT Admin. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select.  $Search is not supported.
     * @returns a string
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. Notes on the device created by IT Admin. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select.  $Search is not supported.
     * @param value Value to set for the notes property.
     */
    public set notes(value: string | undefined) {
        this._notes = value;
    };
    /**
     * Gets the operatingSystem property value. Operating system of the device. Windows, iOS, etc. This property is read-only.
     * @returns a string
     */
    public get operatingSystem() {
        return this._operatingSystem;
    };
    /**
     * Sets the operatingSystem property value. Operating system of the device. Windows, iOS, etc. This property is read-only.
     * @param value Value to set for the operatingSystem property.
     */
    public set operatingSystem(value: string | undefined) {
        this._operatingSystem = value;
    };
    /**
     * Gets the osVersion property value. Operating system version of the device. This property is read-only.
     * @returns a string
     */
    public get osVersion() {
        return this._osVersion;
    };
    /**
     * Sets the osVersion property value. Operating system version of the device. This property is read-only.
     * @param value Value to set for the osVersion property.
     */
    public set osVersion(value: string | undefined) {
        this._osVersion = value;
    };
    /**
     * Gets the partnerReportedThreatState property value. Available health states for the Device Health API
     * @returns a managedDevicePartnerReportedHealthState
     */
    public get partnerReportedThreatState() {
        return this._partnerReportedThreatState;
    };
    /**
     * Sets the partnerReportedThreatState property value. Available health states for the Device Health API
     * @param value Value to set for the partnerReportedThreatState property.
     */
    public set partnerReportedThreatState(value: ManagedDevicePartnerReportedHealthState | undefined) {
        this._partnerReportedThreatState = value;
    };
    /**
     * Gets the phoneNumber property value. Phone number of the device. This property is read-only.
     * @returns a string
     */
    public get phoneNumber() {
        return this._phoneNumber;
    };
    /**
     * Sets the phoneNumber property value. Phone number of the device. This property is read-only.
     * @param value Value to set for the phoneNumber property.
     */
    public set phoneNumber(value: string | undefined) {
        this._phoneNumber = value;
    };
    /**
     * Gets the physicalMemoryInBytes property value. Total Memory in Bytes. Return default value 0 in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. Default value is 0. Read-only. This property is read-only.
     * @returns a int64
     */
    public get physicalMemoryInBytes() {
        return this._physicalMemoryInBytes;
    };
    /**
     * Sets the physicalMemoryInBytes property value. Total Memory in Bytes. Return default value 0 in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. Default value is 0. Read-only. This property is read-only.
     * @param value Value to set for the physicalMemoryInBytes property.
     */
    public set physicalMemoryInBytes(value: number | undefined) {
        this._physicalMemoryInBytes = value;
    };
    /**
     * Gets the remoteAssistanceSessionErrorDetails property value. An error string that identifies issues when creating Remote Assistance session objects. This property is read-only.
     * @returns a string
     */
    public get remoteAssistanceSessionErrorDetails() {
        return this._remoteAssistanceSessionErrorDetails;
    };
    /**
     * Sets the remoteAssistanceSessionErrorDetails property value. An error string that identifies issues when creating Remote Assistance session objects. This property is read-only.
     * @param value Value to set for the remoteAssistanceSessionErrorDetails property.
     */
    public set remoteAssistanceSessionErrorDetails(value: string | undefined) {
        this._remoteAssistanceSessionErrorDetails = value;
    };
    /**
     * Gets the remoteAssistanceSessionUrl property value. Url that allows a Remote Assistance session to be established with the device. This property is read-only.
     * @returns a string
     */
    public get remoteAssistanceSessionUrl() {
        return this._remoteAssistanceSessionUrl;
    };
    /**
     * Sets the remoteAssistanceSessionUrl property value. Url that allows a Remote Assistance session to be established with the device. This property is read-only.
     * @param value Value to set for the remoteAssistanceSessionUrl property.
     */
    public set remoteAssistanceSessionUrl(value: string | undefined) {
        this._remoteAssistanceSessionUrl = value;
    };
    /**
     * Gets the requireUserEnrollmentApproval property value. Reports if the managed iOS device is user approval enrollment. This property is read-only.
     * @returns a boolean
     */
    public get requireUserEnrollmentApproval() {
        return this._requireUserEnrollmentApproval;
    };
    /**
     * Sets the requireUserEnrollmentApproval property value. Reports if the managed iOS device is user approval enrollment. This property is read-only.
     * @param value Value to set for the requireUserEnrollmentApproval property.
     */
    public set requireUserEnrollmentApproval(value: boolean | undefined) {
        this._requireUserEnrollmentApproval = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<ComplianceState>("complianceState", this.complianceState);
        writer.writeObjectValue<DeviceCategory>("deviceCategory", this.deviceCategory);
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyState>("deviceCompliancePolicyStates", this.deviceCompliancePolicyStates);
        writer.writeCollectionOfObjectValues<DeviceConfigurationState>("deviceConfigurationStates", this.deviceConfigurationStates);
        writer.writeEnumValue<DeviceEnrollmentType>("deviceEnrollmentType", this.deviceEnrollmentType);
        writer.writeEnumValue<DeviceRegistrationState>("deviceRegistrationState", this.deviceRegistrationState);
        writer.writeEnumValue<DeviceManagementExchangeAccessState>("exchangeAccessState", this.exchangeAccessState);
        writer.writeEnumValue<DeviceManagementExchangeAccessStateReason>("exchangeAccessStateReason", this.exchangeAccessStateReason);
        writer.writeStringValue("managedDeviceName", this.managedDeviceName);
        writer.writeEnumValue<ManagedDeviceOwnerType>("managedDeviceOwnerType", this.managedDeviceOwnerType);
        writer.writeEnumValue<ManagementAgentType>("managementAgent", this.managementAgent);
        writer.writeStringValue("notes", this.notes);
        writer.writeEnumValue<ManagedDevicePartnerReportedHealthState>("partnerReportedThreatState", this.partnerReportedThreatState);
        writer.writeCollectionOfObjectValues<User>("users", this.users);
    };
    /**
     * Gets the serialNumber property value. SerialNumber. This property is read-only.
     * @returns a string
     */
    public get serialNumber() {
        return this._serialNumber;
    };
    /**
     * Sets the serialNumber property value. SerialNumber. This property is read-only.
     * @param value Value to set for the serialNumber property.
     */
    public set serialNumber(value: string | undefined) {
        this._serialNumber = value;
    };
    /**
     * Gets the subscriberCarrier property value. Subscriber Carrier. This property is read-only.
     * @returns a string
     */
    public get subscriberCarrier() {
        return this._subscriberCarrier;
    };
    /**
     * Sets the subscriberCarrier property value. Subscriber Carrier. This property is read-only.
     * @param value Value to set for the subscriberCarrier property.
     */
    public set subscriberCarrier(value: string | undefined) {
        this._subscriberCarrier = value;
    };
    /**
     * Gets the totalStorageSpaceInBytes property value. Total Storage in Bytes. This property is read-only.
     * @returns a int64
     */
    public get totalStorageSpaceInBytes() {
        return this._totalStorageSpaceInBytes;
    };
    /**
     * Sets the totalStorageSpaceInBytes property value. Total Storage in Bytes. This property is read-only.
     * @param value Value to set for the totalStorageSpaceInBytes property.
     */
    public set totalStorageSpaceInBytes(value: number | undefined) {
        this._totalStorageSpaceInBytes = value;
    };
    /**
     * Gets the udid property value. Unique Device Identifier for iOS and macOS devices. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only.
     * @returns a string
     */
    public get udid() {
        return this._udid;
    };
    /**
     * Sets the udid property value. Unique Device Identifier for iOS and macOS devices. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only.
     * @param value Value to set for the udid property.
     */
    public set udid(value: string | undefined) {
        this._udid = value;
    };
    /**
     * Gets the userDisplayName property value. User display name. This property is read-only.
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Sets the userDisplayName property value. User display name. This property is read-only.
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        this._userDisplayName = value;
    };
    /**
     * Gets the userId property value. Unique Identifier for the user associated with the device. This property is read-only.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. Unique Identifier for the user associated with the device. This property is read-only.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Gets the userPrincipalName property value. Device user principal name. This property is read-only.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. Device user principal name. This property is read-only.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
    /**
     * Gets the users property value. The primary users associated with the managed device.
     * @returns a user
     */
    public get users() {
        return this._users;
    };
    /**
     * Sets the users property value. The primary users associated with the managed device.
     * @param value Value to set for the users property.
     */
    public set users(value: User[] | undefined) {
        this._users = value;
    };
    /**
     * Gets the wiFiMacAddress property value. Wi-Fi MAC. This property is read-only.
     * @returns a string
     */
    public get wiFiMacAddress() {
        return this._wiFiMacAddress;
    };
    /**
     * Sets the wiFiMacAddress property value. Wi-Fi MAC. This property is read-only.
     * @param value Value to set for the wiFiMacAddress property.
     */
    public set wiFiMacAddress(value: string | undefined) {
        this._wiFiMacAddress = value;
    };
}
