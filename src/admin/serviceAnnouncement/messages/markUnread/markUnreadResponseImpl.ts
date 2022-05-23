import {MarkUnreadResponse} from './markUnreadResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the markUnread method. */
export class MarkUnreadResponseImpl implements AdditionalDataHolder, MarkUnreadResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: boolean | undefined;
    /**
     * Instantiates a new markUnreadResponse and sets the default values.
     * @param markUnreadResponseParameterValue 
     */
    public constructor(markUnreadResponseParameterValue?: MarkUnreadResponse | undefined) {
        this.additionalData = markUnreadResponseParameterValue?.additionalData ? markUnreadResponseParameterValue?.additionalData! : {}
        this.value = markUnreadResponseParameterValue?.value ;
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
