import {TeamsAppDefinitionCollectionResponse} from '../../../../models/';
import {createTeamsAppDefinitionCollectionResponseFromDiscriminatorValue} from '../../../../models/createTeamsAppDefinitionCollectionResponseFromDiscriminatorValue';
import {createTeamsAppDefinitionFromDiscriminatorValue} from '../../../../models/createTeamsAppDefinitionFromDiscriminatorValue';
import {deserializeIntoTeamsAppDefinition} from '../../../../models/deserializeIntoTeamsAppDefinition';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeTeamsAppDefinition} from '../../../../models/serializeTeamsAppDefinition';
import {TeamsAppDefinition} from '../../../../models/teamsAppDefinition';
import {AppDefinitionsRequestBuilderGetRequestConfiguration} from './appDefinitionsRequestBuilderGetRequestConfiguration';
import {AppDefinitionsRequestBuilderPostRequestConfiguration} from './appDefinitionsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TeamsAppDefinitionItemRequestBuilder} from './item/teamsAppDefinitionItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appDefinitions property of the microsoft.graph.teamsApp entity.
 */
export class AppDefinitionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the appDefinitions property of the microsoft.graph.teamsApp entity.
     * @param teamsAppDefinitionId Unique identifier of the item
     * @returns a TeamsAppDefinitionItemRequestBuilder
     */
    public byTeamsAppDefinitionId(teamsAppDefinitionId: string) : TeamsAppDefinitionItemRequestBuilder {
        if(!teamsAppDefinitionId) throw new Error("teamsAppDefinitionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamsAppDefinition%2Did"] = teamsAppDefinitionId
        return new TeamsAppDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AppDefinitionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/appCatalogs/teamsApps/{teamsApp%2Did}/appDefinitions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The details for each version of the app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsAppDefinitionCollectionResponse
     */
    public get(requestConfiguration?: AppDefinitionsRequestBuilderGetRequestConfiguration | undefined) : Promise<TeamsAppDefinitionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamsAppDefinitionCollectionResponse>(requestInfo, createTeamsAppDefinitionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update an app previously published to the Microsoft Teams app catalog. To update an app, the **distributionMethod** property for the app must be set to `organization`. This API specifically updates an app published to your organization's app catalog (the tenant app catalog).
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsAppDefinition
     * @see {@link https://docs.microsoft.com/graph/api/teamsapp-update?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TeamsAppDefinition | undefined, requestConfiguration?: AppDefinitionsRequestBuilderPostRequestConfiguration | undefined) : Promise<TeamsAppDefinition | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamsAppDefinition>(requestInfo, createTeamsAppDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * The details for each version of the app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AppDefinitionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update an app previously published to the Microsoft Teams app catalog. To update an app, the **distributionMethod** property for the app must be set to `organization`. This API specifically updates an app published to your organization's app catalog (the tenant app catalog).
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TeamsAppDefinition | undefined, requestConfiguration?: AppDefinitionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTeamsAppDefinition);
        return requestInfo;
    };
}
