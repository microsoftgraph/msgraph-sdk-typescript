import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {createGetApplicableContentTypesForListWithListIdResponseFromDiscriminatorValue} from './createGetApplicableContentTypesForListWithListIdResponseFromDiscriminatorValue';
import {GetApplicableContentTypesForListWithListIdRequestBuilderGetRequestConfiguration} from './getApplicableContentTypesForListWithListIdRequestBuilderGetRequestConfiguration';
import {GetApplicableContentTypesForListWithListIdResponse} from './index';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getApplicableContentTypesForList method.
 */
export class GetApplicableContentTypesForListWithListIdRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetApplicableContentTypesForListWithListIdRequestBuilder and sets the default values.
     * @param listId Usage: listId='{listId}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, listId?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/getApplicableContentTypesForList(listId='{listId}'){?%24top,%24skip,%24search,%24filter,%24count,%24select,%24orderby}");
        this.pathParameters["listId"] = listId
    };
    /**
     * Invoke function getApplicableContentTypesForList
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetApplicableContentTypesForListWithListIdResponse
     */
    public get(requestConfiguration?: GetApplicableContentTypesForListWithListIdRequestBuilderGetRequestConfiguration | undefined) : Promise<GetApplicableContentTypesForListWithListIdResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetApplicableContentTypesForListWithListIdResponse>(requestInfo, createGetApplicableContentTypesForListWithListIdResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function getApplicableContentTypesForList
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetApplicableContentTypesForListWithListIdRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a getApplicableContentTypesForListWithListIdRequestBuilder
     */
    public withUrl(rawUrl: string) : GetApplicableContentTypesForListWithListIdRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetApplicableContentTypesForListWithListIdRequestBuilder(rawUrl, this.requestAdapter);
    };
}
