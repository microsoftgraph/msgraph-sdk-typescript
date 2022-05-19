import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Entity, Identity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class ApprovalStage extends Entity implements Parsable {
    /** Indicates whether the stage is assigned to the calling user to review. Read-only. */
    private _assignedToMe?: boolean | undefined;
    /** The label provided by the policy creator to identify an approval stage. Read-only. */
    private _displayName?: string | undefined;
    /** The justification associated with the approval stage decision. */
    private _justification?: string | undefined;
    /** The identifier of the reviewer. Read-only. */
    private _reviewedBy?: Identity | undefined;
    /** The date and time when a decision was recorded. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _reviewedDateTime?: Date | undefined;
    /** The result of this approval record. Possible values include: NotReviewed, Approved, Denied. */
    private _reviewResult?: string | undefined;
    /** The stage status. Possible values: InProgress, Initializing, Completed, Expired. Read-only. */
    private _status?: string | undefined;
    /**
     * Gets the assignedToMe property value. Indicates whether the stage is assigned to the calling user to review. Read-only.
     * @returns a boolean
     */
    public get assignedToMe() {
        return this._assignedToMe;
    };
    /**
     * Sets the assignedToMe property value. Indicates whether the stage is assigned to the calling user to review. Read-only.
     * @param value Value to set for the assignedToMe property.
     */
    public set assignedToMe(value: boolean | undefined) {
        this._assignedToMe = value;
    };
    /**
     * Instantiates a new approvalStage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The label provided by the policy creator to identify an approval stage. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The label provided by the policy creator to identify an approval stage. Read-only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignedToMe": n => { this.assignedToMe = n.getBooleanValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "justification": n => { this.justification = n.getStringValue(); },
            "reviewedBy": n => { this.reviewedBy = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
            "reviewedDateTime": n => { this.reviewedDateTime = n.getDateValue(); },
            "reviewResult": n => { this.reviewResult = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Gets the justification property value. The justification associated with the approval stage decision.
     * @returns a string
     */
    public get justification() {
        return this._justification;
    };
    /**
     * Sets the justification property value. The justification associated with the approval stage decision.
     * @param value Value to set for the justification property.
     */
    public set justification(value: string | undefined) {
        this._justification = value;
    };
    /**
     * Gets the reviewedBy property value. The identifier of the reviewer. Read-only.
     * @returns a identity
     */
    public get reviewedBy() {
        return this._reviewedBy;
    };
    /**
     * Sets the reviewedBy property value. The identifier of the reviewer. Read-only.
     * @param value Value to set for the reviewedBy property.
     */
    public set reviewedBy(value: Identity | undefined) {
        this._reviewedBy = value;
    };
    /**
     * Gets the reviewedDateTime property value. The date and time when a decision was recorded. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get reviewedDateTime() {
        return this._reviewedDateTime;
    };
    /**
     * Sets the reviewedDateTime property value. The date and time when a decision was recorded. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the reviewedDateTime property.
     */
    public set reviewedDateTime(value: Date | undefined) {
        this._reviewedDateTime = value;
    };
    /**
     * Gets the reviewResult property value. The result of this approval record. Possible values include: NotReviewed, Approved, Denied.
     * @returns a string
     */
    public get reviewResult() {
        return this._reviewResult;
    };
    /**
     * Sets the reviewResult property value. The result of this approval record. Possible values include: NotReviewed, Approved, Denied.
     * @param value Value to set for the reviewResult property.
     */
    public set reviewResult(value: string | undefined) {
        this._reviewResult = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("assignedToMe", this.assignedToMe);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("justification", this.justification);
        writer.writeObjectValue<Identity>("reviewedBy", this.reviewedBy);
        writer.writeDateValue("reviewedDateTime", this.reviewedDateTime);
        writer.writeStringValue("reviewResult", this.reviewResult);
        writer.writeStringValue("status", this.status);
    };
    /**
     * Gets the status property value. The stage status. Possible values: InProgress, Initializing, Completed, Expired. Read-only.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The stage status. Possible values: InProgress, Initializing, Completed, Expired. Read-only.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
