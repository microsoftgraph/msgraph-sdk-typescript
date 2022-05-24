import {DeviceManagementPartner} from './deviceManagementPartner';
import {DeviceManagementPartnerAppType} from './deviceManagementPartnerAppType';
import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Entity which represents a connection to device management partner. */
export class DeviceManagementPartnerImpl extends EntityImpl implements DeviceManagementPartner, Parsable {
    /** Partner display name */
    public displayName?: string | undefined;
    /** Whether device management partner is configured or not */
    public isConfigured?: boolean | undefined;
    /** Timestamp of last heartbeat after admin enabled option Connect to Device management Partner */
    public lastHeartbeatDateTime?: Date | undefined;
    /** Partner App type. Possible values are: unknown, singleTenantApp, multiTenantApp. */
    public partnerAppType?: DeviceManagementPartnerAppType | undefined;
    /** Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive. */
    public partnerState?: DeviceManagementPartnerTenantState | undefined;
    /** Partner Single tenant App id */
    public singleTenantAppId?: string | undefined;
    /** DateTime in UTC when PartnerDevices will be marked as NonCompliant */
    public whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime?: Date | undefined;
    /** DateTime in UTC when PartnerDevices will be removed */
    public whenPartnerDevicesWillBeRemovedDateTime?: Date | undefined;
    /**
     * Instantiates a new deviceManagementPartner and sets the default values.
     * @param deviceManagementPartnerParameterValue 
     */
    public constructor(deviceManagementPartnerParameterValue?: DeviceManagementPartner | undefined) {
        super();
        this.displayName = deviceManagementPartnerParameterValue?.displayName ;
        this.isConfigured = deviceManagementPartnerParameterValue?.isConfigured ;
        this.lastHeartbeatDateTime = deviceManagementPartnerParameterValue?.lastHeartbeatDateTime ;
        this.partnerAppType = deviceManagementPartnerParameterValue?.partnerAppType ;
        this.partnerState = deviceManagementPartnerParameterValue?.partnerState ;
        this.singleTenantAppId = deviceManagementPartnerParameterValue?.singleTenantAppId ;
        this.whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime = deviceManagementPartnerParameterValue?.whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime ;
        this.whenPartnerDevicesWillBeRemovedDateTime = deviceManagementPartnerParameterValue?.whenPartnerDevicesWillBeRemovedDateTime ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isConfigured){
        writer.writeBooleanValue("isConfigured", this.isConfigured);
        }
        if(this.lastHeartbeatDateTime){
        writer.writeDateValue("lastHeartbeatDateTime", this.lastHeartbeatDateTime);
        }
        if(this.partnerAppType){
        writer.writeEnumValue<DeviceManagementPartnerAppType>("partnerAppType", this.partnerAppType);
        }
        if(this.partnerState){
        writer.writeEnumValue<DeviceManagementPartnerTenantState>("partnerState", this.partnerState);
        }
        if(this.singleTenantAppId){
        writer.writeStringValue("singleTenantAppId", this.singleTenantAppId);
        }
        if(this.whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime){
        writer.writeDateValue("whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime", this.whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime);
        }
        if(this.whenPartnerDevicesWillBeRemovedDateTime){
        writer.writeDateValue("whenPartnerDevicesWillBeRemovedDateTime", this.whenPartnerDevicesWillBeRemovedDateTime);
        }
    };
}
