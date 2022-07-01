import {createShiftAvailabilityFromDiscriminatorValue} from './createShiftAvailabilityFromDiscriminatorValue';
import {ChangeTrackedEntityImpl, ShiftAvailabilityImpl} from './index';
import {ShiftAvailability} from './shiftAvailability';
import {ShiftPreferences} from './shiftPreferences';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ShiftPreferencesImpl extends ChangeTrackedEntityImpl implements ShiftPreferences {
    /** Availability of the user to be scheduled for work and its recurrence pattern. */
    private _availability?: ShiftAvailability[] | undefined;
    /**
     * Gets the availability property value. Availability of the user to be scheduled for work and its recurrence pattern.
     * @returns a ShiftAvailabilityInterface
     */
    public get availability() {
        return this._availability;
    };
    /**
     * Sets the availability property value. Availability of the user to be scheduled for work and its recurrence pattern.
     * @param value Value to set for the availability property.
     */
    public set availability(value: ShiftAvailability[] | undefined) {
        if(value) {
            const availabilityArrValue: ShiftAvailabilityImpl[] = [];
            this.availability?.forEach(element => {
                availabilityArrValue.push((element instanceof ShiftAvailabilityImpl? element as ShiftAvailabilityImpl:new ShiftAvailabilityImpl(element)));
            });
            this._availability = availabilityArrValue;
        }
    };
    /**
     * Instantiates a new ShiftPreferences and sets the default values.
     * @param shiftPreferencesParameterValue 
     */
    public constructor(shiftPreferencesParameterValue?: ShiftPreferences | undefined) {
        super(shiftPreferencesParameterValue);
        this._availability = shiftPreferencesParameterValue?.availability;
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
        if(this.availability && this.availability.length != 0){        const availabilityArrValue: ShiftAvailabilityImpl[] = [];
        this.availability?.forEach(element => {
            availabilityArrValue.push((element instanceof ShiftAvailabilityImpl? element as ShiftAvailabilityImpl:new ShiftAvailabilityImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ShiftAvailabilityImpl>("availability", availabilityArrValue);
        }
    };
}
