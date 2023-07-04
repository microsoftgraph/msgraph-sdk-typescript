import {MobileAppCollectionResponse} from '../../models/';
import {createMobileAppCollectionResponseFromDiscriminatorValue} from '../../models/createMobileAppCollectionResponseFromDiscriminatorValue';
import {createMobileAppFromDiscriminatorValue} from '../../models/createMobileAppFromDiscriminatorValue';
import {deserializeIntoMobileApp} from '../../models/deserializeIntoMobileApp';
import {MobileApp} from '../../models/mobileApp';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeMobileApp} from '../../models/serializeMobileApp';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GraphManagedMobileLobAppRequestBuilder} from './graphManagedMobileLobApp/graphManagedMobileLobAppRequestBuilder';
import {GraphMobileLobAppRequestBuilder} from './graphMobileLobApp/graphMobileLobAppRequestBuilder';
import {MobileAppItemRequestBuilder} from './item/mobileAppItemRequestBuilder';
import {MobileAppsRequestBuilderGetRequestConfiguration} from './mobileAppsRequestBuilderGetRequestConfiguration';
import {MobileAppsRequestBuilderPostRequestConfiguration} from './mobileAppsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mobileApps property of the microsoft.graph.deviceAppManagement entity.
 */
export class MobileAppsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to managedMobileLobApp.
     */
    public get graphManagedMobileLobApp(): GraphManagedMobileLobAppRequestBuilder {
        return new GraphManagedMobileLobAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to mobileLobApp.
     */
    public get graphMobileLobApp(): GraphMobileLobAppRequestBuilder {
        return new GraphMobileLobAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the mobileApps property of the microsoft.graph.deviceAppManagement entity.
     * @param mobileAppId Unique identifier of the item
     * @returns a MobileAppItemRequestBuilder
     */
    public byMobileAppId(mobileAppId: string) : MobileAppItemRequestBuilder {
        if(!mobileAppId) throw new Error("mobileAppId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileApp%2Did"] = mobileAppId
        return new MobileAppItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MobileAppsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileApps{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the windowsMobileMSI objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/intune-apps-windowsmobilemsi-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MobileAppsRequestBuilderGetRequestConfiguration | undefined) : Promise<MobileAppCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileAppCollectionResponse>(requestInfo, createMobileAppCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new macOSMicrosoftEdgeApp object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileApp
     * @see {@link https://docs.microsoft.com/graph/api/intune-apps-macosmicrosoftedgeapp-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MobileApp | undefined, requestConfiguration?: MobileAppsRequestBuilderPostRequestConfiguration | undefined) : Promise<MobileApp | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileApp>(requestInfo, createMobileAppFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the windowsMobileMSI objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MobileAppsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new macOSMicrosoftEdgeApp object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MobileApp | undefined, requestConfiguration?: MobileAppsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMobileApp);
        return requestInfo;
    };
}
