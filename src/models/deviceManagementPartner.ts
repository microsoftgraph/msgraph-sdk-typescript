import {DeviceManagementPartnerAppType} from './deviceManagementPartnerAppType';
import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Entity which represents a connection to device management partner. */
export class DeviceManagementPartner extends Entity implements Parsable {
    /** Partner display name */
    private _displayName?: string | undefined;
    /** Whether device management partner is configured or not */
    private _isConfigured?: boolean | undefined;
    /** Timestamp of last heartbeat after admin enabled option Connect to Device management Partner */
    private _lastHeartbeatDateTime?: Date | undefined;
    /** Partner App Type. */
    private _partnerAppType?: DeviceManagementPartnerAppType | undefined;
    /** Partner state of this tenant. */
    private _partnerState?: DeviceManagementPartnerTenantState | undefined;
    /** Partner Single tenant App id */
    private _singleTenantAppId?: string | undefined;
    /** DateTime in UTC when PartnerDevices will be marked as NonCompliant */
    private _whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime?: Date | undefined;
    /** DateTime in UTC when PartnerDevices will be removed */
    private _whenPartnerDevicesWillBeRemovedDateTime?: Date | undefined;
    /**
     * Instantiates a new deviceManagementPartner and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.deviceManagementPartner";
    };
    /**
     * Gets the displayName property value. Partner display name
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Partner display name
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isConfigured": n => { this.isConfigured = n.getBooleanValue(); },
            "lastHeartbeatDateTime": n => { this.lastHeartbeatDateTime = n.getDateValue(); },
            "partnerAppType": n => { this.partnerAppType = n.getEnumValue<DeviceManagementPartnerAppType>(DeviceManagementPartnerAppType); },
            "partnerState": n => { this.partnerState = n.getEnumValue<DeviceManagementPartnerTenantState>(DeviceManagementPartnerTenantState); },
            "singleTenantAppId": n => { this.singleTenantAppId = n.getStringValue(); },
            "whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime": n => { this.whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime = n.getDateValue(); },
            "whenPartnerDevicesWillBeRemovedDateTime": n => { this.whenPartnerDevicesWillBeRemovedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the isConfigured property value. Whether device management partner is configured or not
     * @returns a boolean
     */
    public get isConfigured() {
        return this._isConfigured;
    };
    /**
     * Sets the isConfigured property value. Whether device management partner is configured or not
     * @param value Value to set for the isConfigured property.
     */
    public set isConfigured(value: boolean | undefined) {
        this._isConfigured = value;
    };
    /**
     * Gets the lastHeartbeatDateTime property value. Timestamp of last heartbeat after admin enabled option Connect to Device management Partner
     * @returns a Date
     */
    public get lastHeartbeatDateTime() {
        return this._lastHeartbeatDateTime;
    };
    /**
     * Sets the lastHeartbeatDateTime property value. Timestamp of last heartbeat after admin enabled option Connect to Device management Partner
     * @param value Value to set for the lastHeartbeatDateTime property.
     */
    public set lastHeartbeatDateTime(value: Date | undefined) {
        this._lastHeartbeatDateTime = value;
    };
    /**
     * Gets the partnerAppType property value. Partner App Type.
     * @returns a deviceManagementPartnerAppType
     */
    public get partnerAppType() {
        return this._partnerAppType;
    };
    /**
     * Sets the partnerAppType property value. Partner App Type.
     * @param value Value to set for the partnerAppType property.
     */
    public set partnerAppType(value: DeviceManagementPartnerAppType | undefined) {
        this._partnerAppType = value;
    };
    /**
     * Gets the partnerState property value. Partner state of this tenant.
     * @returns a deviceManagementPartnerTenantState
     */
    public get partnerState() {
        return this._partnerState;
    };
    /**
     * Sets the partnerState property value. Partner state of this tenant.
     * @param value Value to set for the partnerState property.
     */
    public set partnerState(value: DeviceManagementPartnerTenantState | undefined) {
        this._partnerState = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isConfigured", this.isConfigured);
        writer.writeDateValue("lastHeartbeatDateTime", this.lastHeartbeatDateTime);
        writer.writeEnumValue<DeviceManagementPartnerAppType>("partnerAppType", this.partnerAppType);
        writer.writeEnumValue<DeviceManagementPartnerTenantState>("partnerState", this.partnerState);
        writer.writeStringValue("singleTenantAppId", this.singleTenantAppId);
        writer.writeDateValue("whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime", this.whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime);
        writer.writeDateValue("whenPartnerDevicesWillBeRemovedDateTime", this.whenPartnerDevicesWillBeRemovedDateTime);
    };
    /**
     * Gets the singleTenantAppId property value. Partner Single tenant App id
     * @returns a string
     */
    public get singleTenantAppId() {
        return this._singleTenantAppId;
    };
    /**
     * Sets the singleTenantAppId property value. Partner Single tenant App id
     * @param value Value to set for the singleTenantAppId property.
     */
    public set singleTenantAppId(value: string | undefined) {
        this._singleTenantAppId = value;
    };
    /**
     * Gets the whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime property value. DateTime in UTC when PartnerDevices will be marked as NonCompliant
     * @returns a Date
     */
    public get whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime() {
        return this._whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime;
    };
    /**
     * Sets the whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime property value. DateTime in UTC when PartnerDevices will be marked as NonCompliant
     * @param value Value to set for the whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime property.
     */
    public set whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime(value: Date | undefined) {
        this._whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime = value;
    };
    /**
     * Gets the whenPartnerDevicesWillBeRemovedDateTime property value. DateTime in UTC when PartnerDevices will be removed
     * @returns a Date
     */
    public get whenPartnerDevicesWillBeRemovedDateTime() {
        return this._whenPartnerDevicesWillBeRemovedDateTime;
    };
    /**
     * Sets the whenPartnerDevicesWillBeRemovedDateTime property value. DateTime in UTC when PartnerDevices will be removed
     * @param value Value to set for the whenPartnerDevicesWillBeRemovedDateTime property.
     */
    public set whenPartnerDevicesWillBeRemovedDateTime(value: Date | undefined) {
        this._whenPartnerDevicesWillBeRemovedDateTime = value;
    };
}
