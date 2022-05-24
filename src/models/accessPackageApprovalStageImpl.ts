import {AccessPackageApprovalStage} from './accessPackageApprovalStage';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {SubjectSetImpl} from './index';
import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageApprovalStageImpl implements AccessPackageApprovalStage, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The number of days that a request can be pending a response before it is automatically denied. */
    public durationBeforeAutomaticDenial?: Duration | undefined;
    /** If escalation is required, the time a request can be pending a response from a primary approver. */
    public durationBeforeEscalation?: Duration | undefined;
    /** If escalation is enabled and the primary approvers do not respond before the escalation time, the escalationApprovers are the users who will be asked to approve requests. */
    public escalationApprovers?: SubjectSet[] | undefined;
    /** The subjects, typically users, who are the fallback escalation approvers. */
    public fallbackEscalationApprovers?: SubjectSet[] | undefined;
    /** The subjects, typically users, who are the fallback primary approvers. */
    public fallbackPrimaryApprovers?: SubjectSet[] | undefined;
    /** Indicates whether the approver is required to provide a justification for approving a request. */
    public isApproverJustificationRequired?: boolean | undefined;
    /** If true, then one or more escalationApprovers are configured in this approval stage. */
    public isEscalationEnabled?: boolean | undefined;
    /** The subjects, typically users, who will be asked to approve requests. A collection of singleUser, groupMembers, requestorManager, internalSponsors or externalSponsors. */
    public primaryApprovers?: SubjectSet[] | undefined;
    /**
     * Instantiates a new accessPackageApprovalStage and sets the default values.
     * @param accessPackageApprovalStageParameterValue 
     */
    public constructor(accessPackageApprovalStageParameterValue?: AccessPackageApprovalStage | undefined) {
        this.additionalData = accessPackageApprovalStageParameterValue?.additionalData ? accessPackageApprovalStageParameterValue?.additionalData! : {}
        this.durationBeforeAutomaticDenial = accessPackageApprovalStageParameterValue?.durationBeforeAutomaticDenial ;
        this.durationBeforeEscalation = accessPackageApprovalStageParameterValue?.durationBeforeEscalation ;
        this.escalationApprovers = accessPackageApprovalStageParameterValue?.escalationApprovers ;
        this.fallbackEscalationApprovers = accessPackageApprovalStageParameterValue?.fallbackEscalationApprovers ;
        this.fallbackPrimaryApprovers = accessPackageApprovalStageParameterValue?.fallbackPrimaryApprovers ;
        this.isApproverJustificationRequired = accessPackageApprovalStageParameterValue?.isApproverJustificationRequired ;
        this.isEscalationEnabled = accessPackageApprovalStageParameterValue?.isEscalationEnabled ;
        this.primaryApprovers = accessPackageApprovalStageParameterValue?.primaryApprovers ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "durationBeforeAutomaticDenial": n => { this.durationBeforeAutomaticDenial = n.getDurationValue(); },
            "durationBeforeEscalation": n => { this.durationBeforeEscalation = n.getDurationValue(); },
            "escalationApprovers": n => { this.escalationApprovers = n.getCollectionOfObjectValues<SubjectSetImpl>(createSubjectSetFromDiscriminatorValue); },
            "fallbackEscalationApprovers": n => { this.fallbackEscalationApprovers = n.getCollectionOfObjectValues<SubjectSetImpl>(createSubjectSetFromDiscriminatorValue); },
            "fallbackPrimaryApprovers": n => { this.fallbackPrimaryApprovers = n.getCollectionOfObjectValues<SubjectSetImpl>(createSubjectSetFromDiscriminatorValue); },
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
        if(this.durationBeforeAutomaticDenial){
        writer.writeDurationValue("durationBeforeAutomaticDenial", this.durationBeforeAutomaticDenial);
        }
        if(this.durationBeforeEscalation){
        writer.writeDurationValue("durationBeforeEscalation", this.durationBeforeEscalation);
        }
        if(this.escalationApprovers && this.escalationApprovers.length != 0){        const escalationApproversArrValue: SubjectSetImpl[] = []; this.escalationApprovers?.forEach(element => {escalationApproversArrValue.push(new SubjectSetImpl(element));});
        writer.writeCollectionOfObjectValues<SubjectSetImpl>("escalationApprovers", escalationApproversArrValue);
        }
        if(this.fallbackEscalationApprovers && this.fallbackEscalationApprovers.length != 0){        const fallbackEscalationApproversArrValue: SubjectSetImpl[] = []; this.fallbackEscalationApprovers?.forEach(element => {fallbackEscalationApproversArrValue.push(new SubjectSetImpl(element));});
        writer.writeCollectionOfObjectValues<SubjectSetImpl>("fallbackEscalationApprovers", fallbackEscalationApproversArrValue);
        }
        if(this.fallbackPrimaryApprovers && this.fallbackPrimaryApprovers.length != 0){        const fallbackPrimaryApproversArrValue: SubjectSetImpl[] = []; this.fallbackPrimaryApprovers?.forEach(element => {fallbackPrimaryApproversArrValue.push(new SubjectSetImpl(element));});
        writer.writeCollectionOfObjectValues<SubjectSetImpl>("fallbackPrimaryApprovers", fallbackPrimaryApproversArrValue);
        }
        if(this.isApproverJustificationRequired){
        writer.writeBooleanValue("isApproverJustificationRequired", this.isApproverJustificationRequired);
        }
        if(this.isEscalationEnabled){
        writer.writeBooleanValue("isEscalationEnabled", this.isEscalationEnabled);
        }
        if(this.primaryApprovers && this.primaryApprovers.length != 0){        const primaryApproversArrValue: SubjectSetImpl[] = []; this.primaryApprovers?.forEach(element => {primaryApproversArrValue.push(new SubjectSetImpl(element));});
        writer.writeCollectionOfObjectValues<SubjectSetImpl>("primaryApprovers", primaryApproversArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
