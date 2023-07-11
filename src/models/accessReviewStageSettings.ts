import {AccessReviewRecommendationInsightSetting} from './accessReviewRecommendationInsightSetting';
import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewStageSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicate which decisions will go to the next stage. Can be a sub-set of Approve, Deny, Recommendation, or NotReviewed. If not provided, all decisions will go to the next stage. Optional.
     */
    decisionsThatWillMoveToNextStage?: string[] | undefined;
    /**
     * Defines the sequential or parallel order of the stages and depends on the stageId. Only sequential stages are currently supported. For example, if stageId is 2, then dependsOn must be 1. If stageId is 1, do not specify dependsOn. Required if stageId is not 1.
     */
    dependsOn?: string[] | undefined;
    /**
     * The duration of the stage. Required.  NOTE: The cumulative value of this property across all stages  1. Will override the instanceDurationInDays setting on the accessReviewScheduleDefinition object. 2. Cannot exceed the length of one recurrence. That is, if the review recurs weekly, the cumulative durationInDays cannot exceed 7.
     */
    durationInDays?: number | undefined;
    /**
     * If provided, the fallback reviewers are asked to complete a review if the primary reviewers do not exist. For example, if managers are selected as reviewers and a principal under review does not have a manager in Azure AD, the fallback reviewers are asked to review that principal. NOTE: The value of this property will override the corresponding setting on the accessReviewScheduleDefinition object.
     */
    fallbackReviewers?: AccessReviewReviewerScope[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The recommendationInsightSettings property
     */
    recommendationInsightSettings?: AccessReviewRecommendationInsightSetting[] | undefined;
    /**
     * Indicates whether showing recommendations to reviewers is enabled. Required. NOTE: The value of this property will override override the corresponding setting on the accessReviewScheduleDefinition object.
     */
    recommendationsEnabled?: boolean | undefined;
    /**
     * Defines who the reviewers are. If none are specified, the review is a self-review (users review their own access).  For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will override the corresponding setting on the accessReviewScheduleDefinition.
     */
    reviewers?: AccessReviewReviewerScope[] | undefined;
    /**
     * Unique identifier of the accessReviewStageSettings object. The stageId will be used by the dependsOn property to indicate the order of the stages. Required.
     */
    stageId?: string | undefined;
}
