import {UserExperienceAnalyticsDeviceStartupProcessCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsDeviceStartupProcessCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsDeviceStartupProcessCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsDeviceStartupProcessFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsDeviceStartupProcessFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsDeviceStartupProcess} from '../../models/deserializeIntoUserExperienceAnalyticsDeviceStartupProcess';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsDeviceStartupProcess} from '../../models/serializeUserExperienceAnalyticsDeviceStartupProcess';
import type {UserExperienceAnalyticsDeviceStartupProcess} from '../../models/userExperienceAnalyticsDeviceStartupProcess';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsDeviceStartupProcessItemRequestBuilder} from './item/userExperienceAnalyticsDeviceStartupProcessItemRequestBuilder';
import {UserExperienceAnalyticsDeviceStartupProcessesRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsDeviceStartupProcessesRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsDeviceStartupProcessesRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsDeviceStartupProcessesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsDeviceStartupProcesses property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsDeviceStartupProcessesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsDeviceStartupProcesses property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsDeviceStartupProcessId Unique identifier of the item
     * @returns a UserExperienceAnalyticsDeviceStartupProcessItemRequestBuilder
     */
    public byUserExperienceAnalyticsDeviceStartupProcessId(userExperienceAnalyticsDeviceStartupProcessId: string) : UserExperienceAnalyticsDeviceStartupProcessItemRequestBuilder {
        if(!userExperienceAnalyticsDeviceStartupProcessId) throw new Error("userExperienceAnalyticsDeviceStartupProcessId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsDeviceStartupProcess%2Did"] = userExperienceAnalyticsDeviceStartupProcessId
        return new UserExperienceAnalyticsDeviceStartupProcessItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsDeviceStartupProcessesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics device Startup Processes
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDeviceStartupProcessCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsDeviceStartupProcessesRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDeviceStartupProcessCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDeviceStartupProcessCollectionResponse>(requestInfo, createUserExperienceAnalyticsDeviceStartupProcessCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsDeviceStartupProcesses for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDeviceStartupProcess
     */
    public post(body: UserExperienceAnalyticsDeviceStartupProcess | undefined, requestConfiguration?: UserExperienceAnalyticsDeviceStartupProcessesRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDeviceStartupProcess | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDeviceStartupProcess>(requestInfo, createUserExperienceAnalyticsDeviceStartupProcessFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics device Startup Processes
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsDeviceStartupProcessesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsDeviceStartupProcesses for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsDeviceStartupProcess | undefined, requestConfiguration?: UserExperienceAnalyticsDeviceStartupProcessesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserExperienceAnalyticsDeviceStartupProcess);
        return requestInfo;
    };
}
