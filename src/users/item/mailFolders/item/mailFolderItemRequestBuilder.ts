import {MailFolder} from '../../../../models/';
import {createMailFolderFromDiscriminatorValue} from '../../../../models/createMailFolderFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ChildFoldersRequestBuilder} from './childFolders/childFoldersRequestBuilder';
import {MailFolderItemRequestBuilder as I367d46967f0d2f5279ef6b800a7ff7ea45865a3d90922c7daf148f70708b640f} from './childFolders/item/mailFolderItemRequestBuilder';
import {MailFolderItemRequestBuilderDeleteRequestConfiguration} from './mailFolderItemRequestBuilderDeleteRequestConfiguration';
import {MailFolderItemRequestBuilderGetRequestConfiguration} from './mailFolderItemRequestBuilderGetRequestConfiguration';
import {MailFolderItemRequestBuilderPatchRequestConfiguration} from './mailFolderItemRequestBuilderPatchRequestConfiguration';
import {MessageRuleItemRequestBuilder} from './messageRules/item/messageRuleItemRequestBuilder';
import {MessageRulesRequestBuilder} from './messageRules/messageRulesRequestBuilder';
import {MessageItemRequestBuilder} from './messages/item/messageItemRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
import {CopyRequestBuilder} from './microsoftGraphCopy/copyRequestBuilder';
import {MoveRequestBuilder} from './microsoftGraphMove/moveRequestBuilder';
import {MultiValueLegacyExtendedPropertyItemRequestBuilder} from './multiValueExtendedProperties/item/multiValueLegacyExtendedPropertyItemRequestBuilder';
import {MultiValueExtendedPropertiesRequestBuilder} from './multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder';
import {SingleValueLegacyExtendedPropertyItemRequestBuilder} from './singleValueExtendedProperties/item/singleValueLegacyExtendedPropertyItemRequestBuilder';
import {SingleValueExtendedPropertiesRequestBuilder} from './singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mailFolders property of the microsoft.graph.user entity.
 */
export class MailFolderItemRequestBuilder {
    /** Provides operations to manage the childFolders property of the microsoft.graph.mailFolder entity. */
    public get childFolders(): ChildFoldersRequestBuilder {
        return new ChildFoldersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the messageRules property of the microsoft.graph.mailFolder entity. */
    public get messageRules(): MessageRulesRequestBuilder {
        return new MessageRulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the messages property of the microsoft.graph.mailFolder entity. */
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the copy method. */
    public get microsoftGraphCopy(): CopyRequestBuilder {
        return new CopyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the move method. */
    public get microsoftGraphMove(): MoveRequestBuilder {
        return new MoveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the multiValueExtendedProperties property of the microsoft.graph.mailFolder entity. */
    public get multiValueExtendedProperties(): MultiValueExtendedPropertiesRequestBuilder {
        return new MultiValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the singleValueExtendedProperties property of the microsoft.graph.mailFolder entity. */
    public get singleValueExtendedProperties(): SingleValueExtendedPropertiesRequestBuilder {
        return new SingleValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the childFolders property of the microsoft.graph.mailFolder entity.
     * @param id Unique identifier of the item
     * @returns a MailFolderItemRequestBuilder
     */
    public childFoldersById(id: string) : I367d46967f0d2f5279ef6b800a7ff7ea45865a3d90922c7daf148f70708b640f {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mailFolder%2Did1"] = id
        return new I367d46967f0d2f5279ef6b800a7ff7ea45865a3d90922c7daf148f70708b640f(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MailFolderItemRequestBuilder and sets the default values.
     * @param mailFolderId key: id of mailFolder
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, mailFolderId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}{?%24select}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["mailFolder%2Did"] = mailFolderId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property mailFolders for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: MailFolderItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * The user's mail folders. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MailFolder
     */
    public get(requestConfiguration?: MailFolderItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MailFolder | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<MailFolder>(requestInfo, createMailFolderFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the messageRules property of the microsoft.graph.mailFolder entity.
     * @param id Unique identifier of the item
     * @returns a MessageRuleItemRequestBuilder
     */
    public messageRulesById(id: string) : MessageRuleItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["messageRule%2Did"] = id
        return new MessageRuleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the messages property of the microsoft.graph.mailFolder entity.
     * @param id Unique identifier of the item
     * @returns a MessageItemRequestBuilder
     */
    public messagesById(id: string) : MessageItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["message%2Did"] = id
        return new MessageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the multiValueExtendedProperties property of the microsoft.graph.mailFolder entity.
     * @param id Unique identifier of the item
     * @returns a MultiValueLegacyExtendedPropertyItemRequestBuilder
     */
    public multiValueExtendedPropertiesById(id: string) : MultiValueLegacyExtendedPropertyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["multiValueLegacyExtendedProperty%2Did"] = id
        return new MultiValueLegacyExtendedPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property mailFolders in users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MailFolder
     */
    public patch(body: MailFolder | undefined, requestConfiguration?: MailFolderItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MailFolder | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<MailFolder>(requestInfo, createMailFolderFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the singleValueExtendedProperties property of the microsoft.graph.mailFolder entity.
     * @param id Unique identifier of the item
     * @returns a SingleValueLegacyExtendedPropertyItemRequestBuilder
     */
    public singleValueExtendedPropertiesById(id: string) : SingleValueLegacyExtendedPropertyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["singleValueLegacyExtendedProperty%2Did"] = id
        return new SingleValueLegacyExtendedPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property mailFolders for users
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
     * Update the navigation property mailFolders in users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: MailFolder | undefined, requestConfiguration?: MailFolderItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
