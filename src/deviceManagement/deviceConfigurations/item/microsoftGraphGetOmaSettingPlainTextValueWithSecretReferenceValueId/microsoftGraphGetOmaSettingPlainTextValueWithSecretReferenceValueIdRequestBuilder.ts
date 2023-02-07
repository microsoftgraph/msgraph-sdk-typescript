import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {createGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseFromDiscriminatorValue} from './createGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseFromDiscriminatorValue';
import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse} from './index';
import {MicrosoftGraphGetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderGetRequestConfiguration} from './microsoftGraphGetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderGetRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getOmaSettingPlainTextValue method.
 */
export class MicrosoftGraphGetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder {
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new MicrosoftGraphGetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param secretReferenceValueId Usage: secretReferenceValueId='{secretReferenceValueId}'
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, secretReferenceValueId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/microsoft.graph.getOmaSettingPlainTextValue(secretReferenceValueId='{secretReferenceValueId}')";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["secretReferenceValueId"] = secretReferenceValueId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function getOmaSettingPlainTextValue
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse
     */
    public get(requestConfiguration?: MicrosoftGraphGetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse>(requestInfo, createGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke function getOmaSettingPlainTextValue
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MicrosoftGraphGetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
