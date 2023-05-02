import {createNotificationMessageTemplateFromDiscriminatorValue} from '../../../models/createNotificationMessageTemplateFromDiscriminatorValue';
import {deserializeIntoNotificationMessageTemplate} from '../../../models/deserializeIntoNotificationMessageTemplate';
import {NotificationMessageTemplate} from '../../../models/notificationMessageTemplate';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeNotificationMessageTemplate} from '../../../models/serializeNotificationMessageTemplate';
import {LocalizedNotificationMessagesRequestBuilder} from './localizedNotificationMessages/localizedNotificationMessagesRequestBuilder';
import {NotificationMessageTemplateItemRequestBuilderDeleteRequestConfiguration} from './notificationMessageTemplateItemRequestBuilderDeleteRequestConfiguration';
import {NotificationMessageTemplateItemRequestBuilderGetRequestConfiguration} from './notificationMessageTemplateItemRequestBuilderGetRequestConfiguration';
import {NotificationMessageTemplateItemRequestBuilderPatchRequestConfiguration} from './notificationMessageTemplateItemRequestBuilderPatchRequestConfiguration';
import {SendTestMessageRequestBuilder} from './sendTestMessage/sendTestMessageRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the notificationMessageTemplates property of the microsoft.graph.deviceManagement entity.
 */
export class NotificationMessageTemplateItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the localizedNotificationMessages property of the microsoft.graph.notificationMessageTemplate entity. */
    public get localizedNotificationMessages(): LocalizedNotificationMessagesRequestBuilder {
        return new LocalizedNotificationMessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sendTestMessage method. */
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
     * Delete navigation property notificationMessageTemplates for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: NotificationMessageTemplateItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The Notification Message Templates.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of NotificationMessageTemplate
     */
    public get(requestConfiguration?: NotificationMessageTemplateItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<NotificationMessageTemplate | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<NotificationMessageTemplate>(requestInfo, createNotificationMessageTemplateFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property notificationMessageTemplates in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of NotificationMessageTemplate
     */
    public patch(body: NotificationMessageTemplate | undefined, requestConfiguration?: NotificationMessageTemplateItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<NotificationMessageTemplate | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<NotificationMessageTemplate>(requestInfo, createNotificationMessageTemplateFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property notificationMessageTemplates for deviceManagement
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
     * The Notification Message Templates.
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
     * Update the navigation property notificationMessageTemplates in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: NotificationMessageTemplate | undefined, requestConfiguration?: NotificationMessageTemplateItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeNotificationMessageTemplate);
        return requestInfo;
    };
}
