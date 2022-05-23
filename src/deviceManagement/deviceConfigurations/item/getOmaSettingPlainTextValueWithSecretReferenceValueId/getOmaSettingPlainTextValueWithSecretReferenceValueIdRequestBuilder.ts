import {createGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseFromDiscriminatorValue} from './createGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseFromDiscriminatorValue';
import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderGetRequestConfiguration} from './getOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderGetRequestConfiguration';
import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseImpl} from './index';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getOmaSettingPlainTextValue method. */
export class GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param secretReferenceValueId Usage: secretReferenceValueId='{secretReferenceValueId}'
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, secretReferenceValueId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/microsoft.graph.getOmaSettingPlainTextValue(secretReferenceValueId='{secretReferenceValueId}')";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams[""] = secretReferenceValueId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function getOmaSettingPlainTextValue
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Invoke function getOmaSettingPlainTextValue
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse
     */
    public get(requestConfiguration?: GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseImpl>(requestInfo, createGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
