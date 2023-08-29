import {createTenantAppManagementPolicyFromDiscriminatorValue} from '../../models/createTenantAppManagementPolicyFromDiscriminatorValue';
import {deserializeIntoTenantAppManagementPolicy} from '../../models/deserializeIntoTenantAppManagementPolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeTenantAppManagementPolicy} from '../../models/serializeTenantAppManagementPolicy';
import type {TenantAppManagementPolicy} from '../../models/tenantAppManagementPolicy';
import {DefaultAppManagementPolicyRequestBuilderDeleteRequestConfiguration} from './defaultAppManagementPolicyRequestBuilderDeleteRequestConfiguration';
import {DefaultAppManagementPolicyRequestBuilderGetRequestConfiguration} from './defaultAppManagementPolicyRequestBuilderGetRequestConfiguration';
import {DefaultAppManagementPolicyRequestBuilderPatchRequestConfiguration} from './defaultAppManagementPolicyRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the defaultAppManagementPolicy property of the microsoft.graph.policyRoot entity.
 */
export class DefaultAppManagementPolicyRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DefaultAppManagementPolicyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/defaultAppManagementPolicy{?%24select,%24expand}");
    };
    /**
     * Delete navigation property defaultAppManagementPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DefaultAppManagementPolicyRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties of a tenantAppManagementPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TenantAppManagementPolicy
     * @see {@link https://learn.microsoft.com/graph/api/tenantappmanagementpolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DefaultAppManagementPolicyRequestBuilderGetRequestConfiguration | undefined) : Promise<TenantAppManagementPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TenantAppManagementPolicy>(requestInfo, createTenantAppManagementPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a tenantAppManagementPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TenantAppManagementPolicy
     * @see {@link https://learn.microsoft.com/graph/api/tenantappmanagementpolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: TenantAppManagementPolicy, requestConfiguration?: DefaultAppManagementPolicyRequestBuilderPatchRequestConfiguration | undefined) : Promise<TenantAppManagementPolicy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TenantAppManagementPolicy>(requestInfo, createTenantAppManagementPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property defaultAppManagementPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DefaultAppManagementPolicyRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties of a tenantAppManagementPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DefaultAppManagementPolicyRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a tenantAppManagementPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TenantAppManagementPolicy, requestConfiguration?: DefaultAppManagementPolicyRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTenantAppManagementPolicy);
        return requestInfo;
    };
}
