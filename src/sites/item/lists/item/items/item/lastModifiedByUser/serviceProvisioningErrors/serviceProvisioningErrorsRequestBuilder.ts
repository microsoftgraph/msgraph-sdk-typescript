import { type ServiceProvisioningErrorCollectionResponse } from '../../../../../../../../models/';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../../models/oDataErrors/oDataError';
import { createServiceProvisioningErrorCollectionResponseFromDiscriminatorValue } from '../../../../../../../../models/serviceProvisioningErrorCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ServiceProvisioningErrorsRequestBuilderGetQueryParameters {
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
export interface ServiceProvisioningErrorsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ServiceProvisioningErrorsRequestBuilderGetQueryParameters;
}
/**
 * Builds and executes requests for operations under /sites/{site-id}/lists/{list-id}/items/{listItem-id}/lastModifiedByUser/serviceProvisioningErrors
 */
export class ServiceProvisioningErrorsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ServiceProvisioningErrorsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/lists/{list%2Did}/items/{listItem%2Did}/lastModifiedByUser/serviceProvisioningErrors{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get serviceProvisioningErrors property value
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceProvisioningErrorCollectionResponse
     */
    public get(requestConfiguration?: ServiceProvisioningErrorsRequestBuilderGetRequestConfiguration | undefined) : Promise<ServiceProvisioningErrorCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceProvisioningErrorCollectionResponse>(requestInfo, createServiceProvisioningErrorCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get serviceProvisioningErrors property value
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ServiceProvisioningErrorsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a serviceProvisioningErrorsRequestBuilder
     */
    public withUrl(rawUrl: string) : ServiceProvisioningErrorsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ServiceProvisioningErrorsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
