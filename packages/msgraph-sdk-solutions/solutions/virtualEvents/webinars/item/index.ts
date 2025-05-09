/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createVirtualEventWebinarFromDiscriminatorValue, serializeVirtualEventWebinar, type VirtualEventWebinar } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { PresentersRequestBuilderNavigationMetadata, PresentersRequestBuilderRequestsMetadata, type PresentersRequestBuilder } from './presenters/index.js';
// @ts-ignore
import { RegistrationConfigurationRequestBuilderNavigationMetadata, RegistrationConfigurationRequestBuilderRequestsMetadata, type RegistrationConfigurationRequestBuilder } from './registrationConfiguration/index.js';
// @ts-ignore
import { RegistrationsRequestBuilderNavigationMetadata, RegistrationsRequestBuilderRequestsMetadata, type RegistrationsRequestBuilder } from './registrations/index.js';
// @ts-ignore
import { RegistrationsWithEmailRequestBuilderNavigationMetadata, RegistrationsWithEmailRequestBuilderRequestsMetadata, type RegistrationsWithEmailRequestBuilder } from './registrationsWithEmail/index.js';
// @ts-ignore
import { RegistrationsWithUserIdRequestBuilderNavigationMetadata, RegistrationsWithUserIdRequestBuilderRequestsMetadata, type RegistrationsWithUserIdRequestBuilder } from './registrationsWithUserId/index.js';
// @ts-ignore
import { SessionsRequestBuilderNavigationMetadata, SessionsRequestBuilderRequestsMetadata, type SessionsRequestBuilder } from './sessions/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the webinars property of the microsoft.graph.virtualEventsRoot entity.
 */
export interface VirtualEventWebinarItemRequestBuilder extends BaseRequestBuilder<VirtualEventWebinarItemRequestBuilder> {
    /**
     * Provides operations to manage the presenters property of the microsoft.graph.virtualEvent entity.
     */
    get presenters(): PresentersRequestBuilder;
    /**
     * Provides operations to manage the registrationConfiguration property of the microsoft.graph.virtualEventWebinar entity.
     */
    get registrationConfiguration(): RegistrationConfigurationRequestBuilder;
    /**
     * Provides operations to manage the registrations property of the microsoft.graph.virtualEventWebinar entity.
     */
    get registrations(): RegistrationsRequestBuilder;
    /**
     * Provides operations to manage the sessions property of the microsoft.graph.virtualEvent entity.
     */
    get sessions(): SessionsRequestBuilder;
    /**
     * Delete navigation property webinars for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a virtualEventWebinar object. All roles can get the details of a webinar event.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VirtualEventWebinar>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/virtualeventwebinar-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<VirtualEventWebinarItemRequestBuilderGetQueryParameters> | undefined) : Promise<VirtualEventWebinar | undefined>;
    /**
     * Update the properties of a virtualEventWebinar object. Only the Organizer and Co-organizer can make changes to a webinar event.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VirtualEventWebinar>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/virtualeventwebinar-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: VirtualEventWebinar, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<VirtualEventWebinar | undefined>;
    /**
     * Provides operations to manage the registrations property of the microsoft.graph.virtualEventWebinar entity.
     * @param email Alternate key of virtualEventRegistration
     * @returns {RegistrationsWithEmailRequestBuilder}
     */
     registrationsWithEmail(email: string | undefined) : RegistrationsWithEmailRequestBuilder;
    /**
     * Provides operations to manage the registrations property of the microsoft.graph.virtualEventWebinar entity.
     * @param userId Alternate key of virtualEventRegistration
     * @returns {RegistrationsWithUserIdRequestBuilder}
     */
     registrationsWithUserId(userId: string | undefined) : RegistrationsWithUserIdRequestBuilder;
    /**
     * Delete navigation property webinars for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a virtualEventWebinar object. All roles can get the details of a webinar event.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<VirtualEventWebinarItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a virtualEventWebinar object. Only the Organizer and Co-organizer can make changes to a webinar event.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: VirtualEventWebinar, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a virtualEventWebinar object. All roles can get the details of a webinar event.
 */
export interface VirtualEventWebinarItemRequestBuilderGetQueryParameters {
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
export const VirtualEventWebinarItemRequestBuilderUriTemplate = "{+baseurl}/solutions/virtualEvents/webinars/{virtualEventWebinar%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const VirtualEventWebinarItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const VirtualEventWebinarItemRequestBuilderNavigationMetadata: Record<Exclude<keyof VirtualEventWebinarItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    registrationsWithEmail: {
        requestsMetadata: RegistrationsWithEmailRequestBuilderRequestsMetadata,
        navigationMetadata: RegistrationsWithEmailRequestBuilderNavigationMetadata,
        pathParametersMappings: ["email"],
    },
    registrationsWithUserId: {
        requestsMetadata: RegistrationsWithUserIdRequestBuilderRequestsMetadata,
        navigationMetadata: RegistrationsWithUserIdRequestBuilderNavigationMetadata,
        pathParametersMappings: ["userId"],
    },
    presenters: {
        requestsMetadata: PresentersRequestBuilderRequestsMetadata,
        navigationMetadata: PresentersRequestBuilderNavigationMetadata,
    },
    registrationConfiguration: {
        requestsMetadata: RegistrationConfigurationRequestBuilderRequestsMetadata,
        navigationMetadata: RegistrationConfigurationRequestBuilderNavigationMetadata,
    },
    registrations: {
        requestsMetadata: RegistrationsRequestBuilderRequestsMetadata,
        navigationMetadata: RegistrationsRequestBuilderNavigationMetadata,
    },
    sessions: {
        requestsMetadata: SessionsRequestBuilderRequestsMetadata,
        navigationMetadata: SessionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const VirtualEventWebinarItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: VirtualEventWebinarItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: VirtualEventWebinarItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createVirtualEventWebinarFromDiscriminatorValue,
        queryParametersMapper: VirtualEventWebinarItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: VirtualEventWebinarItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createVirtualEventWebinarFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeVirtualEventWebinar,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
