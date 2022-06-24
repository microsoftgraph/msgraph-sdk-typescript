import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {SubjectSetImpl} from './index';
import {SubjectSet} from './subjectSet';
import {UnifiedApprovalStage} from './unifiedApprovalStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedApprovalStageImpl implements UnifiedApprovalStage {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The number of days that a request can be pending a response before it is automatically denied. */
    public approvalStageTimeOutInDays?: number | undefined;
    /** The escalation approvers for this stage when the primary approvers don't respond. */
    public escalationApprovers?: SubjectSet[] | undefined;
    /** The time a request can be pending a response from a primary approver before it can be escalated to the escalation approvers. */
    public escalationTimeInMinutes?: number | undefined;
    /** Indicates whether the approver must provide justification for their reponse. */
    public isApproverJustificationRequired?: boolean | undefined;
    /** Indicates whether escalation if enabled. */
    public isEscalationEnabled?: boolean | undefined;
    /** The primary approvers of this stage. */
    public primaryApprovers?: SubjectSet[] | undefined;
    /**
     * Instantiates a new unifiedApprovalStage and sets the default values.
     * @param unifiedApprovalStageParameterValue 
     */
    public constructor(unifiedApprovalStageParameterValue?: UnifiedApprovalStage | undefined) {
        this.additionalData = unifiedApprovalStageParameterValue?.additionalData ? unifiedApprovalStageParameterValue?.additionalData! : {};
        this.approvalStageTimeOutInDays = unifiedApprovalStageParameterValue?.approvalStageTimeOutInDays;
        const escalationApproversArrValue: SubjectSetImpl[] = []; this.escalationApprovers?.forEach(element => {escalationApproversArrValue.push(element instanceof SubjectSetImpl? element : new SubjectSetImpl(element));});
        this.escalationApprovers = escalationApproversArrValue;
        this.escalationTimeInMinutes = unifiedApprovalStageParameterValue?.escalationTimeInMinutes;
        this.isApproverJustificationRequired = unifiedApprovalStageParameterValue?.isApproverJustificationRequired;
        this.isEscalationEnabled = unifiedApprovalStageParameterValue?.isEscalationEnabled;
        const primaryApproversArrValue: SubjectSetImpl[] = []; this.primaryApprovers?.forEach(element => {primaryApproversArrValue.push(element instanceof SubjectSetImpl? element : new SubjectSetImpl(element));});
        this.primaryApprovers = primaryApproversArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "approvalStageTimeOutInDays": n => { this.approvalStageTimeOutInDays = n.getNumberValue(); },
            "escalationApprovers": n => { this.escalationApprovers = n.getCollectionOfObjectValues<SubjectSetImpl>(createSubjectSetFromDiscriminatorValue); },
            "escalationTimeInMinutes": n => { this.escalationTimeInMinutes = n.getNumberValue(); },
            "isApproverJustificationRequired": n => { this.isApproverJustificationRequired = n.getBooleanValue(); },
            "isEscalationEnabled": n => { this.isEscalationEnabled = n.getBooleanValue(); },
            "primaryApprovers": n => { this.primaryApprovers = n.getCollectionOfObjectValues<SubjectSetImpl>(createSubjectSetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.approvalStageTimeOutInDays){
            writer.writeNumberValue("approvalStageTimeOutInDays", this.approvalStageTimeOutInDays);
        }
        if(this.escalationApprovers && this.escalationApprovers.length != 0){        const escalationApproversArrValue: SubjectSetImpl[] = []; this.escalationApprovers?.forEach(element => {escalationApproversArrValue.push(element instanceof SubjectSetImpl? element : new SubjectSetImpl(element));});
            writer.writeCollectionOfObjectValues<SubjectSetImpl>("escalationApprovers", escalationApproversArrValue);
        }
        if(this.escalationTimeInMinutes){
            writer.writeNumberValue("escalationTimeInMinutes", this.escalationTimeInMinutes);
        }
        if(this.isApproverJustificationRequired){
            writer.writeBooleanValue("isApproverJustificationRequired", this.isApproverJustificationRequired);
        }
        if(this.isEscalationEnabled){
            writer.writeBooleanValue("isEscalationEnabled", this.isEscalationEnabled);
        }
        if(this.primaryApprovers && this.primaryApprovers.length != 0){        const primaryApproversArrValue: SubjectSetImpl[] = []; this.primaryApprovers?.forEach(element => {primaryApproversArrValue.push(element instanceof SubjectSetImpl? element : new SubjectSetImpl(element));});
            writer.writeCollectionOfObjectValues<SubjectSetImpl>("primaryApprovers", primaryApproversArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
