/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDeviceConfigurationDeviceOverviewFromDiscriminatorValue, serializeDeviceConfigurationDeviceOverview, type DeviceConfigurationDeviceOverview } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceStatusOverview property of the microsoft.graph.deviceConfiguration entity.
 */
export interface DeviceStatusOverviewRequestBuilder extends BaseRequestBuilder<DeviceStatusOverviewRequestBuilder> {
    /**
     * Delete navigation property deviceStatusOverview for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read properties and relationships of the deviceConfigurationDeviceOverview object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceConfigurationDeviceOverview>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationdeviceoverview-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DeviceStatusOverviewRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceConfigurationDeviceOverview | undefined>;
    /**
     * Update the properties of a deviceConfigurationDeviceOverview object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceConfigurationDeviceOverview>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationdeviceoverview-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: DeviceConfigurationDeviceOverview, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceConfigurationDeviceOverview | undefined>;
    /**
     * Delete navigation property deviceStatusOverview for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read properties and relationships of the deviceConfigurationDeviceOverview object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceStatusOverviewRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a deviceConfigurationDeviceOverview object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: DeviceConfigurationDeviceOverview, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read properties and relationships of the deviceConfigurationDeviceOverview object.
 */
export interface DeviceStatusOverviewRequestBuilderGetQueryParameters {
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
export const DeviceStatusOverviewRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/deviceStatusOverview{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceStatusOverviewRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceStatusOverviewRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: DeviceStatusOverviewRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: DeviceStatusOverviewRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceConfigurationDeviceOverviewFromDiscriminatorValue,
        queryParametersMapper: DeviceStatusOverviewRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DeviceStatusOverviewRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceConfigurationDeviceOverviewFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceConfigurationDeviceOverview,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
