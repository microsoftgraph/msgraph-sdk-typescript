import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {RequestorManager} from './requestorManager';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRequestorManager(requestorManager: RequestorManager | undefined = {} as RequestorManager) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(requestorManager),
        "managerLevel": n => { requestorManager.managerLevel = n.getNumberValue(); },
    }
}
