import {WorkforceIntegrationCollectionResponse} from '../../models/';
import {createWorkforceIntegrationCollectionResponseFromDiscriminatorValue} from '../../models/createWorkforceIntegrationCollectionResponseFromDiscriminatorValue';
import {createWorkforceIntegrationFromDiscriminatorValue} from '../../models/createWorkforceIntegrationFromDiscriminatorValue';
import {deserializeIntoWorkforceIntegration} from '../../models/deserializeIntoWorkforceIntegration';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeWorkforceIntegration} from '../../models/serializeWorkforceIntegration';
import type {WorkforceIntegration} from '../../models/workforceIntegration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WorkforceIntegrationItemRequestBuilder} from './item/workforceIntegrationItemRequestBuilder';
import {WorkforceIntegrationsRequestBuilderGetRequestConfiguration} from './workforceIntegrationsRequestBuilderGetRequestConfiguration';
import {WorkforceIntegrationsRequestBuilderPostRequestConfiguration} from './workforceIntegrationsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the workforceIntegrations property of the microsoft.graph.teamwork entity.
 */
export class WorkforceIntegrationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the workforceIntegrations property of the microsoft.graph.teamwork entity.
     * @param workforceIntegrationId The unique identifier of workforceIntegration
     * @returns a WorkforceIntegrationItemRequestBuilder
     */
    public byWorkforceIntegrationId(workforceIntegrationId: string) : WorkforceIntegrationItemRequestBuilder {
        if(!workforceIntegrationId) throw new Error("workforceIntegrationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workforceIntegration%2Did"] = workforceIntegrationId
        return new WorkforceIntegrationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WorkforceIntegrationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teamwork/workforceIntegrations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of workforceIntegration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkforceIntegrationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/workforceintegration-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WorkforceIntegrationsRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkforceIntegrationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkforceIntegrationCollectionResponse>(requestInfo, createWorkforceIntegrationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new workforceIntegration object.You can set up which entities you want to receive Shifts synchronous change notifications on and set entities to configure filtering by WFM rules eligibility for, including swap requests.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkforceIntegration
     * @see {@link https://learn.microsoft.com/graph/api/workforceintegration-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: WorkforceIntegration, requestConfiguration?: WorkforceIntegrationsRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkforceIntegration | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkforceIntegration>(requestInfo, createWorkforceIntegrationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of workforceIntegration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorkforceIntegrationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new workforceIntegration object.You can set up which entities you want to receive Shifts synchronous change notifications on and set entities to configure filtering by WFM rules eligibility for, including swap requests.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WorkforceIntegration, requestConfiguration?: WorkforceIntegrationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkforceIntegration);
        return requestInfo;
    };
}
