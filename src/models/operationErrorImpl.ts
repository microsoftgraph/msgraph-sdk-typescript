import {OperationError} from './operationError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OperationErrorImpl implements AdditionalDataHolder, OperationError, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Operation error code. */
    public code?: string | undefined;
    /** Operation error message. */
    public message?: string | undefined;
    /**
     * Instantiates a new operationError and sets the default values.
     * @param operationErrorParameterValue 
     */
    public constructor(operationErrorParameterValue?: OperationError | undefined) {
        this.additionalData = operationErrorParameterValue?.additionalData ? operationErrorParameterValue?.additionalData! : {}
        this.code = operationErrorParameterValue?.code ;
        this.message = operationErrorParameterValue?.message ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getStringValue(); },
            "message": n => { this.message = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.code){
        writer.writeStringValue("code", this.code);
        }
        if(this.message){
        writer.writeStringValue("message", this.message);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
