import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {SectionGroup} from './sectionGroup';
import {SectionGroupCollectionResponse} from './sectionGroupCollectionResponse';
import {serializeSectionGroup} from './serializeSectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSectionGroupCollectionResponse(sectionGroupCollectionResponse: SectionGroupCollectionResponse | undefined = {} as SectionGroupCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sectionGroupCollectionResponse),
        "value": n => { sectionGroupCollectionResponse.value = n.getCollectionOfObjectValues<SectionGroup>(createSectionGroupFromDiscriminatorValue); },
    }
}
