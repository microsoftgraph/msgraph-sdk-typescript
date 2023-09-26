import { type AccessPackageResourceCollectionResponse } from '../../../models/';
import { createAccessPackageResourceFromDiscriminatorValue, deserializeIntoAccessPackageResource, serializeAccessPackageResource, type AccessPackageResource } from '../../../models/accessPackageResource';
import { createAccessPackageResourceCollectionResponseFromDiscriminatorValue } from '../../../models/accessPackageResourceCollectionResponse';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { AccessPackageResourceItemRequestBuilder } from './item/accessPackageResourceItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ResourcesRequestBuilderGetQueryParameters {
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
export interface ResourcesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ResourcesRequestBuilderGetQueryParameters;
}
export interface ResourcesRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the resources property of the microsoft.graph.entitlementManagement entity.
 */
export class ResourcesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resources property of the microsoft.graph.entitlementManagement entity.
     * @param accessPackageResourceId The unique identifier of accessPackageResource
     * @returns a AccessPackageResourceItemRequestBuilder
     */
    public byAccessPackageResourceId(accessPackageResourceId: string) : AccessPackageResourceItemRequestBuilder {
        if(!accessPackageResourceId) throw new Error("accessPackageResourceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageResource%2Did"] = accessPackageResourceId
        return new AccessPackageResourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ResourcesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/resources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The resources associated with the catalogs.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceCollectionResponse
     */
    public get(requestConfiguration?: ResourcesRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageResourceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceCollectionResponse>(requestInfo, createAccessPackageResourceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to resources for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResource
     */
    public post(body: AccessPackageResource, requestConfiguration?: ResourcesRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessPackageResource | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResource>(requestInfo, createAccessPackageResourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * The resources associated with the catalogs.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResourcesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to resources for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessPackageResource, requestConfiguration?: ResourcesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessPackageResource);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a resourcesRequestBuilder
     */
    public withUrl(rawUrl: string) : ResourcesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ResourcesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
