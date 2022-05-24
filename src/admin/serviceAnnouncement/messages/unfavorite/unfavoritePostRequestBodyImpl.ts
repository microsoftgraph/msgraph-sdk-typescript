import {UnfavoritePostRequestBody} from './unfavoritePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the unfavorite method. */
export class UnfavoritePostRequestBodyImpl implements AdditionalDataHolder, Parsable, UnfavoritePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The messageIds property */
    public messageIds?: string[] | undefined;
    /**
     * Instantiates a new unfavoritePostRequestBody and sets the default values.
     * @param unfavoritePostRequestBodyParameterValue 
     */
    public constructor(unfavoritePostRequestBodyParameterValue?: UnfavoritePostRequestBody | undefined) {
        this.additionalData = unfavoritePostRequestBodyParameterValue?.additionalData ? unfavoritePostRequestBodyParameterValue?.additionalData! : {}
        this.messageIds = unfavoritePostRequestBodyParameterValue?.messageIds ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "messageIds": n => { this.messageIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.messageIds){
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", this.messageIds);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
