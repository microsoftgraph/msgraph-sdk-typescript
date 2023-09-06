import { type AgreementFileLocalizationCollectionResponse } from '../../../../../models/';
import { type AgreementFileLocalization } from '../../../../../models/agreementFileLocalization';
import { createAgreementFileLocalizationCollectionResponseFromDiscriminatorValue } from '../../../../../models/createAgreementFileLocalizationCollectionResponseFromDiscriminatorValue';
import { createAgreementFileLocalizationFromDiscriminatorValue } from '../../../../../models/createAgreementFileLocalizationFromDiscriminatorValue';
import { deserializeIntoAgreementFileLocalization } from '../../../../../models/deserializeIntoAgreementFileLocalization';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeAgreementFileLocalization } from '../../../../../models/serializeAgreementFileLocalization';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type FilesRequestBuilderGetRequestConfiguration } from './filesRequestBuilderGetRequestConfiguration';
import { type FilesRequestBuilderPostRequestConfiguration } from './filesRequestBuilderPostRequestConfiguration';
import { AgreementFileLocalizationItemRequestBuilder } from './item/agreementFileLocalizationItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the files property of the microsoft.graph.agreement entity.
 */
export class FilesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the files property of the microsoft.graph.agreement entity.
     * @param agreementFileLocalizationId The unique identifier of agreementFileLocalization
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
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/termsOfUse/agreements/{agreement%2Did}/files{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * PDFs linked to this agreement. This property is in the process of being deprecated. Use the  file property instead. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementFileLocalizationCollectionResponse
     */
    public get(requestConfiguration?: FilesRequestBuilderGetRequestConfiguration | undefined) : Promise<AgreementFileLocalizationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AgreementFileLocalizationCollectionResponse>(requestInfo, createAgreementFileLocalizationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new localized agreement file.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementFileLocalization
     * @see {@link https://learn.microsoft.com/graph/api/agreement-post-files?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AgreementFileLocalization, requestConfiguration?: FilesRequestBuilderPostRequestConfiguration | undefined) : Promise<AgreementFileLocalization | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AgreementFileLocalization>(requestInfo, createAgreementFileLocalizationFromDiscriminatorValue, errorMapping);
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
     * Create a new localized agreement file.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AgreementFileLocalization, requestConfiguration?: FilesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAgreementFileLocalization);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a filesRequestBuilder
     */
    public withUrl(rawUrl: string) : FilesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new FilesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
