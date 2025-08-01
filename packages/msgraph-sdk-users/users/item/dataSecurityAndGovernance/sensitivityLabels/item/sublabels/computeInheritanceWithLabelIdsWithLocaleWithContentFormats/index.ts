/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSensitivityLabelFromDiscriminatorValue, type SensitivityLabel } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the computeInheritance method.
 */
export interface ComputeInheritanceWithLabelIdsWithLocaleWithContentFormatsRequestBuilder extends BaseRequestBuilder<ComputeInheritanceWithLabelIdsWithLocaleWithContentFormatsRequestBuilder> {
    /**
     * Calculate the sensitivity label that should be inherited by an output artifact, given a set of sensitivity labels from input or referenced artifacts.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SensitivityLabel>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/sensitivitylabel-computeinheritance?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SensitivityLabel | undefined>;
    /**
     * Calculate the sensitivity label that should be inherited by an output artifact, given a set of sensitivity labels from input or referenced artifacts.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const ComputeInheritanceWithLabelIdsWithLocaleWithContentFormatsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel%2Did}/sublabels/computeInheritance(labelIds={labelIds},locale='{locale}',contentFormats={contentFormats})";
/**
 * Metadata for all the requests in the request builder.
 */
export const ComputeInheritanceWithLabelIdsWithLocaleWithContentFormatsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ComputeInheritanceWithLabelIdsWithLocaleWithContentFormatsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSensitivityLabelFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
