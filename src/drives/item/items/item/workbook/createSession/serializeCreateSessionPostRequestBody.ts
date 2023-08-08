import type {CreateSessionPostRequestBody} from './createSessionPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateSessionPostRequestBody(writer: SerializationWriter, createSessionPostRequestBody: CreateSessionPostRequestBody | undefined = {} as CreateSessionPostRequestBody) : void {
        writer.writeBooleanValue("persistChanges", createSessionPostRequestBody.persistChanges);
        writer.writeAdditionalData(createSessionPostRequestBody.additionalData);
}
