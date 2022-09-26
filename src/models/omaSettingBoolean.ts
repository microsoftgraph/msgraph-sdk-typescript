import {OmaSetting} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OmaSettingBoolean extends OmaSetting implements Parsable {
    /** Value. */
    private _value?: boolean | undefined;
    /**
     * Instantiates a new OmaSettingBoolean and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.omaSettingBoolean";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("value", this.value);
    };
    /**
     * Gets the value property value. Value.
     * @returns a boolean
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Value.
     * @param value Value to set for the value property.
     */
    public set value(value: boolean | undefined) {
        this._value = value;
    };
}
