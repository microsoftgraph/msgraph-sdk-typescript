import {AccessReviewStageCollectionResponse} from '../../../../../../../models/';
import {AccessReviewStage} from '../../../../../../../models/accessReviewStage';
import {createAccessReviewStageCollectionResponseFromDiscriminatorValue} from '../../../../../../../models/createAccessReviewStageCollectionResponseFromDiscriminatorValue';
import {createAccessReviewStageFromDiscriminatorValue} from '../../../../../../../models/createAccessReviewStageFromDiscriminatorValue';
import {deserializeIntoAccessReviewStage} from '../../../../../../../models/deserializeIntoAccessReviewStage';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeAccessReviewStage} from '../../../../../../../models/serializeAccessReviewStage';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FilterByCurrentUserWithOnRequestBuilder} from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import {AccessReviewStageItemRequestBuilder} from './item/accessReviewStageItemRequestBuilder';
import {StagesRequestBuilderGetRequestConfiguration} from './stagesRequestBuilderGetRequestConfiguration';
import {StagesRequestBuilderPostRequestConfiguration} from './stagesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the stages property of the microsoft.graph.accessReviewInstance entity.
 */
export class StagesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the stages property of the microsoft.graph.accessReviewInstance entity.
     * @param accessReviewStageId Unique identifier of the item
     * @returns a AccessReviewStageItemRequestBuilder
     */
    public byAccessReviewStageId(accessReviewStageId: string) : AccessReviewStageItemRequestBuilder {
        if(!accessReviewStageId) throw new Error("accessReviewStageId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessReviewStage%2Did"] = accessReviewStageId
        return new AccessReviewStageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new StagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/stages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns a filterByCurrentUserWithOnRequestBuilder
     */
    public filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder {
        if(!on) throw new Error("on cannot be undefined");
        return new FilterByCurrentUserWithOnRequestBuilder(this.pathParameters, this.requestAdapter, on);
    };
    /**
     * Retrieve the stages in a multi-stage access review instance.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewStageCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/accessreviewinstance-list-stages?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: StagesRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessReviewStageCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewStageCollectionResponse>(requestInfo, createAccessReviewStageCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to stages for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewStage
     */
    public post(body: AccessReviewStage | undefined, requestConfiguration?: StagesRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessReviewStage | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewStage>(requestInfo, createAccessReviewStageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the stages in a multi-stage access review instance.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: StagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to stages for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessReviewStage | undefined, requestConfiguration?: StagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessReviewStage);
        return requestInfo;
    };
}
