import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import type {AssociateWithHubSitesPostRequestBody} from './associateWithHubSitesPostRequestBody';
import {AssociateWithHubSitesRequestBuilderPostRequestConfiguration} from './associateWithHubSitesRequestBuilderPostRequestConfiguration';
import {deserializeIntoAssociateWithHubSitesPostRequestBody} from './deserializeIntoAssociateWithHubSitesPostRequestBody';
import {serializeAssociateWithHubSitesPostRequestBody} from './serializeAssociateWithHubSitesPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/contentTypes/{contentType%2Did}/associateWithHubSites");
    };
    /**
     * Associate a published [content type][contentType] present in a content type hub with a list of hub sites.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/contenttype-associatewithhubsites?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AssociateWithHubSitesPostRequestBody | undefined, requestConfiguration?: AssociateWithHubSitesRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
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
    public toPostRequestInformation(body: AssociateWithHubSitesPostRequestBody | undefined, requestConfiguration?: AssociateWithHubSitesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAssociateWithHubSitesPostRequestBody);
        return requestInfo;
    };
}
