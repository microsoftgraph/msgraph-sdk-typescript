import type {ApplyDynamicFilterPostRequestBody} from './applyDynamicFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyDynamicFilterPostRequestBody(writer: SerializationWriter, applyDynamicFilterPostRequestBody: ApplyDynamicFilterPostRequestBody | undefined = {} as ApplyDynamicFilterPostRequestBody) : void {
        writer.writeStringValue("criteria", applyDynamicFilterPostRequestBody.criteria);
        writer.writeAdditionalData(applyDynamicFilterPostRequestBody.additionalData);
}
