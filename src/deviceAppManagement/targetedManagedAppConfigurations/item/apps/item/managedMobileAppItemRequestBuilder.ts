import {createManagedMobileAppFromDiscriminatorValue} from '../../../../../models/createManagedMobileAppFromDiscriminatorValue';
import {deserializeIntoManagedMobileApp} from '../../../../../models/deserializeIntoManagedMobileApp';
import {ManagedMobileApp} from '../../../../../models/managedMobileApp';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeManagedMobileApp} from '../../../../../models/serializeManagedMobileApp';
import {ManagedMobileAppItemRequestBuilderDeleteRequestConfiguration} from './managedMobileAppItemRequestBuilderDeleteRequestConfiguration';
import {ManagedMobileAppItemRequestBuilderGetRequestConfiguration} from './managedMobileAppItemRequestBuilderGetRequestConfiguration';
import {ManagedMobileAppItemRequestBuilderPatchRequestConfiguration} from './managedMobileAppItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the apps property of the microsoft.graph.targetedManagedAppConfiguration entity.
 */
export class ManagedMobileAppItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ManagedMobileAppItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration%2Did}/apps/{managedMobileApp%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property apps for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ManagedMobileAppItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * List of apps to which the policy is deployed.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedMobileApp
     */
    public get(requestConfiguration?: ManagedMobileAppItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedMobileApp | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedMobileApp>(requestInfo, createManagedMobileAppFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property apps in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedMobileApp
     */
    public patch(body: ManagedMobileApp | undefined, requestConfiguration?: ManagedMobileAppItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ManagedMobileApp | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedMobileApp>(requestInfo, createManagedMobileAppFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property apps for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ManagedMobileAppItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * List of apps to which the policy is deployed.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedMobileAppItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property apps in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ManagedMobileApp | undefined, requestConfiguration?: ManagedMobileAppItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeManagedMobileApp);
        return requestInfo;
    };
}
