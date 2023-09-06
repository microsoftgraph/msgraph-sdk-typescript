import { createMailFolderFromDiscriminatorValue } from '../../../../models/createMailFolderFromDiscriminatorValue';
import { deserializeIntoMailFolder } from '../../../../models/deserializeIntoMailFolder';
import { type MailFolder } from '../../../../models/mailFolder';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeMailFolder } from '../../../../models/serializeMailFolder';
import { ChildFoldersRequestBuilder } from './childFolders/childFoldersRequestBuilder';
import { CopyRequestBuilder } from './copy/copyRequestBuilder';
import { type MailFolderItemRequestBuilderDeleteRequestConfiguration } from './mailFolderItemRequestBuilderDeleteRequestConfiguration';
import { type MailFolderItemRequestBuilderGetRequestConfiguration } from './mailFolderItemRequestBuilderGetRequestConfiguration';
import { type MailFolderItemRequestBuilderPatchRequestConfiguration } from './mailFolderItemRequestBuilderPatchRequestConfiguration';
import { MessageRulesRequestBuilder } from './messageRules/messageRulesRequestBuilder';
import { MessagesRequestBuilder } from './messages/messagesRequestBuilder';
import { MoveRequestBuilder } from './move/moveRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mailFolders property of the microsoft.graph.user entity.
 */
export class MailFolderItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the childFolders property of the microsoft.graph.mailFolder entity.
     */
    public get childFolders(): ChildFoldersRequestBuilder {
        return new ChildFoldersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the copy method.
     */
    public get copy(): CopyRequestBuilder {
        return new CopyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the messageRules property of the microsoft.graph.mailFolder entity.
     */
    public get messageRules(): MessageRulesRequestBuilder {
        return new MessageRulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the messages property of the microsoft.graph.mailFolder entity.
     */
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the move method.
     */
    public get move(): MoveRequestBuilder {
        return new MoveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new MailFolderItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}{?includeHiddenFolders*,%24select,%24expand}");
    };
    /**
     * Delete the specified mailFolder. The folder can be a mailSearchFolder. You can specify a mail folder by its folder ID, or by its well-known folder name, if one exists.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/mailfolder-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: MailFolderItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The user's mail folders. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MailFolder
     * @see {@link https://learn.microsoft.com/graph/api/mailfolder-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MailFolderItemRequestBuilderGetRequestConfiguration | undefined) : Promise<MailFolder | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MailFolder>(requestInfo, createMailFolderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the writable properties of a mailSearchFolder object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MailFolder
     * @see {@link https://learn.microsoft.com/graph/api/mailsearchfolder-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: MailFolder, requestConfiguration?: MailFolderItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<MailFolder | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MailFolder>(requestInfo, createMailFolderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete the specified mailFolder. The folder can be a mailSearchFolder. You can specify a mail folder by its folder ID, or by its well-known folder name, if one exists.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: MailFolderItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The user's mail folders. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MailFolderItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the writable properties of a mailSearchFolder object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: MailFolder, requestConfiguration?: MailFolderItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMailFolder);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a MailFolderItemRequestBuilder
     */
    public withUrl(rawUrl: string) : MailFolderItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MailFolderItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
