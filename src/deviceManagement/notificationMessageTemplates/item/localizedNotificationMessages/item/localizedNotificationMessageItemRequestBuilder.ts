import {createLocalizedNotificationMessageFromDiscriminatorValue} from '../../../../../models/createLocalizedNotificationMessageFromDiscriminatorValue';
import {deserializeIntoLocalizedNotificationMessage} from '../../../../../models/deserializeIntoLocalizedNotificationMessage';
import type {LocalizedNotificationMessage} from '../../../../../models/localizedNotificationMessage';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeLocalizedNotificationMessage} from '../../../../../models/serializeLocalizedNotificationMessage';
import {LocalizedNotificationMessageItemRequestBuilderDeleteRequestConfiguration} from './localizedNotificationMessageItemRequestBuilderDeleteRequestConfiguration';
import {LocalizedNotificationMessageItemRequestBuilderGetRequestConfiguration} from './localizedNotificationMessageItemRequestBuilderGetRequestConfiguration';
import {LocalizedNotificationMessageItemRequestBuilderPatchRequestConfiguration} from './localizedNotificationMessageItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the localizedNotificationMessages property of the microsoft.graph.notificationMessageTemplate entity.
 */
export class LocalizedNotificationMessageItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new LocalizedNotificationMessageItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate%2Did}/localizedNotificationMessages/{localizedNotificationMessage%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a localizedNotificationMessage.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-localizednotificationmessage-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: LocalizedNotificationMessageItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the localizedNotificationMessage object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LocalizedNotificationMessage
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-localizednotificationmessage-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LocalizedNotificationMessageItemRequestBuilderGetRequestConfiguration | undefined) : Promise<LocalizedNotificationMessage | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LocalizedNotificationMessage>(requestInfo, createLocalizedNotificationMessageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a localizedNotificationMessage object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LocalizedNotificationMessage
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-localizednotificationmessage-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: LocalizedNotificationMessage, requestConfiguration?: LocalizedNotificationMessageItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<LocalizedNotificationMessage | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LocalizedNotificationMessage>(requestInfo, createLocalizedNotificationMessageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a localizedNotificationMessage.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: LocalizedNotificationMessageItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the localizedNotificationMessage object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LocalizedNotificationMessageItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a localizedNotificationMessage object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: LocalizedNotificationMessage, requestConfiguration?: LocalizedNotificationMessageItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeLocalizedNotificationMessage);
        return requestInfo;
    };
}
