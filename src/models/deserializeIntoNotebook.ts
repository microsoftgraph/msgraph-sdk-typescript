import {createNotebookLinksFromDiscriminatorValue} from './createNotebookLinksFromDiscriminatorValue';
import {createOnenoteSectionFromDiscriminatorValue} from './createOnenoteSectionFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {deserializeIntoOnenoteEntityHierarchyModel} from './deserializeIntoOnenoteEntityHierarchyModel';
import {Notebook} from './notebook';
import {NotebookLinks} from './notebookLinks';
import {OnenoteSection} from './onenoteSection';
import {OnenoteUserRole} from './onenoteUserRole';
import {SectionGroup} from './sectionGroup';
import {serializeNotebookLinks} from './serializeNotebookLinks';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {serializeSectionGroup} from './serializeSectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotebook(notebook: Notebook | undefined = {} as Notebook) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntityHierarchyModel(notebook),
        "isDefault": n => { notebook.isDefault = n.getBooleanValue(); },
        "isShared": n => { notebook.isShared = n.getBooleanValue(); },
        "links": n => { notebook.links = n.getObjectValue<NotebookLinks>(createNotebookLinksFromDiscriminatorValue); },
        "sectionGroups": n => { notebook.sectionGroups = n.getCollectionOfObjectValues<SectionGroup>(createSectionGroupFromDiscriminatorValue); },
        "sectionGroupsUrl": n => { notebook.sectionGroupsUrl = n.getStringValue(); },
        "sections": n => { notebook.sections = n.getCollectionOfObjectValues<OnenoteSection>(createOnenoteSectionFromDiscriminatorValue); },
        "sectionsUrl": n => { notebook.sectionsUrl = n.getStringValue(); },
        "userRole": n => { notebook.userRole = n.getEnumValue<OnenoteUserRole>(OnenoteUserRole); },
    }
}
