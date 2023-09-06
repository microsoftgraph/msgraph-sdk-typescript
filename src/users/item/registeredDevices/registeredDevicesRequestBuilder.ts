import { type DirectoryObjectCollectionResponse } from '../../../models/';
import { createDirectoryObjectCollectionResponseFromDiscriminatorValue } from '../../../models/createDirectoryObjectCollectionResponseFromDiscriminatorValue';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { GraphAppRoleAssignmentRequestBuilder } from './graphAppRoleAssignment/graphAppRoleAssignmentRequestBuilder';
import { GraphDeviceRequestBuilder } from './graphDevice/graphDeviceRequestBuilder';
import { GraphEndpointRequestBuilder } from './graphEndpoint/graphEndpointRequestBuilder';
import { DirectoryObjectItemRequestBuilder } from './item/directoryObjectItemRequestBuilder';
import { type RegisteredDevicesRequestBuilderGetRequestConfiguration } from './registeredDevicesRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the registeredDevices property of the microsoft.graph.user entity.
 */
export class RegisteredDevicesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to appRoleAssignment.
     */
    public get graphAppRoleAssignment(): GraphAppRoleAssignmentRequestBuilder {
        return new GraphAppRoleAssignmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to device.
     */
    public get graphDevice(): GraphDeviceRequestBuilder {
        return new GraphDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to endpoint.
     */
    public get graphEndpoint(): GraphEndpointRequestBuilder {
        return new GraphEndpointRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the registeredDevices property of the microsoft.graph.user entity.
     * @param directoryObjectId The unique identifier of directoryObject
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public byDirectoryObjectId(directoryObjectId: string) : DirectoryObjectItemRequestBuilder {
        if(!directoryObjectId) throw new Error("directoryObjectId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = directoryObjectId
        return new DirectoryObjectItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RegisteredDevicesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/registeredDevices{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Devices that are registered for the user. Read-only. Nullable. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryObjectCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-list-registereddevices?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RegisteredDevicesRequestBuilderGetRequestConfiguration | undefined) : Promise<DirectoryObjectCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryObjectCollectionResponse>(requestInfo, createDirectoryObjectCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Devices that are registered for the user. Read-only. Nullable. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RegisteredDevicesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a registeredDevicesRequestBuilder
     */
    public withUrl(rawUrl: string) : RegisteredDevicesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RegisteredDevicesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
