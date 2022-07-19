import {Entity} from './index';
import {MobileThreatPartnerTenantState} from './mobileThreatPartnerTenantState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Entity which represents a connection to Mobile threat defense partner. */
export class MobileThreatDefenseConnector extends Entity implements Parsable {
    /** For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant */
    private _androidDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    /** For Android, set whether data from the data sync partner should be used during compliance evaluations */
    private _androidEnabled?: boolean | undefined;
    /** For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant */
    private _iosDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    /** For IOS, get or set whether data from the data sync partner should be used during compliance evaluations */
    private _iosEnabled?: boolean | undefined;
    /** DateTime of last Heartbeat recieved from the Data Sync Partner */
    private _lastHeartbeatDateTime?: Date | undefined;
    /** Partner state of this tenant. */
    private _partnerState?: MobileThreatPartnerTenantState | undefined;
    /** Get or Set days the per tenant tolerance to unresponsiveness for this partner integration */
    private _partnerUnresponsivenessThresholdInDays?: number | undefined;
    /** Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the Data Sync Partner */
    private _partnerUnsupportedOsVersionBlocked?: boolean | undefined;
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
     * Instantiates a new mobileThreatDefenseConnector and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.mobileThreatDefenseConnector";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "androidDeviceBlockedOnMissingPartnerData": n => { this.androidDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); },
            "androidEnabled": n => { this.androidEnabled = n.getBooleanValue(); },
            "iosDeviceBlockedOnMissingPartnerData": n => { this.iosDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); },
            "iosEnabled": n => { this.iosEnabled = n.getBooleanValue(); },
            "lastHeartbeatDateTime": n => { this.lastHeartbeatDateTime = n.getDateValue(); },
            "partnerState": n => { this.partnerState = n.getEnumValue<MobileThreatPartnerTenantState>(MobileThreatPartnerTenantState); },
            "partnerUnresponsivenessThresholdInDays": n => { this.partnerUnresponsivenessThresholdInDays = n.getNumberValue(); },
            "partnerUnsupportedOsVersionBlocked": n => { this.partnerUnsupportedOsVersionBlocked = n.getBooleanValue(); },
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
        writer.writeBooleanValue("androidDeviceBlockedOnMissingPartnerData", this.androidDeviceBlockedOnMissingPartnerData);
        writer.writeBooleanValue("androidEnabled", this.androidEnabled);
        writer.writeBooleanValue("iosDeviceBlockedOnMissingPartnerData", this.iosDeviceBlockedOnMissingPartnerData);
        writer.writeBooleanValue("iosEnabled", this.iosEnabled);
        writer.writeDateValue("lastHeartbeatDateTime", this.lastHeartbeatDateTime);
        writer.writeEnumValue<MobileThreatPartnerTenantState>("partnerState", this.partnerState);
        writer.writeNumberValue("partnerUnresponsivenessThresholdInDays", this.partnerUnresponsivenessThresholdInDays);
        writer.writeBooleanValue("partnerUnsupportedOsVersionBlocked", this.partnerUnsupportedOsVersionBlocked);
    };
}
