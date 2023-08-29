import {createProvisioningObjectSummaryFromDiscriminatorValue} from '../../../models/createProvisioningObjectSummaryFromDiscriminatorValue';
import {deserializeIntoProvisioningObjectSummary} from '../../../models/deserializeIntoProvisioningObjectSummary';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import type {ProvisioningObjectSummary} from '../../../models/provisioningObjectSummary';
import {serializeProvisioningObjectSummary} from '../../../models/serializeProvisioningObjectSummary';
import {ProvisioningObjectSummaryItemRequestBuilderDeleteRequestConfiguration} from './provisioningObjectSummaryItemRequestBuilderDeleteRequestConfiguration';
import {ProvisioningObjectSummaryItemRequestBuilderGetRequestConfiguration} from './provisioningObjectSummaryItemRequestBuilderGetRequestConfiguration';
import {ProvisioningObjectSummaryItemRequestBuilderPatchRequestConfiguration} from './provisioningObjectSummaryItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the provisioning property of the microsoft.graph.auditLogRoot entity.
 */
export class ProvisioningObjectSummaryItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ProvisioningObjectSummaryItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/auditLogs/provisioning/{provisioningObjectSummary%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property provisioning for auditLogs
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ProvisioningObjectSummaryItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Get provisioning from auditLogs
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProvisioningObjectSummary
     */
    public get(requestConfiguration?: ProvisioningObjectSummaryItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ProvisioningObjectSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ProvisioningObjectSummary>(requestInfo, createProvisioningObjectSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property provisioning in auditLogs
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProvisioningObjectSummary
     */
    public patch(body: ProvisioningObjectSummary, requestConfiguration?: ProvisioningObjectSummaryItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ProvisioningObjectSummary | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ProvisioningObjectSummary>(requestInfo, createProvisioningObjectSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property provisioning for auditLogs
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ProvisioningObjectSummaryItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Get provisioning from auditLogs
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ProvisioningObjectSummaryItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property provisioning in auditLogs
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ProvisioningObjectSummary, requestConfiguration?: ProvisioningObjectSummaryItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeProvisioningObjectSummary);
        return requestInfo;
    };
}
