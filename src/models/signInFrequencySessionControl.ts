import {ConditionalAccessSessionControl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignInFrequencySessionControl extends ConditionalAccessSessionControl implements Parsable {
    /** The number of days or hours. */
    private _value?: number | undefined;
    /**
     * Instantiates a new SignInFrequencySessionControl and sets the default values.
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
            "value": n => { this.value = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("value", this.value);
    };
    /**
     * Gets the value property value. The number of days or hours.
     * @returns a integer
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The number of days or hours.
     * @param value Value to set for the value property.
     */
    public set value(value: number | undefined) {
        this._value = value;
    };
}
