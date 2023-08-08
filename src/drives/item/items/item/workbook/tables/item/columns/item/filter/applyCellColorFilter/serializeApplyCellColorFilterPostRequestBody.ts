import type {ApplyCellColorFilterPostRequestBody} from './applyCellColorFilterPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyCellColorFilterPostRequestBody(writer: SerializationWriter, applyCellColorFilterPostRequestBody: ApplyCellColorFilterPostRequestBody | undefined = {} as ApplyCellColorFilterPostRequestBody) : void {
        writer.writeStringValue("color", applyCellColorFilterPostRequestBody.color);
        writer.writeAdditionalData(applyCellColorFilterPostRequestBody.additionalData);
}
