import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createHostTrackerFromDiscriminatorValue} from '../../../../models/security/createHostTrackerFromDiscriminatorValue';
import {deserializeIntoHostTracker} from '../../../../models/security/deserializeIntoHostTracker';
import {HostTracker} from '../../../../models/security/hostTracker';
import {serializeHostTracker} from '../../../../models/security/serializeHostTracker';
import {HostRequestBuilder} from './host/hostRequestBuilder';
import {HostTrackerItemRequestBuilderDeleteRequestConfiguration} from './hostTrackerItemRequestBuilderDeleteRequestConfiguration';
import {HostTrackerItemRequestBuilderGetRequestConfiguration} from './hostTrackerItemRequestBuilderGetRequestConfiguration';
import {HostTrackerItemRequestBuilderPatchRequestConfiguration} from './hostTrackerItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostTrackers property of the microsoft.graph.security.threatIntelligence entity.
 */
export class HostTrackerItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the host property of the microsoft.graph.security.hostTracker entity.
     */
    public get host(): HostRequestBuilder {
        return new HostRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new HostTrackerItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/hostTrackers/{hostTracker%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property hostTrackers for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: HostTrackerItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a hostTracker object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostTracker
     * @see {@link https://docs.microsoft.com/graph/api/security-hosttracker-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: HostTrackerItemRequestBuilderGetRequestConfiguration | undefined) : Promise<HostTracker | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostTracker>(requestInfo, createHostTrackerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property hostTrackers in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostTracker
     */
    public patch(body: HostTracker | undefined, requestConfiguration?: HostTrackerItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<HostTracker | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostTracker>(requestInfo, createHostTrackerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property hostTrackers for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: HostTrackerItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a hostTracker object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HostTrackerItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property hostTrackers in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: HostTracker | undefined, requestConfiguration?: HostTrackerItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeHostTracker);
        return requestInfo;
    };
}
