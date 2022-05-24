import {TimeZoneInformationImpl} from '../../../../models/';
import {createTimeZoneInformationFromDiscriminatorValue} from '../../../../models/createTimeZoneInformationFromDiscriminatorValue';
import {TimeZoneInformation} from '../../../../models/timeZoneInformation';
import {SupportedTimeZonesWithTimeZoneStandardResponse} from './supportedTimeZonesWithTimeZoneStandardResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the supportedTimeZones method. */
export class SupportedTimeZonesWithTimeZoneStandardResponseImpl implements AdditionalDataHolder, Parsable, SupportedTimeZonesWithTimeZoneStandardResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: TimeZoneInformation[] | undefined;
    /**
     * Instantiates a new supportedTimeZonesWithTimeZoneStandardResponse and sets the default values.
     * @param supportedTimeZonesWithTimeZoneStandardResponseParameterValue 
     */
    public constructor(supportedTimeZonesWithTimeZoneStandardResponseParameterValue?: SupportedTimeZonesWithTimeZoneStandardResponse | undefined) {
        this.additionalData = supportedTimeZonesWithTimeZoneStandardResponseParameterValue?.additionalData ? supportedTimeZonesWithTimeZoneStandardResponseParameterValue?.additionalData! : {}
        this.value = supportedTimeZonesWithTimeZoneStandardResponseParameterValue?.value ;
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
