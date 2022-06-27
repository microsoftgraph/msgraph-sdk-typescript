import {OmaSettingImpl} from './index';
import {OmaSettingString} from './omaSettingString';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OmaSettingStringImpl extends OmaSettingImpl implements OmaSettingString {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Value. */
    public value?: string | undefined;
    /**
     * Instantiates a new OmaSettingString and sets the default values.
     * @param omaSettingStringParameterValue 
     */
    public constructor(omaSettingStringParameterValue?: OmaSettingString | undefined) {
        super(omaSettingStringParameterValue);
        this.additionalData = omaSettingStringParameterValue?.additionalData ? omaSettingStringParameterValue?.additionalData! : {};
        this.value = omaSettingStringParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
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
        if(this.value){
            writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
