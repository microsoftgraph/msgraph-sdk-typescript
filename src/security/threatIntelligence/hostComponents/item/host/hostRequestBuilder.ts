import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type Host } from '../../../../../models/security/';
import { createHostFromDiscriminatorValue } from '../../../../../models/security/createHostFromDiscriminatorValue';
import { type HostRequestBuilderGetRequestConfiguration } from './hostRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the host property of the microsoft.graph.security.hostComponent entity.
 */
export class HostRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new HostRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/hostComponents/{hostComponent%2Did}/host{?%24select,%24expand}");
    };
    /**
     * The host related to this component. This is a reverse navigation property. When navigating to components from a host, this should be assumed to be a return reference.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Host
     */
    public get(requestConfiguration?: HostRequestBuilderGetRequestConfiguration | undefined) : Promise<Host | undefined> {
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
     * The host related to this component. This is a reverse navigation property. When navigating to components from a host, this should be assumed to be a return reference.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HostRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a hostRequestBuilder
     */
    public withUrl(rawUrl: string) : HostRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new HostRequestBuilder(rawUrl, this.requestAdapter);
    };
}
