/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEducationUserFromDiscriminatorValue, deserializeIntoBaseDeltaFunctionResponse, serializeBaseDeltaFunctionResponse, serializeEducationUser, type BaseDeltaFunctionResponse, type EducationUser } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {DeltaGetResponse}
 */
// @ts-ignore
export function createDeltaGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDeltaGetResponse;
}
export interface DeltaGetResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationUser[] | null;
}
/**
 * Provides operations to call the delta method.
 */
export interface DeltaRequestBuilder extends BaseRequestBuilder<DeltaRequestBuilder> {
    /**
     * Get newly created or updated educationUser without having to perform a full read of the entire collection. See Use delta query for details.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeltaGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/educationuser-delta?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DeltaRequestBuilderGetQueryParameters> | undefined) : Promise<DeltaGetResponse | undefined>;
    /**
     * Get newly created or updated educationUser without having to perform a full read of the entire collection. See Use delta query for details.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeltaRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get newly created or updated educationUser without having to perform a full read of the entire collection. See Use delta query for details.
 */
export interface DeltaRequestBuilderGetQueryParameters {
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
 * The deserialization information for the current model
 * @param DeltaGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoDeltaGetResponse(deltaGetResponse: Partial<DeltaGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaGetResponse),
        "value": n => { deltaGetResponse.value = n.getCollectionOfObjectValues<EducationUser>(createEducationUserFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param DeltaGetResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeDeltaGetResponse(writer: SerializationWriter, deltaGetResponse: Partial<DeltaGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!deltaGetResponse || isSerializingDerivedType) { return; }
    serializeBaseDeltaFunctionResponse(writer, deltaGetResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<EducationUser>("value", deltaGetResponse.value, serializeEducationUser);
}
/**
 * Uri template for the request builder.
 */
export const DeltaRequestBuilderUriTemplate = "{+baseurl}/education/users/delta(){?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeltaRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const DeltaRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DeltaRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeltaGetResponseFromDiscriminatorValue,
        queryParametersMapper: DeltaRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
