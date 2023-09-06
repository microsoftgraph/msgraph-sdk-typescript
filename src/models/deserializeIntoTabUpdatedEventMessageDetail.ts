import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEventMessageDetail } from './deserializeIntoEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type TabUpdatedEventMessageDetail } from './tabUpdatedEventMessageDetail';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTabUpdatedEventMessageDetail(tabUpdatedEventMessageDetail: TabUpdatedEventMessageDetail | undefined = {} as TabUpdatedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(tabUpdatedEventMessageDetail),
        "initiator": n => { tabUpdatedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "tabId": n => { tabUpdatedEventMessageDetail.tabId = n.getStringValue(); },
    }
}
