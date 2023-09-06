import { createTokenLifetimePolicyFromDiscriminatorValue } from '../../../models/createTokenLifetimePolicyFromDiscriminatorValue';
import { deserializeIntoTokenLifetimePolicy } from '../../../models/deserializeIntoTokenLifetimePolicy';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeTokenLifetimePolicy } from '../../../models/serializeTokenLifetimePolicy';
import { type TokenLifetimePolicy } from '../../../models/tokenLifetimePolicy';
import { AppliesToRequestBuilder } from './appliesTo/appliesToRequestBuilder';
import { type TokenLifetimePolicyItemRequestBuilderDeleteRequestConfiguration } from './tokenLifetimePolicyItemRequestBuilderDeleteRequestConfiguration';
import { type TokenLifetimePolicyItemRequestBuilderGetRequestConfiguration } from './tokenLifetimePolicyItemRequestBuilderGetRequestConfiguration';
import { type TokenLifetimePolicyItemRequestBuilderPatchRequestConfiguration } from './tokenLifetimePolicyItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tokenLifetimePolicies property of the microsoft.graph.policyRoot entity.
 */
export class TokenLifetimePolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the appliesTo property of the microsoft.graph.stsPolicy entity.
     */
    public get appliesTo(): AppliesToRequestBuilder {
        return new AppliesToRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TokenLifetimePolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/tokenLifetimePolicies/{tokenLifetimePolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a tokenLifetimePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/tokenlifetimepolicy-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: TokenLifetimePolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a tokenLifetimePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TokenLifetimePolicy
     * @see {@link https://learn.microsoft.com/graph/api/tokenlifetimepolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TokenLifetimePolicyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<TokenLifetimePolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TokenLifetimePolicy>(requestInfo, createTokenLifetimePolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a tokenLifetimePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TokenLifetimePolicy
     * @see {@link https://learn.microsoft.com/graph/api/tokenlifetimepolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: TokenLifetimePolicy, requestConfiguration?: TokenLifetimePolicyItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<TokenLifetimePolicy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TokenLifetimePolicy>(requestInfo, createTokenLifetimePolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a tokenLifetimePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TokenLifetimePolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a tokenLifetimePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TokenLifetimePolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a tokenLifetimePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TokenLifetimePolicy, requestConfiguration?: TokenLifetimePolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTokenLifetimePolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a TokenLifetimePolicyItemRequestBuilder
     */
    public withUrl(rawUrl: string) : TokenLifetimePolicyItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TokenLifetimePolicyItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
