import {OmaSetting} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OmaSettingStringXml extends OmaSetting implements Parsable {
    /** File name associated with the Value property (.xml). */
    private _fileName?: string | undefined;
    /** Value. (UTF8 encoded byte array) */
    private _value?: string | undefined;
    /**
     * Instantiates a new OmaSettingStringXml and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.omaSettingStringXml";
    };
    /**
     * Gets the fileName property value. File name associated with the Value property (.xml).
     * @returns a string
     */
    public get fileName() {
        return this._fileName;
    };
    /**
     * Sets the fileName property value. File name associated with the Value property (.xml).
     * @param value Value to set for the fileName property.
     */
    public set fileName(value: string | undefined) {
        this._fileName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fileName": n => { this.fileName = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("fileName", this.fileName);
        writer.writeStringValue("value", this.value);
    };
    /**
     * Gets the value property value. Value. (UTF8 encoded byte array)
     * @returns a binary
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Value. (UTF8 encoded byte array)
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
