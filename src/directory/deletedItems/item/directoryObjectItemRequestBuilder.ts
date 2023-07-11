import {createDirectoryObjectFromDiscriminatorValue} from '../../../models/createDirectoryObjectFromDiscriminatorValue';
import {deserializeIntoDirectoryObject} from '../../../models/deserializeIntoDirectoryObject';
import {DirectoryObject} from '../../../models/directoryObject';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeDirectoryObject} from '../../../models/serializeDirectoryObject';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
import {DirectoryObjectItemRequestBuilderDeleteRequestConfiguration} from './directoryObjectItemRequestBuilderDeleteRequestConfiguration';
import {DirectoryObjectItemRequestBuilderGetRequestConfiguration} from './directoryObjectItemRequestBuilderGetRequestConfiguration';
import {DirectoryObjectItemRequestBuilderPatchRequestConfiguration} from './directoryObjectItemRequestBuilderPatchRequestConfiguration';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {GraphAdministrativeUnitRequestBuilder} from './graphAdministrativeUnit/graphAdministrativeUnitRequestBuilder';
import {GraphApplicationRequestBuilder} from './graphApplication/graphApplicationRequestBuilder';
import {GraphDeviceRequestBuilder} from './graphDevice/graphDeviceRequestBuilder';
import {GraphGroupRequestBuilder} from './graphGroup/graphGroupRequestBuilder';
import {GraphServicePrincipalRequestBuilder} from './graphServicePrincipal/graphServicePrincipalRequestBuilder';
import {GraphUserRequestBuilder} from './graphUser/graphUserRequestBuilder';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deletedItems property of the microsoft.graph.directory entity.
 */
export class DirectoryObjectItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the checkMemberGroups method.
     */
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the checkMemberObjects method.
     */
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getMemberGroups method.
     */
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getMemberObjects method.
     */
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to administrativeUnit.
     */
    public get graphAdministrativeUnit(): GraphAdministrativeUnitRequestBuilder {
        return new GraphAdministrativeUnitRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to application.
     */
    public get graphApplication(): GraphApplicationRequestBuilder {
        return new GraphApplicationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to device.
     */
    public get graphDevice(): GraphDeviceRequestBuilder {
        return new GraphDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to group.
     */
    public get graphGroup(): GraphGroupRequestBuilder {
        return new GraphGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to servicePrincipal.
     */
    public get graphServicePrincipal(): GraphServicePrincipalRequestBuilder {
        return new GraphServicePrincipalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to user.
     */
    public get graphUser(): GraphUserRequestBuilder {
        return new GraphUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the restore method.
     */
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DirectoryObjectItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/deletedItems/{directoryObject%2Did}{?%24select,%24expand}");
    };
    /**
     * Permanently delete a recently deleted application, group, servicePrincipal, or user object from deleted items. After an item is permanently deleted, it **cannot** be restored. Administrative units **cannot** be permanently deleted by using the **deletedItems** API. Soft-deleted administrative units will be permanently deleted 30 days after initial deletion unless they are restored.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/directory-deleteditems-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DirectoryObjectItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties of a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryObject
     * @see {@link https://docs.microsoft.com/graph/api/directory-deleteditems-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DirectoryObjectItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DirectoryObject | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryObject>(requestInfo, createDirectoryObjectFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property deletedItems in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryObject
     */
    public patch(body: DirectoryObject | undefined, requestConfiguration?: DirectoryObjectItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DirectoryObject | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryObject>(requestInfo, createDirectoryObjectFromDiscriminatorValue, errorMapping);
    };
    /**
     * Permanently delete a recently deleted application, group, servicePrincipal, or user object from deleted items. After an item is permanently deleted, it **cannot** be restored. Administrative units **cannot** be permanently deleted by using the **deletedItems** API. Soft-deleted administrative units will be permanently deleted 30 days after initial deletion unless they are restored.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DirectoryObjectItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties of a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DirectoryObjectItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property deletedItems in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DirectoryObject | undefined, requestConfiguration?: DirectoryObjectItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDirectoryObject);
        return requestInfo;
    };
}
