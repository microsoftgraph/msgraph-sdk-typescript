import {SearchResponseImpl} from '../../models/';
import {createSearchResponseFromDiscriminatorValue} from '../../models/createSearchResponseFromDiscriminatorValue';
import {SearchResponse} from '../../models/searchResponse';
import {QueryResponse} from './queryResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the query method. */
export class QueryResponseImpl implements AdditionalDataHolder, Parsable, QueryResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: SearchResponse[] | undefined;
    /**
     * Instantiates a new queryResponse and sets the default values.
     * @param queryResponseParameterValue 
     */
    public constructor(queryResponseParameterValue?: QueryResponse | undefined) {
        this.additionalData = queryResponseParameterValue?.additionalData ? queryResponseParameterValue?.additionalData! : {}
        this.value = queryResponseParameterValue?.value ;
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
        if(this.value && this.value.length != 0){        const valueArrValue: SearchResponseImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SearchResponseImpl(element));});
        writer.writeCollectionOfObjectValues<SearchResponseImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
