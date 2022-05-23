import {MarkReadResponse} from './markReadResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the markRead method. */
export class MarkReadResponseImpl implements AdditionalDataHolder, MarkReadResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: boolean | undefined;
    /**
     * Instantiates a new markReadResponse and sets the default values.
     * @param markReadResponseParameterValue 
     */
    public constructor(markReadResponseParameterValue?: MarkReadResponse | undefined) {
        this.additionalData = markReadResponseParameterValue?.additionalData ? markReadResponseParameterValue?.additionalData! : {}
        this.value = markReadResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value){
        writer.writeBooleanValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
