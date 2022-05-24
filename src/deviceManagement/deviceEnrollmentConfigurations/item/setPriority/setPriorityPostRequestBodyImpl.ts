import {SetPriorityPostRequestBody} from './setPriorityPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setPriority method. */
export class SetPriorityPostRequestBodyImpl implements AdditionalDataHolder, Parsable, SetPriorityPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The priority property */
    public priority?: number | undefined;
    /**
     * Instantiates a new setPriorityPostRequestBody and sets the default values.
     * @param setPriorityPostRequestBodyParameterValue 
     */
    public constructor(setPriorityPostRequestBodyParameterValue?: SetPriorityPostRequestBody | undefined) {
        this.additionalData = setPriorityPostRequestBodyParameterValue?.additionalData ? setPriorityPostRequestBodyParameterValue?.additionalData! : {}
        this.priority = setPriorityPostRequestBodyParameterValue?.priority ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "priority": n => { this.priority = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.priority){
        writer.writeNumberValue("priority", this.priority);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
