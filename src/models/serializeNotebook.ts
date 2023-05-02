import {Notebook} from './notebook';
import {NotebookLinks} from './notebookLinks';
import {OnenoteSection} from './onenoteSection';
import {OnenoteUserRole} from './onenoteUserRole';
import {SectionGroup} from './sectionGroup';
import {serializeNotebookLinks} from './serializeNotebookLinks';
import {serializeOnenoteEntityHierarchyModel} from './serializeOnenoteEntityHierarchyModel';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {serializeSectionGroup} from './serializeSectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNotebook(writer: SerializationWriter, notebook: Notebook | undefined = {} as Notebook) : void {
        serializeOnenoteEntityHierarchyModel(writer, notebook)
        writer.writeBooleanValue("isDefault", notebook.isDefault);
        writer.writeBooleanValue("isShared", notebook.isShared);
        writer.writeObjectValue<NotebookLinks>("links", notebook.links, serializeNotebookLinks);
        writer.writeCollectionOfObjectValues<SectionGroup>("sectionGroups", notebook.sectionGroups, serializeSectionGroup);
        writer.writeStringValue("sectionGroupsUrl", notebook.sectionGroupsUrl);
        writer.writeCollectionOfObjectValues<OnenoteSection>("sections", notebook.sections, serializeOnenoteSection);
        writer.writeStringValue("sectionsUrl", notebook.sectionsUrl);
        writer.writeEnumValue<OnenoteUserRole>("userRole", notebook.userRole);
}
