import {serializeSubjectSet} from './serializeSubjectSet';
import type {TargetManager} from './targetManager';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetManager(writer: SerializationWriter, targetManager: TargetManager | undefined = {} as TargetManager) : void {
        serializeSubjectSet(writer, targetManager)
        writer.writeNumberValue("managerLevel", targetManager.managerLevel);
}
