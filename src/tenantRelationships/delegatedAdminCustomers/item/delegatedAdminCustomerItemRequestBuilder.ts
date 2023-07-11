import {createDelegatedAdminCustomerFromDiscriminatorValue} from '../../../models/createDelegatedAdminCustomerFromDiscriminatorValue';
import {DelegatedAdminCustomer} from '../../../models/delegatedAdminCustomer';
import {deserializeIntoDelegatedAdminCustomer} from '../../../models/deserializeIntoDelegatedAdminCustomer';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeDelegatedAdminCustomer} from '../../../models/serializeDelegatedAdminCustomer';
import {DelegatedAdminCustomerItemRequestBuilderDeleteRequestConfiguration} from './delegatedAdminCustomerItemRequestBuilderDeleteRequestConfiguration';
import {DelegatedAdminCustomerItemRequestBuilderGetRequestConfiguration} from './delegatedAdminCustomerItemRequestBuilderGetRequestConfiguration';
import {DelegatedAdminCustomerItemRequestBuilderPatchRequestConfiguration} from './delegatedAdminCustomerItemRequestBuilderPatchRequestConfiguration';
import {ServiceManagementDetailsRequestBuilder} from './serviceManagementDetails/serviceManagementDetailsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the delegatedAdminCustomers property of the microsoft.graph.tenantRelationship entity.
 */
export class DelegatedAdminCustomerItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the serviceManagementDetails property of the microsoft.graph.delegatedAdminCustomer entity.
     */
    public get serviceManagementDetails(): ServiceManagementDetailsRequestBuilder {
        return new ServiceManagementDetailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DelegatedAdminCustomerItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property delegatedAdminCustomers for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DelegatedAdminCustomerItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties of a delegatedAdminCustomer object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminCustomer
     * @see {@link https://docs.microsoft.com/graph/api/delegatedadmincustomer-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DelegatedAdminCustomerItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DelegatedAdminCustomer | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminCustomer>(requestInfo, createDelegatedAdminCustomerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property delegatedAdminCustomers in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminCustomer
     */
    public patch(body: DelegatedAdminCustomer | undefined, requestConfiguration?: DelegatedAdminCustomerItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DelegatedAdminCustomer | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminCustomer>(requestInfo, createDelegatedAdminCustomerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property delegatedAdminCustomers for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DelegatedAdminCustomerItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties of a delegatedAdminCustomer object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DelegatedAdminCustomerItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property delegatedAdminCustomers in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DelegatedAdminCustomer | undefined, requestConfiguration?: DelegatedAdminCustomerItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDelegatedAdminCustomer);
        return requestInfo;
    };
}
