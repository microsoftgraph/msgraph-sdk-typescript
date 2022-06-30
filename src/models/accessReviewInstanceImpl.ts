import {AccessReviewInstance} from './accessReviewInstance';
import {AccessReviewInstanceDecisionItem} from './accessReviewInstanceDecisionItem';
import {AccessReviewReviewer} from './accessReviewReviewer';
import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewScope} from './accessReviewScope';
import {AccessReviewStage} from './accessReviewStage';
import {createAccessReviewInstanceDecisionItemFromDiscriminatorValue} from './createAccessReviewInstanceDecisionItemFromDiscriminatorValue';
import {createAccessReviewReviewerFromDiscriminatorValue} from './createAccessReviewReviewerFromDiscriminatorValue';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {createAccessReviewScopeFromDiscriminatorValue} from './createAccessReviewScopeFromDiscriminatorValue';
import {createAccessReviewStageFromDiscriminatorValue} from './createAccessReviewStageFromDiscriminatorValue';
import {AccessReviewInstanceDecisionItemImpl, AccessReviewReviewerImpl, AccessReviewReviewerScopeImpl, AccessReviewScopeImpl, AccessReviewStageImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessReviewInstanceImpl extends EntityImpl implements AccessReviewInstance {
    /** Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only. */
    private _contactedReviewers?: AccessReviewReviewer[] | undefined;
    /** Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed. */
    private _decisions?: AccessReviewInstanceDecisionItem[] | undefined;
    /** DateTime when review instance is scheduled to end.The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only. */
    private _endDateTime?: Date | undefined;
    /** This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. Supports $select. */
    private _fallbackReviewers?: AccessReviewReviewerScope[] | undefined;
    /** This collection of access review scopes is used to define who the reviewers are. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. */
    private _reviewers?: AccessReviewReviewerScope[] | undefined;
    /** Created based on scope and instanceEnumerationScope at the accessReviewScheduleDefinition level. Defines the scope of users reviewed in a group. Supports $select and $filter (contains only). Read-only. */
    private _scope?: AccessReviewScope | undefined;
    /** If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition. */
    private _stages?: AccessReviewStage[] | undefined;
    /** DateTime when review instance is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only. */
    private _startDateTime?: Date | undefined;
    /** Specifies the status of an accessReview. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $select, $orderby, and $filter (eq only). Read-only. */
    private _status?: string | undefined;
    /**
     * Instantiates a new accessReviewInstance and sets the default values.
     * @param accessReviewInstanceParameterValue 
     */
    public constructor(accessReviewInstanceParameterValue?: AccessReviewInstance | undefined) {
        super(accessReviewInstanceParameterValue);
        this._contactedReviewers = accessReviewInstanceParameterValue?.contactedReviewers;
        this._decisions = accessReviewInstanceParameterValue?.decisions;
        this._endDateTime = accessReviewInstanceParameterValue?.endDateTime;
        this._fallbackReviewers = accessReviewInstanceParameterValue?.fallbackReviewers;
        this._reviewers = accessReviewInstanceParameterValue?.reviewers;
        this._scope = accessReviewInstanceParameterValue?.scope;
        this._stages = accessReviewInstanceParameterValue?.stages;
        this._startDateTime = accessReviewInstanceParameterValue?.startDateTime;
        this._status = accessReviewInstanceParameterValue?.status;
    };
    /**
     * Gets the contactedReviewers property value. Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
     * @returns a AccessReviewReviewerInterface
     */
    public get contactedReviewers() {
        return this._contactedReviewers;
    };
    /**
     * Sets the contactedReviewers property value. Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
     * @param value Value to set for the contactedReviewers property.
     */
    public set contactedReviewers(value: AccessReviewReviewer[] | undefined) {
        if(value) {
            const contactedReviewersArrValue: AccessReviewReviewerImpl[] = [];
            this.contactedReviewers?.forEach(element => {
                contactedReviewersArrValue.push((element instanceof AccessReviewReviewerImpl? element:new AccessReviewReviewerImpl(element)));
            });
            this._contactedReviewers = contactedReviewersArrValue;
        }
    };
    /**
     * Gets the decisions property value. Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
     * @returns a AccessReviewInstanceDecisionItemInterface
     */
    public get decisions() {
        return this._decisions;
    };
    /**
     * Sets the decisions property value. Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
     * @param value Value to set for the decisions property.
     */
    public set decisions(value: AccessReviewInstanceDecisionItem[] | undefined) {
        if(value) {
            const decisionsArrValue: AccessReviewInstanceDecisionItemImpl[] = [];
            this.decisions?.forEach(element => {
                decisionsArrValue.push((element instanceof AccessReviewInstanceDecisionItemImpl? element:new AccessReviewInstanceDecisionItemImpl(element)));
            });
            this._decisions = decisionsArrValue;
        }
    };
    /**
     * Gets the endDateTime property value. DateTime when review instance is scheduled to end.The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. DateTime when review instance is scheduled to end.The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        if(value) {
            this._endDateTime = value;
        }
    };
    /**
     * Gets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. Supports $select.
     * @returns a AccessReviewReviewerScopeInterface
     */
    public get fallbackReviewers() {
        return this._fallbackReviewers;
    };
    /**
     * Sets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. Supports $select.
     * @param value Value to set for the fallbackReviewers property.
     */
    public set fallbackReviewers(value: AccessReviewReviewerScope[] | undefined) {
        if(value) {
            const fallbackReviewersArrValue: AccessReviewReviewerScopeImpl[] = [];
            this.fallbackReviewers?.forEach(element => {
                fallbackReviewersArrValue.push((element instanceof AccessReviewReviewerScopeImpl? element:new AccessReviewReviewerScopeImpl(element)));
            });
            this._fallbackReviewers = fallbackReviewersArrValue;
        }
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
            "stages": n => { this.stages = n.getCollectionOfObjectValues<AccessReviewStageImpl>(createAccessReviewStageFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Gets the reviewers property value. This collection of access review scopes is used to define who the reviewers are. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API.
     * @returns a AccessReviewReviewerScopeInterface
     */
    public get reviewers() {
        return this._reviewers;
    };
    /**
     * Sets the reviewers property value. This collection of access review scopes is used to define who the reviewers are. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API.
     * @param value Value to set for the reviewers property.
     */
    public set reviewers(value: AccessReviewReviewerScope[] | undefined) {
        if(value) {
            const reviewersArrValue: AccessReviewReviewerScopeImpl[] = [];
            this.reviewers?.forEach(element => {
                reviewersArrValue.push((element instanceof AccessReviewReviewerScopeImpl? element:new AccessReviewReviewerScopeImpl(element)));
            });
            this._reviewers = reviewersArrValue;
        }
    };
    /**
     * Gets the scope property value. Created based on scope and instanceEnumerationScope at the accessReviewScheduleDefinition level. Defines the scope of users reviewed in a group. Supports $select and $filter (contains only). Read-only.
     * @returns a AccessReviewScopeInterface
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. Created based on scope and instanceEnumerationScope at the accessReviewScheduleDefinition level. Defines the scope of users reviewed in a group. Supports $select and $filter (contains only). Read-only.
     * @param value Value to set for the scope property.
     */
    public set scope(value: AccessReviewScope | undefined) {
        if(value) {
            this._scope = value instanceof AccessReviewScopeImpl? value : new AccessReviewScopeImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.contactedReviewers && this.contactedReviewers.length != 0){        const contactedReviewersArrValue: AccessReviewReviewerImpl[] = [];
        this.contactedReviewers?.forEach(element => {
            contactedReviewersArrValue.push((element instanceof AccessReviewReviewerImpl? element:new AccessReviewReviewerImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewReviewerImpl>("contactedReviewers", contactedReviewersArrValue);
        }
        if(this.decisions && this.decisions.length != 0){        const decisionsArrValue: AccessReviewInstanceDecisionItemImpl[] = [];
        this.decisions?.forEach(element => {
            decisionsArrValue.push((element instanceof AccessReviewInstanceDecisionItemImpl? element:new AccessReviewInstanceDecisionItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewInstanceDecisionItemImpl>("decisions", decisionsArrValue);
        }
        if(this.endDateTime){
            writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.fallbackReviewers && this.fallbackReviewers.length != 0){        const fallbackReviewersArrValue: AccessReviewReviewerScopeImpl[] = [];
        this.fallbackReviewers?.forEach(element => {
            fallbackReviewersArrValue.push((element instanceof AccessReviewReviewerScopeImpl? element:new AccessReviewReviewerScopeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("fallbackReviewers", fallbackReviewersArrValue);
        }
        if(this.reviewers && this.reviewers.length != 0){        const reviewersArrValue: AccessReviewReviewerScopeImpl[] = [];
        this.reviewers?.forEach(element => {
            reviewersArrValue.push((element instanceof AccessReviewReviewerScopeImpl? element:new AccessReviewReviewerScopeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("reviewers", reviewersArrValue);
        }
        if(this.scope){
            writer.writeObjectValue<AccessReviewScopeImpl>("scope", (!this.scope || this.scope instanceof AccessReviewScopeImpl? this.scope : new AccessReviewScopeImpl(this.scope)));
        }
        if(this.stages && this.stages.length != 0){        const stagesArrValue: AccessReviewStageImpl[] = [];
        this.stages?.forEach(element => {
            stagesArrValue.push((element instanceof AccessReviewStageImpl? element:new AccessReviewStageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewStageImpl>("stages", stagesArrValue);
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.status){
            writer.writeStringValue("status", this.status);
        }
    };
    /**
     * Gets the stages property value. If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.
     * @returns a AccessReviewStageInterface
     */
    public get stages() {
        return this._stages;
    };
    /**
     * Sets the stages property value. If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.
     * @param value Value to set for the stages property.
     */
    public set stages(value: AccessReviewStage[] | undefined) {
        if(value) {
            const stagesArrValue: AccessReviewStageImpl[] = [];
            this.stages?.forEach(element => {
                stagesArrValue.push((element instanceof AccessReviewStageImpl? element:new AccessReviewStageImpl(element)));
            });
            this._stages = stagesArrValue;
        }
    };
    /**
     * Gets the startDateTime property value. DateTime when review instance is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. DateTime when review instance is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        if(value) {
            this._startDateTime = value;
        }
    };
    /**
     * Gets the status property value. Specifies the status of an accessReview. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $select, $orderby, and $filter (eq only). Read-only.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Specifies the status of an accessReview. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $select, $orderby, and $filter (eq only). Read-only.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        if(value) {
            this._status = value;
        }
    };
}
