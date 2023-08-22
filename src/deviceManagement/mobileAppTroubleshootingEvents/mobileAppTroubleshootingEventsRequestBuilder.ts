import {MobileAppTroubleshootingEventCollectionResponse} from '../../models/';
import {createMobileAppTroubleshootingEventCollectionResponseFromDiscriminatorValue} from '../../models/createMobileAppTroubleshootingEventCollectionResponseFromDiscriminatorValue';
import {createMobileAppTroubleshootingEventFromDiscriminatorValue} from '../../models/createMobileAppTroubleshootingEventFromDiscriminatorValue';
import {deserializeIntoMobileAppTroubleshootingEvent} from '../../models/deserializeIntoMobileAppTroubleshootingEvent';
import type {MobileAppTroubleshootingEvent} from '../../models/mobileAppTroubleshootingEvent';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeMobileAppTroubleshootingEvent} from '../../models/serializeMobileAppTroubleshootingEvent';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {MobileAppTroubleshootingEventItemRequestBuilder} from './item/mobileAppTroubleshootingEventItemRequestBuilder';
import {MobileAppTroubleshootingEventsRequestBuilderGetRequestConfiguration} from './mobileAppTroubleshootingEventsRequestBuilderGetRequestConfiguration';
import {MobileAppTroubleshootingEventsRequestBuilderPostRequestConfiguration} from './mobileAppTroubleshootingEventsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mobileAppTroubleshootingEvents property of the microsoft.graph.deviceManagement entity.
 */
export class MobileAppTroubleshootingEventsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the mobileAppTroubleshootingEvents property of the microsoft.graph.deviceManagement entity.
     * @param mobileAppTroubleshootingEventId The unique identifier of mobileAppTroubleshootingEvent
     * @returns a MobileAppTroubleshootingEventItemRequestBuilder
     */
    public byMobileAppTroubleshootingEventId(mobileAppTroubleshootingEventId: string) : MobileAppTroubleshootingEventItemRequestBuilder {
        if(!mobileAppTroubleshootingEventId) throw new Error("mobileAppTroubleshootingEventId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileAppTroubleshootingEvent%2Did"] = mobileAppTroubleshootingEventId
        return new MobileAppTroubleshootingEventItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MobileAppTroubleshootingEventsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/mobileAppTroubleshootingEvents{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the mobileAppTroubleshootingEvent objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppTroubleshootingEventCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-devices-mobileapptroubleshootingevent-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MobileAppTroubleshootingEventsRequestBuilderGetRequestConfiguration | undefined) : Promise<MobileAppTroubleshootingEventCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileAppTroubleshootingEventCollectionResponse>(requestInfo, createMobileAppTroubleshootingEventCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new mobileAppTroubleshootingEvent object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppTroubleshootingEvent
     * @see {@link https://learn.microsoft.com/graph/api/intune-devices-mobileapptroubleshootingevent-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MobileAppTroubleshootingEvent, requestConfiguration?: MobileAppTroubleshootingEventsRequestBuilderPostRequestConfiguration | undefined) : Promise<MobileAppTroubleshootingEvent | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileAppTroubleshootingEvent>(requestInfo, createMobileAppTroubleshootingEventFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the mobileAppTroubleshootingEvent objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MobileAppTroubleshootingEventsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new mobileAppTroubleshootingEvent object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MobileAppTroubleshootingEvent, requestConfiguration?: MobileAppTroubleshootingEventsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMobileAppTroubleshootingEvent);
        return requestInfo;
    };
}
