import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {createGrantResponseFromDiscriminatorValue} from './createGrantResponseFromDiscriminatorValue';
import {deserializeIntoGrantPostRequestBody} from './deserializeIntoGrantPostRequestBody';
import {deserializeIntoGrantResponse} from './deserializeIntoGrantResponse';
import {GrantPostRequestBody} from './grantPostRequestBody';
import {GrantRequestBuilderPostRequestConfiguration} from './grantRequestBuilderPostRequestConfiguration';
import {GrantResponse} from './grantResponse';
import {serializeGrantPostRequestBody} from './serializeGrantPostRequestBody';
import {serializeGrantResponse} from './serializeGrantResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the grant method.
 */
export class GrantRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GrantRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/permissions/{permission%2Did}/grant");
    };
    /**
     * Grant users access to a link represented by a [permission][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GrantResponse
     * @see {@link https://docs.microsoft.com/graph/api/permission-grant?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GrantPostRequestBody | undefined, requestConfiguration?: GrantRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GrantResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<GrantResponse>(requestInfo, createGrantResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Grant users access to a link represented by a [permission][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GrantPostRequestBody | undefined, requestConfiguration?: GrantRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGrantPostRequestBody);
        return requestInfo;
    };
}
