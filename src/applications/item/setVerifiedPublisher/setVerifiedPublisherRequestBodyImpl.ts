import {SetVerifiedPublisherRequestBody} from './setVerifiedPublisherRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setVerifiedPublisher method. */
export class SetVerifiedPublisherRequestBodyImpl implements AdditionalDataHolder, Parsable, SetVerifiedPublisherRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The verifiedPublisherId property */
    verifiedPublisherId?: string | undefined;
    /**
     * Instantiates a new setVerifiedPublisherRequestBody and sets the default values.
     * @param setVerifiedPublisherRequestBodyParameterValue 
     */
    public constructor(setVerifiedPublisherRequestBodyParameterValue?: SetVerifiedPublisherRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = setVerifiedPublisherRequestBodyParameterValue?.additionalData ? {} : setVerifiedPublisherRequestBodyParameterValue?.additionalData!
        this.verifiedPublisherId = setVerifiedPublisherRequestBodyParameterValue?.verifiedPublisherId ;
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
        if(this.verifiedPublisherId)
        writer.writeStringValue("verifiedPublisherId", this.verifiedPublisherId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
