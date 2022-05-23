import {createShiftAvailabilityFromDiscriminatorValue} from './createShiftAvailabilityFromDiscriminatorValue';
import {ChangeTrackedEntityImpl, ShiftAvailabilityImpl} from './index';
import {ShiftAvailability} from './shiftAvailability';
import {ShiftPreferences} from './shiftPreferences';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class ShiftPreferencesImpl extends ChangeTrackedEntityImpl implements Parsable, ShiftPreferences {
    /** Availability of the user to be scheduled for work and its recurrence pattern. */
    public availability?: ShiftAvailability[] | undefined;
    /**
     * Instantiates a new shiftPreferences and sets the default values.
     * @param shiftPreferencesParameterValue 
     */
    public constructor(shiftPreferencesParameterValue?: ShiftPreferences | undefined) {
        super();
        this.availability = shiftPreferencesParameterValue?.availability ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "availability": n => { this.availability = n.getCollectionOfObjectValues<ShiftAvailabilityImpl>(createShiftAvailabilityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.availability && this.availability.length != 0){        const availabilityArrValue: ShiftAvailabilityImpl[] = []; this.availability?.forEach(element => {availabilityArrValue.push(new ShiftAvailabilityImpl(element));});
        writer.writeCollectionOfObjectValues<ShiftAvailabilityImpl>("availability", availabilityArrValue);
        }
    };
}
