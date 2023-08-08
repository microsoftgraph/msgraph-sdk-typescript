import {AndroidManagedAppProtectionCollectionResponse} from '../../models/';
import type {AndroidManagedAppProtection} from '../../models/androidManagedAppProtection';
import {createAndroidManagedAppProtectionCollectionResponseFromDiscriminatorValue} from '../../models/createAndroidManagedAppProtectionCollectionResponseFromDiscriminatorValue';
import {createAndroidManagedAppProtectionFromDiscriminatorValue} from '../../models/createAndroidManagedAppProtectionFromDiscriminatorValue';
import {deserializeIntoAndroidManagedAppProtection} from '../../models/deserializeIntoAndroidManagedAppProtection';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeAndroidManagedAppProtection} from '../../models/serializeAndroidManagedAppProtection';
import {AndroidManagedAppProtectionsRequestBuilderGetRequestConfiguration} from './androidManagedAppProtectionsRequestBuilderGetRequestConfiguration';
import {AndroidManagedAppProtectionsRequestBuilderPostRequestConfiguration} from './androidManagedAppProtectionsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AndroidManagedAppProtectionItemRequestBuilder} from './item/androidManagedAppProtectionItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the androidManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
 */
export class AndroidManagedAppProtectionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the androidManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
     * @param androidManagedAppProtectionId Unique identifier of the item
     * @returns a AndroidManagedAppProtectionItemRequestBuilder
     */
    public byAndroidManagedAppProtectionId(androidManagedAppProtectionId: string) : AndroidManagedAppProtectionItemRequestBuilder {
        if(!androidManagedAppProtectionId) throw new Error("androidManagedAppProtectionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["androidManagedAppProtection%2Did"] = androidManagedAppProtectionId
        return new AndroidManagedAppProtectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AndroidManagedAppProtectionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/androidManagedAppProtections{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the androidManagedAppProtection objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AndroidManagedAppProtectionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-androidmanagedappprotection-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AndroidManagedAppProtectionsRequestBuilderGetRequestConfiguration | undefined) : Promise<AndroidManagedAppProtectionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AndroidManagedAppProtectionCollectionResponse>(requestInfo, createAndroidManagedAppProtectionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new androidManagedAppProtection object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AndroidManagedAppProtection
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-androidmanagedappprotection-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AndroidManagedAppProtection, requestConfiguration?: AndroidManagedAppProtectionsRequestBuilderPostRequestConfiguration | undefined) : Promise<AndroidManagedAppProtection | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AndroidManagedAppProtection>(requestInfo, createAndroidManagedAppProtectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the androidManagedAppProtection objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AndroidManagedAppProtectionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new androidManagedAppProtection object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AndroidManagedAppProtection, requestConfiguration?: AndroidManagedAppProtectionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAndroidManagedAppProtection);
        return requestInfo;
    };
}
