/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createLocalizedNotificationMessageFromDiscriminatorValue, serializeLocalizedNotificationMessage, type LocalizedNotificationMessage } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the localizedNotificationMessages property of the microsoft.graph.notificationMessageTemplate entity.
 */
export interface LocalizedNotificationMessageItemRequestBuilder extends BaseRequestBuilder<LocalizedNotificationMessageItemRequestBuilder> {
    /**
     * Deletes a localizedNotificationMessage.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-localizednotificationmessage-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read properties and relationships of the localizedNotificationMessage object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<LocalizedNotificationMessage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-localizednotificationmessage-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<LocalizedNotificationMessageItemRequestBuilderGetQueryParameters> | undefined) : Promise<LocalizedNotificationMessage | undefined>;
    /**
     * Update the properties of a localizedNotificationMessage object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<LocalizedNotificationMessage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-localizednotificationmessage-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: LocalizedNotificationMessage, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<LocalizedNotificationMessage | undefined>;
    /**
     * Deletes a localizedNotificationMessage.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read properties and relationships of the localizedNotificationMessage object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<LocalizedNotificationMessageItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a localizedNotificationMessage object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: LocalizedNotificationMessage, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read properties and relationships of the localizedNotificationMessage object.
 */
export interface LocalizedNotificationMessageItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const LocalizedNotificationMessageItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate%2Did}/localizedNotificationMessages/{localizedNotificationMessage%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const LocalizedNotificationMessageItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const LocalizedNotificationMessageItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: LocalizedNotificationMessageItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: LocalizedNotificationMessageItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createLocalizedNotificationMessageFromDiscriminatorValue,
        queryParametersMapper: LocalizedNotificationMessageItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: LocalizedNotificationMessageItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createLocalizedNotificationMessageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeLocalizedNotificationMessage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
