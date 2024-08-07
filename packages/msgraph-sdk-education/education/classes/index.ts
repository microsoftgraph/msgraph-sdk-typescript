/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEducationClassCollectionResponseFromDiscriminatorValue, createEducationClassFromDiscriminatorValue, serializeEducationClass, type EducationClass, type EducationClassCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { DeltaRequestBuilderRequestsMetadata, type DeltaRequestBuilder } from './delta/index.js';
// @ts-ignore
import { EducationClassItemRequestBuilderNavigationMetadata, EducationClassItemRequestBuilderRequestsMetadata, type EducationClassItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the classes property of the microsoft.graph.educationRoot entity.
 */
export interface ClassesRequestBuilder extends BaseRequestBuilder<ClassesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the delta method.
     */
    get delta(): DeltaRequestBuilder;
    /**
     * Provides operations to manage the classes property of the microsoft.graph.educationRoot entity.
     * @param educationClassId The unique identifier of educationClass
     * @returns {EducationClassItemRequestBuilder}
     */
     byEducationClassId(educationClassId: string) : EducationClassItemRequestBuilder;
    /**
     * Get a list of the educationClass objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationClassCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ClassesRequestBuilderGetQueryParameters> | undefined) : Promise<EducationClassCollectionResponse | undefined>;
    /**
     * Create a new educationClass object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationClass>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-post?view=graph-rest-1.0|Find more info here}
     */
     post(body: EducationClass, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationClass | undefined>;
    /**
     * Get a list of the educationClass objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ClassesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new educationClass object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: EducationClass, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the educationClass objects and their properties.
 */
export interface ClassesRequestBuilderGetQueryParameters {
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
export const ClassesRequestBuilderUriTemplate = "{+baseurl}/education/classes{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ClassesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ClassesRequestBuilderNavigationMetadata: Record<Exclude<keyof ClassesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byEducationClassId: {
        requestsMetadata: EducationClassItemRequestBuilderRequestsMetadata,
        navigationMetadata: EducationClassItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["educationClass%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    delta: {
        requestsMetadata: DeltaRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ClassesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ClassesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationClassCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ClassesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ClassesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationClassFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationClass,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
