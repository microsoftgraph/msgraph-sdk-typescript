import {ArchiveRequestBody} from './archiveRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the archive method. */
export class ArchiveRequestBodyImpl implements AdditionalDataHolder, ArchiveRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The messageIds property */
    messageIds?: string[] | undefined;
    /**
     * Instantiates a new archiveRequestBody and sets the default values.
     * @param archiveRequestBodyParameterValue 
     */
    public constructor(archiveRequestBodyParameterValue?: ArchiveRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = archiveRequestBodyParameterValue?.additionalData ? {} : archiveRequestBodyParameterValue?.additionalData!
        this.messageIds = archiveRequestBodyParameterValue?.messageIds ;
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
