import {createShiftItemFromDiscriminatorValue} from './createShiftItemFromDiscriminatorValue';
import {ChangeTrackedEntityImpl, ShiftItemImpl} from './index';
import {Shift} from './shift';
import {ShiftItem} from './shiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class ShiftImpl extends ChangeTrackedEntityImpl implements Parsable, Shift {
    /** The draft version of this shift that is viewable by managers. Required. */
    public draftShift?: ShiftItem | undefined;
    /** ID of the scheduling group the shift is part of. Required. */
    public schedulingGroupId?: string | undefined;
    /** The shared version of this shift that is viewable by both employees and managers. Required. */
    public sharedShift?: ShiftItem | undefined;
    /** ID of the user assigned to the shift. Required. */
    public userId?: string | undefined;
    /**
     * Instantiates a new shift and sets the default values.
     * @param shiftParameterValue 
     */
    public constructor(shiftParameterValue?: Shift | undefined) {
        super();
        this.draftShift = shiftParameterValue?.draftShift ;
        this.schedulingGroupId = shiftParameterValue?.schedulingGroupId ;
        this.sharedShift = shiftParameterValue?.sharedShift ;
        this.userId = shiftParameterValue?.userId ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.draftShift){
        writer.writeObjectValue<ShiftItemImpl>("draftShift", new ShiftItemImpl(this.draftShift));
        }
        if(this.schedulingGroupId){
        writer.writeStringValue("schedulingGroupId", this.schedulingGroupId);
        }
        if(this.sharedShift){
        writer.writeObjectValue<ShiftItemImpl>("sharedShift", new ShiftItemImpl(this.sharedShift));
        }
        if(this.userId){
        writer.writeStringValue("userId", this.userId);
        }
    };
}
