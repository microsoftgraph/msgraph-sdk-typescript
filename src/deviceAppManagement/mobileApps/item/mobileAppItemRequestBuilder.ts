import {createMobileAppFromDiscriminatorValue} from '../../../models/createMobileAppFromDiscriminatorValue';
import {deserializeIntoMobileApp} from '../../../models/deserializeIntoMobileApp';
import type {MobileApp} from '../../../models/mobileApp';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeMobileApp} from '../../../models/serializeMobileApp';
import {AssignRequestBuilder} from './assign/assignRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {CategoriesRequestBuilder} from './categories/categoriesRequestBuilder';
import {GraphManagedMobileLobAppRequestBuilder} from './graphManagedMobileLobApp/graphManagedMobileLobAppRequestBuilder';
import {GraphMobileLobAppRequestBuilder} from './graphMobileLobApp/graphMobileLobAppRequestBuilder';
import {MobileAppItemRequestBuilderDeleteRequestConfiguration} from './mobileAppItemRequestBuilderDeleteRequestConfiguration';
import {MobileAppItemRequestBuilderGetRequestConfiguration} from './mobileAppItemRequestBuilderGetRequestConfiguration';
import {MobileAppItemRequestBuilderPatchRequestConfiguration} from './mobileAppItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mobileApps property of the microsoft.graph.deviceAppManagement entity.
 */
export class MobileAppItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the assign method.
     */
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.mobileApp entity.
     */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the categories property of the microsoft.graph.mobileApp entity.
     */
    public get categories(): CategoriesRequestBuilder {
        return new CategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
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
     * Instantiates a new MobileAppItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a macOSLobApp.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-macoslobapp-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: MobileAppItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the macOSMicrosoftEdgeApp object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileApp
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-macosmicrosoftedgeapp-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MobileAppItemRequestBuilderGetRequestConfiguration | undefined) : Promise<MobileApp | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileApp>(requestInfo, createMobileAppFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a windowsMobileMSI object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileApp
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-windowsmobilemsi-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: MobileApp, requestConfiguration?: MobileAppItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<MobileApp | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileApp>(requestInfo, createMobileAppFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a macOSLobApp.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: MobileAppItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the macOSMicrosoftEdgeApp object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MobileAppItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a windowsMobileMSI object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: MobileApp, requestConfiguration?: MobileAppItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMobileApp);
        return requestInfo;
    };
}
