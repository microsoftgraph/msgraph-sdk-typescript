import {AutomaticRepliesMailTips} from './automaticRepliesMailTips';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocaleInfoFromDiscriminatorValue} from './createLocaleInfoFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {DateTimeTimeZoneImpl, LocaleInfoImpl} from './index';
import {LocaleInfo} from './localeInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AutomaticRepliesMailTipsImpl implements AutomaticRepliesMailTips {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The automatic reply message. */
    private _message?: string | undefined;
    /** The language that the automatic reply message is in. */
    private _messageLanguage?: LocaleInfo | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new automaticRepliesMailTips and sets the default values.
     * @param automaticRepliesMailTipsParameterValue 
     */
    public constructor(automaticRepliesMailTipsParameterValue?: AutomaticRepliesMailTips | undefined) {
        this._additionalData = automaticRepliesMailTipsParameterValue?.additionalData ? automaticRepliesMailTipsParameterValue?.additionalData! : {};
        this._message = automaticRepliesMailTipsParameterValue?.message;
        this._messageLanguage = automaticRepliesMailTipsParameterValue?.messageLanguage;
        this._scheduledEndTime = automaticRepliesMailTipsParameterValue?.scheduledEndTime;
        this._scheduledStartTime = automaticRepliesMailTipsParameterValue?.scheduledStartTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "message": n => { this.message = n.getStringValue(); },
            "messageLanguage": n => { this.messageLanguage = n.getObjectValue<LocaleInfoImpl>(createLocaleInfoFromDiscriminatorValue); },
            "scheduledEndTime": n => { this.scheduledEndTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "scheduledStartTime": n => { this.scheduledStartTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
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
        if(value) {
            this._message = value;
        }
    };
    /**
     * Gets the messageLanguage property value. The language that the automatic reply message is in.
     * @returns a LocaleInfoInterface
     */
    public get messageLanguage() {
        return this._messageLanguage;
    };
    /**
     * Sets the messageLanguage property value. The language that the automatic reply message is in.
     * @param value Value to set for the messageLanguage property.
     */
    public set messageLanguage(value: LocaleInfo | undefined) {
        if(value) {
            this._messageLanguage = value instanceof LocaleInfoImpl? value : new LocaleInfoImpl(value);
        }
    };
    /**
     * Gets the scheduledEndTime property value. The date and time that automatic replies are set to end.
     * @returns a DateTimeTimeZoneInterface
     */
    public get scheduledEndTime() {
        return this._scheduledEndTime;
    };
    /**
     * Sets the scheduledEndTime property value. The date and time that automatic replies are set to end.
     * @param value Value to set for the scheduledEndTime property.
     */
    public set scheduledEndTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._scheduledEndTime = value instanceof DateTimeTimeZoneImpl? value : new DateTimeTimeZoneImpl(value);
        }
    };
    /**
     * Gets the scheduledStartTime property value. The date and time that automatic replies are set to begin.
     * @returns a DateTimeTimeZoneInterface
     */
    public get scheduledStartTime() {
        return this._scheduledStartTime;
    };
    /**
     * Sets the scheduledStartTime property value. The date and time that automatic replies are set to begin.
     * @param value Value to set for the scheduledStartTime property.
     */
    public set scheduledStartTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._scheduledStartTime = value instanceof DateTimeTimeZoneImpl? value : new DateTimeTimeZoneImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.message){
            writer.writeStringValue("message", this.message);
        }
        if(this.messageLanguage){
            writer.writeObjectValue<LocaleInfoImpl>("messageLanguage", (!this.messageLanguage || this.messageLanguage instanceof LocaleInfoImpl? this.messageLanguage : new LocaleInfoImpl(this.messageLanguage)));
        }
        if(this.scheduledEndTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("scheduledEndTime", (!this.scheduledEndTime || this.scheduledEndTime instanceof DateTimeTimeZoneImpl? this.scheduledEndTime : new DateTimeTimeZoneImpl(this.scheduledEndTime)));
        }
        if(this.scheduledStartTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("scheduledStartTime", (!this.scheduledStartTime || this.scheduledStartTime instanceof DateTimeTimeZoneImpl? this.scheduledStartTime : new DateTimeTimeZoneImpl(this.scheduledStartTime)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
