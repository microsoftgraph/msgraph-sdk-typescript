import {Fido2AuthenticationMethod} from '../../../../../models/';
import {createFido2AuthenticationMethodFromDiscriminatorValue} from '../../../../../models/createFido2AuthenticationMethodFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {Fido2AuthenticationMethodItemRequestBuilderDeleteRequestConfiguration} from './fido2AuthenticationMethodItemRequestBuilderDeleteRequestConfiguration';
import {Fido2AuthenticationMethodItemRequestBuilderGetRequestConfiguration} from './fido2AuthenticationMethodItemRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the fido2Methods property of the microsoft.graph.authentication entity.
 */
export class Fido2AuthenticationMethodItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new Fido2AuthenticationMethodItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/authentication/fido2Methods/{fido2AuthenticationMethod%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a user's FIDO2 Security Key Authentication Method object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/fido2authenticationmethod-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: Fido2AuthenticationMethodItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve a user's single FIDO2 Security Key Authentication Method object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Fido2AuthenticationMethod
     * @see {@link https://learn.microsoft.com/graph/api/fido2authenticationmethod-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: Fido2AuthenticationMethodItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Fido2AuthenticationMethod | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Fido2AuthenticationMethod>(requestInfo, createFido2AuthenticationMethodFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a user's FIDO2 Security Key Authentication Method object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: Fido2AuthenticationMethodItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieve a user's single FIDO2 Security Key Authentication Method object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: Fido2AuthenticationMethodItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a Fido2AuthenticationMethodItemRequestBuilder
     */
    public withUrl(rawUrl: string) : Fido2AuthenticationMethodItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new Fido2AuthenticationMethodItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
