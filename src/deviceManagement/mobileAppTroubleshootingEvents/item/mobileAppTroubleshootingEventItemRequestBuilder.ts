import {createMobileAppTroubleshootingEventFromDiscriminatorValue} from '../../../models/createMobileAppTroubleshootingEventFromDiscriminatorValue';
import {deserializeIntoMobileAppTroubleshootingEvent} from '../../../models/deserializeIntoMobileAppTroubleshootingEvent';
import {MobileAppTroubleshootingEvent} from '../../../models/mobileAppTroubleshootingEvent';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeMobileAppTroubleshootingEvent} from '../../../models/serializeMobileAppTroubleshootingEvent';
import {AppLogCollectionRequestsRequestBuilder} from './appLogCollectionRequests/appLogCollectionRequestsRequestBuilder';
import {MobileAppTroubleshootingEventItemRequestBuilderDeleteRequestConfiguration} from './mobileAppTroubleshootingEventItemRequestBuilderDeleteRequestConfiguration';
import {MobileAppTroubleshootingEventItemRequestBuilderGetRequestConfiguration} from './mobileAppTroubleshootingEventItemRequestBuilderGetRequestConfiguration';
import {MobileAppTroubleshootingEventItemRequestBuilderPatchRequestConfiguration} from './mobileAppTroubleshootingEventItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mobileAppTroubleshootingEvents property of the microsoft.graph.deviceManagement entity.
 */
export class MobileAppTroubleshootingEventItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the appLogCollectionRequests property of the microsoft.graph.mobileAppTroubleshootingEvent entity.
     */
    public get appLogCollectionRequests(): AppLogCollectionRequestsRequestBuilder {
        return new AppLogCollectionRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new MobileAppTroubleshootingEventItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property mobileAppTroubleshootingEvents for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: MobileAppTroubleshootingEventItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The collection property of MobileAppTroubleshootingEvent.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppTroubleshootingEvent
     */
    public get(requestConfiguration?: MobileAppTroubleshootingEventItemRequestBuilderGetRequestConfiguration | undefined) : Promise<MobileAppTroubleshootingEvent | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileAppTroubleshootingEvent>(requestInfo, createMobileAppTroubleshootingEventFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property mobileAppTroubleshootingEvents in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppTroubleshootingEvent
     */
    public patch(body: MobileAppTroubleshootingEvent | undefined, requestConfiguration?: MobileAppTroubleshootingEventItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<MobileAppTroubleshootingEvent | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileAppTroubleshootingEvent>(requestInfo, createMobileAppTroubleshootingEventFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property mobileAppTroubleshootingEvents for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: MobileAppTroubleshootingEventItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The collection property of MobileAppTroubleshootingEvent.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MobileAppTroubleshootingEventItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property mobileAppTroubleshootingEvents in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: MobileAppTroubleshootingEvent | undefined, requestConfiguration?: MobileAppTroubleshootingEventItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMobileAppTroubleshootingEvent);
        return requestInfo;
    };
}
