import {createShiftActivityFromDiscriminatorValue} from './createShiftActivityFromDiscriminatorValue';
import {ScheduleEntityImpl, ShiftActivityImpl} from './index';
import {ShiftActivity} from './shiftActivity';
import {ShiftItem} from './shiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class ShiftItemImpl extends ScheduleEntityImpl implements Parsable, ShiftItem {
    /** An incremental part of a shift which can cover details of when and where an employee is during their shift. For example, an assignment or a scheduled break or lunch. Required. */
    public activities?: ShiftActivity[] | undefined;
    /** The shift label of the shiftItem. */
    public displayName?: string | undefined;
    /** The shift notes for the shiftItem. */
    public notes?: string | undefined;
    /**
     * Instantiates a new shiftItem and sets the default values.
     * @param shiftItemParameterValue 
     */
    public constructor(shiftItemParameterValue?: ShiftItem | undefined) {
        super();
        this.activities = shiftItemParameterValue?.activities ;
        this.displayName = shiftItemParameterValue?.displayName ;
        this.notes = shiftItemParameterValue?.notes ;
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
        if(this.activities && this.activities.length != 0){        const activitiesArrValue: ShiftActivityImpl[] = []; this.activities?.forEach(element => {activitiesArrValue.push(new ShiftActivityImpl(element));});
        writer.writeCollectionOfObjectValues<ShiftActivityImpl>("activities", activitiesArrValue);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.notes){
        writer.writeStringValue("notes", this.notes);
        }
    };
}
