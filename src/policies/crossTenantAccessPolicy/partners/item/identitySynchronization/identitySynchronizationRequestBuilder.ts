import {createCrossTenantIdentitySyncPolicyPartnerFromDiscriminatorValue} from '../../../../../models/createCrossTenantIdentitySyncPolicyPartnerFromDiscriminatorValue';
import type {CrossTenantIdentitySyncPolicyPartner} from '../../../../../models/crossTenantIdentitySyncPolicyPartner';
import {deserializeIntoCrossTenantIdentitySyncPolicyPartner} from '../../../../../models/deserializeIntoCrossTenantIdentitySyncPolicyPartner';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeCrossTenantIdentitySyncPolicyPartner} from '../../../../../models/serializeCrossTenantIdentitySyncPolicyPartner';
import {IdentitySynchronizationRequestBuilderDeleteRequestConfiguration} from './identitySynchronizationRequestBuilderDeleteRequestConfiguration';
import {IdentitySynchronizationRequestBuilderGetRequestConfiguration} from './identitySynchronizationRequestBuilderGetRequestConfiguration';
import {IdentitySynchronizationRequestBuilderPatchRequestConfiguration} from './identitySynchronizationRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the identitySynchronization property of the microsoft.graph.crossTenantAccessPolicyConfigurationPartner entity.
 */
export class IdentitySynchronizationRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new IdentitySynchronizationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner%2DtenantId}/identitySynchronization{?%24select,%24expand}");
    };
    /**
     * Delete the user synchronization policy for a partner-specific configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantidentitysyncpolicypartner-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: IdentitySynchronizationRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get the user synchronization policy of a partner-specific configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CrossTenantIdentitySyncPolicyPartner
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantidentitysyncpolicypartner-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IdentitySynchronizationRequestBuilderGetRequestConfiguration | undefined) : Promise<CrossTenantIdentitySyncPolicyPartner | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CrossTenantIdentitySyncPolicyPartner>(requestInfo, createCrossTenantIdentitySyncPolicyPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a cross-tenant user synchronization policy for a partner-specific configuration.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CrossTenantIdentitySyncPolicyPartner
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationpartner-put-identitysynchronization?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: CrossTenantIdentitySyncPolicyPartner, requestConfiguration?: IdentitySynchronizationRequestBuilderPatchRequestConfiguration | undefined) : Promise<CrossTenantIdentitySyncPolicyPartner | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CrossTenantIdentitySyncPolicyPartner>(requestInfo, createCrossTenantIdentitySyncPolicyPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete the user synchronization policy for a partner-specific configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: IdentitySynchronizationRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the user synchronization policy of a partner-specific configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IdentitySynchronizationRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a cross-tenant user synchronization policy for a partner-specific configuration.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: CrossTenantIdentitySyncPolicyPartner, requestConfiguration?: IdentitySynchronizationRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCrossTenantIdentitySyncPolicyPartner);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a identitySynchronizationRequestBuilder
     */
    public withUrl(rawUrl: string) : IdentitySynchronizationRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new IdentitySynchronizationRequestBuilder(rawUrl, this.requestAdapter);
    };
}
