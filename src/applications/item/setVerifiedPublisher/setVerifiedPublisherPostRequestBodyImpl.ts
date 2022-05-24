import {SetVerifiedPublisherPostRequestBody} from './setVerifiedPublisherPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setVerifiedPublisher method. */
export class SetVerifiedPublisherPostRequestBodyImpl implements AdditionalDataHolder, Parsable, SetVerifiedPublisherPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The verifiedPublisherId property */
    public verifiedPublisherId?: string | undefined;
    /**
     * Instantiates a new setVerifiedPublisherPostRequestBody and sets the default values.
     * @param setVerifiedPublisherPostRequestBodyParameterValue 
     */
    public constructor(setVerifiedPublisherPostRequestBodyParameterValue?: SetVerifiedPublisherPostRequestBody | undefined) {
        this.additionalData = setVerifiedPublisherPostRequestBodyParameterValue?.additionalData ? setVerifiedPublisherPostRequestBodyParameterValue?.additionalData! : {}
        this.verifiedPublisherId = setVerifiedPublisherPostRequestBodyParameterValue?.verifiedPublisherId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "verifiedPublisherId": n => { this.verifiedPublisherId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.verifiedPublisherId){
        writer.writeStringValue("verifiedPublisherId", this.verifiedPublisherId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
