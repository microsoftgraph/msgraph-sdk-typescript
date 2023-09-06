import { createOrganizationalBrandingFromDiscriminatorValue } from '../../../models/createOrganizationalBrandingFromDiscriminatorValue';
import { deserializeIntoOrganizationalBranding } from '../../../models/deserializeIntoOrganizationalBranding';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { type OrganizationalBranding } from '../../../models/organizationalBranding';
import { serializeOrganizationalBranding } from '../../../models/serializeOrganizationalBranding';
import { BackgroundImageRequestBuilder } from './backgroundImage/backgroundImageRequestBuilder';
import { BannerLogoRequestBuilder } from './bannerLogo/bannerLogoRequestBuilder';
import { type BrandingRequestBuilderDeleteRequestConfiguration } from './brandingRequestBuilderDeleteRequestConfiguration';
import { type BrandingRequestBuilderGetRequestConfiguration } from './brandingRequestBuilderGetRequestConfiguration';
import { type BrandingRequestBuilderPatchRequestConfiguration } from './brandingRequestBuilderPatchRequestConfiguration';
import { CustomCSSRequestBuilder } from './customCSS/customCSSRequestBuilder';
import { FaviconRequestBuilder } from './favicon/faviconRequestBuilder';
import { HeaderLogoRequestBuilder } from './headerLogo/headerLogoRequestBuilder';
import { LocalizationsRequestBuilder } from './localizations/localizationsRequestBuilder';
import { SquareLogoRequestBuilder } from './squareLogo/squareLogoRequestBuilder';
import { SquareLogoDarkRequestBuilder } from './squareLogoDark/squareLogoDarkRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the branding property of the microsoft.graph.organization entity.
 */
export class BrandingRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the media for the organization entity.
     */
    public get backgroundImage(): BackgroundImageRequestBuilder {
        return new BackgroundImageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the organization entity.
     */
    public get bannerLogo(): BannerLogoRequestBuilder {
        return new BannerLogoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the organization entity.
     */
    public get customCSS(): CustomCSSRequestBuilder {
        return new CustomCSSRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the organization entity.
     */
    public get favicon(): FaviconRequestBuilder {
        return new FaviconRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the organization entity.
     */
    public get headerLogo(): HeaderLogoRequestBuilder {
        return new HeaderLogoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the localizations property of the microsoft.graph.organizationalBranding entity.
     */
    public get localizations(): LocalizationsRequestBuilder {
        return new LocalizationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the organization entity.
     */
    public get squareLogo(): SquareLogoRequestBuilder {
        return new SquareLogoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the media for the organization entity.
     */
    public get squareLogoDark(): SquareLogoDarkRequestBuilder {
        return new SquareLogoDarkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new BrandingRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/organization/{organization%2Did}/branding{?%24select,%24expand}");
    };
    /**
     * Delete the default organizational branding object. To delete the organizationalBranding object, all images (Stream types) must first be removed from the object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/organizationalbranding-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: BrandingRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the default organizational branding object, if the Accept-Language header is set to 0 or default. If no default organizational branding object exists, this method returns a 404 Not Found error. If the Accept-Language header is set to an existing locale identified by the value of its id, this method retrieves the branding for the specified locale. This method retrieves only non-Stream properties, for example, usernameHintText and signInPageText. To retrieve Stream types of the default branding, for example, bannerLogo and backgroundImage, use the GET organizationalBrandingLocalization method.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OrganizationalBranding
     * @see {@link https://learn.microsoft.com/graph/api/organizationalbranding-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: BrandingRequestBuilderGetRequestConfiguration | undefined) : Promise<OrganizationalBranding | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OrganizationalBranding>(requestInfo, createOrganizationalBrandingFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of the default branding object specified by the organizationalBranding resource.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OrganizationalBranding
     * @see {@link https://learn.microsoft.com/graph/api/organizationalbranding-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: OrganizationalBranding, requestConfiguration?: BrandingRequestBuilderPatchRequestConfiguration | undefined) : Promise<OrganizationalBranding | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OrganizationalBranding>(requestInfo, createOrganizationalBrandingFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete the default organizational branding object. To delete the organizationalBranding object, all images (Stream types) must first be removed from the object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: BrandingRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the default organizational branding object, if the Accept-Language header is set to 0 or default. If no default organizational branding object exists, this method returns a 404 Not Found error. If the Accept-Language header is set to an existing locale identified by the value of its id, this method retrieves the branding for the specified locale. This method retrieves only non-Stream properties, for example, usernameHintText and signInPageText. To retrieve Stream types of the default branding, for example, bannerLogo and backgroundImage, use the GET organizationalBrandingLocalization method.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: BrandingRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of the default branding object specified by the organizationalBranding resource.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: OrganizationalBranding, requestConfiguration?: BrandingRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOrganizationalBranding);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a brandingRequestBuilder
     */
    public withUrl(rawUrl: string) : BrandingRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new BrandingRequestBuilder(rawUrl, this.requestAdapter);
    };
}
