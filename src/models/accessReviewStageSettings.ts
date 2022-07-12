import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {AccessReviewReviewerScope} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewStageSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicate which decisions will go to the next stage. Can be a sub-set of Approve, Deny, Recommendation, or NotReviewed. If not provided, all decisions will go to the next stage. Optional. */
    private _decisionsThatWillMoveToNextStage?: string[] | undefined;
    /** Defines the sequential or parallel order of the stages and depends on the stageId. Only sequential stages are currently supported. For example, if stageId is 2, then dependsOn must be 1. If stageId is 1, do not specify dependsOn. Required if stageId is not 1. */
    private _dependsOn?: string[] | undefined;
    /** The duration of the stage. Required.  NOTE: The cumulative value of this property across all stages  1. Will override the instanceDurationInDays setting on the accessReviewScheduleDefinition object. 2. Cannot exceed the length of one recurrence. That is, if the review recurs weekly, the cumulative durationInDays cannot exceed 7. */
    private _durationInDays?: number | undefined;
    /** If provided, the fallback reviewers are asked to complete a review if the primary reviewers do not exist. For example, if managers are selected as reviewers and a principal under review does not have a manager in Azure AD, the fallback reviewers are asked to review that principal. NOTE: The value of this property will override the corresponding setting on the accessReviewScheduleDefinition object. */
    private _fallbackReviewers?: AccessReviewReviewerScope[] | undefined;
    /** Indicates whether showing recommendations to reviewers is enabled. Required. NOTE: The value of this property will override override the corresponding setting on the accessReviewScheduleDefinition object. */
    private _recommendationsEnabled?: boolean | undefined;
    /** Defines who the reviewers are. If none are specified, the review is a self-review (users review their own access).  For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will override the corresponding setting on the accessReviewScheduleDefinition. */
    private _reviewers?: AccessReviewReviewerScope[] | undefined;
    /** Unique identifier of the accessReviewStageSettings. The stageId will be used in dependsOn property to indicate the stage relationship. Required. */
    private _stageId?: string | undefined;
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
     * Instantiates a new accessReviewStageSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the decisionsThatWillMoveToNextStage property value. Indicate which decisions will go to the next stage. Can be a sub-set of Approve, Deny, Recommendation, or NotReviewed. If not provided, all decisions will go to the next stage. Optional.
     * @returns a string
     */
    public get decisionsThatWillMoveToNextStage() {
        return this._decisionsThatWillMoveToNextStage;
    };
    /**
     * Sets the decisionsThatWillMoveToNextStage property value. Indicate which decisions will go to the next stage. Can be a sub-set of Approve, Deny, Recommendation, or NotReviewed. If not provided, all decisions will go to the next stage. Optional.
     * @param value Value to set for the decisionsThatWillMoveToNextStage property.
     */
    public set decisionsThatWillMoveToNextStage(value: string[] | undefined) {
        this._decisionsThatWillMoveToNextStage = value;
    };
    /**
     * Gets the dependsOn property value. Defines the sequential or parallel order of the stages and depends on the stageId. Only sequential stages are currently supported. For example, if stageId is 2, then dependsOn must be 1. If stageId is 1, do not specify dependsOn. Required if stageId is not 1.
     * @returns a string
     */
    public get dependsOn() {
        return this._dependsOn;
    };
    /**
     * Sets the dependsOn property value. Defines the sequential or parallel order of the stages and depends on the stageId. Only sequential stages are currently supported. For example, if stageId is 2, then dependsOn must be 1. If stageId is 1, do not specify dependsOn. Required if stageId is not 1.
     * @param value Value to set for the dependsOn property.
     */
    public set dependsOn(value: string[] | undefined) {
        this._dependsOn = value;
    };
    /**
     * Gets the durationInDays property value. The duration of the stage. Required.  NOTE: The cumulative value of this property across all stages  1. Will override the instanceDurationInDays setting on the accessReviewScheduleDefinition object. 2. Cannot exceed the length of one recurrence. That is, if the review recurs weekly, the cumulative durationInDays cannot exceed 7.
     * @returns a integer
     */
    public get durationInDays() {
        return this._durationInDays;
    };
    /**
     * Sets the durationInDays property value. The duration of the stage. Required.  NOTE: The cumulative value of this property across all stages  1. Will override the instanceDurationInDays setting on the accessReviewScheduleDefinition object. 2. Cannot exceed the length of one recurrence. That is, if the review recurs weekly, the cumulative durationInDays cannot exceed 7.
     * @param value Value to set for the durationInDays property.
     */
    public set durationInDays(value: number | undefined) {
        this._durationInDays = value;
    };
    /**
     * Gets the fallbackReviewers property value. If provided, the fallback reviewers are asked to complete a review if the primary reviewers do not exist. For example, if managers are selected as reviewers and a principal under review does not have a manager in Azure AD, the fallback reviewers are asked to review that principal. NOTE: The value of this property will override the corresponding setting on the accessReviewScheduleDefinition object.
     * @returns a accessReviewReviewerScope
     */
    public get fallbackReviewers() {
        return this._fallbackReviewers;
    };
    /**
     * Sets the fallbackReviewers property value. If provided, the fallback reviewers are asked to complete a review if the primary reviewers do not exist. For example, if managers are selected as reviewers and a principal under review does not have a manager in Azure AD, the fallback reviewers are asked to review that principal. NOTE: The value of this property will override the corresponding setting on the accessReviewScheduleDefinition object.
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
        return {
            "decisionsThatWillMoveToNextStage": n => { this.decisionsThatWillMoveToNextStage = n.getCollectionOfPrimitiveValues<string>(); },
            "dependsOn": n => { this.dependsOn = n.getCollectionOfPrimitiveValues<string>(); },
            "durationInDays": n => { this.durationInDays = n.getNumberValue(); },
            "fallbackReviewers": n => { this.fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "recommendationsEnabled": n => { this.recommendationsEnabled = n.getBooleanValue(); },
            "reviewers": n => { this.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
            "stageId": n => { this.stageId = n.getStringValue(); },
        };
    };
    /**
     * Gets the recommendationsEnabled property value. Indicates whether showing recommendations to reviewers is enabled. Required. NOTE: The value of this property will override override the corresponding setting on the accessReviewScheduleDefinition object.
     * @returns a boolean
     */
    public get recommendationsEnabled() {
        return this._recommendationsEnabled;
    };
    /**
     * Sets the recommendationsEnabled property value. Indicates whether showing recommendations to reviewers is enabled. Required. NOTE: The value of this property will override override the corresponding setting on the accessReviewScheduleDefinition object.
     * @param value Value to set for the recommendationsEnabled property.
     */
    public set recommendationsEnabled(value: boolean | undefined) {
        this._recommendationsEnabled = value;
    };
    /**
     * Gets the reviewers property value. Defines who the reviewers are. If none are specified, the review is a self-review (users review their own access).  For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will override the corresponding setting on the accessReviewScheduleDefinition.
     * @returns a accessReviewReviewerScope
     */
    public get reviewers() {
        return this._reviewers;
    };
    /**
     * Sets the reviewers property value. Defines who the reviewers are. If none are specified, the review is a self-review (users review their own access).  For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will override the corresponding setting on the accessReviewScheduleDefinition.
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
        writer.writeCollectionOfPrimitiveValues<string>("decisionsThatWillMoveToNextStage", this.decisionsThatWillMoveToNextStage);
        writer.writeCollectionOfPrimitiveValues<string>("dependsOn", this.dependsOn);
        writer.writeNumberValue("durationInDays", this.durationInDays);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("fallbackReviewers", this.fallbackReviewers);
        writer.writeBooleanValue("recommendationsEnabled", this.recommendationsEnabled);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", this.reviewers);
        writer.writeStringValue("stageId", this.stageId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the stageId property value. Unique identifier of the accessReviewStageSettings. The stageId will be used in dependsOn property to indicate the stage relationship. Required.
     * @returns a string
     */
    public get stageId() {
        return this._stageId;
    };
    /**
     * Sets the stageId property value. Unique identifier of the accessReviewStageSettings. The stageId will be used in dependsOn property to indicate the stage relationship. Required.
     * @param value Value to set for the stageId property.
     */
    public set stageId(value: string | undefined) {
        this._stageId = value;
    };
}
