import { deserializeIntoUserSource } from './deserializeIntoUserSource';
import { type UserSource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserSource;
}
