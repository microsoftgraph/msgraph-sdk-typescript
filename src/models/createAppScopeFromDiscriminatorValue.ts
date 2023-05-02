import {deserializeIntoAppScope} from './deserializeIntoAppScope';
import {AppScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppScope;
}
