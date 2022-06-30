import {DateTimeTimeZoneImpl} from '../../../../../../../../models/';
import {createDateTimeTimeZoneFromDiscriminatorValue} from '../../../../../../../../models/createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from '../../../../../../../../models/dateTimeTimeZone';
import {SnoozeReminderPostRequestBody} from './snoozeReminderPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the snoozeReminder method. */
export class SnoozeReminderPostRequestBodyImpl implements SnoozeReminderPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The NewReminderTime property */
    private _newReminderTime?: DateTimeTimeZone | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new snoozeReminderPostRequestBody and sets the default values.
     * @param snoozeReminderPostRequestBodyParameterValue 
     */
    public constructor(snoozeReminderPostRequestBodyParameterValue?: SnoozeReminderPostRequestBody | undefined) {
        this._additionalData = snoozeReminderPostRequestBodyParameterValue?.additionalData ? snoozeReminderPostRequestBodyParameterValue?.additionalData! : {};
        this._newReminderTime = snoozeReminderPostRequestBodyParameterValue?.newReminderTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "newReminderTime": n => { this.newReminderTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the newReminderTime property value. The NewReminderTime property
     * @returns a DateTimeTimeZoneInterface
     */
    public get newReminderTime() {
        return this._newReminderTime;
    };
    /**
     * Sets the newReminderTime property value. The NewReminderTime property
     * @param value Value to set for the NewReminderTime property.
     */
    public set newReminderTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._newReminderTime = value instanceof DateTimeTimeZoneImpl? value : new DateTimeTimeZoneImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.newReminderTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("newReminderTime", (!this.newReminderTime || this.newReminderTime instanceof DateTimeTimeZoneImpl? this.newReminderTime : new DateTimeTimeZoneImpl(this.newReminderTime)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
