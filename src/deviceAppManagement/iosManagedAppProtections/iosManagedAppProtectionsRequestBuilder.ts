import {IosManagedAppProtectionCollectionResponse} from '../../models/';
import {createIosManagedAppProtectionCollectionResponseFromDiscriminatorValue} from '../../models/createIosManagedAppProtectionCollectionResponseFromDiscriminatorValue';
import {createIosManagedAppProtectionFromDiscriminatorValue} from '../../models/createIosManagedAppProtectionFromDiscriminatorValue';
import {deserializeIntoIosManagedAppProtection} from '../../models/deserializeIntoIosManagedAppProtection';
import type {IosManagedAppProtection} from '../../models/iosManagedAppProtection';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeIosManagedAppProtection} from '../../models/serializeIosManagedAppProtection';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {IosManagedAppProtectionsRequestBuilderGetRequestConfiguration} from './iosManagedAppProtectionsRequestBuilderGetRequestConfiguration';
import {IosManagedAppProtectionsRequestBuilderPostRequestConfiguration} from './iosManagedAppProtectionsRequestBuilderPostRequestConfiguration';
import {IosManagedAppProtectionItemRequestBuilder} from './item/iosManagedAppProtectionItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the iosManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
 */
export class IosManagedAppProtectionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the iosManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
     * @param iosManagedAppProtectionId Unique identifier of the item
     * @returns a IosManagedAppProtectionItemRequestBuilder
     */
    public byIosManagedAppProtectionId(iosManagedAppProtectionId: string) : IosManagedAppProtectionItemRequestBuilder {
        if(!iosManagedAppProtectionId) throw new Error("iosManagedAppProtectionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["iosManagedAppProtection%2Did"] = iosManagedAppProtectionId
        return new IosManagedAppProtectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new IosManagedAppProtectionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/iosManagedAppProtections{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the iosManagedAppProtection objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IosManagedAppProtectionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-iosmanagedappprotection-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IosManagedAppProtectionsRequestBuilderGetRequestConfiguration | undefined) : Promise<IosManagedAppProtectionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IosManagedAppProtectionCollectionResponse>(requestInfo, createIosManagedAppProtectionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new iosManagedAppProtection object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IosManagedAppProtection
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-iosmanagedappprotection-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: IosManagedAppProtection | undefined, requestConfiguration?: IosManagedAppProtectionsRequestBuilderPostRequestConfiguration | undefined) : Promise<IosManagedAppProtection | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IosManagedAppProtection>(requestInfo, createIosManagedAppProtectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the iosManagedAppProtection objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IosManagedAppProtectionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new iosManagedAppProtection object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: IosManagedAppProtection | undefined, requestConfiguration?: IosManagedAppProtectionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIosManagedAppProtection);
        return requestInfo;
    };
}
