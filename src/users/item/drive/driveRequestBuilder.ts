import {Drive} from '../../../models/';
import {createDriveFromDiscriminatorValue} from '../../../models/createDriveFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {DriveRequestBuilderGetRequestConfiguration} from './driveRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the drive property of the microsoft.graph.user entity.
 */
export class DriveRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DriveRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/drive{?%24select,%24expand}");
    };
    /**
     * Retrieve the properties and relationships of a Drive resource. A Drive is the top-level container for a file system, such as OneDrive or SharePoint document libraries.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Drive
     * @see {@link https://learn.microsoft.com/graph/api/drive-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DriveRequestBuilderGetRequestConfiguration | undefined) : Promise<Drive | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Drive>(requestInfo, createDriveFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of a Drive resource. A Drive is the top-level container for a file system, such as OneDrive or SharePoint document libraries.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DriveRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a driveRequestBuilder
     */
    public withUrl(rawUrl: string) : DriveRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DriveRequestBuilder(rawUrl, this.requestAdapter);
    };
}
