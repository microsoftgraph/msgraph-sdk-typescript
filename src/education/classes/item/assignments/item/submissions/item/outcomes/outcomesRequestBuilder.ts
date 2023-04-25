import {EducationOutcome, EducationOutcomeCollectionResponse} from '../../../../../../../../models/';
import {createEducationOutcomeCollectionResponseFromDiscriminatorValue} from '../../../../../../../../models/createEducationOutcomeCollectionResponseFromDiscriminatorValue';
import {createEducationOutcomeFromDiscriminatorValue} from '../../../../../../../../models/createEducationOutcomeFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EducationOutcomeItemRequestBuilder} from './item/educationOutcomeItemRequestBuilder';
import {OutcomesRequestBuilderGetRequestConfiguration} from './outcomesRequestBuilderGetRequestConfiguration';
import {OutcomesRequestBuilderPostRequestConfiguration} from './outcomesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the outcomes property of the microsoft.graph.educationSubmission entity.
 */
export class OutcomesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the outcomes property of the microsoft.graph.educationSubmission entity.
     * @param educationOutcomeId Unique identifier of the item
     * @returns a EducationOutcomeItemRequestBuilder
     */
    public byEducationOutcomeId(educationOutcomeId: string) : EducationOutcomeItemRequestBuilder {
        if(!educationOutcomeId) throw new Error("educationOutcomeId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationOutcome%2Did"] = educationOutcomeId
        return new EducationOutcomeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OutcomesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes/{educationClass%2Did}/assignments/{educationAssignment%2Did}/submissions/{educationSubmission%2Did}/outcomes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get outcomes from education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationOutcomeCollectionResponse
     */
    public get(requestConfiguration?: OutcomesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationOutcomeCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationOutcomeCollectionResponse>(requestInfo, createEducationOutcomeCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to outcomes for education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationOutcome
     */
    public post(body: EducationOutcome | undefined, requestConfiguration?: OutcomesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationOutcome | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationOutcome>(requestInfo, createEducationOutcomeFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get outcomes from education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OutcomesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to outcomes for education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EducationOutcome | undefined, requestConfiguration?: OutcomesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
