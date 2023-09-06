import { type AccessPackageAssignmentPolicyCollectionResponse } from '../../../../../models/';
import { type AccessPackageAssignmentPolicy } from '../../../../../models/accessPackageAssignmentPolicy';
import { createAccessPackageAssignmentPolicyCollectionResponseFromDiscriminatorValue } from '../../../../../models/createAccessPackageAssignmentPolicyCollectionResponseFromDiscriminatorValue';
import { createAccessPackageAssignmentPolicyFromDiscriminatorValue } from '../../../../../models/createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import { deserializeIntoAccessPackageAssignmentPolicy } from '../../../../../models/deserializeIntoAccessPackageAssignmentPolicy';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeAccessPackageAssignmentPolicy } from '../../../../../models/serializeAccessPackageAssignmentPolicy';
import { type AssignmentPoliciesRequestBuilderGetRequestConfiguration } from './assignmentPoliciesRequestBuilderGetRequestConfiguration';
import { type AssignmentPoliciesRequestBuilderPostRequestConfiguration } from './assignmentPoliciesRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { AccessPackageAssignmentPolicyItemRequestBuilder } from './item/accessPackageAssignmentPolicyItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignmentPolicies property of the microsoft.graph.accessPackage entity.
 */
export class AssignmentPoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignmentPolicies property of the microsoft.graph.accessPackage entity.
     * @param accessPackageAssignmentPolicyId The unique identifier of accessPackageAssignmentPolicy
     * @returns a AccessPackageAssignmentPolicyItemRequestBuilder
     */
    public byAccessPackageAssignmentPolicyId(accessPackageAssignmentPolicyId: string) : AccessPackageAssignmentPolicyItemRequestBuilder {
        if(!accessPackageAssignmentPolicyId) throw new Error("accessPackageAssignmentPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageAssignmentPolicy%2Did"] = accessPackageAssignmentPolicyId
        return new AccessPackageAssignmentPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AssignmentPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/accessPackages/{accessPackage%2Did}/assignmentPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read-only. Nullable. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentPolicyCollectionResponse
     */
    public get(requestConfiguration?: AssignmentPoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageAssignmentPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageAssignmentPolicyCollectionResponse>(requestInfo, createAccessPackageAssignmentPolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to assignmentPolicies for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentPolicy
     */
    public post(body: AccessPackageAssignmentPolicy, requestConfiguration?: AssignmentPoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessPackageAssignmentPolicy | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageAssignmentPolicy>(requestInfo, createAccessPackageAssignmentPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read-only. Nullable. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AssignmentPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to assignmentPolicies for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessPackageAssignmentPolicy, requestConfiguration?: AssignmentPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessPackageAssignmentPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a assignmentPoliciesRequestBuilder
     */
    public withUrl(rawUrl: string) : AssignmentPoliciesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AssignmentPoliciesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
