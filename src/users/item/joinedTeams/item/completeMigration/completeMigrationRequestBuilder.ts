import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface CompleteMigrationRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to call the completeMigration method.
 */
export class CompleteMigrationRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CompleteMigrationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/joinedTeams/{team%2Did}/completeMigration");
    };
    /**
     * Complete the message migration process by removing migration mode from a team. Migration mode is a special state where certain operations are barred, like message POST and membership operations during the data migration process. After a completeMigration request is made, you cannot import additional messages into the team. You can add members to the team after the request returns a successful response.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/team-completemigration?view=graph-rest-1.0|Find more info here}
     */
    public post(requestConfiguration?: CompleteMigrationRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Complete the message migration process by removing migration mode from a team. Migration mode is a special state where certain operations are barred, like message POST and membership operations during the data migration process. After a completeMigration request is made, you cannot import additional messages into the team. You can add members to the team after the request returns a successful response.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: CompleteMigrationRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a completeMigrationRequestBuilder
     */
    public withUrl(rawUrl: string) : CompleteMigrationRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CompleteMigrationRequestBuilder(rawUrl, this.requestAdapter);
    };
}
