import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {EdiscoveryNoncustodialDataSource, EdiscoveryNoncustodialDataSourceCollectionResponse} from '../../../../../models/security/';
import {createEdiscoveryNoncustodialDataSourceCollectionResponseFromDiscriminatorValue} from '../../../../../models/security/createEdiscoveryNoncustodialDataSourceCollectionResponseFromDiscriminatorValue';
import {createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue} from '../../../../../models/security/createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {NoncustodialDataSourcesRequestBuilderGetRequestConfiguration} from './noncustodialDataSourcesRequestBuilderGetRequestConfiguration';
import {NoncustodialDataSourcesRequestBuilderPostRequestConfiguration} from './noncustodialDataSourcesRequestBuilderPostRequestConfiguration';
import {SecurityApplyHoldRequestBuilder} from './securityApplyHold/securityApplyHoldRequestBuilder';
import {SecurityRemoveHoldRequestBuilder} from './securityRemoveHold/securityRemoveHoldRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the noncustodialDataSources property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class NoncustodialDataSourcesRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to call the applyHold method. */
    public get securityApplyHold(): SecurityApplyHoldRequestBuilder {
        return new SecurityApplyHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the removeHold method. */
    public get securityRemoveHold(): SecurityRemoveHoldRequestBuilder {
        return new SecurityRemoveHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new NoncustodialDataSourcesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/noncustodialDataSources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Returns a list of case ediscoveryNoncustodialDataSource objects for this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryNoncustodialDataSourceCollectionResponse
     */
    public get(requestConfiguration?: NoncustodialDataSourcesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryNoncustodialDataSourceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryNoncustodialDataSourceCollectionResponse>(requestInfo, createEdiscoveryNoncustodialDataSourceCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new ediscoveryNoncustodialDataSource object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryNoncustodialDataSource
     * @see {@link https://docs.microsoft.com/graph/api/security-ediscoverycase-post-noncustodialdatasources?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EdiscoveryNoncustodialDataSource | undefined, requestConfiguration?: NoncustodialDataSourcesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryNoncustodialDataSource | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryNoncustodialDataSource>(requestInfo, createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
    public toPostRequestInformation(body: EdiscoveryNoncustodialDataSource | undefined, requestConfiguration?: NoncustodialDataSourcesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
