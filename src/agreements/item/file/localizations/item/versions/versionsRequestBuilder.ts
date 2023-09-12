import { type AgreementFileVersionCollectionResponse } from '../../../../../../models/';
import { type AgreementFileVersion } from '../../../../../../models/agreementFileVersion';
import { createAgreementFileVersionCollectionResponseFromDiscriminatorValue } from '../../../../../../models/createAgreementFileVersionCollectionResponseFromDiscriminatorValue';
import { createAgreementFileVersionFromDiscriminatorValue } from '../../../../../../models/createAgreementFileVersionFromDiscriminatorValue';
import { deserializeIntoAgreementFileVersion } from '../../../../../../models/deserializeIntoAgreementFileVersion';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { serializeAgreementFileVersion } from '../../../../../../models/serializeAgreementFileVersion';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { AgreementFileVersionItemRequestBuilder } from './item/agreementFileVersionItemRequestBuilder';
import { type VersionsRequestBuilderGetRequestConfiguration } from './versionsRequestBuilderGetRequestConfiguration';
import { type VersionsRequestBuilderPostRequestConfiguration } from './versionsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the versions property of the microsoft.graph.agreementFileLocalization entity.
 */
export class VersionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the versions property of the microsoft.graph.agreementFileLocalization entity.
     * @param agreementFileVersionId The unique identifier of agreementFileVersion
     * @returns a AgreementFileVersionItemRequestBuilder
     */
    public byAgreementFileVersionId(agreementFileVersionId: string) : AgreementFileVersionItemRequestBuilder {
        if(!agreementFileVersionId) throw new Error("agreementFileVersionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["agreementFileVersion%2Did"] = agreementFileVersionId
        return new AgreementFileVersionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new VersionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/agreements/{agreement%2Did}/file/localizations/{agreementFileLocalization%2Did}/versions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read-only. Customized versions of the terms of use agreement in the Azure AD tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementFileVersionCollectionResponse
     */
    public get(requestConfiguration?: VersionsRequestBuilderGetRequestConfiguration | undefined) : Promise<AgreementFileVersionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AgreementFileVersionCollectionResponse>(requestInfo, createAgreementFileVersionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to versions for agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementFileVersion
     */
    public post(body: AgreementFileVersion, requestConfiguration?: VersionsRequestBuilderPostRequestConfiguration | undefined) : Promise<AgreementFileVersion | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AgreementFileVersion>(requestInfo, createAgreementFileVersionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read-only. Customized versions of the terms of use agreement in the Azure AD tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: VersionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to versions for agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AgreementFileVersion, requestConfiguration?: VersionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAgreementFileVersion);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a versionsRequestBuilder
     */
    public withUrl(rawUrl: string) : VersionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new VersionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
