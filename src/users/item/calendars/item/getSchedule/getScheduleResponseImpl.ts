import {ScheduleInformationImpl} from '../../../../../models/';
import {createScheduleInformationFromDiscriminatorValue} from '../../../../../models/createScheduleInformationFromDiscriminatorValue';
import {ScheduleInformation} from '../../../../../models/scheduleInformation';
import {GetScheduleResponse} from './getScheduleResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getSchedule method. */
export class GetScheduleResponseImpl implements AdditionalDataHolder, GetScheduleResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: ScheduleInformation[] | undefined;
    /**
     * Instantiates a new getScheduleResponse and sets the default values.
     * @param getScheduleResponseParameterValue 
     */
    public constructor(getScheduleResponseParameterValue?: GetScheduleResponse | undefined) {
        this.additionalData = getScheduleResponseParameterValue?.additionalData ? getScheduleResponseParameterValue?.additionalData! : {}
        this.value = getScheduleResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<ScheduleInformationImpl>(createScheduleInformationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: ScheduleInformationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ScheduleInformationImpl(element));});
        writer.writeCollectionOfObjectValues<ScheduleInformationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
