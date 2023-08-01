import {NotificationMessageTemplateCollectionResponse} from '../../models/';
import {createNotificationMessageTemplateCollectionResponseFromDiscriminatorValue} from '../../models/createNotificationMessageTemplateCollectionResponseFromDiscriminatorValue';
import {createNotificationMessageTemplateFromDiscriminatorValue} from '../../models/createNotificationMessageTemplateFromDiscriminatorValue';
import {deserializeIntoNotificationMessageTemplate} from '../../models/deserializeIntoNotificationMessageTemplate';
import type {NotificationMessageTemplate} from '../../models/notificationMessageTemplate';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeNotificationMessageTemplate} from '../../models/serializeNotificationMessageTemplate';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {NotificationMessageTemplateItemRequestBuilder} from './item/notificationMessageTemplateItemRequestBuilder';
import {NotificationMessageTemplatesRequestBuilderGetRequestConfiguration} from './notificationMessageTemplatesRequestBuilderGetRequestConfiguration';
import {NotificationMessageTemplatesRequestBuilderPostRequestConfiguration} from './notificationMessageTemplatesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the notificationMessageTemplates property of the microsoft.graph.deviceManagement entity.
 */
export class NotificationMessageTemplatesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the notificationMessageTemplates property of the microsoft.graph.deviceManagement entity.
     * @param notificationMessageTemplateId Unique identifier of the item
     * @returns a NotificationMessageTemplateItemRequestBuilder
     */
    public byNotificationMessageTemplateId(notificationMessageTemplateId: string) : NotificationMessageTemplateItemRequestBuilder {
        if(!notificationMessageTemplateId) throw new Error("notificationMessageTemplateId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["notificationMessageTemplate%2Did"] = notificationMessageTemplateId
        return new NotificationMessageTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new NotificationMessageTemplatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/notificationMessageTemplates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the notificationMessageTemplate objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of NotificationMessageTemplateCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-notificationmessagetemplate-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: NotificationMessageTemplatesRequestBuilderGetRequestConfiguration | undefined) : Promise<NotificationMessageTemplateCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<NotificationMessageTemplateCollectionResponse>(requestInfo, createNotificationMessageTemplateCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new notificationMessageTemplate object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of NotificationMessageTemplate
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-notificationmessagetemplate-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: NotificationMessageTemplate | undefined, requestConfiguration?: NotificationMessageTemplatesRequestBuilderPostRequestConfiguration | undefined) : Promise<NotificationMessageTemplate | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<NotificationMessageTemplate>(requestInfo, createNotificationMessageTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the notificationMessageTemplate objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: NotificationMessageTemplatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new notificationMessageTemplate object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: NotificationMessageTemplate | undefined, requestConfiguration?: NotificationMessageTemplatesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeNotificationMessageTemplate);
        return requestInfo;
    };
}
