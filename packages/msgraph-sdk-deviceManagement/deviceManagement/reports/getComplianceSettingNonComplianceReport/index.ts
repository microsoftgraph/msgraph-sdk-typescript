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
 * @returns {GetComplianceSettingNonComplianceReportPostRequestBody}
 */
// @ts-ignore
export function createGetComplianceSettingNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetComplianceSettingNonComplianceReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param GetComplianceSettingNonComplianceReportPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetComplianceSettingNonComplianceReportPostRequestBody(getComplianceSettingNonComplianceReportPostRequestBody: Partial<GetComplianceSettingNonComplianceReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getComplianceSettingNonComplianceReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getComplianceSettingNonComplianceReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getComplianceSettingNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getComplianceSettingNonComplianceReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getComplianceSettingNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getComplianceSettingNonComplianceReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getComplianceSettingNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getComplianceSettingNonComplianceReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getComplianceSettingNonComplianceReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getComplianceSettingNonComplianceReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetComplianceSettingNonComplianceReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the getComplianceSettingNonComplianceReport method.
 */
export interface GetComplianceSettingNonComplianceReportRequestBuilder extends BaseRequestBuilder<GetComplianceSettingNonComplianceReportRequestBuilder> {
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-reporting-devicemanagementreports-getcompliancesettingnoncompliancereport?view=graph-rest-1.0|Find more info here}
     */
     post(body: GetComplianceSettingNonComplianceReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetComplianceSettingNonComplianceReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GetComplianceSettingNonComplianceReportPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetComplianceSettingNonComplianceReportPostRequestBody(writer: SerializationWriter, getComplianceSettingNonComplianceReportPostRequestBody: Partial<GetComplianceSettingNonComplianceReportPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getComplianceSettingNonComplianceReportPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", getComplianceSettingNonComplianceReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getComplianceSettingNonComplianceReportPostRequestBody.groupBy);
    writer.writeStringValue("name", getComplianceSettingNonComplianceReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getComplianceSettingNonComplianceReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getComplianceSettingNonComplianceReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getComplianceSettingNonComplianceReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getComplianceSettingNonComplianceReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getComplianceSettingNonComplianceReportPostRequestBody.skip);
    writer.writeNumberValue("top", getComplianceSettingNonComplianceReportPostRequestBody.top);
    writer.writeAdditionalData(getComplianceSettingNonComplianceReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetComplianceSettingNonComplianceReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getComplianceSettingNonComplianceReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetComplianceSettingNonComplianceReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetComplianceSettingNonComplianceReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetComplianceSettingNonComplianceReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
