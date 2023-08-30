import {createListItemVersionFromDiscriminatorValue} from '../../../../../../../models/createListItemVersionFromDiscriminatorValue';
import {deserializeIntoListItemVersion} from '../../../../../../../models/deserializeIntoListItemVersion';
import type {ListItemVersion} from '../../../../../../../models/listItemVersion';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeListItemVersion} from '../../../../../../../models/serializeListItemVersion';
import {FieldsRequestBuilder} from './fields/fieldsRequestBuilder';
import {ListItemVersionItemRequestBuilderDeleteRequestConfiguration} from './listItemVersionItemRequestBuilderDeleteRequestConfiguration';
import {ListItemVersionItemRequestBuilderGetRequestConfiguration} from './listItemVersionItemRequestBuilderGetRequestConfiguration';
import {ListItemVersionItemRequestBuilderPatchRequestConfiguration} from './listItemVersionItemRequestBuilderPatchRequestConfiguration';
import {RestoreVersionRequestBuilder} from './restoreVersion/restoreVersionRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the versions property of the microsoft.graph.listItem entity.
 */
export class ListItemVersionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the fields property of the microsoft.graph.listItemVersion entity.
     */
    public get fields(): FieldsRequestBuilder {
        return new FieldsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the restoreVersion method.
     */
    public get restoreVersion(): RestoreVersionRequestBuilder {
        return new RestoreVersionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ListItemVersionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/shares/{sharedDriveItem%2Did}/list/items/{listItem%2Did}/versions/{listItemVersion%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property versions for shares
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ListItemVersionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the metadata for a specific version of a ListItem.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ListItemVersion
     * @see {@link https://learn.microsoft.com/graph/api/listitemversion-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ListItemVersionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ListItemVersion | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ListItemVersion>(requestInfo, createListItemVersionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property versions in shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ListItemVersion
     */
    public patch(body: ListItemVersion, requestConfiguration?: ListItemVersionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ListItemVersion | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ListItemVersion>(requestInfo, createListItemVersionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property versions for shares
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ListItemVersionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the metadata for a specific version of a ListItem.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ListItemVersionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property versions in shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ListItemVersion, requestConfiguration?: ListItemVersionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeListItemVersion);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ListItemVersionItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ListItemVersionItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ListItemVersionItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
