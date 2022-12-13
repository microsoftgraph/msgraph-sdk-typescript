import {DeviceComplianceActionType} from './deviceComplianceActionType';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Scheduled Action Configuration
 */
export class DeviceComplianceActionItem extends Entity implements Parsable {
    /** Scheduled Action Type Enum */
    private _actionType?: DeviceComplianceActionType | undefined;
    /** Number of hours to wait till the action will be enforced. Valid values 0 to 8760 */
    private _gracePeriodHours?: number | undefined;
    /** A list of group IDs to speicify who to CC this notification message to. */
    private _notificationMessageCCList?: string[] | undefined;
    /** What notification Message template to use */
    private _notificationTemplateId?: string | undefined;
    /**
     * Gets the actionType property value. Scheduled Action Type Enum
     * @returns a deviceComplianceActionType
     */
    public get actionType() {
        return this._actionType;
    };
    /**
     * Sets the actionType property value. Scheduled Action Type Enum
     * @param value Value to set for the actionType property.
     */
    public set actionType(value: DeviceComplianceActionType | undefined) {
        this._actionType = value;
    };
    /**
     * Instantiates a new deviceComplianceActionItem and sets the default values.
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
            "actionType": n => { this.actionType = n.getEnumValue<DeviceComplianceActionType>(DeviceComplianceActionType); },
            "gracePeriodHours": n => { this.gracePeriodHours = n.getNumberValue(); },
            "notificationMessageCCList": n => { this.notificationMessageCCList = n.getCollectionOfPrimitiveValues<string>(); },
            "notificationTemplateId": n => { this.notificationTemplateId = n.getStringValue(); },
        };
    };
    /**
     * Gets the gracePeriodHours property value. Number of hours to wait till the action will be enforced. Valid values 0 to 8760
     * @returns a integer
     */
    public get gracePeriodHours() {
        return this._gracePeriodHours;
    };
    /**
     * Sets the gracePeriodHours property value. Number of hours to wait till the action will be enforced. Valid values 0 to 8760
     * @param value Value to set for the gracePeriodHours property.
     */
    public set gracePeriodHours(value: number | undefined) {
        this._gracePeriodHours = value;
    };
    /**
     * Gets the notificationMessageCCList property value. A list of group IDs to speicify who to CC this notification message to.
     * @returns a string
     */
    public get notificationMessageCCList() {
        return this._notificationMessageCCList;
    };
    /**
     * Sets the notificationMessageCCList property value. A list of group IDs to speicify who to CC this notification message to.
     * @param value Value to set for the notificationMessageCCList property.
     */
    public set notificationMessageCCList(value: string[] | undefined) {
        this._notificationMessageCCList = value;
    };
    /**
     * Gets the notificationTemplateId property value. What notification Message template to use
     * @returns a string
     */
    public get notificationTemplateId() {
        return this._notificationTemplateId;
    };
    /**
     * Sets the notificationTemplateId property value. What notification Message template to use
     * @param value Value to set for the notificationTemplateId property.
     */
    public set notificationTemplateId(value: string | undefined) {
        this._notificationTemplateId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<DeviceComplianceActionType>("actionType", this.actionType);
        writer.writeNumberValue("gracePeriodHours", this.gracePeriodHours);
        writer.writeCollectionOfPrimitiveValues<string>("notificationMessageCCList", this.notificationMessageCCList);
        writer.writeStringValue("notificationTemplateId", this.notificationTemplateId);
    };
}
