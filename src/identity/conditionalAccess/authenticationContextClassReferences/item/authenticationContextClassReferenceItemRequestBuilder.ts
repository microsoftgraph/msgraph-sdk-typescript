import { createAuthenticationContextClassReferenceFromDiscriminatorValue, deserializeIntoAuthenticationContextClassReference, serializeAuthenticationContextClassReference, type AuthenticationContextClassReference } from '../../../../models/authenticationContextClassReference';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AuthenticationContextClassReferenceItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface AuthenticationContextClassReferenceItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface AuthenticationContextClassReferenceItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AuthenticationContextClassReferenceItemRequestBuilderGetQueryParameters;
}
export interface AuthenticationContextClassReferenceItemRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the authenticationContextClassReferences property of the microsoft.graph.conditionalAccessRoot entity.
 */
export class AuthenticationContextClassReferenceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AuthenticationContextClassReferenceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an authenticationContextClassReference object that's not published or used by a conditional access policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/authenticationcontextclassreference-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: AuthenticationContextClassReferenceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a authenticationContextClassReference object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationContextClassReference
     * @see {@link https://learn.microsoft.com/graph/api/authenticationcontextclassreference-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AuthenticationContextClassReferenceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AuthenticationContextClassReference | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationContextClassReference>(requestInfo, createAuthenticationContextClassReferenceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create an authenticationContextClassReference object, if the ID has not been used. If ID has been used, this call updates the authenticationContextClassReference object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationContextClassReference
     * @see {@link https://learn.microsoft.com/graph/api/authenticationcontextclassreference-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: AuthenticationContextClassReference, requestConfiguration?: AuthenticationContextClassReferenceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AuthenticationContextClassReference | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationContextClassReference>(requestInfo, createAuthenticationContextClassReferenceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an authenticationContextClassReference object that's not published or used by a conditional access policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AuthenticationContextClassReferenceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a authenticationContextClassReference object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuthenticationContextClassReferenceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create an authenticationContextClassReference object, if the ID has not been used. If ID has been used, this call updates the authenticationContextClassReference object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AuthenticationContextClassReference, requestConfiguration?: AuthenticationContextClassReferenceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAuthenticationContextClassReference);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a AuthenticationContextClassReferenceItemRequestBuilder
     */
    public withUrl(rawUrl: string) : AuthenticationContextClassReferenceItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AuthenticationContextClassReferenceItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
