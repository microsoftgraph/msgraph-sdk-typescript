import {SetPriorityPostRequestBody} from './setPriorityPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetPriorityPostRequestBody(writer: SerializationWriter, setPriorityPostRequestBody: SetPriorityPostRequestBody | undefined = {} as SetPriorityPostRequestBody) : void {
        writer.writeNumberValue("priority", setPriorityPostRequestBody.priority);
        writer.writeAdditionalData(setPriorityPostRequestBody.additionalData);
}
