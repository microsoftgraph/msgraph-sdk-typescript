import {ExpirationPatternImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExpirationPatternFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExpirationPatternImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExpirationPatternImpl();
}
