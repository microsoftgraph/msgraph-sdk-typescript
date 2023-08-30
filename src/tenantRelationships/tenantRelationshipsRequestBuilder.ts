import {createTenantRelationshipFromDiscriminatorValue} from '../models/createTenantRelationshipFromDiscriminatorValue';
import {deserializeIntoTenantRelationship} from '../models/deserializeIntoTenantRelationship';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeTenantRelationship} from '../models/serializeTenantRelationship';
import type {TenantRelationship} from '../models/tenantRelationship';
import {DelegatedAdminCustomersRequestBuilder} from './delegatedAdminCustomers/delegatedAdminCustomersRequestBuilder';
import {DelegatedAdminRelationshipsRequestBuilder} from './delegatedAdminRelationships/delegatedAdminRelationshipsRequestBuilder';
import {FindTenantInformationByDomainNameWithDomainNameRequestBuilder} from './findTenantInformationByDomainNameWithDomainName/findTenantInformationByDomainNameWithDomainNameRequestBuilder';
import {FindTenantInformationByTenantIdWithTenantIdRequestBuilder} from './findTenantInformationByTenantIdWithTenantId/findTenantInformationByTenantIdWithTenantIdRequestBuilder';
import {TenantRelationshipsRequestBuilderGetRequestConfiguration} from './tenantRelationshipsRequestBuilderGetRequestConfiguration';
import {TenantRelationshipsRequestBuilderPatchRequestConfiguration} from './tenantRelationshipsRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tenantRelationship singleton.
 */
export class TenantRelationshipsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the delegatedAdminCustomers property of the microsoft.graph.tenantRelationship entity.
     */
    public get delegatedAdminCustomers(): DelegatedAdminCustomersRequestBuilder {
        return new DelegatedAdminCustomersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the delegatedAdminRelationships property of the microsoft.graph.tenantRelationship entity.
     */
    public get delegatedAdminRelationships(): DelegatedAdminRelationshipsRequestBuilder {
        return new DelegatedAdminRelationshipsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TenantRelationshipsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships{?%24select,%24expand}");
    };
    /**
     * Provides operations to call the findTenantInformationByDomainName method.
     * @param domainName Usage: domainName='{domainName}'
     * @returns a findTenantInformationByDomainNameWithDomainNameRequestBuilder
     */
    public findTenantInformationByDomainNameWithDomainName(domainName: string | undefined) : FindTenantInformationByDomainNameWithDomainNameRequestBuilder {
        if(!domainName) throw new Error("domainName cannot be undefined");
        return new FindTenantInformationByDomainNameWithDomainNameRequestBuilder(this.pathParameters, this.requestAdapter, domainName);
    };
    /**
     * Provides operations to call the findTenantInformationByTenantId method.
     * @param tenantId Usage: tenantId='{tenantId}'
     * @returns a findTenantInformationByTenantIdWithTenantIdRequestBuilder
     */
    public findTenantInformationByTenantIdWithTenantId(tenantId: string | undefined) : FindTenantInformationByTenantIdWithTenantIdRequestBuilder {
        if(!tenantId) throw new Error("tenantId cannot be undefined");
        return new FindTenantInformationByTenantIdWithTenantIdRequestBuilder(this.pathParameters, this.requestAdapter, tenantId);
    };
    /**
     * Get tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TenantRelationship
     */
    public get(requestConfiguration?: TenantRelationshipsRequestBuilderGetRequestConfiguration | undefined) : Promise<TenantRelationship | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TenantRelationship>(requestInfo, createTenantRelationshipFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TenantRelationship
     */
    public patch(body: TenantRelationship, requestConfiguration?: TenantRelationshipsRequestBuilderPatchRequestConfiguration | undefined) : Promise<TenantRelationship | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TenantRelationship>(requestInfo, createTenantRelationshipFromDiscriminatorValue, errorMapping);
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
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TenantRelationship, requestConfiguration?: TenantRelationshipsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTenantRelationship);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a tenantRelationshipsRequestBuilder
     */
    public withUrl(rawUrl: string) : TenantRelationshipsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TenantRelationshipsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
