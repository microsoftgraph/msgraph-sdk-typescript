import {createStringKeyStringValuePairFromDiscriminatorValue} from '../../../../../../models/createStringKeyStringValuePairFromDiscriminatorValue';
import {deserializeIntoStringKeyStringValuePair} from '../../../../../../models/deserializeIntoStringKeyStringValuePair';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeStringKeyStringValuePair} from '../../../../../../models/serializeStringKeyStringValuePair';
import {StringKeyStringValuePair} from '../../../../../../models/stringKeyStringValuePair';
import {deserializeIntoProvisionOnDemandPostRequestBody} from './deserializeIntoProvisionOnDemandPostRequestBody';
import {ProvisionOnDemandPostRequestBody} from './provisionOnDemandPostRequestBody';
import {ProvisionOnDemandRequestBuilderPostRequestConfiguration} from './provisionOnDemandRequestBuilderPostRequestConfiguration';
import {serializeProvisionOnDemandPostRequestBody} from './serializeProvisionOnDemandPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the provisionOnDemand method.
 */
export class ProvisionOnDemandRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ProvisionOnDemandRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/synchronization/jobs/{synchronizationJob%2Did}/provisionOnDemand");
    };
    /**
     * Invoke action provisionOnDemand
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of StringKeyStringValuePair
     */
    public post(body: ProvisionOnDemandPostRequestBody | undefined, requestConfiguration?: ProvisionOnDemandRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<StringKeyStringValuePair | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<StringKeyStringValuePair>(requestInfo, createStringKeyStringValuePairFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke action provisionOnDemand
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ProvisionOnDemandPostRequestBody | undefined, requestConfiguration?: ProvisionOnDemandRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeProvisionOnDemandPostRequestBody);
        return requestInfo;
    };
}
