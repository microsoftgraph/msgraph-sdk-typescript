import {TimeZoneInformationImpl} from '../../../models/';
import {createTimeZoneInformationFromDiscriminatorValue} from '../../../models/createTimeZoneInformationFromDiscriminatorValue';
import {TimeZoneInformation} from '../../../models/timeZoneInformation';
import {SupportedTimeZonesResponse} from './supportedTimeZonesResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the supportedTimeZones method. */
export class SupportedTimeZonesResponseImpl implements SupportedTimeZonesResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: TimeZoneInformation[] | undefined;
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
     * Instantiates a new supportedTimeZonesResponse and sets the default values.
     * @param supportedTimeZonesResponseParameterValue 
     */
    public constructor(supportedTimeZonesResponseParameterValue?: SupportedTimeZonesResponse | undefined) {
        this._additionalData = supportedTimeZonesResponseParameterValue?.additionalData ? supportedTimeZonesResponseParameterValue?.additionalData! : {};
        this._value = supportedTimeZonesResponseParameterValue?.value;
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
        if(this.value && this.value.length != 0){        const valueArrValue: TimeZoneInformationImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof TimeZoneInformationImpl? element:new TimeZoneInformationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TimeZoneInformationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a TimeZoneInformationInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: TimeZoneInformation[] | undefined) {
        if(value) {
            const valueArrValue: TimeZoneInformationImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof TimeZoneInformationImpl? element:new TimeZoneInformationImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
