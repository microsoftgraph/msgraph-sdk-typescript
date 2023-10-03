import { type EducationUserCollectionResponse } from '../../../../models/';
import { createEducationUserCollectionResponseFromDiscriminatorValue } from '../../../../models/educationUserCollectionResponse';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { EducationUserItemRequestBuilder } from './item/educationUserItemRequestBuilder';
import { RefRequestBuilder } from './ref/refRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TeachersRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface TeachersRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: TeachersRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the teachers property of the microsoft.graph.educationClass entity.
 */
export class TeachersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of educationRoot entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.classes.item.teachers.item collection
     * @param educationUserId Unique identifier of the item
     * @returns a EducationUserItemRequestBuilder
     */
    public byEducationUserId(educationUserId: string) : EducationUserItemRequestBuilder {
        if(!educationUserId) throw new Error("educationUserId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationUser%2Did"] = educationUserId
        return new EducationUserItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TeachersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes/{educationClass%2Did}/teachers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of teachers for a class. Delegated tokens must be members of the class to get the teacher list. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationUserCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-list-teachers?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TeachersRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationUserCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationUserCollectionResponse>(requestInfo, createEducationUserCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of teachers for a class. Delegated tokens must be members of the class to get the teacher list. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TeachersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a teachersRequestBuilder
     */
    public withUrl(rawUrl: string) : TeachersRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TeachersRequestBuilder(rawUrl, this.requestAdapter);
    };
}
