import {DriveItemVersionCollectionResponse} from '../../../../../models/';
import {createDriveItemVersionCollectionResponseFromDiscriminatorValue} from '../../../../../models/createDriveItemVersionCollectionResponseFromDiscriminatorValue';
import {createDriveItemVersionFromDiscriminatorValue} from '../../../../../models/createDriveItemVersionFromDiscriminatorValue';
import {deserializeIntoDriveItemVersion} from '../../../../../models/deserializeIntoDriveItemVersion';
import type {DriveItemVersion} from '../../../../../models/driveItemVersion';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDriveItemVersion} from '../../../../../models/serializeDriveItemVersion';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DriveItemVersionItemRequestBuilder} from './item/driveItemVersionItemRequestBuilder';
import {VersionsRequestBuilderGetRequestConfiguration} from './versionsRequestBuilderGetRequestConfiguration';
import {VersionsRequestBuilderPostRequestConfiguration} from './versionsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the versions property of the microsoft.graph.driveItem entity.
 */
export class VersionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the versions property of the microsoft.graph.driveItem entity.
     * @param driveItemVersionId The unique identifier of driveItemVersion
     * @returns a DriveItemVersionItemRequestBuilder
     */
    public byDriveItemVersionId(driveItemVersionId: string) : DriveItemVersionItemRequestBuilder {
        if(!driveItemVersionId) throw new Error("driveItemVersionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItemVersion%2Did"] = driveItemVersionId
        return new DriveItemVersionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new VersionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/versions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * OneDrive and SharePoint can be configured to retain the history for files.Depending on the service and configuration, a new version can be created for each edit, each time the file is saved, manually, or never. Previous versions of a document may be retained for a finite period of time depending on admin settings which may be unique per user or location.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DriveItemVersionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/driveitem-list-versions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: VersionsRequestBuilderGetRequestConfiguration | undefined) : Promise<DriveItemVersionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DriveItemVersionCollectionResponse>(requestInfo, createDriveItemVersionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to versions for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DriveItemVersion
     */
    public post(body: DriveItemVersion, requestConfiguration?: VersionsRequestBuilderPostRequestConfiguration | undefined) : Promise<DriveItemVersion | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DriveItemVersion>(requestInfo, createDriveItemVersionFromDiscriminatorValue, errorMapping);
    };
    /**
     * OneDrive and SharePoint can be configured to retain the history for files.Depending on the service and configuration, a new version can be created for each edit, each time the file is saved, manually, or never. Previous versions of a document may be retained for a finite period of time depending on admin settings which may be unique per user or location.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: VersionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to versions for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DriveItemVersion, requestConfiguration?: VersionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDriveItemVersion);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a versionsRequestBuilder
     */
    public withUrl(rawUrl: string) : VersionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new VersionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
