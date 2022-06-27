import {createTimeOffReasonFromDiscriminatorValue} from './createTimeOffReasonFromDiscriminatorValue';
import {TimeOffReasonImpl} from './index';
import {TimeOffReason} from './timeOffReason';
import {TimeOffReasonCollectionResponse} from './timeOffReasonCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOffReasonCollectionResponseImpl implements TimeOffReasonCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TimeOffReason[] | undefined;
    /**
     * Instantiates a new TimeOffReasonCollectionResponse and sets the default values.
     * @param timeOffReasonCollectionResponseParameterValue 
     */
    public constructor(timeOffReasonCollectionResponseParameterValue?: TimeOffReasonCollectionResponse | undefined) {
        this.additionalData = timeOffReasonCollectionResponseParameterValue?.additionalData ? timeOffReasonCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = timeOffReasonCollectionResponseParameterValue?.nextLink;
        const valueArrValue: TimeOffReasonImpl[] = []; timeOffReasonCollectionResponseParameterValue?.value?.forEach(element => {valueArrValue.push(element instanceof TimeOffReasonImpl? element : new TimeOffReasonImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TimeOffReasonImpl>(createTimeOffReasonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
            writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: TimeOffReasonImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof TimeOffReasonImpl? element : new TimeOffReasonImpl(element));});
            writer.writeCollectionOfObjectValues<TimeOffReasonImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
