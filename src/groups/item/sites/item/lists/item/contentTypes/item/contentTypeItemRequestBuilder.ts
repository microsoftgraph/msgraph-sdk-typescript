import {ContentType} from '../../../../../../../../models/';
import {createContentTypeFromDiscriminatorValue} from '../../../../../../../../models/createContentTypeFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {BaseRequestBuilder} from './base/baseRequestBuilder';
import {BaseTypesRequestBuilder} from './baseTypes/baseTypesRequestBuilder';
import {ContentTypeItemRequestBuilder as I683ba782b03ecbc1af5179f54dbe4760e76421ce94982cba7260978194b0cc8d} from './baseTypes/item/contentTypeItemRequestBuilder';
import {ColumnLinksRequestBuilder} from './columnLinks/columnLinksRequestBuilder';
import {ColumnLinkItemRequestBuilder} from './columnLinks/item/columnLinkItemRequestBuilder';
import {ColumnPositionsRequestBuilder} from './columnPositions/columnPositionsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as I72c7145f7164e79eb322cf9047c9f788eef8bc776c105e2460d78408d40a139b} from './columnPositions/item/columnDefinitionItemRequestBuilder';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as I7a5f9edb14abef3823b4eb18d4d14397fa3dd999c5a14c392a75fa9b471f20d4} from './columns/item/columnDefinitionItemRequestBuilder';
import {ContentTypeItemRequestBuilderDeleteRequestConfiguration} from './contentTypeItemRequestBuilderDeleteRequestConfiguration';
import {ContentTypeItemRequestBuilderGetRequestConfiguration} from './contentTypeItemRequestBuilderGetRequestConfiguration';
import {ContentTypeItemRequestBuilderPatchRequestConfiguration} from './contentTypeItemRequestBuilderPatchRequestConfiguration';
import {AssociateWithHubSitesRequestBuilder} from './microsoftGraphAssociateWithHubSites/associateWithHubSitesRequestBuilder';
import {CopyToDefaultContentLocationRequestBuilder} from './microsoftGraphCopyToDefaultContentLocation/copyToDefaultContentLocationRequestBuilder';
import {IsPublishedRequestBuilder} from './microsoftGraphIsPublished/isPublishedRequestBuilder';
import {PublishRequestBuilder} from './microsoftGraphPublish/publishRequestBuilder';
import {UnpublishRequestBuilder} from './microsoftGraphUnpublish/unpublishRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contentTypes property of the microsoft.graph.list entity.
 */
export class ContentTypeItemRequestBuilder {
    /** Provides operations to manage the base property of the microsoft.graph.contentType entity. */
    public get base(): BaseRequestBuilder {
        return new BaseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the baseTypes property of the microsoft.graph.contentType entity. */
    public get baseTypes(): BaseTypesRequestBuilder {
        return new BaseTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the columnLinks property of the microsoft.graph.contentType entity. */
    public get columnLinks(): ColumnLinksRequestBuilder {
        return new ColumnLinksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the columnPositions property of the microsoft.graph.contentType entity. */
    public get columnPositions(): ColumnPositionsRequestBuilder {
        return new ColumnPositionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the columns property of the microsoft.graph.contentType entity. */
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the associateWithHubSites method. */
    public get microsoftGraphAssociateWithHubSites(): AssociateWithHubSitesRequestBuilder {
        return new AssociateWithHubSitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the copyToDefaultContentLocation method. */
    public get microsoftGraphCopyToDefaultContentLocation(): CopyToDefaultContentLocationRequestBuilder {
        return new CopyToDefaultContentLocationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isPublished method. */
    public get microsoftGraphIsPublished(): IsPublishedRequestBuilder {
        return new IsPublishedRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the publish method. */
    public get microsoftGraphPublish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unpublish method. */
    public get microsoftGraphUnpublish(): UnpublishRequestBuilder {
        return new UnpublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the baseTypes property of the microsoft.graph.contentType entity.
     * @param id Unique identifier of the item
     * @returns a ContentTypeItemRequestBuilder
     */
    public baseTypesById(id: string) : I683ba782b03ecbc1af5179f54dbe4760e76421ce94982cba7260978194b0cc8d {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contentType%2Did1"] = id
        return new I683ba782b03ecbc1af5179f54dbe4760e76421ce94982cba7260978194b0cc8d(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the columnLinks property of the microsoft.graph.contentType entity.
     * @param id Unique identifier of the item
     * @returns a ColumnLinkItemRequestBuilder
     */
    public columnLinksById(id: string) : ColumnLinkItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnLink%2Did"] = id
        return new ColumnLinkItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the columnPositions property of the microsoft.graph.contentType entity.
     * @param id Unique identifier of the item
     * @returns a ColumnDefinitionItemRequestBuilder
     */
    public columnPositionsById(id: string) : I72c7145f7164e79eb322cf9047c9f788eef8bc776c105e2460d78408d40a139b {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = id
        return new I72c7145f7164e79eb322cf9047c9f788eef8bc776c105e2460d78408d40a139b(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the columns property of the microsoft.graph.contentType entity.
     * @param id Unique identifier of the item
     * @returns a ColumnDefinitionItemRequestBuilder
     */
    public columnsById(id: string) : I7a5f9edb14abef3823b4eb18d4d14397fa3dd999c5a14c392a75fa9b471f20d4 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = id
        return new I7a5f9edb14abef3823b4eb18d4d14397fa3dd999c5a14c392a75fa9b471f20d4(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ContentTypeItemRequestBuilder and sets the default values.
     * @param contentTypeId key: id of contentType
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, contentTypeId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/lists/{list%2Did}/contentTypes/{contentType%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["contentType%2Did"] = contentTypeId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property contentTypes for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ContentTypeItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The collection of content types present in this list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContentType
     */
    public get(requestConfiguration?: ContentTypeItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContentType | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ContentType>(requestInfo, createContentTypeFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property contentTypes in groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContentType
     */
    public patch(body: ContentType | undefined, requestConfiguration?: ContentTypeItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContentType | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ContentType>(requestInfo, createContentTypeFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property contentTypes for groups
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
     * Update the navigation property contentTypes in groups
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
