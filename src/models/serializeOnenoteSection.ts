import {Notebook} from './notebook';
import {OnenotePage} from './onenotePage';
import {OnenoteSection} from './onenoteSection';
import {SectionGroup} from './sectionGroup';
import {SectionLinks} from './sectionLinks';
import {serializeNotebook} from './serializeNotebook';
import {serializeOnenoteEntityHierarchyModel} from './serializeOnenoteEntityHierarchyModel';
import {serializeOnenotePage} from './serializeOnenotePage';
import {serializeSectionGroup} from './serializeSectionGroup';
import {serializeSectionLinks} from './serializeSectionLinks';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteSection(writer: SerializationWriter, onenoteSection: OnenoteSection | undefined = {} as OnenoteSection) : void {
        serializeOnenoteEntityHierarchyModel(writer, onenoteSection)
        writer.writeBooleanValue("isDefault", onenoteSection.isDefault);
        writer.writeObjectValue<SectionLinks>("links", onenoteSection.links, serializeSectionLinks);
        writer.writeCollectionOfObjectValues<OnenotePage>("pages", onenoteSection.pages, serializeOnenotePage);
        writer.writeStringValue("pagesUrl", onenoteSection.pagesUrl);
        writer.writeObjectValue<Notebook>("parentNotebook", onenoteSection.parentNotebook, serializeNotebook);
        writer.writeObjectValue<SectionGroup>("parentSectionGroup", onenoteSection.parentSectionGroup, serializeSectionGroup);
}
