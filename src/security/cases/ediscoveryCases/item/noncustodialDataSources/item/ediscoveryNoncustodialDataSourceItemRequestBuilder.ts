import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {EdiscoveryNoncustodialDataSource} from '../../../../../../models/security/';
import {createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue} from '../../../../../../models/security/createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue';
import {DataSourceRequestBuilder} from './dataSource/dataSourceRequestBuilder';
import {EdiscoveryNoncustodialDataSourceItemRequestBuilderDeleteRequestConfiguration} from './ediscoveryNoncustodialDataSourceItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoveryNoncustodialDataSourceItemRequestBuilderGetRequestConfiguration} from './ediscoveryNoncustodialDataSourceItemRequestBuilderGetRequestConfiguration';
import {EdiscoveryNoncustodialDataSourceItemRequestBuilderPatchRequestConfiguration} from './ediscoveryNoncustodialDataSourceItemRequestBuilderPatchRequestConfiguration';
import {LastIndexOperationRequestBuilder} from './lastIndexOperation/lastIndexOperationRequestBuilder';
import {SecurityApplyHoldRequestBuilder} from './securityApplyHold/securityApplyHoldRequestBuilder';
import {SecurityReleaseRequestBuilder} from './securityRelease/securityReleaseRequestBuilder';
import {SecurityRemoveHoldRequestBuilder} from './securityRemoveHold/securityRemoveHoldRequestBuilder';
import {SecurityUpdateIndexRequestBuilder} from './securityUpdateIndex/securityUpdateIndexRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the noncustodialDataSources property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class EdiscoveryNoncustodialDataSourceItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the dataSource property of the microsoft.graph.security.ediscoveryNoncustodialDataSource entity. */
    public get dataSource(): DataSourceRequestBuilder {
        return new DataSourceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the lastIndexOperation property of the microsoft.graph.security.ediscoveryNoncustodialDataSource entity. */
    public get lastIndexOperation(): LastIndexOperationRequestBuilder {
        return new LastIndexOperationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyHold method. */
    public get securityApplyHold(): SecurityApplyHoldRequestBuilder {
        return new SecurityApplyHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the release method. */
    public get securityRelease(): SecurityReleaseRequestBuilder {
        return new SecurityReleaseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the removeHold method. */
    public get securityRemoveHold(): SecurityRemoveHoldRequestBuilder {
        return new SecurityRemoveHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the updateIndex method. */
    public get securityUpdateIndex(): SecurityUpdateIndexRequestBuilder {
        return new SecurityUpdateIndexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EdiscoveryNoncustodialDataSourceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/noncustodialDataSources/{ediscoveryNoncustodialDataSource%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property noncustodialDataSources for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ArrayBuffer
     */
    public delete(requestConfiguration?: EdiscoveryNoncustodialDataSourceItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ArrayBuffer | undefined> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendPrimitiveAsync<ArrayBuffer>(requestInfo, "ArrayBuffer", responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Returns a list of case ediscoveryNoncustodialDataSource objects for this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryNoncustodialDataSource
     */
    public get(requestConfiguration?: EdiscoveryNoncustodialDataSourceItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryNoncustodialDataSource | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryNoncustodialDataSource>(requestInfo, createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property noncustodialDataSources in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryNoncustodialDataSource
     */
    public patch(body: EdiscoveryNoncustodialDataSource | undefined, requestConfiguration?: EdiscoveryNoncustodialDataSourceItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryNoncustodialDataSource | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryNoncustodialDataSource>(requestInfo, createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property noncustodialDataSources for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EdiscoveryNoncustodialDataSourceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a list of case ediscoveryNoncustodialDataSource objects for this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EdiscoveryNoncustodialDataSourceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property noncustodialDataSources in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EdiscoveryNoncustodialDataSource | undefined, requestConfiguration?: EdiscoveryNoncustodialDataSourceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
