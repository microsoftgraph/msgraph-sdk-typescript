import { type SetPriorityPostRequestBody } from './setPriorityPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSetPriorityPostRequestBody(writer: SerializationWriter, setPriorityPostRequestBody: SetPriorityPostRequestBody | undefined = {} as SetPriorityPostRequestBody) : void {
        writer.writeNumberValue("priority", setPriorityPostRequestBody.priority);
        writer.writeAdditionalData(setPriorityPostRequestBody.additionalData);
}
