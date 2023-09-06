import { createIdentityApiConnectorFromDiscriminatorValue } from '../../../../../models/createIdentityApiConnectorFromDiscriminatorValue';
import { deserializeIntoIdentityApiConnector } from '../../../../../models/deserializeIntoIdentityApiConnector';
import { type IdentityApiConnector } from '../../../../../models/identityApiConnector';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeIdentityApiConnector } from '../../../../../models/serializeIdentityApiConnector';
import { type PostFederationSignupRequestBuilderDeleteRequestConfiguration } from './postFederationSignupRequestBuilderDeleteRequestConfiguration';
import { type PostFederationSignupRequestBuilderGetRequestConfiguration } from './postFederationSignupRequestBuilderGetRequestConfiguration';
import { type PostFederationSignupRequestBuilderPatchRequestConfiguration } from './postFederationSignupRequestBuilderPatchRequestConfiguration';
import { RefRequestBuilder } from './ref/refRequestBuilder';
import { UploadClientCertificateRequestBuilder } from './uploadClientCertificate/uploadClientCertificateRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the postFederationSignup property of the microsoft.graph.userFlowApiConnectorConfiguration entity.
 */
export class PostFederationSignupRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the collection of identityContainer entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the uploadClientCertificate method.
     */
    public get uploadClientCertificate(): UploadClientCertificateRequestBuilder {
        return new UploadClientCertificateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PostFederationSignupRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/apiConnectorConfiguration/postFederationSignup{?%24select,%24expand}");
    };
    /**
     * Delete navigation property postFederationSignup for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: PostFederationSignupRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get postFederationSignup from identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityApiConnector
     */
    public get(requestConfiguration?: PostFederationSignupRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityApiConnector | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityApiConnector>(requestInfo, createIdentityApiConnectorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property postFederationSignup in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityApiConnector
     */
    public patch(body: IdentityApiConnector, requestConfiguration?: PostFederationSignupRequestBuilderPatchRequestConfiguration | undefined) : Promise<IdentityApiConnector | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityApiConnector>(requestInfo, createIdentityApiConnectorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property postFederationSignup for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PostFederationSignupRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get postFederationSignup from identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PostFederationSignupRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property postFederationSignup in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IdentityApiConnector, requestConfiguration?: PostFederationSignupRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeIdentityApiConnector);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a postFederationSignupRequestBuilder
     */
    public withUrl(rawUrl: string) : PostFederationSignupRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PostFederationSignupRequestBuilder(rawUrl, this.requestAdapter);
    };
}
