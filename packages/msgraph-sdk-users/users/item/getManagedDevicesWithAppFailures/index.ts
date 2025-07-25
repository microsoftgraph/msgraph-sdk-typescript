/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, type BaseCollectionPaginationCountResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetManagedDevicesWithAppFailuresGetResponse}
 */
// @ts-ignore
export function createGetManagedDevicesWithAppFailuresGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetManagedDevicesWithAppFailuresGetResponse;
}
/**
 * The deserialization information for the current model
 * @param GetManagedDevicesWithAppFailuresGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetManagedDevicesWithAppFailuresGetResponse(getManagedDevicesWithAppFailuresGetResponse: Partial<GetManagedDevicesWithAppFailuresGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getManagedDevicesWithAppFailuresGetResponse),
        "value": n => { getManagedDevicesWithAppFailuresGetResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
export interface GetManagedDevicesWithAppFailuresGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: string[] | null;
}
/**
 * Provides operations to call the getManagedDevicesWithAppFailures method.
 */
export interface GetManagedDevicesWithAppFailuresRequestBuilder extends BaseRequestBuilder<GetManagedDevicesWithAppFailuresRequestBuilder> {
    /**
     * Retrieves the list of devices with failed apps
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GetManagedDevicesWithAppFailuresGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-troubleshooting-user-getmanageddeviceswithappfailures?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<GetManagedDevicesWithAppFailuresRequestBuilderGetQueryParameters> | undefined) : Promise<GetManagedDevicesWithAppFailuresGetResponse | undefined>;
    /**
     * Retrieves the list of devices with failed apps
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GetManagedDevicesWithAppFailuresRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Retrieves the list of devices with failed apps
 */
export interface GetManagedDevicesWithAppFailuresRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Search items by search phrases
     */
    search?: string;
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
 * @param GetManagedDevicesWithAppFailuresGetResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetManagedDevicesWithAppFailuresGetResponse(writer: SerializationWriter, getManagedDevicesWithAppFailuresGetResponse: Partial<GetManagedDevicesWithAppFailuresGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getManagedDevicesWithAppFailuresGetResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, getManagedDevicesWithAppFailuresGetResponse, isSerializingDerivedType)
    writer.writeCollectionOfPrimitiveValues<string>("value", getManagedDevicesWithAppFailuresGetResponse.value);
}
/**
 * Uri template for the request builder.
 */
export const GetManagedDevicesWithAppFailuresRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/getManagedDevicesWithAppFailures(){?%24count,%24filter,%24search,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GetManagedDevicesWithAppFailuresRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GetManagedDevicesWithAppFailuresRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GetManagedDevicesWithAppFailuresRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGetManagedDevicesWithAppFailuresGetResponseFromDiscriminatorValue,
        queryParametersMapper: GetManagedDevicesWithAppFailuresRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
