import {SearchResponseImpl} from '../../models/';
import {createSearchResponseFromDiscriminatorValue} from '../../models/createSearchResponseFromDiscriminatorValue';
import {SearchResponse} from '../../models/searchResponse';
import {QueryResponse} from './queryResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the query method. */
export class QueryResponseImpl implements QueryResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The value property */
    private _value?: SearchResponse[] | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new queryResponse and sets the default values.
     * @param queryResponseParameterValue 
     */
    public constructor(queryResponseParameterValue?: QueryResponse | undefined) {
        this._additionalData = queryResponseParameterValue?.additionalData ? queryResponseParameterValue?.additionalData! : {};
        this._value = queryResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<SearchResponseImpl>(createSearchResponseFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: SearchResponseImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof SearchResponseImpl? element:new SearchResponseImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SearchResponseImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a SearchResponseInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: SearchResponse[] | undefined) {
        if(value) {
            const valueArrValue: SearchResponseImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof SearchResponseImpl? element:new SearchResponseImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
