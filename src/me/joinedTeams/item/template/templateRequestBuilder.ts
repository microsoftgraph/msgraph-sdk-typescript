import { type TeamsTemplate } from '../../../../models/';
import { createTeamsTemplateFromDiscriminatorValue } from '../../../../models/createTeamsTemplateFromDiscriminatorValue';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { type TemplateRequestBuilderGetRequestConfiguration } from './templateRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the template property of the microsoft.graph.team entity.
 */
export class TemplateRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TemplateRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/template{?%24select,%24expand}");
    };
    /**
     * The template this team was created from. See available templates.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsTemplate
     */
    public get(requestConfiguration?: TemplateRequestBuilderGetRequestConfiguration | undefined) : Promise<TeamsTemplate | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamsTemplate>(requestInfo, createTeamsTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * The template this team was created from. See available templates.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TemplateRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a templateRequestBuilder
     */
    public withUrl(rawUrl: string) : TemplateRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TemplateRequestBuilder(rawUrl, this.requestAdapter);
    };
}
