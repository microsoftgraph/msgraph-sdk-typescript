import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {PassiveDnsRecordCollectionResponse} from '../../../../../models/security/';
import {createPassiveDnsRecordCollectionResponseFromDiscriminatorValue} from '../../../../../models/security/createPassiveDnsRecordCollectionResponseFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PassiveDnsRecordItemRequestBuilder} from './item/passiveDnsRecordItemRequestBuilder';
import {PassiveDnsReverseRequestBuilderGetRequestConfiguration} from './passiveDnsReverseRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the passiveDnsReverse property of the microsoft.graph.security.host entity.
 */
export class PassiveDnsReverseRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the passiveDnsReverse property of the microsoft.graph.security.host entity.
     * @param passiveDnsRecordId Unique identifier of the item
     * @returns a PassiveDnsRecordItemRequestBuilder
     */
    public byPassiveDnsRecordId(passiveDnsRecordId: string) : PassiveDnsRecordItemRequestBuilder {
        if(!passiveDnsRecordId) throw new Error("passiveDnsRecordId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["passiveDnsRecord%2Did"] = passiveDnsRecordId
        return new PassiveDnsRecordItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PassiveDnsReverseRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/hosts/{host%2Did}/passiveDnsReverse{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of passiveDnsRecord resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PassiveDnsRecordCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-host-list-passivednsreverse?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PassiveDnsReverseRequestBuilderGetRequestConfiguration | undefined) : Promise<PassiveDnsRecordCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PassiveDnsRecordCollectionResponse>(requestInfo, createPassiveDnsRecordCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of passiveDnsRecord resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PassiveDnsReverseRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
