import {CertificateBasedAuthConfigurationCollectionResponse} from '../../../models/';
import type {CertificateBasedAuthConfiguration} from '../../../models/certificateBasedAuthConfiguration';
import {createCertificateBasedAuthConfigurationCollectionResponseFromDiscriminatorValue} from '../../../models/createCertificateBasedAuthConfigurationCollectionResponseFromDiscriminatorValue';
import {createCertificateBasedAuthConfigurationFromDiscriminatorValue} from '../../../models/createCertificateBasedAuthConfigurationFromDiscriminatorValue';
import {deserializeIntoCertificateBasedAuthConfiguration} from '../../../models/deserializeIntoCertificateBasedAuthConfiguration';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeCertificateBasedAuthConfiguration} from '../../../models/serializeCertificateBasedAuthConfiguration';
import {CertificateBasedAuthConfigurationRequestBuilderGetRequestConfiguration} from './certificateBasedAuthConfigurationRequestBuilderGetRequestConfiguration';
import {CertificateBasedAuthConfigurationRequestBuilderPostRequestConfiguration} from './certificateBasedAuthConfigurationRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CertificateBasedAuthConfigurationItemRequestBuilder} from './item/certificateBasedAuthConfigurationItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the certificateBasedAuthConfiguration property of the microsoft.graph.organization entity.
 */
export class CertificateBasedAuthConfigurationRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the certificateBasedAuthConfiguration property of the microsoft.graph.organization entity.
     * @param certificateBasedAuthConfigurationId The unique identifier of certificateBasedAuthConfiguration
     * @returns a CertificateBasedAuthConfigurationItemRequestBuilder
     */
    public byCertificateBasedAuthConfigurationId(certificateBasedAuthConfigurationId: string) : CertificateBasedAuthConfigurationItemRequestBuilder {
        if(!certificateBasedAuthConfigurationId) throw new Error("certificateBasedAuthConfigurationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["certificateBasedAuthConfiguration%2Did"] = certificateBasedAuthConfigurationId
        return new CertificateBasedAuthConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CertificateBasedAuthConfigurationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/organization/{organization%2Did}/certificateBasedAuthConfiguration{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of certificateBasedAuthConfiguration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CertificateBasedAuthConfigurationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/certificatebasedauthconfiguration-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CertificateBasedAuthConfigurationRequestBuilderGetRequestConfiguration | undefined) : Promise<CertificateBasedAuthConfigurationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CertificateBasedAuthConfigurationCollectionResponse>(requestInfo, createCertificateBasedAuthConfigurationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new certificateBasedAuthConfiguration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CertificateBasedAuthConfiguration
     * @see {@link https://learn.microsoft.com/graph/api/certificatebasedauthconfiguration-post-certificatebasedauthconfiguration?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CertificateBasedAuthConfiguration, requestConfiguration?: CertificateBasedAuthConfigurationRequestBuilderPostRequestConfiguration | undefined) : Promise<CertificateBasedAuthConfiguration | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CertificateBasedAuthConfiguration>(requestInfo, createCertificateBasedAuthConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of certificateBasedAuthConfiguration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CertificateBasedAuthConfigurationRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new certificateBasedAuthConfiguration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CertificateBasedAuthConfiguration, requestConfiguration?: CertificateBasedAuthConfigurationRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCertificateBasedAuthConfiguration);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a certificateBasedAuthConfigurationRequestBuilder
     */
    public withUrl(rawUrl: string) : CertificateBasedAuthConfigurationRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CertificateBasedAuthConfigurationRequestBuilder(rawUrl, this.requestAdapter);
    };
}
