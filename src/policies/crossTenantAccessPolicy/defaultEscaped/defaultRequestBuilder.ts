import {createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue} from '../../../models/createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue';
import type {CrossTenantAccessPolicyConfigurationDefault} from '../../../models/crossTenantAccessPolicyConfigurationDefault';
import {deserializeIntoCrossTenantAccessPolicyConfigurationDefault} from '../../../models/deserializeIntoCrossTenantAccessPolicyConfigurationDefault';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeCrossTenantAccessPolicyConfigurationDefault} from '../../../models/serializeCrossTenantAccessPolicyConfigurationDefault';
import {DefaultRequestBuilderDeleteRequestConfiguration} from './defaultRequestBuilderDeleteRequestConfiguration';
import {DefaultRequestBuilderGetRequestConfiguration} from './defaultRequestBuilderGetRequestConfiguration';
import {DefaultRequestBuilderPatchRequestConfiguration} from './defaultRequestBuilderPatchRequestConfiguration';
import {ResetToSystemDefaultRequestBuilder} from './resetToSystemDefault/resetToSystemDefaultRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the default property of the microsoft.graph.crossTenantAccessPolicy entity.
 */
export class DefaultRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the resetToSystemDefault method.
     */
    public get resetToSystemDefault(): ResetToSystemDefaultRequestBuilder {
        return new ResetToSystemDefaultRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DefaultRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/crossTenantAccessPolicy/default{?%24select,%24expand}");
    };
    /**
     * Delete navigation property default for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DefaultRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the default configuration of a cross-tenant access policy. This default configuration may be the service default assigned by Azure AD (isServiceDefault is true) or may be customized in your tenant (isServiceDefault is false).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CrossTenantAccessPolicyConfigurationDefault
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationdefault-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DefaultRequestBuilderGetRequestConfiguration | undefined) : Promise<CrossTenantAccessPolicyConfigurationDefault | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CrossTenantAccessPolicyConfigurationDefault>(requestInfo, createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the default configuration of a cross-tenant access policy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CrossTenantAccessPolicyConfigurationDefault
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationdefault-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: CrossTenantAccessPolicyConfigurationDefault, requestConfiguration?: DefaultRequestBuilderPatchRequestConfiguration | undefined) : Promise<CrossTenantAccessPolicyConfigurationDefault | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CrossTenantAccessPolicyConfigurationDefault>(requestInfo, createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property default for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DefaultRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the default configuration of a cross-tenant access policy. This default configuration may be the service default assigned by Azure AD (isServiceDefault is true) or may be customized in your tenant (isServiceDefault is false).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DefaultRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the default configuration of a cross-tenant access policy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: CrossTenantAccessPolicyConfigurationDefault, requestConfiguration?: DefaultRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCrossTenantAccessPolicyConfigurationDefault);
        return requestInfo;
    };
}
