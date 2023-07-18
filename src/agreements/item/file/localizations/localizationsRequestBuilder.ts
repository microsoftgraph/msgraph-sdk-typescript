import {AgreementFileLocalizationCollectionResponse} from '../../../../models/';
import {AgreementFileLocalization} from '../../../../models/agreementFileLocalization';
import {createAgreementFileLocalizationCollectionResponseFromDiscriminatorValue} from '../../../../models/createAgreementFileLocalizationCollectionResponseFromDiscriminatorValue';
import {createAgreementFileLocalizationFromDiscriminatorValue} from '../../../../models/createAgreementFileLocalizationFromDiscriminatorValue';
import {deserializeIntoAgreementFileLocalization} from '../../../../models/deserializeIntoAgreementFileLocalization';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAgreementFileLocalization} from '../../../../models/serializeAgreementFileLocalization';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AgreementFileLocalizationItemRequestBuilder} from './item/agreementFileLocalizationItemRequestBuilder';
import {LocalizationsRequestBuilderGetRequestConfiguration} from './localizationsRequestBuilderGetRequestConfiguration';
import {LocalizationsRequestBuilderPostRequestConfiguration} from './localizationsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the localizations property of the microsoft.graph.agreementFile entity.
 */
export class LocalizationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the localizations property of the microsoft.graph.agreementFile entity.
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
     * Instantiates a new LocalizationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/agreements/{agreement%2Did}/file/localizations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the default and localized agreement files.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementFileLocalizationCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/agreementfile-list-localizations?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LocalizationsRequestBuilderGetRequestConfiguration | undefined) : Promise<AgreementFileLocalizationCollectionResponse | undefined> {
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
     * Create new navigation property to localizations for agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementFileLocalization
     */
    public post(body: AgreementFileLocalization | undefined, requestConfiguration?: LocalizationsRequestBuilderPostRequestConfiguration | undefined) : Promise<AgreementFileLocalization | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * Get a list of the default and localized agreement files.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LocalizationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to localizations for agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AgreementFileLocalization | undefined, requestConfiguration?: LocalizationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAgreementFileLocalization);
        return requestInfo;
    };
}
