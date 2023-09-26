import { type CustomTaskExtensionCollectionResponse } from '../../../models/identityGovernance/';
import { createCustomTaskExtensionFromDiscriminatorValue, deserializeIntoCustomTaskExtension, serializeCustomTaskExtension, type CustomTaskExtension } from '../../../models/identityGovernance/customTaskExtension';
import { createCustomTaskExtensionCollectionResponseFromDiscriminatorValue } from '../../../models/identityGovernance/customTaskExtensionCollectionResponse';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { CustomTaskExtensionItemRequestBuilder } from './item/customTaskExtensionItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface CustomTaskExtensionsRequestBuilderGetQueryParameters {
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
export interface CustomTaskExtensionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CustomTaskExtensionsRequestBuilderGetQueryParameters;
}
export interface CustomTaskExtensionsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the customTaskExtensions property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
 */
export class CustomTaskExtensionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the customTaskExtensions property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
     * @param customTaskExtensionId The unique identifier of customTaskExtension
     * @returns a CustomTaskExtensionItemRequestBuilder
     */
    public byCustomTaskExtensionId(customTaskExtensionId: string) : CustomTaskExtensionItemRequestBuilder {
        if(!customTaskExtensionId) throw new Error("customTaskExtensionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["customTaskExtension%2Did"] = customTaskExtensionId
        return new CustomTaskExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CustomTaskExtensionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/customTaskExtensions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the customTaskExtension objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomTaskExtensionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-lifecycleworkflowscontainer-list-customtaskextensions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CustomTaskExtensionsRequestBuilderGetRequestConfiguration | undefined) : Promise<CustomTaskExtensionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomTaskExtensionCollectionResponse>(requestInfo, createCustomTaskExtensionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new customTaskExtension object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomTaskExtension
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-lifecycleworkflowscontainer-post-customtaskextensions?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CustomTaskExtension, requestConfiguration?: CustomTaskExtensionsRequestBuilderPostRequestConfiguration | undefined) : Promise<CustomTaskExtension | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomTaskExtension>(requestInfo, createCustomTaskExtensionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the customTaskExtension objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CustomTaskExtensionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new customTaskExtension object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CustomTaskExtension, requestConfiguration?: CustomTaskExtensionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCustomTaskExtension);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a customTaskExtensionsRequestBuilder
     */
    public withUrl(rawUrl: string) : CustomTaskExtensionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CustomTaskExtensionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
