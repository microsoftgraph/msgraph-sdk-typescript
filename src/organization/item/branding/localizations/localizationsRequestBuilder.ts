import {OrganizationalBrandingLocalizationCollectionResponse} from '../../../../models/';
import {createOrganizationalBrandingLocalizationCollectionResponseFromDiscriminatorValue} from '../../../../models/createOrganizationalBrandingLocalizationCollectionResponseFromDiscriminatorValue';
import {createOrganizationalBrandingLocalizationFromDiscriminatorValue} from '../../../../models/createOrganizationalBrandingLocalizationFromDiscriminatorValue';
import {deserializeIntoOrganizationalBrandingLocalization} from '../../../../models/deserializeIntoOrganizationalBrandingLocalization';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import type {OrganizationalBrandingLocalization} from '../../../../models/organizationalBrandingLocalization';
import {serializeOrganizationalBrandingLocalization} from '../../../../models/serializeOrganizationalBrandingLocalization';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {OrganizationalBrandingLocalizationItemRequestBuilder} from './item/organizationalBrandingLocalizationItemRequestBuilder';
import {LocalizationsRequestBuilderGetRequestConfiguration} from './localizationsRequestBuilderGetRequestConfiguration';
import {LocalizationsRequestBuilderPostRequestConfiguration} from './localizationsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the localizations property of the microsoft.graph.organizationalBranding entity.
 */
export class LocalizationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the localizations property of the microsoft.graph.organizationalBranding entity.
     * @param organizationalBrandingLocalizationId Unique identifier of the item
     * @returns a OrganizationalBrandingLocalizationItemRequestBuilder
     */
    public byOrganizationalBrandingLocalizationId(organizationalBrandingLocalizationId: string) : OrganizationalBrandingLocalizationItemRequestBuilder {
        if(!organizationalBrandingLocalizationId) throw new Error("organizationalBrandingLocalizationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["organizationalBrandingLocalization%2Did"] = organizationalBrandingLocalizationId
        return new OrganizationalBrandingLocalizationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new LocalizationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/organization/{organization%2Did}/branding/localizations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve all localization branding objects, including the default branding.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OrganizationalBrandingLocalizationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/organizationalbranding-list-localizations?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LocalizationsRequestBuilderGetRequestConfiguration | undefined) : Promise<OrganizationalBrandingLocalizationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OrganizationalBrandingLocalizationCollectionResponse>(requestInfo, createOrganizationalBrandingLocalizationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new organizationalBrandingLocalization object. This creates a localized branding and at the same time, the default branding if it doesn't exist. The default branding is created only once. It's loaded when a localized branding isn't configured for the user's browser language. To retrieve the default branding, see Get branding.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OrganizationalBrandingLocalization
     * @see {@link https://learn.microsoft.com/graph/api/organizationalbranding-post-localizations?view=graph-rest-1.0|Find more info here}
     */
    public post(body: OrganizationalBrandingLocalization, requestConfiguration?: LocalizationsRequestBuilderPostRequestConfiguration | undefined) : Promise<OrganizationalBrandingLocalization | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OrganizationalBrandingLocalization>(requestInfo, createOrganizationalBrandingLocalizationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve all localization branding objects, including the default branding.
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
     * Create a new organizationalBrandingLocalization object. This creates a localized branding and at the same time, the default branding if it doesn't exist. The default branding is created only once. It's loaded when a localized branding isn't configured for the user's browser language. To retrieve the default branding, see Get branding.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: OrganizationalBrandingLocalization, requestConfiguration?: LocalizationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOrganizationalBrandingLocalization);
        return requestInfo;
    };
}
