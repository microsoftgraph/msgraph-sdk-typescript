import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {createGetAuditActivityTypesWithCategoryResponseFromDiscriminatorValue} from './createGetAuditActivityTypesWithCategoryResponseFromDiscriminatorValue';
import {GetAuditActivityTypesWithCategoryRequestBuilderGetRequestConfiguration} from './getAuditActivityTypesWithCategoryRequestBuilderGetRequestConfiguration';
import {GetAuditActivityTypesWithCategoryResponse} from './index';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getAuditActivityTypes method.
 */
export class GetAuditActivityTypesWithCategoryRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetAuditActivityTypesWithCategoryRequestBuilder and sets the default values.
     * @param category Usage: category='{category}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, category?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/auditEvents/getAuditActivityTypes(category='{category}'){?%24top,%24skip,%24search,%24filter,%24count}");
        this.pathParameters["category"] = category
    };
    /**
     * Invoke function getAuditActivityTypes
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetAuditActivityTypesWithCategoryResponse
     */
    public get(requestConfiguration?: GetAuditActivityTypesWithCategoryRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetAuditActivityTypesWithCategoryResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<GetAuditActivityTypesWithCategoryResponse>(requestInfo, createGetAuditActivityTypesWithCategoryResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke function getAuditActivityTypes
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetAuditActivityTypesWithCategoryRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
