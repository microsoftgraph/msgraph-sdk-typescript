import {UnfavoriteRequestBody} from './unfavoriteRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the unfavorite method.  */
export class UnfavoriteRequestBodyImpl implements AdditionalDataHolder, Parsable, UnfavoriteRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The messageIds property  */
    messageIds?: string[] | undefined;
    /**
     * Instantiates a new unfavoriteRequestBody and sets the default values.
     * @param unfavoriteRequestBodyParameterValue 
     */
    public constructor(unfavoriteRequestBodyParameterValue?: UnfavoriteRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = unfavoriteRequestBodyParameterValue?.additionalData ? {} : unfavoriteRequestBodyParameterValue?.additionalData!
        this.messageIds = unfavoriteRequestBodyParameterValue?.messageIds ;
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
        if(this.messageIds)
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", this.messageIds);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
