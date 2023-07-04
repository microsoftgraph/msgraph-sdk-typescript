import {DeviceCategoryCollectionResponse} from '../../models/';
import {createDeviceCategoryCollectionResponseFromDiscriminatorValue} from '../../models/createDeviceCategoryCollectionResponseFromDiscriminatorValue';
import {createDeviceCategoryFromDiscriminatorValue} from '../../models/createDeviceCategoryFromDiscriminatorValue';
import {deserializeIntoDeviceCategory} from '../../models/deserializeIntoDeviceCategory';
import {DeviceCategory} from '../../models/deviceCategory';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDeviceCategory} from '../../models/serializeDeviceCategory';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceCategoriesRequestBuilderGetRequestConfiguration} from './deviceCategoriesRequestBuilderGetRequestConfiguration';
import {DeviceCategoriesRequestBuilderPostRequestConfiguration} from './deviceCategoriesRequestBuilderPostRequestConfiguration';
import {DeviceCategoryItemRequestBuilder} from './item/deviceCategoryItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceCategories property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceCategoriesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceCategories property of the microsoft.graph.deviceManagement entity.
     * @param deviceCategoryId Unique identifier of the item
     * @returns a DeviceCategoryItemRequestBuilder
     */
    public byDeviceCategoryId(deviceCategoryId: string) : DeviceCategoryItemRequestBuilder {
        if(!deviceCategoryId) throw new Error("deviceCategoryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCategory%2Did"] = deviceCategoryId
        return new DeviceCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceCategoriesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCategories{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the deviceCategory objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCategoryCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/intune-onboarding-devicecategory-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceCategoriesRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceCategoryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCategoryCollectionResponse>(requestInfo, createDeviceCategoryCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new deviceCategory object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCategory
     * @see {@link https://docs.microsoft.com/graph/api/intune-onboarding-devicecategory-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceCategory | undefined, requestConfiguration?: DeviceCategoriesRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceCategory | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCategory>(requestInfo, createDeviceCategoryFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the deviceCategory objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceCategoriesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new deviceCategory object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceCategory | undefined, requestConfiguration?: DeviceCategoriesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceCategory);
        return requestInfo;
    };
}
