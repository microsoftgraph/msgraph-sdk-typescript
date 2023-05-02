import {deserializeIntoAlternativeSecurityId} from './deserializeIntoAlternativeSecurityId';
import {AlternativeSecurityId} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlternativeSecurityIdFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAlternativeSecurityId;
}
