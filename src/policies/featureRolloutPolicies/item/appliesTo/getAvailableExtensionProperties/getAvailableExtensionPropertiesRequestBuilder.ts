import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {createGetAvailableExtensionPropertiesResponseFromDiscriminatorValue} from './createGetAvailableExtensionPropertiesResponseFromDiscriminatorValue';
import {deserializeIntoGetAvailableExtensionPropertiesPostRequestBody} from './deserializeIntoGetAvailableExtensionPropertiesPostRequestBody';
import {deserializeIntoGetAvailableExtensionPropertiesResponse} from './deserializeIntoGetAvailableExtensionPropertiesResponse';
import type {GetAvailableExtensionPropertiesPostRequestBody} from './getAvailableExtensionPropertiesPostRequestBody';
import {GetAvailableExtensionPropertiesRequestBuilderPostRequestConfiguration} from './getAvailableExtensionPropertiesRequestBuilderPostRequestConfiguration';
import type {GetAvailableExtensionPropertiesResponse} from './getAvailableExtensionPropertiesResponse';
import {serializeGetAvailableExtensionPropertiesPostRequestBody} from './serializeGetAvailableExtensionPropertiesPostRequestBody';
import {serializeGetAvailableExtensionPropertiesResponse} from './serializeGetAvailableExtensionPropertiesResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
        super(pathParameters, requestAdapter, "{+baseurl}/policies/featureRolloutPolicies/{featureRolloutPolicy%2Did}/appliesTo/getAvailableExtensionProperties");
    };
    /**
     * Return all directory extension definitions that have been registered in a directory, including through multi-tenant apps. The following entities support extension properties:+ user+ group+ administrativeUnit+ application+ device+ organization
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetAvailableExtensionPropertiesResponse
     * @see {@link https://learn.microsoft.com/graph/api/directoryobject-getavailableextensionproperties?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetAvailableExtensionPropertiesPostRequestBody | undefined, requestConfiguration?: GetAvailableExtensionPropertiesRequestBuilderPostRequestConfiguration | undefined) : Promise<GetAvailableExtensionPropertiesResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
    public toPostRequestInformation(body: GetAvailableExtensionPropertiesPostRequestBody | undefined, requestConfiguration?: GetAvailableExtensionPropertiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetAvailableExtensionPropertiesPostRequestBody);
        return requestInfo;
    };
}
