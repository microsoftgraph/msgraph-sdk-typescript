import {DirectRoutingLogRowImpl} from '../../../models/callRecords/';
import {createDirectRoutingLogRowFromDiscriminatorValue} from '../../../models/callRecords/createDirectRoutingLogRowFromDiscriminatorValue';
import {DirectRoutingLogRow} from '../../../models/callRecords/directRoutingLogRow';
import {GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse} from './getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getDirectRoutingCalls method. */
export class GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseImpl implements GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: DirectRoutingLogRow[] | undefined;
    /**
     * Instantiates a new getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse and sets the default values.
     * @param getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseParameterValue 
     */
    public constructor(getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseParameterValue?: GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse | undefined) {
        this.additionalData = getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseParameterValue?.additionalData ? getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseParameterValue?.additionalData! : {};
        const valueArrValue: DirectRoutingLogRowImpl[] = []; getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseParameterValue?.value?.forEach(element => {valueArrValue.push(element instanceof DirectRoutingLogRowImpl? element : new DirectRoutingLogRowImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<DirectRoutingLogRowImpl>(createDirectRoutingLogRowFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: DirectRoutingLogRowImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof DirectRoutingLogRowImpl? element : new DirectRoutingLogRowImpl(element));});
            writer.writeCollectionOfObjectValues<DirectRoutingLogRowImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
