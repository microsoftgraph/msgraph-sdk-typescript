import {SectionGroup} from './sectionGroup';
import {SectionGroupCollectionResponse} from './sectionGroupCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSectionGroup} from './serializeSectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSectionGroupCollectionResponse(writer: SerializationWriter, sectionGroupCollectionResponse: SectionGroupCollectionResponse | undefined = {} as SectionGroupCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sectionGroupCollectionResponse)
        writer.writeCollectionOfObjectValues<SectionGroup>("value", sectionGroupCollectionResponse.value, serializeSectionGroup);
}
