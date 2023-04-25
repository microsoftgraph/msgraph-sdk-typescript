import {ContactFolder, ContactFolderCollectionResponse} from '../../../models/';
import {createContactFolderCollectionResponseFromDiscriminatorValue} from '../../../models/createContactFolderCollectionResponseFromDiscriminatorValue';
import {createContactFolderFromDiscriminatorValue} from '../../../models/createContactFolderFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ContactFoldersRequestBuilderGetRequestConfiguration} from './contactFoldersRequestBuilderGetRequestConfiguration';
import {ContactFoldersRequestBuilderPostRequestConfiguration} from './contactFoldersRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {ContactFolderItemRequestBuilder} from './item/contactFolderItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contactFolders property of the microsoft.graph.user entity.
 */
export class ContactFoldersRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the delta method. */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the contactFolders property of the microsoft.graph.user entity.
     * @param contactFolderId Unique identifier of the item
     * @returns a ContactFolderItemRequestBuilder
     */
    public byContactFolderId(contactFolderId: string) : ContactFolderItemRequestBuilder {
        if(!contactFolderId) throw new Error("contactFolderId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contactFolder%2Did"] = contactFolderId
        return new ContactFolderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ContactFoldersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/contactFolders{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The user's contacts folders. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContactFolderCollectionResponse
     */
    public get(requestConfiguration?: ContactFoldersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContactFolderCollectionResponse | undefined> {
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
     * Create new navigation property to contactFolders for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContactFolder
     */
    public post(body: ContactFolder | undefined, requestConfiguration?: ContactFoldersRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContactFolder | undefined> {
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
     * The user's contacts folders. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ContactFoldersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to contactFolders for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ContactFolder | undefined, requestConfiguration?: ContactFoldersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
