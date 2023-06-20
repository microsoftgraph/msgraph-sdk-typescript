import {ApplyDynamicFilterPostRequestBody} from './applyDynamicFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyDynamicFilterPostRequestBody(applyDynamicFilterPostRequestBody: ApplyDynamicFilterPostRequestBody | undefined = {} as ApplyDynamicFilterPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("criteria", applyDynamicFilterPostRequestBody.criteria);
        writer.writeAdditionalData(applyDynamicFilterPostRequestBody.additionalData);
}
