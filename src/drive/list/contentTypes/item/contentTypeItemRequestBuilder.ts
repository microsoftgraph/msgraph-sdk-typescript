import {ContentType} from '../../../../models/';
import {createContentTypeFromDiscriminatorValue} from '../../../../models/createContentTypeFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AssociateWithHubSitesRequestBuilder} from './associateWithHubSites/associateWithHubSitesRequestBuilder';
import {BaseRequestBuilder} from './base/baseRequestBuilder';
import {BaseTypesRequestBuilder} from './baseTypes/baseTypesRequestBuilder';
import {ContentTypeItemRequestBuilder as i35d96b02c52add6d60af32d4307af63c151b02fdf02d9c1143d1c1c55ee0d949} from './baseTypes/item/contentTypeItemRequestBuilder';
import {ColumnLinksRequestBuilder} from './columnLinks/columnLinksRequestBuilder';
import {ColumnLinkItemRequestBuilder} from './columnLinks/item/columnLinkItemRequestBuilder';
import {ColumnPositionsRequestBuilder} from './columnPositions/columnPositionsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as i5d9e5fc55a635fba7378446e3a263d74b49a45880e60983709034ac1b4eb38a0} from './columnPositions/item/columnDefinitionItemRequestBuilder';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as i39c8588e137b4036073c41dc215b544ab9611e8b5428ec4ea77b430319d41423} from './columns/item/columnDefinitionItemRequestBuilder';
import {ContentTypeItemRequestBuilderGetQueryParameters} from './contentTypeItemRequestBuilderGetQueryParameters';
import {CopyToDefaultContentLocationRequestBuilder} from './copyToDefaultContentLocation/copyToDefaultContentLocationRequestBuilder';
import {IsPublishedRequestBuilder} from './isPublished/isPublishedRequestBuilder';
import {PublishRequestBuilder} from './publish/publishRequestBuilder';
import {UnpublishRequestBuilder} from './unpublish/unpublishRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the contentTypes property of the microsoft.graph.list entity.  */
export class ContentTypeItemRequestBuilder {
    /** The associateWithHubSites property  */
    public get associateWithHubSites(): AssociateWithHubSitesRequestBuilder {
        return new AssociateWithHubSitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The base property  */
    public get base(): BaseRequestBuilder {
        return new BaseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The baseTypes property  */
    public get baseTypes(): BaseTypesRequestBuilder {
        return new BaseTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The columnLinks property  */
    public get columnLinks(): ColumnLinksRequestBuilder {
        return new ColumnLinksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The columnPositions property  */
    public get columnPositions(): ColumnPositionsRequestBuilder {
        return new ColumnPositionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The columns property  */
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The copyToDefaultContentLocation property  */
    public get copyToDefaultContentLocation(): CopyToDefaultContentLocationRequestBuilder {
        return new CopyToDefaultContentLocationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The publish property  */
    public get publish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** The unpublish property  */
    public get unpublish(): UnpublishRequestBuilder {
        return new UnpublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.drive.list.contentTypes.item.baseTypes.item collection
     * @param id Unique identifier of the item
     * @returns a contentTypeItemRequestBuilder
     */
    public baseTypesById(id: string) : i35d96b02c52add6d60af32d4307af63c151b02fdf02d9c1143d1c1c55ee0d949 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contentType%2Did1"] = id
        return new i35d96b02c52add6d60af32d4307af63c151b02fdf02d9c1143d1c1c55ee0d949(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.drive.list.contentTypes.item.columnLinks.item collection
     * @param id Unique identifier of the item
     * @returns a columnLinkItemRequestBuilder
     */
    public columnLinksById(id: string) : ColumnLinkItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnLink%2Did"] = id
        return new ColumnLinkItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.drive.list.contentTypes.item.columnPositions.item collection
     * @param id Unique identifier of the item
     * @returns a columnDefinitionItemRequestBuilder
     */
    public columnPositionsById(id: string) : i5d9e5fc55a635fba7378446e3a263d74b49a45880e60983709034ac1b4eb38a0 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = id
        return new i5d9e5fc55a635fba7378446e3a263d74b49a45880e60983709034ac1b4eb38a0(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.drive.list.contentTypes.item.columns.item collection
     * @param id Unique identifier of the item
     * @returns a columnDefinitionItemRequestBuilder
     */
    public columnsById(id: string) : i39c8588e137b4036073c41dc215b544ab9611e8b5428ec4ea77b430319d41423 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = id
        return new i39c8588e137b4036073c41dc215b544ab9611e8b5428ec4ea77b430319d41423(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ContentTypeItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/drive/list/contentTypes/{contentType%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property contentTypes for drive
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(headers) requestInfo.headers = headers;
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * The collection of content types present in this list.
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(queryParameters?: ContentTypeItemRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(headers) requestInfo.headers = headers;
        queryParameters && requestInfo.setQueryStringParametersFromRawObject(queryParameters);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Update the navigation property contentTypes in drive
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ContentType | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(headers) requestInfo.headers = headers;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Delete navigation property contentTypes for drive
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The collection of content types present in this list.
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContentType
     */
    public get(queryParameters?: ContentTypeItemRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContentType | undefined> {
        const requestInfo = this.createGetRequestInformation(
            queryParameters, headers, options
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
     * Update the navigation property contentTypes in drive
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ContentType | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
