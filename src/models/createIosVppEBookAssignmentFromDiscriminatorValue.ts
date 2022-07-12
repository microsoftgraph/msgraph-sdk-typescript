import {IosVppEBookAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosVppEBookAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosVppEBookAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosVppEBookAssignment();
}
