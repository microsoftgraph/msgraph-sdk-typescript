import {AccessReviewApplyAction} from './accessReviewApplyAction';
import {AccessReviewScheduleSettings} from './accessReviewScheduleSettings';
import {createAccessReviewApplyActionFromDiscriminatorValue} from './createAccessReviewApplyActionFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {AccessReviewApplyActionImpl, PatternedRecurrenceImpl} from './index';
import {PatternedRecurrence} from './patternedRecurrence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewScheduleSettingsImpl implements AccessReviewScheduleSettings, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Optional field. Describes the  actions to take once a review is complete. There are two types that are currently supported: removeAccessApplyAction (default) and disableAndDeleteUserApplyAction. Field only needs to be specified in the case of disableAndDeleteUserApplyAction. */
    public applyActions?: AccessReviewApplyAction[] | undefined;
    /** Indicates whether decisions are automatically applied. When set to false, an admin must apply the decisions manually once the reviewer completes the access review. When set to true, decisions are applied automatically after the access review instance duration ends, whether or not the reviewers have responded. Default value is false. */
    public autoApplyDecisionsEnabled?: boolean | undefined;
    /** Decision chosen if defaultDecisionEnabled is enabled. Can be one of Approve, Deny, or Recommendation. */
    public defaultDecision?: string | undefined;
    /** Indicates whether the default decision is enabled or disabled when reviewers do not respond. Default value is false. */
    public defaultDecisionEnabled?: boolean | undefined;
    /** Duration of each recurrence of review (accessReviewInstance) in number of days. NOTE: If the stageSettings of the accessReviewScheduleDefinition object is defined, its durationInDays setting will be used instead of the value of this property. */
    public instanceDurationInDays?: number | undefined;
    /** Indicates whether reviewers are required to provide justification with their decision. Default value is false. */
    public justificationRequiredOnApproval?: boolean | undefined;
    /** Indicates whether emails are enabled or disabled. Default value is false. */
    public mailNotificationsEnabled?: boolean | undefined;
    /** Indicates whether decision recommendations are enabled or disabled. NOTE: If the stageSettings of the accessReviewScheduleDefinition object is defined, its recommendationsEnabled setting will be used instead of the value of this property. */
    public recommendationsEnabled?: boolean | undefined;
    /** Detailed settings for recurrence using the standard Outlook recurrence object. Note: Only dayOfMonth, interval, and type (weekly, absoluteMonthly) properties are supported. Use the property startDate on recurrenceRange to determine the day the review starts. */
    public recurrence?: PatternedRecurrence | undefined;
    /** Indicates whether reminders are enabled or disabled. Default value is false. */
    public reminderNotificationsEnabled?: boolean | undefined;
    /**
     * Instantiates a new accessReviewScheduleSettings and sets the default values.
     * @param accessReviewScheduleSettingsParameterValue 
     */
    public constructor(accessReviewScheduleSettingsParameterValue?: AccessReviewScheduleSettings | undefined) {
        this.additionalData = accessReviewScheduleSettingsParameterValue?.additionalData ? accessReviewScheduleSettingsParameterValue?.additionalData! : {}
        this.applyActions = accessReviewScheduleSettingsParameterValue?.applyActions ;
        this.autoApplyDecisionsEnabled = accessReviewScheduleSettingsParameterValue?.autoApplyDecisionsEnabled ;
        this.defaultDecision = accessReviewScheduleSettingsParameterValue?.defaultDecision ;
        this.defaultDecisionEnabled = accessReviewScheduleSettingsParameterValue?.defaultDecisionEnabled ;
        this.instanceDurationInDays = accessReviewScheduleSettingsParameterValue?.instanceDurationInDays ;
        this.justificationRequiredOnApproval = accessReviewScheduleSettingsParameterValue?.justificationRequiredOnApproval ;
        this.mailNotificationsEnabled = accessReviewScheduleSettingsParameterValue?.mailNotificationsEnabled ;
        this.recommendationsEnabled = accessReviewScheduleSettingsParameterValue?.recommendationsEnabled ;
        this.recurrence = accessReviewScheduleSettingsParameterValue?.recurrence ;
        this.reminderNotificationsEnabled = accessReviewScheduleSettingsParameterValue?.reminderNotificationsEnabled ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "applyActions": n => { this.applyActions = n.getCollectionOfObjectValues<AccessReviewApplyActionImpl>(createAccessReviewApplyActionFromDiscriminatorValue); },
            "autoApplyDecisionsEnabled": n => { this.autoApplyDecisionsEnabled = n.getBooleanValue(); },
            "defaultDecision": n => { this.defaultDecision = n.getStringValue(); },
            "defaultDecisionEnabled": n => { this.defaultDecisionEnabled = n.getBooleanValue(); },
            "instanceDurationInDays": n => { this.instanceDurationInDays = n.getNumberValue(); },
            "justificationRequiredOnApproval": n => { this.justificationRequiredOnApproval = n.getBooleanValue(); },
            "mailNotificationsEnabled": n => { this.mailNotificationsEnabled = n.getBooleanValue(); },
            "recommendationsEnabled": n => { this.recommendationsEnabled = n.getBooleanValue(); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrenceImpl>(createPatternedRecurrenceFromDiscriminatorValue); },
            "reminderNotificationsEnabled": n => { this.reminderNotificationsEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.applyActions && this.applyActions.length != 0){        const applyActionsArrValue: AccessReviewApplyActionImpl[] = []; this.applyActions?.forEach(element => {applyActionsArrValue.push(new AccessReviewApplyActionImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewApplyActionImpl>("applyActions", applyActionsArrValue);
        }
        if(this.autoApplyDecisionsEnabled){
        writer.writeBooleanValue("autoApplyDecisionsEnabled", this.autoApplyDecisionsEnabled);
        }
        if(this.defaultDecision){
        writer.writeStringValue("defaultDecision", this.defaultDecision);
        }
        if(this.defaultDecisionEnabled){
        writer.writeBooleanValue("defaultDecisionEnabled", this.defaultDecisionEnabled);
        }
        if(this.instanceDurationInDays){
        writer.writeNumberValue("instanceDurationInDays", this.instanceDurationInDays);
        }
        if(this.justificationRequiredOnApproval){
        writer.writeBooleanValue("justificationRequiredOnApproval", this.justificationRequiredOnApproval);
        }
        if(this.mailNotificationsEnabled){
        writer.writeBooleanValue("mailNotificationsEnabled", this.mailNotificationsEnabled);
        }
        if(this.recommendationsEnabled){
        writer.writeBooleanValue("recommendationsEnabled", this.recommendationsEnabled);
        }
        if(this.recurrence){
        writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", new PatternedRecurrenceImpl(this.recurrence));
        }
        if(this.reminderNotificationsEnabled){
        writer.writeBooleanValue("reminderNotificationsEnabled", this.reminderNotificationsEnabled);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
