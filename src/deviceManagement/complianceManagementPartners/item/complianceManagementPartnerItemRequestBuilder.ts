import {ComplianceManagementPartner} from '../../../models/complianceManagementPartner';
import {createComplianceManagementPartnerFromDiscriminatorValue} from '../../../models/createComplianceManagementPartnerFromDiscriminatorValue';
import {deserializeIntoComplianceManagementPartner} from '../../../models/deserializeIntoComplianceManagementPartner';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeComplianceManagementPartner} from '../../../models/serializeComplianceManagementPartner';
import {ComplianceManagementPartnerItemRequestBuilderDeleteRequestConfiguration} from './complianceManagementPartnerItemRequestBuilderDeleteRequestConfiguration';
import {ComplianceManagementPartnerItemRequestBuilderGetRequestConfiguration} from './complianceManagementPartnerItemRequestBuilderGetRequestConfiguration';
import {ComplianceManagementPartnerItemRequestBuilderPatchRequestConfiguration} from './complianceManagementPartnerItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @see {@link https://docs.microsoft.com/graph/api/intune-onboarding-compliancemanagementpartner-delete?view=graph-rest-1.0|Find more info here}
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
     * @see {@link https://docs.microsoft.com/graph/api/intune-onboarding-compliancemanagementpartner-get?view=graph-rest-1.0|Find more info here}
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
     * @see {@link https://docs.microsoft.com/graph/api/intune-onboarding-compliancemanagementpartner-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ComplianceManagementPartner | undefined, requestConfiguration?: ComplianceManagementPartnerItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ComplianceManagementPartner | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
    public toPatchRequestInformation(body: ComplianceManagementPartner | undefined, requestConfiguration?: ComplianceManagementPartnerItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeComplianceManagementPartner);
        return requestInfo;
    };
}
