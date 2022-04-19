import {createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue} from './createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {AccessReviewInstanceDecisionItemResource, Entity, Identity, UserIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewInstanceDecisionItem extends Entity implements Parsable {
    /** The identifier of the accessReviewInstance parent. Supports $select. Read-only.  */
    private _accessReviewId?: string | undefined;
    /** The identifier of the user who applied the decision. Read-only.  */
    private _appliedBy?: UserIdentity | undefined;
    /** The timestamp when the approval decision was applied. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Supports $select. Read-only.  */
    private _appliedDateTime?: Date | undefined;
    /** The result of applying the decision. Possible values: New, AppliedSuccessfully, AppliedWithUnknownFailure, AppliedSuccessfullyButObjectNotFound and ApplyNotSupported. Supports $select, $orderby, and $filter (eq only). Read-only.  */
    private _applyResult?: string | undefined;
    /** Result of the review. Possible values: Approve, Deny, NotReviewed, or DontKnow. Supports $select, $orderby, and $filter (eq only).  */
    private _decision?: string | undefined;
    /** Justification left by the reviewer when they made the decision.  */
    private _justification?: string | undefined;
    /** Every decision item in an access review represents a principal's access to a resource. This property represents details of the principal. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is 'Bob' and the resource is 'Sales'. Principals can be of two types - userIdentity and servicePrincipalIdentity. Supports $select. Read-only.  */
    private _principal?: Identity | undefined;
    /** A link to the principal object. For example, https://graph.microsoft.com/v1.0/users/a6c7aecb-cbfd-4763-87ef-e91b4bd509d9. Read-only.  */
    private _principalLink?: string | undefined;
    /** A system-generated recommendation for the approval decision based off last interactive sign-in to tenant. Recommend approve if sign-in is within thirty days of start of review. Recommend deny if sign-in is greater than thirty days of start of review. Recommendation not available otherwise. Possible values: Approve, Deny, or NoInfoAvailable. Supports $select, $orderby, and $filter (eq only). Read-only.  */
    private _recommendation?: string | undefined;
    /** Every decision item in an access review represents a principal's access to a resource. This property represents details of the resource. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is Bob and the resource is 'Sales'. Resources can be of multiple types. See accessReviewInstanceDecisionItemResource. Read-only.  */
    private _resource?: AccessReviewInstanceDecisionItemResource | undefined;
    /** A link to the resource. For example, https://graph.microsoft.com/v1.0/servicePrincipals/c86300f3-8695-4320-9f6e-32a2555f5ff8. Supports $select. Read-only.  */
    private _resourceLink?: string | undefined;
    /** The identifier of the reviewer. Supports $select. Read-only.  */
    private _reviewedBy?: UserIdentity | undefined;
    /** The timestamp when the review decision occurred. Supports $select. Read-only.  */
    private _reviewedDateTime?: Date | undefined;
    /**
     * Gets the accessReviewId property value. The identifier of the accessReviewInstance parent. Supports $select. Read-only.
     * @returns a string
     */
    public get accessReviewId() {
        return this._accessReviewId;
    };
    /**
     * Sets the accessReviewId property value. The identifier of the accessReviewInstance parent. Supports $select. Read-only.
     * @param value Value to set for the accessReviewId property.
     */
    public set accessReviewId(value: string | undefined) {
        this._accessReviewId = value;
    };
    /**
     * Gets the appliedBy property value. The identifier of the user who applied the decision. Read-only.
     * @returns a userIdentity
     */
    public get appliedBy() {
        return this._appliedBy;
    };
    /**
     * Sets the appliedBy property value. The identifier of the user who applied the decision. Read-only.
     * @param value Value to set for the appliedBy property.
     */
    public set appliedBy(value: UserIdentity | undefined) {
        this._appliedBy = value;
    };
    /**
     * Gets the appliedDateTime property value. The timestamp when the approval decision was applied. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Supports $select. Read-only.
     * @returns a Date
     */
    public get appliedDateTime() {
        return this._appliedDateTime;
    };
    /**
     * Sets the appliedDateTime property value. The timestamp when the approval decision was applied. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Supports $select. Read-only.
     * @param value Value to set for the appliedDateTime property.
     */
    public set appliedDateTime(value: Date | undefined) {
        this._appliedDateTime = value;
    };
    /**
     * Gets the applyResult property value. The result of applying the decision. Possible values: New, AppliedSuccessfully, AppliedWithUnknownFailure, AppliedSuccessfullyButObjectNotFound and ApplyNotSupported. Supports $select, $orderby, and $filter (eq only). Read-only.
     * @returns a string
     */
    public get applyResult() {
        return this._applyResult;
    };
    /**
     * Sets the applyResult property value. The result of applying the decision. Possible values: New, AppliedSuccessfully, AppliedWithUnknownFailure, AppliedSuccessfullyButObjectNotFound and ApplyNotSupported. Supports $select, $orderby, and $filter (eq only). Read-only.
     * @param value Value to set for the applyResult property.
     */
    public set applyResult(value: string | undefined) {
        this._applyResult = value;
    };
    /**
     * Instantiates a new accessReviewInstanceDecisionItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the decision property value. Result of the review. Possible values: Approve, Deny, NotReviewed, or DontKnow. Supports $select, $orderby, and $filter (eq only).
     * @returns a string
     */
    public get decision() {
        return this._decision;
    };
    /**
     * Sets the decision property value. Result of the review. Possible values: Approve, Deny, NotReviewed, or DontKnow. Supports $select, $orderby, and $filter (eq only).
     * @param value Value to set for the decision property.
     */
    public set decision(value: string | undefined) {
        this._decision = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessReviewId": n => { this.accessReviewId = n.getStringValue(); },
            "appliedBy": n => { this.appliedBy = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); },
            "appliedDateTime": n => { this.appliedDateTime = n.getDateValue(); },
            "applyResult": n => { this.applyResult = n.getStringValue(); },
            "decision": n => { this.decision = n.getStringValue(); },
            "justification": n => { this.justification = n.getStringValue(); },
            "principal": n => { this.principal = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
            "principalLink": n => { this.principalLink = n.getStringValue(); },
            "recommendation": n => { this.recommendation = n.getStringValue(); },
            "resource": n => { this.resource = n.getObjectValue<AccessReviewInstanceDecisionItemResource>(createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue); },
            "resourceLink": n => { this.resourceLink = n.getStringValue(); },
            "reviewedBy": n => { this.reviewedBy = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); },
            "reviewedDateTime": n => { this.reviewedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the justification property value. Justification left by the reviewer when they made the decision.
     * @returns a string
     */
    public get justification() {
        return this._justification;
    };
    /**
     * Sets the justification property value. Justification left by the reviewer when they made the decision.
     * @param value Value to set for the justification property.
     */
    public set justification(value: string | undefined) {
        this._justification = value;
    };
    /**
     * Gets the principal property value. Every decision item in an access review represents a principal's access to a resource. This property represents details of the principal. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is 'Bob' and the resource is 'Sales'. Principals can be of two types - userIdentity and servicePrincipalIdentity. Supports $select. Read-only.
     * @returns a identity
     */
    public get principal() {
        return this._principal;
    };
    /**
     * Sets the principal property value. Every decision item in an access review represents a principal's access to a resource. This property represents details of the principal. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is 'Bob' and the resource is 'Sales'. Principals can be of two types - userIdentity and servicePrincipalIdentity. Supports $select. Read-only.
     * @param value Value to set for the principal property.
     */
    public set principal(value: Identity | undefined) {
        this._principal = value;
    };
    /**
     * Gets the principalLink property value. A link to the principal object. For example, https://graph.microsoft.com/v1.0/users/a6c7aecb-cbfd-4763-87ef-e91b4bd509d9. Read-only.
     * @returns a string
     */
    public get principalLink() {
        return this._principalLink;
    };
    /**
     * Sets the principalLink property value. A link to the principal object. For example, https://graph.microsoft.com/v1.0/users/a6c7aecb-cbfd-4763-87ef-e91b4bd509d9. Read-only.
     * @param value Value to set for the principalLink property.
     */
    public set principalLink(value: string | undefined) {
        this._principalLink = value;
    };
    /**
     * Gets the recommendation property value. A system-generated recommendation for the approval decision based off last interactive sign-in to tenant. Recommend approve if sign-in is within thirty days of start of review. Recommend deny if sign-in is greater than thirty days of start of review. Recommendation not available otherwise. Possible values: Approve, Deny, or NoInfoAvailable. Supports $select, $orderby, and $filter (eq only). Read-only.
     * @returns a string
     */
    public get recommendation() {
        return this._recommendation;
    };
    /**
     * Sets the recommendation property value. A system-generated recommendation for the approval decision based off last interactive sign-in to tenant. Recommend approve if sign-in is within thirty days of start of review. Recommend deny if sign-in is greater than thirty days of start of review. Recommendation not available otherwise. Possible values: Approve, Deny, or NoInfoAvailable. Supports $select, $orderby, and $filter (eq only). Read-only.
     * @param value Value to set for the recommendation property.
     */
    public set recommendation(value: string | undefined) {
        this._recommendation = value;
    };
    /**
     * Gets the resource property value. Every decision item in an access review represents a principal's access to a resource. This property represents details of the resource. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is Bob and the resource is 'Sales'. Resources can be of multiple types. See accessReviewInstanceDecisionItemResource. Read-only.
     * @returns a accessReviewInstanceDecisionItemResource
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Every decision item in an access review represents a principal's access to a resource. This property represents details of the resource. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is Bob and the resource is 'Sales'. Resources can be of multiple types. See accessReviewInstanceDecisionItemResource. Read-only.
     * @param value Value to set for the resource property.
     */
    public set resource(value: AccessReviewInstanceDecisionItemResource | undefined) {
        this._resource = value;
    };
    /**
     * Gets the resourceLink property value. A link to the resource. For example, https://graph.microsoft.com/v1.0/servicePrincipals/c86300f3-8695-4320-9f6e-32a2555f5ff8. Supports $select. Read-only.
     * @returns a string
     */
    public get resourceLink() {
        return this._resourceLink;
    };
    /**
     * Sets the resourceLink property value. A link to the resource. For example, https://graph.microsoft.com/v1.0/servicePrincipals/c86300f3-8695-4320-9f6e-32a2555f5ff8. Supports $select. Read-only.
     * @param value Value to set for the resourceLink property.
     */
    public set resourceLink(value: string | undefined) {
        this._resourceLink = value;
    };
    /**
     * Gets the reviewedBy property value. The identifier of the reviewer. Supports $select. Read-only.
     * @returns a userIdentity
     */
    public get reviewedBy() {
        return this._reviewedBy;
    };
    /**
     * Sets the reviewedBy property value. The identifier of the reviewer. Supports $select. Read-only.
     * @param value Value to set for the reviewedBy property.
     */
    public set reviewedBy(value: UserIdentity | undefined) {
        this._reviewedBy = value;
    };
    /**
     * Gets the reviewedDateTime property value. The timestamp when the review decision occurred. Supports $select. Read-only.
     * @returns a Date
     */
    public get reviewedDateTime() {
        return this._reviewedDateTime;
    };
    /**
     * Sets the reviewedDateTime property value. The timestamp when the review decision occurred. Supports $select. Read-only.
     * @param value Value to set for the reviewedDateTime property.
     */
    public set reviewedDateTime(value: Date | undefined) {
        this._reviewedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("accessReviewId", this.accessReviewId);
        writer.writeObjectValue<UserIdentity>("appliedBy", this.appliedBy);
        writer.writeDateValue("appliedDateTime", this.appliedDateTime);
        writer.writeStringValue("applyResult", this.applyResult);
        writer.writeStringValue("decision", this.decision);
        writer.writeStringValue("justification", this.justification);
        writer.writeObjectValue<Identity>("principal", this.principal);
        writer.writeStringValue("principalLink", this.principalLink);
        writer.writeStringValue("recommendation", this.recommendation);
        writer.writeObjectValue<AccessReviewInstanceDecisionItemResource>("resource", this.resource);
        writer.writeStringValue("resourceLink", this.resourceLink);
        writer.writeObjectValue<UserIdentity>("reviewedBy", this.reviewedBy);
        writer.writeDateValue("reviewedDateTime", this.reviewedDateTime);
    };
}
