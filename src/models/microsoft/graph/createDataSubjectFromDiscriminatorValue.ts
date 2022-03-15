import {DataSubject} from './dataSubject';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataSubjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : DataSubject {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DataSubject();
}
