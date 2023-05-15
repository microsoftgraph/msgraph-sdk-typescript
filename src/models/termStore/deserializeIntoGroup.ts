import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createSetFromDiscriminatorValue} from './createSetFromDiscriminatorValue';
import {Group} from './group';
import {serializeSet} from './serializeSet';
import {Set} from './set';
import {TermGroupScope} from './termGroupScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroup(group: Group | undefined = {} as Group) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(group),
        "createdDateTime": n => { group.createdDateTime = n.getDateValue(); },
        "description": n => { group.description = n.getStringValue(); },
        "displayName": n => { group.displayName = n.getStringValue(); },
        "parentSiteId": n => { group.parentSiteId = n.getStringValue(); },
        "scope": n => { group.scope = n.getEnumValue<TermGroupScope>(TermGroupScope); },
        "sets": n => { group.sets = n.getCollectionOfObjectValues<Set>(createSetFromDiscriminatorValue); },
    }
}
