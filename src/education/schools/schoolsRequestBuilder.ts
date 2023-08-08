import {EducationSchoolCollectionResponse} from '../../models/';
import {createEducationSchoolCollectionResponseFromDiscriminatorValue} from '../../models/createEducationSchoolCollectionResponseFromDiscriminatorValue';
import {createEducationSchoolFromDiscriminatorValue} from '../../models/createEducationSchoolFromDiscriminatorValue';
import {deserializeIntoEducationSchool} from '../../models/deserializeIntoEducationSchool';
import type {EducationSchool} from '../../models/educationSchool';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeEducationSchool} from '../../models/serializeEducationSchool';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {EducationSchoolItemRequestBuilder} from './item/educationSchoolItemRequestBuilder';
import {SchoolsRequestBuilderGetRequestConfiguration} from './schoolsRequestBuilderGetRequestConfiguration';
import {SchoolsRequestBuilderPostRequestConfiguration} from './schoolsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the schools property of the microsoft.graph.educationRoot entity.
 */
export class SchoolsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the schools property of the microsoft.graph.educationRoot entity.
     * @param educationSchoolId Unique identifier of the item
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
        super(pathParameters, requestAdapter, "{+baseurl}/education/schools{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the educationSchool objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSchoolCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationschool-list?view=graph-rest-1.0|Find more info here}
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
     * Create a new educationSchool object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSchool
     * @see {@link https://learn.microsoft.com/graph/api/educationschool-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EducationSchool, requestConfiguration?: SchoolsRequestBuilderPostRequestConfiguration | undefined) : Promise<EducationSchool | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationSchool>(requestInfo, createEducationSchoolFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the educationSchool objects and their properties.
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
     * Create a new educationSchool object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EducationSchool, requestConfiguration?: SchoolsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationSchool);
        return requestInfo;
    };
}
