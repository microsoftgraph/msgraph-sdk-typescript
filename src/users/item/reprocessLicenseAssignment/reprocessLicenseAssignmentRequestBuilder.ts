import {User} from '../../../models/';
import {createUserFromDiscriminatorValue} from '../../../models/createUserFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {ReprocessLicenseAssignmentRequestBuilderPostRequestConfiguration} from './reprocessLicenseAssignmentRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the reprocessLicenseAssignment method.
 */
export class ReprocessLicenseAssignmentRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ReprocessLicenseAssignmentRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/reprocessLicenseAssignment");
    };
    /**
     * Reprocess all group-based license assignments for the user. To learn more about group-based licensing, see What is group-based licensing in Azure Active Directory. Also see Identify and resolve license assignment problems for a group in Azure Active Directory for more details.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of User
     * @see {@link https://learn.microsoft.com/graph/api/user-reprocesslicenseassignment?view=graph-rest-1.0|Find more info here}
     */
    public post(requestConfiguration?: ReprocessLicenseAssignmentRequestBuilderPostRequestConfiguration | undefined) : Promise<User | undefined> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<User>(requestInfo, createUserFromDiscriminatorValue, errorMapping);
    };
    /**
     * Reprocess all group-based license assignments for the user. To learn more about group-based licensing, see What is group-based licensing in Azure Active Directory. Also see Identify and resolve license assignment problems for a group in Azure Active Directory for more details.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: ReprocessLicenseAssignmentRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
