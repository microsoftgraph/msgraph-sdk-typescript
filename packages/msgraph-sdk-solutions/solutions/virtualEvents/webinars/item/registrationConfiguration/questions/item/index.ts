/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createVirtualEventRegistrationQuestionBaseFromDiscriminatorValue, serializeVirtualEventRegistrationQuestionBase, type VirtualEventRegistrationQuestionBase } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the questions property of the microsoft.graph.virtualEventRegistrationConfiguration entity.
 */
export interface VirtualEventRegistrationQuestionBaseItemRequestBuilder extends BaseRequestBuilder<VirtualEventRegistrationQuestionBaseItemRequestBuilder> {
    /**
     * Delete a registration question from a webinar. The question can either be a predefined registration question or a custom registration question. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/virtualeventregistrationquestionbase-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Registration questions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VirtualEventRegistrationQuestionBase>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<VirtualEventRegistrationQuestionBaseItemRequestBuilderGetQueryParameters> | undefined) : Promise<VirtualEventRegistrationQuestionBase | undefined>;
    /**
     * Update the navigation property questions in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VirtualEventRegistrationQuestionBase>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: VirtualEventRegistrationQuestionBase, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<VirtualEventRegistrationQuestionBase | undefined>;
    /**
     * Delete a registration question from a webinar. The question can either be a predefined registration question or a custom registration question. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Registration questions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<VirtualEventRegistrationQuestionBaseItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property questions in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: VirtualEventRegistrationQuestionBase, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Registration questions.
 */
export interface VirtualEventRegistrationQuestionBaseItemRequestBuilderGetQueryParameters {
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
export const VirtualEventRegistrationQuestionBaseItemRequestBuilderUriTemplate = "{+baseurl}/solutions/virtualEvents/webinars/{virtualEventWebinar%2Did}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const VirtualEventRegistrationQuestionBaseItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const VirtualEventRegistrationQuestionBaseItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: VirtualEventRegistrationQuestionBaseItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: VirtualEventRegistrationQuestionBaseItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createVirtualEventRegistrationQuestionBaseFromDiscriminatorValue,
        queryParametersMapper: VirtualEventRegistrationQuestionBaseItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: VirtualEventRegistrationQuestionBaseItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createVirtualEventRegistrationQuestionBaseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeVirtualEventRegistrationQuestionBase,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
