import {createSettingStateDeviceSummaryFromDiscriminatorValue} from '../../../../../models/createSettingStateDeviceSummaryFromDiscriminatorValue';
import {deserializeIntoSettingStateDeviceSummary} from '../../../../../models/deserializeIntoSettingStateDeviceSummary';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeSettingStateDeviceSummary} from '../../../../../models/serializeSettingStateDeviceSummary';
import {SettingStateDeviceSummary} from '../../../../../models/settingStateDeviceSummary';
import {SettingStateDeviceSummaryItemRequestBuilderDeleteRequestConfiguration} from './settingStateDeviceSummaryItemRequestBuilderDeleteRequestConfiguration';
import {SettingStateDeviceSummaryItemRequestBuilderGetRequestConfiguration} from './settingStateDeviceSummaryItemRequestBuilderGetRequestConfiguration';
import {SettingStateDeviceSummaryItemRequestBuilderPatchRequestConfiguration} from './settingStateDeviceSummaryItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceSettingStateSummaries property of the microsoft.graph.deviceConfiguration entity.
 */
export class SettingStateDeviceSummaryItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SettingStateDeviceSummaryItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/deviceSettingStateSummaries/{settingStateDeviceSummary%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a settingStateDeviceSummary.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/intune-deviceconfig-settingstatedevicesummary-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: SettingStateDeviceSummaryItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the settingStateDeviceSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SettingStateDeviceSummary
     * @see {@link https://docs.microsoft.com/graph/api/intune-deviceconfig-settingstatedevicesummary-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SettingStateDeviceSummaryItemRequestBuilderGetRequestConfiguration | undefined) : Promise<SettingStateDeviceSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SettingStateDeviceSummary>(requestInfo, createSettingStateDeviceSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a settingStateDeviceSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SettingStateDeviceSummary
     * @see {@link https://docs.microsoft.com/graph/api/intune-deviceconfig-settingstatedevicesummary-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: SettingStateDeviceSummary | undefined, requestConfiguration?: SettingStateDeviceSummaryItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<SettingStateDeviceSummary | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SettingStateDeviceSummary>(requestInfo, createSettingStateDeviceSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a settingStateDeviceSummary.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SettingStateDeviceSummaryItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the settingStateDeviceSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SettingStateDeviceSummaryItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a settingStateDeviceSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SettingStateDeviceSummary | undefined, requestConfiguration?: SettingStateDeviceSummaryItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSettingStateDeviceSummary);
        return requestInfo;
    };
}
