import {AdminMember1, ChangeTrackedEntity, TimeOffItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOff extends ChangeTrackedEntity implements Parsable {
    /** The draft version of this timeOff that is viewable by managers. Required. */
    private _draftTimeOff?: TimeOffItem | AdminMember1 | undefined;
    /** The shared version of this timeOff that is viewable by both employees and managers. Required. */
    private _sharedTimeOff?: TimeOffItem | AdminMember1 | undefined;
    /** ID of the user assigned to the timeOff. Required. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new TimeOff and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the draftTimeOff property value. The draft version of this timeOff that is viewable by managers. Required.
     * @returns a admin
     */
    public get draftTimeOff() {
        return this._draftTimeOff;
    };
    /**
     * Sets the draftTimeOff property value. The draft version of this timeOff that is viewable by managers. Required.
     * @param value Value to set for the draftTimeOff property.
     */
    public set draftTimeOff(value: TimeOffItem | AdminMember1 | undefined) {
        this._draftTimeOff = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "draftTimeOff": n => { this.draftTimeOff = n.getObjectValue<TimeOffItem>(createTimeOffItemFromDiscriminatorValue); },
            "sharedTimeOff": n => { this.sharedTimeOff = n.getObjectValue<TimeOffItem>(createTimeOffItemFromDiscriminatorValue); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TimeOffItem>("draftTimeOff", this.draftTimeOff);
        writer.writeObjectValue<TimeOffItem>("sharedTimeOff", this.sharedTimeOff);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the sharedTimeOff property value. The shared version of this timeOff that is viewable by both employees and managers. Required.
     * @returns a admin
     */
    public get sharedTimeOff() {
        return this._sharedTimeOff;
    };
    /**
     * Sets the sharedTimeOff property value. The shared version of this timeOff that is viewable by both employees and managers. Required.
     * @param value Value to set for the sharedTimeOff property.
     */
    public set sharedTimeOff(value: TimeOffItem | AdminMember1 | undefined) {
        this._sharedTimeOff = value;
    };
    /**
     * Gets the userId property value. ID of the user assigned to the timeOff. Required.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. ID of the user assigned to the timeOff. Required.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
