import {createTimeOffItemFromDiscriminatorValue} from './createTimeOffItemFromDiscriminatorValue';
import {ChangeTrackedEntityImpl, TimeOffItemImpl} from './index';
import {TimeOff} from './timeOff';
import {TimeOffItem} from './timeOffItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOffImpl extends ChangeTrackedEntityImpl implements TimeOff {
    /** The draft version of this timeOff that is viewable by managers. Required. */
    private _draftTimeOff?: TimeOffItem | undefined;
    /** The shared version of this timeOff that is viewable by both employees and managers. Required. */
    private _sharedTimeOff?: TimeOffItem | undefined;
    /** ID of the user assigned to the timeOff. Required. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new TimeOff and sets the default values.
     * @param timeOffParameterValue 
     */
    public constructor(timeOffParameterValue?: TimeOff | undefined) {
        super(timeOffParameterValue);
        this._draftTimeOff = timeOffParameterValue?.draftTimeOff;
        this._sharedTimeOff = timeOffParameterValue?.sharedTimeOff;
        this._userId = timeOffParameterValue?.userId;
    };
    /**
     * Gets the draftTimeOff property value. The draft version of this timeOff that is viewable by managers. Required.
     * @returns a TimeOffItemInterface
     */
    public get draftTimeOff() {
        return this._draftTimeOff;
    };
    /**
     * Sets the draftTimeOff property value. The draft version of this timeOff that is viewable by managers. Required.
     * @param value Value to set for the draftTimeOff property.
     */
    public set draftTimeOff(value: TimeOffItem | undefined) {
        if(value) {
            this._draftTimeOff = value instanceof TimeOffItemImpl? value : new TimeOffItemImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "draftTimeOff": n => { this.draftTimeOff = n.getObjectValue<TimeOffItemImpl>(createTimeOffItemFromDiscriminatorValue); },
            "sharedTimeOff": n => { this.sharedTimeOff = n.getObjectValue<TimeOffItemImpl>(createTimeOffItemFromDiscriminatorValue); },
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
        if(this.draftTimeOff){
            writer.writeObjectValue<TimeOffItemImpl>("draftTimeOff", (!this.draftTimeOff || this.draftTimeOff instanceof TimeOffItemImpl? this.draftTimeOff : new TimeOffItemImpl(this.draftTimeOff)));
        }
        if(this.sharedTimeOff){
            writer.writeObjectValue<TimeOffItemImpl>("sharedTimeOff", (!this.sharedTimeOff || this.sharedTimeOff instanceof TimeOffItemImpl? this.sharedTimeOff : new TimeOffItemImpl(this.sharedTimeOff)));
        }
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
    };
    /**
     * Gets the sharedTimeOff property value. The shared version of this timeOff that is viewable by both employees and managers. Required.
     * @returns a TimeOffItemInterface
     */
    public get sharedTimeOff() {
        return this._sharedTimeOff;
    };
    /**
     * Sets the sharedTimeOff property value. The shared version of this timeOff that is viewable by both employees and managers. Required.
     * @param value Value to set for the sharedTimeOff property.
     */
    public set sharedTimeOff(value: TimeOffItem | undefined) {
        if(value) {
            this._sharedTimeOff = value instanceof TimeOffItemImpl? value : new TimeOffItemImpl(value);
        }
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
        if(value) {
            this._userId = value;
        }
    };
}
