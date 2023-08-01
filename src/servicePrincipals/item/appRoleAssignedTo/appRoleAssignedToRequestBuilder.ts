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
import {AppRoleAssignedToRequestBuilderGetRequestConfiguration} from './appRoleAssignedToRequestBuilderGetRequestConfiguration';
import {AppRoleAssignedToRequestBuilderPostRequestConfiguration} from './appRoleAssignedToRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AppRoleAssignmentItemRequestBuilder} from './item/appRoleAssignmentItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appRoleAssignedTo property of the microsoft.graph.servicePrincipal entity.
 */
export class AppRoleAssignedToRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the appRoleAssignedTo property of the microsoft.graph.servicePrincipal entity.
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
     * Instantiates a new AppRoleAssignedToRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/appRoleAssignedTo{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of appRoleAssignment that users, groups, or client service principals have been granted for the given resource service principal. For example, if the resource service principal is the service principal for the Microsoft Graph API, this will return all service principals that have been granted any app-only permissions to Microsoft Graph. If the resource service principal is an application that has app roles granted to users and groups, this will return all the users and groups assigned app roles for this application.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppRoleAssignmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipal-list-approleassignedto?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AppRoleAssignedToRequestBuilderGetRequestConfiguration | undefined) : Promise<AppRoleAssignmentCollectionResponse | undefined> {
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
     * Assign an app role for a resource service principal, to a user, group, or client service principal. App roles that are assigned to service principals are also known as application permissions. Application permissions can be granted directly with app role assignments, or through a consent experience. To grant an app role assignment, you need three identifiers:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppRoleAssignment
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipal-post-approleassignedto?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AppRoleAssignment | undefined, requestConfiguration?: AppRoleAssignedToRequestBuilderPostRequestConfiguration | undefined) : Promise<AppRoleAssignment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * Retrieve a list of appRoleAssignment that users, groups, or client service principals have been granted for the given resource service principal. For example, if the resource service principal is the service principal for the Microsoft Graph API, this will return all service principals that have been granted any app-only permissions to Microsoft Graph. If the resource service principal is an application that has app roles granted to users and groups, this will return all the users and groups assigned app roles for this application.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AppRoleAssignedToRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Assign an app role for a resource service principal, to a user, group, or client service principal. App roles that are assigned to service principals are also known as application permissions. Application permissions can be granted directly with app role assignments, or through a consent experience. To grant an app role assignment, you need three identifiers:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AppRoleAssignment | undefined, requestConfiguration?: AppRoleAssignedToRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAppRoleAssignment);
        return requestInfo;
    };
}
