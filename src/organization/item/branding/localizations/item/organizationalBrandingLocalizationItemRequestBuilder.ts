import { createOrganizationalBrandingLocalizationFromDiscriminatorValue } from '../../../../../models/createOrganizationalBrandingLocalizationFromDiscriminatorValue';
import { deserializeIntoOrganizationalBrandingLocalization } from '../../../../../models/deserializeIntoOrganizationalBrandingLocalization';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type OrganizationalBrandingLocalization } from '../../../../../models/organizationalBrandingLocalization';
import { serializeOrganizationalBrandingLocalization } from '../../../../../models/serializeOrganizationalBrandingLocalization';
import { BackgroundImageRequestBuilder } from './backgroundImage/backgroundImageRequestBuilder';
import { BannerLogoRequestBuilder } from './bannerLogo/bannerLogoRequestBuilder';
import { CustomCSSRequestBuilder } from './customCSS/customCSSRequestBuilder';
import { FaviconRequestBuilder } from './favicon/faviconRequestBuilder';
import { HeaderLogoRequestBuilder } from './headerLogo/headerLogoRequestBuilder';
import { type OrganizationalBrandingLocalizationItemRequestBuilderDeleteRequestConfiguration } from './organizationalBrandingLocalizationItemRequestBuilderDeleteRequestConfiguration';
import { type OrganizationalBrandingLocalizationItemRequestBuilderGetRequestConfiguration } from './organizationalBrandingLocalizationItemRequestBuilderGetRequestConfiguration';
import { type OrganizationalBrandingLocalizationItemRequestBuilderPatchRequestConfiguration } from './organizationalBrandingLocalizationItemRequestBuilderPatchRequestConfiguration';
import { SquareLogoRequestBuilder } from './squareLogo/squareLogoRequestBuilder';
import { SquareLogoDarkRequestBuilder } from './squareLogoDark/squareLogoDarkRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the localizations property of the microsoft.graph.organizationalBranding entity.
 */
export class OrganizationalBrandingLocalizationItemRequestBuilder extends BaseRequestBuilder {
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
     * Instantiates a new OrganizationalBrandingLocalizationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/organization/{organization%2Did}/branding/localizations/{organizationalBrandingLocalization%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a localized branding object. To delete the organizationalBrandingLocalization object, all images (Stream types) must first be removed from the object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/organizationalbrandinglocalization-delete?view=graph-rest-1.0|Find more info here}
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
     * Read the properties and relationships of an organizationalBrandingLocalization object. To retrieve a localization branding object, specify the value of id in the URL.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OrganizationalBrandingLocalization
     * @see {@link https://learn.microsoft.com/graph/api/organizationalbrandinglocalization-get?view=graph-rest-1.0|Find more info here}
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
     * Update the properties of an organizationalBrandingLocalization object for a specific localization.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OrganizationalBrandingLocalization
     * @see {@link https://learn.microsoft.com/graph/api/organizationalbrandinglocalization-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: OrganizationalBrandingLocalization, requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<OrganizationalBrandingLocalization | undefined> {
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
     * Delete a localized branding object. To delete the organizationalBrandingLocalization object, all images (Stream types) must first be removed from the object.
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
     * Read the properties and relationships of an organizationalBrandingLocalization object. To retrieve a localization branding object, specify the value of id in the URL.
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
     * Update the properties of an organizationalBrandingLocalization object for a specific localization.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: OrganizationalBrandingLocalization, requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOrganizationalBrandingLocalization);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a OrganizationalBrandingLocalizationItemRequestBuilder
     */
    public withUrl(rawUrl: string) : OrganizationalBrandingLocalizationItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OrganizationalBrandingLocalizationItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
