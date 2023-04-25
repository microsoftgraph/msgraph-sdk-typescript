import {AgreementFileLocalization, AgreementFileLocalizationCollectionResponse} from '../../../models/';
import {createAgreementFileLocalizationCollectionResponseFromDiscriminatorValue} from '../../../models/createAgreementFileLocalizationCollectionResponseFromDiscriminatorValue';
import {createAgreementFileLocalizationFromDiscriminatorValue} from '../../../models/createAgreementFileLocalizationFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FilesRequestBuilderGetRequestConfiguration} from './filesRequestBuilderGetRequestConfiguration';
import {FilesRequestBuilderPostRequestConfiguration} from './filesRequestBuilderPostRequestConfiguration';
import {AgreementFileLocalizationItemRequestBuilder} from './item/agreementFileLocalizationItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the files property of the microsoft.graph.agreement entity.
 */
export class FilesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the files property of the microsoft.graph.agreement entity.
     * @param agreementFileLocalizationId Unique identifier of the item
     * @returns a AgreementFileLocalizationItemRequestBuilder
     */
    public byAgreementFileLocalizationId(agreementFileLocalizationId: string) : AgreementFileLocalizationItemRequestBuilder {
        if(!agreementFileLocalizationId) throw new Error("agreementFileLocalizationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["agreementFileLocalization%2Did"] = agreementFileLocalizationId
        return new AgreementFileLocalizationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new FilesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/agreements/{agreement%2Did}/files{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * PDFs linked to this agreement. This property is in the process of being deprecated. Use the  file property instead. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AgreementFileLocalizationCollectionResponse
     */
    public get(requestConfiguration?: FilesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AgreementFileLocalizationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AgreementFileLocalizationCollectionResponse>(requestInfo, createAgreementFileLocalizationCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to files for agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AgreementFileLocalization
     */
    public post(body: AgreementFileLocalization | undefined, requestConfiguration?: FilesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AgreementFileLocalization | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AgreementFileLocalization>(requestInfo, createAgreementFileLocalizationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * PDFs linked to this agreement. This property is in the process of being deprecated. Use the  file property instead. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FilesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to files for agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AgreementFileLocalization | undefined, requestConfiguration?: FilesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
