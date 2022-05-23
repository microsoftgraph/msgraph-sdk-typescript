import {AccessReviewHistoryScheduleSettings} from './accessReviewHistoryScheduleSettings';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {PatternedRecurrenceImpl} from './index';
import {PatternedRecurrence} from './patternedRecurrence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewHistoryScheduleSettingsImpl implements AccessReviewHistoryScheduleSettings, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The recurrence property */
    public recurrence?: PatternedRecurrence | undefined;
    /** A duration string in ISO 8601 duration format specifying the lookback period of the generated review history data. For example, if a history definition is scheduled to run on the 1st of every month, the reportRange is P1M. In this case, on the first of every month, access review history data will be collected containing only the previous month's review data. Note: Only years, months, and days ISO 8601 properties are supported. Required. */
    public reportRange?: string | undefined;
    /**
     * Instantiates a new accessReviewHistoryScheduleSettings and sets the default values.
     * @param accessReviewHistoryScheduleSettingsParameterValue 
     */
    public constructor(accessReviewHistoryScheduleSettingsParameterValue?: AccessReviewHistoryScheduleSettings | undefined) {
        this.additionalData = accessReviewHistoryScheduleSettingsParameterValue?.additionalData ? accessReviewHistoryScheduleSettingsParameterValue?.additionalData! : {}
        this.recurrence = accessReviewHistoryScheduleSettingsParameterValue?.recurrence ;
        this.reportRange = accessReviewHistoryScheduleSettingsParameterValue?.reportRange ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrenceImpl>(createPatternedRecurrenceFromDiscriminatorValue); },
            "reportRange": n => { this.reportRange = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.recurrence){
        writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", new PatternedRecurrenceImpl(this.recurrence));
        }
        if(this.reportRange){
        writer.writeStringValue("reportRange", this.reportRange);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
