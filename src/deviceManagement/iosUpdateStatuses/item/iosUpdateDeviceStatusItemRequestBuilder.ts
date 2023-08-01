import {createIosUpdateDeviceStatusFromDiscriminatorValue} from '../../../models/createIosUpdateDeviceStatusFromDiscriminatorValue';
import {deserializeIntoIosUpdateDeviceStatus} from '../../../models/deserializeIntoIosUpdateDeviceStatus';
import type {IosUpdateDeviceStatus} from '../../../models/iosUpdateDeviceStatus';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeIosUpdateDeviceStatus} from '../../../models/serializeIosUpdateDeviceStatus';
import {IosUpdateDeviceStatusItemRequestBuilderDeleteRequestConfiguration} from './iosUpdateDeviceStatusItemRequestBuilderDeleteRequestConfiguration';
import {IosUpdateDeviceStatusItemRequestBuilderGetRequestConfiguration} from './iosUpdateDeviceStatusItemRequestBuilderGetRequestConfiguration';
import {IosUpdateDeviceStatusItemRequestBuilderPatchRequestConfiguration} from './iosUpdateDeviceStatusItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the iosUpdateStatuses property of the microsoft.graph.deviceManagement entity.
 */
export class IosUpdateDeviceStatusItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new IosUpdateDeviceStatusItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a iosUpdateDeviceStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-iosupdatedevicestatus-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: IosUpdateDeviceStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the iosUpdateDeviceStatus object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IosUpdateDeviceStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-iosupdatedevicestatus-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IosUpdateDeviceStatusItemRequestBuilderGetRequestConfiguration | undefined) : Promise<IosUpdateDeviceStatus | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IosUpdateDeviceStatus>(requestInfo, createIosUpdateDeviceStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a iosUpdateDeviceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IosUpdateDeviceStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-iosupdatedevicestatus-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: IosUpdateDeviceStatus | undefined, requestConfiguration?: IosUpdateDeviceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<IosUpdateDeviceStatus | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IosUpdateDeviceStatus>(requestInfo, createIosUpdateDeviceStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a iosUpdateDeviceStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: IosUpdateDeviceStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the iosUpdateDeviceStatus object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IosUpdateDeviceStatusItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a iosUpdateDeviceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IosUpdateDeviceStatus | undefined, requestConfiguration?: IosUpdateDeviceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIosUpdateDeviceStatus);
        return requestInfo;
    };
}
