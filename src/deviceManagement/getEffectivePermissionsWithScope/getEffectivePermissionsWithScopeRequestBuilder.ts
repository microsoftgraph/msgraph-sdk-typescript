import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {createGetEffectivePermissionsWithScopeResponseFromDiscriminatorValue} from './createGetEffectivePermissionsWithScopeResponseFromDiscriminatorValue';
import {GetEffectivePermissionsWithScopeRequestBuilderGetRequestConfiguration} from './getEffectivePermissionsWithScopeRequestBuilderGetRequestConfiguration';
import {GetEffectivePermissionsWithScopeResponse} from './index';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getEffectivePermissions method.
 */
export class GetEffectivePermissionsWithScopeRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetEffectivePermissionsWithScopeRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param scope Usage: scope='{scope}'
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, scope?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/getEffectivePermissions(scope='{scope}'){?%24top,%24skip,%24search,%24filter,%24count}");
        this.pathParameters["scope"] = scope
    };
    /**
     * Retrieves the effective permissions of the currently authenticated user
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetEffectivePermissionsWithScopeResponse
     */
    public get(requestConfiguration?: GetEffectivePermissionsWithScopeRequestBuilderGetRequestConfiguration | undefined) : Promise<GetEffectivePermissionsWithScopeResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetEffectivePermissionsWithScopeResponse>(requestInfo, createGetEffectivePermissionsWithScopeResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieves the effective permissions of the currently authenticated user
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetEffectivePermissionsWithScopeRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
