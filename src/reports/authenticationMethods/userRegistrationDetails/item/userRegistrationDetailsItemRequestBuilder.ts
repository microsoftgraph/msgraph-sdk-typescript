import {createUserRegistrationDetailsFromDiscriminatorValue} from '../../../../models/createUserRegistrationDetailsFromDiscriminatorValue';
import {deserializeIntoUserRegistrationDetails} from '../../../../models/deserializeIntoUserRegistrationDetails';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeUserRegistrationDetails} from '../../../../models/serializeUserRegistrationDetails';
import type {UserRegistrationDetails} from '../../../../models/userRegistrationDetails';
import {UserRegistrationDetailsItemRequestBuilderDeleteRequestConfiguration} from './userRegistrationDetailsItemRequestBuilderDeleteRequestConfiguration';
import {UserRegistrationDetailsItemRequestBuilderGetRequestConfiguration} from './userRegistrationDetailsItemRequestBuilderGetRequestConfiguration';
import {UserRegistrationDetailsItemRequestBuilderPatchRequestConfiguration} from './userRegistrationDetailsItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userRegistrationDetails property of the microsoft.graph.authenticationMethodsRoot entity.
 */
export class UserRegistrationDetailsItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UserRegistrationDetailsItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userRegistrationDetails for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserRegistrationDetailsItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a userRegistrationDetails object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserRegistrationDetails
     * @see {@link https://learn.microsoft.com/graph/api/userregistrationdetails-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserRegistrationDetailsItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserRegistrationDetails | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserRegistrationDetails>(requestInfo, createUserRegistrationDetailsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property userRegistrationDetails in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserRegistrationDetails
     */
    public patch(body: UserRegistrationDetails | undefined, requestConfiguration?: UserRegistrationDetailsItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserRegistrationDetails | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserRegistrationDetails>(requestInfo, createUserRegistrationDetailsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userRegistrationDetails for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserRegistrationDetailsItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a userRegistrationDetails object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserRegistrationDetailsItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property userRegistrationDetails in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserRegistrationDetails | undefined, requestConfiguration?: UserRegistrationDetailsItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserRegistrationDetails);
        return requestInfo;
    };
}
