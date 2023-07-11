import {AccessPackageResourceRole} from '../../../../../../../../models/accessPackageResourceRole';
import {createAccessPackageResourceRoleFromDiscriminatorValue} from '../../../../../../../../models/createAccessPackageResourceRoleFromDiscriminatorValue';
import {deserializeIntoAccessPackageResourceRole} from '../../../../../../../../models/deserializeIntoAccessPackageResourceRole';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeAccessPackageResourceRole} from '../../../../../../../../models/serializeAccessPackageResourceRole';
import {AccessPackageResourceRoleItemRequestBuilderDeleteRequestConfiguration} from './accessPackageResourceRoleItemRequestBuilderDeleteRequestConfiguration';
import {AccessPackageResourceRoleItemRequestBuilderGetRequestConfiguration} from './accessPackageResourceRoleItemRequestBuilderGetRequestConfiguration';
import {AccessPackageResourceRoleItemRequestBuilderPatchRequestConfiguration} from './accessPackageResourceRoleItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roles property of the microsoft.graph.accessPackageResource entity.
 */
export class AccessPackageResourceRoleItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AccessPackageResourceRoleItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope%2Did}/role/resource/roles/{accessPackageResourceRole%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property roles for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AccessPackageResourceRoleItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get roles from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRole
     */
    public get(requestConfiguration?: AccessPackageResourceRoleItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageResourceRole | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceRole>(requestInfo, createAccessPackageResourceRoleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property roles in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRole
     */
    public patch(body: AccessPackageResourceRole | undefined, requestConfiguration?: AccessPackageResourceRoleItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AccessPackageResourceRole | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceRole>(requestInfo, createAccessPackageResourceRoleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property roles for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AccessPackageResourceRoleItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get roles from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessPackageResourceRoleItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property roles in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AccessPackageResourceRole | undefined, requestConfiguration?: AccessPackageResourceRoleItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageResourceRole);
        return requestInfo;
    };
}
