import {AccessReviewInstanceDecisionItem} from './accessReviewInstanceDecisionItem';
import {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue} from './createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {AccessReviewInstanceDecisionItemResourceImpl, EntityImpl, IdentityImpl, UserIdentityImpl} from './index';
import {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessReviewInstanceDecisionItemImpl extends EntityImpl implements AccessReviewInstanceDecisionItem, Parsable {
    /** The identifier of the accessReviewInstance parent. Supports $select. Read-only. */
    public accessReviewId?: string | undefined;
    /** The identifier of the user who applied the decision. Read-only. */
    public appliedBy?: UserIdentity | undefined;
    /** The timestamp when the approval decision was applied. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Supports $select. Read-only. */
    public appliedDateTime?: Date | undefined;
    /** The result of applying the decision. Possible values: New, AppliedSuccessfully, AppliedWithUnknownFailure, AppliedSuccessfullyButObjectNotFound and ApplyNotSupported. Supports $select, $orderby, and $filter (eq only). Read-only. */
    public applyResult?: string | undefined;
    /** Result of the review. Possible values: Approve, Deny, NotReviewed, or DontKnow. Supports $select, $orderby, and $filter (eq only). */
    public decision?: string | undefined;
    /** Justification left by the reviewer when they made the decision. */
    public justification?: string | undefined;
    /** Every decision item in an access review represents a principal's access to a resource. This property represents details of the principal. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is 'Bob' and the resource is 'Sales'. Principals can be of two types - userIdentity and servicePrincipalIdentity. Supports $select. Read-only. */
    public principal?: Identity | undefined;
    /** Link to the principal object. For example: https://graph.microsoft.com/v1.0/users/a6c7aecb-cbfd-4763-87ef-e91b4bd509d9. Read-only. */
    public principalLink?: string | undefined;
    /** A system-generated recommendation for the approval decision based off last interactive sign-in to tenant. Recommend approve if sign-in is within thirty days of start of review. Recommend deny if sign-in is greater than thirty days of start of review. Recommendation not available otherwise. Possible values: Approve, Deny, or NoInfoAvailable. Supports $select, $orderby, and $filter (eq only). Read-only. */
    public recommendation?: string | undefined;
    /** Every decision item in an access review represents a principal's access to a resource. This property represents details of the resource. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is Bob and the resource is 'Sales'. Resources can be of multiple types. See accessReviewInstanceDecisionItemResource. Read-only. */
    public resource?: AccessReviewInstanceDecisionItemResource | undefined;
    /** A link to the resource. For example, https://graph.microsoft.com/v1.0/servicePrincipals/c86300f3-8695-4320-9f6e-32a2555f5ff8. Supports $select. Read-only. */
    public resourceLink?: string | undefined;
    /** The identifier of the reviewer. Supports $select. Read-only. */
    public reviewedBy?: UserIdentity | undefined;
    /** The timestamp when the review decision occurred. Supports $select. Read-only. */
    public reviewedDateTime?: Date | undefined;
    /**
     * Instantiates a new accessReviewInstanceDecisionItem and sets the default values.
     * @param accessReviewInstanceDecisionItemParameterValue 
     */
    public constructor(accessReviewInstanceDecisionItemParameterValue?: AccessReviewInstanceDecisionItem | undefined) {
        super();
        this.accessReviewId = accessReviewInstanceDecisionItemParameterValue?.accessReviewId ;
        this.appliedBy = accessReviewInstanceDecisionItemParameterValue?.appliedBy ;
        this.appliedDateTime = accessReviewInstanceDecisionItemParameterValue?.appliedDateTime ;
        this.applyResult = accessReviewInstanceDecisionItemParameterValue?.applyResult ;
        this.decision = accessReviewInstanceDecisionItemParameterValue?.decision ;
        this.justification = accessReviewInstanceDecisionItemParameterValue?.justification ;
        this.principal = accessReviewInstanceDecisionItemParameterValue?.principal ;
        this.principalLink = accessReviewInstanceDecisionItemParameterValue?.principalLink ;
        this.recommendation = accessReviewInstanceDecisionItemParameterValue?.recommendation ;
        this.resource = accessReviewInstanceDecisionItemParameterValue?.resource ;
        this.resourceLink = accessReviewInstanceDecisionItemParameterValue?.resourceLink ;
        this.reviewedBy = accessReviewInstanceDecisionItemParameterValue?.reviewedBy ;
        this.reviewedDateTime = accessReviewInstanceDecisionItemParameterValue?.reviewedDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessReviewId": n => { this.accessReviewId = n.getStringValue(); },
            "appliedBy": n => { this.appliedBy = n.getObjectValue<UserIdentityImpl>(createUserIdentityFromDiscriminatorValue); },
            "appliedDateTime": n => { this.appliedDateTime = n.getDateValue(); },
            "applyResult": n => { this.applyResult = n.getStringValue(); },
            "decision": n => { this.decision = n.getStringValue(); },
            "justification": n => { this.justification = n.getStringValue(); },
            "principal": n => { this.principal = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
            "principalLink": n => { this.principalLink = n.getStringValue(); },
            "recommendation": n => { this.recommendation = n.getStringValue(); },
            "resource": n => { this.resource = n.getObjectValue<AccessReviewInstanceDecisionItemResourceImpl>(createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue); },
            "resourceLink": n => { this.resourceLink = n.getStringValue(); },
            "reviewedBy": n => { this.reviewedBy = n.getObjectValue<UserIdentityImpl>(createUserIdentityFromDiscriminatorValue); },
            "reviewedDateTime": n => { this.reviewedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accessReviewId){
        writer.writeStringValue("accessReviewId", this.accessReviewId);
        }
        if(this.appliedBy){
        writer.writeObjectValue<UserIdentityImpl>("appliedBy", new UserIdentityImpl(this.appliedBy));
        }
        if(this.appliedDateTime){
        writer.writeDateValue("appliedDateTime", this.appliedDateTime);
        }
        if(this.applyResult){
        writer.writeStringValue("applyResult", this.applyResult);
        }
        if(this.decision){
        writer.writeStringValue("decision", this.decision);
        }
        if(this.justification){
        writer.writeStringValue("justification", this.justification);
        }
        if(this.principal){
        writer.writeObjectValue<IdentityImpl>("principal", new IdentityImpl(this.principal));
        }
        if(this.principalLink){
        writer.writeStringValue("principalLink", this.principalLink);
        }
        if(this.recommendation){
        writer.writeStringValue("recommendation", this.recommendation);
        }
        if(this.resource){
        writer.writeObjectValue<AccessReviewInstanceDecisionItemResourceImpl>("resource", new AccessReviewInstanceDecisionItemResourceImpl(this.resource));
        }
        if(this.resourceLink){
        writer.writeStringValue("resourceLink", this.resourceLink);
        }
        if(this.reviewedBy){
        writer.writeObjectValue<UserIdentityImpl>("reviewedBy", new UserIdentityImpl(this.reviewedBy));
        }
        if(this.reviewedDateTime){
        writer.writeDateValue("reviewedDateTime", this.reviewedDateTime);
        }
    };
}
