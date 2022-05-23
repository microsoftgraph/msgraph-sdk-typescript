import {ErrorDetails} from './errorDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ErrorDetailsImpl implements AdditionalDataHolder, ErrorDetails, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The code property */
    public code?: string | undefined;
    /** The message property */
    public message?: string | undefined;
    /** The target property */
    public target?: string | undefined;
    /**
     * Instantiates a new ErrorDetails and sets the default values.
     * @param errorDetailsParameterValue 
     */
    public constructor(errorDetailsParameterValue?: ErrorDetails | undefined) {
        this.additionalData = errorDetailsParameterValue?.additionalData ? errorDetailsParameterValue?.additionalData! : {}
        this.code = errorDetailsParameterValue?.code ;
        this.message = errorDetailsParameterValue?.message ;
        this.target = errorDetailsParameterValue?.target ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getStringValue(); },
            "message": n => { this.message = n.getStringValue(); },
            "target": n => { this.target = n.getStringValue(); },
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
        if(this.target){
        writer.writeStringValue("target", this.target);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
