import { createGroupFromDiscriminatorValue, deserializeIntoGroup, serializeGroup, type Group } from '../../../models/group';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { deserializeIntoAssignLicensePostRequestBody, serializeAssignLicensePostRequestBody, type AssignLicensePostRequestBody } from './assignLicensePostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AssignLicenseRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
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
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/assignLicense");
    };
    /**
     * Add or remove licenses on the group. Licenses assigned to the group will be assigned to all users in the group. To learn more about group-based licensing, see What is group-based licensing in Azure Active Directory. To get the subscriptions available in the directory, perform a GET subscribedSkus request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Group
     * @see {@link https://learn.microsoft.com/graph/api/group-assignlicense?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AssignLicensePostRequestBody, requestConfiguration?: AssignLicenseRequestBuilderPostRequestConfiguration | undefined) : Promise<Group | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Group>(requestInfo, createGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add or remove licenses on the group. Licenses assigned to the group will be assigned to all users in the group. To learn more about group-based licensing, see What is group-based licensing in Azure Active Directory. To get the subscriptions available in the directory, perform a GET subscribedSkus request.
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
