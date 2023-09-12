import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type ClonePostRequestBody } from './clonePostRequestBody';
import { type CloneRequestBuilderPostRequestConfiguration } from './cloneRequestBuilderPostRequestConfiguration';
import { deserializeIntoClonePostRequestBody } from './deserializeIntoClonePostRequestBody';
import { serializeClonePostRequestBody } from './serializeClonePostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the clone method.
 */
export class CloneRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CloneRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/joinedTeams/{team%2Did}/clone");
    };
    /**
     * Create a copy of a team. This operation also creates a copy of the corresponding group.You can specify which parts of the team to clone: When tabs are cloned, they are not configured. The tabs are displayed on the tab bar in Microsoft Teams, and the first time a user opens them, they must go through the configuration screen. If the user who opens the tab does not have permission to configure apps, they will see a message that says that the tab is not configured. Cloning is a long-running operation. After the POST clone returns, you need to GET the operation returned by the Location: header to see if it's running, succeeded, or failed. You should continue to GET until the status is not running. The recommended delay between GETs is 5 seconds.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/team-clone?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ClonePostRequestBody, requestConfiguration?: CloneRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
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
     * Create a copy of a team. This operation also creates a copy of the corresponding group.You can specify which parts of the team to clone: When tabs are cloned, they are not configured. The tabs are displayed on the tab bar in Microsoft Teams, and the first time a user opens them, they must go through the configuration screen. If the user who opens the tab does not have permission to configure apps, they will see a message that says that the tab is not configured. Cloning is a long-running operation. After the POST clone returns, you need to GET the operation returned by the Location: header to see if it's running, succeeded, or failed. You should continue to GET until the status is not running. The recommended delay between GETs is 5 seconds.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ClonePostRequestBody, requestConfiguration?: CloneRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeClonePostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a cloneRequestBuilder
     */
    public withUrl(rawUrl: string) : CloneRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CloneRequestBuilder(rawUrl, this.requestAdapter);
    };
}
