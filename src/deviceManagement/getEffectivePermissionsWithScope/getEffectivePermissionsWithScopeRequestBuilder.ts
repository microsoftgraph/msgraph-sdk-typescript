import {createGetEffectivePermissionsWithScopeResponseFromDiscriminatorValue} from './createGetEffectivePermissionsWithScopeResponseFromDiscriminatorValue';
import {GetEffectivePermissionsWithScopeRequestBuilderGetRequestConfiguration} from './getEffectivePermissionsWithScopeRequestBuilderGetRequestConfiguration';
import {GetEffectivePermissionsWithScopeResponse} from './index';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getEffectivePermissions method. */
export class GetEffectivePermissionsWithScopeRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new GetEffectivePermissionsWithScopeRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param scope Usage: scope='{scope}'
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, scope?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/microsoft.graph.getEffectivePermissions(scope='{scope}')";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams[""] = scope
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieves the effective permissions of the currently authenticated user
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: GetEffectivePermissionsWithScopeRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieves the effective permissions of the currently authenticated user
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetEffectivePermissionsWithScopeResponse
     */
    public get(requestConfiguration?: GetEffectivePermissionsWithScopeRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetEffectivePermissionsWithScopeResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<GetEffectivePermissionsWithScopeResponse>(requestInfo, createGetEffectivePermissionsWithScopeResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
