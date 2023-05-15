import {ApplicationServicePrincipal} from '../../../models/applicationServicePrincipal';
import {createApplicationServicePrincipalFromDiscriminatorValue} from '../../../models/createApplicationServicePrincipalFromDiscriminatorValue';
import {deserializeIntoApplicationServicePrincipal} from '../../../models/deserializeIntoApplicationServicePrincipal';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeApplicationServicePrincipal} from '../../../models/serializeApplicationServicePrincipal';
import {deserializeIntoInstantiatePostRequestBody} from './deserializeIntoInstantiatePostRequestBody';
import {InstantiatePostRequestBody} from './instantiatePostRequestBody';
import {InstantiateRequestBuilderPostRequestConfiguration} from './instantiateRequestBuilderPostRequestConfiguration';
import {serializeInstantiatePostRequestBody} from './serializeInstantiatePostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the instantiate method.
 */
export class InstantiateRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new InstantiateRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applicationTemplates/{applicationTemplate%2Did}/instantiate");
    };
    /**
     * Invoke action instantiate
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ApplicationServicePrincipal
     */
    public post(body: InstantiatePostRequestBody | undefined, requestConfiguration?: InstantiateRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ApplicationServicePrincipal | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<ApplicationServicePrincipal>(requestInfo, createApplicationServicePrincipalFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke action instantiate
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: InstantiatePostRequestBody | undefined, requestConfiguration?: InstantiateRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeInstantiatePostRequestBody);
        return requestInfo;
    };
}
