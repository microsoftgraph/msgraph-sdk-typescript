import {DelegatedAdminCustomerCollectionResponse} from '../../models/';
import {createDelegatedAdminCustomerCollectionResponseFromDiscriminatorValue} from '../../models/createDelegatedAdminCustomerCollectionResponseFromDiscriminatorValue';
import {createDelegatedAdminCustomerFromDiscriminatorValue} from '../../models/createDelegatedAdminCustomerFromDiscriminatorValue';
import type {DelegatedAdminCustomer} from '../../models/delegatedAdminCustomer';
import {deserializeIntoDelegatedAdminCustomer} from '../../models/deserializeIntoDelegatedAdminCustomer';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDelegatedAdminCustomer} from '../../models/serializeDelegatedAdminCustomer';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DelegatedAdminCustomersRequestBuilderGetRequestConfiguration} from './delegatedAdminCustomersRequestBuilderGetRequestConfiguration';
import {DelegatedAdminCustomersRequestBuilderPostRequestConfiguration} from './delegatedAdminCustomersRequestBuilderPostRequestConfiguration';
import {DelegatedAdminCustomerItemRequestBuilder} from './item/delegatedAdminCustomerItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the delegatedAdminCustomers property of the microsoft.graph.tenantRelationship entity.
 */
export class DelegatedAdminCustomersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the delegatedAdminCustomers property of the microsoft.graph.tenantRelationship entity.
     * @param delegatedAdminCustomerId The unique identifier of delegatedAdminCustomer
     * @returns a DelegatedAdminCustomerItemRequestBuilder
     */
    public byDelegatedAdminCustomerId(delegatedAdminCustomerId: string) : DelegatedAdminCustomerItemRequestBuilder {
        if(!delegatedAdminCustomerId) throw new Error("delegatedAdminCustomerId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["delegatedAdminCustomer%2Did"] = delegatedAdminCustomerId
        return new DelegatedAdminCustomerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DelegatedAdminCustomersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships/delegatedAdminCustomers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the delegatedAdminCustomer objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminCustomerCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/tenantrelationship-list-delegatedadmincustomers?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DelegatedAdminCustomersRequestBuilderGetRequestConfiguration | undefined) : Promise<DelegatedAdminCustomerCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminCustomerCollectionResponse>(requestInfo, createDelegatedAdminCustomerCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to delegatedAdminCustomers for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminCustomer
     */
    public post(body: DelegatedAdminCustomer, requestConfiguration?: DelegatedAdminCustomersRequestBuilderPostRequestConfiguration | undefined) : Promise<DelegatedAdminCustomer | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminCustomer>(requestInfo, createDelegatedAdminCustomerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the delegatedAdminCustomer objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DelegatedAdminCustomersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to delegatedAdminCustomers for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DelegatedAdminCustomer, requestConfiguration?: DelegatedAdminCustomersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDelegatedAdminCustomer);
        return requestInfo;
    };
}
