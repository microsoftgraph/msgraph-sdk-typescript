import {createPasswordCredentialFromDiscriminatorValue} from '../../../models/createPasswordCredentialFromDiscriminatorValue';
import {deserializeIntoPasswordCredential} from '../../../models/deserializeIntoPasswordCredential';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import type {PasswordCredential} from '../../../models/passwordCredential';
import {serializePasswordCredential} from '../../../models/serializePasswordCredential';
import type {AddPasswordPostRequestBody} from './addPasswordPostRequestBody';
import {AddPasswordRequestBuilderPostRequestConfiguration} from './addPasswordRequestBuilderPostRequestConfiguration';
import {deserializeIntoAddPasswordPostRequestBody} from './deserializeIntoAddPasswordPostRequestBody';
import {serializeAddPasswordPostRequestBody} from './serializeAddPasswordPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the addPassword method.
 */
export class AddPasswordRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AddPasswordRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/addPassword");
    };
    /**
     * Add a strong password or secret to a servicePrincipal object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PasswordCredential
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipal-addpassword?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AddPasswordPostRequestBody, requestConfiguration?: AddPasswordRequestBuilderPostRequestConfiguration | undefined) : Promise<PasswordCredential | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PasswordCredential>(requestInfo, createPasswordCredentialFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add a strong password or secret to a servicePrincipal object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AddPasswordPostRequestBody, requestConfiguration?: AddPasswordRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAddPasswordPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a addPasswordRequestBuilder
     */
    public withUrl(rawUrl: string) : AddPasswordRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AddPasswordRequestBuilder(rawUrl, this.requestAdapter);
    };
}
