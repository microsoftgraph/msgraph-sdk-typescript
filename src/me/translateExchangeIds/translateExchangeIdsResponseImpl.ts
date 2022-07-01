import {ConvertIdResultImpl} from '../../models/';
import {ConvertIdResult} from '../../models/convertIdResult';
import {createConvertIdResultFromDiscriminatorValue} from '../../models/createConvertIdResultFromDiscriminatorValue';
import {TranslateExchangeIdsResponse} from './translateExchangeIdsResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the translateExchangeIds method. */
export class TranslateExchangeIdsResponseImpl implements TranslateExchangeIdsResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: ConvertIdResult[] | undefined;
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
     * Instantiates a new translateExchangeIdsResponse and sets the default values.
     * @param translateExchangeIdsResponseParameterValue 
     */
    public constructor(translateExchangeIdsResponseParameterValue?: TranslateExchangeIdsResponse | undefined) {
        this._additionalData = translateExchangeIdsResponseParameterValue?.additionalData ? translateExchangeIdsResponseParameterValue?.additionalData! : {};
        this._value = translateExchangeIdsResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<ConvertIdResultImpl>(createConvertIdResultFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: ConvertIdResultImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof ConvertIdResultImpl? element:new ConvertIdResultImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ConvertIdResultImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a ConvertIdResultInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ConvertIdResult[] | undefined) {
        if(value) {
            const valueArrValue: ConvertIdResultImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof ConvertIdResultImpl? element:new ConvertIdResultImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
