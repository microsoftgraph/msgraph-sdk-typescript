import {UserRegistrationFeatureSummary} from '../../../models/';
import {createUserRegistrationFeatureSummaryFromDiscriminatorValue} from '../../../models/createUserRegistrationFeatureSummaryFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {UsersRegisteredByFeatureWithIncludedUserTypesWithIncludedUserRolesRequestBuilderGetRequestConfiguration} from './usersRegisteredByFeatureWithIncludedUserTypesWithIncludedUserRolesRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the usersRegisteredByFeature method.
 */
export class UsersRegisteredByFeatureWithIncludedUserTypesWithIncludedUserRolesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UsersRegisteredByFeatureWithIncludedUserTypesWithIncludedUserRolesRequestBuilder and sets the default values.
     * @param includedUserRoles Usage: includedUserRoles='{includedUserRoles}'
     * @param includedUserTypes Usage: includedUserTypes='{includedUserTypes}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, includedUserRoles?: string | undefined, includedUserTypes?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/authenticationMethods/usersRegisteredByFeature(includedUserTypes='{includedUserTypes}',includedUserRoles='{includedUserRoles}')");
        this.pathParameters["includedUserRoles"] = includedUserRoles
        this.pathParameters["includedUserTypes"] = includedUserTypes
    };
    /**
     * Invoke function usersRegisteredByFeature
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserRegistrationFeatureSummary
     */
    public get(requestConfiguration?: UsersRegisteredByFeatureWithIncludedUserTypesWithIncludedUserRolesRequestBuilderGetRequestConfiguration | undefined) : Promise<UserRegistrationFeatureSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserRegistrationFeatureSummary>(requestInfo, createUserRegistrationFeatureSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function usersRegisteredByFeature
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UsersRegisteredByFeatureWithIncludedUserTypesWithIncludedUserRolesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
