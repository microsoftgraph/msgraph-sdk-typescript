import {OrganizationalBranding} from '../../../models/';
import {createOrganizationalBrandingFromDiscriminatorValue} from '../../../models/createOrganizationalBrandingFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {BackgroundImageRequestBuilder} from './backgroundImage/backgroundImageRequestBuilder';
import {BannerLogoRequestBuilder} from './bannerLogo/bannerLogoRequestBuilder';
import {BrandingRequestBuilderDeleteRequestConfiguration} from './brandingRequestBuilderDeleteRequestConfiguration';
import {BrandingRequestBuilderGetRequestConfiguration} from './brandingRequestBuilderGetRequestConfiguration';
import {BrandingRequestBuilderPatchRequestConfiguration} from './brandingRequestBuilderPatchRequestConfiguration';
import {LocalizationsRequestBuilder} from './localizations/localizationsRequestBuilder';
import {SquareLogoRequestBuilder} from './squareLogo/squareLogoRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the branding property of the microsoft.graph.organization entity.
 */
export class BrandingRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the media for the organization entity. */
    public get backgroundImage(): BackgroundImageRequestBuilder {
        return new BackgroundImageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the media for the organization entity. */
    public get bannerLogo(): BannerLogoRequestBuilder {
        return new BannerLogoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the localizations property of the microsoft.graph.organizationalBranding entity. */
    public get localizations(): LocalizationsRequestBuilder {
        return new LocalizationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the media for the organization entity. */
    public get squareLogo(): SquareLogoRequestBuilder {
        return new SquareLogoRequestBuilder(this.pathParameters, this.requestAdapter);
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
     * Delete navigation property branding for organization
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: BrandingRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Branding for the organization. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OrganizationalBranding
     */
    public get(requestConfiguration?: BrandingRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OrganizationalBranding | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<OrganizationalBranding>(requestInfo, createOrganizationalBrandingFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property branding in organization
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OrganizationalBranding
     */
    public patch(body: OrganizationalBranding | undefined, requestConfiguration?: BrandingRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OrganizationalBranding | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<OrganizationalBranding>(requestInfo, createOrganizationalBrandingFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property branding for organization
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
     * Branding for the organization. Nullable.
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
     * Update the navigation property branding in organization
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: OrganizationalBranding | undefined, requestConfiguration?: BrandingRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
