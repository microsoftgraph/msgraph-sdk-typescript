import {createIdentitySetFromDiscriminatorValue} from '../createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {IdentitySet} from '../identitySet';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {Search} from './search';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
