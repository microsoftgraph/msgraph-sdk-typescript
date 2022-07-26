import {OmaSetting} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OmaSettingFloatingPoint extends OmaSetting implements Parsable {
    /** Value. */
    private _value?: number | undefined;
    /**
     * Instantiates a new OmaSettingFloatingPoint and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.omaSettingFloatingPoint";
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
     * Gets the value property value. Value.
     * @returns a float
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Value.
     * @param value Value to set for the value property.
     */
    public set value(value: number | undefined) {
        this._value = value;
    };
}
