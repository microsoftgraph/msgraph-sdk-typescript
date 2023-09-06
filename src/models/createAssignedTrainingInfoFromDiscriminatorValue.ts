import { deserializeIntoAssignedTrainingInfo } from './deserializeIntoAssignedTrainingInfo';
import { type AssignedTrainingInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAssignedTrainingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignedTrainingInfo;
}
