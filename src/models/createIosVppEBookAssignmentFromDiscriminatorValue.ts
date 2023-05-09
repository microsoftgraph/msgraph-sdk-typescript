import {deserializeIntoIosVppEBookAssignment} from './deserializeIntoIosVppEBookAssignment';
import {IosVppEBookAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosVppEBookAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosVppEBookAssignment;
}
