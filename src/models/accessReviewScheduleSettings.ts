import {createAccessReviewApplyActionFromDiscriminatorValue} from './createAccessReviewApplyActionFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {AccessReviewApplyAction, PatternedRecurrence} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewScheduleSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Optional field. Describes the  actions to take once a review is complete. There are two types that are currently supported: removeAccessApplyAction (default) and disableAndDeleteUserApplyAction. Field only needs to be specified in the case of disableAndDeleteUserApplyAction. */
    private _applyActions?: AccessReviewApplyAction[] | undefined;
    /** Indicates whether decisions are automatically applied. When set to false, an admin must apply the decisions manually once the reviewer completes the access review. When set to true, decisions are applied automatically after the access review instance duration ends, whether or not the reviewers have responded. Default value is false. */
    private _autoApplyDecisionsEnabled?: boolean | undefined;
    /** Indicates whether decisions on previous access review stages are available for reviewers on an accessReviewInstance with multiple subsequent stages. If not provided, the default is disabled (false). */
    private _decisionHistoriesForReviewersEnabled?: boolean | undefined;
    /** Decision chosen if defaultDecisionEnabled is enabled. Can be one of Approve, Deny, or Recommendation. */
    private _defaultDecision?: string | undefined;
    /** Indicates whether the default decision is enabled or disabled when reviewers do not respond. Default value is false. */
    private _defaultDecisionEnabled?: boolean | undefined;
    /** Duration of each recurrence of review (accessReviewInstance) in number of days. NOTE: If the stageSettings of the accessReviewScheduleDefinition object is defined, its durationInDays setting will be used instead of the value of this property. */
    private _instanceDurationInDays?: number | undefined;
    /** Indicates whether reviewers are required to provide justification with their decision. Default value is false. */
    private _justificationRequiredOnApproval?: boolean | undefined;
    /** Indicates whether emails are enabled or disabled. Default value is false. */
    private _mailNotificationsEnabled?: boolean | undefined;
    /** Indicates whether decision recommendations are enabled or disabled. NOTE: If the stageSettings of the accessReviewScheduleDefinition object is defined, its recommendationsEnabled setting will be used instead of the value of this property. */
    private _recommendationsEnabled?: boolean | undefined;
    /** Detailed settings for recurrence using the standard Outlook recurrence object. Note: Only dayOfMonth, interval, and type (weekly, absoluteMonthly) properties are supported. Use the property startDate on recurrenceRange to determine the day the review starts. */
    private _recurrence?: PatternedRecurrence | undefined;
    /** Indicates whether reminders are enabled or disabled. Default value is false. */
    private _reminderNotificationsEnabled?: boolean | undefined;
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
     * Gets the applyActions property value. Optional field. Describes the  actions to take once a review is complete. There are two types that are currently supported: removeAccessApplyAction (default) and disableAndDeleteUserApplyAction. Field only needs to be specified in the case of disableAndDeleteUserApplyAction.
     * @returns a accessReviewApplyAction
     */
    public get applyActions() {
        return this._applyActions;
    };
    /**
     * Sets the applyActions property value. Optional field. Describes the  actions to take once a review is complete. There are two types that are currently supported: removeAccessApplyAction (default) and disableAndDeleteUserApplyAction. Field only needs to be specified in the case of disableAndDeleteUserApplyAction.
     * @param value Value to set for the applyActions property.
     */
    public set applyActions(value: AccessReviewApplyAction[] | undefined) {
        this._applyActions = value;
    };
    /**
     * Gets the autoApplyDecisionsEnabled property value. Indicates whether decisions are automatically applied. When set to false, an admin must apply the decisions manually once the reviewer completes the access review. When set to true, decisions are applied automatically after the access review instance duration ends, whether or not the reviewers have responded. Default value is false.
     * @returns a boolean
     */
    public get autoApplyDecisionsEnabled() {
        return this._autoApplyDecisionsEnabled;
    };
    /**
     * Sets the autoApplyDecisionsEnabled property value. Indicates whether decisions are automatically applied. When set to false, an admin must apply the decisions manually once the reviewer completes the access review. When set to true, decisions are applied automatically after the access review instance duration ends, whether or not the reviewers have responded. Default value is false.
     * @param value Value to set for the autoApplyDecisionsEnabled property.
     */
    public set autoApplyDecisionsEnabled(value: boolean | undefined) {
        this._autoApplyDecisionsEnabled = value;
    };
    /**
     * Instantiates a new accessReviewScheduleSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the decisionHistoriesForReviewersEnabled property value. Indicates whether decisions on previous access review stages are available for reviewers on an accessReviewInstance with multiple subsequent stages. If not provided, the default is disabled (false).
     * @returns a boolean
     */
    public get decisionHistoriesForReviewersEnabled() {
        return this._decisionHistoriesForReviewersEnabled;
    };
    /**
     * Sets the decisionHistoriesForReviewersEnabled property value. Indicates whether decisions on previous access review stages are available for reviewers on an accessReviewInstance with multiple subsequent stages. If not provided, the default is disabled (false).
     * @param value Value to set for the decisionHistoriesForReviewersEnabled property.
     */
    public set decisionHistoriesForReviewersEnabled(value: boolean | undefined) {
        this._decisionHistoriesForReviewersEnabled = value;
    };
    /**
     * Gets the defaultDecision property value. Decision chosen if defaultDecisionEnabled is enabled. Can be one of Approve, Deny, or Recommendation.
     * @returns a string
     */
    public get defaultDecision() {
        return this._defaultDecision;
    };
    /**
     * Sets the defaultDecision property value. Decision chosen if defaultDecisionEnabled is enabled. Can be one of Approve, Deny, or Recommendation.
     * @param value Value to set for the defaultDecision property.
     */
    public set defaultDecision(value: string | undefined) {
        this._defaultDecision = value;
    };
    /**
     * Gets the defaultDecisionEnabled property value. Indicates whether the default decision is enabled or disabled when reviewers do not respond. Default value is false.
     * @returns a boolean
     */
    public get defaultDecisionEnabled() {
        return this._defaultDecisionEnabled;
    };
    /**
     * Sets the defaultDecisionEnabled property value. Indicates whether the default decision is enabled or disabled when reviewers do not respond. Default value is false.
     * @param value Value to set for the defaultDecisionEnabled property.
     */
    public set defaultDecisionEnabled(value: boolean | undefined) {
        this._defaultDecisionEnabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "applyActions": n => { this.applyActions = n.getCollectionOfObjectValues<AccessReviewApplyAction>(createAccessReviewApplyActionFromDiscriminatorValue); },
            "autoApplyDecisionsEnabled": n => { this.autoApplyDecisionsEnabled = n.getBooleanValue(); },
            "decisionHistoriesForReviewersEnabled": n => { this.decisionHistoriesForReviewersEnabled = n.getBooleanValue(); },
            "defaultDecision": n => { this.defaultDecision = n.getStringValue(); },
            "defaultDecisionEnabled": n => { this.defaultDecisionEnabled = n.getBooleanValue(); },
            "instanceDurationInDays": n => { this.instanceDurationInDays = n.getNumberValue(); },
            "justificationRequiredOnApproval": n => { this.justificationRequiredOnApproval = n.getBooleanValue(); },
            "mailNotificationsEnabled": n => { this.mailNotificationsEnabled = n.getBooleanValue(); },
            "recommendationsEnabled": n => { this.recommendationsEnabled = n.getBooleanValue(); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
            "reminderNotificationsEnabled": n => { this.reminderNotificationsEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the instanceDurationInDays property value. Duration of each recurrence of review (accessReviewInstance) in number of days. NOTE: If the stageSettings of the accessReviewScheduleDefinition object is defined, its durationInDays setting will be used instead of the value of this property.
     * @returns a integer
     */
    public get instanceDurationInDays() {
        return this._instanceDurationInDays;
    };
    /**
     * Sets the instanceDurationInDays property value. Duration of each recurrence of review (accessReviewInstance) in number of days. NOTE: If the stageSettings of the accessReviewScheduleDefinition object is defined, its durationInDays setting will be used instead of the value of this property.
     * @param value Value to set for the instanceDurationInDays property.
     */
    public set instanceDurationInDays(value: number | undefined) {
        this._instanceDurationInDays = value;
    };
    /**
     * Gets the justificationRequiredOnApproval property value. Indicates whether reviewers are required to provide justification with their decision. Default value is false.
     * @returns a boolean
     */
    public get justificationRequiredOnApproval() {
        return this._justificationRequiredOnApproval;
    };
    /**
     * Sets the justificationRequiredOnApproval property value. Indicates whether reviewers are required to provide justification with their decision. Default value is false.
     * @param value Value to set for the justificationRequiredOnApproval property.
     */
    public set justificationRequiredOnApproval(value: boolean | undefined) {
        this._justificationRequiredOnApproval = value;
    };
    /**
     * Gets the mailNotificationsEnabled property value. Indicates whether emails are enabled or disabled. Default value is false.
     * @returns a boolean
     */
    public get mailNotificationsEnabled() {
        return this._mailNotificationsEnabled;
    };
    /**
     * Sets the mailNotificationsEnabled property value. Indicates whether emails are enabled or disabled. Default value is false.
     * @param value Value to set for the mailNotificationsEnabled property.
     */
    public set mailNotificationsEnabled(value: boolean | undefined) {
        this._mailNotificationsEnabled = value;
    };
    /**
     * Gets the recommendationsEnabled property value. Indicates whether decision recommendations are enabled or disabled. NOTE: If the stageSettings of the accessReviewScheduleDefinition object is defined, its recommendationsEnabled setting will be used instead of the value of this property.
     * @returns a boolean
     */
    public get recommendationsEnabled() {
        return this._recommendationsEnabled;
    };
    /**
     * Sets the recommendationsEnabled property value. Indicates whether decision recommendations are enabled or disabled. NOTE: If the stageSettings of the accessReviewScheduleDefinition object is defined, its recommendationsEnabled setting will be used instead of the value of this property.
     * @param value Value to set for the recommendationsEnabled property.
     */
    public set recommendationsEnabled(value: boolean | undefined) {
        this._recommendationsEnabled = value;
    };
    /**
     * Gets the recurrence property value. Detailed settings for recurrence using the standard Outlook recurrence object. Note: Only dayOfMonth, interval, and type (weekly, absoluteMonthly) properties are supported. Use the property startDate on recurrenceRange to determine the day the review starts.
     * @returns a patternedRecurrence
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. Detailed settings for recurrence using the standard Outlook recurrence object. Note: Only dayOfMonth, interval, and type (weekly, absoluteMonthly) properties are supported. Use the property startDate on recurrenceRange to determine the day the review starts.
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        this._recurrence = value;
    };
    /**
     * Gets the reminderNotificationsEnabled property value. Indicates whether reminders are enabled or disabled. Default value is false.
     * @returns a boolean
     */
    public get reminderNotificationsEnabled() {
        return this._reminderNotificationsEnabled;
    };
    /**
     * Sets the reminderNotificationsEnabled property value. Indicates whether reminders are enabled or disabled. Default value is false.
     * @param value Value to set for the reminderNotificationsEnabled property.
     */
    public set reminderNotificationsEnabled(value: boolean | undefined) {
        this._reminderNotificationsEnabled = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<AccessReviewApplyAction>("applyActions", this.applyActions);
        writer.writeBooleanValue("autoApplyDecisionsEnabled", this.autoApplyDecisionsEnabled);
        writer.writeBooleanValue("decisionHistoriesForReviewersEnabled", this.decisionHistoriesForReviewersEnabled);
        writer.writeStringValue("defaultDecision", this.defaultDecision);
        writer.writeBooleanValue("defaultDecisionEnabled", this.defaultDecisionEnabled);
        writer.writeNumberValue("instanceDurationInDays", this.instanceDurationInDays);
        writer.writeBooleanValue("justificationRequiredOnApproval", this.justificationRequiredOnApproval);
        writer.writeBooleanValue("mailNotificationsEnabled", this.mailNotificationsEnabled);
        writer.writeBooleanValue("recommendationsEnabled", this.recommendationsEnabled);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", this.recurrence);
        writer.writeBooleanValue("reminderNotificationsEnabled", this.reminderNotificationsEnabled);
        writer.writeAdditionalData(this.additionalData);
    };
}
