import {DriveCollectionResponse} from '../models/';
import {createDriveCollectionResponseFromDiscriminatorValue} from '../models/createDriveCollectionResponseFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from '../models/createDriveFromDiscriminatorValue';
import {deserializeIntoDrive} from '../models/deserializeIntoDrive';
import type {Drive} from '../models/drive';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeDrive} from '../models/serializeDrive';
import {DrivesRequestBuilderGetRequestConfiguration} from './drivesRequestBuilderGetRequestConfiguration';
import {DrivesRequestBuilderPostRequestConfiguration} from './drivesRequestBuilderPostRequestConfiguration';
import {DriveItemRequestBuilder} from './item/driveItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of drive entities.
 */
export class DrivesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the collection of drive entities.
     * @param driveId Unique identifier of the item
     * @returns a DriveItemRequestBuilder
     */
    public byDriveId(driveId: string) : DriveItemRequestBuilder {
        if(!driveId) throw new Error("driveId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["drive%2Did"] = driveId
        return new DriveItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DrivesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives{?%24top,%24skip,%24search,%24filter,%24orderby,%24select,%24expand}");
    };
    /**
     * Get entities from drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DriveCollectionResponse
     */
    public get(requestConfiguration?: DrivesRequestBuilderGetRequestConfiguration | undefined) : Promise<DriveCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DriveCollectionResponse>(requestInfo, createDriveCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add new entity to drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Drive
     */
    public post(body: Drive | undefined, requestConfiguration?: DrivesRequestBuilderPostRequestConfiguration | undefined) : Promise<Drive | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Drive>(requestInfo, createDriveFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get entities from drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DrivesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add new entity to drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Drive | undefined, requestConfiguration?: DrivesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDrive);
        return requestInfo;
    };
}
