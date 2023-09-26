import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { createDoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameResponseFromDiscriminatorValue } from './doesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameResponse';
import { type DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilderGetQueryParameters {
    /**
     * Usage: tenantId='@tenantId'
     */
    tenantId?: string;
    /**
     * Usage: userId='@userId'
     */
    userId?: string;
    /**
     * Usage: userPrincipalName='@userPrincipalName'
     */
    userPrincipalName?: string;
}
export interface DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to call the doesUserHaveAccess method.
 */
export class DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teams/{team%2Did}/channels/{channel%2Did}/doesUserHaveAccess(userId='@userId',tenantId='@tenantId',userPrincipalName='@userPrincipalName'){?userId*,tenantId*,userPrincipalName*}");
    };
    /**
     * Invoke function doesUserHaveAccess
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameResponse
     */
    public get(requestConfiguration?: DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilderGetRequestConfiguration | undefined) : Promise<DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameResponse>(requestInfo, createDoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function doesUserHaveAccess
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a doesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder
     */
    public withUrl(rawUrl: string) : DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder(rawUrl, this.requestAdapter);
    };
}
