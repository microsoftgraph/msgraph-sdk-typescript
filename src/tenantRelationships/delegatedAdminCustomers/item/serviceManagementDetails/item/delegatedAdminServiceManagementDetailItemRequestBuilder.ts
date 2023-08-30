import {createDelegatedAdminServiceManagementDetailFromDiscriminatorValue} from '../../../../../models/createDelegatedAdminServiceManagementDetailFromDiscriminatorValue';
import type {DelegatedAdminServiceManagementDetail} from '../../../../../models/delegatedAdminServiceManagementDetail';
import {deserializeIntoDelegatedAdminServiceManagementDetail} from '../../../../../models/deserializeIntoDelegatedAdminServiceManagementDetail';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDelegatedAdminServiceManagementDetail} from '../../../../../models/serializeDelegatedAdminServiceManagementDetail';
import {DelegatedAdminServiceManagementDetailItemRequestBuilderDeleteRequestConfiguration} from './delegatedAdminServiceManagementDetailItemRequestBuilderDeleteRequestConfiguration';
import {DelegatedAdminServiceManagementDetailItemRequestBuilderGetRequestConfiguration} from './delegatedAdminServiceManagementDetailItemRequestBuilderGetRequestConfiguration';
import {DelegatedAdminServiceManagementDetailItemRequestBuilderPatchRequestConfiguration} from './delegatedAdminServiceManagementDetailItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the serviceManagementDetails property of the microsoft.graph.delegatedAdminCustomer entity.
 */
export class DelegatedAdminServiceManagementDetailItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DelegatedAdminServiceManagementDetailItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer%2Did}/serviceManagementDetails/{delegatedAdminServiceManagementDetail%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property serviceManagementDetails for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DelegatedAdminServiceManagementDetailItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Contains the management details of a service in the customer tenant that's managed by delegated administration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminServiceManagementDetail
     */
    public get(requestConfiguration?: DelegatedAdminServiceManagementDetailItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DelegatedAdminServiceManagementDetail | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminServiceManagementDetail>(requestInfo, createDelegatedAdminServiceManagementDetailFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property serviceManagementDetails in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminServiceManagementDetail
     */
    public patch(body: DelegatedAdminServiceManagementDetail, requestConfiguration?: DelegatedAdminServiceManagementDetailItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DelegatedAdminServiceManagementDetail | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminServiceManagementDetail>(requestInfo, createDelegatedAdminServiceManagementDetailFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property serviceManagementDetails for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DelegatedAdminServiceManagementDetailItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Contains the management details of a service in the customer tenant that's managed by delegated administration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DelegatedAdminServiceManagementDetailItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property serviceManagementDetails in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DelegatedAdminServiceManagementDetail, requestConfiguration?: DelegatedAdminServiceManagementDetailItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDelegatedAdminServiceManagementDetail);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DelegatedAdminServiceManagementDetailItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DelegatedAdminServiceManagementDetailItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DelegatedAdminServiceManagementDetailItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
