import { type AttributeMappingFunctionSchemaCollectionResponse } from '../models/';
import { createAttributeMappingFunctionSchemaFromDiscriminatorValue, deserializeIntoAttributeMappingFunctionSchema, serializeAttributeMappingFunctionSchema, type AttributeMappingFunctionSchema } from '../models/attributeMappingFunctionSchema';
import { createAttributeMappingFunctionSchemaCollectionResponseFromDiscriminatorValue } from '../models/attributeMappingFunctionSchemaCollectionResponse';
import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { AttributeMappingFunctionSchemaItemRequestBuilder } from './item/attributeMappingFunctionSchemaItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface FunctionsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface FunctionsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: FunctionsRequestBuilderGetQueryParameters;
}
export interface FunctionsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the collection of attributeMappingFunctionSchema entities.
 */
export class FunctionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of attributeMappingFunctionSchema entities.
     * @param attributeMappingFunctionSchemaId The unique identifier of attributeMappingFunctionSchema
     * @returns a AttributeMappingFunctionSchemaItemRequestBuilder
     */
    public byAttributeMappingFunctionSchemaId(attributeMappingFunctionSchemaId: string) : AttributeMappingFunctionSchemaItemRequestBuilder {
        if(!attributeMappingFunctionSchemaId) throw new Error("attributeMappingFunctionSchemaId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["attributeMappingFunctionSchema%2Did"] = attributeMappingFunctionSchemaId
        return new AttributeMappingFunctionSchemaItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new FunctionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/functions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get entities from functions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttributeMappingFunctionSchemaCollectionResponse
     */
    public get(requestConfiguration?: FunctionsRequestBuilderGetRequestConfiguration | undefined) : Promise<AttributeMappingFunctionSchemaCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttributeMappingFunctionSchemaCollectionResponse>(requestInfo, createAttributeMappingFunctionSchemaCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add new entity to functions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttributeMappingFunctionSchema
     */
    public post(body: AttributeMappingFunctionSchema, requestConfiguration?: FunctionsRequestBuilderPostRequestConfiguration | undefined) : Promise<AttributeMappingFunctionSchema | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttributeMappingFunctionSchema>(requestInfo, createAttributeMappingFunctionSchemaFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get entities from functions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FunctionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add new entity to functions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AttributeMappingFunctionSchema, requestConfiguration?: FunctionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAttributeMappingFunctionSchema);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a functionsRequestBuilder
     */
    public withUrl(rawUrl: string) : FunctionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new FunctionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
