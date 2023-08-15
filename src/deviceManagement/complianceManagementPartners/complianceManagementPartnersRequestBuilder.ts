import {ComplianceManagementPartnerCollectionResponse} from '../../models/';
import type {ComplianceManagementPartner} from '../../models/complianceManagementPartner';
import {createComplianceManagementPartnerCollectionResponseFromDiscriminatorValue} from '../../models/createComplianceManagementPartnerCollectionResponseFromDiscriminatorValue';
import {createComplianceManagementPartnerFromDiscriminatorValue} from '../../models/createComplianceManagementPartnerFromDiscriminatorValue';
import {deserializeIntoComplianceManagementPartner} from '../../models/deserializeIntoComplianceManagementPartner';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeComplianceManagementPartner} from '../../models/serializeComplianceManagementPartner';
import {ComplianceManagementPartnersRequestBuilderGetRequestConfiguration} from './complianceManagementPartnersRequestBuilderGetRequestConfiguration';
import {ComplianceManagementPartnersRequestBuilderPostRequestConfiguration} from './complianceManagementPartnersRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ComplianceManagementPartnerItemRequestBuilder} from './item/complianceManagementPartnerItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the complianceManagementPartners property of the microsoft.graph.deviceManagement entity.
 */
export class ComplianceManagementPartnersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the complianceManagementPartners property of the microsoft.graph.deviceManagement entity.
     * @param complianceManagementPartnerId The unique identifier of complianceManagementPartner
     * @returns a ComplianceManagementPartnerItemRequestBuilder
     */
    public byComplianceManagementPartnerId(complianceManagementPartnerId: string) : ComplianceManagementPartnerItemRequestBuilder {
        if(!complianceManagementPartnerId) throw new Error("complianceManagementPartnerId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["complianceManagementPartner%2Did"] = complianceManagementPartnerId
        return new ComplianceManagementPartnerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ComplianceManagementPartnersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/complianceManagementPartners{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the complianceManagementPartner objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ComplianceManagementPartnerCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-compliancemanagementpartner-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ComplianceManagementPartnersRequestBuilderGetRequestConfiguration | undefined) : Promise<ComplianceManagementPartnerCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ComplianceManagementPartnerCollectionResponse>(requestInfo, createComplianceManagementPartnerCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new complianceManagementPartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ComplianceManagementPartner
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-compliancemanagementpartner-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ComplianceManagementPartner, requestConfiguration?: ComplianceManagementPartnersRequestBuilderPostRequestConfiguration | undefined) : Promise<ComplianceManagementPartner | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ComplianceManagementPartner>(requestInfo, createComplianceManagementPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the complianceManagementPartner objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ComplianceManagementPartnersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new complianceManagementPartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ComplianceManagementPartner, requestConfiguration?: ComplianceManagementPartnersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeComplianceManagementPartner);
        return requestInfo;
    };
}
