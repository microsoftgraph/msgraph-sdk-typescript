import {Notebook} from './notebook';
import {Onenote} from './onenote';
import {OnenoteOperation} from './onenoteOperation';
import {OnenotePage} from './onenotePage';
import {OnenoteResource} from './onenoteResource';
import {OnenoteSection} from './onenoteSection';
import {SectionGroup} from './sectionGroup';
import {serializeEntity} from './serializeEntity';
import {serializeNotebook} from './serializeNotebook';
import {serializeOnenoteOperation} from './serializeOnenoteOperation';
import {serializeOnenotePage} from './serializeOnenotePage';
import {serializeOnenoteResource} from './serializeOnenoteResource';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {serializeSectionGroup} from './serializeSectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenote(writer: SerializationWriter, onenote: Onenote | undefined = {} as Onenote) : void {
        serializeEntity(writer, onenote)
        writer.writeCollectionOfObjectValues<Notebook>("notebooks", onenote.notebooks, serializeNotebook);
        writer.writeCollectionOfObjectValues<OnenoteOperation>("operations", onenote.operations, serializeOnenoteOperation);
        writer.writeCollectionOfObjectValues<OnenotePage>("pages", onenote.pages, serializeOnenotePage);
        writer.writeCollectionOfObjectValues<OnenoteResource>("resources", onenote.resources, serializeOnenoteResource);
        writer.writeCollectionOfObjectValues<SectionGroup>("sectionGroups", onenote.sectionGroups, serializeSectionGroup);
        writer.writeCollectionOfObjectValues<OnenoteSection>("sections", onenote.sections, serializeOnenoteSection);
}
