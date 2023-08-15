import {WindowsHelloForBusinessAuthenticationMethodCollectionResponse} from '../../../models/';
import {createWindowsHelloForBusinessAuthenticationMethodCollectionResponseFromDiscriminatorValue} from '../../../models/createWindowsHelloForBusinessAuthenticationMethodCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder} from './item/windowsHelloForBusinessAuthenticationMethodItemRequestBuilder';
import {WindowsHelloForBusinessMethodsRequestBuilderGetRequestConfiguration} from './windowsHelloForBusinessMethodsRequestBuilderGetRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsHelloForBusinessMethods property of the microsoft.graph.authentication entity.
 */
export class WindowsHelloForBusinessMethodsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the windowsHelloForBusinessMethods property of the microsoft.graph.authentication entity.
     * @param windowsHelloForBusinessAuthenticationMethodId The unique identifier of windowsHelloForBusinessAuthenticationMethod
     * @returns a WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder
     */
    public byWindowsHelloForBusinessAuthenticationMethodId(windowsHelloForBusinessAuthenticationMethodId: string) : WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder {
        if(!windowsHelloForBusinessAuthenticationMethodId) throw new Error("windowsHelloForBusinessAuthenticationMethodId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsHelloForBusinessAuthenticationMethod%2Did"] = windowsHelloForBusinessAuthenticationMethodId
        return new WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WindowsHelloForBusinessMethodsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/authentication/windowsHelloForBusinessMethods{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the windowsHelloForBusinessAuthenticationMethod objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsHelloForBusinessAuthenticationMethodCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/windowshelloforbusinessauthenticationmethod-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WindowsHelloForBusinessMethodsRequestBuilderGetRequestConfiguration | undefined) : Promise<WindowsHelloForBusinessAuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsHelloForBusinessAuthenticationMethodCollectionResponse>(requestInfo, createWindowsHelloForBusinessAuthenticationMethodCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the windowsHelloForBusinessAuthenticationMethod objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WindowsHelloForBusinessMethodsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
