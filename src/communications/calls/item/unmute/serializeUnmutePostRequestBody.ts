import { type UnmutePostRequestBody } from './unmutePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnmutePostRequestBody(writer: SerializationWriter, unmutePostRequestBody: UnmutePostRequestBody | undefined = {} as UnmutePostRequestBody) : void {
        writer.writeStringValue("clientContext", unmutePostRequestBody.clientContext);
        writer.writeAdditionalData(unmutePostRequestBody.additionalData);
}
