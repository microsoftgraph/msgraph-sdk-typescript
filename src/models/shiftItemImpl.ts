import {createShiftActivityFromDiscriminatorValue} from './createShiftActivityFromDiscriminatorValue';
import {ScheduleEntityImpl, ShiftActivityImpl} from './index';
import {ShiftActivity} from './shiftActivity';
import {ShiftItem} from './shiftItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ShiftItemImpl extends ScheduleEntityImpl implements ShiftItem {
    /** An incremental part of a shift which can cover details of when and where an employee is during their shift. For example, an assignment or a scheduled break or lunch. Required. */
    public activities?: ShiftActivity[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The shift label of the shiftItem. */
    public displayName?: string | undefined;
    /** The shift notes for the shiftItem. */
    public notes?: string | undefined;
    /**
     * Instantiates a new ShiftItem and sets the default values.
     * @param shiftItemParameterValue 
     */
    public constructor(shiftItemParameterValue?: ShiftItem | undefined) {
        super(shiftItemParameterValue);
        const activitiesArrValue: ShiftActivityImpl[] = []; shiftItemParameterValue.activities?.forEach(element => {activitiesArrValue.push(element instanceof ShiftActivityImpl? element : new ShiftActivityImpl(element));});
        this.activities = activitiesArrValue;
        this.additionalData = shiftItemParameterValue?.additionalData ? shiftItemParameterValue?.additionalData! : {};
        this.displayName = shiftItemParameterValue?.displayName;
        this.notes = shiftItemParameterValue?.notes;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activities": n => { this.activities = n.getCollectionOfObjectValues<ShiftActivityImpl>(createShiftActivityFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "notes": n => { this.notes = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activities && this.activities.length != 0){        const activitiesArrValue: ShiftActivityImpl[] = []; this.activities?.forEach(element => {activitiesArrValue.push(element instanceof ShiftActivityImpl? element : new ShiftActivityImpl(element));});
            writer.writeCollectionOfObjectValues<ShiftActivityImpl>("activities", activitiesArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.notes){
            writer.writeStringValue("notes", this.notes);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
