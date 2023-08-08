import {ContactFolderCollectionResponse} from '../../models/';
import type {ContactFolder} from '../../models/contactFolder';
import {createContactFolderCollectionResponseFromDiscriminatorValue} from '../../models/createContactFolderCollectionResponseFromDiscriminatorValue';
import {createContactFolderFromDiscriminatorValue} from '../../models/createContactFolderFromDiscriminatorValue';
import {deserializeIntoContactFolder} from '../../models/deserializeIntoContactFolder';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeContactFolder} from '../../models/serializeContactFolder';
import {ContactFoldersRequestBuilderGetRequestConfiguration} from './contactFoldersRequestBuilderGetRequestConfiguration';
import {ContactFoldersRequestBuilderPostRequestConfiguration} from './contactFoldersRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {ContactFolderItemRequestBuilder} from './item/contactFolderItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contactFolders property of the microsoft.graph.user entity.
 */
export class ContactFoldersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
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
        super(pathParameters, requestAdapter, "{+baseurl}/me/contactFolders{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the contact folder collection in the default Contacts folder of the signed-in user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContactFolderCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-list-contactfolders?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ContactFoldersRequestBuilderGetRequestConfiguration | undefined) : Promise<ContactFolderCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ContactFolderCollectionResponse>(requestInfo, createContactFolderCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new contactFolder under the user's default contacts folder. You can also create a new contactfolder as a child of any specified contact folder.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContactFolder
     * @see {@link https://learn.microsoft.com/graph/api/user-post-contactfolders?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ContactFolder, requestConfiguration?: ContactFoldersRequestBuilderPostRequestConfiguration | undefined) : Promise<ContactFolder | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ContactFolder>(requestInfo, createContactFolderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the contact folder collection in the default Contacts folder of the signed-in user.
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
     * Create a new contactFolder under the user's default contacts folder. You can also create a new contactfolder as a child of any specified contact folder.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ContactFolder, requestConfiguration?: ContactFoldersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeContactFolder);
        return requestInfo;
    };
}
