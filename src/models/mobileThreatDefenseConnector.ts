import {Entity} from './index';
import {MobileThreatPartnerTenantState} from './mobileThreatPartnerTenantState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Entity which represents a connection to Mobile Threat Defense partner.
 */
export class MobileThreatDefenseConnector extends Entity implements Parsable {
    /** When TRUE, indicates the data sync partner may collect metadata about installed applications from Intune for IOS devices. When FALSE, indicates the data sync partner may not collect metadata about installed applications from Intune for IOS devices. Default value is FALSE. */
    private _allowPartnerToCollectIOSApplicationMetadata?: boolean | undefined;
    /** When TRUE, indicates the data sync partner may collect metadata about personally installed applications from Intune for IOS devices. When FALSE, indicates the data sync partner may not collect metadata about personally installed applications from Intune for IOS devices. Default value is FALSE. */
    private _allowPartnerToCollectIOSPersonalApplicationMetadata?: boolean | undefined;
    /** For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant */
    private _androidDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    /** For Android, set whether data from the data sync partner should be used during compliance evaluations */
    private _androidEnabled?: boolean | undefined;
    /** When TRUE, inidicates that data from the data sync partner can be used during Mobile Application Management (MAM) evaluations for Android devices. When FALSE, inidicates that data from the data sync partner should not be used during Mobile Application Management (MAM) evaluations for Android devices. Only one partner per platform may be enabled for Mobile Application Management (MAM) evaluation. Default value is FALSE. */
    private _androidMobileApplicationManagementEnabled?: boolean | undefined;
    /** For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant */
    private _iosDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    /** For IOS, get or set whether data from the data sync partner should be used during compliance evaluations */
    private _iosEnabled?: boolean | undefined;
    /** When TRUE, inidicates that data from the data sync partner can be used during Mobile Application Management (MAM) evaluations for IOS devices. When FALSE, inidicates that data from the data sync partner should not be used during Mobile Application Management (MAM) evaluations for IOS devices. Only one partner per platform may be enabled for Mobile Application Management (MAM) evaluation. Default value is FALSE. */
    private _iosMobileApplicationManagementEnabled?: boolean | undefined;
    /** DateTime of last Heartbeat recieved from the Data Sync Partner */
    private _lastHeartbeatDateTime?: Date | undefined;
    /** When TRUE, inidicates that configuration profile management via Microsoft Defender for Endpoint is enabled. When FALSE, inidicates that configuration profile management via Microsoft Defender for Endpoint is disabled. Default value is FALSE. */
    private _microsoftDefenderForEndpointAttachEnabled?: boolean | undefined;
    /** Partner state of this tenant. */
    private _partnerState?: MobileThreatPartnerTenantState | undefined;
    /** Get or Set days the per tenant tolerance to unresponsiveness for this partner integration */
    private _partnerUnresponsivenessThresholdInDays?: number | undefined;
    /** Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the Data Sync Partner */
    private _partnerUnsupportedOsVersionBlocked?: boolean | undefined;
    /** When TRUE, inidicates that Intune must receive data from the data sync partner prior to marking a device compliant for Windows. When FALSE, inidicates that Intune may make a device compliant without receiving data from the data sync partner for Windows. Default value is FALSE. */
    private _windowsDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    /** When TRUE, inidicates that data from the data sync partner can be used during compliance evaluations for Windows. When FALSE, inidicates that data from the data sync partner should not be used during compliance evaluations for Windows. Default value is FALSE. */
    private _windowsEnabled?: boolean | undefined;
    /**
     * Gets the allowPartnerToCollectIOSApplicationMetadata property value. When TRUE, indicates the data sync partner may collect metadata about installed applications from Intune for IOS devices. When FALSE, indicates the data sync partner may not collect metadata about installed applications from Intune for IOS devices. Default value is FALSE.
     * @returns a boolean
     */
    public get allowPartnerToCollectIOSApplicationMetadata() {
        return this._allowPartnerToCollectIOSApplicationMetadata;
    };
    /**
     * Sets the allowPartnerToCollectIOSApplicationMetadata property value. When TRUE, indicates the data sync partner may collect metadata about installed applications from Intune for IOS devices. When FALSE, indicates the data sync partner may not collect metadata about installed applications from Intune for IOS devices. Default value is FALSE.
     * @param value Value to set for the allowPartnerToCollectIOSApplicationMetadata property.
     */
    public set allowPartnerToCollectIOSApplicationMetadata(value: boolean | undefined) {
        this._allowPartnerToCollectIOSApplicationMetadata = value;
    };
    /**
     * Gets the allowPartnerToCollectIOSPersonalApplicationMetadata property value. When TRUE, indicates the data sync partner may collect metadata about personally installed applications from Intune for IOS devices. When FALSE, indicates the data sync partner may not collect metadata about personally installed applications from Intune for IOS devices. Default value is FALSE.
     * @returns a boolean
     */
    public get allowPartnerToCollectIOSPersonalApplicationMetadata() {
        return this._allowPartnerToCollectIOSPersonalApplicationMetadata;
    };
    /**
     * Sets the allowPartnerToCollectIOSPersonalApplicationMetadata property value. When TRUE, indicates the data sync partner may collect metadata about personally installed applications from Intune for IOS devices. When FALSE, indicates the data sync partner may not collect metadata about personally installed applications from Intune for IOS devices. Default value is FALSE.
     * @param value Value to set for the allowPartnerToCollectIOSPersonalApplicationMetadata property.
     */
    public set allowPartnerToCollectIOSPersonalApplicationMetadata(value: boolean | undefined) {
        this._allowPartnerToCollectIOSPersonalApplicationMetadata = value;
    };
    /**
     * Gets the androidDeviceBlockedOnMissingPartnerData property value. For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant
     * @returns a boolean
     */
    public get androidDeviceBlockedOnMissingPartnerData() {
        return this._androidDeviceBlockedOnMissingPartnerData;
    };
    /**
     * Sets the androidDeviceBlockedOnMissingPartnerData property value. For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant
     * @param value Value to set for the androidDeviceBlockedOnMissingPartnerData property.
     */
    public set androidDeviceBlockedOnMissingPartnerData(value: boolean | undefined) {
        this._androidDeviceBlockedOnMissingPartnerData = value;
    };
    /**
     * Gets the androidEnabled property value. For Android, set whether data from the data sync partner should be used during compliance evaluations
     * @returns a boolean
     */
    public get androidEnabled() {
        return this._androidEnabled;
    };
    /**
     * Sets the androidEnabled property value. For Android, set whether data from the data sync partner should be used during compliance evaluations
     * @param value Value to set for the androidEnabled property.
     */
    public set androidEnabled(value: boolean | undefined) {
        this._androidEnabled = value;
    };
    /**
     * Gets the androidMobileApplicationManagementEnabled property value. When TRUE, inidicates that data from the data sync partner can be used during Mobile Application Management (MAM) evaluations for Android devices. When FALSE, inidicates that data from the data sync partner should not be used during Mobile Application Management (MAM) evaluations for Android devices. Only one partner per platform may be enabled for Mobile Application Management (MAM) evaluation. Default value is FALSE.
     * @returns a boolean
     */
    public get androidMobileApplicationManagementEnabled() {
        return this._androidMobileApplicationManagementEnabled;
    };
    /**
     * Sets the androidMobileApplicationManagementEnabled property value. When TRUE, inidicates that data from the data sync partner can be used during Mobile Application Management (MAM) evaluations for Android devices. When FALSE, inidicates that data from the data sync partner should not be used during Mobile Application Management (MAM) evaluations for Android devices. Only one partner per platform may be enabled for Mobile Application Management (MAM) evaluation. Default value is FALSE.
     * @param value Value to set for the androidMobileApplicationManagementEnabled property.
     */
    public set androidMobileApplicationManagementEnabled(value: boolean | undefined) {
        this._androidMobileApplicationManagementEnabled = value;
    };
    /**
     * Instantiates a new mobileThreatDefenseConnector and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowPartnerToCollectIOSApplicationMetadata": n => { this.allowPartnerToCollectIOSApplicationMetadata = n.getBooleanValue(); },
            "allowPartnerToCollectIOSPersonalApplicationMetadata": n => { this.allowPartnerToCollectIOSPersonalApplicationMetadata = n.getBooleanValue(); },
            "androidDeviceBlockedOnMissingPartnerData": n => { this.androidDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); },
            "androidEnabled": n => { this.androidEnabled = n.getBooleanValue(); },
            "androidMobileApplicationManagementEnabled": n => { this.androidMobileApplicationManagementEnabled = n.getBooleanValue(); },
            "iosDeviceBlockedOnMissingPartnerData": n => { this.iosDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); },
            "iosEnabled": n => { this.iosEnabled = n.getBooleanValue(); },
            "iosMobileApplicationManagementEnabled": n => { this.iosMobileApplicationManagementEnabled = n.getBooleanValue(); },
            "lastHeartbeatDateTime": n => { this.lastHeartbeatDateTime = n.getDateValue(); },
            "microsoftDefenderForEndpointAttachEnabled": n => { this.microsoftDefenderForEndpointAttachEnabled = n.getBooleanValue(); },
            "partnerState": n => { this.partnerState = n.getEnumValue<MobileThreatPartnerTenantState>(MobileThreatPartnerTenantState); },
            "partnerUnresponsivenessThresholdInDays": n => { this.partnerUnresponsivenessThresholdInDays = n.getNumberValue(); },
            "partnerUnsupportedOsVersionBlocked": n => { this.partnerUnsupportedOsVersionBlocked = n.getBooleanValue(); },
            "windowsDeviceBlockedOnMissingPartnerData": n => { this.windowsDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); },
            "windowsEnabled": n => { this.windowsEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the iosDeviceBlockedOnMissingPartnerData property value. For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant
     * @returns a boolean
     */
    public get iosDeviceBlockedOnMissingPartnerData() {
        return this._iosDeviceBlockedOnMissingPartnerData;
    };
    /**
     * Sets the iosDeviceBlockedOnMissingPartnerData property value. For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant
     * @param value Value to set for the iosDeviceBlockedOnMissingPartnerData property.
     */
    public set iosDeviceBlockedOnMissingPartnerData(value: boolean | undefined) {
        this._iosDeviceBlockedOnMissingPartnerData = value;
    };
    /**
     * Gets the iosEnabled property value. For IOS, get or set whether data from the data sync partner should be used during compliance evaluations
     * @returns a boolean
     */
    public get iosEnabled() {
        return this._iosEnabled;
    };
    /**
     * Sets the iosEnabled property value. For IOS, get or set whether data from the data sync partner should be used during compliance evaluations
     * @param value Value to set for the iosEnabled property.
     */
    public set iosEnabled(value: boolean | undefined) {
        this._iosEnabled = value;
    };
    /**
     * Gets the iosMobileApplicationManagementEnabled property value. When TRUE, inidicates that data from the data sync partner can be used during Mobile Application Management (MAM) evaluations for IOS devices. When FALSE, inidicates that data from the data sync partner should not be used during Mobile Application Management (MAM) evaluations for IOS devices. Only one partner per platform may be enabled for Mobile Application Management (MAM) evaluation. Default value is FALSE.
     * @returns a boolean
     */
    public get iosMobileApplicationManagementEnabled() {
        return this._iosMobileApplicationManagementEnabled;
    };
    /**
     * Sets the iosMobileApplicationManagementEnabled property value. When TRUE, inidicates that data from the data sync partner can be used during Mobile Application Management (MAM) evaluations for IOS devices. When FALSE, inidicates that data from the data sync partner should not be used during Mobile Application Management (MAM) evaluations for IOS devices. Only one partner per platform may be enabled for Mobile Application Management (MAM) evaluation. Default value is FALSE.
     * @param value Value to set for the iosMobileApplicationManagementEnabled property.
     */
    public set iosMobileApplicationManagementEnabled(value: boolean | undefined) {
        this._iosMobileApplicationManagementEnabled = value;
    };
    /**
     * Gets the lastHeartbeatDateTime property value. DateTime of last Heartbeat recieved from the Data Sync Partner
     * @returns a Date
     */
    public get lastHeartbeatDateTime() {
        return this._lastHeartbeatDateTime;
    };
    /**
     * Sets the lastHeartbeatDateTime property value. DateTime of last Heartbeat recieved from the Data Sync Partner
     * @param value Value to set for the lastHeartbeatDateTime property.
     */
    public set lastHeartbeatDateTime(value: Date | undefined) {
        this._lastHeartbeatDateTime = value;
    };
    /**
     * Gets the microsoftDefenderForEndpointAttachEnabled property value. When TRUE, inidicates that configuration profile management via Microsoft Defender for Endpoint is enabled. When FALSE, inidicates that configuration profile management via Microsoft Defender for Endpoint is disabled. Default value is FALSE.
     * @returns a boolean
     */
    public get microsoftDefenderForEndpointAttachEnabled() {
        return this._microsoftDefenderForEndpointAttachEnabled;
    };
    /**
     * Sets the microsoftDefenderForEndpointAttachEnabled property value. When TRUE, inidicates that configuration profile management via Microsoft Defender for Endpoint is enabled. When FALSE, inidicates that configuration profile management via Microsoft Defender for Endpoint is disabled. Default value is FALSE.
     * @param value Value to set for the microsoftDefenderForEndpointAttachEnabled property.
     */
    public set microsoftDefenderForEndpointAttachEnabled(value: boolean | undefined) {
        this._microsoftDefenderForEndpointAttachEnabled = value;
    };
    /**
     * Gets the partnerState property value. Partner state of this tenant.
     * @returns a mobileThreatPartnerTenantState
     */
    public get partnerState() {
        return this._partnerState;
    };
    /**
     * Sets the partnerState property value. Partner state of this tenant.
     * @param value Value to set for the partnerState property.
     */
    public set partnerState(value: MobileThreatPartnerTenantState | undefined) {
        this._partnerState = value;
    };
    /**
     * Gets the partnerUnresponsivenessThresholdInDays property value. Get or Set days the per tenant tolerance to unresponsiveness for this partner integration
     * @returns a integer
     */
    public get partnerUnresponsivenessThresholdInDays() {
        return this._partnerUnresponsivenessThresholdInDays;
    };
    /**
     * Sets the partnerUnresponsivenessThresholdInDays property value. Get or Set days the per tenant tolerance to unresponsiveness for this partner integration
     * @param value Value to set for the partnerUnresponsivenessThresholdInDays property.
     */
    public set partnerUnresponsivenessThresholdInDays(value: number | undefined) {
        this._partnerUnresponsivenessThresholdInDays = value;
    };
    /**
     * Gets the partnerUnsupportedOsVersionBlocked property value. Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the Data Sync Partner
     * @returns a boolean
     */
    public get partnerUnsupportedOsVersionBlocked() {
        return this._partnerUnsupportedOsVersionBlocked;
    };
    /**
     * Sets the partnerUnsupportedOsVersionBlocked property value. Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the Data Sync Partner
     * @param value Value to set for the partnerUnsupportedOsVersionBlocked property.
     */
    public set partnerUnsupportedOsVersionBlocked(value: boolean | undefined) {
        this._partnerUnsupportedOsVersionBlocked = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("allowPartnerToCollectIOSApplicationMetadata", this.allowPartnerToCollectIOSApplicationMetadata);
        writer.writeBooleanValue("allowPartnerToCollectIOSPersonalApplicationMetadata", this.allowPartnerToCollectIOSPersonalApplicationMetadata);
        writer.writeBooleanValue("androidDeviceBlockedOnMissingPartnerData", this.androidDeviceBlockedOnMissingPartnerData);
        writer.writeBooleanValue("androidEnabled", this.androidEnabled);
        writer.writeBooleanValue("androidMobileApplicationManagementEnabled", this.androidMobileApplicationManagementEnabled);
        writer.writeBooleanValue("iosDeviceBlockedOnMissingPartnerData", this.iosDeviceBlockedOnMissingPartnerData);
        writer.writeBooleanValue("iosEnabled", this.iosEnabled);
        writer.writeBooleanValue("iosMobileApplicationManagementEnabled", this.iosMobileApplicationManagementEnabled);
        writer.writeDateValue("lastHeartbeatDateTime", this.lastHeartbeatDateTime);
        writer.writeBooleanValue("microsoftDefenderForEndpointAttachEnabled", this.microsoftDefenderForEndpointAttachEnabled);
        writer.writeEnumValue<MobileThreatPartnerTenantState>("partnerState", this.partnerState);
        writer.writeNumberValue("partnerUnresponsivenessThresholdInDays", this.partnerUnresponsivenessThresholdInDays);
        writer.writeBooleanValue("partnerUnsupportedOsVersionBlocked", this.partnerUnsupportedOsVersionBlocked);
        writer.writeBooleanValue("windowsDeviceBlockedOnMissingPartnerData", this.windowsDeviceBlockedOnMissingPartnerData);
        writer.writeBooleanValue("windowsEnabled", this.windowsEnabled);
    };
    /**
     * Gets the windowsDeviceBlockedOnMissingPartnerData property value. When TRUE, inidicates that Intune must receive data from the data sync partner prior to marking a device compliant for Windows. When FALSE, inidicates that Intune may make a device compliant without receiving data from the data sync partner for Windows. Default value is FALSE.
     * @returns a boolean
     */
    public get windowsDeviceBlockedOnMissingPartnerData() {
        return this._windowsDeviceBlockedOnMissingPartnerData;
    };
    /**
     * Sets the windowsDeviceBlockedOnMissingPartnerData property value. When TRUE, inidicates that Intune must receive data from the data sync partner prior to marking a device compliant for Windows. When FALSE, inidicates that Intune may make a device compliant without receiving data from the data sync partner for Windows. Default value is FALSE.
     * @param value Value to set for the windowsDeviceBlockedOnMissingPartnerData property.
     */
    public set windowsDeviceBlockedOnMissingPartnerData(value: boolean | undefined) {
        this._windowsDeviceBlockedOnMissingPartnerData = value;
    };
    /**
     * Gets the windowsEnabled property value. When TRUE, inidicates that data from the data sync partner can be used during compliance evaluations for Windows. When FALSE, inidicates that data from the data sync partner should not be used during compliance evaluations for Windows. Default value is FALSE.
     * @returns a boolean
     */
    public get windowsEnabled() {
        return this._windowsEnabled;
    };
    /**
     * Sets the windowsEnabled property value. When TRUE, inidicates that data from the data sync partner can be used during compliance evaluations for Windows. When FALSE, inidicates that data from the data sync partner should not be used during compliance evaluations for Windows. Default value is FALSE.
     * @param value Value to set for the windowsEnabled property.
     */
    public set windowsEnabled(value: boolean | undefined) {
        this._windowsEnabled = value;
    };
}
