import {AccessPackageAssignmentPolicyCollectionResponse} from '../../../models/';
import type {AccessPackageAssignmentPolicy} from '../../../models/accessPackageAssignmentPolicy';
import {createAccessPackageAssignmentPolicyCollectionResponseFromDiscriminatorValue} from '../../../models/createAccessPackageAssignmentPolicyCollectionResponseFromDiscriminatorValue';
import {createAccessPackageAssignmentPolicyFromDiscriminatorValue} from '../../../models/createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import {deserializeIntoAccessPackageAssignmentPolicy} from '../../../models/deserializeIntoAccessPackageAssignmentPolicy';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeAccessPackageAssignmentPolicy} from '../../../models/serializeAccessPackageAssignmentPolicy';
import {AssignmentPoliciesRequestBuilderGetRequestConfiguration} from './assignmentPoliciesRequestBuilderGetRequestConfiguration';
import {AssignmentPoliciesRequestBuilderPostRequestConfiguration} from './assignmentPoliciesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AccessPackageAssignmentPolicyItemRequestBuilder} from './item/accessPackageAssignmentPolicyItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignmentPolicies property of the microsoft.graph.entitlementManagement entity.
 */
export class AssignmentPoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignmentPolicies property of the microsoft.graph.entitlementManagement entity.
     * @param accessPackageAssignmentPolicyId Unique identifier of the item
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
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/assignmentPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * In Azure AD entitlement management, retrieve a list of accessPackageAssignmentPolicy objects. If the delegated user is in a directory role, the resulting list includes all the assignment policies that the caller has access to read, across all catalogs and access packages. If the delegated user is an access package manager or catalog owner, they should instead retrieve the policies for the access packages they can read with list accessPackages by including $expand=accessPackageAssignmentPolicies as a query parameter.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentPolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-list-assignmentpolicies?view=graph-rest-1.0|Find more info here}
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
     * In Azure AD entitlement management, create a new accessPackageAssignmentPolicy object.  The request will include a reference to the accessPackage that will contain this policy, which must already exist.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentPolicy
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-post-assignmentpolicies?view=graph-rest-1.0|Find more info here}
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
     * In Azure AD entitlement management, retrieve a list of accessPackageAssignmentPolicy objects. If the delegated user is in a directory role, the resulting list includes all the assignment policies that the caller has access to read, across all catalogs and access packages. If the delegated user is an access package manager or catalog owner, they should instead retrieve the policies for the access packages they can read with list accessPackages by including $expand=accessPackageAssignmentPolicies as a query parameter.
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
     * In Azure AD entitlement management, create a new accessPackageAssignmentPolicy object.  The request will include a reference to the accessPackage that will contain this policy, which must already exist.
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
}
