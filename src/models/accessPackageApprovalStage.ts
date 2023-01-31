import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {SubjectSet} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageApprovalStage implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
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
    private _odataType?: string | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new accessPackageApprovalStage and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
        this._durationBeforeAutomaticDenial = value;
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
        this._durationBeforeEscalation = value;
    };
    /**
     * Gets the escalationApprovers property value. If escalation is enabled and the primary approvers do not respond before the escalation time, the escalationApprovers are the users who will be asked to approve requests.
     * @returns a subjectSet
     */
    public get escalationApprovers() {
        return this._escalationApprovers;
    };
    /**
     * Sets the escalationApprovers property value. If escalation is enabled and the primary approvers do not respond before the escalation time, the escalationApprovers are the users who will be asked to approve requests.
     * @param value Value to set for the escalationApprovers property.
     */
    public set escalationApprovers(value: SubjectSet[] | undefined) {
        this._escalationApprovers = value;
    };
    /**
     * Gets the fallbackEscalationApprovers property value. The subjects, typically users, who are the fallback escalation approvers.
     * @returns a subjectSet
     */
    public get fallbackEscalationApprovers() {
        return this._fallbackEscalationApprovers;
    };
    /**
     * Sets the fallbackEscalationApprovers property value. The subjects, typically users, who are the fallback escalation approvers.
     * @param value Value to set for the fallbackEscalationApprovers property.
     */
    public set fallbackEscalationApprovers(value: SubjectSet[] | undefined) {
        this._fallbackEscalationApprovers = value;
    };
    /**
     * Gets the fallbackPrimaryApprovers property value. The subjects, typically users, who are the fallback primary approvers.
     * @returns a subjectSet
     */
    public get fallbackPrimaryApprovers() {
        return this._fallbackPrimaryApprovers;
    };
    /**
     * Sets the fallbackPrimaryApprovers property value. The subjects, typically users, who are the fallback primary approvers.
     * @param value Value to set for the fallbackPrimaryApprovers property.
     */
    public set fallbackPrimaryApprovers(value: SubjectSet[] | undefined) {
        this._fallbackPrimaryApprovers = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "durationBeforeAutomaticDenial": n => { this.durationBeforeAutomaticDenial = n.getDurationValue(); },
            "durationBeforeEscalation": n => { this.durationBeforeEscalation = n.getDurationValue(); },
            "escalationApprovers": n => { this.escalationApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
            "fallbackEscalationApprovers": n => { this.fallbackEscalationApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
            "fallbackPrimaryApprovers": n => { this.fallbackPrimaryApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
            "isApproverJustificationRequired": n => { this.isApproverJustificationRequired = n.getBooleanValue(); },
            "isEscalationEnabled": n => { this.isEscalationEnabled = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "primaryApprovers": n => { this.primaryApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
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
        this._isApproverJustificationRequired = value;
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
        this._isEscalationEnabled = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the primaryApprovers property value. The subjects, typically users, who will be asked to approve requests. A collection of singleUser, groupMembers, requestorManager, internalSponsors or externalSponsors.
     * @returns a subjectSet
     */
    public get primaryApprovers() {
        return this._primaryApprovers;
    };
    /**
     * Sets the primaryApprovers property value. The subjects, typically users, who will be asked to approve requests. A collection of singleUser, groupMembers, requestorManager, internalSponsors or externalSponsors.
     * @param value Value to set for the primaryApprovers property.
     */
    public set primaryApprovers(value: SubjectSet[] | undefined) {
        this._primaryApprovers = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDurationValue("durationBeforeAutomaticDenial", this.durationBeforeAutomaticDenial);
        writer.writeDurationValue("durationBeforeEscalation", this.durationBeforeEscalation);
        writer.writeCollectionOfObjectValues<SubjectSet>("escalationApprovers", this.escalationApprovers);
        writer.writeCollectionOfObjectValues<SubjectSet>("fallbackEscalationApprovers", this.fallbackEscalationApprovers);
        writer.writeCollectionOfObjectValues<SubjectSet>("fallbackPrimaryApprovers", this.fallbackPrimaryApprovers);
        writer.writeBooleanValue("isApproverJustificationRequired", this.isApproverJustificationRequired);
        writer.writeBooleanValue("isEscalationEnabled", this.isEscalationEnabled);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<SubjectSet>("primaryApprovers", this.primaryApprovers);
        writer.writeAdditionalData(this.additionalData);
    };
}
