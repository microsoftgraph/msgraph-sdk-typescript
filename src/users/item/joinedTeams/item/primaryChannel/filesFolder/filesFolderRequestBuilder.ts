import { type DriveItem } from '../../../../../../models/';
import { createDriveItemFromDiscriminatorValue } from '../../../../../../models/createDriveItemFromDiscriminatorValue';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { ContentRequestBuilder } from './content/contentRequestBuilder';
import { type FilesFolderRequestBuilderGetRequestConfiguration } from './filesFolderRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the filesFolder property of the microsoft.graph.channel entity.
 */
export class FilesFolderRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the media for the user entity.
     */
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new FilesFolderRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/joinedTeams/{team%2Did}/primaryChannel/filesFolder{?%24select,%24expand}");
    };
    /**
     * Get the metadata for the location where the files of a channel are stored. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DriveItem
     * @see {@link https://learn.microsoft.com/graph/api/channel-get-filesfolder?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: FilesFolderRequestBuilderGetRequestConfiguration | undefined) : Promise<DriveItem | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DriveItem>(requestInfo, createDriveItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the metadata for the location where the files of a channel are stored. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FilesFolderRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a filesFolderRequestBuilder
     */
    public withUrl(rawUrl: string) : FilesFolderRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new FilesFolderRequestBuilder(rawUrl, this.requestAdapter);
    };
}
