import {DateTimeTimeZone} from '../../../../../models/';
import {createDateTimeTimeZoneFromDiscriminatorValue} from '../../../../../models/createDateTimeTimeZoneFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the snoozeReminder method. */
export class SnoozeReminderPostRequestBody implements AdditionalDataHolder, Parsable {
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new snoozeReminderPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "newReminderTime": n => { this.newReminderTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the newReminderTime property value. The NewReminderTime property
     * @returns a dateTimeTimeZone
     */
    public get newReminderTime() {
        return this._newReminderTime;
    };
    /**
     * Sets the newReminderTime property value. The NewReminderTime property
     * @param value Value to set for the NewReminderTime property.
     */
    public set newReminderTime(value: DateTimeTimeZone | undefined) {
        this._newReminderTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<DateTimeTimeZone>("newReminderTime", this.newReminderTime);
        writer.writeAdditionalData(this.additionalData);
    };
}
