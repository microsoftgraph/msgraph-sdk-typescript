import {BookingReminderRecipients} from './bookingReminderRecipients';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** This type represents when and to whom to send an e-mail reminder.  */
export class BookingReminder implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The message in the reminder.  */
    private _message?: string | undefined;
    /** The amount of time before the start of an appointment that the reminder should be sent. It's denoted in ISO 8601 format.  */
    private _offset?: Duration | undefined;
    /** The persons who should receive the reminder. Possible values are: allAttendees, staff, customer, unknownFutureValue.  */
    private _recipients?: BookingReminderRecipients | undefined;
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
     * Instantiates a new bookingReminder and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "message": (o, n) => { (o as unknown as BookingReminder).message = n.getStringValue(); },
            "offset": (o, n) => { (o as unknown as BookingReminder).offset = n.getDurationValue(); },
            "recipients": (o, n) => { (o as unknown as BookingReminder).recipients = n.getEnumValue<BookingReminderRecipients>(BookingReminderRecipients); },
        };
    };
    /**
     * Gets the message property value. The message in the reminder.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The message in the reminder.
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Gets the offset property value. The amount of time before the start of an appointment that the reminder should be sent. It's denoted in ISO 8601 format.
     * @returns a Duration
     */
    public get offset() {
        return this._offset;
    };
    /**
     * Sets the offset property value. The amount of time before the start of an appointment that the reminder should be sent. It's denoted in ISO 8601 format.
     * @param value Value to set for the offset property.
     */
    public set offset(value: Duration | undefined) {
        this._offset = value;
    };
    /**
     * Gets the recipients property value. The persons who should receive the reminder. Possible values are: allAttendees, staff, customer, unknownFutureValue.
     * @returns a bookingReminderRecipients
     */
    public get recipients() {
        return this._recipients;
    };
    /**
     * Sets the recipients property value. The persons who should receive the reminder. Possible values are: allAttendees, staff, customer, unknownFutureValue.
     * @param value Value to set for the recipients property.
     */
    public set recipients(value: BookingReminderRecipients | undefined) {
        this._recipients = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("message", this.message);
        writer.writeDurationValue("offset", this.offset);
        writer.writeEnumValue<BookingReminderRecipients>("recipients", this.recipients);
        writer.writeAdditionalData(this.additionalData);
    };
}
