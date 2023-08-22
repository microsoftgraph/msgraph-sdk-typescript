import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {HostComponentCollectionResponse} from '../../../models/security/';
import {createHostComponentCollectionResponseFromDiscriminatorValue} from '../../../models/security/createHostComponentCollectionResponseFromDiscriminatorValue';
import {createHostComponentFromDiscriminatorValue} from '../../../models/security/createHostComponentFromDiscriminatorValue';
import {deserializeIntoHostComponent} from '../../../models/security/deserializeIntoHostComponent';
import type {HostComponent} from '../../../models/security/hostComponent';
import {serializeHostComponent} from '../../../models/security/serializeHostComponent';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {HostComponentsRequestBuilderGetRequestConfiguration} from './hostComponentsRequestBuilderGetRequestConfiguration';
import {HostComponentsRequestBuilderPostRequestConfiguration} from './hostComponentsRequestBuilderPostRequestConfiguration';
import {HostComponentItemRequestBuilder} from './item/hostComponentItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostComponents property of the microsoft.graph.security.threatIntelligence entity.
 */
export class HostComponentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the hostComponents property of the microsoft.graph.security.threatIntelligence entity.
     * @param hostComponentId The unique identifier of hostComponent
     * @returns a HostComponentItemRequestBuilder
     */
    public byHostComponentId(hostComponentId: string) : HostComponentItemRequestBuilder {
        if(!hostComponentId) throw new Error("hostComponentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["hostComponent%2Did"] = hostComponentId
        return new HostComponentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new HostComponentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/hostComponents{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of a hostComponent object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostComponentCollectionResponse
     */
    public get(requestConfiguration?: HostComponentsRequestBuilderGetRequestConfiguration | undefined) : Promise<HostComponentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostComponentCollectionResponse>(requestInfo, createHostComponentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to hostComponents for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostComponent
     */
    public post(body: HostComponent, requestConfiguration?: HostComponentsRequestBuilderPostRequestConfiguration | undefined) : Promise<HostComponent | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostComponent>(requestInfo, createHostComponentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of a hostComponent object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HostComponentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to hostComponents for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: HostComponent, requestConfiguration?: HostComponentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeHostComponent);
        return requestInfo;
    };
}
