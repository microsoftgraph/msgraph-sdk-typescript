import {AccessReviewInstance} from './accessReviewInstance';
import {AccessReviewInstanceDecisionItem} from './accessReviewInstanceDecisionItem';
import {AccessReviewReviewer} from './accessReviewReviewer';
import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewScope} from './accessReviewScope';
import {createAccessReviewInstanceDecisionItemFromDiscriminatorValue} from './createAccessReviewInstanceDecisionItemFromDiscriminatorValue';
import {createAccessReviewReviewerFromDiscriminatorValue} from './createAccessReviewReviewerFromDiscriminatorValue';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {createAccessReviewScopeFromDiscriminatorValue} from './createAccessReviewScopeFromDiscriminatorValue';
import {AccessReviewInstanceDecisionItemImpl, AccessReviewReviewerImpl, AccessReviewReviewerScopeImpl, AccessReviewScopeImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessReviewInstanceImpl extends EntityImpl implements AccessReviewInstance, Parsable {
    /** Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only. */
    public contactedReviewers?: AccessReviewReviewer[] | undefined;
    /** Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed. */
    public decisions?: AccessReviewInstanceDecisionItem[] | undefined;
    /** DateTime when review instance is scheduled to end.The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only. */
    public endDateTime?: Date | undefined;
    /** This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. Supports $select. */
    public fallbackReviewers?: AccessReviewReviewerScope[] | undefined;
    /** This collection of access review scopes is used to define who the reviewers are. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. */
    public reviewers?: AccessReviewReviewerScope[] | undefined;
    /** Created based on scope and instanceEnumerationScope at the accessReviewScheduleDefinition level. Defines the scope of users reviewed in a group. Supports $select and $filter (contains only). Read-only. */
    public scope?: AccessReviewScope | undefined;
    /** DateTime when review instance is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only. */
    public startDateTime?: Date | undefined;
    /** Specifies the status of an accessReview. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $select, $orderby, and $filter (eq only). Read-only. */
    public status?: string | undefined;
    /**
     * Instantiates a new accessReviewInstance and sets the default values.
     * @param accessReviewInstanceParameterValue 
     */
    public constructor(accessReviewInstanceParameterValue?: AccessReviewInstance | undefined) {
        super();
        this.contactedReviewers = accessReviewInstanceParameterValue?.contactedReviewers ;
        this.decisions = accessReviewInstanceParameterValue?.decisions ;
        this.endDateTime = accessReviewInstanceParameterValue?.endDateTime ;
        this.fallbackReviewers = accessReviewInstanceParameterValue?.fallbackReviewers ;
        this.reviewers = accessReviewInstanceParameterValue?.reviewers ;
        this.scope = accessReviewInstanceParameterValue?.scope ;
        this.startDateTime = accessReviewInstanceParameterValue?.startDateTime ;
        this.status = accessReviewInstanceParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contactedReviewers": n => { this.contactedReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerImpl>(createAccessReviewReviewerFromDiscriminatorValue); },
            "decisions": n => { this.decisions = n.getCollectionOfObjectValues<AccessReviewInstanceDecisionItemImpl>(createAccessReviewInstanceDecisionItemFromDiscriminatorValue); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "fallbackReviewers": n => { this.fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScopeImpl>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "reviewers": n => { this.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScopeImpl>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "scope": n => { this.scope = n.getObjectValue<AccessReviewScopeImpl>(createAccessReviewScopeFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.contactedReviewers && this.contactedReviewers.length != 0){        const contactedReviewersArrValue: AccessReviewReviewerImpl[] = []; this.contactedReviewers?.forEach(element => {contactedReviewersArrValue.push(new AccessReviewReviewerImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewReviewerImpl>("contactedReviewers", contactedReviewersArrValue);
        }
        if(this.decisions && this.decisions.length != 0){        const decisionsArrValue: AccessReviewInstanceDecisionItemImpl[] = []; this.decisions?.forEach(element => {decisionsArrValue.push(new AccessReviewInstanceDecisionItemImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewInstanceDecisionItemImpl>("decisions", decisionsArrValue);
        }
        if(this.endDateTime){
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.fallbackReviewers && this.fallbackReviewers.length != 0){        const fallbackReviewersArrValue: AccessReviewReviewerScopeImpl[] = []; this.fallbackReviewers?.forEach(element => {fallbackReviewersArrValue.push(new AccessReviewReviewerScopeImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("fallbackReviewers", fallbackReviewersArrValue);
        }
        if(this.reviewers && this.reviewers.length != 0){        const reviewersArrValue: AccessReviewReviewerScopeImpl[] = []; this.reviewers?.forEach(element => {reviewersArrValue.push(new AccessReviewReviewerScopeImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("reviewers", reviewersArrValue);
        }
        if(this.scope){
        writer.writeObjectValue<AccessReviewScopeImpl>("scope", new AccessReviewScopeImpl(this.scope));
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.status){
        writer.writeStringValue("status", this.status);
        }
    };
}
