import {SecureScoreControlProfileCollectionResponse} from '../../models/';
import {createSecureScoreControlProfileCollectionResponseFromDiscriminatorValue} from '../../models/createSecureScoreControlProfileCollectionResponseFromDiscriminatorValue';
import {createSecureScoreControlProfileFromDiscriminatorValue} from '../../models/createSecureScoreControlProfileFromDiscriminatorValue';
import {deserializeIntoSecureScoreControlProfile} from '../../models/deserializeIntoSecureScoreControlProfile';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {SecureScoreControlProfile} from '../../models/secureScoreControlProfile';
import {serializeSecureScoreControlProfile} from '../../models/serializeSecureScoreControlProfile';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SecureScoreControlProfileItemRequestBuilder} from './item/secureScoreControlProfileItemRequestBuilder';
import {SecureScoreControlProfilesRequestBuilderGetRequestConfiguration} from './secureScoreControlProfilesRequestBuilderGetRequestConfiguration';
import {SecureScoreControlProfilesRequestBuilderPostRequestConfiguration} from './secureScoreControlProfilesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the secureScoreControlProfiles property of the microsoft.graph.security entity.
 */
export class SecureScoreControlProfilesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the secureScoreControlProfiles property of the microsoft.graph.security entity.
     * @param secureScoreControlProfileId Unique identifier of the item
     * @returns a SecureScoreControlProfileItemRequestBuilder
     */
    public bySecureScoreControlProfileId(secureScoreControlProfileId: string) : SecureScoreControlProfileItemRequestBuilder {
        if(!secureScoreControlProfileId) throw new Error("secureScoreControlProfileId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["secureScoreControlProfile%2Did"] = secureScoreControlProfileId
        return new SecureScoreControlProfileItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SecureScoreControlProfilesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/secureScoreControlProfiles{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the properties and relationships of a secureScoreControlProfiles object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SecureScoreControlProfileCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/security-list-securescorecontrolprofiles?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SecureScoreControlProfilesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SecureScoreControlProfileCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<SecureScoreControlProfileCollectionResponse>(requestInfo, createSecureScoreControlProfileCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to secureScoreControlProfiles for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SecureScoreControlProfile
     */
    public post(body: SecureScoreControlProfile | undefined, requestConfiguration?: SecureScoreControlProfilesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SecureScoreControlProfile | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<SecureScoreControlProfile>(requestInfo, createSecureScoreControlProfileFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve the properties and relationships of a secureScoreControlProfiles object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SecureScoreControlProfilesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to secureScoreControlProfiles for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SecureScoreControlProfile | undefined, requestConfiguration?: SecureScoreControlProfilesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSecureScoreControlProfile);
        return requestInfo;
    };
}
