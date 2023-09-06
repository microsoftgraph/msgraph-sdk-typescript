import { deserializeIntoSubjectSet } from './deserializeIntoSubjectSet';
import { type RequestorManager } from './requestorManager';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRequestorManager(requestorManager: RequestorManager | undefined = {} as RequestorManager) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(requestorManager),
        "managerLevel": n => { requestorManager.managerLevel = n.getNumberValue(); },
    }
}
