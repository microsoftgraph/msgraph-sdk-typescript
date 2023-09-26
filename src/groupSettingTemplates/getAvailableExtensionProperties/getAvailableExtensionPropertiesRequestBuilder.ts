import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { deserializeIntoGetAvailableExtensionPropertiesPostRequestBody, serializeGetAvailableExtensionPropertiesPostRequestBody, type GetAvailableExtensionPropertiesPostRequestBody } from './getAvailableExtensionPropertiesPostRequestBody';
import { createGetAvailableExtensionPropertiesResponseFromDiscriminatorValue, deserializeIntoGetAvailableExtensionPropertiesResponse, serializeGetAvailableExtensionPropertiesResponse, type GetAvailableExtensionPropertiesResponse } from './getAvailableExtensionPropertiesResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetAvailableExtensionPropertiesRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to call the getAvailableExtensionProperties method.
 */
export class GetAvailableExtensionPropertiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetAvailableExtensionPropertiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groupSettingTemplates/getAvailableExtensionProperties");
    };
    /**
     * Return all directory extension definitions that have been registered in a directory, including through multi-tenant apps. The following entities support extension properties:+ user+ group+ administrativeUnit+ application+ device+ organization
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetAvailableExtensionPropertiesResponse
     * @see {@link https://learn.microsoft.com/graph/api/directoryobject-getavailableextensionproperties?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetAvailableExtensionPropertiesPostRequestBody, requestConfiguration?: GetAvailableExtensionPropertiesRequestBuilderPostRequestConfiguration | undefined) : Promise<GetAvailableExtensionPropertiesResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetAvailableExtensionPropertiesResponse>(requestInfo, createGetAvailableExtensionPropertiesResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Return all directory extension definitions that have been registered in a directory, including through multi-tenant apps. The following entities support extension properties:+ user+ group+ administrativeUnit+ application+ device+ organization
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetAvailableExtensionPropertiesPostRequestBody, requestConfiguration?: GetAvailableExtensionPropertiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGetAvailableExtensionPropertiesPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a getAvailableExtensionPropertiesRequestBuilder
     */
    public withUrl(rawUrl: string) : GetAvailableExtensionPropertiesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetAvailableExtensionPropertiesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
