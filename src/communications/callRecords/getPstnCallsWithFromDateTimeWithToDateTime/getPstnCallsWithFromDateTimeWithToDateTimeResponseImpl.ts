import {PstnCallLogRowImpl} from '../../../models/callRecords/';
import {createPstnCallLogRowFromDiscriminatorValue} from '../../../models/callRecords/createPstnCallLogRowFromDiscriminatorValue';
import {PstnCallLogRow} from '../../../models/callRecords/pstnCallLogRow';
import {GetPstnCallsWithFromDateTimeWithToDateTimeResponse} from './getPstnCallsWithFromDateTimeWithToDateTimeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getPstnCalls method. */
export class GetPstnCallsWithFromDateTimeWithToDateTimeResponseImpl implements GetPstnCallsWithFromDateTimeWithToDateTimeResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: PstnCallLogRow[] | undefined;
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
     * Instantiates a new getPstnCallsWithFromDateTimeWithToDateTimeResponse and sets the default values.
     * @param getPstnCallsWithFromDateTimeWithToDateTimeResponseParameterValue 
     */
    public constructor(getPstnCallsWithFromDateTimeWithToDateTimeResponseParameterValue?: GetPstnCallsWithFromDateTimeWithToDateTimeResponse | undefined) {
        this._additionalData = getPstnCallsWithFromDateTimeWithToDateTimeResponseParameterValue?.additionalData ? getPstnCallsWithFromDateTimeWithToDateTimeResponseParameterValue?.additionalData! : {};
        this._value = getPstnCallsWithFromDateTimeWithToDateTimeResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<PstnCallLogRowImpl>(createPstnCallLogRowFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: PstnCallLogRowImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof PstnCallLogRowImpl? element as PstnCallLogRowImpl:new PstnCallLogRowImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PstnCallLogRowImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a PstnCallLogRowInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: PstnCallLogRow[] | undefined) {
        if(value) {
            const valueArrValue: PstnCallLogRowImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof PstnCallLogRowImpl? element as PstnCallLogRowImpl:new PstnCallLogRowImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
