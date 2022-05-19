import {ShiftItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class OpenShiftItem extends ShiftItem implements Parsable {
    /** Count of the number of slots for the given open shift. */
    private _openSlotCount?: number | undefined;
    /**
     * Instantiates a new openShiftItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "openSlotCount": n => { this.openSlotCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the openSlotCount property value. Count of the number of slots for the given open shift.
     * @returns a integer
     */
    public get openSlotCount() {
        return this._openSlotCount;
    };
    /**
     * Sets the openSlotCount property value. Count of the number of slots for the given open shift.
     * @param value Value to set for the openSlotCount property.
     */
    public set openSlotCount(value: number | undefined) {
        this._openSlotCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("openSlotCount", this.openSlotCount);
    };
}
