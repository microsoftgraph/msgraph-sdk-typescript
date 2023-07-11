import {AssociatedTeamInfo} from '../../../../models/associatedTeamInfo';
import {createAssociatedTeamInfoFromDiscriminatorValue} from '../../../../models/createAssociatedTeamInfoFromDiscriminatorValue';
import {deserializeIntoAssociatedTeamInfo} from '../../../../models/deserializeIntoAssociatedTeamInfo';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAssociatedTeamInfo} from '../../../../models/serializeAssociatedTeamInfo';
import {AssociatedTeamInfoItemRequestBuilderDeleteRequestConfiguration} from './associatedTeamInfoItemRequestBuilderDeleteRequestConfiguration';
import {AssociatedTeamInfoItemRequestBuilderGetRequestConfiguration} from './associatedTeamInfoItemRequestBuilderGetRequestConfiguration';
import {AssociatedTeamInfoItemRequestBuilderPatchRequestConfiguration} from './associatedTeamInfoItemRequestBuilderPatchRequestConfiguration';
import {TeamRequestBuilder} from './team/teamRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the associatedTeams property of the microsoft.graph.userTeamwork entity.
 */
export class AssociatedTeamInfoItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the team property of the microsoft.graph.teamInfo entity.
     */
    public get team(): TeamRequestBuilder {
        return new TeamRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AssociatedTeamInfoItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/teamwork/associatedTeams/{associatedTeamInfo%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property associatedTeams for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AssociatedTeamInfoItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * The list of associatedTeamInfo objects that a user is associated with.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AssociatedTeamInfo
     */
    public get(requestConfiguration?: AssociatedTeamInfoItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AssociatedTeamInfo | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AssociatedTeamInfo>(requestInfo, createAssociatedTeamInfoFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property associatedTeams in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AssociatedTeamInfo
     */
    public patch(body: AssociatedTeamInfo | undefined, requestConfiguration?: AssociatedTeamInfoItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AssociatedTeamInfo | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AssociatedTeamInfo>(requestInfo, createAssociatedTeamInfoFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property associatedTeams for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AssociatedTeamInfoItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * The list of associatedTeamInfo objects that a user is associated with.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AssociatedTeamInfoItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property associatedTeams in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AssociatedTeamInfo | undefined, requestConfiguration?: AssociatedTeamInfoItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAssociatedTeamInfo);
        return requestInfo;
    };
}
