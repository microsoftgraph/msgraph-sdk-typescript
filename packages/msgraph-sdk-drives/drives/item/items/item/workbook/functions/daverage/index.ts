/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, type UntypedNode } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {DaveragePostRequestBody}
 */
// @ts-ignore
export function createDaveragePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDaveragePostRequestBody;
}
export interface DaveragePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The criteria property
     */
    criteria?: UntypedNode | null;
    /**
     * The database property
     */
    database?: UntypedNode | null;
    /**
     * The field property
     */
    field?: UntypedNode | null;
}
/**
 * Provides operations to call the daverage method.
 */
export interface DaverageRequestBuilder extends BaseRequestBuilder<DaverageRequestBuilder> {
    /**
     * Invoke action daverage
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: DaveragePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action daverage
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DaveragePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The deserialization information for the current model
 * @param DaveragePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoDaveragePostRequestBody(daveragePostRequestBody: Partial<DaveragePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { daveragePostRequestBody.backingStoreEnabled = true; },
        "criteria": n => { daveragePostRequestBody.criteria = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "database": n => { daveragePostRequestBody.database = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "field": n => { daveragePostRequestBody.field = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param DaveragePostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeDaveragePostRequestBody(writer: SerializationWriter, daveragePostRequestBody: Partial<DaveragePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!daveragePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("criteria", daveragePostRequestBody.criteria);
    writer.writeObjectValue("database", daveragePostRequestBody.database);
    writer.writeObjectValue("field", daveragePostRequestBody.field);
    writer.writeAdditionalData(daveragePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const DaverageRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/daverage";
/**
 * Metadata for all the requests in the request builder.
 */
export const DaverageRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: DaverageRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDaveragePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
