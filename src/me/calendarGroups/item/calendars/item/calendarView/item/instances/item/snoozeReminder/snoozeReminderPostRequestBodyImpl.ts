import {DateTimeTimeZoneImpl} from '../../../../../../../../../../models/';
import {createDateTimeTimeZoneFromDiscriminatorValue} from '../../../../../../../../../../models/createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from '../../../../../../../../../../models/dateTimeTimeZone';
import {SnoozeReminderPostRequestBody} from './snoozeReminderPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the snoozeReminder method. */
export class SnoozeReminderPostRequestBodyImpl implements AdditionalDataHolder, Parsable, SnoozeReminderPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The NewReminderTime property */
    public newReminderTime?: DateTimeTimeZone | undefined;
    /**
     * Instantiates a new snoozeReminderPostRequestBody and sets the default values.
     * @param snoozeReminderPostRequestBodyParameterValue 
     */
    public constructor(snoozeReminderPostRequestBodyParameterValue?: SnoozeReminderPostRequestBody | undefined) {
        this.additionalData = snoozeReminderPostRequestBodyParameterValue?.additionalData ? snoozeReminderPostRequestBodyParameterValue?.additionalData! : {}
        this.newReminderTime = snoozeReminderPostRequestBodyParameterValue?.newReminderTime ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.newReminderTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("newReminderTime", new DateTimeTimeZoneImpl(this.newReminderTime));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
