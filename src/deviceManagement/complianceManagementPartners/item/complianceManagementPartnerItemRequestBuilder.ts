import { createComplianceManagementPartnerFromDiscriminatorValue, deserializeIntoComplianceManagementPartner, serializeComplianceManagementPartner, type ComplianceManagementPartner } from '../../../models/complianceManagementPartner';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ComplianceManagementPartnerItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface ComplianceManagementPartnerItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface ComplianceManagementPartnerItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: ComplianceManagementPartnerItemRequestBuilderGetQueryParameters;
}
export interface ComplianceManagementPartnerItemRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the complianceManagementPartners property of the microsoft.graph.deviceManagement entity.
 */
export class ComplianceManagementPartnerItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ComplianceManagementPartnerItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/complianceManagementPartners/{complianceManagementPartner%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a complianceManagementPartner.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-compliancemanagementpartner-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ComplianceManagementPartnerItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the complianceManagementPartner object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ComplianceManagementPartner
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-compliancemanagementpartner-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ComplianceManagementPartnerItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ComplianceManagementPartner | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ComplianceManagementPartner>(requestInfo, createComplianceManagementPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a complianceManagementPartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ComplianceManagementPartner
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-compliancemanagementpartner-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ComplianceManagementPartner, requestConfiguration?: ComplianceManagementPartnerItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ComplianceManagementPartner | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ComplianceManagementPartner>(requestInfo, createComplianceManagementPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a complianceManagementPartner.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ComplianceManagementPartnerItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the complianceManagementPartner object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ComplianceManagementPartnerItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a complianceManagementPartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ComplianceManagementPartner, requestConfiguration?: ComplianceManagementPartnerItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeComplianceManagementPartner);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ComplianceManagementPartnerItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ComplianceManagementPartnerItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ComplianceManagementPartnerItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
