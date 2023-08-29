import {UserInstallStateSummaryCollectionResponse} from '../../../../models/';
import {createUserInstallStateSummaryCollectionResponseFromDiscriminatorValue} from '../../../../models/createUserInstallStateSummaryCollectionResponseFromDiscriminatorValue';
import {createUserInstallStateSummaryFromDiscriminatorValue} from '../../../../models/createUserInstallStateSummaryFromDiscriminatorValue';
import {deserializeIntoUserInstallStateSummary} from '../../../../models/deserializeIntoUserInstallStateSummary';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeUserInstallStateSummary} from '../../../../models/serializeUserInstallStateSummary';
import type {UserInstallStateSummary} from '../../../../models/userInstallStateSummary';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserInstallStateSummaryItemRequestBuilder} from './item/userInstallStateSummaryItemRequestBuilder';
import {UserStateSummaryRequestBuilderGetRequestConfiguration} from './userStateSummaryRequestBuilderGetRequestConfiguration';
import {UserStateSummaryRequestBuilderPostRequestConfiguration} from './userStateSummaryRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @param userInstallStateSummaryId The unique identifier of userInstallStateSummary
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
     * @returns a Promise of UserInstallStateSummaryCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-books-userinstallstatesummary-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserStateSummaryRequestBuilderGetRequestConfiguration | undefined) : Promise<UserInstallStateSummaryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserInstallStateSummaryCollectionResponse>(requestInfo, createUserInstallStateSummaryCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new userInstallStateSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserInstallStateSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-books-userinstallstatesummary-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UserInstallStateSummary, requestConfiguration?: UserStateSummaryRequestBuilderPostRequestConfiguration | undefined) : Promise<UserInstallStateSummary | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserInstallStateSummary>(requestInfo, createUserInstallStateSummaryFromDiscriminatorValue, errorMapping);
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
    public toPostRequestInformation(body: UserInstallStateSummary, requestConfiguration?: UserStateSummaryRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserInstallStateSummary);
        return requestInfo;
    };
}
