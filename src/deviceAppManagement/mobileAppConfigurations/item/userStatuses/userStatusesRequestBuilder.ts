import {ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse} from '../../../../models/';
import {createManagedDeviceMobileAppConfigurationUserStatusCollectionResponseFromDiscriminatorValue} from '../../../../models/createManagedDeviceMobileAppConfigurationUserStatusCollectionResponseFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue} from '../../../../models/createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue';
import {deserializeIntoManagedDeviceMobileAppConfigurationUserStatus} from '../../../../models/deserializeIntoManagedDeviceMobileAppConfigurationUserStatus';
import {ManagedDeviceMobileAppConfigurationUserStatus} from '../../../../models/managedDeviceMobileAppConfigurationUserStatus';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeManagedDeviceMobileAppConfigurationUserStatus} from '../../../../models/serializeManagedDeviceMobileAppConfigurationUserStatus';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilder} from './item/managedDeviceMobileAppConfigurationUserStatusItemRequestBuilder';
import {UserStatusesRequestBuilderGetRequestConfiguration} from './userStatusesRequestBuilderGetRequestConfiguration';
import {UserStatusesRequestBuilderPostRequestConfiguration} from './userStatusesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userStatuses property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
 */
export class UserStatusesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userStatuses property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
     * @param managedDeviceMobileAppConfigurationUserStatusId Unique identifier of the item
     * @returns a ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilder
     */
    public byManagedDeviceMobileAppConfigurationUserStatusId(managedDeviceMobileAppConfigurationUserStatusId: string) : ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilder {
        if(!managedDeviceMobileAppConfigurationUserStatusId) throw new Error("managedDeviceMobileAppConfigurationUserStatusId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDeviceMobileAppConfigurationUserStatus%2Did"] = managedDeviceMobileAppConfigurationUserStatusId
        return new ManagedDeviceMobileAppConfigurationUserStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserStatusesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration%2Did}/userStatuses{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the managedDeviceMobileAppConfigurationUserStatus objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationuserstatus-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserStatusesRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse>(requestInfo, createManagedDeviceMobileAppConfigurationUserStatusCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new managedDeviceMobileAppConfigurationUserStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationUserStatus
     * @see {@link https://docs.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationuserstatus-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ManagedDeviceMobileAppConfigurationUserStatus | undefined, requestConfiguration?: UserStatusesRequestBuilderPostRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationUserStatus | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfigurationUserStatus>(requestInfo, createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the managedDeviceMobileAppConfigurationUserStatus objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserStatusesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new managedDeviceMobileAppConfigurationUserStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ManagedDeviceMobileAppConfigurationUserStatus | undefined, requestConfiguration?: UserStatusesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeManagedDeviceMobileAppConfigurationUserStatus);
        return requestInfo;
    };
}
