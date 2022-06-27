import {SubjectSetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectSetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubjectSetImpl();
}
