import {EducationUserCollectionResponse} from '../../../../models/';
import {createEducationUserCollectionResponseFromDiscriminatorValue} from '../../../../models/createEducationUserCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EducationUserItemRequestBuilder} from './item/educationUserItemRequestBuilder';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {UsersRequestBuilderGetRequestConfiguration} from './usersRequestBuilderGetRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the users property of the microsoft.graph.educationSchool entity.
 */
export class UsersRequestBuilder extends BaseRequestBuilder {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.schools.item.users.item collection
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
     * Instantiates a new UsersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/schools/{educationSchool%2Did}/users{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the educationUser resources associated with an educationSchool.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationUserCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationschool-list-users?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UsersRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationUserCollectionResponse | undefined> {
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
     * Get the educationUser resources associated with an educationSchool.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UsersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
