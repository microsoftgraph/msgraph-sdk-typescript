import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {AllowedCalendarSharingRolesWithUserRequestBuilderGetRequestConfiguration} from './allowedCalendarSharingRolesWithUserRequestBuilderGetRequestConfiguration';
import {createAllowedCalendarSharingRolesWithUserResponseFromDiscriminatorValue} from './createAllowedCalendarSharingRolesWithUserResponseFromDiscriminatorValue';
import {AllowedCalendarSharingRolesWithUserResponse} from './index';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the allowedCalendarSharingRoles method.
 */
export class AllowedCalendarSharingRolesWithUserRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AllowedCalendarSharingRolesWithUserRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param User Usage: User='{User}'
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, user?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/calendar/allowedCalendarSharingRoles(User='{User}'){?%24top,%24skip,%24search,%24filter,%24count}");
        this.pathParameters["User"] = user
    };
    /**
     * Invoke function allowedCalendarSharingRoles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AllowedCalendarSharingRolesWithUserResponse
     */
    public get(requestConfiguration?: AllowedCalendarSharingRolesWithUserRequestBuilderGetRequestConfiguration | undefined) : Promise<AllowedCalendarSharingRolesWithUserResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AllowedCalendarSharingRolesWithUserResponse>(requestInfo, createAllowedCalendarSharingRolesWithUserResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function allowedCalendarSharingRoles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AllowedCalendarSharingRolesWithUserRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
