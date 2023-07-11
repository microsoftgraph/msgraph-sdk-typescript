import {createGroupFromDiscriminatorValue} from '../../../models/createGroupFromDiscriminatorValue';
import {deserializeIntoGroup} from '../../../models/deserializeIntoGroup';
import {Group} from '../../../models/group';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeGroup} from '../../../models/serializeGroup';
import {AssignLicensePostRequestBody} from './assignLicensePostRequestBody';
import {AssignLicenseRequestBuilderPostRequestConfiguration} from './assignLicenseRequestBuilderPostRequestConfiguration';
import {deserializeIntoAssignLicensePostRequestBody} from './deserializeIntoAssignLicensePostRequestBody';
import {serializeAssignLicensePostRequestBody} from './serializeAssignLicensePostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @see {@link https://docs.microsoft.com/graph/api/group-assignlicense?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AssignLicensePostRequestBody | undefined, requestConfiguration?: AssignLicenseRequestBuilderPostRequestConfiguration | undefined) : Promise<Group | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
    public toPostRequestInformation(body: AssignLicensePostRequestBody | undefined, requestConfiguration?: AssignLicenseRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAssignLicensePostRequestBody);
        return requestInfo;
    };
}
