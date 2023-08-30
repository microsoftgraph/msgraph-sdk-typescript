import {createUserFromDiscriminatorValue} from '../../../models/createUserFromDiscriminatorValue';
import {deserializeIntoUser} from '../../../models/deserializeIntoUser';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeUser} from '../../../models/serializeUser';
import type {User} from '../../../models/user';
import type {AssignLicensePostRequestBody} from './assignLicensePostRequestBody';
import {AssignLicenseRequestBuilderPostRequestConfiguration} from './assignLicenseRequestBuilderPostRequestConfiguration';
import {deserializeIntoAssignLicensePostRequestBody} from './deserializeIntoAssignLicensePostRequestBody';
import {serializeAssignLicensePostRequestBody} from './serializeAssignLicensePostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the assignLicense method.
 */
export class AssignLicenseRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AssignLicenseRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/assignLicense");
    };
    /**
     * Add or remove subscriptions for the user. You can also enable and disable specific plans associated with a subscription.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of User
     * @see {@link https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AssignLicensePostRequestBody, requestConfiguration?: AssignLicenseRequestBuilderPostRequestConfiguration | undefined) : Promise<User | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<User>(requestInfo, createUserFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add or remove subscriptions for the user. You can also enable and disable specific plans associated with a subscription.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AssignLicensePostRequestBody, requestConfiguration?: AssignLicenseRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAssignLicensePostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a assignLicenseRequestBuilder
     */
    public withUrl(rawUrl: string) : AssignLicenseRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AssignLicenseRequestBuilder(rawUrl, this.requestAdapter);
    };
}
