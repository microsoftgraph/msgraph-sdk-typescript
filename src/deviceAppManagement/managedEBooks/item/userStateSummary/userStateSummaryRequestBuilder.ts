import {UserInstallStateSummaryCollectionResponse} from '../../../../models/';
import {createUserInstallStateSummaryCollectionResponseFromDiscriminatorValue} from '../../../../models/createUserInstallStateSummaryCollectionResponseFromDiscriminatorValue';
import {createUserInstallStateSummaryFromDiscriminatorValue} from '../../../../models/createUserInstallStateSummaryFromDiscriminatorValue';
import {deserializeIntoUserInstallStateSummary} from '../../../../models/deserializeIntoUserInstallStateSummary';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeUserInstallStateSummary} from '../../../../models/serializeUserInstallStateSummary';
import {UserInstallStateSummary} from '../../../../models/userInstallStateSummary';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserInstallStateSummaryItemRequestBuilder} from './item/userInstallStateSummaryItemRequestBuilder';
import {UserStateSummaryRequestBuilderGetRequestConfiguration} from './userStateSummaryRequestBuilderGetRequestConfiguration';
import {UserStateSummaryRequestBuilderPostRequestConfiguration} from './userStateSummaryRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userStateSummary property of the microsoft.graph.managedEBook entity.
 */
export class UserStateSummaryRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userStateSummary property of the microsoft.graph.managedEBook entity.
     * @param userInstallStateSummaryId Unique identifier of the item
     * @returns a UserInstallStateSummaryItemRequestBuilder
     */
    public byUserInstallStateSummaryId(userInstallStateSummaryId: string) : UserInstallStateSummaryItemRequestBuilder {
        if(!userInstallStateSummaryId) throw new Error("userInstallStateSummaryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userInstallStateSummary%2Did"] = userInstallStateSummaryId
        return new UserInstallStateSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserStateSummaryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/managedEBooks/{managedEBook%2Did}/userStateSummary{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the userInstallStateSummary objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserInstallStateSummaryCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/intune-books-userinstallstatesummary-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserStateSummaryRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserInstallStateSummaryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<UserInstallStateSummaryCollectionResponse>(requestInfo, createUserInstallStateSummaryCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new userInstallStateSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserInstallStateSummary
     * @see {@link https://docs.microsoft.com/graph/api/intune-books-userinstallstatesummary-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UserInstallStateSummary | undefined, requestConfiguration?: UserStateSummaryRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserInstallStateSummary | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<UserInstallStateSummary>(requestInfo, createUserInstallStateSummaryFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * List properties and relationships of the userInstallStateSummary objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserStateSummaryRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new userInstallStateSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserInstallStateSummary | undefined, requestConfiguration?: UserStateSummaryRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserInstallStateSummary);
        return requestInfo;
    };
}
