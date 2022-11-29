import {Drive} from '../../../../models/';
import {createDriveFromDiscriminatorValue} from '../../../../models/createDriveFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {BundlesRequestBuilder} from './bundles/bundlesRequestBuilder';
import {DriveItemItemRequestBuilder as ic5c8a7c234bc2a268ca948fd88d0d03fedaa55f70f888f558e970aad28888c36} from './bundles/item/driveItemItemRequestBuilder';
import {DriveItemRequestBuilderDeleteRequestConfiguration} from './driveItemRequestBuilderDeleteRequestConfiguration';
import {DriveItemRequestBuilderGetRequestConfiguration} from './driveItemRequestBuilderGetRequestConfiguration';
import {DriveItemRequestBuilderPatchRequestConfiguration} from './driveItemRequestBuilderPatchRequestConfiguration';
import {FollowingRequestBuilder} from './following/followingRequestBuilder';
import {DriveItemItemRequestBuilder as i98056e872a9b38c9f2526ae7e779f32e3bcfd94be6ddab35fa8537c9af800aff} from './following/item/driveItemItemRequestBuilder';
import {DriveItemItemRequestBuilder as ie4e7e06846ca7aefb9be0b56e8eeae0b8717cfa1284ea29d0b560e4c8938d563} from './items/item/driveItemItemRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {ListRequestBuilder} from './list/listRequestBuilder';
import {RecentRequestBuilder} from './recent/recentRequestBuilder';
import {RootRequestBuilder} from './root/rootRequestBuilder';
import {SearchWithQRequestBuilder} from './searchWithQ/searchWithQRequestBuilder';
import {SharedWithMeRequestBuilder} from './sharedWithMe/sharedWithMeRequestBuilder';
import {DriveItemItemRequestBuilder as i20a6405a8461b5b065feda498c43cc446f276e35d97d40c2ad2eaf7ed728cc83} from './special/item/driveItemItemRequestBuilder';
import {SpecialRequestBuilder} from './special/specialRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drives property of the microsoft.graph.group entity. */
export class DriveItemRequestBuilder {
    /** Provides operations to manage the bundles property of the microsoft.graph.drive entity. */
    public get bundles(): BundlesRequestBuilder {
        return new BundlesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the following property of the microsoft.graph.drive entity. */
    public get following(): FollowingRequestBuilder {
        return new FollowingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the items property of the microsoft.graph.drive entity. */
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the list property of the microsoft.graph.drive entity. */
    public get list(): ListRequestBuilder {
        return new ListRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the root property of the microsoft.graph.drive entity. */
    public get root(): RootRequestBuilder {
        return new RootRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the special property of the microsoft.graph.drive entity. */
    public get special(): SpecialRequestBuilder {
        return new SpecialRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the bundles property of the microsoft.graph.drive entity.
     * @param id Unique identifier of the item
     * @returns a DriveItemItemRequestBuilder
     */
    public bundlesById(id: string) : ic5c8a7c234bc2a268ca948fd88d0d03fedaa55f70f888f558e970aad28888c36 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did"] = id
        return new ic5c8a7c234bc2a268ca948fd88d0d03fedaa55f70f888f558e970aad28888c36(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DriveItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}/drives/{drive%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property drives for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: DriveItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The group's drives. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DriveItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property drives in groups
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Drive | undefined, requestConfiguration?: DriveItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property drives for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DriveItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the following property of the microsoft.graph.drive entity.
     * @param id Unique identifier of the item
     * @returns a DriveItemItemRequestBuilder
     */
    public followingById(id: string) : i98056e872a9b38c9f2526ae7e779f32e3bcfd94be6ddab35fa8537c9af800aff {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did"] = id
        return new i98056e872a9b38c9f2526ae7e779f32e3bcfd94be6ddab35fa8537c9af800aff(urlTplParams, this.requestAdapter);
    };
    /**
     * The group's drives. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Drive
     */
    public get(requestConfiguration?: DriveItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Drive | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Drive>(requestInfo, createDriveFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the items property of the microsoft.graph.drive entity.
     * @param id Unique identifier of the item
     * @returns a DriveItemItemRequestBuilder
     */
    public itemsById(id: string) : ie4e7e06846ca7aefb9be0b56e8eeae0b8717cfa1284ea29d0b560e4c8938d563 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did"] = id
        return new ie4e7e06846ca7aefb9be0b56e8eeae0b8717cfa1284ea29d0b560e4c8938d563(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property drives in groups
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Drive
     */
    public patch(body: Drive | undefined, requestConfiguration?: DriveItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Drive | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Drive>(requestInfo, createDriveFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the recent method.
     * @returns a recentRequestBuilder
     */
    public recent() : RecentRequestBuilder {
        return new RecentRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Provides operations to call the search method.
     * @param q Usage: q='{q}'
     * @returns a searchWithQRequestBuilder
     */
    public searchWithQ(q: string | undefined) : SearchWithQRequestBuilder {
        if(!q) throw new Error("q cannot be undefined");
        return new SearchWithQRequestBuilder(this.pathParameters, this.requestAdapter, q);
    };
    /**
     * Provides operations to call the sharedWithMe method.
     * @returns a sharedWithMeRequestBuilder
     */
    public sharedWithMe() : SharedWithMeRequestBuilder {
        return new SharedWithMeRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Provides operations to manage the special property of the microsoft.graph.drive entity.
     * @param id Unique identifier of the item
     * @returns a DriveItemItemRequestBuilder
     */
    public specialById(id: string) : i20a6405a8461b5b065feda498c43cc446f276e35d97d40c2ad2eaf7ed728cc83 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did"] = id
        return new i20a6405a8461b5b065feda498c43cc446f276e35d97d40c2ad2eaf7ed728cc83(urlTplParams, this.requestAdapter);
    };
}
