import {ManagedAppPolicyCollectionResponse} from '../../../../models/';
import {createManagedAppPolicyCollectionResponseFromDiscriminatorValue} from '../../../../models/createManagedAppPolicyCollectionResponseFromDiscriminatorValue';
import {createManagedAppPolicyFromDiscriminatorValue} from '../../../../models/createManagedAppPolicyFromDiscriminatorValue';
import {deserializeIntoManagedAppPolicy} from '../../../../models/deserializeIntoManagedAppPolicy';
import type {ManagedAppPolicy} from '../../../../models/managedAppPolicy';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeManagedAppPolicy} from '../../../../models/serializeManagedAppPolicy';
import {AppliedPoliciesRequestBuilderGetRequestConfiguration} from './appliedPoliciesRequestBuilderGetRequestConfiguration';
import {AppliedPoliciesRequestBuilderPostRequestConfiguration} from './appliedPoliciesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ManagedAppPolicyItemRequestBuilder} from './item/managedAppPolicyItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appliedPolicies property of the microsoft.graph.managedAppRegistration entity.
 */
export class AppliedPoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the appliedPolicies property of the microsoft.graph.managedAppRegistration entity.
     * @param managedAppPolicyId The unique identifier of managedAppPolicy
     * @returns a ManagedAppPolicyItemRequestBuilder
     */
    public byManagedAppPolicyId(managedAppPolicyId: string) : ManagedAppPolicyItemRequestBuilder {
        if(!managedAppPolicyId) throw new Error("managedAppPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppPolicy%2Did"] = managedAppPolicyId
        return new ManagedAppPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AppliedPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/managedAppRegistrations/{managedAppRegistration%2Did}/appliedPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Zero or more policys already applied on the registered app when it last synchronized with managment service.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppPolicyCollectionResponse
     */
    public get(requestConfiguration?: AppliedPoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedAppPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppPolicyCollectionResponse>(requestInfo, createManagedAppPolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to appliedPolicies for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppPolicy
     */
    public post(body: ManagedAppPolicy, requestConfiguration?: AppliedPoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<ManagedAppPolicy | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppPolicy>(requestInfo, createManagedAppPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Zero or more policys already applied on the registered app when it last synchronized with managment service.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AppliedPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to appliedPolicies for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ManagedAppPolicy, requestConfiguration?: AppliedPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedAppPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a appliedPoliciesRequestBuilder
     */
    public withUrl(rawUrl: string) : AppliedPoliciesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AppliedPoliciesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
