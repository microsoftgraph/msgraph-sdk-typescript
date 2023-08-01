import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createHostFromDiscriminatorValue} from '../../../../models/security/createHostFromDiscriminatorValue';
import {deserializeIntoHost} from '../../../../models/security/deserializeIntoHost';
import type {Host} from '../../../../models/security/host';
import {serializeHost} from '../../../../models/security/serializeHost';
import {ComponentsRequestBuilder} from './components/componentsRequestBuilder';
import {CookiesRequestBuilder} from './cookies/cookiesRequestBuilder';
import {HostItemRequestBuilderDeleteRequestConfiguration} from './hostItemRequestBuilderDeleteRequestConfiguration';
import {HostItemRequestBuilderGetRequestConfiguration} from './hostItemRequestBuilderGetRequestConfiguration';
import {HostItemRequestBuilderPatchRequestConfiguration} from './hostItemRequestBuilderPatchRequestConfiguration';
import {PassiveDnsRequestBuilder} from './passiveDns/passiveDnsRequestBuilder';
import {PassiveDnsReverseRequestBuilder} from './passiveDnsReverse/passiveDnsReverseRequestBuilder';
import {ReputationRequestBuilder} from './reputation/reputationRequestBuilder';
import {TrackersRequestBuilder} from './trackers/trackersRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hosts property of the microsoft.graph.security.threatIntelligence entity.
 */
export class HostItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the components property of the microsoft.graph.security.host entity.
     */
    public get components(): ComponentsRequestBuilder {
        return new ComponentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the cookies property of the microsoft.graph.security.host entity.
     */
    public get cookies(): CookiesRequestBuilder {
        return new CookiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the passiveDns property of the microsoft.graph.security.host entity.
     */
    public get passiveDns(): PassiveDnsRequestBuilder {
        return new PassiveDnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the passiveDnsReverse property of the microsoft.graph.security.host entity.
     */
    public get passiveDnsReverse(): PassiveDnsReverseRequestBuilder {
        return new PassiveDnsReverseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the reputation property of the microsoft.graph.security.host entity.
     */
    public get reputation(): ReputationRequestBuilder {
        return new ReputationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the trackers property of the microsoft.graph.security.host entity.
     */
    public get trackers(): TrackersRequestBuilder {
        return new TrackersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new HostItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/hosts/{host%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property hosts for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: HostItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a host object. The host resource is the abstract base type that returns an implementation. A host can be of one of the following types:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Host
     * @see {@link https://learn.microsoft.com/graph/api/security-host-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: HostItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Host | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Host>(requestInfo, createHostFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property hosts in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Host
     */
    public patch(body: Host | undefined, requestConfiguration?: HostItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Host | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Host>(requestInfo, createHostFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property hosts for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: HostItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a host object. The host resource is the abstract base type that returns an implementation. A host can be of one of the following types:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HostItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property hosts in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Host | undefined, requestConfiguration?: HostItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeHost);
        return requestInfo;
    };
}
