import { type SecureScoreControlProfileCollectionResponse } from '../../models/';
import { createSecureScoreControlProfileCollectionResponseFromDiscriminatorValue } from '../../models/createSecureScoreControlProfileCollectionResponseFromDiscriminatorValue';
import { createSecureScoreControlProfileFromDiscriminatorValue } from '../../models/createSecureScoreControlProfileFromDiscriminatorValue';
import { deserializeIntoSecureScoreControlProfile } from '../../models/deserializeIntoSecureScoreControlProfile';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type SecureScoreControlProfile } from '../../models/secureScoreControlProfile';
import { serializeSecureScoreControlProfile } from '../../models/serializeSecureScoreControlProfile';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { SecureScoreControlProfileItemRequestBuilder } from './item/secureScoreControlProfileItemRequestBuilder';
import { type SecureScoreControlProfilesRequestBuilderGetRequestConfiguration } from './secureScoreControlProfilesRequestBuilderGetRequestConfiguration';
import { type SecureScoreControlProfilesRequestBuilderPostRequestConfiguration } from './secureScoreControlProfilesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

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
     * @param secureScoreControlProfileId The unique identifier of secureScoreControlProfile
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
     * @returns a Promise of SecureScoreControlProfileCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-list-securescorecontrolprofiles?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SecureScoreControlProfilesRequestBuilderGetRequestConfiguration | undefined) : Promise<SecureScoreControlProfileCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SecureScoreControlProfileCollectionResponse>(requestInfo, createSecureScoreControlProfileCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to secureScoreControlProfiles for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SecureScoreControlProfile
     */
    public post(body: SecureScoreControlProfile, requestConfiguration?: SecureScoreControlProfilesRequestBuilderPostRequestConfiguration | undefined) : Promise<SecureScoreControlProfile | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SecureScoreControlProfile>(requestInfo, createSecureScoreControlProfileFromDiscriminatorValue, errorMapping);
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
    public toPostRequestInformation(body: SecureScoreControlProfile, requestConfiguration?: SecureScoreControlProfilesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSecureScoreControlProfile);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a secureScoreControlProfilesRequestBuilder
     */
    public withUrl(rawUrl: string) : SecureScoreControlProfilesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SecureScoreControlProfilesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
