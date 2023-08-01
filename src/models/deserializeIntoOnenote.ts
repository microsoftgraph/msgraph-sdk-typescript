import {createNotebookFromDiscriminatorValue} from './createNotebookFromDiscriminatorValue';
import {createOnenoteOperationFromDiscriminatorValue} from './createOnenoteOperationFromDiscriminatorValue';
import {createOnenotePageFromDiscriminatorValue} from './createOnenotePageFromDiscriminatorValue';
import {createOnenoteResourceFromDiscriminatorValue} from './createOnenoteResourceFromDiscriminatorValue';
import {createOnenoteSectionFromDiscriminatorValue} from './createOnenoteSectionFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {Notebook} from './notebook';
import type {Onenote} from './onenote';
import type {OnenoteOperation} from './onenoteOperation';
import type {OnenotePage} from './onenotePage';
import type {OnenoteResource} from './onenoteResource';
import type {OnenoteSection} from './onenoteSection';
import type {SectionGroup} from './sectionGroup';
import {serializeNotebook} from './serializeNotebook';
import {serializeOnenoteOperation} from './serializeOnenoteOperation';
import {serializeOnenotePage} from './serializeOnenotePage';
import {serializeOnenoteResource} from './serializeOnenoteResource';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {serializeSectionGroup} from './serializeSectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenote(onenote: Onenote | undefined = {} as Onenote) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(onenote),
        "notebooks": n => { onenote.notebooks = n.getCollectionOfObjectValues<Notebook>(createNotebookFromDiscriminatorValue); },
        "operations": n => { onenote.operations = n.getCollectionOfObjectValues<OnenoteOperation>(createOnenoteOperationFromDiscriminatorValue); },
        "pages": n => { onenote.pages = n.getCollectionOfObjectValues<OnenotePage>(createOnenotePageFromDiscriminatorValue); },
        "resources": n => { onenote.resources = n.getCollectionOfObjectValues<OnenoteResource>(createOnenoteResourceFromDiscriminatorValue); },
        "sectionGroups": n => { onenote.sectionGroups = n.getCollectionOfObjectValues<SectionGroup>(createSectionGroupFromDiscriminatorValue); },
        "sections": n => { onenote.sections = n.getCollectionOfObjectValues<OnenoteSection>(createOnenoteSectionFromDiscriminatorValue); },
    }
}
