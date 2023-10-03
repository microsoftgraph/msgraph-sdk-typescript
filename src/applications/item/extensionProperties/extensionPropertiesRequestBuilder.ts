import { type ExtensionPropertyCollectionResponse } from '../../../models/';
import { createExtensionPropertyFromDiscriminatorValue, deserializeIntoExtensionProperty, serializeExtensionProperty, type ExtensionProperty } from '../../../models/extensionProperty';
import { createExtensionPropertyCollectionResponseFromDiscriminatorValue } from '../../../models/extensionPropertyCollectionResponse';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ExtensionPropertyItemRequestBuilder } from './item/extensionPropertyItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ExtensionPropertiesRequestBuilderGetQueryParameters {
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
export interface ExtensionPropertiesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ExtensionPropertiesRequestBuilderGetQueryParameters;
}
export interface ExtensionPropertiesRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the extensionProperties property of the microsoft.graph.application entity.
 */
export class ExtensionPropertiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the extensionProperties property of the microsoft.graph.application entity.
     * @param extensionPropertyId The unique identifier of extensionProperty
     * @returns a ExtensionPropertyItemRequestBuilder
     */
    public byExtensionPropertyId(extensionPropertyId: string) : ExtensionPropertyItemRequestBuilder {
        if(!extensionPropertyId) throw new Error("extensionPropertyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["extensionProperty%2Did"] = extensionPropertyId
        return new ExtensionPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ExtensionPropertiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applications/{application%2Did}/extensionProperties{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the list of directory extension definitions, represented by extensionProperty objects on an application. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExtensionPropertyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/application-list-extensionproperty?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ExtensionPropertiesRequestBuilderGetRequestConfiguration | undefined) : Promise<ExtensionPropertyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExtensionPropertyCollectionResponse>(requestInfo, createExtensionPropertyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new directory extension definition, represented by an extensionProperty object. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExtensionProperty
     * @see {@link https://learn.microsoft.com/graph/api/application-post-extensionproperty?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ExtensionProperty, requestConfiguration?: ExtensionPropertiesRequestBuilderPostRequestConfiguration | undefined) : Promise<ExtensionProperty | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExtensionProperty>(requestInfo, createExtensionPropertyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the list of directory extension definitions, represented by extensionProperty objects on an application. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ExtensionPropertiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new directory extension definition, represented by an extensionProperty object. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ExtensionProperty, requestConfiguration?: ExtensionPropertiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeExtensionProperty);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a extensionPropertiesRequestBuilder
     */
    public withUrl(rawUrl: string) : ExtensionPropertiesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ExtensionPropertiesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
