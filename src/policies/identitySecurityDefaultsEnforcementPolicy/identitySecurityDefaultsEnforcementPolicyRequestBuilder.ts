import {createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue} from '../../models/createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue';
import {deserializeIntoIdentitySecurityDefaultsEnforcementPolicy} from '../../models/deserializeIntoIdentitySecurityDefaultsEnforcementPolicy';
import {IdentitySecurityDefaultsEnforcementPolicy} from '../../models/identitySecurityDefaultsEnforcementPolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeIdentitySecurityDefaultsEnforcementPolicy} from '../../models/serializeIdentitySecurityDefaultsEnforcementPolicy';
import {IdentitySecurityDefaultsEnforcementPolicyRequestBuilderDeleteRequestConfiguration} from './identitySecurityDefaultsEnforcementPolicyRequestBuilderDeleteRequestConfiguration';
import {IdentitySecurityDefaultsEnforcementPolicyRequestBuilderGetRequestConfiguration} from './identitySecurityDefaultsEnforcementPolicyRequestBuilderGetRequestConfiguration';
import {IdentitySecurityDefaultsEnforcementPolicyRequestBuilderPatchRequestConfiguration} from './identitySecurityDefaultsEnforcementPolicyRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the identitySecurityDefaultsEnforcementPolicy property of the microsoft.graph.policyRoot entity.
 */
export class IdentitySecurityDefaultsEnforcementPolicyRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new IdentitySecurityDefaultsEnforcementPolicyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/identitySecurityDefaultsEnforcementPolicy{?%24select,%24expand}");
    };
    /**
     * Delete navigation property identitySecurityDefaultsEnforcementPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: IdentitySecurityDefaultsEnforcementPolicyRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The policy that represents the security defaults that protect against common attacks.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentitySecurityDefaultsEnforcementPolicy
     */
    public get(requestConfiguration?: IdentitySecurityDefaultsEnforcementPolicyRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentitySecurityDefaultsEnforcementPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<IdentitySecurityDefaultsEnforcementPolicy>(requestInfo, createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property identitySecurityDefaultsEnforcementPolicy in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentitySecurityDefaultsEnforcementPolicy
     */
    public patch(body: IdentitySecurityDefaultsEnforcementPolicy | undefined, requestConfiguration?: IdentitySecurityDefaultsEnforcementPolicyRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentitySecurityDefaultsEnforcementPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<IdentitySecurityDefaultsEnforcementPolicy>(requestInfo, createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property identitySecurityDefaultsEnforcementPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: IdentitySecurityDefaultsEnforcementPolicyRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The policy that represents the security defaults that protect against common attacks.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IdentitySecurityDefaultsEnforcementPolicyRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property identitySecurityDefaultsEnforcementPolicy in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IdentitySecurityDefaultsEnforcementPolicy | undefined, requestConfiguration?: IdentitySecurityDefaultsEnforcementPolicyRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIdentitySecurityDefaultsEnforcementPolicy);
        return requestInfo;
    };
}
