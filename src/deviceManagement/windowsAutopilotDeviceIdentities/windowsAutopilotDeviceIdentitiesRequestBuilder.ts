import { type WindowsAutopilotDeviceIdentityCollectionResponse } from '../../models/';
import { createWindowsAutopilotDeviceIdentityCollectionResponseFromDiscriminatorValue } from '../../models/createWindowsAutopilotDeviceIdentityCollectionResponseFromDiscriminatorValue';
import { createWindowsAutopilotDeviceIdentityFromDiscriminatorValue } from '../../models/createWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import { deserializeIntoWindowsAutopilotDeviceIdentity } from '../../models/deserializeIntoWindowsAutopilotDeviceIdentity';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeWindowsAutopilotDeviceIdentity } from '../../models/serializeWindowsAutopilotDeviceIdentity';
import { type WindowsAutopilotDeviceIdentity } from '../../models/windowsAutopilotDeviceIdentity';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { WindowsAutopilotDeviceIdentityItemRequestBuilder } from './item/windowsAutopilotDeviceIdentityItemRequestBuilder';
import { type WindowsAutopilotDeviceIdentitiesRequestBuilderGetRequestConfiguration } from './windowsAutopilotDeviceIdentitiesRequestBuilderGetRequestConfiguration';
import { type WindowsAutopilotDeviceIdentitiesRequestBuilderPostRequestConfiguration } from './windowsAutopilotDeviceIdentitiesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity.
 */
export class WindowsAutopilotDeviceIdentitiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the windowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity.
     * @param windowsAutopilotDeviceIdentityId The unique identifier of windowsAutopilotDeviceIdentity
     * @returns a WindowsAutopilotDeviceIdentityItemRequestBuilder
     */
    public byWindowsAutopilotDeviceIdentityId(windowsAutopilotDeviceIdentityId: string) : WindowsAutopilotDeviceIdentityItemRequestBuilder {
        if(!windowsAutopilotDeviceIdentityId) throw new Error("windowsAutopilotDeviceIdentityId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsAutopilotDeviceIdentity%2Did"] = windowsAutopilotDeviceIdentityId
        return new WindowsAutopilotDeviceIdentityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WindowsAutopilotDeviceIdentitiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/windowsAutopilotDeviceIdentities{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the windowsAutopilotDeviceIdentity objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsAutopilotDeviceIdentityCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-enrollment-windowsautopilotdeviceidentity-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WindowsAutopilotDeviceIdentitiesRequestBuilderGetRequestConfiguration | undefined) : Promise<WindowsAutopilotDeviceIdentityCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsAutopilotDeviceIdentityCollectionResponse>(requestInfo, createWindowsAutopilotDeviceIdentityCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new windowsAutopilotDeviceIdentity object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsAutopilotDeviceIdentity
     * @see {@link https://learn.microsoft.com/graph/api/intune-enrollment-windowsautopilotdeviceidentity-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: WindowsAutopilotDeviceIdentity, requestConfiguration?: WindowsAutopilotDeviceIdentitiesRequestBuilderPostRequestConfiguration | undefined) : Promise<WindowsAutopilotDeviceIdentity | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsAutopilotDeviceIdentity>(requestInfo, createWindowsAutopilotDeviceIdentityFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the windowsAutopilotDeviceIdentity objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WindowsAutopilotDeviceIdentitiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Create a new windowsAutopilotDeviceIdentity object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WindowsAutopilotDeviceIdentity, requestConfiguration?: WindowsAutopilotDeviceIdentitiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWindowsAutopilotDeviceIdentity);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a windowsAutopilotDeviceIdentitiesRequestBuilder
     */
    public withUrl(rawUrl: string) : WindowsAutopilotDeviceIdentitiesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WindowsAutopilotDeviceIdentitiesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
