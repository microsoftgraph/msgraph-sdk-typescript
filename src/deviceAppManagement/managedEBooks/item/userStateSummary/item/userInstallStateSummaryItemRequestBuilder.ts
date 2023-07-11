import {createUserInstallStateSummaryFromDiscriminatorValue} from '../../../../../models/createUserInstallStateSummaryFromDiscriminatorValue';
import {deserializeIntoUserInstallStateSummary} from '../../../../../models/deserializeIntoUserInstallStateSummary';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeUserInstallStateSummary} from '../../../../../models/serializeUserInstallStateSummary';
import {UserInstallStateSummary} from '../../../../../models/userInstallStateSummary';
import {DeviceStatesRequestBuilder} from './deviceStates/deviceStatesRequestBuilder';
import {UserInstallStateSummaryItemRequestBuilderDeleteRequestConfiguration} from './userInstallStateSummaryItemRequestBuilderDeleteRequestConfiguration';
import {UserInstallStateSummaryItemRequestBuilderGetRequestConfiguration} from './userInstallStateSummaryItemRequestBuilderGetRequestConfiguration';
import {UserInstallStateSummaryItemRequestBuilderPatchRequestConfiguration} from './userInstallStateSummaryItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userStateSummary property of the microsoft.graph.managedEBook entity.
 */
export class UserInstallStateSummaryItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the deviceStates property of the microsoft.graph.userInstallStateSummary entity.
     */
    public get deviceStates(): DeviceStatesRequestBuilder {
        return new DeviceStatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new UserInstallStateSummaryItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/managedEBooks/{managedEBook%2Did}/userStateSummary/{userInstallStateSummary%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userStateSummary for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserInstallStateSummaryItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * The list of installation states for this eBook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserInstallStateSummary
     */
    public get(requestConfiguration?: UserInstallStateSummaryItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserInstallStateSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserInstallStateSummary>(requestInfo, createUserInstallStateSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property userStateSummary in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserInstallStateSummary
     */
    public patch(body: UserInstallStateSummary | undefined, requestConfiguration?: UserInstallStateSummaryItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserInstallStateSummary | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserInstallStateSummary>(requestInfo, createUserInstallStateSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userStateSummary for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserInstallStateSummaryItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * The list of installation states for this eBook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserInstallStateSummaryItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property userStateSummary in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserInstallStateSummary | undefined, requestConfiguration?: UserInstallStateSummaryItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserInstallStateSummary);
        return requestInfo;
    };
}
