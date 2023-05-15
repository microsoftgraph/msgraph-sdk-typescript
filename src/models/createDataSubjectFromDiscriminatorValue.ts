import {deserializeIntoDataSubject} from './deserializeIntoDataSubject';
import {DataSubject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataSubjectFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDataSubject;
}
