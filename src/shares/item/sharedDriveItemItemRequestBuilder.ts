import { createSharedDriveItemFromDiscriminatorValue } from '../../models/createSharedDriveItemFromDiscriminatorValue';
import { deserializeIntoSharedDriveItem } from '../../models/deserializeIntoSharedDriveItem';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeSharedDriveItem } from '../../models/serializeSharedDriveItem';
import { type SharedDriveItem } from '../../models/sharedDriveItem';
import { CreatedByUserRequestBuilder } from './createdByUser/createdByUserRequestBuilder';
import { DriveItemRequestBuilder } from './driveItem/driveItemRequestBuilder';
import { ItemsRequestBuilder } from './items/itemsRequestBuilder';
import { LastModifiedByUserRequestBuilder } from './lastModifiedByUser/lastModifiedByUserRequestBuilder';
import { ListRequestBuilder } from './list/listRequestBuilder';
import { ListItemRequestBuilder } from './listItem/listItemRequestBuilder';
import { PermissionRequestBuilder } from './permission/permissionRequestBuilder';
import { RootRequestBuilder } from './root/rootRequestBuilder';
import { type SharedDriveItemItemRequestBuilderDeleteRequestConfiguration } from './sharedDriveItemItemRequestBuilderDeleteRequestConfiguration';
import { type SharedDriveItemItemRequestBuilderGetRequestConfiguration } from './sharedDriveItemItemRequestBuilderGetRequestConfiguration';
import { type SharedDriveItemItemRequestBuilderPatchRequestConfiguration } from './sharedDriveItemItemRequestBuilderPatchRequestConfiguration';
import { SiteRequestBuilder } from './site/siteRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of sharedDriveItem entities.
 */
export class SharedDriveItemItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
     */
    public get createdByUser(): CreatedByUserRequestBuilder {
        return new CreatedByUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the driveItem property of the microsoft.graph.sharedDriveItem entity.
     */
    public get driveItem(): DriveItemRequestBuilder {
        return new DriveItemRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the items property of the microsoft.graph.sharedDriveItem entity.
     */
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the lastModifiedByUser property of the microsoft.graph.baseItem entity.
     */
    public get lastModifiedByUser(): LastModifiedByUserRequestBuilder {
        return new LastModifiedByUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the list property of the microsoft.graph.sharedDriveItem entity.
     */
    public get list(): ListRequestBuilder {
        return new ListRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the listItem property of the microsoft.graph.sharedDriveItem entity.
     */
    public get listItem(): ListItemRequestBuilder {
        return new ListItemRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the permission property of the microsoft.graph.sharedDriveItem entity.
     */
    public get permission(): PermissionRequestBuilder {
        return new PermissionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the root property of the microsoft.graph.sharedDriveItem entity.
     */
    public get root(): RootRequestBuilder {
        return new RootRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the site property of the microsoft.graph.sharedDriveItem entity.
     */
    public get site(): SiteRequestBuilder {
        return new SiteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SharedDriveItemItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/shares/{sharedDriveItem%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete entity from shares
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: SharedDriveItemItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Access a shared DriveItem or a collection of shared items by using a shareId or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SharedDriveItem
     * @see {@link https://learn.microsoft.com/graph/api/shares-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SharedDriveItemItemRequestBuilderGetRequestConfiguration | undefined) : Promise<SharedDriveItem | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SharedDriveItem>(requestInfo, createSharedDriveItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update entity in shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SharedDriveItem
     */
    public patch(body: SharedDriveItem, requestConfiguration?: SharedDriveItemItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<SharedDriveItem | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SharedDriveItem>(requestInfo, createSharedDriveItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete entity from shares
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SharedDriveItemItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Access a shared DriveItem or a collection of shared items by using a shareId or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SharedDriveItemItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update entity in shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SharedDriveItem, requestConfiguration?: SharedDriveItemItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSharedDriveItem);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a SharedDriveItemItemRequestBuilder
     */
    public withUrl(rawUrl: string) : SharedDriveItemItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SharedDriveItemItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
