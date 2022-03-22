import {createShiftAvailabilityFromDiscriminatorValue} from './createShiftAvailabilityFromDiscriminatorValue';
import {ChangeTrackedEntity, ShiftAvailability} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ShiftPreferences extends ChangeTrackedEntity implements Parsable {
    /** Availability of the user to be scheduled for work and its recurrence pattern.  */
    private _availability?: ShiftAvailability[] | undefined;
    /**
     * Gets the availability property value. Availability of the user to be scheduled for work and its recurrence pattern.
     * @returns a shiftAvailability
     */
    public get availability() {
        return this._availability;
    };
    /**
     * Sets the availability property value. Availability of the user to be scheduled for work and its recurrence pattern.
     * @param value Value to set for the availability property.
     */
    public set availability(value: ShiftAvailability[] | undefined) {
        this._availability = value;
    };
    /**
     * Instantiates a new shiftPreferences and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "availability": (o, n) => { (o as unknown as ShiftPreferences).availability = n.getCollectionOfObjectValues<ShiftAvailability>(createShiftAvailabilityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ShiftAvailability>("availability", this.availability);
    };
}
