import {createParseExpressionResponseFromDiscriminatorValue} from '../../../../../../../models/createParseExpressionResponseFromDiscriminatorValue';
import {deserializeIntoParseExpressionResponse} from '../../../../../../../models/deserializeIntoParseExpressionResponse';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {ParseExpressionResponse} from '../../../../../../../models/parseExpressionResponse';
import {serializeParseExpressionResponse} from '../../../../../../../models/serializeParseExpressionResponse';
import {deserializeIntoParseExpressionPostRequestBody} from './deserializeIntoParseExpressionPostRequestBody';
import {ParseExpressionPostRequestBody} from './parseExpressionPostRequestBody';
import {ParseExpressionRequestBuilderPostRequestConfiguration} from './parseExpressionRequestBuilderPostRequestConfiguration';
import {serializeParseExpressionPostRequestBody} from './serializeParseExpressionPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the parseExpression method.
 */
export class ParseExpressionRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ParseExpressionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/synchronization/jobs/{synchronizationJob%2Did}/schema/parseExpression");
    };
    /**
     * Parse a given string expression into an attributeMappingSource object. For more information about expressions, see Writing Expressions for Attribute Mappings in Azure Active Directory.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ParseExpressionResponse
     * @see {@link https://docs.microsoft.com/graph/api/synchronization-synchronizationschema-parseexpression?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ParseExpressionPostRequestBody | undefined, requestConfiguration?: ParseExpressionRequestBuilderPostRequestConfiguration | undefined) : Promise<ParseExpressionResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ParseExpressionResponse>(requestInfo, createParseExpressionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Parse a given string expression into an attributeMappingSource object. For more information about expressions, see Writing Expressions for Attribute Mappings in Azure Active Directory.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ParseExpressionPostRequestBody | undefined, requestConfiguration?: ParseExpressionRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeParseExpressionPostRequestBody);
        return requestInfo;
    };
}
