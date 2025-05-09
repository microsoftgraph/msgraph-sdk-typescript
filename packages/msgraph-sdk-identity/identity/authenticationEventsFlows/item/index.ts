/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAuthenticationEventsFlowFromDiscriminatorValue, serializeAuthenticationEventsFlow, type AuthenticationEventsFlow } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ConditionsRequestBuilderNavigationMetadata, ConditionsRequestBuilderRequestsMetadata, type ConditionsRequestBuilder } from './conditions/index.js';
// @ts-ignore
import { GraphExternalUsersSelfServiceSignUpEventsFlowRequestBuilderNavigationMetadata, GraphExternalUsersSelfServiceSignUpEventsFlowRequestBuilderRequestsMetadata, type GraphExternalUsersSelfServiceSignUpEventsFlowRequestBuilder } from './graphExternalUsersSelfServiceSignUpEventsFlow/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the authenticationEventsFlows property of the microsoft.graph.identityContainer entity.
 */
export interface AuthenticationEventsFlowItemRequestBuilder extends BaseRequestBuilder<AuthenticationEventsFlowItemRequestBuilder> {
    /**
     * The conditions property
     */
    get conditions(): ConditionsRequestBuilder;
    /**
     * Casts the previous resource to externalUsersSelfServiceSignUpEventsFlow.
     */
    get graphExternalUsersSelfServiceSignUpEventsFlow(): GraphExternalUsersSelfServiceSignUpEventsFlowRequestBuilder;
    /**
     * Delete a specific authenticationEventsFlow resource by ID. This operation also removes or unlinks all applications from the flow, which disables the customized authentication experience defined for the application.  The following derived subtypes are supported:- externalUsersSelfServiceSignupEventsFlow
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/authenticationeventsflow-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties and relationships of a specific authenticationEventsFlow object by ID. The @odata.type property in the response object indicates the type of the object, which can be one of the following derived subtypes:- externalUsersSelfServiceSignupEventsFlow
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AuthenticationEventsFlow>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/authenticationeventsflow-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AuthenticationEventsFlowItemRequestBuilderGetQueryParameters> | undefined) : Promise<AuthenticationEventsFlow | undefined>;
    /**
     * Update the properties of an authenticationEventsFlow object by ID. You must specify the @odata.type property and the value of the authenticationEventsFlow object type to update. The following derived subtypes are supported:- externalUsersSelfServiceSignupEventsFlow
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AuthenticationEventsFlow>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/authenticationeventsflow-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: AuthenticationEventsFlow, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AuthenticationEventsFlow | undefined>;
    /**
     * Delete a specific authenticationEventsFlow resource by ID. This operation also removes or unlinks all applications from the flow, which disables the customized authentication experience defined for the application.  The following derived subtypes are supported:- externalUsersSelfServiceSignupEventsFlow
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties and relationships of a specific authenticationEventsFlow object by ID. The @odata.type property in the response object indicates the type of the object, which can be one of the following derived subtypes:- externalUsersSelfServiceSignupEventsFlow
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AuthenticationEventsFlowItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an authenticationEventsFlow object by ID. You must specify the @odata.type property and the value of the authenticationEventsFlow object type to update. The following derived subtypes are supported:- externalUsersSelfServiceSignupEventsFlow
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AuthenticationEventsFlow, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of a specific authenticationEventsFlow object by ID. The @odata.type property in the response object indicates the type of the object, which can be one of the following derived subtypes:- externalUsersSelfServiceSignupEventsFlow
 */
export interface AuthenticationEventsFlowItemRequestBuilderGetQueryParameters {
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
export const AuthenticationEventsFlowItemRequestBuilderUriTemplate = "{+baseurl}/identity/authenticationEventsFlows/{authenticationEventsFlow%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AuthenticationEventsFlowItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AuthenticationEventsFlowItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AuthenticationEventsFlowItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    conditions: {
        requestsMetadata: ConditionsRequestBuilderRequestsMetadata,
        navigationMetadata: ConditionsRequestBuilderNavigationMetadata,
    },
    graphExternalUsersSelfServiceSignUpEventsFlow: {
        requestsMetadata: GraphExternalUsersSelfServiceSignUpEventsFlowRequestBuilderRequestsMetadata,
        navigationMetadata: GraphExternalUsersSelfServiceSignUpEventsFlowRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AuthenticationEventsFlowItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AuthenticationEventsFlowItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AuthenticationEventsFlowItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAuthenticationEventsFlowFromDiscriminatorValue,
        queryParametersMapper: AuthenticationEventsFlowItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AuthenticationEventsFlowItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAuthenticationEventsFlowFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAuthenticationEventsFlow,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
