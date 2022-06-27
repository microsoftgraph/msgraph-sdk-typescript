import {OmaSettingImpl} from './index';
import {OmaSettingInteger} from './omaSettingInteger';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OmaSettingIntegerImpl extends OmaSettingImpl implements OmaSettingInteger {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Value. */
    public value?: number | undefined;
    /**
     * Instantiates a new OmaSettingInteger and sets the default values.
     * @param omaSettingIntegerParameterValue 
     */
    public constructor(omaSettingIntegerParameterValue?: OmaSettingInteger | undefined) {
        super(omaSettingIntegerParameterValue);
        this.additionalData = omaSettingIntegerParameterValue?.additionalData ? omaSettingIntegerParameterValue?.additionalData! : {};
        this.value = omaSettingIntegerParameterValue?.value;
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
        if(this.value){
            writer.writeNumberValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
