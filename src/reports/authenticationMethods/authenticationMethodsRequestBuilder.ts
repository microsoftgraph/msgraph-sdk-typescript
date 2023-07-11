import {AuthenticationMethodsRoot} from '../../models/authenticationMethodsRoot';
import {createAuthenticationMethodsRootFromDiscriminatorValue} from '../../models/createAuthenticationMethodsRootFromDiscriminatorValue';
import {deserializeIntoAuthenticationMethodsRoot} from '../../models/deserializeIntoAuthenticationMethodsRoot';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeAuthenticationMethodsRoot} from '../../models/serializeAuthenticationMethodsRoot';
import {AuthenticationMethodsRequestBuilderDeleteRequestConfiguration} from './authenticationMethodsRequestBuilderDeleteRequestConfiguration';
import {AuthenticationMethodsRequestBuilderGetRequestConfiguration} from './authenticationMethodsRequestBuilderGetRequestConfiguration';
import {AuthenticationMethodsRequestBuilderPatchRequestConfiguration} from './authenticationMethodsRequestBuilderPatchRequestConfiguration';
import {UserRegistrationDetailsRequestBuilder} from './userRegistrationDetails/userRegistrationDetailsRequestBuilder';
import {UsersRegisteredByFeatureRequestBuilder} from './usersRegisteredByFeature/usersRegisteredByFeatureRequestBuilder';
import {UsersRegisteredByFeatureWithIncludedUserTypesWithIncludedUserRolesRequestBuilder} from './usersRegisteredByFeatureWithIncludedUserTypesWithIncludedUserRoles/usersRegisteredByFeatureWithIncludedUserTypesWithIncludedUserRolesRequestBuilder';
import {UsersRegisteredByMethodRequestBuilder} from './usersRegisteredByMethod/usersRegisteredByMethodRequestBuilder';
import {UsersRegisteredByMethodWithIncludedUserTypesWithIncludedUserRolesRequestBuilder} from './usersRegisteredByMethodWithIncludedUserTypesWithIncludedUserRoles/usersRegisteredByMethodWithIncludedUserTypesWithIncludedUserRolesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the authenticationMethods property of the microsoft.graph.reportRoot entity.
 */
export class AuthenticationMethodsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the userRegistrationDetails property of the microsoft.graph.authenticationMethodsRoot entity.
     */
    public get userRegistrationDetails(): UserRegistrationDetailsRequestBuilder {
        return new UserRegistrationDetailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the usersRegisteredByFeature method.
     */
    public get usersRegisteredByFeature(): UsersRegisteredByFeatureRequestBuilder {
        return new UsersRegisteredByFeatureRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the usersRegisteredByMethod method.
     */
    public get usersRegisteredByMethod(): UsersRegisteredByMethodRequestBuilder {
        return new UsersRegisteredByMethodRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AuthenticationMethodsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/authenticationMethods{?%24select,%24expand}");
    };
    /**
     * Delete navigation property authenticationMethods for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AuthenticationMethodsRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Container for navigation properties for Azure AD authentication methods resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethodsRoot
     */
    public get(requestConfiguration?: AuthenticationMethodsRequestBuilderGetRequestConfiguration | undefined) : Promise<AuthenticationMethodsRoot | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationMethodsRoot>(requestInfo, createAuthenticationMethodsRootFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property authenticationMethods in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethodsRoot
     */
    public patch(body: AuthenticationMethodsRoot | undefined, requestConfiguration?: AuthenticationMethodsRequestBuilderPatchRequestConfiguration | undefined) : Promise<AuthenticationMethodsRoot | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationMethodsRoot>(requestInfo, createAuthenticationMethodsRootFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property authenticationMethods for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AuthenticationMethodsRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Container for navigation properties for Azure AD authentication methods resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuthenticationMethodsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property authenticationMethods in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AuthenticationMethodsRoot | undefined, requestConfiguration?: AuthenticationMethodsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAuthenticationMethodsRoot);
        return requestInfo;
    };
    /**
     * Provides operations to call the usersRegisteredByFeature method.
     * @param includedUserRoles Usage: includedUserRoles='{includedUserRoles}'
     * @param includedUserTypes Usage: includedUserTypes='{includedUserTypes}'
     * @returns a usersRegisteredByFeatureWithIncludedUserTypesWithIncludedUserRolesRequestBuilder
     */
    public usersRegisteredByFeatureWithIncludedUserTypesWithIncludedUserRoles(includedUserRoles: string | undefined, includedUserTypes: string | undefined) : UsersRegisteredByFeatureWithIncludedUserTypesWithIncludedUserRolesRequestBuilder {
        if(!includedUserRoles) throw new Error("includedUserRoles cannot be undefined");
        if(!includedUserTypes) throw new Error("includedUserTypes cannot be undefined");
        return new UsersRegisteredByFeatureWithIncludedUserTypesWithIncludedUserRolesRequestBuilder(this.pathParameters, this.requestAdapter, includedUserRoles, includedUserTypes);
    };
    /**
     * Provides operations to call the usersRegisteredByMethod method.
     * @param includedUserRoles Usage: includedUserRoles='{includedUserRoles}'
     * @param includedUserTypes Usage: includedUserTypes='{includedUserTypes}'
     * @returns a usersRegisteredByMethodWithIncludedUserTypesWithIncludedUserRolesRequestBuilder
     */
    public usersRegisteredByMethodWithIncludedUserTypesWithIncludedUserRoles(includedUserRoles: string | undefined, includedUserTypes: string | undefined) : UsersRegisteredByMethodWithIncludedUserTypesWithIncludedUserRolesRequestBuilder {
        if(!includedUserRoles) throw new Error("includedUserRoles cannot be undefined");
        if(!includedUserTypes) throw new Error("includedUserTypes cannot be undefined");
        return new UsersRegisteredByMethodWithIncludedUserTypesWithIncludedUserRolesRequestBuilder(this.pathParameters, this.requestAdapter, includedUserRoles, includedUserTypes);
    };
}
