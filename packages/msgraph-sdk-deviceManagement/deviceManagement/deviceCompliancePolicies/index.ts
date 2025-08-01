/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDeviceCompliancePolicyCollectionResponseFromDiscriminatorValue, createDeviceCompliancePolicyFromDiscriminatorValue, serializeDeviceCompliancePolicy, type DeviceCompliancePolicy, type DeviceCompliancePolicyCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { DeviceCompliancePolicyItemRequestBuilderNavigationMetadata, DeviceCompliancePolicyItemRequestBuilderRequestsMetadata, type DeviceCompliancePolicyItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceCompliancePolicies property of the microsoft.graph.deviceManagement entity.
 */
export interface DeviceCompliancePoliciesRequestBuilder extends BaseRequestBuilder<DeviceCompliancePoliciesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the deviceCompliancePolicies property of the microsoft.graph.deviceManagement entity.
     * @param deviceCompliancePolicyId The unique identifier of deviceCompliancePolicy
     * @returns {DeviceCompliancePolicyItemRequestBuilder}
     */
     byDeviceCompliancePolicyId(deviceCompliancePolicyId: string) : DeviceCompliancePolicyItemRequestBuilder;
    /**
     * List properties and relationships of the iosCompliancePolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceCompliancePolicyCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-ioscompliancepolicy-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DeviceCompliancePoliciesRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceCompliancePolicyCollectionResponse | undefined>;
    /**
     * Create a new windows10CompliancePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceCompliancePolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-windows10compliancepolicy-create?view=graph-rest-1.0|Find more info here}
     */
     post(body: DeviceCompliancePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceCompliancePolicy | undefined>;
    /**
     * List properties and relationships of the iosCompliancePolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceCompliancePoliciesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new windows10CompliancePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DeviceCompliancePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List properties and relationships of the iosCompliancePolicy objects.
 */
export interface DeviceCompliancePoliciesRequestBuilderGetQueryParameters {
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
export const DeviceCompliancePoliciesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceCompliancePolicies{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceCompliancePoliciesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const DeviceCompliancePoliciesRequestBuilderNavigationMetadata: Record<Exclude<keyof DeviceCompliancePoliciesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDeviceCompliancePolicyId: {
        requestsMetadata: DeviceCompliancePolicyItemRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceCompliancePolicyItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["deviceCompliancePolicy%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceCompliancePoliciesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DeviceCompliancePoliciesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceCompliancePolicyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DeviceCompliancePoliciesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: DeviceCompliancePoliciesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceCompliancePolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceCompliancePolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
