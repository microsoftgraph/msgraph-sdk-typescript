import {MovePostRequestBody} from './movePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the move method. */
export class MovePostRequestBodyImpl implements AdditionalDataHolder, MovePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The DestinationId property */
    public destinationId?: string | undefined;
    /**
     * Instantiates a new movePostRequestBody and sets the default values.
     * @param movePostRequestBodyParameterValue 
     */
    public constructor(movePostRequestBodyParameterValue?: MovePostRequestBody | undefined) {
        this.additionalData = movePostRequestBodyParameterValue?.additionalData ? movePostRequestBodyParameterValue?.additionalData! : {}
        this.destinationId = movePostRequestBodyParameterValue?.destinationId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "destinationId": n => { this.destinationId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.destinationId){
        writer.writeStringValue("destinationId", this.destinationId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
