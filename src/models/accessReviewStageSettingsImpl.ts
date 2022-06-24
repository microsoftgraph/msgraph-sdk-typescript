import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewStageSettings} from './accessReviewStageSettings';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {AccessReviewReviewerScopeImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewStageSettingsImpl implements AccessReviewStageSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicate which decisions will go to the next stage. Can be a sub-set of Approve, Deny, Recommendation, or NotReviewed. If not provided, all decisions will go to the next stage. Optional. */
    public decisionsThatWillMoveToNextStage?: string[] | undefined;
    /** Defines the sequential or parallel order of the stages and depends on the stageId. Only sequential stages are currently supported. For example, if stageId is 2, then dependsOn must be 1. If stageId is 1, do not specify dependsOn. Required if stageId is not 1. */
    public dependsOn?: string[] | undefined;
    /** The duration of the stage. Required.  NOTE: The cumulative value of this property across all stages  1. Will override the instanceDurationInDays setting on the accessReviewScheduleDefinition object. 2. Cannot exceed the length of one recurrence. That is, if the review recurs weekly, the cumulative durationInDays cannot exceed 7. */
    public durationInDays?: number | undefined;
    /** If provided, the fallback reviewers are asked to complete a review if the primary reviewers do not exist. For example, if managers are selected as reviewers and a principal under review does not have a manager in Azure AD, the fallback reviewers are asked to review that principal. NOTE: The value of this property will override the corresponding setting on the accessReviewScheduleDefinition object. */
    public fallbackReviewers?: AccessReviewReviewerScope[] | undefined;
    /** Indicates whether showing recommendations to reviewers is enabled. Required. NOTE: The value of this property will override override the corresponding setting on the accessReviewScheduleDefinition object. */
    public recommendationsEnabled?: boolean | undefined;
    /** Defines who the reviewers are. If none are specified, the review is a self-review (users review their own access).  For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will override the corresponding setting on the accessReviewScheduleDefinition. */
    public reviewers?: AccessReviewReviewerScope[] | undefined;
    /** Unique identifier of the accessReviewStageSettings. The stageId will be used in dependsOn property to indicate the stage relationship. Required. */
    public stageId?: string | undefined;
    /**
     * Instantiates a new accessReviewStageSettings and sets the default values.
     * @param accessReviewStageSettingsParameterValue 
     */
    public constructor(accessReviewStageSettingsParameterValue?: AccessReviewStageSettings | undefined) {
        this.additionalData = accessReviewStageSettingsParameterValue?.additionalData ? accessReviewStageSettingsParameterValue?.additionalData! : {};
        this.decisionsThatWillMoveToNextStage = accessReviewStageSettingsParameterValue?.decisionsThatWillMoveToNextStage;
        this.dependsOn = accessReviewStageSettingsParameterValue?.dependsOn;
        this.durationInDays = accessReviewStageSettingsParameterValue?.durationInDays;
        const fallbackReviewersArrValue: AccessReviewReviewerScopeImpl[] = []; accessReviewStageSettingsParameterValue.fallbackReviewers?.forEach(element => {fallbackReviewersArrValue.push(element instanceof AccessReviewReviewerScopeImpl? element : new AccessReviewReviewerScopeImpl(element));});
        this.fallbackReviewers = fallbackReviewersArrValue;
        this.recommendationsEnabled = accessReviewStageSettingsParameterValue?.recommendationsEnabled;
        const reviewersArrValue: AccessReviewReviewerScopeImpl[] = []; accessReviewStageSettingsParameterValue.reviewers?.forEach(element => {reviewersArrValue.push(element instanceof AccessReviewReviewerScopeImpl? element : new AccessReviewReviewerScopeImpl(element));});
        this.reviewers = reviewersArrValue;
        this.stageId = accessReviewStageSettingsParameterValue?.stageId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "decisionsThatWillMoveToNextStage": n => { this.decisionsThatWillMoveToNextStage = n.getCollectionOfPrimitiveValues<string>(); },
            "dependsOn": n => { this.dependsOn = n.getCollectionOfPrimitiveValues<string>(); },
            "durationInDays": n => { this.durationInDays = n.getNumberValue(); },
            "fallbackReviewers": n => { this.fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScopeImpl>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "recommendationsEnabled": n => { this.recommendationsEnabled = n.getBooleanValue(); },
            "reviewers": n => { this.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScopeImpl>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "stageId": n => { this.stageId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.decisionsThatWillMoveToNextStage){
            writer.writeCollectionOfPrimitiveValues<string>("decisionsThatWillMoveToNextStage", this.decisionsThatWillMoveToNextStage);
        }
        if(this.dependsOn){
            writer.writeCollectionOfPrimitiveValues<string>("dependsOn", this.dependsOn);
        }
        if(this.durationInDays){
            writer.writeNumberValue("durationInDays", this.durationInDays);
        }
        if(this.fallbackReviewers && this.fallbackReviewers.length != 0){        const fallbackReviewersArrValue: AccessReviewReviewerScopeImpl[] = []; this.fallbackReviewers?.forEach(element => {fallbackReviewersArrValue.push(element instanceof AccessReviewReviewerScopeImpl? element : new AccessReviewReviewerScopeImpl(element));});
            writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("fallbackReviewers", fallbackReviewersArrValue);
        }
        if(this.recommendationsEnabled){
            writer.writeBooleanValue("recommendationsEnabled", this.recommendationsEnabled);
        }
        if(this.reviewers && this.reviewers.length != 0){        const reviewersArrValue: AccessReviewReviewerScopeImpl[] = []; this.reviewers?.forEach(element => {reviewersArrValue.push(element instanceof AccessReviewReviewerScopeImpl? element : new AccessReviewReviewerScopeImpl(element));});
            writer.writeCollectionOfObjectValues<AccessReviewReviewerScopeImpl>("reviewers", reviewersArrValue);
        }
        if(this.stageId){
            writer.writeStringValue("stageId", this.stageId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
