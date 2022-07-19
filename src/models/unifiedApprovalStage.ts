import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {SubjectSet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedApprovalStage implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The number of days that a request can be pending a response before it is automatically denied. */
    private _approvalStageTimeOutInDays?: number | undefined;
    /** The escalation approvers for this stage when the primary approvers don't respond. */
    private _escalationApprovers?: SubjectSet[] | undefined;
    /** The time a request can be pending a response from a primary approver before it can be escalated to the escalation approvers. */
    private _escalationTimeInMinutes?: number | undefined;
    /** Indicates whether the approver must provide justification for their reponse. */
    private _isApproverJustificationRequired?: boolean | undefined;
    /** Indicates whether escalation if enabled. */
    private _isEscalationEnabled?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The primary approvers of this stage. */
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
     * Gets the approvalStageTimeOutInDays property value. The number of days that a request can be pending a response before it is automatically denied.
     * @returns a integer
     */
    public get approvalStageTimeOutInDays() {
        return this._approvalStageTimeOutInDays;
    };
    /**
     * Sets the approvalStageTimeOutInDays property value. The number of days that a request can be pending a response before it is automatically denied.
     * @param value Value to set for the approvalStageTimeOutInDays property.
     */
    public set approvalStageTimeOutInDays(value: number | undefined) {
        this._approvalStageTimeOutInDays = value;
    };
    /**
     * Instantiates a new unifiedApprovalStage and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.unifiedApprovalStage";
    };
    /**
     * Gets the escalationApprovers property value. The escalation approvers for this stage when the primary approvers don't respond.
     * @returns a subjectSet
     */
    public get escalationApprovers() {
        return this._escalationApprovers;
    };
    /**
     * Sets the escalationApprovers property value. The escalation approvers for this stage when the primary approvers don't respond.
     * @param value Value to set for the escalationApprovers property.
     */
    public set escalationApprovers(value: SubjectSet[] | undefined) {
        this._escalationApprovers = value;
    };
    /**
     * Gets the escalationTimeInMinutes property value. The time a request can be pending a response from a primary approver before it can be escalated to the escalation approvers.
     * @returns a integer
     */
    public get escalationTimeInMinutes() {
        return this._escalationTimeInMinutes;
    };
    /**
     * Sets the escalationTimeInMinutes property value. The time a request can be pending a response from a primary approver before it can be escalated to the escalation approvers.
     * @param value Value to set for the escalationTimeInMinutes property.
     */
    public set escalationTimeInMinutes(value: number | undefined) {
        this._escalationTimeInMinutes = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "approvalStageTimeOutInDays": n => { this.approvalStageTimeOutInDays = n.getNumberValue(); },
            "escalationApprovers": n => { this.escalationApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
            "escalationTimeInMinutes": n => { this.escalationTimeInMinutes = n.getNumberValue(); },
            "isApproverJustificationRequired": n => { this.isApproverJustificationRequired = n.getBooleanValue(); },
            "isEscalationEnabled": n => { this.isEscalationEnabled = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "primaryApprovers": n => { this.primaryApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isApproverJustificationRequired property value. Indicates whether the approver must provide justification for their reponse.
     * @returns a boolean
     */
    public get isApproverJustificationRequired() {
        return this._isApproverJustificationRequired;
    };
    /**
     * Sets the isApproverJustificationRequired property value. Indicates whether the approver must provide justification for their reponse.
     * @param value Value to set for the isApproverJustificationRequired property.
     */
    public set isApproverJustificationRequired(value: boolean | undefined) {
        this._isApproverJustificationRequired = value;
    };
    /**
     * Gets the isEscalationEnabled property value. Indicates whether escalation if enabled.
     * @returns a boolean
     */
    public get isEscalationEnabled() {
        return this._isEscalationEnabled;
    };
    /**
     * Sets the isEscalationEnabled property value. Indicates whether escalation if enabled.
     * @param value Value to set for the isEscalationEnabled property.
     */
    public set isEscalationEnabled(value: boolean | undefined) {
        this._isEscalationEnabled = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the primaryApprovers property value. The primary approvers of this stage.
     * @returns a subjectSet
     */
    public get primaryApprovers() {
        return this._primaryApprovers;
    };
    /**
     * Sets the primaryApprovers property value. The primary approvers of this stage.
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
        writer.writeNumberValue("approvalStageTimeOutInDays", this.approvalStageTimeOutInDays);
        writer.writeCollectionOfObjectValues<SubjectSet>("escalationApprovers", this.escalationApprovers);
        writer.writeNumberValue("escalationTimeInMinutes", this.escalationTimeInMinutes);
        writer.writeBooleanValue("isApproverJustificationRequired", this.isApproverJustificationRequired);
        writer.writeBooleanValue("isEscalationEnabled", this.isEscalationEnabled);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<SubjectSet>("primaryApprovers", this.primaryApprovers);
        writer.writeAdditionalData(this.additionalData);
    };
}
