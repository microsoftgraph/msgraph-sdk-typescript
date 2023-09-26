import { type DataPolicyOperationCollectionResponse } from '../models/';
import { createDataPolicyOperationFromDiscriminatorValue, deserializeIntoDataPolicyOperation, serializeDataPolicyOperation, type DataPolicyOperation } from '../models/dataPolicyOperation';
import { createDataPolicyOperationCollectionResponseFromDiscriminatorValue } from '../models/dataPolicyOperationCollectionResponse';
import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DataPolicyOperationItemRequestBuilder } from './item/dataPolicyOperationItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface DataPolicyOperationsRequestBuilderGetQueryParameters {
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
export interface DataPolicyOperationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DataPolicyOperationsRequestBuilderGetQueryParameters;
}
export interface DataPolicyOperationsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the collection of dataPolicyOperation entities.
 */
export class DataPolicyOperationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of dataPolicyOperation entities.
     * @param dataPolicyOperationId The unique identifier of dataPolicyOperation
     * @returns a DataPolicyOperationItemRequestBuilder
     */
    public byDataPolicyOperationId(dataPolicyOperationId: string) : DataPolicyOperationItemRequestBuilder {
        if(!dataPolicyOperationId) throw new Error("dataPolicyOperationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["dataPolicyOperation%2Did"] = dataPolicyOperationId
        return new DataPolicyOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DataPolicyOperationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/dataPolicyOperations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the properties of a dataPolicyOperation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DataPolicyOperationCollectionResponse
     */
    public get(requestConfiguration?: DataPolicyOperationsRequestBuilderGetRequestConfiguration | undefined) : Promise<DataPolicyOperationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DataPolicyOperationCollectionResponse>(requestInfo, createDataPolicyOperationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add new entity to dataPolicyOperations
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DataPolicyOperation
     */
    public post(body: DataPolicyOperation, requestConfiguration?: DataPolicyOperationsRequestBuilderPostRequestConfiguration | undefined) : Promise<DataPolicyOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DataPolicyOperation>(requestInfo, createDataPolicyOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the properties of a dataPolicyOperation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DataPolicyOperationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add new entity to dataPolicyOperations
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DataPolicyOperation, requestConfiguration?: DataPolicyOperationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDataPolicyOperation);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a dataPolicyOperationsRequestBuilder
     */
    public withUrl(rawUrl: string) : DataPolicyOperationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DataPolicyOperationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
