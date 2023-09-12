import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { type AssociateWithHubSitesPostRequestBody } from './associateWithHubSitesPostRequestBody';
import { type AssociateWithHubSitesRequestBuilderPostRequestConfiguration } from './associateWithHubSitesRequestBuilderPostRequestConfiguration';
import { deserializeIntoAssociateWithHubSitesPostRequestBody } from './deserializeIntoAssociateWithHubSitesPostRequestBody';
import { serializeAssociateWithHubSitesPostRequestBody } from './serializeAssociateWithHubSitesPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the associateWithHubSites method.
 */
export class AssociateWithHubSitesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AssociateWithHubSitesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/list/contentTypes/{contentType%2Did}/associateWithHubSites");
    };
    /**
     * Associate a published [content type][contentType] present in a content type hub with a list of hub sites.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/contenttype-associatewithhubsites?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AssociateWithHubSitesPostRequestBody, requestConfiguration?: AssociateWithHubSitesRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Associate a published [content type][contentType] present in a content type hub with a list of hub sites.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AssociateWithHubSitesPostRequestBody, requestConfiguration?: AssociateWithHubSitesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAssociateWithHubSitesPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a associateWithHubSitesRequestBuilder
     */
    public withUrl(rawUrl: string) : AssociateWithHubSitesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AssociateWithHubSitesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
