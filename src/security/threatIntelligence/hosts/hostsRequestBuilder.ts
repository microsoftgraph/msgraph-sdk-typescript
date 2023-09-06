import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { type HostCollectionResponse } from '../../../models/security/';
import { createHostCollectionResponseFromDiscriminatorValue } from '../../../models/security/createHostCollectionResponseFromDiscriminatorValue';
import { createHostFromDiscriminatorValue } from '../../../models/security/createHostFromDiscriminatorValue';
import { deserializeIntoHost } from '../../../models/security/deserializeIntoHost';
import { type Host } from '../../../models/security/host';
import { serializeHost } from '../../../models/security/serializeHost';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type HostsRequestBuilderGetRequestConfiguration } from './hostsRequestBuilderGetRequestConfiguration';
import { type HostsRequestBuilderPostRequestConfiguration } from './hostsRequestBuilderPostRequestConfiguration';
import { HostItemRequestBuilder } from './item/hostItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hosts property of the microsoft.graph.security.threatIntelligence entity.
 */
export class HostsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the hosts property of the microsoft.graph.security.threatIntelligence entity.
     * @param hostId The unique identifier of host
     * @returns a HostItemRequestBuilder
     */
    public byHostId(hostId: string) : HostItemRequestBuilder {
        if(!hostId) throw new Error("hostId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["host%2Did"] = hostId
        return new HostItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new HostsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/hosts{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of a host object. The host resource is the abstract base type that returns an implementation. A host can be of one of the following types:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostCollectionResponse
     */
    public get(requestConfiguration?: HostsRequestBuilderGetRequestConfiguration | undefined) : Promise<HostCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostCollectionResponse>(requestInfo, createHostCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to hosts for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Host
     */
    public post(body: Host, requestConfiguration?: HostsRequestBuilderPostRequestConfiguration | undefined) : Promise<Host | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Host>(requestInfo, createHostFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of a host object. The host resource is the abstract base type that returns an implementation. A host can be of one of the following types:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HostsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to hosts for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Host, requestConfiguration?: HostsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeHost);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a hostsRequestBuilder
     */
    public withUrl(rawUrl: string) : HostsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new HostsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
