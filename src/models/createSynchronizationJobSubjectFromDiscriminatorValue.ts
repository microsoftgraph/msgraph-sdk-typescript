import {deserializeIntoSynchronizationJobSubject} from './deserializeIntoSynchronizationJobSubject';
import {SynchronizationJobSubject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationJobSubjectFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationJobSubject;
}
