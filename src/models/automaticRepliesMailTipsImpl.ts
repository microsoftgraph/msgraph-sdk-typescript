import {AutomaticRepliesMailTips} from './automaticRepliesMailTips';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocaleInfoFromDiscriminatorValue} from './createLocaleInfoFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {DateTimeTimeZoneImpl, LocaleInfoImpl} from './index';
import {LocaleInfo} from './localeInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AutomaticRepliesMailTipsImpl implements AdditionalDataHolder, AutomaticRepliesMailTips, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The automatic reply message. */
    public message?: string | undefined;
    /** The language that the automatic reply message is in. */
    public messageLanguage?: LocaleInfo | undefined;
    /** The date and time that automatic replies are set to end. */
    public scheduledEndTime?: DateTimeTimeZone | undefined;
    /** The date and time that automatic replies are set to begin. */
    public scheduledStartTime?: DateTimeTimeZone | undefined;
    /**
     * Instantiates a new automaticRepliesMailTips and sets the default values.
     * @param automaticRepliesMailTipsParameterValue 
     */
    public constructor(automaticRepliesMailTipsParameterValue?: AutomaticRepliesMailTips | undefined) {
        this.additionalData = automaticRepliesMailTipsParameterValue?.additionalData ? automaticRepliesMailTipsParameterValue?.additionalData! : {}
        this.message = automaticRepliesMailTipsParameterValue?.message ;
        this.messageLanguage = automaticRepliesMailTipsParameterValue?.messageLanguage ;
        this.scheduledEndTime = automaticRepliesMailTipsParameterValue?.scheduledEndTime ;
        this.scheduledStartTime = automaticRepliesMailTipsParameterValue?.scheduledStartTime ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.message){
        writer.writeStringValue("message", this.message);
        }
        if(this.messageLanguage){
        writer.writeObjectValue<LocaleInfoImpl>("messageLanguage", new LocaleInfoImpl(this.messageLanguage));
        }
        if(this.scheduledEndTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("scheduledEndTime", new DateTimeTimeZoneImpl(this.scheduledEndTime));
        }
        if(this.scheduledStartTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("scheduledStartTime", new DateTimeTimeZoneImpl(this.scheduledStartTime));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
