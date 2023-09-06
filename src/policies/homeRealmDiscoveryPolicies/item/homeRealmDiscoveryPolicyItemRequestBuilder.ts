import { createHomeRealmDiscoveryPolicyFromDiscriminatorValue } from '../../../models/createHomeRealmDiscoveryPolicyFromDiscriminatorValue';
import { deserializeIntoHomeRealmDiscoveryPolicy } from '../../../models/deserializeIntoHomeRealmDiscoveryPolicy';
import { type HomeRealmDiscoveryPolicy } from '../../../models/homeRealmDiscoveryPolicy';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeHomeRealmDiscoveryPolicy } from '../../../models/serializeHomeRealmDiscoveryPolicy';
import { AppliesToRequestBuilder } from './appliesTo/appliesToRequestBuilder';
import { type HomeRealmDiscoveryPolicyItemRequestBuilderDeleteRequestConfiguration } from './homeRealmDiscoveryPolicyItemRequestBuilderDeleteRequestConfiguration';
import { type HomeRealmDiscoveryPolicyItemRequestBuilderGetRequestConfiguration } from './homeRealmDiscoveryPolicyItemRequestBuilderGetRequestConfiguration';
import { type HomeRealmDiscoveryPolicyItemRequestBuilderPatchRequestConfiguration } from './homeRealmDiscoveryPolicyItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the homeRealmDiscoveryPolicies property of the microsoft.graph.policyRoot entity.
 */
export class HomeRealmDiscoveryPolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the appliesTo property of the microsoft.graph.stsPolicy entity.
     */
    public get appliesTo(): AppliesToRequestBuilder {
        return new AppliesToRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new HomeRealmDiscoveryPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a homeRealmDiscoveryPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/homerealmdiscoverypolicy-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: HomeRealmDiscoveryPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a homeRealmDiscoveryPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HomeRealmDiscoveryPolicy
     * @see {@link https://learn.microsoft.com/graph/api/homerealmdiscoverypolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: HomeRealmDiscoveryPolicyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<HomeRealmDiscoveryPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HomeRealmDiscoveryPolicy>(requestInfo, createHomeRealmDiscoveryPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a homeRealmDiscoveryPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HomeRealmDiscoveryPolicy
     * @see {@link https://learn.microsoft.com/graph/api/homerealmdiscoverypolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: HomeRealmDiscoveryPolicy, requestConfiguration?: HomeRealmDiscoveryPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<HomeRealmDiscoveryPolicy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HomeRealmDiscoveryPolicy>(requestInfo, createHomeRealmDiscoveryPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a homeRealmDiscoveryPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: HomeRealmDiscoveryPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a homeRealmDiscoveryPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HomeRealmDiscoveryPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a homeRealmDiscoveryPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: HomeRealmDiscoveryPolicy, requestConfiguration?: HomeRealmDiscoveryPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeHomeRealmDiscoveryPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a HomeRealmDiscoveryPolicyItemRequestBuilder
     */
    public withUrl(rawUrl: string) : HomeRealmDiscoveryPolicyItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new HomeRealmDiscoveryPolicyItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
