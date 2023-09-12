import { deserializeIntoAppScope } from './deserializeIntoAppScope';
import { type AppScope } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppScope;
}
