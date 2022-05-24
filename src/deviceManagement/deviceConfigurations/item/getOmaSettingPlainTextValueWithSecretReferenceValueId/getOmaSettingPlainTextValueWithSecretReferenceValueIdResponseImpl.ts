import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse} from './getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getOmaSettingPlainTextValue method. */
export class GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseImpl implements AdditionalDataHolder, GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: string | undefined;
    /**
     * Instantiates a new getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse and sets the default values.
     * @param getOmaSettingPlainTextValueWithSecretReferenceValueIdResponseParameterValue 
     */
    public constructor(getOmaSettingPlainTextValueWithSecretReferenceValueIdResponseParameterValue?: GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse | undefined) {
        this.additionalData = getOmaSettingPlainTextValueWithSecretReferenceValueIdResponseParameterValue?.additionalData ? getOmaSettingPlainTextValueWithSecretReferenceValueIdResponseParameterValue?.additionalData! : {}
        this.value = getOmaSettingPlainTextValueWithSecretReferenceValueIdResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value){
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
