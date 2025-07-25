/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, type UntypedNode } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SetDataPostRequestBody}
 */
// @ts-ignore
export function createSetDataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSetDataPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param SetDataPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSetDataPostRequestBody(setDataPostRequestBody: Partial<SetDataPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { setDataPostRequestBody.backingStoreEnabled = true; },
        "seriesBy": n => { setDataPostRequestBody.seriesBy = n.getStringValue(); },
        "sourceData": n => { setDataPostRequestBody.sourceData = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SetDataPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSetDataPostRequestBody(writer: SerializationWriter, setDataPostRequestBody: Partial<SetDataPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!setDataPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("seriesBy", setDataPostRequestBody.seriesBy);
    writer.writeObjectValue("sourceData", setDataPostRequestBody.sourceData);
    writer.writeAdditionalData(setDataPostRequestBody.additionalData);
}
export interface SetDataPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The seriesBy property
     */
    seriesBy?: string | null;
    /**
     * The sourceData property
     */
    sourceData?: UntypedNode | null;
}
/**
 * Provides operations to call the setData method.
 */
export interface SetDataRequestBuilder extends BaseRequestBuilder<SetDataRequestBuilder> {
    /**
     * Resets the source data for the chart.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/chart-setdata?view=graph-rest-1.0|Find more info here}
     */
     post(body: SetDataPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Resets the source data for the chart.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SetDataPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const SetDataRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/setData";
/**
 * Metadata for all the requests in the request builder.
 */
export const SetDataRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: SetDataRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSetDataPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
