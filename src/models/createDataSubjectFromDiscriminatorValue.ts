import { deserializeIntoDataSubject } from './deserializeIntoDataSubject';
import { type DataSubject } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDataSubjectFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDataSubject;
}
