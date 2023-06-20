import {CreateSessionPostRequestBody} from './createSessionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateSessionPostRequestBody(createSessionPostRequestBody: CreateSessionPostRequestBody | undefined = {} as CreateSessionPostRequestBody, writer: SerializationWriter) : void {
        writer.writeBooleanValue("persistChanges", createSessionPostRequestBody.persistChanges);
        writer.writeAdditionalData(createSessionPostRequestBody.additionalData);
}
