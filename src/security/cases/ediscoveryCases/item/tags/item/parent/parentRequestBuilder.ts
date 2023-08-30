import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {EdiscoveryReviewTag} from '../../../../../../../models/security/';
import {createEdiscoveryReviewTagFromDiscriminatorValue} from '../../../../../../../models/security/createEdiscoveryReviewTagFromDiscriminatorValue';
import {ParentRequestBuilderGetRequestConfiguration} from './parentRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the parent property of the microsoft.graph.security.ediscoveryReviewTag entity.
 */
export class ParentRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ParentRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/tags/{ediscoveryReviewTag%2Did}/parent{?%24select,%24expand}");
    };
    /**
     * Returns the parent tag of the specified tag.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryReviewTag
     */
    public get(requestConfiguration?: ParentRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryReviewTag | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryReviewTag>(requestInfo, createEdiscoveryReviewTagFromDiscriminatorValue, errorMapping);
    };
    /**
     * Returns the parent tag of the specified tag.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ParentRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a parentRequestBuilder
     */
    public withUrl(rawUrl: string) : ParentRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ParentRequestBuilder(rawUrl, this.requestAdapter);
    };
}
