import {OmaSetting} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OmaSettingBase64 extends OmaSetting implements Parsable {
    /** File name associated with the Value property (.cer */
    private _fileName?: string | undefined;
    /** Value. (Base64 encoded string) */
    private _value?: string | undefined;
    /**
     * Instantiates a new OmaSettingBase64 and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.omaSettingBase64";
    };
    /**
     * Gets the fileName property value. File name associated with the Value property (.cer
     * @returns a string
     */
    public get fileName() {
        return this._fileName;
    };
    /**
     * Sets the fileName property value. File name associated with the Value property (.cer
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
     * Gets the value property value. Value. (Base64 encoded string)
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Value. (Base64 encoded string)
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
