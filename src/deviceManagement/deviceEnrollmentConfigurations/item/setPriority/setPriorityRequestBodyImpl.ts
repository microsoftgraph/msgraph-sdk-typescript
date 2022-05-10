import {SetPriorityRequestBody} from './setPriorityRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setPriority method.  */
export class SetPriorityRequestBodyImpl implements AdditionalDataHolder, Parsable, SetPriorityRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The priority property  */
    priority?: number | undefined;
    /**
     * Instantiates a new setPriorityRequestBody and sets the default values.
     * @param setPriorityRequestBodyParameterValue 
     */
    public constructor(setPriorityRequestBodyParameterValue?: SetPriorityRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = setPriorityRequestBodyParameterValue?.additionalData ? {} : setPriorityRequestBodyParameterValue?.additionalData!
        this.priority = setPriorityRequestBodyParameterValue?.priority ;
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
        if(this.priority)
        writer.writeNumberValue("priority", this.priority);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
