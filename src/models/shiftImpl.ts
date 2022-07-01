import {createShiftItemFromDiscriminatorValue} from './createShiftItemFromDiscriminatorValue';
import {ChangeTrackedEntityImpl, ShiftItemImpl} from './index';
import {Shift} from './shift';
import {ShiftItem} from './shiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ShiftImpl extends ChangeTrackedEntityImpl implements Shift {
    /** The draft version of this shift that is viewable by managers. Required. */
    private _draftShift?: ShiftItem | undefined;
    /** ID of the scheduling group the shift is part of. Required. */
    private _schedulingGroupId?: string | undefined;
    /** The shared version of this shift that is viewable by both employees and managers. Required. */
    private _sharedShift?: ShiftItem | undefined;
    /** ID of the user assigned to the shift. Required. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new Shift and sets the default values.
     * @param shiftParameterValue 
     */
    public constructor(shiftParameterValue?: Shift | undefined) {
        super(shiftParameterValue);
        this._draftShift = shiftParameterValue?.draftShift;
        this._schedulingGroupId = shiftParameterValue?.schedulingGroupId;
        this._sharedShift = shiftParameterValue?.sharedShift;
        this._userId = shiftParameterValue?.userId;
    };
    /**
     * Gets the draftShift property value. The draft version of this shift that is viewable by managers. Required.
     * @returns a ShiftItemInterface
     */
    public get draftShift() {
        return this._draftShift;
    };
    /**
     * Sets the draftShift property value. The draft version of this shift that is viewable by managers. Required.
     * @param value Value to set for the draftShift property.
     */
    public set draftShift(value: ShiftItem | undefined) {
        if(value) {
            this._draftShift = value instanceof ShiftItemImpl? value as ShiftItemImpl: new ShiftItemImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "draftShift": n => { this.draftShift = n.getObjectValue<ShiftItemImpl>(createShiftItemFromDiscriminatorValue); },
            "schedulingGroupId": n => { this.schedulingGroupId = n.getStringValue(); },
            "sharedShift": n => { this.sharedShift = n.getObjectValue<ShiftItemImpl>(createShiftItemFromDiscriminatorValue); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Gets the schedulingGroupId property value. ID of the scheduling group the shift is part of. Required.
     * @returns a string
     */
    public get schedulingGroupId() {
        return this._schedulingGroupId;
    };
    /**
     * Sets the schedulingGroupId property value. ID of the scheduling group the shift is part of. Required.
     * @param value Value to set for the schedulingGroupId property.
     */
    public set schedulingGroupId(value: string | undefined) {
        if(value) {
            this._schedulingGroupId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.draftShift){
            writer.writeObjectValue<ShiftItemImpl>("draftShift", (this.draftShift instanceof ShiftItemImpl? this.draftShift as ShiftItemImpl: new ShiftItemImpl(this.draftShift)));
        }
        if(this.schedulingGroupId){
            writer.writeStringValue("schedulingGroupId", this.schedulingGroupId);
        }
        if(this.sharedShift){
            writer.writeObjectValue<ShiftItemImpl>("sharedShift", (this.sharedShift instanceof ShiftItemImpl? this.sharedShift as ShiftItemImpl: new ShiftItemImpl(this.sharedShift)));
        }
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
    };
    /**
     * Gets the sharedShift property value. The shared version of this shift that is viewable by both employees and managers. Required.
     * @returns a ShiftItemInterface
     */
    public get sharedShift() {
        return this._sharedShift;
    };
    /**
     * Sets the sharedShift property value. The shared version of this shift that is viewable by both employees and managers. Required.
     * @param value Value to set for the sharedShift property.
     */
    public set sharedShift(value: ShiftItem | undefined) {
        if(value) {
            this._sharedShift = value instanceof ShiftItemImpl? value as ShiftItemImpl: new ShiftItemImpl(value);
        }
    };
    /**
     * Gets the userId property value. ID of the user assigned to the shift. Required.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. ID of the user assigned to the shift. Required.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        if(value) {
            this._userId = value;
        }
    };
}
