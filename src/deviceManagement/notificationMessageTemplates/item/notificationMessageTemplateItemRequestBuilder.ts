import { createNotificationMessageTemplateFromDiscriminatorValue } from '../../../models/createNotificationMessageTemplateFromDiscriminatorValue';
import { deserializeIntoNotificationMessageTemplate } from '../../../models/deserializeIntoNotificationMessageTemplate';
import { type NotificationMessageTemplate } from '../../../models/notificationMessageTemplate';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeNotificationMessageTemplate } from '../../../models/serializeNotificationMessageTemplate';
import { LocalizedNotificationMessagesRequestBuilder } from './localizedNotificationMessages/localizedNotificationMessagesRequestBuilder';
import { type NotificationMessageTemplateItemRequestBuilderDeleteRequestConfiguration } from './notificationMessageTemplateItemRequestBuilderDeleteRequestConfiguration';
import { type NotificationMessageTemplateItemRequestBuilderGetRequestConfiguration } from './notificationMessageTemplateItemRequestBuilderGetRequestConfiguration';
import { type NotificationMessageTemplateItemRequestBuilderPatchRequestConfiguration } from './notificationMessageTemplateItemRequestBuilderPatchRequestConfiguration';
import { SendTestMessageRequestBuilder } from './sendTestMessage/sendTestMessageRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the notificationMessageTemplates property of the microsoft.graph.deviceManagement entity.
 */
export class NotificationMessageTemplateItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the localizedNotificationMessages property of the microsoft.graph.notificationMessageTemplate entity.
     */
    public get localizedNotificationMessages(): LocalizedNotificationMessagesRequestBuilder {
        return new LocalizedNotificationMessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sendTestMessage method.
     */
    public get sendTestMessage(): SendTestMessageRequestBuilder {
        return new SendTestMessageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new NotificationMessageTemplateItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a notificationMessageTemplate.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-notificationmessagetemplate-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: NotificationMessageTemplateItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the notificationMessageTemplate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of NotificationMessageTemplate
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-notificationmessagetemplate-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: NotificationMessageTemplateItemRequestBuilderGetRequestConfiguration | undefined) : Promise<NotificationMessageTemplate | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<NotificationMessageTemplate>(requestInfo, createNotificationMessageTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a notificationMessageTemplate object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of NotificationMessageTemplate
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-notificationmessagetemplate-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: NotificationMessageTemplate, requestConfiguration?: NotificationMessageTemplateItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<NotificationMessageTemplate | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<NotificationMessageTemplate>(requestInfo, createNotificationMessageTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a notificationMessageTemplate.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: NotificationMessageTemplateItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the notificationMessageTemplate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: NotificationMessageTemplateItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a notificationMessageTemplate object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: NotificationMessageTemplate, requestConfiguration?: NotificationMessageTemplateItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeNotificationMessageTemplate);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a NotificationMessageTemplateItemRequestBuilder
     */
    public withUrl(rawUrl: string) : NotificationMessageTemplateItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new NotificationMessageTemplateItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
