import {ApprovalSettings} from './approvalSettings';
import {createUnifiedApprovalStageFromDiscriminatorValue} from './createUnifiedApprovalStageFromDiscriminatorValue';
import {UnifiedApprovalStageImpl} from './index';
import {UnifiedApprovalStage} from './unifiedApprovalStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApprovalSettingsImpl implements ApprovalSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** One of SingleStage, Serial, Parallel, NoApproval (default). NoApproval is used when isApprovalRequired is false. */
    public approvalMode?: string | undefined;
    /** If approval is required, the one or two elements of this collection define each of the stages of approval. An empty array if no approval is required. */
    public approvalStages?: UnifiedApprovalStage[] | undefined;
    /** Indicates whether approval is required for requests in this policy. */
    public isApprovalRequired?: boolean | undefined;
    /** Indicates whether approval is required for a user to extend their assignment. */
    public isApprovalRequiredForExtension?: boolean | undefined;
    /** Indicates whether the requestor is required to supply a justification in their request. */
    public isRequestorJustificationRequired?: boolean | undefined;
    /**
     * Instantiates a new approvalSettings and sets the default values.
     * @param approvalSettingsParameterValue 
     */
    public constructor(approvalSettingsParameterValue?: ApprovalSettings | undefined) {
        this.additionalData = approvalSettingsParameterValue?.additionalData ? approvalSettingsParameterValue?.additionalData! : {};
        this.approvalMode = approvalSettingsParameterValue?.approvalMode;
        this.approvalStages = approvalSettingsParameterValue?.approvalStages;
        this.isApprovalRequired = approvalSettingsParameterValue?.isApprovalRequired;
        this.isApprovalRequiredForExtension = approvalSettingsParameterValue?.isApprovalRequiredForExtension;
        this.isRequestorJustificationRequired = approvalSettingsParameterValue?.isRequestorJustificationRequired;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "approvalMode": n => { this.approvalMode = n.getStringValue(); },
            "approvalStages": n => { this.approvalStages = n.getCollectionOfObjectValues<UnifiedApprovalStageImpl>(createUnifiedApprovalStageFromDiscriminatorValue); },
            "isApprovalRequired": n => { this.isApprovalRequired = n.getBooleanValue(); },
            "isApprovalRequiredForExtension": n => { this.isApprovalRequiredForExtension = n.getBooleanValue(); },
            "isRequestorJustificationRequired": n => { this.isRequestorJustificationRequired = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.approvalMode){
            writer.writeStringValue("approvalMode", this.approvalMode);
        }
        if(this.approvalStages && this.approvalStages.length != 0){        const approvalStagesArrValue: UnifiedApprovalStageImpl[] = []; this.approvalStages?.forEach(element => {approvalStagesArrValue.push(new UnifiedApprovalStageImpl(element));});
            writer.writeCollectionOfObjectValues<UnifiedApprovalStageImpl>("approvalStages", approvalStagesArrValue);
        }
        if(this.isApprovalRequired){
            writer.writeBooleanValue("isApprovalRequired", this.isApprovalRequired);
        }
        if(this.isApprovalRequiredForExtension){
            writer.writeBooleanValue("isApprovalRequiredForExtension", this.isApprovalRequiredForExtension);
        }
        if(this.isRequestorJustificationRequired){
            writer.writeBooleanValue("isRequestorJustificationRequired", this.isRequestorJustificationRequired);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
