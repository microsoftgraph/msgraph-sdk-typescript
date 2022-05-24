import {BatchRecordDecisionsPostRequestBody} from './batchRecordDecisionsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the batchRecordDecisions method. */
export class BatchRecordDecisionsPostRequestBodyImpl implements AdditionalDataHolder, BatchRecordDecisionsPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The decision property */
    public decision?: string | undefined;
    /** The justification property */
    public justification?: string | undefined;
    /** The principalId property */
    public principalId?: string | undefined;
    /** The resourceId property */
    public resourceId?: string | undefined;
    /**
     * Instantiates a new batchRecordDecisionsPostRequestBody and sets the default values.
     * @param batchRecordDecisionsPostRequestBodyParameterValue 
     */
    public constructor(batchRecordDecisionsPostRequestBodyParameterValue?: BatchRecordDecisionsPostRequestBody | undefined) {
        this.additionalData = batchRecordDecisionsPostRequestBodyParameterValue?.additionalData ? batchRecordDecisionsPostRequestBodyParameterValue?.additionalData! : {}
        this.decision = batchRecordDecisionsPostRequestBodyParameterValue?.decision ;
        this.justification = batchRecordDecisionsPostRequestBodyParameterValue?.justification ;
        this.principalId = batchRecordDecisionsPostRequestBodyParameterValue?.principalId ;
        this.resourceId = batchRecordDecisionsPostRequestBodyParameterValue?.resourceId ;
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
        writer.writeStringValue("decision", this.decision);
        }
        if(this.justification){
        writer.writeStringValue("justification", this.justification);
        }
        if(this.principalId){
        writer.writeStringValue("principalId", this.principalId);
        }
        if(this.resourceId){
        writer.writeStringValue("resourceId", this.resourceId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
