import {MessageRuleCollectionResponse} from '../../../../../../../models/';
import {createMessageRuleCollectionResponseFromDiscriminatorValue} from '../../../../../../../models/createMessageRuleCollectionResponseFromDiscriminatorValue';
import {createMessageRuleFromDiscriminatorValue} from '../../../../../../../models/createMessageRuleFromDiscriminatorValue';
import {deserializeIntoMessageRule} from '../../../../../../../models/deserializeIntoMessageRule';
import {MessageRule} from '../../../../../../../models/messageRule';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeMessageRule} from '../../../../../../../models/serializeMessageRule';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {MessageRuleItemRequestBuilder} from './item/messageRuleItemRequestBuilder';
import {MessageRulesRequestBuilderGetRequestConfiguration} from './messageRulesRequestBuilderGetRequestConfiguration';
import {MessageRulesRequestBuilderPostRequestConfiguration} from './messageRulesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the messageRules property of the microsoft.graph.mailFolder entity.
 */
export class MessageRulesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the messageRules property of the microsoft.graph.mailFolder entity.
     * @param messageRuleId Unique identifier of the item
     * @returns a MessageRuleItemRequestBuilder
     */
    public byMessageRuleId(messageRuleId: string) : MessageRuleItemRequestBuilder {
        if(!messageRuleId) throw new Error("messageRuleId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["messageRule%2Did"] = messageRuleId
        return new MessageRuleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MessageRulesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messageRules{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * The collection of rules that apply to the user's Inbox folder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MessageRuleCollectionResponse
     */
    public get(requestConfiguration?: MessageRulesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MessageRuleCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<MessageRuleCollectionResponse>(requestInfo, createMessageRuleCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to messageRules for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MessageRule
     */
    public post(body: MessageRule | undefined, requestConfiguration?: MessageRulesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MessageRule | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<MessageRule>(requestInfo, createMessageRuleFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The collection of rules that apply to the user's Inbox folder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MessageRulesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to messageRules for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MessageRule | undefined, requestConfiguration?: MessageRulesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMessageRule);
        return requestInfo;
    };
}
