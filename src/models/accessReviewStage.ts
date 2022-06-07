import {createAccessReviewInstanceDecisionItemFromDiscriminatorValue} from './createAccessReviewInstanceDecisionItemFromDiscriminatorValue';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {AccessReviewInstanceDecisionItem, AccessReviewReviewerScope, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessReviewStage extends Entity implements Parsable {
    /** Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed. */
    private _decisions?: AccessReviewInstanceDecisionItem[] | undefined;
    /** DateTime when review stage is scheduled to end. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. This property is the cumulative total of the durationInDays for all stages. Read-only. */
    private _endDateTime?: Date | undefined;
    /** This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. */
    private _fallbackReviewers?: AccessReviewReviewerScope[] | undefined;
    /** This collection of access review scopes is used to define who the reviewers are. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. */
    private _reviewers?: AccessReviewReviewerScope[] | undefined;
    /** DateTime when review stage is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _startDateTime?: Date | undefined;
    /** Specifies the status of an accessReviewStage. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $orderby, and $filter (eq only). Read-only. */
    private _status?: string | undefined;
    /**
     * Instantiates a new accessReviewStage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the decisions property value. Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed.
     * @returns a accessReviewInstanceDecisionItem
     */
    public get decisions() {
        return this._decisions;
    };
    /**
     * Sets the decisions property value. Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed.
     * @param value Value to set for the decisions property.
     */
    public set decisions(value: AccessReviewInstanceDecisionItem[] | undefined) {
        this._decisions = value;
    };
    /**
     * Gets the endDateTime property value. DateTime when review stage is scheduled to end. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. This property is the cumulative total of the durationInDays for all stages. Read-only.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. DateTime when review stage is scheduled to end. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. This property is the cumulative total of the durationInDays for all stages. Read-only.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Gets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist.
     * @returns a accessReviewReviewerScope
     */
    public get fallbackReviewers() {
        return this._fallbackReviewers;
    };
    /**
     * Sets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist.
     * @param value Value to set for the fallbackReviewers property.
     */
    public set fallbackReviewers(value: AccessReviewReviewerScope[] | undefined) {
        this._fallbackReviewers = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "decisions": n => { this.decisions = n.getCollectionOfObjectValues<AccessReviewInstanceDecisionItem>(createAccessReviewInstanceDecisionItemFromDiscriminatorValue); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "fallbackReviewers": n => { this.fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "reviewers": n => { this.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Gets the reviewers property value. This collection of access review scopes is used to define who the reviewers are. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API.
     * @returns a accessReviewReviewerScope
     */
    public get reviewers() {
        return this._reviewers;
    };
    /**
     * Sets the reviewers property value. This collection of access review scopes is used to define who the reviewers are. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API.
     * @param value Value to set for the reviewers property.
     */
    public set reviewers(value: AccessReviewReviewerScope[] | undefined) {
        this._reviewers = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AccessReviewInstanceDecisionItem>("decisions", this.decisions);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("fallbackReviewers", this.fallbackReviewers);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", this.reviewers);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("status", this.status);
    };
    /**
     * Gets the startDateTime property value. DateTime when review stage is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. DateTime when review stage is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the status property value. Specifies the status of an accessReviewStage. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $orderby, and $filter (eq only). Read-only.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Specifies the status of an accessReviewStage. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $orderby, and $filter (eq only). Read-only.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
