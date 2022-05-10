import {MimeContent} from './mimeContent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for a generic mime content.  */
export class MimeContentImpl implements AdditionalDataHolder, MimeContent, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** Indicates the content mime type.  */
    type?: string | undefined;
    /** The byte array that contains the actual content.  */
    value?: string | undefined;
    /**
     * Instantiates a new mimeContent and sets the default values.
     * @param mimeContentParameterValue 
     */
    public constructor(mimeContentParameterValue?: MimeContent | undefined) {
        this.additionalData = {};
        this.additionalData = mimeContentParameterValue?.additionalData ? {} : mimeContentParameterValue?.additionalData!
        this.type = mimeContentParameterValue?.type ;
        this.value = mimeContentParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "type": n => { this.type = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.type){
        if(this.type)
        writer.writeStringValue("type", this.type);
        }
        if(this.value){
        if(this.value)
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
