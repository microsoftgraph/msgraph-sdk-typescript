import {FilterOperatorSchemaCollectionResponse} from '../models/';
import {createFilterOperatorSchemaCollectionResponseFromDiscriminatorValue} from '../models/createFilterOperatorSchemaCollectionResponseFromDiscriminatorValue';
import {createFilterOperatorSchemaFromDiscriminatorValue} from '../models/createFilterOperatorSchemaFromDiscriminatorValue';
import {deserializeIntoFilterOperatorSchema} from '../models/deserializeIntoFilterOperatorSchema';
import type {FilterOperatorSchema} from '../models/filterOperatorSchema';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeFilterOperatorSchema} from '../models/serializeFilterOperatorSchema';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FilterOperatorsRequestBuilderGetRequestConfiguration} from './filterOperatorsRequestBuilderGetRequestConfiguration';
import {FilterOperatorsRequestBuilderPostRequestConfiguration} from './filterOperatorsRequestBuilderPostRequestConfiguration';
import {FilterOperatorSchemaItemRequestBuilder} from './item/filterOperatorSchemaItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of filterOperatorSchema entities.
 */
export class FilterOperatorsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of filterOperatorSchema entities.
     * @param filterOperatorSchemaId Unique identifier of the item
     * @returns a FilterOperatorSchemaItemRequestBuilder
     */
    public byFilterOperatorSchemaId(filterOperatorSchemaId: string) : FilterOperatorSchemaItemRequestBuilder {
        if(!filterOperatorSchemaId) throw new Error("filterOperatorSchemaId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["filterOperatorSchema%2Did"] = filterOperatorSchemaId
        return new FilterOperatorSchemaItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new FilterOperatorsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/filterOperators{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get entities from filterOperators
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FilterOperatorSchemaCollectionResponse
     */
    public get(requestConfiguration?: FilterOperatorsRequestBuilderGetRequestConfiguration | undefined) : Promise<FilterOperatorSchemaCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<FilterOperatorSchemaCollectionResponse>(requestInfo, createFilterOperatorSchemaCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add new entity to filterOperators
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FilterOperatorSchema
     */
    public post(body: FilterOperatorSchema, requestConfiguration?: FilterOperatorsRequestBuilderPostRequestConfiguration | undefined) : Promise<FilterOperatorSchema | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<FilterOperatorSchema>(requestInfo, createFilterOperatorSchemaFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get entities from filterOperators
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FilterOperatorsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Add new entity to filterOperators
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: FilterOperatorSchema, requestConfiguration?: FilterOperatorsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeFilterOperatorSchema);
        return requestInfo;
    };
}
