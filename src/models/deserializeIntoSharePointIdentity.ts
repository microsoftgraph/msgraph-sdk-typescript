import { deserializeIntoIdentity } from './deserializeIntoIdentity';
import { type SharePointIdentity } from './sharePointIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSharePointIdentity(sharePointIdentity: SharePointIdentity | undefined = {} as SharePointIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(sharePointIdentity),
        "loginName": n => { sharePointIdentity.loginName = n.getStringValue(); },
    }
}
