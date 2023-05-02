import {ApplyCustomFilterPostRequestBody} from './applyCustomFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyCustomFilterPostRequestBody(writer: SerializationWriter, applyCustomFilterPostRequestBody: ApplyCustomFilterPostRequestBody | undefined = {} as ApplyCustomFilterPostRequestBody) : void {
        writer.writeStringValue("criteria1", applyCustomFilterPostRequestBody.criteria1);
        writer.writeStringValue("criteria2", applyCustomFilterPostRequestBody.criteria2);
        writer.writeStringValue("oper", applyCustomFilterPostRequestBody.oper);
        writer.writeAdditionalData(applyCustomFilterPostRequestBody.additionalData);
}
