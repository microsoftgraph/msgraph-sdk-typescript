import type {Notebook} from './notebook';
import type {Onenote} from './onenote';
import type {OnenoteOperation} from './onenoteOperation';
import type {OnenotePage} from './onenotePage';
import type {OnenoteResource} from './onenoteResource';
import type {OnenoteSection} from './onenoteSection';
import type {SectionGroup} from './sectionGroup';
import {serializeEntity} from './serializeEntity';
import {serializeNotebook} from './serializeNotebook';
import {serializeOnenoteOperation} from './serializeOnenoteOperation';
import {serializeOnenotePage} from './serializeOnenotePage';
import {serializeOnenoteResource} from './serializeOnenoteResource';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {serializeSectionGroup} from './serializeSectionGroup';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenote(writer: SerializationWriter, onenote: Onenote | undefined = {} as Onenote) : void {
        serializeEntity(writer, onenote)
        writer.writeCollectionOfObjectValues<Notebook>("notebooks", onenote.notebooks, serializeNotebook);
        writer.writeCollectionOfObjectValues<OnenoteOperation>("operations", onenote.operations, serializeOnenoteOperation);
        writer.writeCollectionOfObjectValues<OnenotePage>("pages", onenote.pages, serializeOnenotePage);
        writer.writeCollectionOfObjectValues<OnenoteResource>("resources", onenote.resources, serializeOnenoteResource);
        writer.writeCollectionOfObjectValues<SectionGroup>("sectionGroups", onenote.sectionGroups, serializeSectionGroup);
        writer.writeCollectionOfObjectValues<OnenoteSection>("sections", onenote.sections, serializeOnenoteSection);
}
