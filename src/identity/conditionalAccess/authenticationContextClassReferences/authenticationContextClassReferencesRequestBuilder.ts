import {AuthenticationContextClassReferenceCollectionResponse} from '../../../models/';
import type {AuthenticationContextClassReference} from '../../../models/authenticationContextClassReference';
import {createAuthenticationContextClassReferenceCollectionResponseFromDiscriminatorValue} from '../../../models/createAuthenticationContextClassReferenceCollectionResponseFromDiscriminatorValue';
import {createAuthenticationContextClassReferenceFromDiscriminatorValue} from '../../../models/createAuthenticationContextClassReferenceFromDiscriminatorValue';
import {deserializeIntoAuthenticationContextClassReference} from '../../../models/deserializeIntoAuthenticationContextClassReference';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeAuthenticationContextClassReference} from '../../../models/serializeAuthenticationContextClassReference';
import {AuthenticationContextClassReferencesRequestBuilderGetRequestConfiguration} from './authenticationContextClassReferencesRequestBuilderGetRequestConfiguration';
import {AuthenticationContextClassReferencesRequestBuilderPostRequestConfiguration} from './authenticationContextClassReferencesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AuthenticationContextClassReferenceItemRequestBuilder} from './item/authenticationContextClassReferenceItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the authenticationContextClassReferences property of the microsoft.graph.conditionalAccessRoot entity.
 */
export class AuthenticationContextClassReferencesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the authenticationContextClassReferences property of the microsoft.graph.conditionalAccessRoot entity.
     * @param authenticationContextClassReferenceId The unique identifier of authenticationContextClassReference
     * @returns a AuthenticationContextClassReferenceItemRequestBuilder
     */
    public byAuthenticationContextClassReferenceId(authenticationContextClassReferenceId: string) : AuthenticationContextClassReferenceItemRequestBuilder {
        if(!authenticationContextClassReferenceId) throw new Error("authenticationContextClassReferenceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["authenticationContextClassReference%2Did"] = authenticationContextClassReferenceId
        return new AuthenticationContextClassReferenceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AuthenticationContextClassReferencesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess/authenticationContextClassReferences{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of authenticationContextClassReference objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationContextClassReferenceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/conditionalaccessroot-list-authenticationcontextclassreferences?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AuthenticationContextClassReferencesRequestBuilderGetRequestConfiguration | undefined) : Promise<AuthenticationContextClassReferenceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationContextClassReferenceCollectionResponse>(requestInfo, createAuthenticationContextClassReferenceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to authenticationContextClassReferences for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationContextClassReference
     */
    public post(body: AuthenticationContextClassReference, requestConfiguration?: AuthenticationContextClassReferencesRequestBuilderPostRequestConfiguration | undefined) : Promise<AuthenticationContextClassReference | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationContextClassReference>(requestInfo, createAuthenticationContextClassReferenceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of authenticationContextClassReference objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuthenticationContextClassReferencesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to authenticationContextClassReferences for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AuthenticationContextClassReference, requestConfiguration?: AuthenticationContextClassReferencesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAuthenticationContextClassReference);
        return requestInfo;
    };
}
