import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TabUpdatedEventMessageDetail} from './tabUpdatedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTabUpdatedEventMessageDetail(tabUpdatedEventMessageDetail: TabUpdatedEventMessageDetail | undefined = {} as TabUpdatedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(tabUpdatedEventMessageDetail),
        "initiator": n => { tabUpdatedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "tabId": n => { tabUpdatedEventMessageDetail.tabId = n.getStringValue(); },
    }
}
