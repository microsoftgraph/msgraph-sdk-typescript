import { createDataPolicyOperationFromDiscriminatorValue, deserializeIntoDataPolicyOperation, serializeDataPolicyOperation, type DataPolicyOperation } from '../../models/dataPolicyOperation';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface DataPolicyOperationItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface DataPolicyOperationItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface DataPolicyOperationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DataPolicyOperationItemRequestBuilderGetQueryParameters;
}
export interface DataPolicyOperationItemRequestBuilderPatchRequestConfiguration {
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
export class DataPolicyOperationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DataPolicyOperationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/dataPolicyOperations/{dataPolicyOperation%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete entity from dataPolicyOperations
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DataPolicyOperationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve the properties of a dataPolicyOperation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DataPolicyOperation
     * @see {@link https://learn.microsoft.com/graph/api/datapolicyoperation-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DataPolicyOperationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DataPolicyOperation | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DataPolicyOperation>(requestInfo, createDataPolicyOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update entity in dataPolicyOperations
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DataPolicyOperation
     */
    public patch(body: DataPolicyOperation, requestConfiguration?: DataPolicyOperationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DataPolicyOperation | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DataPolicyOperation>(requestInfo, createDataPolicyOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete entity from dataPolicyOperations
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DataPolicyOperationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieve the properties of a dataPolicyOperation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DataPolicyOperationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update entity in dataPolicyOperations
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DataPolicyOperation, requestConfiguration?: DataPolicyOperationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
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
     * @returns a DataPolicyOperationItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DataPolicyOperationItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DataPolicyOperationItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
