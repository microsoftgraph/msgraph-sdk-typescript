import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocaleInfoFromDiscriminatorValue} from './createLocaleInfoFromDiscriminatorValue';
import {DateTimeTimeZone, LocaleInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AutomaticRepliesMailTips implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The automatic reply message. */
    private _message?: string | undefined;
    /** The language that the automatic reply message is in. */
    private _messageLanguage?: LocaleInfo | undefined;
    private _odataType?: string | undefined;
    /** The date and time that automatic replies are set to end. */
    private _scheduledEndTime?: DateTimeTimeZone | undefined;
    /** The date and time that automatic replies are set to begin. */
    private _scheduledStartTime?: DateTimeTimeZone | undefined;
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
     * Instantiates a new automaticRepliesMailTips and sets the default values.
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
            "message": n => { this.message = n.getStringValue(); },
            "messageLanguage": n => { this.messageLanguage = n.getObjectValue<LocaleInfo>(createLocaleInfoFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "scheduledEndTime": n => { this.scheduledEndTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "scheduledStartTime": n => { this.scheduledStartTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the message property value. The automatic reply message.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The automatic reply message.
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Gets the messageLanguage property value. The language that the automatic reply message is in.
     * @returns a localeInfo
     */
    public get messageLanguage() {
        return this._messageLanguage;
    };
    /**
     * Sets the messageLanguage property value. The language that the automatic reply message is in.
     * @param value Value to set for the messageLanguage property.
     */
    public set messageLanguage(value: LocaleInfo | undefined) {
        this._messageLanguage = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the scheduledEndTime property value. The date and time that automatic replies are set to end.
     * @returns a dateTimeTimeZone
     */
    public get scheduledEndTime() {
        return this._scheduledEndTime;
    };
    /**
     * Sets the scheduledEndTime property value. The date and time that automatic replies are set to end.
     * @param value Value to set for the scheduledEndTime property.
     */
    public set scheduledEndTime(value: DateTimeTimeZone | undefined) {
        this._scheduledEndTime = value;
    };
    /**
     * Gets the scheduledStartTime property value. The date and time that automatic replies are set to begin.
     * @returns a dateTimeTimeZone
     */
    public get scheduledStartTime() {
        return this._scheduledStartTime;
    };
    /**
     * Sets the scheduledStartTime property value. The date and time that automatic replies are set to begin.
     * @param value Value to set for the scheduledStartTime property.
     */
    public set scheduledStartTime(value: DateTimeTimeZone | undefined) {
        this._scheduledStartTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("message", this.message);
        writer.writeObjectValue<LocaleInfo>("messageLanguage", this.messageLanguage);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledEndTime", this.scheduledEndTime);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledStartTime", this.scheduledStartTime);
        writer.writeAdditionalData(this.additionalData);
    };
}
