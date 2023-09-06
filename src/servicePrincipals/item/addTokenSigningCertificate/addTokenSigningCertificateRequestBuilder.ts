import { createSelfSignedCertificateFromDiscriminatorValue } from '../../../models/createSelfSignedCertificateFromDiscriminatorValue';
import { deserializeIntoSelfSignedCertificate } from '../../../models/deserializeIntoSelfSignedCertificate';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { type SelfSignedCertificate } from '../../../models/selfSignedCertificate';
import { serializeSelfSignedCertificate } from '../../../models/serializeSelfSignedCertificate';
import { type AddTokenSigningCertificatePostRequestBody } from './addTokenSigningCertificatePostRequestBody';
import { type AddTokenSigningCertificateRequestBuilderPostRequestConfiguration } from './addTokenSigningCertificateRequestBuilderPostRequestConfiguration';
import { deserializeIntoAddTokenSigningCertificatePostRequestBody } from './deserializeIntoAddTokenSigningCertificatePostRequestBody';
import { serializeAddTokenSigningCertificatePostRequestBody } from './serializeAddTokenSigningCertificatePostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the addTokenSigningCertificate method.
 */
export class AddTokenSigningCertificateRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AddTokenSigningCertificateRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/addTokenSigningCertificate");
    };
    /**
     * Create a self-signed signing certificate and return a selfSignedCertificate object, which is the public part of the generated certificate.  The self-signed signing certificate is composed of the following objects, which are added to the servicePrincipal: + The keyCredentials object with the following objects:    + A private key object with usage set to Sign.    + A public key object with usage set to Verify.+ The passwordCredentials object.  All the objects have the same value of customKeyIdentifier. The passwordCredential is used to open the PFX file (private key). It and the associated private key object have the same value of keyId. When set during creation through the displayName property, the subject of the certificate cannot be updated. The startDateTime is set to the same time the certificate is created using the action. The endDateTime can be up to three years after the certificate is created.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SelfSignedCertificate
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipal-addtokensigningcertificate?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AddTokenSigningCertificatePostRequestBody, requestConfiguration?: AddTokenSigningCertificateRequestBuilderPostRequestConfiguration | undefined) : Promise<SelfSignedCertificate | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SelfSignedCertificate>(requestInfo, createSelfSignedCertificateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a self-signed signing certificate and return a selfSignedCertificate object, which is the public part of the generated certificate.  The self-signed signing certificate is composed of the following objects, which are added to the servicePrincipal: + The keyCredentials object with the following objects:    + A private key object with usage set to Sign.    + A public key object with usage set to Verify.+ The passwordCredentials object.  All the objects have the same value of customKeyIdentifier. The passwordCredential is used to open the PFX file (private key). It and the associated private key object have the same value of keyId. When set during creation through the displayName property, the subject of the certificate cannot be updated. The startDateTime is set to the same time the certificate is created using the action. The endDateTime can be up to three years after the certificate is created.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AddTokenSigningCertificatePostRequestBody, requestConfiguration?: AddTokenSigningCertificateRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAddTokenSigningCertificatePostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a addTokenSigningCertificateRequestBuilder
     */
    public withUrl(rawUrl: string) : AddTokenSigningCertificateRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AddTokenSigningCertificateRequestBuilder(rawUrl, this.requestAdapter);
    };
}
