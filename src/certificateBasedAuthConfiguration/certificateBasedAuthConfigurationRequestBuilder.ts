import {CertificateBasedAuthConfigurationCollectionResponse} from '../models/';
import type {CertificateBasedAuthConfiguration} from '../models/certificateBasedAuthConfiguration';
import {createCertificateBasedAuthConfigurationCollectionResponseFromDiscriminatorValue} from '../models/createCertificateBasedAuthConfigurationCollectionResponseFromDiscriminatorValue';
import {createCertificateBasedAuthConfigurationFromDiscriminatorValue} from '../models/createCertificateBasedAuthConfigurationFromDiscriminatorValue';
import {deserializeIntoCertificateBasedAuthConfiguration} from '../models/deserializeIntoCertificateBasedAuthConfiguration';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeCertificateBasedAuthConfiguration} from '../models/serializeCertificateBasedAuthConfiguration';
import {CertificateBasedAuthConfigurationRequestBuilderGetRequestConfiguration} from './certificateBasedAuthConfigurationRequestBuilderGetRequestConfiguration';
import {CertificateBasedAuthConfigurationRequestBuilderPostRequestConfiguration} from './certificateBasedAuthConfigurationRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CertificateBasedAuthConfigurationItemRequestBuilder} from './item/certificateBasedAuthConfigurationItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of certificateBasedAuthConfiguration entities.
 */
export class CertificateBasedAuthConfigurationRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of certificateBasedAuthConfiguration entities.
     * @param certificateBasedAuthConfigurationId Unique identifier of the item
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
        super(pathParameters, requestAdapter, "{+baseurl}/certificateBasedAuthConfiguration{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get entities from certificateBasedAuthConfiguration
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CertificateBasedAuthConfigurationCollectionResponse
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
     * Add new entity to certificateBasedAuthConfiguration
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CertificateBasedAuthConfiguration
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
     * Get entities from certificateBasedAuthConfiguration
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
     * Add new entity to certificateBasedAuthConfiguration
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
}
