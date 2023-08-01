import type {AccessPackageAssignmentPolicy} from '../../../../models/accessPackageAssignmentPolicy';
import {createAccessPackageAssignmentPolicyFromDiscriminatorValue} from '../../../../models/createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import {deserializeIntoAccessPackageAssignmentPolicy} from '../../../../models/deserializeIntoAccessPackageAssignmentPolicy';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAccessPackageAssignmentPolicy} from '../../../../models/serializeAccessPackageAssignmentPolicy';
import {AccessPackageRequestBuilder} from './accessPackage/accessPackageRequestBuilder';
import {AccessPackageAssignmentPolicyItemRequestBuilderDeleteRequestConfiguration} from './accessPackageAssignmentPolicyItemRequestBuilderDeleteRequestConfiguration';
import {AccessPackageAssignmentPolicyItemRequestBuilderGetRequestConfiguration} from './accessPackageAssignmentPolicyItemRequestBuilderGetRequestConfiguration';
import {AccessPackageAssignmentPolicyItemRequestBuilderPutRequestConfiguration} from './accessPackageAssignmentPolicyItemRequestBuilderPutRequestConfiguration';
import {CatalogRequestBuilder} from './catalog/catalogRequestBuilder';
import {CustomExtensionStageSettingsRequestBuilder} from './customExtensionStageSettings/customExtensionStageSettingsRequestBuilder';
import {QuestionsRequestBuilder} from './questions/questionsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignmentPolicies property of the microsoft.graph.entitlementManagement entity.
 */
export class AccessPackageAssignmentPolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the accessPackage property of the microsoft.graph.accessPackageAssignmentPolicy entity.
     */
    public get accessPackage(): AccessPackageRequestBuilder {
        return new AccessPackageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the catalog property of the microsoft.graph.accessPackageAssignmentPolicy entity.
     */
    public get catalog(): CatalogRequestBuilder {
        return new CatalogRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the customExtensionStageSettings property of the microsoft.graph.accessPackageAssignmentPolicy entity.
     */
    public get customExtensionStageSettings(): CustomExtensionStageSettingsRequestBuilder {
        return new CustomExtensionStageSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the questions property of the microsoft.graph.accessPackageAssignmentPolicy entity.
     */
    public get questions(): QuestionsRequestBuilder {
        return new QuestionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AccessPackageAssignmentPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * In Azure AD entitlement management, delete an accessPackageAssignmentPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/accesspackageassignmentpolicy-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: AccessPackageAssignmentPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * In Azure AD entitlement management, retrieve the properties and relationships of an accessPackageAssignmentPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentPolicy
     * @see {@link https://learn.microsoft.com/graph/api/accesspackageassignmentpolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AccessPackageAssignmentPolicyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageAssignmentPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageAssignmentPolicy>(requestInfo, createAccessPackageAssignmentPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property assignmentPolicies in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentPolicy
     */
    public put(body: AccessPackageAssignmentPolicy | undefined, requestConfiguration?: AccessPackageAssignmentPolicyItemRequestBuilderPutRequestConfiguration | undefined) : Promise<AccessPackageAssignmentPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPutRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageAssignmentPolicy>(requestInfo, createAccessPackageAssignmentPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * In Azure AD entitlement management, delete an accessPackageAssignmentPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AccessPackageAssignmentPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * In Azure AD entitlement management, retrieve the properties and relationships of an accessPackageAssignmentPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessPackageAssignmentPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property assignmentPolicies in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPutRequestInformation(body: AccessPackageAssignmentPolicy | undefined, requestConfiguration?: AccessPackageAssignmentPolicyItemRequestBuilderPutRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PUT;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageAssignmentPolicy);
        return requestInfo;
    };
}
