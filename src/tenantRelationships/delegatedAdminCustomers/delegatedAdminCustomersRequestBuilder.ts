import {DelegatedAdminCustomer, DelegatedAdminCustomerCollectionResponse} from '../../models/';
import {createDelegatedAdminCustomerCollectionResponseFromDiscriminatorValue} from '../../models/createDelegatedAdminCustomerCollectionResponseFromDiscriminatorValue';
import {createDelegatedAdminCustomerFromDiscriminatorValue} from '../../models/createDelegatedAdminCustomerFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DelegatedAdminCustomersRequestBuilderGetRequestConfiguration} from './delegatedAdminCustomersRequestBuilderGetRequestConfiguration';
import {DelegatedAdminCustomersRequestBuilderPostRequestConfiguration} from './delegatedAdminCustomersRequestBuilderPostRequestConfiguration';
import {DelegatedAdminCustomerItemRequestBuilder} from './item/delegatedAdminCustomerItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the delegatedAdminCustomers property of the microsoft.graph.tenantRelationship entity.
 */
export class DelegatedAdminCustomersRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the delegatedAdminCustomers property of the microsoft.graph.tenantRelationship entity.
     * @param delegatedAdminCustomerId Unique identifier of the item
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
     * The customer who has a delegated admin relationship with a Microsoft partner.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DelegatedAdminCustomerCollectionResponse
     */
    public get(requestConfiguration?: DelegatedAdminCustomersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DelegatedAdminCustomerCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DelegatedAdminCustomerCollectionResponse>(requestInfo, createDelegatedAdminCustomerCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to delegatedAdminCustomers for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DelegatedAdminCustomer
     */
    public post(body: DelegatedAdminCustomer | undefined, requestConfiguration?: DelegatedAdminCustomersRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DelegatedAdminCustomer | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DelegatedAdminCustomer>(requestInfo, createDelegatedAdminCustomerFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The customer who has a delegated admin relationship with a Microsoft partner.
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
    public toPostRequestInformation(body: DelegatedAdminCustomer | undefined, requestConfiguration?: DelegatedAdminCustomersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
