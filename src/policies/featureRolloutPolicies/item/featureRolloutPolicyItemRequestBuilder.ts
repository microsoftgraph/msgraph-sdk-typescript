import { createFeatureRolloutPolicyFromDiscriminatorValue, deserializeIntoFeatureRolloutPolicy, serializeFeatureRolloutPolicy, type FeatureRolloutPolicy } from '../../../models/featureRolloutPolicy';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { AppliesToRequestBuilder } from './appliesTo/appliesToRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface FeatureRolloutPolicyItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface FeatureRolloutPolicyItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface FeatureRolloutPolicyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: FeatureRolloutPolicyItemRequestBuilderGetQueryParameters;
}
export interface FeatureRolloutPolicyItemRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the featureRolloutPolicies property of the microsoft.graph.policyRoot entity.
 */
export class FeatureRolloutPolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the appliesTo property of the microsoft.graph.featureRolloutPolicy entity.
     */
    public get appliesTo(): AppliesToRequestBuilder {
        return new AppliesToRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new FeatureRolloutPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/featureRolloutPolicies/{featureRolloutPolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a featureRolloutPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/featurerolloutpolicy-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: FeatureRolloutPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a featureRolloutPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FeatureRolloutPolicy
     * @see {@link https://learn.microsoft.com/graph/api/featurerolloutpolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: FeatureRolloutPolicyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<FeatureRolloutPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<FeatureRolloutPolicy>(requestInfo, createFeatureRolloutPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of featureRolloutPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FeatureRolloutPolicy
     * @see {@link https://learn.microsoft.com/graph/api/featurerolloutpolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: FeatureRolloutPolicy, requestConfiguration?: FeatureRolloutPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<FeatureRolloutPolicy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<FeatureRolloutPolicy>(requestInfo, createFeatureRolloutPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a featureRolloutPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: FeatureRolloutPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a featureRolloutPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FeatureRolloutPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of featureRolloutPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: FeatureRolloutPolicy, requestConfiguration?: FeatureRolloutPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeFeatureRolloutPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a FeatureRolloutPolicyItemRequestBuilder
     */
    public withUrl(rawUrl: string) : FeatureRolloutPolicyItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new FeatureRolloutPolicyItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
