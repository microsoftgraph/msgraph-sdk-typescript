import {createDirectoryObjectFromDiscriminatorValue} from '../../models/createDirectoryObjectFromDiscriminatorValue';
import {deserializeIntoDirectoryObject} from '../../models/deserializeIntoDirectoryObject';
import type {DirectoryObject} from '../../models/directoryObject';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDirectoryObject} from '../../models/serializeDirectoryObject';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
import {DirectoryObjectItemRequestBuilderDeleteRequestConfiguration} from './directoryObjectItemRequestBuilderDeleteRequestConfiguration';
import {DirectoryObjectItemRequestBuilderGetRequestConfiguration} from './directoryObjectItemRequestBuilderGetRequestConfiguration';
import {DirectoryObjectItemRequestBuilderPatchRequestConfiguration} from './directoryObjectItemRequestBuilderPatchRequestConfiguration';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of directoryObject entities.
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
        super(pathParameters, requestAdapter, "{+baseurl}/directoryObjects/{directoryObject%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a directory object, for example, a group, user, application, or service principal.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/directoryobject-delete?view=graph-rest-1.0|Find more info here}
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
     * Retrieve the properties and relationships of a directoryObject object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryObject
     * @see {@link https://learn.microsoft.com/graph/api/directoryobject-get?view=graph-rest-1.0|Find more info here}
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
     * Update entity in directoryObjects
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryObject
     */
    public patch(body: DirectoryObject, requestConfiguration?: DirectoryObjectItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DirectoryObject | undefined> {
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
     * Delete a directory object, for example, a group, user, application, or service principal.
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
     * Retrieve the properties and relationships of a directoryObject object.
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
     * Update entity in directoryObjects
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DirectoryObject, requestConfiguration?: DirectoryObjectItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDirectoryObject);
        return requestInfo;
    };
}
