import {SearchRequestImpl} from '../../models/';
import {createSearchRequestFromDiscriminatorValue} from '../../models/createSearchRequestFromDiscriminatorValue';
import {SearchRequest} from '../../models/searchRequest';
import {QueryRequestBody} from './queryRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the query method.  */
export class QueryRequestBodyImpl implements AdditionalDataHolder, Parsable, QueryRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The requests property  */
    requests?: SearchRequest[] | undefined;
    /**
     * Instantiates a new queryRequestBody and sets the default values.
     * @param queryRequestBodyParameterValue 
     */
    public constructor(queryRequestBodyParameterValue?: QueryRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = queryRequestBodyParameterValue?.additionalData ? {} : queryRequestBodyParameterValue?.additionalData!
        this.requests = queryRequestBodyParameterValue?.requests ;
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
        if(this.requests){
        const requestsArrValue: SearchRequestImpl[] = []; this.requests?.forEach(element => {requestsArrValue.push(new SearchRequestImpl(element));});
        writer.writeCollectionOfObjectValues<SearchRequestImpl>("requests", requestsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
