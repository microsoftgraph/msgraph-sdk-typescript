import {BatchRecordDecisionsRequestBody} from './batchRecordDecisionsRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the batchRecordDecisions method.  */
export class BatchRecordDecisionsRequestBodyImpl implements AdditionalDataHolder, BatchRecordDecisionsRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The decision property  */
    decision?: string | undefined;
    /** The justification property  */
    justification?: string | undefined;
    /** The principalId property  */
    principalId?: string | undefined;
    /** The resourceId property  */
    resourceId?: string | undefined;
    /**
     * Instantiates a new batchRecordDecisionsRequestBody and sets the default values.
     * @param batchRecordDecisionsRequestBodyParameterValue 
     */
    public constructor(batchRecordDecisionsRequestBodyParameterValue?: BatchRecordDecisionsRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = batchRecordDecisionsRequestBodyParameterValue?.additionalData ? {} : batchRecordDecisionsRequestBodyParameterValue?.additionalData!
        this.decision = batchRecordDecisionsRequestBodyParameterValue?.decision ;
        this.justification = batchRecordDecisionsRequestBodyParameterValue?.justification ;
        this.principalId = batchRecordDecisionsRequestBodyParameterValue?.principalId ;
        this.resourceId = batchRecordDecisionsRequestBodyParameterValue?.resourceId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "decision": n => { this.decision = n.getStringValue(); },
            "justification": n => { this.justification = n.getStringValue(); },
            "principalId": n => { this.principalId = n.getStringValue(); },
            "resourceId": n => { this.resourceId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.decision){
        if(this.decision)
        writer.writeStringValue("decision", this.decision);
        }
        if(this.justification){
        if(this.justification)
        writer.writeStringValue("justification", this.justification);
        }
        if(this.principalId){
        if(this.principalId)
        writer.writeStringValue("principalId", this.principalId);
        }
        if(this.resourceId){
        if(this.resourceId)
        writer.writeStringValue("resourceId", this.resourceId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
