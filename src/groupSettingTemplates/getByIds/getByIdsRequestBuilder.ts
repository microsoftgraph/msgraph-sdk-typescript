import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {createGetByIdsResponseFromDiscriminatorValue} from './createGetByIdsResponseFromDiscriminatorValue';
import {deserializeIntoGetByIdsPostRequestBody} from './deserializeIntoGetByIdsPostRequestBody';
import {deserializeIntoGetByIdsResponse} from './deserializeIntoGetByIdsResponse';
import {GetByIdsPostRequestBody} from './getByIdsPostRequestBody';
import {GetByIdsRequestBuilderPostRequestConfiguration} from './getByIdsRequestBuilderPostRequestConfiguration';
import {GetByIdsResponse} from './getByIdsResponse';
import {serializeGetByIdsPostRequestBody} from './serializeGetByIdsPostRequestBody';
import {serializeGetByIdsResponse} from './serializeGetByIdsResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getByIds method.
 */
export class GetByIdsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetByIdsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groupSettingTemplates/getByIds");
    };
    /**
     * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetByIdsResponse
     * @see {@link https://docs.microsoft.com/graph/api/directoryobject-getbyids?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetByIdsPostRequestBody | undefined, requestConfiguration?: GetByIdsRequestBuilderPostRequestConfiguration | undefined) : Promise<GetByIdsResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetByIdsResponse>(requestInfo, createGetByIdsResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetByIdsPostRequestBody | undefined, requestConfiguration?: GetByIdsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetByIdsPostRequestBody);
        return requestInfo;
    };
}
