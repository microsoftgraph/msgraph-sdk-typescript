import {createStringKeyStringValuePairFromDiscriminatorValue} from '../../../../../../models/createStringKeyStringValuePairFromDiscriminatorValue';
import {deserializeIntoStringKeyStringValuePair} from '../../../../../../models/deserializeIntoStringKeyStringValuePair';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeStringKeyStringValuePair} from '../../../../../../models/serializeStringKeyStringValuePair';
import type {StringKeyStringValuePair} from '../../../../../../models/stringKeyStringValuePair';
import {deserializeIntoProvisionOnDemandPostRequestBody} from './deserializeIntoProvisionOnDemandPostRequestBody';
import type {ProvisionOnDemandPostRequestBody} from './provisionOnDemandPostRequestBody';
import {ProvisionOnDemandRequestBuilderPostRequestConfiguration} from './provisionOnDemandRequestBuilderPostRequestConfiguration';
import {serializeProvisionOnDemandPostRequestBody} from './serializeProvisionOnDemandPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

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
     * Select a user and provision the account on-demand. The rate limit for this API is 5 requests per 10 seconds. 
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of StringKeyStringValuePair
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronizationjob-provisionondemand?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ProvisionOnDemandPostRequestBody, requestConfiguration?: ProvisionOnDemandRequestBuilderPostRequestConfiguration | undefined) : Promise<StringKeyStringValuePair | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<StringKeyStringValuePair>(requestInfo, createStringKeyStringValuePairFromDiscriminatorValue, errorMapping);
    };
    /**
     * Select a user and provision the account on-demand. The rate limit for this API is 5 requests per 10 seconds. 
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ProvisionOnDemandPostRequestBody, requestConfiguration?: ProvisionOnDemandRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeProvisionOnDemandPostRequestBody);
        return requestInfo;
    };
}
