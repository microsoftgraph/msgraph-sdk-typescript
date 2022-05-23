import {ResultInfo} from './resultInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResultInfoImpl implements AdditionalDataHolder, Parsable, ResultInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The result code. */
    public code?: number | undefined;
    /** The message. */
    public message?: string | undefined;
    /** The result sub-code. */
    public subcode?: number | undefined;
    /**
     * Instantiates a new resultInfo and sets the default values.
     * @param resultInfoParameterValue 
     */
    public constructor(resultInfoParameterValue?: ResultInfo | undefined) {
        this.additionalData = resultInfoParameterValue?.additionalData ? resultInfoParameterValue?.additionalData! : {}
        this.code = resultInfoParameterValue?.code ;
        this.message = resultInfoParameterValue?.message ;
        this.subcode = resultInfoParameterValue?.subcode ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getNumberValue(); },
            "message": n => { this.message = n.getStringValue(); },
            "subcode": n => { this.subcode = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.code){
        writer.writeNumberValue("code", this.code);
        }
        if(this.message){
        writer.writeStringValue("message", this.message);
        }
        if(this.subcode){
        writer.writeNumberValue("subcode", this.subcode);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
