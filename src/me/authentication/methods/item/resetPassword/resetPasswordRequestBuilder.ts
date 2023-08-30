import {createPasswordResetResponseFromDiscriminatorValue} from '../../../../../models/createPasswordResetResponseFromDiscriminatorValue';
import {deserializeIntoPasswordResetResponse} from '../../../../../models/deserializeIntoPasswordResetResponse';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import type {PasswordResetResponse} from '../../../../../models/passwordResetResponse';
import {serializePasswordResetResponse} from '../../../../../models/serializePasswordResetResponse';
import {deserializeIntoResetPasswordPostRequestBody} from './deserializeIntoResetPasswordPostRequestBody';
import type {ResetPasswordPostRequestBody} from './resetPasswordPostRequestBody';
import {ResetPasswordRequestBuilderPostRequestConfiguration} from './resetPasswordRequestBuilderPostRequestConfiguration';
import {serializeResetPasswordPostRequestBody} from './serializeResetPasswordPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the resetPassword method.
 */
export class ResetPasswordRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ResetPasswordRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/authentication/methods/{authenticationMethod%2Did}/resetPassword");
    };
    /**
     * Reset a user's password, represented by a password authentication method object. This can only be done by an administrator with appropriate permissions and cannot be performed on a user's own account. This flow writes the new password to Azure Active Directory and pushes it to on-premises Active Directory if configured using password writeback. The admin can either provide a new password or have the system generate one. The user is prompted to change their password on their next sign in. This reset is a long-running operation and will return a Location header with a link where the caller can periodically check for the status of the reset operation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PasswordResetResponse
     * @see {@link https://learn.microsoft.com/graph/api/authenticationmethod-resetpassword?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ResetPasswordPostRequestBody, requestConfiguration?: ResetPasswordRequestBuilderPostRequestConfiguration | undefined) : Promise<PasswordResetResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PasswordResetResponse>(requestInfo, createPasswordResetResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Reset a user's password, represented by a password authentication method object. This can only be done by an administrator with appropriate permissions and cannot be performed on a user's own account. This flow writes the new password to Azure Active Directory and pushes it to on-premises Active Directory if configured using password writeback. The admin can either provide a new password or have the system generate one. The user is prompted to change their password on their next sign in. This reset is a long-running operation and will return a Location header with a link where the caller can periodically check for the status of the reset operation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ResetPasswordPostRequestBody, requestConfiguration?: ResetPasswordRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeResetPasswordPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a resetPasswordRequestBuilder
     */
    public withUrl(rawUrl: string) : ResetPasswordRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ResetPasswordRequestBuilder(rawUrl, this.requestAdapter);
    };
}
