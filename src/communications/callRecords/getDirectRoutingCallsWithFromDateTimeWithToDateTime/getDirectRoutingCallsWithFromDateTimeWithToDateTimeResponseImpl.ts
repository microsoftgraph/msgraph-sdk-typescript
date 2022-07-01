import {DirectRoutingLogRowImpl} from '../../../models/callRecords/';
import {createDirectRoutingLogRowFromDiscriminatorValue} from '../../../models/callRecords/createDirectRoutingLogRowFromDiscriminatorValue';
import {DirectRoutingLogRow} from '../../../models/callRecords/directRoutingLogRow';
import {GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse} from './getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getDirectRoutingCalls method. */
export class GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseImpl implements GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: DirectRoutingLogRow[] | undefined;
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
     * Instantiates a new getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse and sets the default values.
     * @param getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseParameterValue 
     */
    public constructor(getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseParameterValue?: GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse | undefined) {
        this._additionalData = getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseParameterValue?.additionalData ? getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseParameterValue?.additionalData! : {};
        this._value = getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponseParameterValue?.value;
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
        if(this.value && this.value.length != 0){        const valueArrValue: DirectRoutingLogRowImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof DirectRoutingLogRowImpl? element:new DirectRoutingLogRowImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectRoutingLogRowImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a DirectRoutingLogRowInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: DirectRoutingLogRow[] | undefined) {
        if(value) {
            const valueArrValue: DirectRoutingLogRowImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof DirectRoutingLogRowImpl? element:new DirectRoutingLogRowImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
