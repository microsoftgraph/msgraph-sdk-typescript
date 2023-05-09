import {deserializeIntoExpirationPattern} from './deserializeIntoExpirationPattern';
import {ExpirationPattern} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExpirationPatternFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExpirationPattern;
}
