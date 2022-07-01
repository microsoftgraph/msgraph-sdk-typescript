import {AccessReviewHistoryScheduleSettings} from './accessReviewHistoryScheduleSettings';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {PatternedRecurrenceImpl} from './index';
import {PatternedRecurrence} from './patternedRecurrence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewHistoryScheduleSettingsImpl implements AccessReviewHistoryScheduleSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The recurrence property */
    private _recurrence?: PatternedRecurrence | undefined;
    /** A duration string in ISO 8601 duration format specifying the lookback period of the generated review history data. For example, if a history definition is scheduled to run on the 1st of every month, the reportRange is P1M. In this case, on the first of every month, access review history data will be collected containing only the previous month's review data. Note: Only years, months, and days ISO 8601 properties are supported. Required. */
    private _reportRange?: string | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new accessReviewHistoryScheduleSettings and sets the default values.
     * @param accessReviewHistoryScheduleSettingsParameterValue 
     */
    public constructor(accessReviewHistoryScheduleSettingsParameterValue?: AccessReviewHistoryScheduleSettings | undefined) {
        this._additionalData = accessReviewHistoryScheduleSettingsParameterValue?.additionalData ? accessReviewHistoryScheduleSettingsParameterValue?.additionalData! : {};
        this._recurrence = accessReviewHistoryScheduleSettingsParameterValue?.recurrence;
        this._reportRange = accessReviewHistoryScheduleSettingsParameterValue?.reportRange;
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
     * Gets the recurrence property value. The recurrence property
     * @returns a PatternedRecurrenceInterface
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. The recurrence property
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        if(value) {
            this._recurrence = value instanceof PatternedRecurrenceImpl? value as PatternedRecurrenceImpl: new PatternedRecurrenceImpl(value);
        }
    };
    /**
     * Gets the reportRange property value. A duration string in ISO 8601 duration format specifying the lookback period of the generated review history data. For example, if a history definition is scheduled to run on the 1st of every month, the reportRange is P1M. In this case, on the first of every month, access review history data will be collected containing only the previous month's review data. Note: Only years, months, and days ISO 8601 properties are supported. Required.
     * @returns a string
     */
    public get reportRange() {
        return this._reportRange;
    };
    /**
     * Sets the reportRange property value. A duration string in ISO 8601 duration format specifying the lookback period of the generated review history data. For example, if a history definition is scheduled to run on the 1st of every month, the reportRange is P1M. In this case, on the first of every month, access review history data will be collected containing only the previous month's review data. Note: Only years, months, and days ISO 8601 properties are supported. Required.
     * @param value Value to set for the reportRange property.
     */
    public set reportRange(value: string | undefined) {
        if(value) {
            this._reportRange = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.recurrence){
            writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", (this.recurrence instanceof PatternedRecurrenceImpl? this.recurrence as PatternedRecurrenceImpl: new PatternedRecurrenceImpl(this.recurrence)));
        }
        if(this.reportRange){
            writer.writeStringValue("reportRange", this.reportRange);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
