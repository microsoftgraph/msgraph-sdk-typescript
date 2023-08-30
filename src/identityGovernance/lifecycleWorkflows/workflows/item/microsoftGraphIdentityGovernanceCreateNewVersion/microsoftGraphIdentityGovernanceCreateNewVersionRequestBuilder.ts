import {createWorkflowFromDiscriminatorValue} from '../../../../../models/identityGovernance/createWorkflowFromDiscriminatorValue';
import {deserializeIntoWorkflow} from '../../../../../models/identityGovernance/deserializeIntoWorkflow';
import {serializeWorkflow} from '../../../../../models/identityGovernance/serializeWorkflow';
import type {Workflow} from '../../../../../models/identityGovernance/workflow';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import type {CreateNewVersionPostRequestBody} from './createNewVersionPostRequestBody';
import {deserializeIntoCreateNewVersionPostRequestBody} from './deserializeIntoCreateNewVersionPostRequestBody';
import {MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilderPostRequestConfiguration} from './microsoftGraphIdentityGovernanceCreateNewVersionRequestBuilderPostRequestConfiguration';
import {serializeCreateNewVersionPostRequestBody} from './serializeCreateNewVersionPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the createNewVersion method.
 */
export class MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/workflows/{workflow%2Did}/microsoft.graph.identityGovernance.createNewVersion");
    };
    /**
     * Create a new version of the workflow object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Workflow
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-workflow-createnewversion?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CreateNewVersionPostRequestBody, requestConfiguration?: MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilderPostRequestConfiguration | undefined) : Promise<Workflow | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Workflow>(requestInfo, createWorkflowFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new version of the workflow object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CreateNewVersionPostRequestBody, requestConfiguration?: MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCreateNewVersionPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a microsoftGraphIdentityGovernanceCreateNewVersionRequestBuilder
     */
    public withUrl(rawUrl: string) : MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilder(rawUrl, this.requestAdapter);
    };
}
