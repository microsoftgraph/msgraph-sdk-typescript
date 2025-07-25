/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAssignmentOrderFromDiscriminatorValue, serializeAssignmentOrder, type AssignmentOrder } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SetOrderPostRequestBody}
 */
// @ts-ignore
export function createSetOrderPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSetOrderPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param SetOrderPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSetOrderPostRequestBody(setOrderPostRequestBody: Partial<SetOrderPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { setOrderPostRequestBody.backingStoreEnabled = true; },
        "newAssignmentOrder": n => { setOrderPostRequestBody.newAssignmentOrder = n.getObjectValue<AssignmentOrder>(createAssignmentOrderFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SetOrderPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSetOrderPostRequestBody(writer: SerializationWriter, setOrderPostRequestBody: Partial<SetOrderPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!setOrderPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue<AssignmentOrder>("newAssignmentOrder", setOrderPostRequestBody.newAssignmentOrder, serializeAssignmentOrder);
    writer.writeAdditionalData(setOrderPostRequestBody.additionalData);
}
export interface SetOrderPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The newAssignmentOrder property
     */
    newAssignmentOrder?: AssignmentOrder | null;
}
/**
 * Provides operations to call the setOrder method.
 */
export interface SetOrderRequestBuilder extends BaseRequestBuilder<SetOrderRequestBuilder> {
    /**
     * Set the order of identityUserFlowAttributeAssignments being collected within a user flow.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/identityuserflowattributeassignment-setorder?view=graph-rest-1.0|Find more info here}
     */
     post(body: SetOrderPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Set the order of identityUserFlowAttributeAssignments being collected within a user flow.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SetOrderPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const SetOrderRequestBuilderUriTemplate = "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/userAttributeAssignments/setOrder";
/**
 * Metadata for all the requests in the request builder.
 */
export const SetOrderRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: SetOrderRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSetOrderPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
