import {AppRoleAssignmentCollectionResponse} from '../../../models/';
import type {AppRoleAssignment} from '../../../models/appRoleAssignment';
import {createAppRoleAssignmentCollectionResponseFromDiscriminatorValue} from '../../../models/createAppRoleAssignmentCollectionResponseFromDiscriminatorValue';
import {createAppRoleAssignmentFromDiscriminatorValue} from '../../../models/createAppRoleAssignmentFromDiscriminatorValue';
import {deserializeIntoAppRoleAssignment} from '../../../models/deserializeIntoAppRoleAssignment';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeAppRoleAssignment} from '../../../models/serializeAppRoleAssignment';
import {AppRoleAssignmentsRequestBuilderGetRequestConfiguration} from './appRoleAssignmentsRequestBuilderGetRequestConfiguration';
import {AppRoleAssignmentsRequestBuilderPostRequestConfiguration} from './appRoleAssignmentsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AppRoleAssignmentItemRequestBuilder} from './item/appRoleAssignmentItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appRoleAssignments property of the microsoft.graph.user entity.
 */
export class AppRoleAssignmentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the appRoleAssignments property of the microsoft.graph.user entity.
     * @param appRoleAssignmentId Unique identifier of the item
     * @returns a AppRoleAssignmentItemRequestBuilder
     */
    public byAppRoleAssignmentId(appRoleAssignmentId: string) : AppRoleAssignmentItemRequestBuilder {
        if(!appRoleAssignmentId) throw new Error("appRoleAssignmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appRoleAssignment%2Did"] = appRoleAssignmentId
        return new AppRoleAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AppRoleAssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/appRoleAssignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Represents the app roles a user has been granted for an application. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppRoleAssignmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-list-approleassignments?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AppRoleAssignmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<AppRoleAssignmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppRoleAssignmentCollectionResponse>(requestInfo, createAppRoleAssignmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Use this API to assign an app role to a user. To grant an app role assignment to a user, you need three identifiers:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppRoleAssignment
     * @see {@link https://learn.microsoft.com/graph/api/user-post-approleassignments?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AppRoleAssignment, requestConfiguration?: AppRoleAssignmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<AppRoleAssignment | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppRoleAssignment>(requestInfo, createAppRoleAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Represents the app roles a user has been granted for an application. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AppRoleAssignmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Use this API to assign an app role to a user. To grant an app role assignment to a user, you need three identifiers:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AppRoleAssignment, requestConfiguration?: AppRoleAssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAppRoleAssignment);
        return requestInfo;
    };
}
