/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCloudPCFromDiscriminatorValue, serializeCloudPC, type CloudPC } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { EndGracePeriodRequestBuilderRequestsMetadata, type EndGracePeriodRequestBuilder } from './endGracePeriod/index.js';
// @ts-ignore
import { RebootRequestBuilderRequestsMetadata, type RebootRequestBuilder } from './reboot/index.js';
// @ts-ignore
import { RenameRequestBuilderRequestsMetadata, type RenameRequestBuilder } from './rename/index.js';
// @ts-ignore
import { ResizeRequestBuilderRequestsMetadata, type ResizeRequestBuilder } from './resize/index.js';
// @ts-ignore
import { RestoreRequestBuilderRequestsMetadata, type RestoreRequestBuilder } from './restore/index.js';
// @ts-ignore
import { TroubleshootRequestBuilderRequestsMetadata, type TroubleshootRequestBuilder } from './troubleshoot/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the cloudPCs property of the microsoft.graph.virtualEndpoint entity.
 */
export interface CloudPCItemRequestBuilder extends BaseRequestBuilder<CloudPCItemRequestBuilder> {
    /**
     * Provides operations to call the endGracePeriod method.
     */
    get endGracePeriod(): EndGracePeriodRequestBuilder;
    /**
     * Provides operations to call the reboot method.
     */
    get reboot(): RebootRequestBuilder;
    /**
     * Provides operations to call the rename method.
     */
    get rename(): RenameRequestBuilder;
    /**
     * Provides operations to call the resize method.
     */
    get resize(): ResizeRequestBuilder;
    /**
     * Provides operations to call the restore method.
     */
    get restore(): RestoreRequestBuilder;
    /**
     * Provides operations to call the troubleshoot method.
     */
    get troubleshoot(): TroubleshootRequestBuilder;
    /**
     * Delete navigation property cloudPCs for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a specific cloudPC object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudPC>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/cloudpc-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CloudPCItemRequestBuilderGetQueryParameters> | undefined) : Promise<CloudPC | undefined>;
    /**
     * Update the navigation property cloudPCs in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudPC>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: CloudPC, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CloudPC | undefined>;
    /**
     * Delete navigation property cloudPCs for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a specific cloudPC object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CloudPCItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property cloudPCs in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: CloudPC, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a specific cloudPC object.
 */
export interface CloudPCItemRequestBuilderGetQueryParameters {
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
export const CloudPCItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CloudPCItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CloudPCItemRequestBuilderNavigationMetadata: Record<Exclude<keyof CloudPCItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    endGracePeriod: {
        requestsMetadata: EndGracePeriodRequestBuilderRequestsMetadata,
    },
    reboot: {
        requestsMetadata: RebootRequestBuilderRequestsMetadata,
    },
    rename: {
        requestsMetadata: RenameRequestBuilderRequestsMetadata,
    },
    resize: {
        requestsMetadata: ResizeRequestBuilderRequestsMetadata,
    },
    restore: {
        requestsMetadata: RestoreRequestBuilderRequestsMetadata,
    },
    troubleshoot: {
        requestsMetadata: TroubleshootRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CloudPCItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: CloudPCItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: CloudPCItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudPCFromDiscriminatorValue,
        queryParametersMapper: CloudPCItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: CloudPCItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudPCFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCloudPC,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
