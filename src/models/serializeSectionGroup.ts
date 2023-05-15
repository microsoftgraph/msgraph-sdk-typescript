import {Notebook} from './notebook';
import {OnenoteSection} from './onenoteSection';
import {SectionGroup} from './sectionGroup';
import {serializeNotebook} from './serializeNotebook';
import {serializeOnenoteEntityHierarchyModel} from './serializeOnenoteEntityHierarchyModel';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSectionGroup(writer: SerializationWriter, sectionGroup: SectionGroup | undefined = {} as SectionGroup) : void {
        serializeOnenoteEntityHierarchyModel(writer, sectionGroup)
        writer.writeObjectValue<Notebook>("parentNotebook", sectionGroup.parentNotebook, serializeNotebook);
        writer.writeObjectValue<SectionGroup>("parentSectionGroup", sectionGroup.parentSectionGroup, serializeSectionGroup);
        writer.writeCollectionOfObjectValues<SectionGroup>("sectionGroups", sectionGroup.sectionGroups, serializeSectionGroup);
        writer.writeStringValue("sectionGroupsUrl", sectionGroup.sectionGroupsUrl);
        writer.writeCollectionOfObjectValues<OnenoteSection>("sections", sectionGroup.sections, serializeOnenoteSection);
        writer.writeStringValue("sectionsUrl", sectionGroup.sectionsUrl);
}
