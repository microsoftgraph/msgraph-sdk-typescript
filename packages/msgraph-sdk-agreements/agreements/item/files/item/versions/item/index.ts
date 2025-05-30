/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAgreementFileVersionFromDiscriminatorValue, serializeAgreementFileVersion, type AgreementFileVersion } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the versions property of the microsoft.graph.agreementFileLocalization entity.
 */
export interface AgreementFileVersionItemRequestBuilder extends BaseRequestBuilder<AgreementFileVersionItemRequestBuilder> {
    /**
     * Delete navigation property versions for agreements
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AgreementFileVersion>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AgreementFileVersionItemRequestBuilderGetQueryParameters> | undefined) : Promise<AgreementFileVersion | undefined>;
    /**
     * Update the navigation property versions in agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AgreementFileVersion>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: AgreementFileVersion, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AgreementFileVersion | undefined>;
    /**
     * Delete navigation property versions for agreements
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AgreementFileVersionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property versions in agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AgreementFileVersion, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
 */
export interface AgreementFileVersionItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const AgreementFileVersionItemRequestBuilderUriTemplate = "{+baseurl}/agreements/{agreement%2Did}/files/{agreementFileLocalization%2Did}/versions/{agreementFileVersion%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AgreementFileVersionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AgreementFileVersionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AgreementFileVersionItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AgreementFileVersionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAgreementFileVersionFromDiscriminatorValue,
        queryParametersMapper: AgreementFileVersionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AgreementFileVersionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAgreementFileVersionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAgreementFileVersion,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
