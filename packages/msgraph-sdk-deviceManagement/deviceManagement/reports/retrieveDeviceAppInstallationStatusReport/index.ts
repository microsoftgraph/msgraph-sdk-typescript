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
 * @returns {RetrieveDeviceAppInstallationStatusReportPostRequestBody}
 */
// @ts-ignore
export function createRetrieveDeviceAppInstallationStatusReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRetrieveDeviceAppInstallationStatusReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param RetrieveDeviceAppInstallationStatusReportPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRetrieveDeviceAppInstallationStatusReportPostRequestBody(retrieveDeviceAppInstallationStatusReportPostRequestBody: Partial<RetrieveDeviceAppInstallationStatusReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { retrieveDeviceAppInstallationStatusReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { retrieveDeviceAppInstallationStatusReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { retrieveDeviceAppInstallationStatusReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { retrieveDeviceAppInstallationStatusReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { retrieveDeviceAppInstallationStatusReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { retrieveDeviceAppInstallationStatusReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { retrieveDeviceAppInstallationStatusReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { retrieveDeviceAppInstallationStatusReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { retrieveDeviceAppInstallationStatusReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { retrieveDeviceAppInstallationStatusReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface RetrieveDeviceAppInstallationStatusReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the retrieveDeviceAppInstallationStatusReport method.
 */
export interface RetrieveDeviceAppInstallationStatusReportRequestBuilder extends BaseRequestBuilder<RetrieveDeviceAppInstallationStatusReportRequestBuilder> {
    /**
     * Invoke action retrieveDeviceAppInstallationStatusReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: RetrieveDeviceAppInstallationStatusReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action retrieveDeviceAppInstallationStatusReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RetrieveDeviceAppInstallationStatusReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param RetrieveDeviceAppInstallationStatusReportPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRetrieveDeviceAppInstallationStatusReportPostRequestBody(writer: SerializationWriter, retrieveDeviceAppInstallationStatusReportPostRequestBody: Partial<RetrieveDeviceAppInstallationStatusReportPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!retrieveDeviceAppInstallationStatusReportPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", retrieveDeviceAppInstallationStatusReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", retrieveDeviceAppInstallationStatusReportPostRequestBody.groupBy);
    writer.writeStringValue("name", retrieveDeviceAppInstallationStatusReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", retrieveDeviceAppInstallationStatusReportPostRequestBody.orderBy);
    writer.writeStringValue("search", retrieveDeviceAppInstallationStatusReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", retrieveDeviceAppInstallationStatusReportPostRequestBody.select);
    writer.writeStringValue("sessionId", retrieveDeviceAppInstallationStatusReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", retrieveDeviceAppInstallationStatusReportPostRequestBody.skip);
    writer.writeNumberValue("top", retrieveDeviceAppInstallationStatusReportPostRequestBody.top);
    writer.writeAdditionalData(retrieveDeviceAppInstallationStatusReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const RetrieveDeviceAppInstallationStatusReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/retrieveDeviceAppInstallationStatusReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const RetrieveDeviceAppInstallationStatusReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: RetrieveDeviceAppInstallationStatusReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRetrieveDeviceAppInstallationStatusReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
