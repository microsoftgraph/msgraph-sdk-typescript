import {AccessReviewScheduleDefinitionCollectionResponse} from '../../../models/';
import type {AccessReviewScheduleDefinition} from '../../../models/accessReviewScheduleDefinition';
import {createAccessReviewScheduleDefinitionCollectionResponseFromDiscriminatorValue} from '../../../models/createAccessReviewScheduleDefinitionCollectionResponseFromDiscriminatorValue';
import {createAccessReviewScheduleDefinitionFromDiscriminatorValue} from '../../../models/createAccessReviewScheduleDefinitionFromDiscriminatorValue';
import {deserializeIntoAccessReviewScheduleDefinition} from '../../../models/deserializeIntoAccessReviewScheduleDefinition';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeAccessReviewScheduleDefinition} from '../../../models/serializeAccessReviewScheduleDefinition';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DefinitionsRequestBuilderGetRequestConfiguration} from './definitionsRequestBuilderGetRequestConfiguration';
import {DefinitionsRequestBuilderPostRequestConfiguration} from './definitionsRequestBuilderPostRequestConfiguration';
import {FilterByCurrentUserWithOnRequestBuilder} from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import {AccessReviewScheduleDefinitionItemRequestBuilder} from './item/accessReviewScheduleDefinitionItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the definitions property of the microsoft.graph.accessReviewSet entity.
 */
export class DefinitionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the definitions property of the microsoft.graph.accessReviewSet entity.
     * @param accessReviewScheduleDefinitionId The unique identifier of accessReviewScheduleDefinition
     * @returns a AccessReviewScheduleDefinitionItemRequestBuilder
     */
    public byAccessReviewScheduleDefinitionId(accessReviewScheduleDefinitionId: string) : AccessReviewScheduleDefinitionItemRequestBuilder {
        if(!accessReviewScheduleDefinitionId) throw new Error("accessReviewScheduleDefinitionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessReviewScheduleDefinition%2Did"] = accessReviewScheduleDefinitionId
        return new AccessReviewScheduleDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DefinitionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/definitions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
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
     * Get a list of the accessReviewScheduleDefinition objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewScheduleDefinitionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewset-list-definitions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DefinitionsRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessReviewScheduleDefinitionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewScheduleDefinitionCollectionResponse>(requestInfo, createAccessReviewScheduleDefinitionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new accessReviewScheduleDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewScheduleDefinition
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewset-post-definitions?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AccessReviewScheduleDefinition, requestConfiguration?: DefinitionsRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessReviewScheduleDefinition | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewScheduleDefinition>(requestInfo, createAccessReviewScheduleDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the accessReviewScheduleDefinition objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DefinitionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new accessReviewScheduleDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessReviewScheduleDefinition, requestConfiguration?: DefinitionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessReviewScheduleDefinition);
        return requestInfo;
    };
}
