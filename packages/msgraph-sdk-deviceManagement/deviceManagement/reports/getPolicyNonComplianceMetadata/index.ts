/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetPolicyNonComplianceMetadataPostRequestBody}
 */
// @ts-ignore
export function createGetPolicyNonComplianceMetadataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetPolicyNonComplianceMetadataPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param GetPolicyNonComplianceMetadataPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetPolicyNonComplianceMetadataPostRequestBody(getPolicyNonComplianceMetadataPostRequestBody: Partial<GetPolicyNonComplianceMetadataPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getPolicyNonComplianceMetadataPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getPolicyNonComplianceMetadataPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getPolicyNonComplianceMetadataPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getPolicyNonComplianceMetadataPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getPolicyNonComplianceMetadataPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getPolicyNonComplianceMetadataPostRequestBody.search = n.getStringValue(); },
        "select": n => { getPolicyNonComplianceMetadataPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getPolicyNonComplianceMetadataPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getPolicyNonComplianceMetadataPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getPolicyNonComplianceMetadataPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetPolicyNonComplianceMetadataPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The filter property
     */
    filter?: string | null;
    /**
     * The groupBy property
     */
    groupBy?: string[] | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The orderBy property
     */
    orderBy?: string[] | null;
    /**
     * The search property
     */
    search?: string | null;
    /**
     * The select property
     */
    select?: string[] | null;
    /**
     * The sessionId property
     */
    sessionId?: string | null;
    /**
     * The skip property
     */
    skip?: number | null;
    /**
     * The top property
     */
    top?: number | null;
}
/**
 * Provides operations to call the getPolicyNonComplianceMetadata method.
 */
export interface GetPolicyNonComplianceMetadataRequestBuilder extends BaseRequestBuilder<GetPolicyNonComplianceMetadataRequestBuilder> {
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-reporting-devicemanagementreports-getpolicynoncompliancemetadata?view=graph-rest-1.0|Find more info here}
     */
     post(body: GetPolicyNonComplianceMetadataPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetPolicyNonComplianceMetadataPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GetPolicyNonComplianceMetadataPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetPolicyNonComplianceMetadataPostRequestBody(writer: SerializationWriter, getPolicyNonComplianceMetadataPostRequestBody: Partial<GetPolicyNonComplianceMetadataPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getPolicyNonComplianceMetadataPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", getPolicyNonComplianceMetadataPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getPolicyNonComplianceMetadataPostRequestBody.groupBy);
    writer.writeStringValue("name", getPolicyNonComplianceMetadataPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getPolicyNonComplianceMetadataPostRequestBody.orderBy);
    writer.writeStringValue("search", getPolicyNonComplianceMetadataPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getPolicyNonComplianceMetadataPostRequestBody.select);
    writer.writeStringValue("sessionId", getPolicyNonComplianceMetadataPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getPolicyNonComplianceMetadataPostRequestBody.skip);
    writer.writeNumberValue("top", getPolicyNonComplianceMetadataPostRequestBody.top);
    writer.writeAdditionalData(getPolicyNonComplianceMetadataPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetPolicyNonComplianceMetadataRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getPolicyNonComplianceMetadata";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetPolicyNonComplianceMetadataRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetPolicyNonComplianceMetadataRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetPolicyNonComplianceMetadataPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
