import {ManagedDeviceOverview} from '../../models/';
import {createManagedDeviceOverviewFromDiscriminatorValue} from '../../models/createManagedDeviceOverviewFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {ManagedDeviceOverviewRequestBuilderGetRequestConfiguration} from './managedDeviceOverviewRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedDeviceOverview property of the microsoft.graph.deviceManagement entity.
 */
export class ManagedDeviceOverviewRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ManagedDeviceOverviewRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/managedDeviceOverview{?%24select,%24expand}");
    };
    /**
     * Read properties and relationships of the managedDeviceOverview object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceOverview
     * @see {@link https://learn.microsoft.com/graph/api/intune-devices-manageddeviceoverview-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ManagedDeviceOverviewRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedDeviceOverview | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceOverview>(requestInfo, createManagedDeviceOverviewFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read properties and relationships of the managedDeviceOverview object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedDeviceOverviewRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a managedDeviceOverviewRequestBuilder
     */
    public withUrl(rawUrl: string) : ManagedDeviceOverviewRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ManagedDeviceOverviewRequestBuilder(rawUrl, this.requestAdapter);
    };
}
