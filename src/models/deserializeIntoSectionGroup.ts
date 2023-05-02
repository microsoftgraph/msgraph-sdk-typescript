import {createNotebookFromDiscriminatorValue} from './createNotebookFromDiscriminatorValue';
import {createOnenoteSectionFromDiscriminatorValue} from './createOnenoteSectionFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {deserializeIntoOnenoteEntityHierarchyModel} from './deserializeIntoOnenoteEntityHierarchyModel';
import {Notebook} from './notebook';
import {OnenoteSection} from './onenoteSection';
import {SectionGroup} from './sectionGroup';
import {serializeNotebook} from './serializeNotebook';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {serializeSectionGroup} from './serializeSectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSectionGroup(sectionGroup: SectionGroup | undefined = {} as SectionGroup) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntityHierarchyModel(sectionGroup),
        "parentNotebook": n => { sectionGroup.parentNotebook = n.getObjectValue<Notebook>(createNotebookFromDiscriminatorValue); },
        "parentSectionGroup": n => { sectionGroup.parentSectionGroup = n.getObjectValue<SectionGroup>(createSectionGroupFromDiscriminatorValue); },
        "sectionGroups": n => { sectionGroup.sectionGroups = n.getCollectionOfObjectValues<SectionGroup>(createSectionGroupFromDiscriminatorValue); },
        "sectionGroupsUrl": n => { sectionGroup.sectionGroupsUrl = n.getStringValue(); },
        "sections": n => { sectionGroup.sections = n.getCollectionOfObjectValues<OnenoteSection>(createOnenoteSectionFromDiscriminatorValue); },
        "sectionsUrl": n => { sectionGroup.sectionsUrl = n.getStringValue(); },
    }
}
