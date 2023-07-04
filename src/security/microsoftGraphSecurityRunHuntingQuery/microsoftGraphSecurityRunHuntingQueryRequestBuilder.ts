import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {createHuntingQueryResultsFromDiscriminatorValue} from '../../models/security/createHuntingQueryResultsFromDiscriminatorValue';
import {deserializeIntoHuntingQueryResults} from '../../models/security/deserializeIntoHuntingQueryResults';
import {HuntingQueryResults} from '../../models/security/huntingQueryResults';
import {serializeHuntingQueryResults} from '../../models/security/serializeHuntingQueryResults';
import {deserializeIntoRunHuntingQueryPostRequestBody} from './deserializeIntoRunHuntingQueryPostRequestBody';
import {MicrosoftGraphSecurityRunHuntingQueryRequestBuilderPostRequestConfiguration} from './microsoftGraphSecurityRunHuntingQueryRequestBuilderPostRequestConfiguration';
import {RunHuntingQueryPostRequestBody} from './runHuntingQueryPostRequestBody';
import {serializeRunHuntingQueryPostRequestBody} from './serializeRunHuntingQueryPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the runHuntingQuery method.
 */
export class MicrosoftGraphSecurityRunHuntingQueryRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new MicrosoftGraphSecurityRunHuntingQueryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/microsoft.graph.security.runHuntingQuery");
    };
    /**
     * Invoke action runHuntingQuery
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HuntingQueryResults
     */
    public post(body: RunHuntingQueryPostRequestBody | undefined, requestConfiguration?: MicrosoftGraphSecurityRunHuntingQueryRequestBuilderPostRequestConfiguration | undefined) : Promise<HuntingQueryResults | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HuntingQueryResults>(requestInfo, createHuntingQueryResultsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke action runHuntingQuery
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RunHuntingQueryPostRequestBody | undefined, requestConfiguration?: MicrosoftGraphSecurityRunHuntingQueryRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRunHuntingQueryPostRequestBody);
        return requestInfo;
    };
}
