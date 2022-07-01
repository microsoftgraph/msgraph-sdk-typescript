import {AccessPackageApprovalStage} from './accessPackageApprovalStage';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {SubjectSetImpl} from './index';
import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageApprovalStageImpl implements AccessPackageApprovalStage {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The number of days that a request can be pending a response before it is automatically denied. */
    private _durationBeforeAutomaticDenial?: Duration | undefined;
    /** If escalation is required, the time a request can be pending a response from a primary approver. */
    private _durationBeforeEscalation?: Duration | undefined;
    /** If escalation is enabled and the primary approvers do not respond before the escalation time, the escalationApprovers are the users who will be asked to approve requests. */
    private _escalationApprovers?: SubjectSet[] | undefined;
    /** The subjects, typically users, who are the fallback escalation approvers. */
    private _fallbackEscalationApprovers?: SubjectSet[] | undefined;
    /** The subjects, typically users, who are the fallback primary approvers. */
    private _fallbackPrimaryApprovers?: SubjectSet[] | undefined;
    /** Indicates whether the approver is required to provide a justification for approving a request. */
    private _isApproverJustificationRequired?: boolean | undefined;
    /** If true, then one or more escalationApprovers are configured in this approval stage. */
    private _isEscalationEnabled?: boolean | undefined;
    /** The subjects, typically users, who will be asked to approve requests. A collection of singleUser, groupMembers, requestorManager, internalSponsors or externalSponsors. */
    private _primaryApprovers?: SubjectSet[] | undefined;
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
     * Instantiates a new accessPackageApprovalStage and sets the default values.
     * @param accessPackageApprovalStageParameterValue 
     */
    public constructor(accessPackageApprovalStageParameterValue?: AccessPackageApprovalStage | undefined) {
        this._additionalData = accessPackageApprovalStageParameterValue?.additionalData ? accessPackageApprovalStageParameterValue?.additionalData! : {};
        this._durationBeforeAutomaticDenial = accessPackageApprovalStageParameterValue?.durationBeforeAutomaticDenial;
        this._durationBeforeEscalation = accessPackageApprovalStageParameterValue?.durationBeforeEscalation;
        this._escalationApprovers = accessPackageApprovalStageParameterValue?.escalationApprovers;
        this._fallbackEscalationApprovers = accessPackageApprovalStageParameterValue?.fallbackEscalationApprovers;
        this._fallbackPrimaryApprovers = accessPackageApprovalStageParameterValue?.fallbackPrimaryApprovers;
        this._isApproverJustificationRequired = accessPackageApprovalStageParameterValue?.isApproverJustificationRequired;
        this._isEscalationEnabled = accessPackageApprovalStageParameterValue?.isEscalationEnabled;
        this._primaryApprovers = accessPackageApprovalStageParameterValue?.primaryApprovers;
    };
    /**
     * Gets the durationBeforeAutomaticDenial property value. The number of days that a request can be pending a response before it is automatically denied.
     * @returns a Duration
     */
    public get durationBeforeAutomaticDenial() {
        return this._durationBeforeAutomaticDenial;
    };
    /**
     * Sets the durationBeforeAutomaticDenial property value. The number of days that a request can be pending a response before it is automatically denied.
     * @param value Value to set for the durationBeforeAutomaticDenial property.
     */
    public set durationBeforeAutomaticDenial(value: Duration | undefined) {
        if(value) {
            this._durationBeforeAutomaticDenial = value;
        }
    };
    /**
     * Gets the durationBeforeEscalation property value. If escalation is required, the time a request can be pending a response from a primary approver.
     * @returns a Duration
     */
    public get durationBeforeEscalation() {
        return this._durationBeforeEscalation;
    };
    /**
     * Sets the durationBeforeEscalation property value. If escalation is required, the time a request can be pending a response from a primary approver.
     * @param value Value to set for the durationBeforeEscalation property.
     */
    public set durationBeforeEscalation(value: Duration | undefined) {
        if(value) {
            this._durationBeforeEscalation = value;
        }
    };
    /**
     * Gets the escalationApprovers property value. If escalation is enabled and the primary approvers do not respond before the escalation time, the escalationApprovers are the users who will be asked to approve requests.
     * @returns a SubjectSetInterface
     */
    public get escalationApprovers() {
        return this._escalationApprovers;
    };
    /**
     * Sets the escalationApprovers property value. If escalation is enabled and the primary approvers do not respond before the escalation time, the escalationApprovers are the users who will be asked to approve requests.
     * @param value Value to set for the escalationApprovers property.
     */
    public set escalationApprovers(value: SubjectSet[] | undefined) {
        if(value) {
            const escalationApproversArrValue: SubjectSetImpl[] = [];
            this.escalationApprovers?.forEach(element => {
                escalationApproversArrValue.push((element instanceof SubjectSetImpl? element as SubjectSetImpl:new SubjectSetImpl(element)));
            });
            this._escalationApprovers = escalationApproversArrValue;
        }
    };
    /**
     * Gets the fallbackEscalationApprovers property value. The subjects, typically users, who are the fallback escalation approvers.
     * @returns a SubjectSetInterface
     */
    public get fallbackEscalationApprovers() {
        return this._fallbackEscalationApprovers;
    };
    /**
     * Sets the fallbackEscalationApprovers property value. The subjects, typically users, who are the fallback escalation approvers.
     * @param value Value to set for the fallbackEscalationApprovers property.
     */
    public set fallbackEscalationApprovers(value: SubjectSet[] | undefined) {
        if(value) {
            const fallbackEscalationApproversArrValue: SubjectSetImpl[] = [];
            this.fallbackEscalationApprovers?.forEach(element => {
                fallbackEscalationApproversArrValue.push((element instanceof SubjectSetImpl? element as SubjectSetImpl:new SubjectSetImpl(element)));
            });
            this._fallbackEscalationApprovers = fallbackEscalationApproversArrValue;
        }
    };
    /**
     * Gets the fallbackPrimaryApprovers property value. The subjects, typically users, who are the fallback primary approvers.
     * @returns a SubjectSetInterface
     */
    public get fallbackPrimaryApprovers() {
        return this._fallbackPrimaryApprovers;
    };
    /**
     * Sets the fallbackPrimaryApprovers property value. The subjects, typically users, who are the fallback primary approvers.
     * @param value Value to set for the fallbackPrimaryApprovers property.
     */
    public set fallbackPrimaryApprovers(value: SubjectSet[] | undefined) {
        if(value) {
            const fallbackPrimaryApproversArrValue: SubjectSetImpl[] = [];
            this.fallbackPrimaryApprovers?.forEach(element => {
                fallbackPrimaryApproversArrValue.push((element instanceof SubjectSetImpl? element as SubjectSetImpl:new SubjectSetImpl(element)));
            });
            this._fallbackPrimaryApprovers = fallbackPrimaryApproversArrValue;
        }
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
     * Gets the isApproverJustificationRequired property value. Indicates whether the approver is required to provide a justification for approving a request.
     * @returns a boolean
     */
    public get isApproverJustificationRequired() {
        return this._isApproverJustificationRequired;
    };
    /**
     * Sets the isApproverJustificationRequired property value. Indicates whether the approver is required to provide a justification for approving a request.
     * @param value Value to set for the isApproverJustificationRequired property.
     */
    public set isApproverJustificationRequired(value: boolean | undefined) {
        if(value) {
            this._isApproverJustificationRequired = value;
        }
    };
    /**
     * Gets the isEscalationEnabled property value. If true, then one or more escalationApprovers are configured in this approval stage.
     * @returns a boolean
     */
    public get isEscalationEnabled() {
        return this._isEscalationEnabled;
    };
    /**
     * Sets the isEscalationEnabled property value. If true, then one or more escalationApprovers are configured in this approval stage.
     * @param value Value to set for the isEscalationEnabled property.
     */
    public set isEscalationEnabled(value: boolean | undefined) {
        if(value) {
            this._isEscalationEnabled = value;
        }
    };
    /**
     * Gets the primaryApprovers property value. The subjects, typically users, who will be asked to approve requests. A collection of singleUser, groupMembers, requestorManager, internalSponsors or externalSponsors.
     * @returns a SubjectSetInterface
     */
    public get primaryApprovers() {
        return this._primaryApprovers;
    };
    /**
     * Sets the primaryApprovers property value. The subjects, typically users, who will be asked to approve requests. A collection of singleUser, groupMembers, requestorManager, internalSponsors or externalSponsors.
     * @param value Value to set for the primaryApprovers property.
     */
    public set primaryApprovers(value: SubjectSet[] | undefined) {
        if(value) {
            const primaryApproversArrValue: SubjectSetImpl[] = [];
            this.primaryApprovers?.forEach(element => {
                primaryApproversArrValue.push((element instanceof SubjectSetImpl? element as SubjectSetImpl:new SubjectSetImpl(element)));
            });
            this._primaryApprovers = primaryApproversArrValue;
        }
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
        if(this.escalationApprovers && this.escalationApprovers.length != 0){        const escalationApproversArrValue: SubjectSetImpl[] = [];
        this.escalationApprovers?.forEach(element => {
            escalationApproversArrValue.push((element instanceof SubjectSetImpl? element as SubjectSetImpl:new SubjectSetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SubjectSetImpl>("escalationApprovers", escalationApproversArrValue);
        }
        if(this.fallbackEscalationApprovers && this.fallbackEscalationApprovers.length != 0){        const fallbackEscalationApproversArrValue: SubjectSetImpl[] = [];
        this.fallbackEscalationApprovers?.forEach(element => {
            fallbackEscalationApproversArrValue.push((element instanceof SubjectSetImpl? element as SubjectSetImpl:new SubjectSetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SubjectSetImpl>("fallbackEscalationApprovers", fallbackEscalationApproversArrValue);
        }
        if(this.fallbackPrimaryApprovers && this.fallbackPrimaryApprovers.length != 0){        const fallbackPrimaryApproversArrValue: SubjectSetImpl[] = [];
        this.fallbackPrimaryApprovers?.forEach(element => {
            fallbackPrimaryApproversArrValue.push((element instanceof SubjectSetImpl? element as SubjectSetImpl:new SubjectSetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SubjectSetImpl>("fallbackPrimaryApprovers", fallbackPrimaryApproversArrValue);
        }
        if(this.isApproverJustificationRequired){
            writer.writeBooleanValue("isApproverJustificationRequired", this.isApproverJustificationRequired);
        }
        if(this.isEscalationEnabled){
            writer.writeBooleanValue("isEscalationEnabled", this.isEscalationEnabled);
        }
        if(this.primaryApprovers && this.primaryApprovers.length != 0){        const primaryApproversArrValue: SubjectSetImpl[] = [];
        this.primaryApprovers?.forEach(element => {
            primaryApproversArrValue.push((element instanceof SubjectSetImpl? element as SubjectSetImpl:new SubjectSetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SubjectSetImpl>("primaryApprovers", primaryApproversArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
