import { createContentTypeFromDiscriminatorValue, deserializeIntoContentType, serializeContentType, type ContentType } from '../../../../models/contentType';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { AssociateWithHubSitesRequestBuilder } from './associateWithHubSites/associateWithHubSitesRequestBuilder';
import { BaseRequestBuilderEscaped } from './base/baseRequestBuilderEscaped';
import { BaseTypesRequestBuilder } from './baseTypes/baseTypesRequestBuilder';
import { ColumnLinksRequestBuilder } from './columnLinks/columnLinksRequestBuilder';
import { ColumnPositionsRequestBuilder } from './columnPositions/columnPositionsRequestBuilder';
import { ColumnsRequestBuilder } from './columns/columnsRequestBuilder';
import { CopyToDefaultContentLocationRequestBuilder } from './copyToDefaultContentLocation/copyToDefaultContentLocationRequestBuilder';
import { IsPublishedRequestBuilder } from './isPublished/isPublishedRequestBuilder';
import { PublishRequestBuilder } from './publish/publishRequestBuilder';
import { UnpublishRequestBuilder } from './unpublish/unpublishRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ContentTypeItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface ContentTypeItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface ContentTypeItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ContentTypeItemRequestBuilderGetQueryParameters;
}
export interface ContentTypeItemRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the contentTypes property of the microsoft.graph.site entity.
 */
export class ContentTypeItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the associateWithHubSites method.
     */
    public get associateWithHubSites(): AssociateWithHubSitesRequestBuilder {
        return new AssociateWithHubSitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the base property of the microsoft.graph.contentType entity.
     */
    public get base(): BaseRequestBuilderEscaped {
        return new BaseRequestBuilderEscaped(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the baseTypes property of the microsoft.graph.contentType entity.
     */
    public get baseTypes(): BaseTypesRequestBuilder {
        return new BaseTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the columnLinks property of the microsoft.graph.contentType entity.
     */
    public get columnLinks(): ColumnLinksRequestBuilder {
        return new ColumnLinksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the columnPositions property of the microsoft.graph.contentType entity.
     */
    public get columnPositions(): ColumnPositionsRequestBuilder {
        return new ColumnPositionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the columns property of the microsoft.graph.contentType entity.
     */
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the copyToDefaultContentLocation method.
     */
    public get copyToDefaultContentLocation(): CopyToDefaultContentLocationRequestBuilder {
        return new CopyToDefaultContentLocationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the isPublished method.
     */
    public get isPublished(): IsPublishedRequestBuilder {
        return new IsPublishedRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the publish method.
     */
    public get publish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the unpublish method.
     */
    public get unpublish(): UnpublishRequestBuilder {
        return new UnpublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ContentTypeItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/contentTypes/{contentType%2Did}{?%24select,%24expand}");
    };
    /**
     * Remove a content type][contentType] from a [list][] or a [site][]. This API is supported in the following [national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/contenttype-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ContentTypeItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the metadata for a content type][contentType] in a [site][] or a [list][]. This API is supported in the following [national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContentType
     * @see {@link https://learn.microsoft.com/graph/api/contenttype-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ContentTypeItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ContentType | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ContentType>(requestInfo, createContentTypeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update a content type][contentType]. This API is supported in the following [national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContentType
     * @see {@link https://learn.microsoft.com/graph/api/contenttype-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ContentType, requestConfiguration?: ContentTypeItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ContentType | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ContentType>(requestInfo, createContentTypeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Remove a content type][contentType] from a [list][] or a [site][]. This API is supported in the following [national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ContentTypeItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the metadata for a content type][contentType] in a [site][] or a [list][]. This API is supported in the following [national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ContentTypeItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update a content type][contentType]. This API is supported in the following [national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ContentType, requestConfiguration?: ContentTypeItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeContentType);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ContentTypeItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ContentTypeItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ContentTypeItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
