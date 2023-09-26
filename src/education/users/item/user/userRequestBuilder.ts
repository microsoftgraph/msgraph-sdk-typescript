import { type User } from '../../../../models/';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createUserFromDiscriminatorValue } from '../../../../models/user';
import { MailboxSettingsRequestBuilder } from './mailboxSettings/mailboxSettingsRequestBuilder';
import { ServiceProvisioningErrorsRequestBuilder } from './serviceProvisioningErrors/serviceProvisioningErrorsRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface UserRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface UserRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the user property of the microsoft.graph.educationUser entity.
 */
export class UserRequestBuilder extends BaseRequestBuilder {
    /**
     * The mailboxSettings property
     */
    public get mailboxSettings(): MailboxSettingsRequestBuilder {
        return new MailboxSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * The serviceProvisioningErrors property
     */
    public get serviceProvisioningErrors(): ServiceProvisioningErrorsRequestBuilder {
        return new ServiceProvisioningErrorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new UserRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/users/{educationUser%2Did}/user{?%24select,%24expand}");
    };
    /**
     * Retrieve the simple directory user that corresponds to this educationUser.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of User
     * @see {@link https://learn.microsoft.com/graph/api/educationuser-get-user?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserRequestBuilderGetRequestConfiguration | undefined) : Promise<User | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<User>(requestInfo, createUserFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the simple directory user that corresponds to this educationUser.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a userRequestBuilder
     */
    public withUrl(rawUrl: string) : UserRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserRequestBuilder(rawUrl, this.requestAdapter);
    };
}
