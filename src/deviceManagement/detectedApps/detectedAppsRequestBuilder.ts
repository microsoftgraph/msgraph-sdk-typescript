import {DetectedAppCollectionResponse} from '../../models/';
import {createDetectedAppCollectionResponseFromDiscriminatorValue} from '../../models/createDetectedAppCollectionResponseFromDiscriminatorValue';
import {createDetectedAppFromDiscriminatorValue} from '../../models/createDetectedAppFromDiscriminatorValue';
import {deserializeIntoDetectedApp} from '../../models/deserializeIntoDetectedApp';
import type {DetectedApp} from '../../models/detectedApp';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDetectedApp} from '../../models/serializeDetectedApp';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DetectedAppsRequestBuilderGetRequestConfiguration} from './detectedAppsRequestBuilderGetRequestConfiguration';
import {DetectedAppsRequestBuilderPostRequestConfiguration} from './detectedAppsRequestBuilderPostRequestConfiguration';
import {DetectedAppItemRequestBuilder} from './item/detectedAppItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the detectedApps property of the microsoft.graph.deviceManagement entity.
 */
export class DetectedAppsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the detectedApps property of the microsoft.graph.deviceManagement entity.
     * @param detectedAppId Unique identifier of the item
     * @returns a DetectedAppItemRequestBuilder
     */
    public byDetectedAppId(detectedAppId: string) : DetectedAppItemRequestBuilder {
        if(!detectedAppId) throw new Error("detectedAppId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["detectedApp%2Did"] = detectedAppId
        return new DetectedAppItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DetectedAppsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/detectedApps{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the detectedApp objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DetectedAppCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-devices-detectedapp-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DetectedAppsRequestBuilderGetRequestConfiguration | undefined) : Promise<DetectedAppCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DetectedAppCollectionResponse>(requestInfo, createDetectedAppCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new detectedApp object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DetectedApp
     * @see {@link https://learn.microsoft.com/graph/api/intune-devices-detectedapp-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DetectedApp, requestConfiguration?: DetectedAppsRequestBuilderPostRequestConfiguration | undefined) : Promise<DetectedApp | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DetectedApp>(requestInfo, createDetectedAppFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the detectedApp objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DetectedAppsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new detectedApp object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DetectedApp, requestConfiguration?: DetectedAppsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDetectedApp);
        return requestInfo;
    };
}
