import {ReminderImpl} from '../../models/';
import {createReminderFromDiscriminatorValue} from '../../models/createReminderFromDiscriminatorValue';
import {Reminder} from '../../models/reminder';
import {ReminderViewWithStartDateTimeWithEndDateTimeResponse} from './reminderViewWithStartDateTimeWithEndDateTimeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reminderView method. */
export class ReminderViewWithStartDateTimeWithEndDateTimeResponseImpl implements AdditionalDataHolder, Parsable, ReminderViewWithStartDateTimeWithEndDateTimeResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: Reminder[] | undefined;
    /**
     * Instantiates a new reminderViewWithStartDateTimeWithEndDateTimeResponse and sets the default values.
     * @param reminderViewWithStartDateTimeWithEndDateTimeResponseParameterValue 
     */
    public constructor(reminderViewWithStartDateTimeWithEndDateTimeResponseParameterValue?: ReminderViewWithStartDateTimeWithEndDateTimeResponse | undefined) {
        this.additionalData = reminderViewWithStartDateTimeWithEndDateTimeResponseParameterValue?.additionalData ? reminderViewWithStartDateTimeWithEndDateTimeResponseParameterValue?.additionalData! : {}
        this.value = reminderViewWithStartDateTimeWithEndDateTimeResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<ReminderImpl>(createReminderFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: ReminderImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ReminderImpl(element));});
        writer.writeCollectionOfObjectValues<ReminderImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
