import {AccessReviewHistoryInstanceCollectionResponse} from '../../../../../models/';
import type {AccessReviewHistoryInstance} from '../../../../../models/accessReviewHistoryInstance';
import {createAccessReviewHistoryInstanceCollectionResponseFromDiscriminatorValue} from '../../../../../models/createAccessReviewHistoryInstanceCollectionResponseFromDiscriminatorValue';
import {createAccessReviewHistoryInstanceFromDiscriminatorValue} from '../../../../../models/createAccessReviewHistoryInstanceFromDiscriminatorValue';
import {deserializeIntoAccessReviewHistoryInstance} from '../../../../../models/deserializeIntoAccessReviewHistoryInstance';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeAccessReviewHistoryInstance} from '../../../../../models/serializeAccessReviewHistoryInstance';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {InstancesRequestBuilderGetRequestConfiguration} from './instancesRequestBuilderGetRequestConfiguration';
import {InstancesRequestBuilderPostRequestConfiguration} from './instancesRequestBuilderPostRequestConfiguration';
import {AccessReviewHistoryInstanceItemRequestBuilder} from './item/accessReviewHistoryInstanceItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the instances property of the microsoft.graph.accessReviewHistoryDefinition entity.
 */
export class InstancesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the instances property of the microsoft.graph.accessReviewHistoryDefinition entity.
     * @param accessReviewHistoryInstanceId The unique identifier of accessReviewHistoryInstance
     * @returns a AccessReviewHistoryInstanceItemRequestBuilder
     */
    public byAccessReviewHistoryInstanceId(accessReviewHistoryInstanceId: string) : AccessReviewHistoryInstanceItemRequestBuilder {
        if(!accessReviewHistoryInstanceId) throw new Error("accessReviewHistoryInstanceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessReviewHistoryInstance%2Did"] = accessReviewHistoryInstanceId
        return new AccessReviewHistoryInstanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new InstancesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition%2Did}/instances{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the instances of an access review history definition created in the last 30 days.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewHistoryInstanceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewhistorydefinition-list-instances?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: InstancesRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessReviewHistoryInstanceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewHistoryInstanceCollectionResponse>(requestInfo, createAccessReviewHistoryInstanceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to instances for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewHistoryInstance
     */
    public post(body: AccessReviewHistoryInstance, requestConfiguration?: InstancesRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessReviewHistoryInstance | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewHistoryInstance>(requestInfo, createAccessReviewHistoryInstanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the instances of an access review history definition created in the last 30 days.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: InstancesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to instances for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessReviewHistoryInstance, requestConfiguration?: InstancesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessReviewHistoryInstance);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a instancesRequestBuilder
     */
    public withUrl(rawUrl: string) : InstancesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new InstancesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
