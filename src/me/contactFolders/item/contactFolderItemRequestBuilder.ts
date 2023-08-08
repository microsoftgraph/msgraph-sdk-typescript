import type {ContactFolder} from '../../../models/contactFolder';
import {createContactFolderFromDiscriminatorValue} from '../../../models/createContactFolderFromDiscriminatorValue';
import {deserializeIntoContactFolder} from '../../../models/deserializeIntoContactFolder';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeContactFolder} from '../../../models/serializeContactFolder';
import {ChildFoldersRequestBuilder} from './childFolders/childFoldersRequestBuilder';
import {ContactFolderItemRequestBuilderDeleteRequestConfiguration} from './contactFolderItemRequestBuilderDeleteRequestConfiguration';
import {ContactFolderItemRequestBuilderGetRequestConfiguration} from './contactFolderItemRequestBuilderGetRequestConfiguration';
import {ContactFolderItemRequestBuilderPatchRequestConfiguration} from './contactFolderItemRequestBuilderPatchRequestConfiguration';
import {ContactsRequestBuilder} from './contacts/contactsRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contactFolders property of the microsoft.graph.user entity.
 */
export class ContactFolderItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the childFolders property of the microsoft.graph.contactFolder entity.
     */
    public get childFolders(): ChildFoldersRequestBuilder {
        return new ChildFoldersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the contacts property of the microsoft.graph.contactFolder entity.
     */
    public get contacts(): ContactsRequestBuilder {
        return new ContactsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ContactFolderItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/contactFolders/{contactFolder%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete contactFolder other than the default contactFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/contactfolder-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ContactFolderItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get a contact folder by using the contact folder ID. There are two scenarios where an app can get another user's contact folder:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContactFolder
     * @see {@link https://learn.microsoft.com/graph/api/contactfolder-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ContactFolderItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ContactFolder | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ContactFolder>(requestInfo, createContactFolderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of contactfolder object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContactFolder
     * @see {@link https://learn.microsoft.com/graph/api/contactfolder-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ContactFolder, requestConfiguration?: ContactFolderItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ContactFolder | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ContactFolder>(requestInfo, createContactFolderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete contactFolder other than the default contactFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ContactFolderItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get a contact folder by using the contact folder ID. There are two scenarios where an app can get another user's contact folder:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ContactFolderItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of contactfolder object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ContactFolder, requestConfiguration?: ContactFolderItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeContactFolder);
        return requestInfo;
    };
}
