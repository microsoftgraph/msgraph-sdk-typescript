import {UnmutePostRequestBody} from './unmutePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the unmute method. */
export class UnmutePostRequestBodyImpl implements AdditionalDataHolder, Parsable, UnmutePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The clientContext property */
    public clientContext?: string | undefined;
    /**
     * Instantiates a new unmutePostRequestBody and sets the default values.
     * @param unmutePostRequestBodyParameterValue 
     */
    public constructor(unmutePostRequestBodyParameterValue?: UnmutePostRequestBody | undefined) {
        this.additionalData = unmutePostRequestBodyParameterValue?.additionalData ? unmutePostRequestBodyParameterValue?.additionalData! : {}
        this.clientContext = unmutePostRequestBodyParameterValue?.clientContext ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "clientContext": n => { this.clientContext = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.clientContext){
        writer.writeStringValue("clientContext", this.clientContext);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
