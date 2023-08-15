import {ProvisioningObjectSummaryCollectionResponse} from '../../models/';
import {createProvisioningObjectSummaryCollectionResponseFromDiscriminatorValue} from '../../models/createProvisioningObjectSummaryCollectionResponseFromDiscriminatorValue';
import {createProvisioningObjectSummaryFromDiscriminatorValue} from '../../models/createProvisioningObjectSummaryFromDiscriminatorValue';
import {deserializeIntoProvisioningObjectSummary} from '../../models/deserializeIntoProvisioningObjectSummary';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import type {ProvisioningObjectSummary} from '../../models/provisioningObjectSummary';
import {serializeProvisioningObjectSummary} from '../../models/serializeProvisioningObjectSummary';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ProvisioningObjectSummaryItemRequestBuilder} from './item/provisioningObjectSummaryItemRequestBuilder';
import {ProvisioningRequestBuilderGetRequestConfiguration} from './provisioningRequestBuilderGetRequestConfiguration';
import {ProvisioningRequestBuilderPostRequestConfiguration} from './provisioningRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the provisioning property of the microsoft.graph.auditLogRoot entity.
 */
export class ProvisioningRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the provisioning property of the microsoft.graph.auditLogRoot entity.
     * @param provisioningObjectSummaryId The unique identifier of provisioningObjectSummary
     * @returns a ProvisioningObjectSummaryItemRequestBuilder
     */
    public byProvisioningObjectSummaryId(provisioningObjectSummaryId: string) : ProvisioningObjectSummaryItemRequestBuilder {
        if(!provisioningObjectSummaryId) throw new Error("provisioningObjectSummaryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["provisioningObjectSummary%2Did"] = provisioningObjectSummaryId
        return new ProvisioningObjectSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ProvisioningRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/auditLogs/provisioning{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get all provisioning events that occurred in your tenant, such as the deletion of a group in a target application or the creation of a user when provisioning user accounts from your HR system. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProvisioningObjectSummaryCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/provisioningobjectsummary-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ProvisioningRequestBuilderGetRequestConfiguration | undefined) : Promise<ProvisioningObjectSummaryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ProvisioningObjectSummaryCollectionResponse>(requestInfo, createProvisioningObjectSummaryCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to provisioning for auditLogs
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProvisioningObjectSummary
     */
    public post(body: ProvisioningObjectSummary, requestConfiguration?: ProvisioningRequestBuilderPostRequestConfiguration | undefined) : Promise<ProvisioningObjectSummary | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ProvisioningObjectSummary>(requestInfo, createProvisioningObjectSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get all provisioning events that occurred in your tenant, such as the deletion of a group in a target application or the creation of a user when provisioning user accounts from your HR system. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ProvisioningRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to provisioning for auditLogs
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ProvisioningObjectSummary, requestConfiguration?: ProvisioningRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeProvisioningObjectSummary);
        return requestInfo;
    };
}
