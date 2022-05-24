import {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import {DeviceComplianceActionType} from './deviceComplianceActionType';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Scheduled Action Configuration */
export class DeviceComplianceActionItemImpl extends EntityImpl implements DeviceComplianceActionItem, Parsable {
    /** What action to take. Possible values are: noAction, notification, block, retire, wipe, removeResourceAccessProfiles, pushNotification, remoteLock. */
    public actionType?: DeviceComplianceActionType | undefined;
    /** Number of hours to wait till the action will be enforced. Valid values 0 to 8760 */
    public gracePeriodHours?: number | undefined;
    /** A list of group IDs to speicify who to CC this notification message to. */
    public notificationMessageCCList?: string[] | undefined;
    /** What notification Message template to use */
    public notificationTemplateId?: string | undefined;
    /**
     * Instantiates a new deviceComplianceActionItem and sets the default values.
     * @param deviceComplianceActionItemParameterValue 
     */
    public constructor(deviceComplianceActionItemParameterValue?: DeviceComplianceActionItem | undefined) {
        super();
        this.actionType = deviceComplianceActionItemParameterValue?.actionType ;
        this.gracePeriodHours = deviceComplianceActionItemParameterValue?.gracePeriodHours ;
        this.notificationMessageCCList = deviceComplianceActionItemParameterValue?.notificationMessageCCList ;
        this.notificationTemplateId = deviceComplianceActionItemParameterValue?.notificationTemplateId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "actionType": n => { this.actionType = n.getEnumValue<DeviceComplianceActionType>(DeviceComplianceActionType); },
            "gracePeriodHours": n => { this.gracePeriodHours = n.getNumberValue(); },
            "notificationMessageCCList": n => { this.notificationMessageCCList = n.getCollectionOfPrimitiveValues<string>(); },
            "notificationTemplateId": n => { this.notificationTemplateId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.actionType){
        writer.writeEnumValue<DeviceComplianceActionType>("actionType", this.actionType);
        }
        if(this.gracePeriodHours){
        writer.writeNumberValue("gracePeriodHours", this.gracePeriodHours);
        }
        if(this.notificationMessageCCList){
        writer.writeCollectionOfPrimitiveValues<string>("notificationMessageCCList", this.notificationMessageCCList);
        }
        if(this.notificationTemplateId){
        writer.writeStringValue("notificationTemplateId", this.notificationTemplateId);
        }
    };
}
