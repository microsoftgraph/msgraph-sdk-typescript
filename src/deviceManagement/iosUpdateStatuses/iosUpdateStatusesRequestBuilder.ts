import {IosUpdateDeviceStatusCollectionResponse} from '../../models/';
import {createIosUpdateDeviceStatusCollectionResponseFromDiscriminatorValue} from '../../models/createIosUpdateDeviceStatusCollectionResponseFromDiscriminatorValue';
import {createIosUpdateDeviceStatusFromDiscriminatorValue} from '../../models/createIosUpdateDeviceStatusFromDiscriminatorValue';
import {deserializeIntoIosUpdateDeviceStatus} from '../../models/deserializeIntoIosUpdateDeviceStatus';
import type {IosUpdateDeviceStatus} from '../../models/iosUpdateDeviceStatus';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeIosUpdateDeviceStatus} from '../../models/serializeIosUpdateDeviceStatus';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {IosUpdateStatusesRequestBuilderGetRequestConfiguration} from './iosUpdateStatusesRequestBuilderGetRequestConfiguration';
import {IosUpdateStatusesRequestBuilderPostRequestConfiguration} from './iosUpdateStatusesRequestBuilderPostRequestConfiguration';
import {IosUpdateDeviceStatusItemRequestBuilder} from './item/iosUpdateDeviceStatusItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the iosUpdateStatuses property of the microsoft.graph.deviceManagement entity.
 */
export class IosUpdateStatusesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the iosUpdateStatuses property of the microsoft.graph.deviceManagement entity.
     * @param iosUpdateDeviceStatusId Unique identifier of the item
     * @returns a IosUpdateDeviceStatusItemRequestBuilder
     */
    public byIosUpdateDeviceStatusId(iosUpdateDeviceStatusId: string) : IosUpdateDeviceStatusItemRequestBuilder {
        if(!iosUpdateDeviceStatusId) throw new Error("iosUpdateDeviceStatusId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["iosUpdateDeviceStatus%2Did"] = iosUpdateDeviceStatusId
        return new IosUpdateDeviceStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new IosUpdateStatusesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/iosUpdateStatuses{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the iosUpdateDeviceStatus objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IosUpdateDeviceStatusCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-iosupdatedevicestatus-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IosUpdateStatusesRequestBuilderGetRequestConfiguration | undefined) : Promise<IosUpdateDeviceStatusCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IosUpdateDeviceStatusCollectionResponse>(requestInfo, createIosUpdateDeviceStatusCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new iosUpdateDeviceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IosUpdateDeviceStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-iosupdatedevicestatus-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: IosUpdateDeviceStatus | undefined, requestConfiguration?: IosUpdateStatusesRequestBuilderPostRequestConfiguration | undefined) : Promise<IosUpdateDeviceStatus | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IosUpdateDeviceStatus>(requestInfo, createIosUpdateDeviceStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the iosUpdateDeviceStatus objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IosUpdateStatusesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new iosUpdateDeviceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: IosUpdateDeviceStatus | undefined, requestConfiguration?: IosUpdateStatusesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIosUpdateDeviceStatus);
        return requestInfo;
    };
}
