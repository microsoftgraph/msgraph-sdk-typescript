import {OmaSettingImpl} from './index';
import {OmaSettingDateTime} from './omaSettingDateTime';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OmaSettingDateTimeImpl extends OmaSettingImpl implements OmaSettingDateTime {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Value. */
    public value?: Date | undefined;
    /**
     * Instantiates a new OmaSettingDateTime and sets the default values.
     * @param omaSettingDateTimeParameterValue 
     */
    public constructor(omaSettingDateTimeParameterValue?: OmaSettingDateTime | undefined) {
        super(omaSettingDateTimeParameterValue);
        this.additionalData = omaSettingDateTimeParameterValue?.additionalData ? omaSettingDateTimeParameterValue?.additionalData! : {};
        this.value = omaSettingDateTimeParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getDateValue(); },
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
            writer.writeDateValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
