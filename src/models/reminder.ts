import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {DateTimeTimeZone, Location} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Reminder implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Identifies the version of the reminder. Every time the reminder is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. */
    private _changeKey?: string | undefined;
    /** The date, time and time zone that the event ends. */
    private _eventEndTime?: DateTimeTimeZone | undefined;
    /** The unique ID of the event. Read only. */
    private _eventId?: string | undefined;
    /** The location of the event. */
    private _eventLocation?: Location | undefined;
    /** The date, time, and time zone that the event starts. */
    private _eventStartTime?: DateTimeTimeZone | undefined;
    /** The text of the event's subject line. */
    private _eventSubject?: string | undefined;
    /** The URL to open the event in Outlook on the web.The event will open in the browser if you are logged in to your mailbox via Outlook on the web. You will be prompted to login if you are not already logged in with the browser.This URL cannot be accessed from within an iFrame. */
    private _eventWebLink?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The date, time, and time zone that the reminder is set to occur. */
    private _reminderFireTime?: DateTimeTimeZone | undefined;
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
     * Gets the changeKey property value. Identifies the version of the reminder. Every time the reminder is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object.
     * @returns a string
     */
    public get changeKey() {
        return this._changeKey;
    };
    /**
     * Sets the changeKey property value. Identifies the version of the reminder. Every time the reminder is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object.
     * @param value Value to set for the changeKey property.
     */
    public set changeKey(value: string | undefined) {
        this._changeKey = value;
    };
    /**
     * Instantiates a new reminder and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.reminder";
    };
    /**
     * Gets the eventEndTime property value. The date, time and time zone that the event ends.
     * @returns a dateTimeTimeZone
     */
    public get eventEndTime() {
        return this._eventEndTime;
    };
    /**
     * Sets the eventEndTime property value. The date, time and time zone that the event ends.
     * @param value Value to set for the eventEndTime property.
     */
    public set eventEndTime(value: DateTimeTimeZone | undefined) {
        this._eventEndTime = value;
    };
    /**
     * Gets the eventId property value. The unique ID of the event. Read only.
     * @returns a string
     */
    public get eventId() {
        return this._eventId;
    };
    /**
     * Sets the eventId property value. The unique ID of the event. Read only.
     * @param value Value to set for the eventId property.
     */
    public set eventId(value: string | undefined) {
        this._eventId = value;
    };
    /**
     * Gets the eventLocation property value. The location of the event.
     * @returns a location
     */
    public get eventLocation() {
        return this._eventLocation;
    };
    /**
     * Sets the eventLocation property value. The location of the event.
     * @param value Value to set for the eventLocation property.
     */
    public set eventLocation(value: Location | undefined) {
        this._eventLocation = value;
    };
    /**
     * Gets the eventStartTime property value. The date, time, and time zone that the event starts.
     * @returns a dateTimeTimeZone
     */
    public get eventStartTime() {
        return this._eventStartTime;
    };
    /**
     * Sets the eventStartTime property value. The date, time, and time zone that the event starts.
     * @param value Value to set for the eventStartTime property.
     */
    public set eventStartTime(value: DateTimeTimeZone | undefined) {
        this._eventStartTime = value;
    };
    /**
     * Gets the eventSubject property value. The text of the event's subject line.
     * @returns a string
     */
    public get eventSubject() {
        return this._eventSubject;
    };
    /**
     * Sets the eventSubject property value. The text of the event's subject line.
     * @param value Value to set for the eventSubject property.
     */
    public set eventSubject(value: string | undefined) {
        this._eventSubject = value;
    };
    /**
     * Gets the eventWebLink property value. The URL to open the event in Outlook on the web.The event will open in the browser if you are logged in to your mailbox via Outlook on the web. You will be prompted to login if you are not already logged in with the browser.This URL cannot be accessed from within an iFrame.
     * @returns a string
     */
    public get eventWebLink() {
        return this._eventWebLink;
    };
    /**
     * Sets the eventWebLink property value. The URL to open the event in Outlook on the web.The event will open in the browser if you are logged in to your mailbox via Outlook on the web. You will be prompted to login if you are not already logged in with the browser.This URL cannot be accessed from within an iFrame.
     * @param value Value to set for the eventWebLink property.
     */
    public set eventWebLink(value: string | undefined) {
        this._eventWebLink = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "changeKey": n => { this.changeKey = n.getStringValue(); },
            "eventEndTime": n => { this.eventEndTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "eventId": n => { this.eventId = n.getStringValue(); },
            "eventLocation": n => { this.eventLocation = n.getObjectValue<Location>(createLocationFromDiscriminatorValue); },
            "eventStartTime": n => { this.eventStartTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "eventSubject": n => { this.eventSubject = n.getStringValue(); },
            "eventWebLink": n => { this.eventWebLink = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "reminderFireTime": n => { this.reminderFireTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the reminderFireTime property value. The date, time, and time zone that the reminder is set to occur.
     * @returns a dateTimeTimeZone
     */
    public get reminderFireTime() {
        return this._reminderFireTime;
    };
    /**
     * Sets the reminderFireTime property value. The date, time, and time zone that the reminder is set to occur.
     * @param value Value to set for the reminderFireTime property.
     */
    public set reminderFireTime(value: DateTimeTimeZone | undefined) {
        this._reminderFireTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("changeKey", this.changeKey);
        writer.writeObjectValue<DateTimeTimeZone>("eventEndTime", this.eventEndTime);
        writer.writeStringValue("eventId", this.eventId);
        writer.writeObjectValue<Location>("eventLocation", this.eventLocation);
        writer.writeObjectValue<DateTimeTimeZone>("eventStartTime", this.eventStartTime);
        writer.writeStringValue("eventSubject", this.eventSubject);
        writer.writeStringValue("eventWebLink", this.eventWebLink);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<DateTimeTimeZone>("reminderFireTime", this.reminderFireTime);
        writer.writeAdditionalData(this.additionalData);
    };
}
