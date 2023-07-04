import {MailFolderCollectionResponse} from '../../../../models/';
import {createMailFolderCollectionResponseFromDiscriminatorValue} from '../../../../models/createMailFolderCollectionResponseFromDiscriminatorValue';
import {createMailFolderFromDiscriminatorValue} from '../../../../models/createMailFolderFromDiscriminatorValue';
import {deserializeIntoMailFolder} from '../../../../models/deserializeIntoMailFolder';
import {MailFolder} from '../../../../models/mailFolder';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeMailFolder} from '../../../../models/serializeMailFolder';
import {ChildFoldersRequestBuilderGetRequestConfiguration} from './childFoldersRequestBuilderGetRequestConfiguration';
import {ChildFoldersRequestBuilderPostRequestConfiguration} from './childFoldersRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {MailFolderItemRequestBuilder} from './item/mailFolderItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the childFolders property of the microsoft.graph.mailFolder entity.
 */
export class ChildFoldersRequestBuilder extends BaseRequestBuilder {
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
     * Provides operations to manage the childFolders property of the microsoft.graph.mailFolder entity.
     * @param mailFolderId1 Unique identifier of the item
     * @returns a MailFolderItemRequestBuilder
     */
    public byMailFolderId1(mailFolderId1: string) : MailFolderItemRequestBuilder {
        if(!mailFolderId1) throw new Error("mailFolderId1 cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mailFolder%2Did1"] = mailFolderId1
        return new MailFolderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ChildFoldersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/mailFolders/{mailFolder%2Did}/childFolders{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the folder collection under the specified folder. You can use the `.../me/mailFolders` shortcut to get the top-level folder collection and navigate to another folder. By default, this operation does not return hidden folders. Use a query parameter _includeHiddenFolders_ to include them in the response.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MailFolderCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/mailfolder-list-childfolders?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ChildFoldersRequestBuilderGetRequestConfiguration | undefined) : Promise<MailFolderCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MailFolderCollectionResponse>(requestInfo, createMailFolderCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new mailSearchFolder in the specified user's mailbox.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MailFolder
     * @see {@link https://docs.microsoft.com/graph/api/mailsearchfolder-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MailFolder | undefined, requestConfiguration?: ChildFoldersRequestBuilderPostRequestConfiguration | undefined) : Promise<MailFolder | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MailFolder>(requestInfo, createMailFolderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the folder collection under the specified folder. You can use the `.../me/mailFolders` shortcut to get the top-level folder collection and navigate to another folder. By default, this operation does not return hidden folders. Use a query parameter _includeHiddenFolders_ to include them in the response.
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
     * Create a new mailSearchFolder in the specified user's mailbox.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MailFolder | undefined, requestConfiguration?: ChildFoldersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMailFolder);
        return requestInfo;
    };
}
