import { type EducationSchoolCollectionResponse } from '../../../models/';
import { createEducationSchoolCollectionResponseFromDiscriminatorValue } from '../../../models/educationSchoolCollectionResponse';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { EducationSchoolItemRequestBuilder } from './item/educationSchoolItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface SchoolsRequestBuilderGetQueryParameters {
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
export interface SchoolsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SchoolsRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the schools property of the microsoft.graph.educationUser entity.
 */
export class SchoolsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the schools property of the microsoft.graph.educationUser entity.
     * @param educationSchoolId The unique identifier of educationSchool
     * @returns a EducationSchoolItemRequestBuilder
     */
    public byEducationSchoolId(educationSchoolId: string) : EducationSchoolItemRequestBuilder {
        if(!educationSchoolId) throw new Error("educationSchoolId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSchool%2Did"] = educationSchoolId
        return new EducationSchoolItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SchoolsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/me/schools{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of schools for a user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSchoolCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationuser-list-schools?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SchoolsRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationSchoolCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationSchoolCollectionResponse>(requestInfo, createEducationSchoolCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of schools for a user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SchoolsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a schoolsRequestBuilder
     */
    public withUrl(rawUrl: string) : SchoolsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SchoolsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
