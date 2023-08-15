import {UnifiedRoleDefinitionCollectionResponse} from '../../../../../models/';
import {createUnifiedRoleDefinitionCollectionResponseFromDiscriminatorValue} from '../../../../../models/createUnifiedRoleDefinitionCollectionResponseFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from '../../../../../models/createUnifiedRoleDefinitionFromDiscriminatorValue';
import {deserializeIntoUnifiedRoleDefinition} from '../../../../../models/deserializeIntoUnifiedRoleDefinition';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeUnifiedRoleDefinition} from '../../../../../models/serializeUnifiedRoleDefinition';
import type {UnifiedRoleDefinition} from '../../../../../models/unifiedRoleDefinition';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {InheritsPermissionsFromRequestBuilderGetRequestConfiguration} from './inheritsPermissionsFromRequestBuilderGetRequestConfiguration';
import {InheritsPermissionsFromRequestBuilderPostRequestConfiguration} from './inheritsPermissionsFromRequestBuilderPostRequestConfiguration';
import {UnifiedRoleDefinitionItemRequestBuilder} from './item/unifiedRoleDefinitionItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the inheritsPermissionsFrom property of the microsoft.graph.unifiedRoleDefinition entity.
 */
export class InheritsPermissionsFromRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the inheritsPermissionsFrom property of the microsoft.graph.unifiedRoleDefinition entity.
     * @param unifiedRoleDefinitionId1 The unique identifier of unifiedRoleDefinition
     * @returns a UnifiedRoleDefinitionItemRequestBuilder
     */
    public byUnifiedRoleDefinitionId1(unifiedRoleDefinitionId1: string) : UnifiedRoleDefinitionItemRequestBuilder {
        if(!unifiedRoleDefinitionId1) throw new Error("unifiedRoleDefinitionId1 cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleDefinition%2Did1"] = unifiedRoleDefinitionId1
        return new UnifiedRoleDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new InheritsPermissionsFromRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition%2Did}/inheritsPermissionsFrom{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles (isBuiltIn is true) support this attribute. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleDefinitionCollectionResponse
     */
    public get(requestConfiguration?: InheritsPermissionsFromRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleDefinitionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleDefinitionCollectionResponse>(requestInfo, createUnifiedRoleDefinitionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to inheritsPermissionsFrom for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleDefinition
     */
    public post(body: UnifiedRoleDefinition, requestConfiguration?: InheritsPermissionsFromRequestBuilderPostRequestConfiguration | undefined) : Promise<UnifiedRoleDefinition | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleDefinition>(requestInfo, createUnifiedRoleDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles (isBuiltIn is true) support this attribute. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: InheritsPermissionsFromRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to inheritsPermissionsFrom for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleDefinition, requestConfiguration?: InheritsPermissionsFromRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRoleDefinition);
        return requestInfo;
    };
}
