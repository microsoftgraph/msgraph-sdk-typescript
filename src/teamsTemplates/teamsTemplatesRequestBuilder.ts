import {TeamsTemplateCollectionResponse} from '../models/';
import {createTeamsTemplateCollectionResponseFromDiscriminatorValue} from '../models/createTeamsTemplateCollectionResponseFromDiscriminatorValue';
import {createTeamsTemplateFromDiscriminatorValue} from '../models/createTeamsTemplateFromDiscriminatorValue';
import {deserializeIntoTeamsTemplate} from '../models/deserializeIntoTeamsTemplate';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeTeamsTemplate} from '../models/serializeTeamsTemplate';
import type {TeamsTemplate} from '../models/teamsTemplate';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TeamsTemplateItemRequestBuilder} from './item/teamsTemplateItemRequestBuilder';
import {TeamsTemplatesRequestBuilderGetRequestConfiguration} from './teamsTemplatesRequestBuilderGetRequestConfiguration';
import {TeamsTemplatesRequestBuilderPostRequestConfiguration} from './teamsTemplatesRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of teamsTemplate entities.
 */
export class TeamsTemplatesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of teamsTemplate entities.
     * @param teamsTemplateId The unique identifier of teamsTemplate
     * @returns a TeamsTemplateItemRequestBuilder
     */
    public byTeamsTemplateId(teamsTemplateId: string) : TeamsTemplateItemRequestBuilder {
        if(!teamsTemplateId) throw new Error("teamsTemplateId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamsTemplate%2Did"] = teamsTemplateId
        return new TeamsTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TeamsTemplatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teamsTemplates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get entities from teamsTemplates
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsTemplateCollectionResponse
     */
    public get(requestConfiguration?: TeamsTemplatesRequestBuilderGetRequestConfiguration | undefined) : Promise<TeamsTemplateCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamsTemplateCollectionResponse>(requestInfo, createTeamsTemplateCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add new entity to teamsTemplates
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsTemplate
     */
    public post(body: TeamsTemplate, requestConfiguration?: TeamsTemplatesRequestBuilderPostRequestConfiguration | undefined) : Promise<TeamsTemplate | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamsTemplate>(requestInfo, createTeamsTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get entities from teamsTemplates
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TeamsTemplatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add new entity to teamsTemplates
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TeamsTemplate, requestConfiguration?: TeamsTemplatesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTeamsTemplate);
        return requestInfo;
    };
}
