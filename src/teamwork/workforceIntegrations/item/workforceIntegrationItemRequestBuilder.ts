import {createWorkforceIntegrationFromDiscriminatorValue} from '../../../models/createWorkforceIntegrationFromDiscriminatorValue';
import {deserializeIntoWorkforceIntegration} from '../../../models/deserializeIntoWorkforceIntegration';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeWorkforceIntegration} from '../../../models/serializeWorkforceIntegration';
import type {WorkforceIntegration} from '../../../models/workforceIntegration';
import {WorkforceIntegrationItemRequestBuilderDeleteRequestConfiguration} from './workforceIntegrationItemRequestBuilderDeleteRequestConfiguration';
import {WorkforceIntegrationItemRequestBuilderGetRequestConfiguration} from './workforceIntegrationItemRequestBuilderGetRequestConfiguration';
import {WorkforceIntegrationItemRequestBuilderPatchRequestConfiguration} from './workforceIntegrationItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the workforceIntegrations property of the microsoft.graph.teamwork entity.
 */
export class WorkforceIntegrationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new WorkforceIntegrationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teamwork/workforceIntegrations/{workforceIntegration%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an instance of a workforceIntegration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/workforceintegration-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: WorkforceIntegrationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a workforceIntegration object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkforceIntegration
     * @see {@link https://learn.microsoft.com/graph/api/workforceintegration-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WorkforceIntegrationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkforceIntegration | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkforceIntegration>(requestInfo, createWorkforceIntegrationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a workforceIntegration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkforceIntegration
     * @see {@link https://learn.microsoft.com/graph/api/workforceintegration-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: WorkforceIntegration, requestConfiguration?: WorkforceIntegrationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkforceIntegration | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkforceIntegration>(requestInfo, createWorkforceIntegrationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an instance of a workforceIntegration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WorkforceIntegrationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a workforceIntegration object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorkforceIntegrationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a workforceIntegration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkforceIntegration, requestConfiguration?: WorkforceIntegrationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkforceIntegration);
        return requestInfo;
    };
}
