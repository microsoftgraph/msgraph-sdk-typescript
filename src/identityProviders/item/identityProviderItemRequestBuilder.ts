import { createIdentityProviderFromDiscriminatorValue } from '../../models/createIdentityProviderFromDiscriminatorValue';
import { deserializeIntoIdentityProvider } from '../../models/deserializeIntoIdentityProvider';
import { type IdentityProvider } from '../../models/identityProvider';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeIdentityProvider } from '../../models/serializeIdentityProvider';
import { type IdentityProviderItemRequestBuilderDeleteRequestConfiguration } from './identityProviderItemRequestBuilderDeleteRequestConfiguration';
import { type IdentityProviderItemRequestBuilderGetRequestConfiguration } from './identityProviderItemRequestBuilderGetRequestConfiguration';
import { type IdentityProviderItemRequestBuilderPatchRequestConfiguration } from './identityProviderItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of identityProvider entities.
 */
export class IdentityProviderItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new IdentityProviderItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityProviders/{identityProvider%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an existing identityProvider.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     * @see {@link https://learn.microsoft.com/graph/api/identityprovider-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: IdentityProviderItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties of an existing identityProvider.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityProvider
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     * @see {@link https://learn.microsoft.com/graph/api/identityprovider-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IdentityProviderItemRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityProvider | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityProvider>(requestInfo, createIdentityProviderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update properties in an existing identityProvider.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityProvider
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     * @see {@link https://learn.microsoft.com/graph/api/identityprovider-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: IdentityProvider, requestConfiguration?: IdentityProviderItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<IdentityProvider | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityProvider>(requestInfo, createIdentityProviderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an existing identityProvider.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     */
    public toDeleteRequestInformation(requestConfiguration?: IdentityProviderItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties of an existing identityProvider.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     */
    public toGetRequestInformation(requestConfiguration?: IdentityProviderItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update properties in an existing identityProvider.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     */
    public toPatchRequestInformation(body: IdentityProvider, requestConfiguration?: IdentityProviderItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeIdentityProvider);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a IdentityProviderItemRequestBuilder
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     */
    public withUrl(rawUrl: string) : IdentityProviderItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new IdentityProviderItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
