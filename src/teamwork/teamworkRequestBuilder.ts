import {createTeamworkFromDiscriminatorValue} from '../models/createTeamworkFromDiscriminatorValue';
import {deserializeIntoTeamwork} from '../models/deserializeIntoTeamwork';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeTeamwork} from '../models/serializeTeamwork';
import type {Teamwork} from '../models/teamwork';
import {DeletedTeamsRequestBuilder} from './deletedTeams/deletedTeamsRequestBuilder';
import {SendActivityNotificationToRecipientsRequestBuilder} from './sendActivityNotificationToRecipients/sendActivityNotificationToRecipientsRequestBuilder';
import {TeamsAppSettingsRequestBuilder} from './teamsAppSettings/teamsAppSettingsRequestBuilder';
import {TeamworkRequestBuilderGetRequestConfiguration} from './teamworkRequestBuilderGetRequestConfiguration';
import {TeamworkRequestBuilderPatchRequestConfiguration} from './teamworkRequestBuilderPatchRequestConfiguration';
import {WorkforceIntegrationsRequestBuilder} from './workforceIntegrations/workforceIntegrationsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the teamwork singleton.
 */
export class TeamworkRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the deletedTeams property of the microsoft.graph.teamwork entity.
     */
    public get deletedTeams(): DeletedTeamsRequestBuilder {
        return new DeletedTeamsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sendActivityNotificationToRecipients method.
     */
    public get sendActivityNotificationToRecipients(): SendActivityNotificationToRecipientsRequestBuilder {
        return new SendActivityNotificationToRecipientsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the teamsAppSettings property of the microsoft.graph.teamwork entity.
     */
    public get teamsAppSettings(): TeamsAppSettingsRequestBuilder {
        return new TeamsAppSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the workforceIntegrations property of the microsoft.graph.teamwork entity.
     */
    public get workforceIntegrations(): WorkforceIntegrationsRequestBuilder {
        return new WorkforceIntegrationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TeamworkRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teamwork{?%24select,%24expand}");
    };
    /**
     * Get teamwork
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Teamwork
     */
    public get(requestConfiguration?: TeamworkRequestBuilderGetRequestConfiguration | undefined) : Promise<Teamwork | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Teamwork>(requestInfo, createTeamworkFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Teamwork
     */
    public patch(body: Teamwork, requestConfiguration?: TeamworkRequestBuilderPatchRequestConfiguration | undefined) : Promise<Teamwork | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Teamwork>(requestInfo, createTeamworkFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get teamwork
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TeamworkRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Teamwork, requestConfiguration?: TeamworkRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTeamwork);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a teamworkRequestBuilder
     */
    public withUrl(rawUrl: string) : TeamworkRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TeamworkRequestBuilder(rawUrl, this.requestAdapter);
    };
}
