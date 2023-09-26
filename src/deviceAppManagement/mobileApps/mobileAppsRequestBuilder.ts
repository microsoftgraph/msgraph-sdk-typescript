import { type MobileAppCollectionResponse } from '../../models/';
import { createMobileAppFromDiscriminatorValue, deserializeIntoMobileApp, serializeMobileApp, type MobileApp } from '../../models/mobileApp';
import { createMobileAppCollectionResponseFromDiscriminatorValue } from '../../models/mobileAppCollectionResponse';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { GraphAndroidLobAppRequestBuilder } from './graphAndroidLobApp/graphAndroidLobAppRequestBuilder';
import { GraphAndroidStoreAppRequestBuilder } from './graphAndroidStoreApp/graphAndroidStoreAppRequestBuilder';
import { GraphIosLobAppRequestBuilder } from './graphIosLobApp/graphIosLobAppRequestBuilder';
import { GraphIosStoreAppRequestBuilder } from './graphIosStoreApp/graphIosStoreAppRequestBuilder';
import { GraphIosVppAppRequestBuilder } from './graphIosVppApp/graphIosVppAppRequestBuilder';
import { GraphMacOSDmgAppRequestBuilder } from './graphMacOSDmgApp/graphMacOSDmgAppRequestBuilder';
import { GraphMacOSLobAppRequestBuilder } from './graphMacOSLobApp/graphMacOSLobAppRequestBuilder';
import { GraphManagedAndroidLobAppRequestBuilder } from './graphManagedAndroidLobApp/graphManagedAndroidLobAppRequestBuilder';
import { GraphManagedIOSLobAppRequestBuilder } from './graphManagedIOSLobApp/graphManagedIOSLobAppRequestBuilder';
import { GraphManagedMobileLobAppRequestBuilder } from './graphManagedMobileLobApp/graphManagedMobileLobAppRequestBuilder';
import { GraphMicrosoftStoreForBusinessAppRequestBuilder } from './graphMicrosoftStoreForBusinessApp/graphMicrosoftStoreForBusinessAppRequestBuilder';
import { GraphWin32LobAppRequestBuilder } from './graphWin32LobApp/graphWin32LobAppRequestBuilder';
import { GraphWindowsAppXRequestBuilder } from './graphWindowsAppX/graphWindowsAppXRequestBuilder';
import { GraphWindowsMobileMSIRequestBuilder } from './graphWindowsMobileMSI/graphWindowsMobileMSIRequestBuilder';
import { GraphWindowsUniversalAppXRequestBuilder } from './graphWindowsUniversalAppX/graphWindowsUniversalAppXRequestBuilder';
import { GraphWindowsWebAppRequestBuilder } from './graphWindowsWebApp/graphWindowsWebAppRequestBuilder';
import { MobileAppItemRequestBuilder } from './item/mobileAppItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface MobileAppsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface MobileAppsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: MobileAppsRequestBuilderGetQueryParameters;
}
export interface MobileAppsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
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
     * Casts the previous resource to androidLobApp.
     */
    public get graphAndroidLobApp(): GraphAndroidLobAppRequestBuilder {
        return new GraphAndroidLobAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to androidStoreApp.
     */
    public get graphAndroidStoreApp(): GraphAndroidStoreAppRequestBuilder {
        return new GraphAndroidStoreAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to iosLobApp.
     */
    public get graphIosLobApp(): GraphIosLobAppRequestBuilder {
        return new GraphIosLobAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to iosStoreApp.
     */
    public get graphIosStoreApp(): GraphIosStoreAppRequestBuilder {
        return new GraphIosStoreAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to iosVppApp.
     */
    public get graphIosVppApp(): GraphIosVppAppRequestBuilder {
        return new GraphIosVppAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to macOSDmgApp.
     */
    public get graphMacOSDmgApp(): GraphMacOSDmgAppRequestBuilder {
        return new GraphMacOSDmgAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to macOSLobApp.
     */
    public get graphMacOSLobApp(): GraphMacOSLobAppRequestBuilder {
        return new GraphMacOSLobAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to managedAndroidLobApp.
     */
    public get graphManagedAndroidLobApp(): GraphManagedAndroidLobAppRequestBuilder {
        return new GraphManagedAndroidLobAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to managedIOSLobApp.
     */
    public get graphManagedIOSLobApp(): GraphManagedIOSLobAppRequestBuilder {
        return new GraphManagedIOSLobAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to managedMobileLobApp.
     */
    public get graphManagedMobileLobApp(): GraphManagedMobileLobAppRequestBuilder {
        return new GraphManagedMobileLobAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to microsoftStoreForBusinessApp.
     */
    public get graphMicrosoftStoreForBusinessApp(): GraphMicrosoftStoreForBusinessAppRequestBuilder {
        return new GraphMicrosoftStoreForBusinessAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to win32LobApp.
     */
    public get graphWin32LobApp(): GraphWin32LobAppRequestBuilder {
        return new GraphWin32LobAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to windowsAppX.
     */
    public get graphWindowsAppX(): GraphWindowsAppXRequestBuilder {
        return new GraphWindowsAppXRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to windowsMobileMSI.
     */
    public get graphWindowsMobileMSI(): GraphWindowsMobileMSIRequestBuilder {
        return new GraphWindowsMobileMSIRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to windowsUniversalAppX.
     */
    public get graphWindowsUniversalAppX(): GraphWindowsUniversalAppXRequestBuilder {
        return new GraphWindowsUniversalAppXRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to windowsWebApp.
     */
    public get graphWindowsWebApp(): GraphWindowsWebAppRequestBuilder {
        return new GraphWindowsWebAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the mobileApps property of the microsoft.graph.deviceAppManagement entity.
     * @param mobileAppId The unique identifier of mobileApp
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
     * List properties and relationships of the windowsMicrosoftEdgeApp objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-windowsmicrosoftedgeapp-list?view=graph-rest-1.0|Find more info here}
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
     * Create a new windowsMobileMSI object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileApp
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-windowsmobilemsi-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MobileApp, requestConfiguration?: MobileAppsRequestBuilderPostRequestConfiguration | undefined) : Promise<MobileApp | undefined> {
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
     * List properties and relationships of the windowsMicrosoftEdgeApp objects.
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
     * Create a new windowsMobileMSI object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MobileApp, requestConfiguration?: MobileAppsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMobileApp);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a mobileAppsRequestBuilder
     */
    public withUrl(rawUrl: string) : MobileAppsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MobileAppsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
