import { type OnenoteSectionCollectionResponse } from '../../../../../../../../models/';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../../models/oDataErrors/oDataError';
import { createOnenoteSectionFromDiscriminatorValue, deserializeIntoOnenoteSection, serializeOnenoteSection, type OnenoteSection } from '../../../../../../../../models/onenoteSection';
import { createOnenoteSectionCollectionResponseFromDiscriminatorValue } from '../../../../../../../../models/onenoteSectionCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { OnenoteSectionItemRequestBuilder } from './item/onenoteSectionItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface SectionsRequestBuilderGetQueryParameters {
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
export interface SectionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SectionsRequestBuilderGetQueryParameters;
}
export interface SectionsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the sections property of the microsoft.graph.sectionGroup entity.
 */
export class SectionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sections property of the microsoft.graph.sectionGroup entity.
     * @param onenoteSectionId The unique identifier of onenoteSection
     * @returns a OnenoteSectionItemRequestBuilder
     */
    public byOnenoteSectionId(onenoteSectionId: string) : OnenoteSectionItemRequestBuilder {
        if(!onenoteSectionId) throw new Error("onenoteSectionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onenoteSection%2Did"] = onenoteSectionId
        return new OnenoteSectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SectionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/onenote/notebooks/{notebook%2Did}/sectionGroups/{sectionGroup%2Did}/sections{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of onenoteSection objects from the specified section group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenoteSectionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/sectiongroup-list-sections?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SectionsRequestBuilderGetRequestConfiguration | undefined) : Promise<OnenoteSectionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenoteSectionCollectionResponse>(requestInfo, createOnenoteSectionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new onenoteSection in the specified section group.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenoteSection
     * @see {@link https://learn.microsoft.com/graph/api/sectiongroup-post-sections?view=graph-rest-1.0|Find more info here}
     */
    public post(body: OnenoteSection, requestConfiguration?: SectionsRequestBuilderPostRequestConfiguration | undefined) : Promise<OnenoteSection | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenoteSection>(requestInfo, createOnenoteSectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of onenoteSection objects from the specified section group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SectionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new onenoteSection in the specified section group.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: OnenoteSection, requestConfiguration?: SectionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOnenoteSection);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a sectionsRequestBuilder
     */
    public withUrl(rawUrl: string) : SectionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SectionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
