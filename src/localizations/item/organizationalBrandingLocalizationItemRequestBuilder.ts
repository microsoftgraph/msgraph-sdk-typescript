import {createOrganizationalBrandingLocalizationFromDiscriminatorValue} from '../../models/createOrganizationalBrandingLocalizationFromDiscriminatorValue';
import {deserializeIntoOrganizationalBrandingLocalization} from '../../models/deserializeIntoOrganizationalBrandingLocalization';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {OrganizationalBrandingLocalization} from '../../models/organizationalBrandingLocalization';
import {serializeOrganizationalBrandingLocalization} from '../../models/serializeOrganizationalBrandingLocalization';
import {BackgroundImageRequestBuilder} from './backgroundImage/backgroundImageRequestBuilder';
import {BannerLogoRequestBuilder} from './bannerLogo/bannerLogoRequestBuilder';
import {CustomCSSRequestBuilder} from './customCSS/customCSSRequestBuilder';
import {FaviconRequestBuilder} from './favicon/faviconRequestBuilder';
import {HeaderLogoRequestBuilder} from './headerLogo/headerLogoRequestBuilder';
import {OrganizationalBrandingLocalizationItemRequestBuilderDeleteRequestConfiguration} from './organizationalBrandingLocalizationItemRequestBuilderDeleteRequestConfiguration';
import {OrganizationalBrandingLocalizationItemRequestBuilderGetRequestConfiguration} from './organizationalBrandingLocalizationItemRequestBuilderGetRequestConfiguration';
import {OrganizationalBrandingLocalizationItemRequestBuilderPatchRequestConfiguration} from './organizationalBrandingLocalizationItemRequestBuilderPatchRequestConfiguration';
import {SquareLogoRequestBuilder} from './squareLogo/squareLogoRequestBuilder';
import {SquareLogoDarkRequestBuilder} from './squareLogoDark/squareLogoDarkRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of organizationalBrandingLocalization entities.
 */
export class OrganizationalBrandingLocalizationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the media for the organizationalBrandingLocalization entity.
     */
    public get backgroundImage(): BackgroundImageRequestBuilder {
        return new BackgroundImageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the organizationalBrandingLocalization entity.
     */
    public get bannerLogo(): BannerLogoRequestBuilder {
        return new BannerLogoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the organizationalBrandingLocalization entity.
     */
    public get customCSS(): CustomCSSRequestBuilder {
        return new CustomCSSRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the organizationalBrandingLocalization entity.
     */
    public get favicon(): FaviconRequestBuilder {
        return new FaviconRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the organizationalBrandingLocalization entity.
     */
    public get headerLogo(): HeaderLogoRequestBuilder {
        return new HeaderLogoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the organizationalBrandingLocalization entity.
     */
    public get squareLogo(): SquareLogoRequestBuilder {
        return new SquareLogoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the organizationalBrandingLocalization entity.
     */
    public get squareLogoDark(): SquareLogoDarkRequestBuilder {
        return new SquareLogoDarkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new OrganizationalBrandingLocalizationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/localizations/{organizationalBrandingLocalization%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete entity from localizations
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Get entity from localizations by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OrganizationalBrandingLocalization
     */
    public get(requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<OrganizationalBrandingLocalization | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OrganizationalBrandingLocalization>(requestInfo, createOrganizationalBrandingLocalizationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update entity in localizations
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OrganizationalBrandingLocalization
     */
    public patch(body: OrganizationalBrandingLocalization | undefined, requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<OrganizationalBrandingLocalization | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OrganizationalBrandingLocalization>(requestInfo, createOrganizationalBrandingLocalizationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete entity from localizations
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Get entity from localizations by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update entity in localizations
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: OrganizationalBrandingLocalization | undefined, requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeOrganizationalBrandingLocalization);
        return requestInfo;
    };
}
