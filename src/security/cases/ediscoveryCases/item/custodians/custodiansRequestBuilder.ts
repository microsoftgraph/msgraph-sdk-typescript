import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { type EdiscoveryCustodianCollectionResponse } from '../../../../../models/security/';
import { createEdiscoveryCustodianFromDiscriminatorValue, deserializeIntoEdiscoveryCustodian, serializeEdiscoveryCustodian, type EdiscoveryCustodian } from '../../../../../models/security/ediscoveryCustodian';
import { createEdiscoveryCustodianCollectionResponseFromDiscriminatorValue } from '../../../../../models/security/ediscoveryCustodianCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { EdiscoveryCustodianItemRequestBuilder } from './item/ediscoveryCustodianItemRequestBuilder';
import { MicrosoftGraphSecurityApplyHoldRequestBuilder } from './microsoftGraphSecurityApplyHold/microsoftGraphSecurityApplyHoldRequestBuilder';
import { MicrosoftGraphSecurityRemoveHoldRequestBuilder } from './microsoftGraphSecurityRemoveHold/microsoftGraphSecurityRemoveHoldRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface CustodiansRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface CustodiansRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: CustodiansRequestBuilderGetQueryParameters;
}
export interface CustodiansRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the custodians property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class CustodiansRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the applyHold method.
     */
    public get microsoftGraphSecurityApplyHold(): MicrosoftGraphSecurityApplyHoldRequestBuilder {
        return new MicrosoftGraphSecurityApplyHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the removeHold method.
     */
    public get microsoftGraphSecurityRemoveHold(): MicrosoftGraphSecurityRemoveHoldRequestBuilder {
        return new MicrosoftGraphSecurityRemoveHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the custodians property of the microsoft.graph.security.ediscoveryCase entity.
     * @param ediscoveryCustodianId The unique identifier of ediscoveryCustodian
     * @returns a EdiscoveryCustodianItemRequestBuilder
     */
    public byEdiscoveryCustodianId(ediscoveryCustodianId: string) : EdiscoveryCustodianItemRequestBuilder {
        if(!ediscoveryCustodianId) throw new Error("ediscoveryCustodianId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryCustodian%2Did"] = ediscoveryCustodianId
        return new EdiscoveryCustodianItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CustodiansRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/custodians{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the custodian objects and their properties. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryCustodianCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycase-list-custodians?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CustodiansRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryCustodianCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryCustodianCollectionResponse>(requestInfo, createEdiscoveryCustodianCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new ediscoveryCustodian object.After the custodian object is created, you will need to create the custodian's userSource to reference their mailbox and OneDrive for Business site. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryCustodian
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycase-post-custodians?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EdiscoveryCustodian, requestConfiguration?: CustodiansRequestBuilderPostRequestConfiguration | undefined) : Promise<EdiscoveryCustodian | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryCustodian>(requestInfo, createEdiscoveryCustodianFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the custodian objects and their properties. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CustodiansRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new ediscoveryCustodian object.After the custodian object is created, you will need to create the custodian's userSource to reference their mailbox and OneDrive for Business site. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EdiscoveryCustodian, requestConfiguration?: CustodiansRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEdiscoveryCustodian);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a custodiansRequestBuilder
     */
    public withUrl(rawUrl: string) : CustodiansRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CustodiansRequestBuilder(rawUrl, this.requestAdapter);
    };
}
