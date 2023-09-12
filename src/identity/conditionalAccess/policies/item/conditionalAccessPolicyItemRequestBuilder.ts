import { type ConditionalAccessPolicy } from '../../../../models/conditionalAccessPolicy';
import { createConditionalAccessPolicyFromDiscriminatorValue } from '../../../../models/createConditionalAccessPolicyFromDiscriminatorValue';
import { deserializeIntoConditionalAccessPolicy } from '../../../../models/deserializeIntoConditionalAccessPolicy';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeConditionalAccessPolicy } from '../../../../models/serializeConditionalAccessPolicy';
import { type ConditionalAccessPolicyItemRequestBuilderDeleteRequestConfiguration } from './conditionalAccessPolicyItemRequestBuilderDeleteRequestConfiguration';
import { type ConditionalAccessPolicyItemRequestBuilderGetRequestConfiguration } from './conditionalAccessPolicyItemRequestBuilderGetRequestConfiguration';
import { type ConditionalAccessPolicyItemRequestBuilderPatchRequestConfiguration } from './conditionalAccessPolicyItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the policies property of the microsoft.graph.conditionalAccessRoot entity.
 */
export class ConditionalAccessPolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ConditionalAccessPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess/policies/{conditionalAccessPolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a conditionalAccessPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/conditionalaccesspolicy-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ConditionalAccessPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a conditionalAccessPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConditionalAccessPolicy
     * @see {@link https://learn.microsoft.com/graph/api/conditionalaccesspolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ConditionalAccessPolicyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ConditionalAccessPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConditionalAccessPolicy>(requestInfo, createConditionalAccessPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a conditionalAccessPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConditionalAccessPolicy
     * @see {@link https://learn.microsoft.com/graph/api/conditionalaccesspolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ConditionalAccessPolicy, requestConfiguration?: ConditionalAccessPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ConditionalAccessPolicy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConditionalAccessPolicy>(requestInfo, createConditionalAccessPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a conditionalAccessPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ConditionalAccessPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a conditionalAccessPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ConditionalAccessPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a conditionalAccessPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ConditionalAccessPolicy, requestConfiguration?: ConditionalAccessPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeConditionalAccessPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ConditionalAccessPolicyItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ConditionalAccessPolicyItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ConditionalAccessPolicyItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
