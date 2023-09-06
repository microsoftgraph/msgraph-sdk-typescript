import { type ContentTypeCollectionResponse } from '../../../../../../models/';
import { createContentTypeCollectionResponseFromDiscriminatorValue } from '../../../../../../models/createContentTypeCollectionResponseFromDiscriminatorValue';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { type BaseTypesRequestBuilderGetRequestConfiguration } from './baseTypesRequestBuilderGetRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ContentTypeItemRequestBuilder } from './item/contentTypeItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the baseTypes property of the microsoft.graph.contentType entity.
 */
export class BaseTypesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the baseTypes property of the microsoft.graph.contentType entity.
     * @param contentTypeId1 The unique identifier of contentType
     * @returns a ContentTypeItemRequestBuilder
     */
    public byContentTypeId1(contentTypeId1: string) : ContentTypeItemRequestBuilder {
        if(!contentTypeId1) throw new Error("contentTypeId1 cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contentType%2Did1"] = contentTypeId1
        return new ContentTypeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new BaseTypesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/shares/{sharedDriveItem%2Did}/list/contentTypes/{contentType%2Did}/baseTypes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The collection of content types that are ancestors of this content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContentTypeCollectionResponse
     */
    public get(requestConfiguration?: BaseTypesRequestBuilderGetRequestConfiguration | undefined) : Promise<ContentTypeCollectionResponse | undefined> {
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
     * The collection of content types that are ancestors of this content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: BaseTypesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a baseTypesRequestBuilder
     */
    public withUrl(rawUrl: string) : BaseTypesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new BaseTypesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
