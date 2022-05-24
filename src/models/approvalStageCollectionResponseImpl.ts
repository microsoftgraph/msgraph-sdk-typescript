import {ApprovalStage} from './approvalStage';
import {ApprovalStageCollectionResponse} from './approvalStageCollectionResponse';
import {createApprovalStageFromDiscriminatorValue} from './createApprovalStageFromDiscriminatorValue';
import {ApprovalStageImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApprovalStageCollectionResponseImpl implements AdditionalDataHolder, ApprovalStageCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ApprovalStage[] | undefined;
    /**
     * Instantiates a new ApprovalStageCollectionResponse and sets the default values.
     * @param approvalStageCollectionResponseParameterValue 
     */
    public constructor(approvalStageCollectionResponseParameterValue?: ApprovalStageCollectionResponse | undefined) {
        this.additionalData = approvalStageCollectionResponseParameterValue?.additionalData ? approvalStageCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = approvalStageCollectionResponseParameterValue?.nextLink ;
        this.value = approvalStageCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ApprovalStageImpl>(createApprovalStageFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: ApprovalStageImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ApprovalStageImpl(element));});
        writer.writeCollectionOfObjectValues<ApprovalStageImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
