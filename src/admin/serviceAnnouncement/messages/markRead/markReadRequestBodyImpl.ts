import {MarkReadRequestBody} from './markReadRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the markRead method.  */
export class MarkReadRequestBodyImpl implements AdditionalDataHolder, MarkReadRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The messageIds property  */
    messageIds?: string[] | undefined;
    /**
     * Instantiates a new markReadRequestBody and sets the default values.
     * @param markReadRequestBodyParameterValue 
     */
    public constructor(markReadRequestBodyParameterValue?: MarkReadRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = markReadRequestBodyParameterValue?.additionalData ? {} : markReadRequestBodyParameterValue?.additionalData!
        this.messageIds = markReadRequestBodyParameterValue?.messageIds ;
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
