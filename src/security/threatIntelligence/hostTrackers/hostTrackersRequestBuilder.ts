import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {HostTrackerCollectionResponse} from '../../../models/security/';
import {createHostTrackerCollectionResponseFromDiscriminatorValue} from '../../../models/security/createHostTrackerCollectionResponseFromDiscriminatorValue';
import {createHostTrackerFromDiscriminatorValue} from '../../../models/security/createHostTrackerFromDiscriminatorValue';
import {deserializeIntoHostTracker} from '../../../models/security/deserializeIntoHostTracker';
import type {HostTracker} from '../../../models/security/hostTracker';
import {serializeHostTracker} from '../../../models/security/serializeHostTracker';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {HostTrackersRequestBuilderGetRequestConfiguration} from './hostTrackersRequestBuilderGetRequestConfiguration';
import {HostTrackersRequestBuilderPostRequestConfiguration} from './hostTrackersRequestBuilderPostRequestConfiguration';
import {HostTrackerItemRequestBuilder} from './item/hostTrackerItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostTrackers property of the microsoft.graph.security.threatIntelligence entity.
 */
export class HostTrackersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the hostTrackers property of the microsoft.graph.security.threatIntelligence entity.
     * @param hostTrackerId The unique identifier of hostTracker
     * @returns a HostTrackerItemRequestBuilder
     */
    public byHostTrackerId(hostTrackerId: string) : HostTrackerItemRequestBuilder {
        if(!hostTrackerId) throw new Error("hostTrackerId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["hostTracker%2Did"] = hostTrackerId
        return new HostTrackerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new HostTrackersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/hostTrackers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of a hostTracker object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostTrackerCollectionResponse
     */
    public get(requestConfiguration?: HostTrackersRequestBuilderGetRequestConfiguration | undefined) : Promise<HostTrackerCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostTrackerCollectionResponse>(requestInfo, createHostTrackerCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to hostTrackers for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostTracker
     */
    public post(body: HostTracker, requestConfiguration?: HostTrackersRequestBuilderPostRequestConfiguration | undefined) : Promise<HostTracker | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostTracker>(requestInfo, createHostTrackerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of a hostTracker object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HostTrackersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to hostTrackers for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: HostTracker, requestConfiguration?: HostTrackersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeHostTracker);
        return requestInfo;
    };
}
