import {createWindowsProtectionStateFromDiscriminatorValue} from '../../../../../models/createWindowsProtectionStateFromDiscriminatorValue';
import {deserializeIntoWindowsProtectionState} from '../../../../../models/deserializeIntoWindowsProtectionState';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeWindowsProtectionState} from '../../../../../models/serializeWindowsProtectionState';
import {WindowsProtectionState} from '../../../../../models/windowsProtectionState';
import {DetectedMalwareStateRequestBuilder} from './detectedMalwareState/detectedMalwareStateRequestBuilder';
import {WindowsProtectionStateRequestBuilderDeleteRequestConfiguration} from './windowsProtectionStateRequestBuilderDeleteRequestConfiguration';
import {WindowsProtectionStateRequestBuilderGetRequestConfiguration} from './windowsProtectionStateRequestBuilderGetRequestConfiguration';
import {WindowsProtectionStateRequestBuilderPatchRequestConfiguration} from './windowsProtectionStateRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsProtectionState property of the microsoft.graph.managedDevice entity.
 */
export class WindowsProtectionStateRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the detectedMalwareState property of the microsoft.graph.windowsProtectionState entity.
     */
    public get detectedMalwareState(): DetectedMalwareStateRequestBuilder {
        return new DetectedMalwareStateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WindowsProtectionStateRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/managedDevices/{managedDevice%2Did}/windowsProtectionState{?%24select,%24expand}");
    };
    /**
     * Delete navigation property windowsProtectionState for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: WindowsProtectionStateRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * The device protection status. This property is read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsProtectionState
     */
    public get(requestConfiguration?: WindowsProtectionStateRequestBuilderGetRequestConfiguration | undefined) : Promise<WindowsProtectionState | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsProtectionState>(requestInfo, createWindowsProtectionStateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property windowsProtectionState in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsProtectionState
     */
    public patch(body: WindowsProtectionState | undefined, requestConfiguration?: WindowsProtectionStateRequestBuilderPatchRequestConfiguration | undefined) : Promise<WindowsProtectionState | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsProtectionState>(requestInfo, createWindowsProtectionStateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property windowsProtectionState for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WindowsProtectionStateRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * The device protection status. This property is read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WindowsProtectionStateRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property windowsProtectionState in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WindowsProtectionState | undefined, requestConfiguration?: WindowsProtectionStateRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWindowsProtectionState);
        return requestInfo;
    };
}
