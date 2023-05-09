import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {TargetManager} from './targetManager';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetManager(targetManager: TargetManager | undefined = {} as TargetManager) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(targetManager),
        "managerLevel": n => { targetManager.managerLevel = n.getNumberValue(); },
    }
}
