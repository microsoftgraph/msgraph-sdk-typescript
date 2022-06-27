import {AccessReviewInstanceDecisionItem} from './accessReviewInstanceDecisionItem';
import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewStage} from './accessReviewStage';
import {createAccessReviewInstanceDecisionItemFromDiscriminatorValue} from './createAccessReviewInstanceDecisionItemFromDiscriminatorValue';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {AccessReviewInstanceDecisionItemImpl, AccessReviewReviewerScopeImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessReviewStageImpl extends EntityImpl implements AccessReviewStage {
    /** Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed. */
    public decisions?: AccessReviewInstanceDecisionItem[] | undefined;
    /** DateTime when review stage is scheduled to end. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. This property is the cumulative total of the durationInDays for all stages. Read-only. */
    public endDateTime?: Date | undefined;
    /** This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. */
    public fallbackReviewers?: AccessReviewReviewerScope[] | undefined;
    /** This collection of access review scopes is used to define who the reviewers are. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. */
    public reviewers?: AccessReviewReviewerScope[] | undefined;
    /** DateTime when review stage is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public startDateTime?: Date | undefined;
    /** Specifies the status of an accessReviewStage. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $orderby, and $filter (eq only). Read-only. */
    public status?: string | undefined;
    /**
     * Instantiates a new accessReviewStage and sets the default values.
     * @param accessReviewStageParameterValue 
     */
    public constructor(accessReviewStageParameterValue?: AccessReviewStage | undefined) {
        super(accessReviewStageParameterValue);
        const decisionsArrValue: AccessReviewInstanceDecisionItemImpl[] = []; accessReviewStageParameterValue?.decisions?.forEach(element => {decisionsArrValue.push(element instanceof AccessReviewInstanceDecisionItemImpl? element : new AccessReviewInstanceDecisionItemImpl(element));});
        this.decisions = decisionsArrValue;
        this.endDateTime = accessReviewStageParameterValue?.endDateTime;
        const fallbackReviewersArrValue: AccessReviewReviewerScopeImpl[] = []; accessReviewStageParameterValue?.fallbackReviewers?.forEach(element => {fallbackReviewersArrValue.push(element instanceof AccessReviewReviewerScopeImpl? element : new AccessReviewReviewerScopeImpl(element));});
        this.fallbackReviewers = fallbackReviewersArrValue;
        const reviewersArrValue: AccessReviewReviewerScopeImpl[] = []; accessReviewStageParameterValue?.reviewers?.forEach(element => {reviewersArrValue.push(element instanceof AccessReviewReviewerScopeImpl? element : new AccessReviewReviewerScopeImpl(element));});
        this.reviewers = reviewersArrValue;
        this.startDateTime = accessReviewStageParameterValue?.startDateTime;
        this.status = accessReviewStageParameterValue?.status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "decisions": n => { this.decisions = n.getCollectionOfObjectValues<AccessReviewInstanceDecisionItemImpl>(createAccessReviewInstanceDecisionItemFromDiscriminatorValue); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "fallbackReviewers": n => { this.fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScopeImpl>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "reviewers": n => { this.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScopeImpl>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
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
        if(this.decisions && this.decisions.length != 0){        const decisionsArrValue: AccessReviewInstanceDecisionItemImpl[] = []; this.decisions?.forEach(element => {decisionsArrValue.push(element instanceof AccessReviewInstanceDecisionItemImpl? element : new AccessReviewInstanceDecisionItemImpl(element));});
            writer.writeCollectionOfObjectValues<AccessReviewInstanceDecisionItemImpl>("decisions", decisionsArrValue);
        }
        if(this.endDateTime){
            writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.fallbackReviewers && this.fallbackReviewers.length != 0){        const fallbackReviewersArrValue: AccessReviewReviewerScopeImpl[] = []; this.fallbackReviewers?.forEach(element => {fallbackReviewersArrValue.push(element instanceof AccessReviewReviewerScopeImpl? element : new AccessReviewReviewerScopeImpl(element));});
            writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("fallbackReviewers", fallbackReviewersArrValue);
        }
        if(this.reviewers && this.reviewers.length != 0){        const reviewersArrValue: AccessReviewReviewerScopeImpl[] = []; this.reviewers?.forEach(element => {reviewersArrValue.push(element instanceof AccessReviewReviewerScopeImpl? element : new AccessReviewReviewerScopeImpl(element));});
            writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("reviewers", reviewersArrValue);
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.status){
            writer.writeStringValue("status", this.status);
        }
    };
}
