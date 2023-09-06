import { createIdentitySetFromDiscriminatorValue } from '../createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type IdentitySet } from '../identitySet';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { type Search } from './search';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSearch(search: Search | undefined = {} as Search) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(search),
        "contentQuery": n => { search.contentQuery = n.getStringValue(); },
        "createdBy": n => { search.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { search.createdDateTime = n.getDateValue(); },
        "description": n => { search.description = n.getStringValue(); },
        "displayName": n => { search.displayName = n.getStringValue(); },
        "lastModifiedBy": n => { search.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { search.lastModifiedDateTime = n.getDateValue(); },
    }
}
