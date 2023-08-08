import type {SectionGroup} from './sectionGroup';
import type {SectionGroupCollectionResponse} from './sectionGroupCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSectionGroup} from './serializeSectionGroup';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSectionGroupCollectionResponse(writer: SerializationWriter, sectionGroupCollectionResponse: SectionGroupCollectionResponse | undefined = {} as SectionGroupCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sectionGroupCollectionResponse)
        writer.writeCollectionOfObjectValues<SectionGroup>("value", sectionGroupCollectionResponse.value, serializeSectionGroup);
}
