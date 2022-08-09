import {ContentType} from '../../../../../../../models/';
import {createContentTypeFromDiscriminatorValue} from '../../../../../../../models/createContentTypeFromDiscriminatorValue';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AssociateWithHubSitesRequestBuilder} from './associateWithHubSites/associateWithHubSitesRequestBuilder';
import {BaseRequestBuilder} from './base/baseRequestBuilder';
import {BaseTypesRequestBuilder} from './baseTypes/baseTypesRequestBuilder';
import {ContentTypeItemRequestBuilder as ib57349e0b3e82fd60b0b2013ac0881ce2b73af88846d96b53a96866fde3ec499} from './baseTypes/item/contentTypeItemRequestBuilder';
import {ColumnLinksRequestBuilder} from './columnLinks/columnLinksRequestBuilder';
import {ColumnLinkItemRequestBuilder} from './columnLinks/item/columnLinkItemRequestBuilder';
import {ColumnPositionsRequestBuilder} from './columnPositions/columnPositionsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as i5d143fe322299700f20fce037c9a0aab1d6b4cf9987593fdbd55243008116ed8} from './columnPositions/item/columnDefinitionItemRequestBuilder';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as ic1e1555578bddc46b2e1dc8743ecce3c016d1ec0fe04af8f9ac4082e008114a3} from './columns/item/columnDefinitionItemRequestBuilder';
import {ContentTypeItemRequestBuilderDeleteRequestConfiguration} from './contentTypeItemRequestBuilderDeleteRequestConfiguration';
import {ContentTypeItemRequestBuilderGetRequestConfiguration} from './contentTypeItemRequestBuilderGetRequestConfiguration';
import {ContentTypeItemRequestBuilderPatchRequestConfiguration} from './contentTypeItemRequestBuilderPatchRequestConfiguration';
import {CopyToDefaultContentLocationRequestBuilder} from './copyToDefaultContentLocation/copyToDefaultContentLocationRequestBuilder';
import {IsPublishedRequestBuilder} from './isPublished/isPublishedRequestBuilder';
import {PublishRequestBuilder} from './publish/publishRequestBuilder';
import {UnpublishRequestBuilder} from './unpublish/unpublishRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the contentTypes property of the microsoft.graph.list entity. */
export class ContentTypeItemRequestBuilder {
    /** The associateWithHubSites property */
    public get associateWithHubSites(): AssociateWithHubSitesRequestBuilder {
        return new AssociateWithHubSitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The base property */
    public get base(): BaseRequestBuilder {
        return new BaseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The baseTypes property */
    public get baseTypes(): BaseTypesRequestBuilder {
        return new BaseTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The columnLinks property */
    public get columnLinks(): ColumnLinksRequestBuilder {
        return new ColumnLinksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The columnPositions property */
    public get columnPositions(): ColumnPositionsRequestBuilder {
        return new ColumnPositionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The columns property */
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The copyToDefaultContentLocation property */
    public get copyToDefaultContentLocation(): CopyToDefaultContentLocationRequestBuilder {
        return new CopyToDefaultContentLocationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The publish property */
    public get publish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The unpublish property */
    public get unpublish(): UnpublishRequestBuilder {
        return new UnpublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.drives.item.list.contentTypes.item.baseTypes.item collection
     * @param id Unique identifier of the item
     * @returns a ContentTypeItemRequestBuilder
     */
    public baseTypesById(id: string) : ib57349e0b3e82fd60b0b2013ac0881ce2b73af88846d96b53a96866fde3ec499 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contentType%2Did1"] = id
        return new ib57349e0b3e82fd60b0b2013ac0881ce2b73af88846d96b53a96866fde3ec499(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.drives.item.list.contentTypes.item.columnLinks.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.drives.item.list.contentTypes.item.columnPositions.item collection
     * @param id Unique identifier of the item
     * @returns a ColumnDefinitionItemRequestBuilder
     */
    public columnPositionsById(id: string) : i5d143fe322299700f20fce037c9a0aab1d6b4cf9987593fdbd55243008116ed8 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = id
        return new i5d143fe322299700f20fce037c9a0aab1d6b4cf9987593fdbd55243008116ed8(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.drives.item.list.contentTypes.item.columns.item collection
     * @param id Unique identifier of the item
     * @returns a ColumnDefinitionItemRequestBuilder
     */
    public columnsById(id: string) : ic1e1555578bddc46b2e1dc8743ecce3c016d1ec0fe04af8f9ac4082e008114a3 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = id
        return new ic1e1555578bddc46b2e1dc8743ecce3c016d1ec0fe04af8f9ac4082e008114a3(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ContentTypeItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/drives/{drive%2Did}/list/contentTypes/{contentType%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property contentTypes for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ContentTypeItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
    public createGetRequestInformation(requestConfiguration?: ContentTypeItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property contentTypes in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ContentType | undefined, requestConfiguration?: ContentTypeItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property contentTypes for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ContentTypeItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The collection of content types present in this list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContentType
     */
    public get(requestConfiguration?: ContentTypeItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContentType | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ContentType>(requestInfo, createContentTypeFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Provides operations to call the isPublished method.
     * @returns a isPublishedRequestBuilder
     */
    public isPublished() : IsPublishedRequestBuilder {
        return new IsPublishedRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Update the navigation property contentTypes in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ContentType | undefined, requestConfiguration?: ContentTypeItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
