import { type ApplyDynamicFilterPostRequestBody } from './applyDynamicFilterPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApplyDynamicFilterPostRequestBody(writer: SerializationWriter, applyDynamicFilterPostRequestBody: ApplyDynamicFilterPostRequestBody | undefined = {} as ApplyDynamicFilterPostRequestBody) : void {
        writer.writeStringValue("criteria", applyDynamicFilterPostRequestBody.criteria);
        writer.writeAdditionalData(applyDynamicFilterPostRequestBody.additionalData);
}
