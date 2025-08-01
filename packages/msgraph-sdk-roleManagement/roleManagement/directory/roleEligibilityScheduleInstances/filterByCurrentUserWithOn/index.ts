/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeUnifiedRoleEligibilityScheduleInstance, type BaseCollectionPaginationCountResponse, type UnifiedRoleEligibilityScheduleInstance } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {FilterByCurrentUserWithOnGetResponse}
 */
// @ts-ignore
export function createFilterByCurrentUserWithOnGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoFilterByCurrentUserWithOnGetResponse;
}
/**
 * The deserialization information for the current model
 * @param FilterByCurrentUserWithOnGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoFilterByCurrentUserWithOnGetResponse(filterByCurrentUserWithOnGetResponse: Partial<FilterByCurrentUserWithOnGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnGetResponse),
        "value": n => { filterByCurrentUserWithOnGetResponse.value = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstance>(createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue); },
    }
}
export interface FilterByCurrentUserWithOnGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleEligibilityScheduleInstance[] | null;
}
/**
 * Provides operations to call the filterByCurrentUser method.
 */
export interface FilterByCurrentUserWithOnRequestBuilder extends BaseRequestBuilder<FilterByCurrentUserWithOnRequestBuilder> {
    /**
     * Get the instances of eligible roles for the calling principal.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FilterByCurrentUserWithOnGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/unifiedroleeligibilityscheduleinstance-filterbycurrentuser?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<FilterByCurrentUserWithOnRequestBuilderGetQueryParameters> | undefined) : Promise<FilterByCurrentUserWithOnGetResponse | undefined>;
    /**
     * Get the instances of eligible roles for the calling principal.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FilterByCurrentUserWithOnRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the instances of eligible roles for the calling principal.
 */
export interface FilterByCurrentUserWithOnRequestBuilderGetQueryParameters {
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
 * Serializes information the current object
 * @param FilterByCurrentUserWithOnGetResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeFilterByCurrentUserWithOnGetResponse(writer: SerializationWriter, filterByCurrentUserWithOnGetResponse: Partial<FilterByCurrentUserWithOnGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!filterByCurrentUserWithOnGetResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnGetResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstance>("value", filterByCurrentUserWithOnGetResponse.value, serializeUnifiedRoleEligibilityScheduleInstance);
}
/**
 * Uri template for the request builder.
 */
export const FilterByCurrentUserWithOnRequestBuilderUriTemplate = "{+baseurl}/roleManagement/directory/roleEligibilityScheduleInstances/filterByCurrentUser(on='{on}'){?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FilterByCurrentUserWithOnRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
 * Metadata for all the requests in the request builder.
 */
export const FilterByCurrentUserWithOnRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: FilterByCurrentUserWithOnRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFilterByCurrentUserWithOnGetResponseFromDiscriminatorValue,
        queryParametersMapper: FilterByCurrentUserWithOnRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
