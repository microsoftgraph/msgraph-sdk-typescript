import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {deserializeIntoDismissPostRequestBody} from './deserializeIntoDismissPostRequestBody';
import type {DismissPostRequestBody} from './dismissPostRequestBody';
import {DismissRequestBuilderPostRequestConfiguration} from './dismissRequestBuilderPostRequestConfiguration';
import {serializeDismissPostRequestBody} from './serializeDismissPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the dismiss method.
 */
export class DismissRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DismissRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityProtection/riskyServicePrincipals/dismiss");
    };
    /**
     * Dismiss the risk of one or more riskyServicePrincipal objects. This action sets the targeted service principal account's risk level to none. You can dismiss up to 60 service principal accounts in one request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/riskyserviceprincipal-dismiss?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DismissPostRequestBody | undefined, requestConfiguration?: DismissRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Dismiss the risk of one or more riskyServicePrincipal objects. This action sets the targeted service principal account's risk level to none. You can dismiss up to 60 service principal accounts in one request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DismissPostRequestBody | undefined, requestConfiguration?: DismissRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDismissPostRequestBody);
        return requestInfo;
    };
}
