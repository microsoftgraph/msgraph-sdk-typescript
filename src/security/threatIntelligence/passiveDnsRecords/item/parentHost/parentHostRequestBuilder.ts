import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {Host} from '../../../../../models/security/';
import {createHostFromDiscriminatorValue} from '../../../../../models/security/createHostFromDiscriminatorValue';
import {ParentHostRequestBuilderGetRequestConfiguration} from './parentHostRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the parentHost property of the microsoft.graph.security.passiveDnsRecord entity.
 */
export class ParentHostRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ParentHostRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord%2Did}/parentHost{?%24select,%24expand}");
    };
    /**
     * The parent host related to this passiveDnsRecord entry. Generally, this is the value that you can search to discover this passiveDnsRecord value.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Host
     */
    public get(requestConfiguration?: ParentHostRequestBuilderGetRequestConfiguration | undefined) : Promise<Host | undefined> {
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
     * The parent host related to this passiveDnsRecord entry. Generally, this is the value that you can search to discover this passiveDnsRecord value.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ParentHostRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a parentHostRequestBuilder
     */
    public withUrl(rawUrl: string) : ParentHostRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ParentHostRequestBuilder(rawUrl, this.requestAdapter);
    };
}
