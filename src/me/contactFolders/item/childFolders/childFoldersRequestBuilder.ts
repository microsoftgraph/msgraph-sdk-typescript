import {ContactFolder, ContactFolderCollectionResponse} from '../../../../models/';
import {createContactFolderCollectionResponseFromDiscriminatorValue} from '../../../../models/createContactFolderCollectionResponseFromDiscriminatorValue';
import {createContactFolderFromDiscriminatorValue} from '../../../../models/createContactFolderFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ChildFoldersRequestBuilderGetRequestConfiguration} from './childFoldersRequestBuilderGetRequestConfiguration';
import {ChildFoldersRequestBuilderPostRequestConfiguration} from './childFoldersRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {ContactFolderItemRequestBuilder} from './item/contactFolderItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the childFolders property of the microsoft.graph.contactFolder entity.
 */
export class ChildFoldersRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the delta method. */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the childFolders property of the microsoft.graph.contactFolder entity.
     * @param contactFolderId1 Unique identifier of the item
     * @returns a ContactFolderItemRequestBuilder
     */
    public byContactFolderId1(contactFolderId1: string) : ContactFolderItemRequestBuilder {
        if(!contactFolderId1) throw new Error("contactFolderId1 cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contactFolder%2Did1"] = contactFolderId1
        return new ContactFolderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ChildFoldersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/contactFolders/{contactFolder%2Did}/childFolders{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The collection of child folders in the folder. Navigation property. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContactFolderCollectionResponse
     */
    public get(requestConfiguration?: ChildFoldersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContactFolderCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ContactFolderCollectionResponse>(requestInfo, createContactFolderCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to childFolders for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContactFolder
     */
    public post(body: ContactFolder | undefined, requestConfiguration?: ChildFoldersRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContactFolder | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ContactFolder>(requestInfo, createContactFolderFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The collection of child folders in the folder. Navigation property. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ChildFoldersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to childFolders for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ContactFolder | undefined, requestConfiguration?: ChildFoldersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
