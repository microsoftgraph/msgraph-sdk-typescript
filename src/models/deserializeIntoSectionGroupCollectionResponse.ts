import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {SectionGroup} from './sectionGroup';
import type {SectionGroupCollectionResponse} from './sectionGroupCollectionResponse';
import {serializeSectionGroup} from './serializeSectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSectionGroupCollectionResponse(sectionGroupCollectionResponse: SectionGroupCollectionResponse | undefined = {} as SectionGroupCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sectionGroupCollectionResponse),
        "value": n => { sectionGroupCollectionResponse.value = n.getCollectionOfObjectValues<SectionGroup>(createSectionGroupFromDiscriminatorValue); },
    }
}
