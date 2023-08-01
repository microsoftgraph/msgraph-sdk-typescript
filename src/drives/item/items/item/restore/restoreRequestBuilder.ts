import {createDriveItemFromDiscriminatorValue} from '../../../../../models/createDriveItemFromDiscriminatorValue';
import {deserializeIntoDriveItem} from '../../../../../models/deserializeIntoDriveItem';
import type {DriveItem} from '../../../../../models/driveItem';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDriveItem} from '../../../../../models/serializeDriveItem';
import {deserializeIntoRestorePostRequestBody} from './deserializeIntoRestorePostRequestBody';
import type {RestorePostRequestBody} from './restorePostRequestBody';
import {RestoreRequestBuilderPostRequestConfiguration} from './restoreRequestBuilderPostRequestConfiguration';
import {serializeRestorePostRequestBody} from './serializeRestorePostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the restore method.
 */
export class RestoreRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new RestoreRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/restore");
    };
    /**
     * Restore a driveItem that has been deleted and is currently in the recycle bin. NOTE: This functionality is currently only available for OneDrive Personal.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DriveItem
     * @see {@link https://learn.microsoft.com/graph/api/driveitem-restore?view=graph-rest-1.0|Find more info here}
     */
    public post(body: RestorePostRequestBody | undefined, requestConfiguration?: RestoreRequestBuilderPostRequestConfiguration | undefined) : Promise<DriveItem | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DriveItem>(requestInfo, createDriveItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Restore a driveItem that has been deleted and is currently in the recycle bin. NOTE: This functionality is currently only available for OneDrive Personal.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RestorePostRequestBody | undefined, requestConfiguration?: RestoreRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRestorePostRequestBody);
        return requestInfo;
    };
}
