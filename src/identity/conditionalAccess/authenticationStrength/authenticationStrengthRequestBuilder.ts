import {AuthenticationStrengthRoot} from '../../../models/';
import {createAuthenticationStrengthRootFromDiscriminatorValue} from '../../../models/createAuthenticationStrengthRootFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AuthenticationMethodModesRequestBuilder} from './authenticationMethodModes/authenticationMethodModesRequestBuilder';
import {AuthenticationStrengthRequestBuilderDeleteRequestConfiguration} from './authenticationStrengthRequestBuilderDeleteRequestConfiguration';
import {AuthenticationStrengthRequestBuilderGetRequestConfiguration} from './authenticationStrengthRequestBuilderGetRequestConfiguration';
import {AuthenticationStrengthRequestBuilderPatchRequestConfiguration} from './authenticationStrengthRequestBuilderPatchRequestConfiguration';
import {PoliciesRequestBuilder} from './policies/policiesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the authenticationStrength property of the microsoft.graph.conditionalAccessRoot entity.
 */
export class AuthenticationStrengthRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the authenticationMethodModes property of the microsoft.graph.authenticationStrengthRoot entity. */
    public get authenticationMethodModes(): AuthenticationMethodModesRequestBuilder {
        return new AuthenticationMethodModesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the policies property of the microsoft.graph.authenticationStrengthRoot entity. */
    public get policies(): PoliciesRequestBuilder {
        return new PoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AuthenticationStrengthRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess/authenticationStrength{?%24select,%24expand}");
    };
    /**
     * Delete navigation property authenticationStrength for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: AuthenticationStrengthRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get authenticationStrength from identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuthenticationStrengthRoot
     */
    public get(requestConfiguration?: AuthenticationStrengthRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuthenticationStrengthRoot | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AuthenticationStrengthRoot>(requestInfo, createAuthenticationStrengthRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property authenticationStrength in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuthenticationStrengthRoot
     */
    public patch(body: AuthenticationStrengthRoot | undefined, requestConfiguration?: AuthenticationStrengthRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuthenticationStrengthRoot | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AuthenticationStrengthRoot>(requestInfo, createAuthenticationStrengthRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property authenticationStrength for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AuthenticationStrengthRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get authenticationStrength from identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuthenticationStrengthRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property authenticationStrength in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AuthenticationStrengthRoot | undefined, requestConfiguration?: AuthenticationStrengthRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
