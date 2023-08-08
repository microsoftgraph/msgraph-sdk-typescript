import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {EdiscoveryNoncustodialDataSourceCollectionResponse} from '../../../../../models/security/';
import {createEdiscoveryNoncustodialDataSourceCollectionResponseFromDiscriminatorValue} from '../../../../../models/security/createEdiscoveryNoncustodialDataSourceCollectionResponseFromDiscriminatorValue';
import {createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue} from '../../../../../models/security/createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue';
import {deserializeIntoEdiscoveryNoncustodialDataSource} from '../../../../../models/security/deserializeIntoEdiscoveryNoncustodialDataSource';
import type {EdiscoveryNoncustodialDataSource} from '../../../../../models/security/ediscoveryNoncustodialDataSource';
import {serializeEdiscoveryNoncustodialDataSource} from '../../../../../models/security/serializeEdiscoveryNoncustodialDataSource';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EdiscoveryNoncustodialDataSourceItemRequestBuilder} from './item/ediscoveryNoncustodialDataSourceItemRequestBuilder';
import {MicrosoftGraphSecurityApplyHoldRequestBuilder} from './microsoftGraphSecurityApplyHold/microsoftGraphSecurityApplyHoldRequestBuilder';
import {MicrosoftGraphSecurityRemoveHoldRequestBuilder} from './microsoftGraphSecurityRemoveHold/microsoftGraphSecurityRemoveHoldRequestBuilder';
import {NoncustodialDataSourcesRequestBuilderGetRequestConfiguration} from './noncustodialDataSourcesRequestBuilderGetRequestConfiguration';
import {NoncustodialDataSourcesRequestBuilderPostRequestConfiguration} from './noncustodialDataSourcesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the noncustodialDataSources property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class NoncustodialDataSourcesRequestBuilder extends BaseRequestBuilder {
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
     * Provides operations to manage the noncustodialDataSources property of the microsoft.graph.security.ediscoveryCase entity.
     * @param ediscoveryNoncustodialDataSourceId Unique identifier of the item
     * @returns a EdiscoveryNoncustodialDataSourceItemRequestBuilder
     */
    public byEdiscoveryNoncustodialDataSourceId(ediscoveryNoncustodialDataSourceId: string) : EdiscoveryNoncustodialDataSourceItemRequestBuilder {
        if(!ediscoveryNoncustodialDataSourceId) throw new Error("ediscoveryNoncustodialDataSourceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryNoncustodialDataSource%2Did"] = ediscoveryNoncustodialDataSourceId
        return new EdiscoveryNoncustodialDataSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new NoncustodialDataSourcesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/noncustodialDataSources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Returns a list of case ediscoveryNoncustodialDataSource objects for this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryNoncustodialDataSourceCollectionResponse
     */
    public get(requestConfiguration?: NoncustodialDataSourcesRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryNoncustodialDataSourceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryNoncustodialDataSourceCollectionResponse>(requestInfo, createEdiscoveryNoncustodialDataSourceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new ediscoveryNoncustodialDataSource object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryNoncustodialDataSource
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycase-post-noncustodialdatasources?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EdiscoveryNoncustodialDataSource, requestConfiguration?: NoncustodialDataSourcesRequestBuilderPostRequestConfiguration | undefined) : Promise<EdiscoveryNoncustodialDataSource | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryNoncustodialDataSource>(requestInfo, createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Returns a list of case ediscoveryNoncustodialDataSource objects for this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: NoncustodialDataSourcesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new ediscoveryNoncustodialDataSource object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EdiscoveryNoncustodialDataSource, requestConfiguration?: NoncustodialDataSourcesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEdiscoveryNoncustodialDataSource);
        return requestInfo;
    };
}
