import {createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue} from '../../../../models/createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue';
import type {CrossTenantAccessPolicyConfigurationPartner} from '../../../../models/crossTenantAccessPolicyConfigurationPartner';
import {deserializeIntoCrossTenantAccessPolicyConfigurationPartner} from '../../../../models/deserializeIntoCrossTenantAccessPolicyConfigurationPartner';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeCrossTenantAccessPolicyConfigurationPartner} from '../../../../models/serializeCrossTenantAccessPolicyConfigurationPartner';
import {CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderDeleteRequestConfiguration} from './crossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderDeleteRequestConfiguration';
import {CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderGetRequestConfiguration} from './crossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderGetRequestConfiguration';
import {CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderPatchRequestConfiguration} from './crossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderPatchRequestConfiguration';
import {IdentitySynchronizationRequestBuilder} from './identitySynchronization/identitySynchronizationRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the partners property of the microsoft.graph.crossTenantAccessPolicy entity.
 */
export class CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the identitySynchronization property of the microsoft.graph.crossTenantAccessPolicyConfigurationPartner entity.
     */
    public get identitySynchronization(): IdentitySynchronizationRequestBuilder {
        return new IdentitySynchronizationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner%2DtenantId}{?%24select,%24expand}");
    };
    /**
     * Delete a partner-specific configuration in a cross-tenant access policy. If a configuration includes a user synchronization policy, you must first delete the user synchronization policy before you can delete the partner-specific configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationpartner-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a partner-specific configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CrossTenantAccessPolicyConfigurationPartner
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationpartner-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderGetRequestConfiguration | undefined) : Promise<CrossTenantAccessPolicyConfigurationPartner | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CrossTenantAccessPolicyConfigurationPartner>(requestInfo, createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a partner-specific configuration.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CrossTenantAccessPolicyConfigurationPartner
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationpartner-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: CrossTenantAccessPolicyConfigurationPartner, requestConfiguration?: CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<CrossTenantAccessPolicyConfigurationPartner | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CrossTenantAccessPolicyConfigurationPartner>(requestInfo, createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a partner-specific configuration in a cross-tenant access policy. If a configuration includes a user synchronization policy, you must first delete the user synchronization policy before you can delete the partner-specific configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a partner-specific configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a partner-specific configuration.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: CrossTenantAccessPolicyConfigurationPartner, requestConfiguration?: CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCrossTenantAccessPolicyConfigurationPartner);
        return requestInfo;
    };
}
