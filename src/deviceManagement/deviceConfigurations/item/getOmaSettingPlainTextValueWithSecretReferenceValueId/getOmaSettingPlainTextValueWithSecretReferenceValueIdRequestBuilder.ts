import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseFromDiscriminatorValue} from './createGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseFromDiscriminatorValue';
import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderGetRequestConfiguration} from './getOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderGetRequestConfiguration';
import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse} from './index';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getOmaSettingPlainTextValue method.
 */
export class GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param secretReferenceValueId Usage: secretReferenceValueId='{secretReferenceValueId}'
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, secretReferenceValueId?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/getOmaSettingPlainTextValue(secretReferenceValueId='{secretReferenceValueId}')");
        this.pathParameters["secretReferenceValueId"] = secretReferenceValueId
    };
    /**
     * Invoke function getOmaSettingPlainTextValue
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse
     */
    public get(requestConfiguration?: GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderGetRequestConfiguration | undefined) : Promise<GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse>(requestInfo, createGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function getOmaSettingPlainTextValue
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
