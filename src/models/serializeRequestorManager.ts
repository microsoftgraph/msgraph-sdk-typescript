import { type RequestorManager } from './requestorManager';
import { serializeSubjectSet } from './serializeSubjectSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRequestorManager(writer: SerializationWriter, requestorManager: RequestorManager | undefined = {} as RequestorManager) : void {
        serializeSubjectSet(writer, requestorManager)
        writer.writeNumberValue("managerLevel", requestorManager.managerLevel);
}
