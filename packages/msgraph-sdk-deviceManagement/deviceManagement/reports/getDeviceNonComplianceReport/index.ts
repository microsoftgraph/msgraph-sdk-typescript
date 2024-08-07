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
 * @returns {GetDeviceNonComplianceReportPostRequestBody}
 */
export function createGetDeviceNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetDeviceNonComplianceReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoGetDeviceNonComplianceReportPostRequestBody(getDeviceNonComplianceReportPostRequestBody: Partial<GetDeviceNonComplianceReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getDeviceNonComplianceReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getDeviceNonComplianceReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getDeviceNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getDeviceNonComplianceReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getDeviceNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getDeviceNonComplianceReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getDeviceNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getDeviceNonComplianceReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getDeviceNonComplianceReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getDeviceNonComplianceReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetDeviceNonComplianceReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The filter property
     */
    filter?: string;
    /**
     * The groupBy property
     */
    groupBy?: string[];
    /**
     * The name property
     */
    name?: string;
    /**
     * The orderBy property
     */
    orderBy?: string[];
    /**
     * The search property
     */
    search?: string;
    /**
     * The select property
     */
    select?: string[];
    /**
     * The sessionId property
     */
    sessionId?: string;
    /**
     * The skip property
     */
    skip?: number;
    /**
     * The top property
     */
    top?: number;
}
/**
 * Provides operations to call the getDeviceNonComplianceReport method.
 */
export interface GetDeviceNonComplianceReportRequestBuilder extends BaseRequestBuilder<GetDeviceNonComplianceReportRequestBuilder> {
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-reporting-devicemanagementreports-getdevicenoncompliancereport?view=graph-rest-1.0|Find more info here}
     */
     post(body: GetDeviceNonComplianceReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetDeviceNonComplianceReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetDeviceNonComplianceReportPostRequestBody(writer: SerializationWriter, getDeviceNonComplianceReportPostRequestBody: Partial<GetDeviceNonComplianceReportPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("filter", getDeviceNonComplianceReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getDeviceNonComplianceReportPostRequestBody.groupBy);
    writer.writeStringValue("name", getDeviceNonComplianceReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getDeviceNonComplianceReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getDeviceNonComplianceReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getDeviceNonComplianceReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getDeviceNonComplianceReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getDeviceNonComplianceReportPostRequestBody.skip);
    writer.writeNumberValue("top", getDeviceNonComplianceReportPostRequestBody.top);
    writer.writeAdditionalData(getDeviceNonComplianceReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetDeviceNonComplianceReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getDeviceNonComplianceReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetDeviceNonComplianceReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetDeviceNonComplianceReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetDeviceNonComplianceReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
