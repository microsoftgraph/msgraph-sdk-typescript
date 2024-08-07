/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createProfileCardPropertyCollectionResponseFromDiscriminatorValue, createProfileCardPropertyFromDiscriminatorValue, serializeProfileCardProperty, type ProfileCardProperty, type ProfileCardPropertyCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ProfileCardPropertyItemRequestBuilderRequestsMetadata, type ProfileCardPropertyItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the profileCardProperties property of the microsoft.graph.peopleAdminSettings entity.
 */
export interface ProfileCardPropertiesRequestBuilder extends BaseRequestBuilder<ProfileCardPropertiesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the profileCardProperties property of the microsoft.graph.peopleAdminSettings entity.
     * @param profileCardPropertyId The unique identifier of profileCardProperty
     * @returns {ProfileCardPropertyItemRequestBuilder}
     */
     byProfileCardPropertyId(profileCardPropertyId: string) : ProfileCardPropertyItemRequestBuilder;
    /**
     * Get a collection of profileCardProperty resources for an organization. Each resource is identified by its directoryPropertyName property.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ProfileCardPropertyCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/peopleadminsettings-list-profilecardproperties?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ProfileCardPropertiesRequestBuilderGetQueryParameters> | undefined) : Promise<ProfileCardPropertyCollectionResponse | undefined>;
    /**
     * Create a new profileCardProperty for an organization. The new property is identified by its directoryPropertyName property. For more information about how to add properties to the profile card for an organization, see Add or remove custom attributes on a profile card using the profile card API.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ProfileCardProperty>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/peopleadminsettings-post-profilecardproperties?view=graph-rest-1.0|Find more info here}
     */
     post(body: ProfileCardProperty, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ProfileCardProperty | undefined>;
    /**
     * Get a collection of profileCardProperty resources for an organization. Each resource is identified by its directoryPropertyName property.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ProfileCardPropertiesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new profileCardProperty for an organization. The new property is identified by its directoryPropertyName property. For more information about how to add properties to the profile card for an organization, see Add or remove custom attributes on a profile card using the profile card API.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ProfileCardProperty, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a collection of profileCardProperty resources for an organization. Each resource is identified by its directoryPropertyName property.
 */
export interface ProfileCardPropertiesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const ProfileCardPropertiesRequestBuilderUriTemplate = "{+baseurl}/admin/people/profileCardProperties{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ProfileCardPropertiesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ProfileCardPropertiesRequestBuilderNavigationMetadata: Record<Exclude<keyof ProfileCardPropertiesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byProfileCardPropertyId: {
        requestsMetadata: ProfileCardPropertyItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["profileCardProperty%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ProfileCardPropertiesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ProfileCardPropertiesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createProfileCardPropertyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ProfileCardPropertiesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ProfileCardPropertiesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createProfileCardPropertyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeProfileCardProperty,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
