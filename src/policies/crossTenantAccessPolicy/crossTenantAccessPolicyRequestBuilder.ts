import {CrossTenantAccessPolicy} from '../../models/';
import {createCrossTenantAccessPolicyFromDiscriminatorValue} from '../../models/createCrossTenantAccessPolicyFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CrossTenantAccessPolicyRequestBuilderDeleteRequestConfiguration} from './crossTenantAccessPolicyRequestBuilderDeleteRequestConfiguration';
import {CrossTenantAccessPolicyRequestBuilderGetRequestConfiguration} from './crossTenantAccessPolicyRequestBuilderGetRequestConfiguration';
import {CrossTenantAccessPolicyRequestBuilderPatchRequestConfiguration} from './crossTenantAccessPolicyRequestBuilderPatchRequestConfiguration';
import {DefaultRequestBuilder} from './default_escaped/defaultRequestBuilder';
import {CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder} from './partners/item/crossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder';
import {PartnersRequestBuilder} from './partners/partnersRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the crossTenantAccessPolicy property of the microsoft.graph.policyRoot entity.
 */
export class CrossTenantAccessPolicyRequestBuilder {
    /** Provides operations to manage the default property of the microsoft.graph.crossTenantAccessPolicy entity. */
    public get default_escaped(): DefaultRequestBuilder {
        return new DefaultRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the partners property of the microsoft.graph.crossTenantAccessPolicy entity. */
    public get partners(): PartnersRequestBuilder {
        return new PartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new CrossTenantAccessPolicyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies/crossTenantAccessPolicy{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
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
     * Read the properties and relationships of a crossTenantAccessPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CrossTenantAccessPolicy
     * @see {@link https://docs.microsoft.com/graph/api/crosstenantaccesspolicy-get?view=graph-rest-1.0|Find more info here}
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
     * Provides operations to manage the partners property of the microsoft.graph.crossTenantAccessPolicy entity.
     * @param id Unique identifier of the item
     * @returns a CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder
     */
    public partnersById(id: string) : CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["crossTenantAccessPolicyConfigurationPartner%2DtenantId"] = id
        return new CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the properties of a cross-tenant access policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CrossTenantAccessPolicy
     * @see {@link https://docs.microsoft.com/graph/api/crosstenantaccesspolicy-update?view=graph-rest-1.0|Find more info here}
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
     * Read the properties and relationships of a crossTenantAccessPolicy object.
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
     * Update the properties of a cross-tenant access policy.
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
