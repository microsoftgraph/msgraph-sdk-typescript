import { deserializeIntoSubjectSet } from './deserializeIntoSubjectSet';
import { type TargetManager } from './targetManager';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetManager(targetManager: TargetManager | undefined = {} as TargetManager) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(targetManager),
        "managerLevel": n => { targetManager.managerLevel = n.getNumberValue(); },
    }
}
