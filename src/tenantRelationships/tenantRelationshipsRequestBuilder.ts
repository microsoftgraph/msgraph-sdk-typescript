import {TenantRelationship} from '../models/';
import {createTenantRelationshipFromDiscriminatorValue} from '../models/createTenantRelationshipFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {DelegatedAdminCustomersRequestBuilder} from './delegatedAdminCustomers/delegatedAdminCustomersRequestBuilder';
import {DelegatedAdminCustomerItemRequestBuilder} from './delegatedAdminCustomers/item/delegatedAdminCustomerItemRequestBuilder';
import {DelegatedAdminRelationshipsRequestBuilder} from './delegatedAdminRelationships/delegatedAdminRelationshipsRequestBuilder';
import {DelegatedAdminRelationshipItemRequestBuilder} from './delegatedAdminRelationships/item/delegatedAdminRelationshipItemRequestBuilder';
import {TenantRelationshipsRequestBuilderGetRequestConfiguration} from './tenantRelationshipsRequestBuilderGetRequestConfiguration';
import {TenantRelationshipsRequestBuilderPatchRequestConfiguration} from './tenantRelationshipsRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tenantRelationship singleton.
 */
export class TenantRelationshipsRequestBuilder {
    /** Provides operations to manage the delegatedAdminCustomers property of the microsoft.graph.tenantRelationship entity. */
    public get delegatedAdminCustomers(): DelegatedAdminCustomersRequestBuilder {
        return new DelegatedAdminCustomersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the delegatedAdminRelationships property of the microsoft.graph.tenantRelationship entity. */
    public get delegatedAdminRelationships(): DelegatedAdminRelationshipsRequestBuilder {
        return new DelegatedAdminRelationshipsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new TenantRelationshipsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/tenantRelationships{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Provides operations to manage the delegatedAdminCustomers property of the microsoft.graph.tenantRelationship entity.
     * @param id Unique identifier of the item
     * @returns a DelegatedAdminCustomerItemRequestBuilder
     */
    public delegatedAdminCustomersById(id: string) : DelegatedAdminCustomerItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["delegatedAdminCustomer%2Did"] = id
        return new DelegatedAdminCustomerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the delegatedAdminRelationships property of the microsoft.graph.tenantRelationship entity.
     * @param id Unique identifier of the item
     * @returns a DelegatedAdminRelationshipItemRequestBuilder
     */
    public delegatedAdminRelationshipsById(id: string) : DelegatedAdminRelationshipItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["delegatedAdminRelationship%2Did"] = id
        return new DelegatedAdminRelationshipItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TenantRelationship
     */
    public get(requestConfiguration?: TenantRelationshipsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TenantRelationship | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TenantRelationship>(requestInfo, createTenantRelationshipFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TenantRelationship
     */
    public patch(body: TenantRelationship | undefined, requestConfiguration?: TenantRelationshipsRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TenantRelationship | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TenantRelationship>(requestInfo, createTenantRelationshipFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TenantRelationshipsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TenantRelationship | undefined, requestConfiguration?: TenantRelationshipsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
