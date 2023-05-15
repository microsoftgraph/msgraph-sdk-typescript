import {deserializeIntoAssignedTrainingInfo} from './deserializeIntoAssignedTrainingInfo';
import {AssignedTrainingInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignedTrainingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignedTrainingInfo;
}
