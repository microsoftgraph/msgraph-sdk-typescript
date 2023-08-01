import {ContentTypeCollectionResponse} from '../../../models/';
import type {ContentType} from '../../../models/contentType';
import {createContentTypeCollectionResponseFromDiscriminatorValue} from '../../../models/createContentTypeCollectionResponseFromDiscriminatorValue';
import {createContentTypeFromDiscriminatorValue} from '../../../models/createContentTypeFromDiscriminatorValue';
import {deserializeIntoContentType} from '../../../models/deserializeIntoContentType';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeContentType} from '../../../models/serializeContentType';
import {AddCopyRequestBuilder} from './addCopy/addCopyRequestBuilder';
import {AddCopyFromContentTypeHubRequestBuilder} from './addCopyFromContentTypeHub/addCopyFromContentTypeHubRequestBuilder';
import {ContentTypesRequestBuilderGetRequestConfiguration} from './contentTypesRequestBuilderGetRequestConfiguration';
import {ContentTypesRequestBuilderPostRequestConfiguration} from './contentTypesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GetCompatibleHubContentTypesRequestBuilder} from './getCompatibleHubContentTypes/getCompatibleHubContentTypesRequestBuilder';
import {ContentTypeItemRequestBuilder} from './item/contentTypeItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contentTypes property of the microsoft.graph.site entity.
 */
export class ContentTypesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the addCopy method.
     */
    public get addCopy(): AddCopyRequestBuilder {
        return new AddCopyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the addCopyFromContentTypeHub method.
     */
    public get addCopyFromContentTypeHub(): AddCopyFromContentTypeHubRequestBuilder {
        return new AddCopyFromContentTypeHubRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getCompatibleHubContentTypes method.
     */
    public get getCompatibleHubContentTypes(): GetCompatibleHubContentTypesRequestBuilder {
        return new GetCompatibleHubContentTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the contentTypes property of the microsoft.graph.site entity.
     * @param contentTypeId Unique identifier of the item
     * @returns a ContentTypeItemRequestBuilder
     */
    public byContentTypeId(contentTypeId: string) : ContentTypeItemRequestBuilder {
        if(!contentTypeId) throw new Error("contentTypeId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contentType%2Did"] = contentTypeId
        return new ContentTypeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ContentTypesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/contentTypes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the collection of [contentType][contentType] resources in a [site][].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContentTypeCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/site-list-contenttypes?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ContentTypesRequestBuilderGetRequestConfiguration | undefined) : Promise<ContentTypeCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ContentTypeCollectionResponse>(requestInfo, createContentTypeCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new [contentType][] in a [site][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContentType
     * @see {@link https://learn.microsoft.com/graph/api/site-post-contenttypes?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ContentType | undefined, requestConfiguration?: ContentTypesRequestBuilderPostRequestConfiguration | undefined) : Promise<ContentType | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ContentType>(requestInfo, createContentTypeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the collection of [contentType][contentType] resources in a [site][].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ContentTypesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new [contentType][] in a [site][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ContentType | undefined, requestConfiguration?: ContentTypesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeContentType);
        return requestInfo;
    };
}
