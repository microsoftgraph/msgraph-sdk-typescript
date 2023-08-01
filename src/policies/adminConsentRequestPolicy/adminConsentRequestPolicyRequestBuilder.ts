import type {AdminConsentRequestPolicy} from '../../models/adminConsentRequestPolicy';
import {createAdminConsentRequestPolicyFromDiscriminatorValue} from '../../models/createAdminConsentRequestPolicyFromDiscriminatorValue';
import {deserializeIntoAdminConsentRequestPolicy} from '../../models/deserializeIntoAdminConsentRequestPolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeAdminConsentRequestPolicy} from '../../models/serializeAdminConsentRequestPolicy';
import {AdminConsentRequestPolicyRequestBuilderDeleteRequestConfiguration} from './adminConsentRequestPolicyRequestBuilderDeleteRequestConfiguration';
import {AdminConsentRequestPolicyRequestBuilderGetRequestConfiguration} from './adminConsentRequestPolicyRequestBuilderGetRequestConfiguration';
import {AdminConsentRequestPolicyRequestBuilderPatchRequestConfiguration} from './adminConsentRequestPolicyRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the adminConsentRequestPolicy property of the microsoft.graph.policyRoot entity.
 */
export class AdminConsentRequestPolicyRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AdminConsentRequestPolicyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/adminConsentRequestPolicy{?%24select,%24expand}");
    };
    /**
     * Delete navigation property adminConsentRequestPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AdminConsentRequestPolicyRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an adminConsentRequestPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AdminConsentRequestPolicy
     * @see {@link https://learn.microsoft.com/graph/api/adminconsentrequestpolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AdminConsentRequestPolicyRequestBuilderGetRequestConfiguration | undefined) : Promise<AdminConsentRequestPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AdminConsentRequestPolicy>(requestInfo, createAdminConsentRequestPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an adminConsentRequestPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AdminConsentRequestPolicy
     * @see {@link https://learn.microsoft.com/graph/api/adminconsentrequestpolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: AdminConsentRequestPolicy | undefined, requestConfiguration?: AdminConsentRequestPolicyRequestBuilderPatchRequestConfiguration | undefined) : Promise<AdminConsentRequestPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AdminConsentRequestPolicy>(requestInfo, createAdminConsentRequestPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property adminConsentRequestPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AdminConsentRequestPolicyRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an adminConsentRequestPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AdminConsentRequestPolicyRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an adminConsentRequestPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AdminConsentRequestPolicy | undefined, requestConfiguration?: AdminConsentRequestPolicyRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAdminConsentRequestPolicy);
        return requestInfo;
    };
}
