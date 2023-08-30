import {AccessPackageQuestionCollectionResponse} from '../../../../../models/';
import type {AccessPackageQuestion} from '../../../../../models/accessPackageQuestion';
import {createAccessPackageQuestionCollectionResponseFromDiscriminatorValue} from '../../../../../models/createAccessPackageQuestionCollectionResponseFromDiscriminatorValue';
import {createAccessPackageQuestionFromDiscriminatorValue} from '../../../../../models/createAccessPackageQuestionFromDiscriminatorValue';
import {deserializeIntoAccessPackageQuestion} from '../../../../../models/deserializeIntoAccessPackageQuestion';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeAccessPackageQuestion} from '../../../../../models/serializeAccessPackageQuestion';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AccessPackageQuestionItemRequestBuilder} from './item/accessPackageQuestionItemRequestBuilder';
import {QuestionsRequestBuilderGetRequestConfiguration} from './questionsRequestBuilderGetRequestConfiguration';
import {QuestionsRequestBuilderPostRequestConfiguration} from './questionsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the questions property of the microsoft.graph.accessPackageAssignmentPolicy entity.
 */
export class QuestionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the questions property of the microsoft.graph.accessPackageAssignmentPolicy entity.
     * @param accessPackageQuestionId The unique identifier of accessPackageQuestion
     * @returns a AccessPackageQuestionItemRequestBuilder
     */
    public byAccessPackageQuestionId(accessPackageQuestionId: string) : AccessPackageQuestionItemRequestBuilder {
        if(!accessPackageQuestionId) throw new Error("accessPackageQuestionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageQuestion%2Did"] = accessPackageQuestionId
        return new AccessPackageQuestionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new QuestionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy%2Did}/questions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Questions that are posed to the  requestor.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageQuestionCollectionResponse
     */
    public get(requestConfiguration?: QuestionsRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageQuestionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageQuestionCollectionResponse>(requestInfo, createAccessPackageQuestionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to questions for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageQuestion
     */
    public post(body: AccessPackageQuestion, requestConfiguration?: QuestionsRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessPackageQuestion | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageQuestion>(requestInfo, createAccessPackageQuestionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Questions that are posed to the  requestor.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: QuestionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to questions for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessPackageQuestion, requestConfiguration?: QuestionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessPackageQuestion);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a questionsRequestBuilder
     */
    public withUrl(rawUrl: string) : QuestionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new QuestionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
