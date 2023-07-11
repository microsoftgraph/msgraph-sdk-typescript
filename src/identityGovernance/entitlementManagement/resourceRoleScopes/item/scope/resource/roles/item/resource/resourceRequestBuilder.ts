import {AccessPackageResource} from '../../../../../../../../../models/accessPackageResource';
import {createAccessPackageResourceFromDiscriminatorValue} from '../../../../../../../../../models/createAccessPackageResourceFromDiscriminatorValue';
import {deserializeIntoAccessPackageResource} from '../../../../../../../../../models/deserializeIntoAccessPackageResource';
import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeAccessPackageResource} from '../../../../../../../../../models/serializeAccessPackageResource';
import {EnvironmentRequestBuilder} from './environment/environmentRequestBuilder';
import {ResourceRequestBuilderDeleteRequestConfiguration} from './resourceRequestBuilderDeleteRequestConfiguration';
import {ResourceRequestBuilderGetRequestConfiguration} from './resourceRequestBuilderGetRequestConfiguration';
import {ResourceRequestBuilderPatchRequestConfiguration} from './resourceRequestBuilderPatchRequestConfiguration';
import {ScopesRequestBuilder} from './scopes/scopesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resource property of the microsoft.graph.accessPackageResourceRole entity.
 */
export class ResourceRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the environment property of the microsoft.graph.accessPackageResource entity.
     */
    public get environment(): EnvironmentRequestBuilder {
        return new EnvironmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the scopes property of the microsoft.graph.accessPackageResource entity.
     */
    public get scopes(): ScopesRequestBuilder {
        return new ScopesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ResourceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope%2Did}/scope/resource/roles/{accessPackageResourceRole%2Did}/resource{?%24select,%24expand}");
    };
    /**
     * Delete navigation property resource for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ResourceRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get resource from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResource
     */
    public get(requestConfiguration?: ResourceRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageResource | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResource>(requestInfo, createAccessPackageResourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property resource in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResource
     */
    public patch(body: AccessPackageResource | undefined, requestConfiguration?: ResourceRequestBuilderPatchRequestConfiguration | undefined) : Promise<AccessPackageResource | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResource>(requestInfo, createAccessPackageResourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property resource for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ResourceRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get resource from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResourceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property resource in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AccessPackageResource | undefined, requestConfiguration?: ResourceRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageResource);
        return requestInfo;
    };
}
