import {serializeSubjectSet} from './serializeSubjectSet';
import {TargetManager} from './targetManager';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetManager(writer: SerializationWriter, targetManager: TargetManager | undefined = {} as TargetManager) : void {
        serializeSubjectSet(writer, targetManager)
        writer.writeNumberValue("managerLevel", targetManager.managerLevel);
}
