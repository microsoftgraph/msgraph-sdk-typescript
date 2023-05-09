import {createPasswordResetResponseFromDiscriminatorValue} from '../../../../../models/createPasswordResetResponseFromDiscriminatorValue';
import {deserializeIntoPasswordResetResponse} from '../../../../../models/deserializeIntoPasswordResetResponse';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {PasswordResetResponse} from '../../../../../models/passwordResetResponse';
import {serializePasswordResetResponse} from '../../../../../models/serializePasswordResetResponse';
import {deserializeIntoResetPasswordPostRequestBody} from './deserializeIntoResetPasswordPostRequestBody';
import {ResetPasswordPostRequestBody} from './resetPasswordPostRequestBody';
import {ResetPasswordRequestBuilderPostRequestConfiguration} from './resetPasswordRequestBuilderPostRequestConfiguration';
import {serializeResetPasswordPostRequestBody} from './serializeResetPasswordPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

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
     * Invoke action resetPassword
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PasswordResetResponse
     */
    public post(body: ResetPasswordPostRequestBody | undefined, requestConfiguration?: ResetPasswordRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PasswordResetResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<PasswordResetResponse>(requestInfo, createPasswordResetResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke action resetPassword
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ResetPasswordPostRequestBody | undefined, requestConfiguration?: ResetPasswordRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeResetPasswordPostRequestBody);
        return requestInfo;
    };
}
