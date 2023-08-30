import {SoftwareOathAuthenticationMethodCollectionResponse} from '../../../models/';
import {createSoftwareOathAuthenticationMethodCollectionResponseFromDiscriminatorValue} from '../../../models/createSoftwareOathAuthenticationMethodCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SoftwareOathAuthenticationMethodItemRequestBuilder} from './item/softwareOathAuthenticationMethodItemRequestBuilder';
import {SoftwareOathMethodsRequestBuilderGetRequestConfiguration} from './softwareOathMethodsRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the softwareOathMethods property of the microsoft.graph.authentication entity.
 */
export class SoftwareOathMethodsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the softwareOathMethods property of the microsoft.graph.authentication entity.
     * @param softwareOathAuthenticationMethodId The unique identifier of softwareOathAuthenticationMethod
     * @returns a SoftwareOathAuthenticationMethodItemRequestBuilder
     */
    public bySoftwareOathAuthenticationMethodId(softwareOathAuthenticationMethodId: string) : SoftwareOathAuthenticationMethodItemRequestBuilder {
        if(!softwareOathAuthenticationMethodId) throw new Error("softwareOathAuthenticationMethodId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["softwareOathAuthenticationMethod%2Did"] = softwareOathAuthenticationMethodId
        return new SoftwareOathAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SoftwareOathMethodsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/authentication/softwareOathMethods{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of a user's software OATH token authentication method objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SoftwareOathAuthenticationMethodCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/authentication-list-softwareoathmethods?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SoftwareOathMethodsRequestBuilderGetRequestConfiguration | undefined) : Promise<SoftwareOathAuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SoftwareOathAuthenticationMethodCollectionResponse>(requestInfo, createSoftwareOathAuthenticationMethodCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of a user's software OATH token authentication method objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SoftwareOathMethodsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a softwareOathMethodsRequestBuilder
     */
    public withUrl(rawUrl: string) : SoftwareOathMethodsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SoftwareOathMethodsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
