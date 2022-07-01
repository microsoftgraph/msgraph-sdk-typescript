import {ApprovalSettings} from './approvalSettings';
import {createUnifiedApprovalStageFromDiscriminatorValue} from './createUnifiedApprovalStageFromDiscriminatorValue';
import {UnifiedApprovalStageImpl} from './index';
import {UnifiedApprovalStage} from './unifiedApprovalStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApprovalSettingsImpl implements ApprovalSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** One of SingleStage, Serial, Parallel, NoApproval (default). NoApproval is used when isApprovalRequired is false. */
    private _approvalMode?: string | undefined;
    /** If approval is required, the one or two elements of this collection define each of the stages of approval. An empty array if no approval is required. */
    private _approvalStages?: UnifiedApprovalStage[] | undefined;
    /** Indicates whether approval is required for requests in this policy. */
    private _isApprovalRequired?: boolean | undefined;
    /** Indicates whether approval is required for a user to extend their assignment. */
    private _isApprovalRequiredForExtension?: boolean | undefined;
    /** Indicates whether the requestor is required to supply a justification in their request. */
    private _isRequestorJustificationRequired?: boolean | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the approvalMode property value. One of SingleStage, Serial, Parallel, NoApproval (default). NoApproval is used when isApprovalRequired is false.
     * @returns a string
     */
    public get approvalMode() {
        return this._approvalMode;
    };
    /**
     * Sets the approvalMode property value. One of SingleStage, Serial, Parallel, NoApproval (default). NoApproval is used when isApprovalRequired is false.
     * @param value Value to set for the approvalMode property.
     */
    public set approvalMode(value: string | undefined) {
        if(value) {
            this._approvalMode = value;
        }
    };
    /**
     * Gets the approvalStages property value. If approval is required, the one or two elements of this collection define each of the stages of approval. An empty array if no approval is required.
     * @returns a UnifiedApprovalStageInterface
     */
    public get approvalStages() {
        return this._approvalStages;
    };
    /**
     * Sets the approvalStages property value. If approval is required, the one or two elements of this collection define each of the stages of approval. An empty array if no approval is required.
     * @param value Value to set for the approvalStages property.
     */
    public set approvalStages(value: UnifiedApprovalStage[] | undefined) {
        if(value) {
            const approvalStagesArrValue: UnifiedApprovalStageImpl[] = [];
            this.approvalStages?.forEach(element => {
                approvalStagesArrValue.push((element instanceof UnifiedApprovalStageImpl? element as UnifiedApprovalStageImpl:new UnifiedApprovalStageImpl(element)));
            });
            this._approvalStages = approvalStagesArrValue;
        }
    };
    /**
     * Instantiates a new approvalSettings and sets the default values.
     * @param approvalSettingsParameterValue 
     */
    public constructor(approvalSettingsParameterValue?: ApprovalSettings | undefined) {
        this._additionalData = approvalSettingsParameterValue?.additionalData ? approvalSettingsParameterValue?.additionalData! : {};
        this._approvalMode = approvalSettingsParameterValue?.approvalMode;
        this._approvalStages = approvalSettingsParameterValue?.approvalStages;
        this._isApprovalRequired = approvalSettingsParameterValue?.isApprovalRequired;
        this._isApprovalRequiredForExtension = approvalSettingsParameterValue?.isApprovalRequiredForExtension;
        this._isRequestorJustificationRequired = approvalSettingsParameterValue?.isRequestorJustificationRequired;
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
     * Gets the isApprovalRequired property value. Indicates whether approval is required for requests in this policy.
     * @returns a boolean
     */
    public get isApprovalRequired() {
        return this._isApprovalRequired;
    };
    /**
     * Sets the isApprovalRequired property value. Indicates whether approval is required for requests in this policy.
     * @param value Value to set for the isApprovalRequired property.
     */
    public set isApprovalRequired(value: boolean | undefined) {
        if(value) {
            this._isApprovalRequired = value;
        }
    };
    /**
     * Gets the isApprovalRequiredForExtension property value. Indicates whether approval is required for a user to extend their assignment.
     * @returns a boolean
     */
    public get isApprovalRequiredForExtension() {
        return this._isApprovalRequiredForExtension;
    };
    /**
     * Sets the isApprovalRequiredForExtension property value. Indicates whether approval is required for a user to extend their assignment.
     * @param value Value to set for the isApprovalRequiredForExtension property.
     */
    public set isApprovalRequiredForExtension(value: boolean | undefined) {
        if(value) {
            this._isApprovalRequiredForExtension = value;
        }
    };
    /**
     * Gets the isRequestorJustificationRequired property value. Indicates whether the requestor is required to supply a justification in their request.
     * @returns a boolean
     */
    public get isRequestorJustificationRequired() {
        return this._isRequestorJustificationRequired;
    };
    /**
     * Sets the isRequestorJustificationRequired property value. Indicates whether the requestor is required to supply a justification in their request.
     * @param value Value to set for the isRequestorJustificationRequired property.
     */
    public set isRequestorJustificationRequired(value: boolean | undefined) {
        if(value) {
            this._isRequestorJustificationRequired = value;
        }
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
        if(this.approvalStages && this.approvalStages.length != 0){        const approvalStagesArrValue: UnifiedApprovalStageImpl[] = [];
        this.approvalStages?.forEach(element => {
            approvalStagesArrValue.push((element instanceof UnifiedApprovalStageImpl? element as UnifiedApprovalStageImpl:new UnifiedApprovalStageImpl(element)));
        });
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
