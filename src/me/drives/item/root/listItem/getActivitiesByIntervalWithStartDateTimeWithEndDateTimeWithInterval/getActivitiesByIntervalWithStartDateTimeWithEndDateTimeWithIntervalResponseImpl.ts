import {ItemActivityStatImpl} from '../../../../../../models/';
import {createItemActivityStatFromDiscriminatorValue} from '../../../../../../models/createItemActivityStatFromDiscriminatorValue';
import {ItemActivityStat} from '../../../../../../models/itemActivityStat';
import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse} from './getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getActivitiesByInterval method. */
export class GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseImpl implements AdditionalDataHolder, GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: ItemActivityStat[] | undefined;
    /**
     * Instantiates a new getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse and sets the default values.
     * @param getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseParameterValue 
     */
    public constructor(getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseParameterValue?: GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse | undefined) {
        this.additionalData = getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseParameterValue?.additionalData ? getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseParameterValue?.additionalData! : {}
        this.value = getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<ItemActivityStatImpl>(createItemActivityStatFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: ItemActivityStatImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ItemActivityStatImpl(element));});
        writer.writeCollectionOfObjectValues<ItemActivityStatImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
