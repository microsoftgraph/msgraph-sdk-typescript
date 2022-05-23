import {ConvertIdResultImpl} from '../../../../../models/';
import {ConvertIdResult} from '../../../../../models/convertIdResult';
import {createConvertIdResultFromDiscriminatorValue} from '../../../../../models/createConvertIdResultFromDiscriminatorValue';
import {TranslateExchangeIdsResponse} from './translateExchangeIdsResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the translateExchangeIds method. */
export class TranslateExchangeIdsResponseImpl implements AdditionalDataHolder, Parsable, TranslateExchangeIdsResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: ConvertIdResult[] | undefined;
    /**
     * Instantiates a new translateExchangeIdsResponse and sets the default values.
     * @param translateExchangeIdsResponseParameterValue 
     */
    public constructor(translateExchangeIdsResponseParameterValue?: TranslateExchangeIdsResponse | undefined) {
        this.additionalData = translateExchangeIdsResponseParameterValue?.additionalData ? translateExchangeIdsResponseParameterValue?.additionalData! : {}
        this.value = translateExchangeIdsResponseParameterValue?.value ;
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
        if(this.value && this.value.length != 0){        const valueArrValue: ConvertIdResultImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ConvertIdResultImpl(element));});
        writer.writeCollectionOfObjectValues<ConvertIdResultImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
