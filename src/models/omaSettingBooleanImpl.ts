import {OmaSettingImpl} from './index';
import {OmaSettingBoolean} from './omaSettingBoolean';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OmaSettingBooleanImpl extends OmaSettingImpl implements OmaSettingBoolean {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Value. */
    public value?: boolean | undefined;
    /**
     * Instantiates a new OmaSettingBoolean and sets the default values.
     * @param omaSettingBooleanParameterValue 
     */
    public constructor(omaSettingBooleanParameterValue?: OmaSettingBoolean | undefined) {
        super(omaSettingBooleanParameterValue);
        this.additionalData = omaSettingBooleanParameterValue?.additionalData ? omaSettingBooleanParameterValue?.additionalData! : {};
        this.value = omaSettingBooleanParameterValue?.value;
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
        if(this.value){
            writer.writeBooleanValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
