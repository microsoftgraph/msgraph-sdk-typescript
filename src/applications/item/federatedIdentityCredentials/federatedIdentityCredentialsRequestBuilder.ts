import {FederatedIdentityCredentialCollectionResponse} from '../../../models/';
import {createFederatedIdentityCredentialCollectionResponseFromDiscriminatorValue} from '../../../models/createFederatedIdentityCredentialCollectionResponseFromDiscriminatorValue';
import {createFederatedIdentityCredentialFromDiscriminatorValue} from '../../../models/createFederatedIdentityCredentialFromDiscriminatorValue';
import {deserializeIntoFederatedIdentityCredential} from '../../../models/deserializeIntoFederatedIdentityCredential';
import {FederatedIdentityCredential} from '../../../models/federatedIdentityCredential';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeFederatedIdentityCredential} from '../../../models/serializeFederatedIdentityCredential';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FederatedIdentityCredentialsRequestBuilderGetRequestConfiguration} from './federatedIdentityCredentialsRequestBuilderGetRequestConfiguration';
import {FederatedIdentityCredentialsRequestBuilderPostRequestConfiguration} from './federatedIdentityCredentialsRequestBuilderPostRequestConfiguration';
import {FederatedIdentityCredentialItemRequestBuilder} from './item/federatedIdentityCredentialItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.application entity.
 */
export class FederatedIdentityCredentialsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.application entity.
     * @param federatedIdentityCredentialId Unique identifier of the item
     * @returns a FederatedIdentityCredentialItemRequestBuilder
     */
    public byFederatedIdentityCredentialId(federatedIdentityCredentialId: string) : FederatedIdentityCredentialItemRequestBuilder {
        if(!federatedIdentityCredentialId) throw new Error("federatedIdentityCredentialId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["federatedIdentityCredential%2Did"] = federatedIdentityCredentialId
        return new FederatedIdentityCredentialItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new FederatedIdentityCredentialsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applications/{application%2Did}/federatedIdentityCredentials{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the federatedIdentityCredential objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of FederatedIdentityCredentialCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/application-list-federatedidentitycredentials?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: FederatedIdentityCredentialsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<FederatedIdentityCredentialCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<FederatedIdentityCredentialCollectionResponse>(requestInfo, createFederatedIdentityCredentialCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new federatedIdentityCredential object for an application. By configuring a trust relationship between your Azure AD application registration and the identity provider for your compute platform, you can use tokens issued by that platform to authenticate with Microsoft identity platform and call APIs in the Microsoft ecosystem. Maximum of 20 objects can be added to an application.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of FederatedIdentityCredential
     * @see {@link https://docs.microsoft.com/graph/api/application-post-federatedidentitycredentials?view=graph-rest-1.0|Find more info here}
     */
    public post(body: FederatedIdentityCredential | undefined, requestConfiguration?: FederatedIdentityCredentialsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<FederatedIdentityCredential | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<FederatedIdentityCredential>(requestInfo, createFederatedIdentityCredentialFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get a list of the federatedIdentityCredential objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FederatedIdentityCredentialsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new federatedIdentityCredential object for an application. By configuring a trust relationship between your Azure AD application registration and the identity provider for your compute platform, you can use tokens issued by that platform to authenticate with Microsoft identity platform and call APIs in the Microsoft ecosystem. Maximum of 20 objects can be added to an application.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: FederatedIdentityCredential | undefined, requestConfiguration?: FederatedIdentityCredentialsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeFederatedIdentityCredential);
        return requestInfo;
    };
}
