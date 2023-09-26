import { type HomeRealmDiscoveryPolicyCollectionResponse } from '../../../models/';
import { createHomeRealmDiscoveryPolicyCollectionResponseFromDiscriminatorValue } from '../../../models/homeRealmDiscoveryPolicyCollectionResponse';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { HomeRealmDiscoveryPolicyItemRequestBuilder } from './item/homeRealmDiscoveryPolicyItemRequestBuilder';
import { RefRequestBuilder } from './ref/refRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface HomeRealmDiscoveryPoliciesRequestBuilderGetQueryParameters {
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
export interface HomeRealmDiscoveryPoliciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: HomeRealmDiscoveryPoliciesRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the homeRealmDiscoveryPolicies property of the microsoft.graph.servicePrincipal entity.
 */
export class HomeRealmDiscoveryPoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of servicePrincipal entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.servicePrincipals.item.homeRealmDiscoveryPolicies.item collection
     * @param homeRealmDiscoveryPolicyId Unique identifier of the item
     * @returns a HomeRealmDiscoveryPolicyItemRequestBuilder
     */
    public byHomeRealmDiscoveryPolicyId(homeRealmDiscoveryPolicyId: string) : HomeRealmDiscoveryPolicyItemRequestBuilder {
        if(!homeRealmDiscoveryPolicyId) throw new Error("homeRealmDiscoveryPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["homeRealmDiscoveryPolicy%2Did"] = homeRealmDiscoveryPolicyId
        return new HomeRealmDiscoveryPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new HomeRealmDiscoveryPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/homeRealmDiscoveryPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List the homeRealmDiscoveryPolicy objects that are assigned to a servicePrincipal.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HomeRealmDiscoveryPolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipal-list-homerealmdiscoverypolicies?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: HomeRealmDiscoveryPoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<HomeRealmDiscoveryPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HomeRealmDiscoveryPolicyCollectionResponse>(requestInfo, createHomeRealmDiscoveryPolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * List the homeRealmDiscoveryPolicy objects that are assigned to a servicePrincipal.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HomeRealmDiscoveryPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a homeRealmDiscoveryPoliciesRequestBuilder
     */
    public withUrl(rawUrl: string) : HomeRealmDiscoveryPoliciesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new HomeRealmDiscoveryPoliciesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
