import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {EdiscoveryCaseCollectionResponse} from '../../../models/security/';
import {createEdiscoveryCaseCollectionResponseFromDiscriminatorValue} from '../../../models/security/createEdiscoveryCaseCollectionResponseFromDiscriminatorValue';
import {createEdiscoveryCaseFromDiscriminatorValue} from '../../../models/security/createEdiscoveryCaseFromDiscriminatorValue';
import {deserializeIntoEdiscoveryCase} from '../../../models/security/deserializeIntoEdiscoveryCase';
import type {EdiscoveryCase} from '../../../models/security/ediscoveryCase';
import {serializeEdiscoveryCase} from '../../../models/security/serializeEdiscoveryCase';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EdiscoveryCasesRequestBuilderGetRequestConfiguration} from './ediscoveryCasesRequestBuilderGetRequestConfiguration';
import {EdiscoveryCasesRequestBuilderPostRequestConfiguration} from './ediscoveryCasesRequestBuilderPostRequestConfiguration';
import {EdiscoveryCaseItemRequestBuilder} from './item/ediscoveryCaseItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the ediscoveryCases property of the microsoft.graph.security.casesRoot entity.
 */
export class EdiscoveryCasesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the ediscoveryCases property of the microsoft.graph.security.casesRoot entity.
     * @param ediscoveryCaseId The unique identifier of ediscoveryCase
     * @returns a EdiscoveryCaseItemRequestBuilder
     */
    public byEdiscoveryCaseId(ediscoveryCaseId: string) : EdiscoveryCaseItemRequestBuilder {
        if(!ediscoveryCaseId) throw new Error("ediscoveryCaseId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryCase%2Did"] = ediscoveryCaseId
        return new EdiscoveryCaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EdiscoveryCasesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the ediscoveryCase objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryCaseCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-casesroot-list-ediscoverycases?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EdiscoveryCasesRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryCaseCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryCaseCollectionResponse>(requestInfo, createEdiscoveryCaseCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new ediscoveryCase object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryCase
     * @see {@link https://learn.microsoft.com/graph/api/security-casesroot-post-ediscoverycases?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EdiscoveryCase, requestConfiguration?: EdiscoveryCasesRequestBuilderPostRequestConfiguration | undefined) : Promise<EdiscoveryCase | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryCase>(requestInfo, createEdiscoveryCaseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the ediscoveryCase objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EdiscoveryCasesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new ediscoveryCase object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EdiscoveryCase, requestConfiguration?: EdiscoveryCasesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEdiscoveryCase);
        return requestInfo;
    };
}
