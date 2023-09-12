import { deserializeIntoAlteredQueryToken } from './deserializeIntoAlteredQueryToken';
import { type AlteredQueryToken } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAlteredQueryTokenFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAlteredQueryToken;
}
