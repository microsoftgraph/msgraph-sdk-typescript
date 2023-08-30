import {EducationRubricCollectionResponse} from '../../../models/';
import {createEducationRubricCollectionResponseFromDiscriminatorValue} from '../../../models/createEducationRubricCollectionResponseFromDiscriminatorValue';
import {createEducationRubricFromDiscriminatorValue} from '../../../models/createEducationRubricFromDiscriminatorValue';
import {deserializeIntoEducationRubric} from '../../../models/deserializeIntoEducationRubric';
import type {EducationRubric} from '../../../models/educationRubric';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeEducationRubric} from '../../../models/serializeEducationRubric';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EducationRubricItemRequestBuilder} from './item/educationRubricItemRequestBuilder';
import {RubricsRequestBuilderGetRequestConfiguration} from './rubricsRequestBuilderGetRequestConfiguration';
import {RubricsRequestBuilderPostRequestConfiguration} from './rubricsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the rubrics property of the microsoft.graph.educationUser entity.
 */
export class RubricsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the rubrics property of the microsoft.graph.educationUser entity.
     * @param educationRubricId The unique identifier of educationRubric
     * @returns a EducationRubricItemRequestBuilder
     */
    public byEducationRubricId(educationRubricId: string) : EducationRubricItemRequestBuilder {
        if(!educationRubricId) throw new Error("educationRubricId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationRubric%2Did"] = educationRubricId
        return new EducationRubricItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RubricsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/me/rubrics{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of educationRubric objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationRubricCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationuser-list-rubrics?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RubricsRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationRubricCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationRubricCollectionResponse>(requestInfo, createEducationRubricCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new educationRubric object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationRubric
     * @see {@link https://learn.microsoft.com/graph/api/educationuser-post-rubrics?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EducationRubric, requestConfiguration?: RubricsRequestBuilderPostRequestConfiguration | undefined) : Promise<EducationRubric | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationRubric>(requestInfo, createEducationRubricFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of educationRubric objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RubricsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new educationRubric object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EducationRubric, requestConfiguration?: RubricsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationRubric);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a rubricsRequestBuilder
     */
    public withUrl(rawUrl: string) : RubricsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RubricsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
