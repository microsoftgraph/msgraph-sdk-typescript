import {createVppTokenFromDiscriminatorValue} from '../../../models/createVppTokenFromDiscriminatorValue';
import {deserializeIntoVppToken} from '../../../models/deserializeIntoVppToken';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeVppToken} from '../../../models/serializeVppToken';
import type {VppToken} from '../../../models/vppToken';
import {SyncLicensesRequestBuilder} from './syncLicenses/syncLicensesRequestBuilder';
import {VppTokenItemRequestBuilderDeleteRequestConfiguration} from './vppTokenItemRequestBuilderDeleteRequestConfiguration';
import {VppTokenItemRequestBuilderGetRequestConfiguration} from './vppTokenItemRequestBuilderGetRequestConfiguration';
import {VppTokenItemRequestBuilderPatchRequestConfiguration} from './vppTokenItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the vppTokens property of the microsoft.graph.deviceAppManagement entity.
 */
export class VppTokenItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the syncLicenses method.
     */
    public get syncLicenses(): SyncLicensesRequestBuilder {
        return new SyncLicensesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new VppTokenItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/vppTokens/{vppToken%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a vppToken.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-vpptoken-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: VppTokenItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the vppToken object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VppToken
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-vpptoken-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: VppTokenItemRequestBuilderGetRequestConfiguration | undefined) : Promise<VppToken | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<VppToken>(requestInfo, createVppTokenFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a vppToken object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VppToken
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-vpptoken-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: VppToken, requestConfiguration?: VppTokenItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<VppToken | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<VppToken>(requestInfo, createVppTokenFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a vppToken.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: VppTokenItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the vppToken object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: VppTokenItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a vppToken object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: VppToken, requestConfiguration?: VppTokenItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeVppToken);
        return requestInfo;
    };
}
