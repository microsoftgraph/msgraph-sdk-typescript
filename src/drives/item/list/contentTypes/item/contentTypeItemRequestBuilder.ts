import {ContentType} from '../../../../../models/contentType';
import {createContentTypeFromDiscriminatorValue} from '../../../../../models/createContentTypeFromDiscriminatorValue';
import {deserializeIntoContentType} from '../../../../../models/deserializeIntoContentType';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeContentType} from '../../../../../models/serializeContentType';
import {AssociateWithHubSitesRequestBuilder} from './associateWithHubSites/associateWithHubSitesRequestBuilder';
import {BaseRequestBuilderEscaped} from './base/baseRequestBuilderEscaped';
import {BaseTypesRequestBuilder} from './baseTypes/baseTypesRequestBuilder';
import {ColumnLinksRequestBuilder} from './columnLinks/columnLinksRequestBuilder';
import {ColumnPositionsRequestBuilder} from './columnPositions/columnPositionsRequestBuilder';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {ContentTypeItemRequestBuilderDeleteRequestConfiguration} from './contentTypeItemRequestBuilderDeleteRequestConfiguration';
import {ContentTypeItemRequestBuilderGetRequestConfiguration} from './contentTypeItemRequestBuilderGetRequestConfiguration';
import {ContentTypeItemRequestBuilderPatchRequestConfiguration} from './contentTypeItemRequestBuilderPatchRequestConfiguration';
import {CopyToDefaultContentLocationRequestBuilder} from './copyToDefaultContentLocation/copyToDefaultContentLocationRequestBuilder';
import {IsPublishedRequestBuilder} from './isPublished/isPublishedRequestBuilder';
import {PublishRequestBuilder} from './publish/publishRequestBuilder';
import {UnpublishRequestBuilder} from './unpublish/unpublishRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contentTypes property of the microsoft.graph.list entity.
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
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/list/contentTypes/{contentType%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property contentTypes for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
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
     * The collection of content types present in this list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContentType
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
     * Update the navigation property contentTypes in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContentType
     */
    public patch(body: ContentType | undefined, requestConfiguration?: ContentTypeItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ContentType | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * Delete navigation property contentTypes for drives
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
     * The collection of content types present in this list.
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
     * Update the navigation property contentTypes in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ContentType | undefined, requestConfiguration?: ContentTypeItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeContentType);
        return requestInfo;
    };
}
