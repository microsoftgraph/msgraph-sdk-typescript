import {AssignedTrainingInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignedTrainingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignedTrainingInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignedTrainingInfo();
}
