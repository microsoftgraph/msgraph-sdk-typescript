import {CrossTenantAccessPolicy} from '../../models/';
import {createCrossTenantAccessPolicyFromDiscriminatorValue} from '../../models/createCrossTenantAccessPolicyFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CrossTenantAccessPolicyRequestBuilderDeleteRequestConfiguration} from './crossTenantAccessPolicyRequestBuilderDeleteRequestConfiguration';
import {CrossTenantAccessPolicyRequestBuilderGetRequestConfiguration} from './crossTenantAccessPolicyRequestBuilderGetRequestConfiguration';
import {CrossTenantAccessPolicyRequestBuilderPatchRequestConfiguration} from './crossTenantAccessPolicyRequestBuilderPatchRequestConfiguration';
import {DefaultRequestBuilder} from './defaultEscaped/defaultRequestBuilder';
import {PartnersRequestBuilder} from './partners/partnersRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the crossTenantAccessPolicy property of the microsoft.graph.policyRoot entity.
 */
export class CrossTenantAccessPolicyRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the default property of the microsoft.graph.crossTenantAccessPolicy entity. */
    public get defaultEscaped(): DefaultRequestBuilder {
        return new DefaultRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the partners property of the microsoft.graph.crossTenantAccessPolicy entity. */
    public get partners(): PartnersRequestBuilder {
        return new PartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new CrossTenantAccessPolicyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/crossTenantAccessPolicy{?%24select,%24expand}");
    };
    /**
     * Delete navigation property crossTenantAccessPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: CrossTenantAccessPolicyRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The custom rules that define an access scenario when interacting with external Azure AD tenants.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CrossTenantAccessPolicy
     */
    public get(requestConfiguration?: CrossTenantAccessPolicyRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CrossTenantAccessPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<CrossTenantAccessPolicy>(requestInfo, createCrossTenantAccessPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property crossTenantAccessPolicy in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CrossTenantAccessPolicy
     */
    public patch(body: CrossTenantAccessPolicy | undefined, requestConfiguration?: CrossTenantAccessPolicyRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CrossTenantAccessPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<CrossTenantAccessPolicy>(requestInfo, createCrossTenantAccessPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property crossTenantAccessPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: CrossTenantAccessPolicyRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The custom rules that define an access scenario when interacting with external Azure AD tenants.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CrossTenantAccessPolicyRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property crossTenantAccessPolicy in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: CrossTenantAccessPolicy | undefined, requestConfiguration?: CrossTenantAccessPolicyRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
