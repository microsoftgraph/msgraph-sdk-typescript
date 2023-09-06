import { type CertificateBasedAuthConfiguration } from '../../models/certificateBasedAuthConfiguration';
import { createCertificateBasedAuthConfigurationFromDiscriminatorValue } from '../../models/createCertificateBasedAuthConfigurationFromDiscriminatorValue';
import { deserializeIntoCertificateBasedAuthConfiguration } from '../../models/deserializeIntoCertificateBasedAuthConfiguration';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeCertificateBasedAuthConfiguration } from '../../models/serializeCertificateBasedAuthConfiguration';
import { type CertificateBasedAuthConfigurationItemRequestBuilderDeleteRequestConfiguration } from './certificateBasedAuthConfigurationItemRequestBuilderDeleteRequestConfiguration';
import { type CertificateBasedAuthConfigurationItemRequestBuilderGetRequestConfiguration } from './certificateBasedAuthConfigurationItemRequestBuilderGetRequestConfiguration';
import { type CertificateBasedAuthConfigurationItemRequestBuilderPatchRequestConfiguration } from './certificateBasedAuthConfigurationItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of certificateBasedAuthConfiguration entities.
 */
export class CertificateBasedAuthConfigurationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CertificateBasedAuthConfigurationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete entity from certificateBasedAuthConfiguration
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: CertificateBasedAuthConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get entity from certificateBasedAuthConfiguration by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CertificateBasedAuthConfiguration
     */
    public get(requestConfiguration?: CertificateBasedAuthConfigurationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<CertificateBasedAuthConfiguration | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CertificateBasedAuthConfiguration>(requestInfo, createCertificateBasedAuthConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update entity in certificateBasedAuthConfiguration
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CertificateBasedAuthConfiguration
     */
    public patch(body: CertificateBasedAuthConfiguration, requestConfiguration?: CertificateBasedAuthConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<CertificateBasedAuthConfiguration | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CertificateBasedAuthConfiguration>(requestInfo, createCertificateBasedAuthConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete entity from certificateBasedAuthConfiguration
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: CertificateBasedAuthConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get entity from certificateBasedAuthConfiguration by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CertificateBasedAuthConfigurationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update entity in certificateBasedAuthConfiguration
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: CertificateBasedAuthConfiguration, requestConfiguration?: CertificateBasedAuthConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCertificateBasedAuthConfiguration);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a CertificateBasedAuthConfigurationItemRequestBuilder
     */
    public withUrl(rawUrl: string) : CertificateBasedAuthConfigurationItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CertificateBasedAuthConfigurationItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
