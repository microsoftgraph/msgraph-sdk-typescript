import {createIdentityApiConnectorFromDiscriminatorValue} from '../../../../models/createIdentityApiConnectorFromDiscriminatorValue';
import {deserializeIntoIdentityApiConnector} from '../../../../models/deserializeIntoIdentityApiConnector';
import type {IdentityApiConnector} from '../../../../models/identityApiConnector';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeIdentityApiConnector} from '../../../../models/serializeIdentityApiConnector';
import {deserializeIntoUploadClientCertificatePostRequestBody} from './deserializeIntoUploadClientCertificatePostRequestBody';
import {serializeUploadClientCertificatePostRequestBody} from './serializeUploadClientCertificatePostRequestBody';
import type {UploadClientCertificatePostRequestBody} from './uploadClientCertificatePostRequestBody';
import {UploadClientCertificateRequestBuilderPostRequestConfiguration} from './uploadClientCertificateRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the uploadClientCertificate method.
 */
export class UploadClientCertificateRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UploadClientCertificateRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/apiConnectors/{identityApiConnector%2Did}/uploadClientCertificate");
    };
    /**
     * Upload a PKCS 12 format key (.pfx) to an API connector's authentication configuration. The input is a base-64 encoded value of the PKCS 12 certificate contents. This method returns an apiConnector.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityApiConnector
     * @see {@link https://learn.microsoft.com/graph/api/identityapiconnector-uploadclientcertificate?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UploadClientCertificatePostRequestBody, requestConfiguration?: UploadClientCertificateRequestBuilderPostRequestConfiguration | undefined) : Promise<IdentityApiConnector | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityApiConnector>(requestInfo, createIdentityApiConnectorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Upload a PKCS 12 format key (.pfx) to an API connector's authentication configuration. The input is a base-64 encoded value of the PKCS 12 certificate contents. This method returns an apiConnector.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UploadClientCertificatePostRequestBody, requestConfiguration?: UploadClientCertificateRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUploadClientCertificatePostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a uploadClientCertificateRequestBuilder
     */
    public withUrl(rawUrl: string) : UploadClientCertificateRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UploadClientCertificateRequestBuilder(rawUrl, this.requestAdapter);
    };
}
