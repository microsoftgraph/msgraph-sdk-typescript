import {ManagedMobileAppCollectionResponse} from '../../../../models/';
import {createManagedMobileAppCollectionResponseFromDiscriminatorValue} from '../../../../models/createManagedMobileAppCollectionResponseFromDiscriminatorValue';
import {createManagedMobileAppFromDiscriminatorValue} from '../../../../models/createManagedMobileAppFromDiscriminatorValue';
import {deserializeIntoManagedMobileApp} from '../../../../models/deserializeIntoManagedMobileApp';
import type {ManagedMobileApp} from '../../../../models/managedMobileApp';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeManagedMobileApp} from '../../../../models/serializeManagedMobileApp';
import {AppsRequestBuilderGetRequestConfiguration} from './appsRequestBuilderGetRequestConfiguration';
import {AppsRequestBuilderPostRequestConfiguration} from './appsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ManagedMobileAppItemRequestBuilder} from './item/managedMobileAppItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the apps property of the microsoft.graph.iosManagedAppProtection entity.
 */
export class AppsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the apps property of the microsoft.graph.iosManagedAppProtection entity.
     * @param managedMobileAppId Unique identifier of the item
     * @returns a ManagedMobileAppItemRequestBuilder
     */
    public byManagedMobileAppId(managedMobileAppId: string) : ManagedMobileAppItemRequestBuilder {
        if(!managedMobileAppId) throw new Error("managedMobileAppId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedMobileApp%2Did"] = managedMobileAppId
        return new ManagedMobileAppItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AppsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection%2Did}/apps{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the managedMobileApp objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedMobileAppCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-managedmobileapp-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AppsRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedMobileAppCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedMobileAppCollectionResponse>(requestInfo, createManagedMobileAppCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new managedMobileApp object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedMobileApp
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-managedmobileapp-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ManagedMobileApp | undefined, requestConfiguration?: AppsRequestBuilderPostRequestConfiguration | undefined) : Promise<ManagedMobileApp | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedMobileApp>(requestInfo, createManagedMobileAppFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the managedMobileApp objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AppsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new managedMobileApp object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ManagedMobileApp | undefined, requestConfiguration?: AppsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeManagedMobileApp);
        return requestInfo;
    };
}
