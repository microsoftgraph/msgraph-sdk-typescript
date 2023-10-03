import { type SynchronizationTemplateCollectionResponse } from '../../../../models/';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createSynchronizationTemplateFromDiscriminatorValue, deserializeIntoSynchronizationTemplate, serializeSynchronizationTemplate, type SynchronizationTemplate } from '../../../../models/synchronizationTemplate';
import { createSynchronizationTemplateCollectionResponseFromDiscriminatorValue } from '../../../../models/synchronizationTemplateCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { SynchronizationTemplateItemRequestBuilder } from './item/synchronizationTemplateItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TemplatesRequestBuilderGetQueryParameters {
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
export interface TemplatesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TemplatesRequestBuilderGetQueryParameters;
}
export interface TemplatesRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the templates property of the microsoft.graph.synchronization entity.
 */
export class TemplatesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the templates property of the microsoft.graph.synchronization entity.
     * @param synchronizationTemplateId The unique identifier of synchronizationTemplate
     * @returns a SynchronizationTemplateItemRequestBuilder
     */
    public bySynchronizationTemplateId(synchronizationTemplateId: string) : SynchronizationTemplateItemRequestBuilder {
        if(!synchronizationTemplateId) throw new Error("synchronizationTemplateId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["synchronizationTemplate%2Did"] = synchronizationTemplateId
        return new SynchronizationTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TemplatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/synchronization/templates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List the synchronization templates associated with a given application or service principal. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationTemplateCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronization-list-templates?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TemplatesRequestBuilderGetRequestConfiguration | undefined) : Promise<SynchronizationTemplateCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SynchronizationTemplateCollectionResponse>(requestInfo, createSynchronizationTemplateCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to templates for servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationTemplate
     */
    public post(body: SynchronizationTemplate, requestConfiguration?: TemplatesRequestBuilderPostRequestConfiguration | undefined) : Promise<SynchronizationTemplate | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SynchronizationTemplate>(requestInfo, createSynchronizationTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * List the synchronization templates associated with a given application or service principal. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TemplatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to templates for servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SynchronizationTemplate, requestConfiguration?: TemplatesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSynchronizationTemplate);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a templatesRequestBuilder
     */
    public withUrl(rawUrl: string) : TemplatesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TemplatesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
