import {EducationClassCollectionResponse} from '../../models/';
import {createEducationClassCollectionResponseFromDiscriminatorValue} from '../../models/createEducationClassCollectionResponseFromDiscriminatorValue';
import {createEducationClassFromDiscriminatorValue} from '../../models/createEducationClassFromDiscriminatorValue';
import {deserializeIntoEducationClass} from '../../models/deserializeIntoEducationClass';
import type {EducationClass} from '../../models/educationClass';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeEducationClass} from '../../models/serializeEducationClass';
import {ClassesRequestBuilderGetRequestConfiguration} from './classesRequestBuilderGetRequestConfiguration';
import {ClassesRequestBuilderPostRequestConfiguration} from './classesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {EducationClassItemRequestBuilder} from './item/educationClassItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the classes property of the microsoft.graph.educationRoot entity.
 */
export class ClassesRequestBuilder extends BaseRequestBuilder {
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
     * Provides operations to manage the classes property of the microsoft.graph.educationRoot entity.
     * @param educationClassId The unique identifier of educationClass
     * @returns a EducationClassItemRequestBuilder
     */
    public byEducationClassId(educationClassId: string) : EducationClassItemRequestBuilder {
        if(!educationClassId) throw new Error("educationClassId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationClass%2Did"] = educationClassId
        return new EducationClassItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ClassesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the educationClass objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationClassCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ClassesRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationClassCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationClassCollectionResponse>(requestInfo, createEducationClassCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new educationClass object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationClass
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EducationClass, requestConfiguration?: ClassesRequestBuilderPostRequestConfiguration | undefined) : Promise<EducationClass | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationClass>(requestInfo, createEducationClassFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the educationClass objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ClassesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new educationClass object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EducationClass, requestConfiguration?: ClassesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationClass);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a classesRequestBuilder
     */
    public withUrl(rawUrl: string) : ClassesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ClassesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
