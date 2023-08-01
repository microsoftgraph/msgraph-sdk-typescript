import type {AuthenticationMethodModeDetail} from '../../../../../models/authenticationMethodModeDetail';
import {createAuthenticationMethodModeDetailFromDiscriminatorValue} from '../../../../../models/createAuthenticationMethodModeDetailFromDiscriminatorValue';
import {deserializeIntoAuthenticationMethodModeDetail} from '../../../../../models/deserializeIntoAuthenticationMethodModeDetail';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeAuthenticationMethodModeDetail} from '../../../../../models/serializeAuthenticationMethodModeDetail';
import {AuthenticationMethodModeDetailItemRequestBuilderDeleteRequestConfiguration} from './authenticationMethodModeDetailItemRequestBuilderDeleteRequestConfiguration';
import {AuthenticationMethodModeDetailItemRequestBuilderGetRequestConfiguration} from './authenticationMethodModeDetailItemRequestBuilderGetRequestConfiguration';
import {AuthenticationMethodModeDetailItemRequestBuilderPatchRequestConfiguration} from './authenticationMethodModeDetailItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the authenticationMethodModes property of the microsoft.graph.authenticationStrengthRoot entity.
 */
export class AuthenticationMethodModeDetailItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AuthenticationMethodModeDetailItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property authenticationMethodModes for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AuthenticationMethodModeDetailItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Names and descriptions of all valid authentication method modes in the system.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethodModeDetail
     */
    public get(requestConfiguration?: AuthenticationMethodModeDetailItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AuthenticationMethodModeDetail | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationMethodModeDetail>(requestInfo, createAuthenticationMethodModeDetailFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property authenticationMethodModes in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethodModeDetail
     */
    public patch(body: AuthenticationMethodModeDetail | undefined, requestConfiguration?: AuthenticationMethodModeDetailItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AuthenticationMethodModeDetail | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationMethodModeDetail>(requestInfo, createAuthenticationMethodModeDetailFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property authenticationMethodModes for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AuthenticationMethodModeDetailItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Names and descriptions of all valid authentication method modes in the system.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuthenticationMethodModeDetailItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property authenticationMethodModes in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AuthenticationMethodModeDetail | undefined, requestConfiguration?: AuthenticationMethodModeDetailItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAuthenticationMethodModeDetail);
        return requestInfo;
    };
}
