import {WindowsAutopilotDeviceIdentity} from '../../../models/';
import {createWindowsAutopilotDeviceIdentityFromDiscriminatorValue} from '../../../models/createWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AssignUserToDeviceRequestBuilder} from './microsoftGraphAssignUserToDevice/assignUserToDeviceRequestBuilder';
import {UnassignUserFromDeviceRequestBuilder} from './microsoftGraphUnassignUserFromDevice/unassignUserFromDeviceRequestBuilder';
import {UpdateDevicePropertiesRequestBuilder} from './microsoftGraphUpdateDeviceProperties/updateDevicePropertiesRequestBuilder';
import {WindowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration} from './windowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration';
import {WindowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration} from './windowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration';
import {WindowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration} from './windowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity.
 */
export class WindowsAutopilotDeviceIdentityItemRequestBuilder {
    /** Provides operations to call the assignUserToDevice method. */
    public get microsoftGraphAssignUserToDevice(): AssignUserToDeviceRequestBuilder {
        return new AssignUserToDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unassignUserFromDevice method. */
    public get microsoftGraphUnassignUserFromDevice(): UnassignUserFromDeviceRequestBuilder {
        return new UnassignUserFromDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the updateDeviceProperties method. */
    public get microsoftGraphUpdateDeviceProperties(): UpdateDevicePropertiesRequestBuilder {
        return new UpdateDevicePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new WindowsAutopilotDeviceIdentityItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param windowsAutopilotDeviceIdentityId key: id of windowsAutopilotDeviceIdentity
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, windowsAutopilotDeviceIdentityId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["windowsAutopilotDeviceIdentity%2Did"] = windowsAutopilotDeviceIdentityId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property windowsAutopilotDeviceIdentities for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The Windows autopilot device identities contained collection.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WindowsAutopilotDeviceIdentity
     */
    public get(requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WindowsAutopilotDeviceIdentity | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WindowsAutopilotDeviceIdentity>(requestInfo, createWindowsAutopilotDeviceIdentityFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property windowsAutopilotDeviceIdentities in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WindowsAutopilotDeviceIdentity
     */
    public patch(body: WindowsAutopilotDeviceIdentity | undefined, requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WindowsAutopilotDeviceIdentity | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WindowsAutopilotDeviceIdentity>(requestInfo, createWindowsAutopilotDeviceIdentityFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property windowsAutopilotDeviceIdentities for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The Windows autopilot device identities contained collection.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property windowsAutopilotDeviceIdentities in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WindowsAutopilotDeviceIdentity | undefined, requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
