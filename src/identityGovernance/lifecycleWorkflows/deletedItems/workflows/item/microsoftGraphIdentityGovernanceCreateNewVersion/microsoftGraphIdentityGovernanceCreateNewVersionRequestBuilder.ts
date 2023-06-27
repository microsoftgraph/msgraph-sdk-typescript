import {createWorkflowFromDiscriminatorValue} from '../../../../../../models/identityGovernance/createWorkflowFromDiscriminatorValue';
import {deserializeIntoWorkflow} from '../../../../../../models/identityGovernance/deserializeIntoWorkflow';
import {serializeWorkflow} from '../../../../../../models/identityGovernance/serializeWorkflow';
import {Workflow} from '../../../../../../models/identityGovernance/workflow';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {CreateNewVersionPostRequestBody} from './createNewVersionPostRequestBody';
import {deserializeIntoCreateNewVersionPostRequestBody} from './deserializeIntoCreateNewVersionPostRequestBody';
import {MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilderPostRequestConfiguration} from './microsoftGraphIdentityGovernanceCreateNewVersionRequestBuilderPostRequestConfiguration';
import {serializeCreateNewVersionPostRequestBody} from './serializeCreateNewVersionPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

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
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow%2Did}/microsoft.graph.identityGovernance.createNewVersion");
    };
    /**
     * Create a new version of the workflow object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Workflow
     * @see {@link https://docs.microsoft.com/graph/api/identitygovernance-workflow-createnewversion?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CreateNewVersionPostRequestBody | undefined, requestConfiguration?: MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Workflow | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<Workflow>(requestInfo, createWorkflowFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new version of the workflow object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CreateNewVersionPostRequestBody | undefined, requestConfiguration?: MicrosoftGraphIdentityGovernanceCreateNewVersionRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCreateNewVersionPostRequestBody);
        return requestInfo;
    };
}
