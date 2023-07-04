import {createOnlineMeetingFromDiscriminatorValue} from '../../../../models/createOnlineMeetingFromDiscriminatorValue';
import {deserializeIntoOnlineMeeting} from '../../../../models/deserializeIntoOnlineMeeting';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {OnlineMeeting} from '../../../../models/onlineMeeting';
import {serializeOnlineMeeting} from '../../../../models/serializeOnlineMeeting';
import {CreateOrGetPostRequestBody} from './createOrGetPostRequestBody';
import {CreateOrGetRequestBuilderPostRequestConfiguration} from './createOrGetRequestBuilderPostRequestConfiguration';
import {deserializeIntoCreateOrGetPostRequestBody} from './deserializeIntoCreateOrGetPostRequestBody';
import {serializeCreateOrGetPostRequestBody} from './serializeCreateOrGetPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the createOrGet method.
 */
export class CreateOrGetRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CreateOrGetRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/onlineMeetings/createOrGet");
    };
    /**
     * Create an onlineMeeting object with a custom specified external ID. If the external ID already exists, this API will return the onlineMeeting object with that external ID. 
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnlineMeeting
     * @see {@link https://docs.microsoft.com/graph/api/onlinemeeting-createorget?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CreateOrGetPostRequestBody | undefined, requestConfiguration?: CreateOrGetRequestBuilderPostRequestConfiguration | undefined) : Promise<OnlineMeeting | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnlineMeeting>(requestInfo, createOnlineMeetingFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create an onlineMeeting object with a custom specified external ID. If the external ID already exists, this API will return the onlineMeeting object with that external ID. 
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CreateOrGetPostRequestBody | undefined, requestConfiguration?: CreateOrGetRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCreateOrGetPostRequestBody);
        return requestInfo;
    };
}
