/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSignInConditionsFromDiscriminatorValue, createSignInContextFromDiscriminatorValue, createSignInIdentityFromDiscriminatorValue, createWhatIfAnalysisResultFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeSignInConditions, serializeSignInContext, serializeSignInIdentity, serializeWhatIfAnalysisResult, type BaseCollectionPaginationCountResponse, type SignInConditions, type SignInContext, type SignInIdentity, type WhatIfAnalysisResult } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EvaluatePostRequestBody}
 */
// @ts-ignore
export function createEvaluatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEvaluatePostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EvaluatePostResponse}
 */
// @ts-ignore
export function createEvaluatePostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEvaluatePostResponse;
}
/**
 * The deserialization information for the current model
 * @param EvaluatePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoEvaluatePostRequestBody(evaluatePostRequestBody: Partial<EvaluatePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "appliedPoliciesOnly": n => { evaluatePostRequestBody.appliedPoliciesOnly = n.getBooleanValue(); },
        "backingStoreEnabled": n => { evaluatePostRequestBody.backingStoreEnabled = true; },
        "signInConditions": n => { evaluatePostRequestBody.signInConditions = n.getObjectValue<SignInConditions>(createSignInConditionsFromDiscriminatorValue); },
        "signInContext": n => { evaluatePostRequestBody.signInContext = n.getObjectValue<SignInContext>(createSignInContextFromDiscriminatorValue); },
        "signInIdentity": n => { evaluatePostRequestBody.signInIdentity = n.getObjectValue<SignInIdentity>(createSignInIdentityFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @param EvaluatePostResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoEvaluatePostResponse(evaluatePostResponse: Partial<EvaluatePostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(evaluatePostResponse),
        "value": n => { evaluatePostResponse.value = n.getCollectionOfObjectValues<WhatIfAnalysisResult>(createWhatIfAnalysisResultFromDiscriminatorValue); },
    }
}
export interface EvaluatePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * The appliedPoliciesOnly property
     */
    appliedPoliciesOnly?: boolean | null;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The signInConditions property
     */
    signInConditions?: SignInConditions | null;
    /**
     * The signInContext property
     */
    signInContext?: SignInContext | null;
    /**
     * The signInIdentity property
     */
    signInIdentity?: SignInIdentity | null;
}
export interface EvaluatePostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WhatIfAnalysisResult[] | null;
}
/**
 * Provides operations to call the evaluate method.
 */
export interface EvaluateRequestBuilder extends BaseRequestBuilder<EvaluateRequestBuilder> {
    /**
     * Evaluates the applicability of Conditional Access Policies in your tenant based on the provided sign-in properties.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EvaluatePostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/conditionalaccessroot-evaluate?view=graph-rest-1.0|Find more info here}
     */
     post(body: EvaluatePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EvaluatePostResponse | undefined>;
    /**
     * Evaluates the applicability of Conditional Access Policies in your tenant based on the provided sign-in properties.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: EvaluatePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param EvaluatePostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeEvaluatePostRequestBody(writer: SerializationWriter, evaluatePostRequestBody: Partial<EvaluatePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!evaluatePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeBooleanValue("appliedPoliciesOnly", evaluatePostRequestBody.appliedPoliciesOnly);
    writer.writeObjectValue<SignInConditions>("signInConditions", evaluatePostRequestBody.signInConditions, serializeSignInConditions);
    writer.writeObjectValue<SignInContext>("signInContext", evaluatePostRequestBody.signInContext, serializeSignInContext);
    writer.writeObjectValue<SignInIdentity>("signInIdentity", evaluatePostRequestBody.signInIdentity, serializeSignInIdentity);
    writer.writeAdditionalData(evaluatePostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param EvaluatePostResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeEvaluatePostResponse(writer: SerializationWriter, evaluatePostResponse: Partial<EvaluatePostResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!evaluatePostResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, evaluatePostResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<WhatIfAnalysisResult>("value", evaluatePostResponse.value, serializeWhatIfAnalysisResult);
}
/**
 * Uri template for the request builder.
 */
export const EvaluateRequestBuilderUriTemplate = "{+baseurl}/identity/conditionalAccess/evaluate";
/**
 * Metadata for all the requests in the request builder.
 */
export const EvaluateRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: EvaluateRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEvaluatePostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEvaluatePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
