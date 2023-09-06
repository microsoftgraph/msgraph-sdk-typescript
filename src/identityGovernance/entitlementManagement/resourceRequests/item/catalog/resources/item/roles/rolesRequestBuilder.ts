import { type AccessPackageResourceRoleCollectionResponse } from '../../../../../../../../models/';
import { type AccessPackageResourceRole } from '../../../../../../../../models/accessPackageResourceRole';
import { createAccessPackageResourceRoleCollectionResponseFromDiscriminatorValue } from '../../../../../../../../models/createAccessPackageResourceRoleCollectionResponseFromDiscriminatorValue';
import { createAccessPackageResourceRoleFromDiscriminatorValue } from '../../../../../../../../models/createAccessPackageResourceRoleFromDiscriminatorValue';
import { deserializeIntoAccessPackageResourceRole } from '../../../../../../../../models/deserializeIntoAccessPackageResourceRole';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeAccessPackageResourceRole } from '../../../../../../../../models/serializeAccessPackageResourceRole';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { AccessPackageResourceRoleItemRequestBuilder } from './item/accessPackageResourceRoleItemRequestBuilder';
import { type RolesRequestBuilderGetRequestConfiguration } from './rolesRequestBuilderGetRequestConfiguration';
import { type RolesRequestBuilderPostRequestConfiguration } from './rolesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roles property of the microsoft.graph.accessPackageResource entity.
 */
export class RolesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roles property of the microsoft.graph.accessPackageResource entity.
     * @param accessPackageResourceRoleId The unique identifier of accessPackageResourceRole
     * @returns a AccessPackageResourceRoleItemRequestBuilder
     */
    public byAccessPackageResourceRoleId(accessPackageResourceRoleId: string) : AccessPackageResourceRoleItemRequestBuilder {
        if(!accessPackageResourceRoleId) throw new Error("accessPackageResourceRoleId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageResourceRole%2Did"] = accessPackageResourceRoleId
        return new AccessPackageResourceRoleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RolesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest%2Did}/catalog/resources/{accessPackageResource%2Did}/roles{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read-only. Nullable. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRoleCollectionResponse
     */
    public get(requestConfiguration?: RolesRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageResourceRoleCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceRoleCollectionResponse>(requestInfo, createAccessPackageResourceRoleCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to roles for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRole
     */
    public post(body: AccessPackageResourceRole, requestConfiguration?: RolesRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessPackageResourceRole | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceRole>(requestInfo, createAccessPackageResourceRoleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read-only. Nullable. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RolesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to roles for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessPackageResourceRole, requestConfiguration?: RolesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessPackageResourceRole);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a rolesRequestBuilder
     */
    public withUrl(rawUrl: string) : RolesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RolesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
