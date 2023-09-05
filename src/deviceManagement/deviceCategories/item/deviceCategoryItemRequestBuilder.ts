import { createDeviceCategoryFromDiscriminatorValue } from '../../../models/createDeviceCategoryFromDiscriminatorValue';
import { deserializeIntoDeviceCategory } from '../../../models/deserializeIntoDeviceCategory';
import { type DeviceCategory } from '../../../models/deviceCategory';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeDeviceCategory } from '../../../models/serializeDeviceCategory';
import { type DeviceCategoryItemRequestBuilderDeleteRequestConfiguration } from './deviceCategoryItemRequestBuilderDeleteRequestConfiguration';
import { type DeviceCategoryItemRequestBuilderGetRequestConfiguration } from './deviceCategoryItemRequestBuilderGetRequestConfiguration';
import { type DeviceCategoryItemRequestBuilderPatchRequestConfiguration } from './deviceCategoryItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceCategories property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceCategoryItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceCategoryItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCategories/{deviceCategory%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a deviceCategory.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-devicecategory-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DeviceCategoryItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the deviceCategory object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCategory
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-devicecategory-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceCategoryItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceCategory | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCategory>(requestInfo, createDeviceCategoryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceCategory object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCategory
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-devicecategory-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceCategory, requestConfiguration?: DeviceCategoryItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceCategory | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCategory>(requestInfo, createDeviceCategoryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a deviceCategory.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceCategoryItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the deviceCategory object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceCategoryItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceCategory object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceCategory, requestConfiguration?: DeviceCategoryItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceCategory);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DeviceCategoryItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceCategoryItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceCategoryItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
