import {SearchRequestImpl} from '../../models/';
import {createSearchRequestFromDiscriminatorValue} from '../../models/createSearchRequestFromDiscriminatorValue';
import {SearchRequest} from '../../models/searchRequest';
import {QueryPostRequestBody} from './queryPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the query method. */
export class QueryPostRequestBodyImpl implements AdditionalDataHolder, Parsable, QueryPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The requests property */
    public requests?: SearchRequest[] | undefined;
    /**
     * Instantiates a new queryPostRequestBody and sets the default values.
     * @param queryPostRequestBodyParameterValue 
     */
    public constructor(queryPostRequestBodyParameterValue?: QueryPostRequestBody | undefined) {
        this.additionalData = queryPostRequestBodyParameterValue?.additionalData ? queryPostRequestBodyParameterValue?.additionalData! : {}
        this.requests = queryPostRequestBodyParameterValue?.requests ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "requests": n => { this.requests = n.getCollectionOfObjectValues<SearchRequestImpl>(createSearchRequestFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.requests && this.requests.length != 0){        const requestsArrValue: SearchRequestImpl[] = []; this.requests?.forEach(element => {requestsArrValue.push(new SearchRequestImpl(element));});
        writer.writeCollectionOfObjectValues<SearchRequestImpl>("requests", requestsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
