import { type FederatedIdentityCredentialCollectionResponse } from '../../../models/';
import { createFederatedIdentityCredentialCollectionResponseFromDiscriminatorValue } from '../../../models/createFederatedIdentityCredentialCollectionResponseFromDiscriminatorValue';
import { createFederatedIdentityCredentialFromDiscriminatorValue } from '../../../models/createFederatedIdentityCredentialFromDiscriminatorValue';
import { deserializeIntoFederatedIdentityCredential } from '../../../models/deserializeIntoFederatedIdentityCredential';
import { type FederatedIdentityCredential } from '../../../models/federatedIdentityCredential';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeFederatedIdentityCredential } from '../../../models/serializeFederatedIdentityCredential';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type FederatedIdentityCredentialsRequestBuilderGetRequestConfiguration } from './federatedIdentityCredentialsRequestBuilderGetRequestConfiguration';
import { type FederatedIdentityCredentialsRequestBuilderPostRequestConfiguration } from './federatedIdentityCredentialsRequestBuilderPostRequestConfiguration';
import { FederatedIdentityCredentialItemRequestBuilder } from './item/federatedIdentityCredentialItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.servicePrincipal entity.
 */
export class FederatedIdentityCredentialsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.servicePrincipal entity.
     * @param federatedIdentityCredentialId The unique identifier of federatedIdentityCredential
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
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/federatedIdentityCredentials{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Federated identities for a specific type of service principal - managed identity. Supports $expand and $filter (/$count eq 0, /$count ne 0).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FederatedIdentityCredentialCollectionResponse
     */
    public get(requestConfiguration?: FederatedIdentityCredentialsRequestBuilderGetRequestConfiguration | undefined) : Promise<FederatedIdentityCredentialCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<FederatedIdentityCredentialCollectionResponse>(requestInfo, createFederatedIdentityCredentialCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to federatedIdentityCredentials for servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FederatedIdentityCredential
     */
    public post(body: FederatedIdentityCredential, requestConfiguration?: FederatedIdentityCredentialsRequestBuilderPostRequestConfiguration | undefined) : Promise<FederatedIdentityCredential | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<FederatedIdentityCredential>(requestInfo, createFederatedIdentityCredentialFromDiscriminatorValue, errorMapping);
    };
    /**
     * Federated identities for a specific type of service principal - managed identity. Supports $expand and $filter (/$count eq 0, /$count ne 0).
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
     * Create new navigation property to federatedIdentityCredentials for servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: FederatedIdentityCredential, requestConfiguration?: FederatedIdentityCredentialsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeFederatedIdentityCredential);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a federatedIdentityCredentialsRequestBuilder
     */
    public withUrl(rawUrl: string) : FederatedIdentityCredentialsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new FederatedIdentityCredentialsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
