import {InvestigationSecurityState} from './investigationSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InvestigationSecurityStateImpl implements AdditionalDataHolder, InvestigationSecurityState, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name property */
    public name?: string | undefined;
    /** The status property */
    public status?: string | undefined;
    /**
     * Instantiates a new investigationSecurityState and sets the default values.
     * @param investigationSecurityStateParameterValue 
     */
    public constructor(investigationSecurityStateParameterValue?: InvestigationSecurityState | undefined) {
        this.additionalData = investigationSecurityStateParameterValue?.additionalData ? investigationSecurityStateParameterValue?.additionalData! : {}
        this.name = investigationSecurityStateParameterValue?.name ;
        this.status = investigationSecurityStateParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "name": n => { this.name = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.status){
        writer.writeStringValue("status", this.status);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
