import {createShiftAvailabilityFromDiscriminatorValue} from './createShiftAvailabilityFromDiscriminatorValue';
import {ChangeTrackedEntity, ShiftAvailability} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ShiftPreferences extends ChangeTrackedEntity implements Parsable {
    /** Availability of the user to be scheduled for work and its recurrence pattern. */
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
     * Instantiates a new ShiftPreferences and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.shiftPreferences";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "availability": n => { this.availability = n.getCollectionOfObjectValues<ShiftAvailability>(createShiftAvailabilityFromDiscriminatorValue); },
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
