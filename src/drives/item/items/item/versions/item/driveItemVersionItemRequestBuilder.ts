import {createDriveItemVersionFromDiscriminatorValue} from '../../../../../../models/createDriveItemVersionFromDiscriminatorValue';
import {deserializeIntoDriveItemVersion} from '../../../../../../models/deserializeIntoDriveItemVersion';
import type {DriveItemVersion} from '../../../../../../models/driveItemVersion';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeDriveItemVersion} from '../../../../../../models/serializeDriveItemVersion';
import {ContentRequestBuilder} from './content/contentRequestBuilder';
import {DriveItemVersionItemRequestBuilderDeleteRequestConfiguration} from './driveItemVersionItemRequestBuilderDeleteRequestConfiguration';
import {DriveItemVersionItemRequestBuilderGetRequestConfiguration} from './driveItemVersionItemRequestBuilderGetRequestConfiguration';
import {DriveItemVersionItemRequestBuilderPatchRequestConfiguration} from './driveItemVersionItemRequestBuilderPatchRequestConfiguration';
import {RestoreVersionRequestBuilder} from './restoreVersion/restoreVersionRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the versions property of the microsoft.graph.driveItem entity.
 */
export class DriveItemVersionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the media for the drive entity.
     */
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the restoreVersion method.
     */
    public get restoreVersion(): RestoreVersionRequestBuilder {
        return new RestoreVersionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DriveItemVersionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/versions/{driveItemVersion%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property versions for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DriveItemVersionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the metadata for a specific version of a DriveItem.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DriveItemVersion
     * @see {@link https://learn.microsoft.com/graph/api/driveitemversion-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DriveItemVersionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DriveItemVersion | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DriveItemVersion>(requestInfo, createDriveItemVersionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property versions in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DriveItemVersion
     */
    public patch(body: DriveItemVersion, requestConfiguration?: DriveItemVersionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DriveItemVersion | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DriveItemVersion>(requestInfo, createDriveItemVersionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property versions for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DriveItemVersionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the metadata for a specific version of a DriveItem.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DriveItemVersionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property versions in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DriveItemVersion, requestConfiguration?: DriveItemVersionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDriveItemVersion);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DriveItemVersionItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DriveItemVersionItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DriveItemVersionItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
