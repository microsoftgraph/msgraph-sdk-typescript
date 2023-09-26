import { type TeamsAppCollectionResponse } from '../../models/';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { createTeamsAppFromDiscriminatorValue, deserializeIntoTeamsApp, serializeTeamsApp, type TeamsApp } from '../../models/teamsApp';
import { createTeamsAppCollectionResponseFromDiscriminatorValue } from '../../models/teamsAppCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { TeamsAppItemRequestBuilder } from './item/teamsAppItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TeamsAppsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface TeamsAppsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: TeamsAppsRequestBuilderGetQueryParameters;
}
export interface TeamsAppsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the teamsApps property of the microsoft.graph.appCatalogs entity.
 */
export class TeamsAppsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the teamsApps property of the microsoft.graph.appCatalogs entity.
     * @param teamsAppId The unique identifier of teamsApp
     * @returns a TeamsAppItemRequestBuilder
     */
    public byTeamsAppId(teamsAppId: string) : TeamsAppItemRequestBuilder {
        if(!teamsAppId) throw new Error("teamsAppId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamsApp%2Did"] = teamsAppId
        return new TeamsAppItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TeamsAppsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/appCatalogs/teamsApps{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List apps from the Microsoft Teams app catalog.This includes apps from the Microsoft Teams store, as well as apps from your organization's app catalog (the tenant app catalog). To get apps from your organization's app catalog only, specify organization as the distributionMethod in the request.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsAppCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/appcatalogs-list-teamsapps?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TeamsAppsRequestBuilderGetRequestConfiguration | undefined) : Promise<TeamsAppCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamsAppCollectionResponse>(requestInfo, createTeamsAppCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Publish an app to the Microsoft Teams apps catalog.Specifically, this API publishes the app to your organization's catalog (the tenant app catalog);the created resource will have a distributionMethod property value of organization. The requiresReview property allows any user to submit an app for review by an administrator. Admins can approve or reject these apps via this API or the Microsoft Teams admin center.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsApp
     * @see {@link https://learn.microsoft.com/graph/api/teamsapp-publish?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TeamsApp, requestConfiguration?: TeamsAppsRequestBuilderPostRequestConfiguration | undefined) : Promise<TeamsApp | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamsApp>(requestInfo, createTeamsAppFromDiscriminatorValue, errorMapping);
    };
    /**
     * List apps from the Microsoft Teams app catalog.This includes apps from the Microsoft Teams store, as well as apps from your organization's app catalog (the tenant app catalog). To get apps from your organization's app catalog only, specify organization as the distributionMethod in the request.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TeamsAppsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Publish an app to the Microsoft Teams apps catalog.Specifically, this API publishes the app to your organization's catalog (the tenant app catalog);the created resource will have a distributionMethod property value of organization. The requiresReview property allows any user to submit an app for review by an administrator. Admins can approve or reject these apps via this API or the Microsoft Teams admin center.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TeamsApp, requestConfiguration?: TeamsAppsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTeamsApp);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a teamsAppsRequestBuilder
     */
    public withUrl(rawUrl: string) : TeamsAppsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TeamsAppsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
