import {DelegatedAdminServiceManagementDetailCollectionResponse} from '../../../../models/';
import {createDelegatedAdminServiceManagementDetailCollectionResponseFromDiscriminatorValue} from '../../../../models/createDelegatedAdminServiceManagementDetailCollectionResponseFromDiscriminatorValue';
import {createDelegatedAdminServiceManagementDetailFromDiscriminatorValue} from '../../../../models/createDelegatedAdminServiceManagementDetailFromDiscriminatorValue';
import {DelegatedAdminServiceManagementDetail} from '../../../../models/delegatedAdminServiceManagementDetail';
import {deserializeIntoDelegatedAdminServiceManagementDetail} from '../../../../models/deserializeIntoDelegatedAdminServiceManagementDetail';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDelegatedAdminServiceManagementDetail} from '../../../../models/serializeDelegatedAdminServiceManagementDetail';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DelegatedAdminServiceManagementDetailItemRequestBuilder} from './item/delegatedAdminServiceManagementDetailItemRequestBuilder';
import {ServiceManagementDetailsRequestBuilderGetRequestConfiguration} from './serviceManagementDetailsRequestBuilderGetRequestConfiguration';
import {ServiceManagementDetailsRequestBuilderPostRequestConfiguration} from './serviceManagementDetailsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the serviceManagementDetails property of the microsoft.graph.delegatedAdminCustomer entity.
 */
export class ServiceManagementDetailsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the serviceManagementDetails property of the microsoft.graph.delegatedAdminCustomer entity.
     * @param delegatedAdminServiceManagementDetailId Unique identifier of the item
     * @returns a DelegatedAdminServiceManagementDetailItemRequestBuilder
     */
    public byDelegatedAdminServiceManagementDetailId(delegatedAdminServiceManagementDetailId: string) : DelegatedAdminServiceManagementDetailItemRequestBuilder {
        if(!delegatedAdminServiceManagementDetailId) throw new Error("delegatedAdminServiceManagementDetailId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["delegatedAdminServiceManagementDetail%2Did"] = delegatedAdminServiceManagementDetailId
        return new DelegatedAdminServiceManagementDetailItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ServiceManagementDetailsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer%2Did}/serviceManagementDetails{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Contains the management details of a service in the customer tenant that's managed by delegated administration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DelegatedAdminServiceManagementDetailCollectionResponse
     */
    public get(requestConfiguration?: ServiceManagementDetailsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DelegatedAdminServiceManagementDetailCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DelegatedAdminServiceManagementDetailCollectionResponse>(requestInfo, createDelegatedAdminServiceManagementDetailCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to serviceManagementDetails for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DelegatedAdminServiceManagementDetail
     */
    public post(body: DelegatedAdminServiceManagementDetail | undefined, requestConfiguration?: ServiceManagementDetailsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DelegatedAdminServiceManagementDetail | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DelegatedAdminServiceManagementDetail>(requestInfo, createDelegatedAdminServiceManagementDetailFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Contains the management details of a service in the customer tenant that's managed by delegated administration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ServiceManagementDetailsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to serviceManagementDetails for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DelegatedAdminServiceManagementDetail | undefined, requestConfiguration?: ServiceManagementDetailsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDelegatedAdminServiceManagementDetail);
        return requestInfo;
    };
}
