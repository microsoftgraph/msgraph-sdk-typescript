import {SearchRequestImpl} from '../../models/';
import {createSearchRequestFromDiscriminatorValue} from '../../models/createSearchRequestFromDiscriminatorValue';
import {SearchRequest} from '../../models/searchRequest';
import {QueryPostRequestBody} from './queryPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the query method. */
export class QueryPostRequestBodyImpl implements QueryPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The requests property */
    private _requests?: SearchRequest[] | undefined;
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
     * Instantiates a new queryPostRequestBody and sets the default values.
     * @param queryPostRequestBodyParameterValue 
     */
    public constructor(queryPostRequestBodyParameterValue?: QueryPostRequestBody | undefined) {
        this._additionalData = queryPostRequestBodyParameterValue?.additionalData ? queryPostRequestBodyParameterValue?.additionalData! : {};
        this._requests = queryPostRequestBodyParameterValue?.requests;
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
     * Gets the requests property value. The requests property
     * @returns a SearchRequestInterface
     */
    public get requests() {
        return this._requests;
    };
    /**
     * Sets the requests property value. The requests property
     * @param value Value to set for the requests property.
     */
    public set requests(value: SearchRequest[] | undefined) {
        if(value) {
            const requestsArrValue: SearchRequestImpl[] = [];
            this.requests?.forEach(element => {
                requestsArrValue.push((element instanceof SearchRequestImpl? element:new SearchRequestImpl(element)));
            });
            this._requests = requestsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.requests && this.requests.length != 0){        const requestsArrValue: SearchRequestImpl[] = [];
        this.requests?.forEach(element => {
            requestsArrValue.push((element instanceof SearchRequestImpl? element:new SearchRequestImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SearchRequestImpl>("requests", requestsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
