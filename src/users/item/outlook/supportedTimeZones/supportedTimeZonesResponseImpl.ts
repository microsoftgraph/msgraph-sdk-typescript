import {TimeZoneInformationImpl} from '../../../../models/';
import {createTimeZoneInformationFromDiscriminatorValue} from '../../../../models/createTimeZoneInformationFromDiscriminatorValue';
import {TimeZoneInformation} from '../../../../models/timeZoneInformation';
import {SupportedTimeZonesResponse} from './supportedTimeZonesResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the supportedTimeZones method. */
export class SupportedTimeZonesResponseImpl implements AdditionalDataHolder, Parsable, SupportedTimeZonesResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: TimeZoneInformation[] | undefined;
    /**
     * Instantiates a new supportedTimeZonesResponse and sets the default values.
     * @param supportedTimeZonesResponseParameterValue 
     */
    public constructor(supportedTimeZonesResponseParameterValue?: SupportedTimeZonesResponse | undefined) {
        this.additionalData = supportedTimeZonesResponseParameterValue?.additionalData ? supportedTimeZonesResponseParameterValue?.additionalData! : {}
        this.value = supportedTimeZonesResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<TimeZoneInformationImpl>(createTimeZoneInformationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: TimeZoneInformationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TimeZoneInformationImpl(element));});
        writer.writeCollectionOfObjectValues<TimeZoneInformationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
