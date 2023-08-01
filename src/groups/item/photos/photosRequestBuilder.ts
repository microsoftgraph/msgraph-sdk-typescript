import {ProfilePhotoCollectionResponse} from '../../../models/';
import {createProfilePhotoCollectionResponseFromDiscriminatorValue} from '../../../models/createProfilePhotoCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ProfilePhotoItemRequestBuilder} from './item/profilePhotoItemRequestBuilder';
import {PhotosRequestBuilderGetRequestConfiguration} from './photosRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the photos property of the microsoft.graph.group entity.
 */
export class PhotosRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the photos property of the microsoft.graph.group entity.
     * @param profilePhotoId Unique identifier of the item
     * @returns a ProfilePhotoItemRequestBuilder
     */
    public byProfilePhotoId(profilePhotoId: string) : ProfilePhotoItemRequestBuilder {
        if(!profilePhotoId) throw new Error("profilePhotoId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["profilePhoto%2Did"] = profilePhotoId
        return new ProfilePhotoItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PhotosRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/photos{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Retrieve a list of profilePhoto objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProfilePhotoCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/group-list-photos?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PhotosRequestBuilderGetRequestConfiguration | undefined) : Promise<ProfilePhotoCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ProfilePhotoCollectionResponse>(requestInfo, createProfilePhotoCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of profilePhoto objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PhotosRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
