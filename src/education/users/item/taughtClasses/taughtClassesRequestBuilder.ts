import {EducationClassCollectionResponse} from '../../../../models/';
import {createEducationClassCollectionResponseFromDiscriminatorValue} from '../../../../models/createEducationClassCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EducationClassItemRequestBuilder} from './item/educationClassItemRequestBuilder';
import {TaughtClassesRequestBuilderGetRequestConfiguration} from './taughtClassesRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the taughtClasses property of the microsoft.graph.educationUser entity.
 */
export class TaughtClassesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the taughtClasses property of the microsoft.graph.educationUser entity.
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
     * Instantiates a new TaughtClassesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/users/{educationUser%2Did}/taughtClasses{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the educationClass resources owned by an educationUser.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationClassCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationuser-list-taughtclasses?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TaughtClassesRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationClassCollectionResponse | undefined> {
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
     * Get the educationClass resources owned by an educationUser.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TaughtClassesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a taughtClassesRequestBuilder
     */
    public withUrl(rawUrl: string) : TaughtClassesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TaughtClassesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
