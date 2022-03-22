import {ContentType} from '../../../../../../../models/microsoft/graph/';
import {createContentTypeFromDiscriminatorValue} from '../../../../../../../models/microsoft/graph/createContentTypeFromDiscriminatorValue';
import {ODataError} from '../../../../../../../models/microsoft/graph/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/microsoft/graph/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AssociateWithHubSitesRequestBuilder} from './associateWithHubSites/associateWithHubSitesRequestBuilder';
import {BaseRequestBuilder} from './base/baseRequestBuilder';
import {BaseTypesRequestBuilder} from './baseTypes/baseTypesRequestBuilder';
import {ContentTypeItemRequestBuilder as i462948129bd9bf8b8d38e948867e40b8fd26c0a2ecd65f191092841cb4297a6b} from './baseTypes/item/contentTypeItemRequestBuilder';
import {ColumnLinksRequestBuilder} from './columnLinks/columnLinksRequestBuilder';
import {ColumnLinkItemRequestBuilder} from './columnLinks/item/columnLinkItemRequestBuilder';
import {ColumnPositionsRequestBuilder} from './columnPositions/columnPositionsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as i3a5d73c25bb01ddee0a7d8cb1de3ebbfb64886a363ce8f9ac70f6b3cec590cd9} from './columnPositions/item/columnDefinitionItemRequestBuilder';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as i066fd697076887b4268a7ff805bee376e7a6acde12dbe3ddf50cb4bebf2eefc8} from './columns/item/columnDefinitionItemRequestBuilder';
import {CopyToDefaultContentLocationRequestBuilder} from './copyToDefaultContentLocation/copyToDefaultContentLocationRequestBuilder';
import {IsPublishedRequestBuilder} from './isPublished/isPublishedRequestBuilder';
import {PublishRequestBuilder} from './publish/publishRequestBuilder';
import {UnpublishRequestBuilder} from './unpublish/unpublishRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the contentTypes property of the microsoft.graph.list entity.  */
export class ContentTypeItemRequestBuilder {
    public get associateWithHubSites(): AssociateWithHubSitesRequestBuilder {
        return new AssociateWithHubSitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get base(): BaseRequestBuilder {
        return new BaseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get baseTypes(): BaseTypesRequestBuilder {
        return new BaseTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get columnLinks(): ColumnLinksRequestBuilder {
        return new ColumnLinksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get columnPositions(): ColumnPositionsRequestBuilder {
        return new ColumnPositionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get copyToDefaultContentLocation(): CopyToDefaultContentLocationRequestBuilder {
        return new CopyToDefaultContentLocationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get publish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get unpublish(): UnpublishRequestBuilder {
        return new UnpublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.drives.item.list.contentTypes.item.baseTypes.item collection
     * @param id Unique identifier of the item
     * @returns a contentTypeItemRequestBuilder
     */
    public baseTypesById(id: string) : i462948129bd9bf8b8d38e948867e40b8fd26c0a2ecd65f191092841cb4297a6b {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contentType_id1"] = id
        return new i462948129bd9bf8b8d38e948867e40b8fd26c0a2ecd65f191092841cb4297a6b(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.drives.item.list.contentTypes.item.columnLinks.item collection
     * @param id Unique identifier of the item
     * @returns a columnLinkItemRequestBuilder
     */
    public columnLinksById(id: string) : ColumnLinkItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnLink_id"] = id
        return new ColumnLinkItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.drives.item.list.contentTypes.item.columnPositions.item collection
     * @param id Unique identifier of the item
     * @returns a columnDefinitionItemRequestBuilder
     */
    public columnPositionsById(id: string) : i3a5d73c25bb01ddee0a7d8cb1de3ebbfb64886a363ce8f9ac70f6b3cec590cd9 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition_id"] = id
        return new i3a5d73c25bb01ddee0a7d8cb1de3ebbfb64886a363ce8f9ac70f6b3cec590cd9(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.drives.item.list.contentTypes.item.columns.item collection
     * @param id Unique identifier of the item
     * @returns a columnDefinitionItemRequestBuilder
     */
    public columnsById(id: string) : i066fd697076887b4268a7ff805bee376e7a6acde12dbe3ddf50cb4bebf2eefc8 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition_id"] = id
        return new i066fd697076887b4268a7ff805bee376e7a6acde12dbe3ddf50cb4bebf2eefc8(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ContentTypeItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user_id}/drives/{drive_id}/list/contentTypes/{contentType_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property contentTypes for users
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The collection of content types present in this list.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update the navigation property contentTypes in users
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ContentType | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Delete navigation property contentTypes for users
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The collection of content types present in this list.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContentType
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContentType | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
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
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ContentType | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
