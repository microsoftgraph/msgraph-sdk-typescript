import {createDefaultManagedAppProtectionFromDiscriminatorValue} from '../../../models/createDefaultManagedAppProtectionFromDiscriminatorValue';
import type {DefaultManagedAppProtection} from '../../../models/defaultManagedAppProtection';
import {deserializeIntoDefaultManagedAppProtection} from '../../../models/deserializeIntoDefaultManagedAppProtection';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeDefaultManagedAppProtection} from '../../../models/serializeDefaultManagedAppProtection';
import {AppsRequestBuilder} from './apps/appsRequestBuilder';
import {DefaultManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration} from './defaultManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration';
import {DefaultManagedAppProtectionItemRequestBuilderGetRequestConfiguration} from './defaultManagedAppProtectionItemRequestBuilderGetRequestConfiguration';
import {DefaultManagedAppProtectionItemRequestBuilderPatchRequestConfiguration} from './defaultManagedAppProtectionItemRequestBuilderPatchRequestConfiguration';
import {DeploymentSummaryRequestBuilder} from './deploymentSummary/deploymentSummaryRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the defaultManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
 */
export class DefaultManagedAppProtectionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the apps property of the microsoft.graph.defaultManagedAppProtection entity.
     */
    public get apps(): AppsRequestBuilder {
        return new AppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deploymentSummary property of the microsoft.graph.defaultManagedAppProtection entity.
     */
    public get deploymentSummary(): DeploymentSummaryRequestBuilder {
        return new DeploymentSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DefaultManagedAppProtectionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a defaultManagedAppProtection.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-defaultmanagedappprotection-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DefaultManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the defaultManagedAppProtection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DefaultManagedAppProtection
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-defaultmanagedappprotection-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DefaultManagedAppProtectionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DefaultManagedAppProtection | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DefaultManagedAppProtection>(requestInfo, createDefaultManagedAppProtectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a defaultManagedAppProtection object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DefaultManagedAppProtection
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-defaultmanagedappprotection-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DefaultManagedAppProtection, requestConfiguration?: DefaultManagedAppProtectionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DefaultManagedAppProtection | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DefaultManagedAppProtection>(requestInfo, createDefaultManagedAppProtectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a defaultManagedAppProtection.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DefaultManagedAppProtectionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the defaultManagedAppProtection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DefaultManagedAppProtectionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a defaultManagedAppProtection object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DefaultManagedAppProtection, requestConfiguration?: DefaultManagedAppProtectionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDefaultManagedAppProtection);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DefaultManagedAppProtectionItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DefaultManagedAppProtectionItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DefaultManagedAppProtectionItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
