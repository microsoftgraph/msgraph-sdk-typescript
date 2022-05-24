import {MarkReadPostRequestBody} from './markReadPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the markRead method. */
export class MarkReadPostRequestBodyImpl implements AdditionalDataHolder, MarkReadPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The messageIds property */
    public messageIds?: string[] | undefined;
    /**
     * Instantiates a new markReadPostRequestBody and sets the default values.
     * @param markReadPostRequestBodyParameterValue 
     */
    public constructor(markReadPostRequestBodyParameterValue?: MarkReadPostRequestBody | undefined) {
        this.additionalData = markReadPostRequestBodyParameterValue?.additionalData ? markReadPostRequestBodyParameterValue?.additionalData! : {}
        this.messageIds = markReadPostRequestBodyParameterValue?.messageIds ;
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
