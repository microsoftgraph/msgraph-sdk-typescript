import {UnmutePostRequestBody} from './unmutePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnmutePostRequestBody(writer: SerializationWriter, unmutePostRequestBody: UnmutePostRequestBody | undefined = {} as UnmutePostRequestBody) : void {
        writer.writeStringValue("clientContext", unmutePostRequestBody.clientContext);
        writer.writeAdditionalData(unmutePostRequestBody.additionalData);
}
