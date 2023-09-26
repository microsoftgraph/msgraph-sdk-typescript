import { type UnifiedRoleDefinition } from '../../../../../models/';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { createUnifiedRoleDefinitionFromDiscriminatorValue } from '../../../../../models/unifiedRoleDefinition';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface RoleDefinitionRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface RoleDefinitionRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: RoleDefinitionRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the roleDefinition property of the microsoft.graph.unifiedRoleScheduleBase entity.
 */
export class RoleDefinitionRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new RoleDefinitionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule%2Did}/roleDefinition{?%24select,%24expand}");
    };
    /**
     * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleDefinition
     */
    public get(requestConfiguration?: RoleDefinitionRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleDefinition | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleDefinition>(requestInfo, createUnifiedRoleDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleDefinitionRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a roleDefinitionRequestBuilder
     */
    public withUrl(rawUrl: string) : RoleDefinitionRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RoleDefinitionRequestBuilder(rawUrl, this.requestAdapter);
    };
}
