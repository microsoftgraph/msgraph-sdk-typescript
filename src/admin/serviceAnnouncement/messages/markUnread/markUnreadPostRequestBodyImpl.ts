import {MarkUnreadPostRequestBody} from './markUnreadPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the markUnread method. */
export class MarkUnreadPostRequestBodyImpl implements AdditionalDataHolder, MarkUnreadPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The messageIds property */
    public messageIds?: string[] | undefined;
    /**
     * Instantiates a new markUnreadPostRequestBody and sets the default values.
     * @param markUnreadPostRequestBodyParameterValue 
     */
    public constructor(markUnreadPostRequestBodyParameterValue?: MarkUnreadPostRequestBody | undefined) {
        this.additionalData = markUnreadPostRequestBodyParameterValue?.additionalData ? markUnreadPostRequestBodyParameterValue?.additionalData! : {}
        this.messageIds = markUnreadPostRequestBodyParameterValue?.messageIds ;
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
