import {IosVppEBookAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosVppEBookAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosVppEBookAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosVppEBookAssignmentImpl();
}
