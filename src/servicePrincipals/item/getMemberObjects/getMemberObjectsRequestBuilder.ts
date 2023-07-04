import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {createGetMemberObjectsResponseFromDiscriminatorValue} from './createGetMemberObjectsResponseFromDiscriminatorValue';
import {deserializeIntoGetMemberObjectsPostRequestBody} from './deserializeIntoGetMemberObjectsPostRequestBody';
import {deserializeIntoGetMemberObjectsResponse} from './deserializeIntoGetMemberObjectsResponse';
import {GetMemberObjectsPostRequestBody} from './getMemberObjectsPostRequestBody';
import {GetMemberObjectsRequestBuilderPostRequestConfiguration} from './getMemberObjectsRequestBuilderPostRequestConfiguration';
import {GetMemberObjectsResponse} from './getMemberObjectsResponse';
import {serializeGetMemberObjectsPostRequestBody} from './serializeGetMemberObjectsPostRequestBody';
import {serializeGetMemberObjectsResponse} from './serializeGetMemberObjectsResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getMemberObjects method.
 */
export class GetMemberObjectsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetMemberObjectsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/getMemberObjects");
    };
    /**
     * Return all IDs for the groups, administrative units, and directory roles that a user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. **Note:** Only users and role-enabled groups can be members of directory roles.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetMemberObjectsResponse
     * @see {@link https://docs.microsoft.com/graph/api/directoryobject-getmemberobjects?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetMemberObjectsPostRequestBody | undefined, requestConfiguration?: GetMemberObjectsRequestBuilderPostRequestConfiguration | undefined) : Promise<GetMemberObjectsResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetMemberObjectsResponse>(requestInfo, createGetMemberObjectsResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Return all IDs for the groups, administrative units, and directory roles that a user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. **Note:** Only users and role-enabled groups can be members of directory roles.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetMemberObjectsPostRequestBody | undefined, requestConfiguration?: GetMemberObjectsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetMemberObjectsPostRequestBody);
        return requestInfo;
    };
}
