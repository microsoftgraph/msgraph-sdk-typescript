import {PersonCollectionResponse} from '../../models/';
import {createPersonCollectionResponseFromDiscriminatorValue} from '../../models/createPersonCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PersonItemRequestBuilder} from './item/personItemRequestBuilder';
import {PeopleRequestBuilderGetRequestConfiguration} from './peopleRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the people property of the microsoft.graph.user entity.
 */
export class PeopleRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the people property of the microsoft.graph.user entity.
     * @param personId Unique identifier of the item
     * @returns a PersonItemRequestBuilder
     */
    public byPersonId(personId: string) : PersonItemRequestBuilder {
        if(!personId) throw new Error("personId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["person%2Did"] = personId
        return new PersonItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PeopleRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/people{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * People that are relevant to the user. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PersonCollectionResponse
     */
    public get(requestConfiguration?: PeopleRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PersonCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PersonCollectionResponse>(requestInfo, createPersonCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * People that are relevant to the user. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PeopleRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
