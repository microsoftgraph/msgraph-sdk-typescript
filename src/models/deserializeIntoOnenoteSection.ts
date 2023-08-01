import {createNotebookFromDiscriminatorValue} from './createNotebookFromDiscriminatorValue';
import {createOnenotePageFromDiscriminatorValue} from './createOnenotePageFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {createSectionLinksFromDiscriminatorValue} from './createSectionLinksFromDiscriminatorValue';
import {deserializeIntoOnenoteEntityHierarchyModel} from './deserializeIntoOnenoteEntityHierarchyModel';
import type {Notebook} from './notebook';
import type {OnenotePage} from './onenotePage';
import type {OnenoteSection} from './onenoteSection';
import type {SectionGroup} from './sectionGroup';
import type {SectionLinks} from './sectionLinks';
import {serializeNotebook} from './serializeNotebook';
import {serializeOnenotePage} from './serializeOnenotePage';
import {serializeSectionGroup} from './serializeSectionGroup';
import {serializeSectionLinks} from './serializeSectionLinks';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteSection(onenoteSection: OnenoteSection | undefined = {} as OnenoteSection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntityHierarchyModel(onenoteSection),
        "isDefault": n => { onenoteSection.isDefault = n.getBooleanValue(); },
        "links": n => { onenoteSection.links = n.getObjectValue<SectionLinks>(createSectionLinksFromDiscriminatorValue); },
        "pages": n => { onenoteSection.pages = n.getCollectionOfObjectValues<OnenotePage>(createOnenotePageFromDiscriminatorValue); },
        "pagesUrl": n => { onenoteSection.pagesUrl = n.getStringValue(); },
        "parentNotebook": n => { onenoteSection.parentNotebook = n.getObjectValue<Notebook>(createNotebookFromDiscriminatorValue); },
        "parentSectionGroup": n => { onenoteSection.parentSectionGroup = n.getObjectValue<SectionGroup>(createSectionGroupFromDiscriminatorValue); },
    }
}
