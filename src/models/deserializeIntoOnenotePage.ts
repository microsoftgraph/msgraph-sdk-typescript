import { createNotebookFromDiscriminatorValue } from './createNotebookFromDiscriminatorValue';
import { createOnenoteSectionFromDiscriminatorValue } from './createOnenoteSectionFromDiscriminatorValue';
import { createPageLinksFromDiscriminatorValue } from './createPageLinksFromDiscriminatorValue';
import { deserializeIntoOnenoteEntitySchemaObjectModel } from './deserializeIntoOnenoteEntitySchemaObjectModel';
import { type Notebook } from './notebook';
import { type OnenotePage } from './onenotePage';
import { type OnenoteSection } from './onenoteSection';
import { type PageLinks } from './pageLinks';
import { serializeNotebook } from './serializeNotebook';
import { serializeOnenoteSection } from './serializeOnenoteSection';
import { serializePageLinks } from './serializePageLinks';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePage(onenotePage: OnenotePage | undefined = {} as OnenotePage) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntitySchemaObjectModel(onenotePage),
        "content": n => { onenotePage.content = n.getStringValue(); },
        "contentUrl": n => { onenotePage.contentUrl = n.getStringValue(); },
        "createdByAppId": n => { onenotePage.createdByAppId = n.getStringValue(); },
        "lastModifiedDateTime": n => { onenotePage.lastModifiedDateTime = n.getDateValue(); },
        "level": n => { onenotePage.level = n.getNumberValue(); },
        "links": n => { onenotePage.links = n.getObjectValue<PageLinks>(createPageLinksFromDiscriminatorValue); },
        "order": n => { onenotePage.order = n.getNumberValue(); },
        "parentNotebook": n => { onenotePage.parentNotebook = n.getObjectValue<Notebook>(createNotebookFromDiscriminatorValue); },
        "parentSection": n => { onenotePage.parentSection = n.getObjectValue<OnenoteSection>(createOnenoteSectionFromDiscriminatorValue); },
        "title": n => { onenotePage.title = n.getStringValue(); },
        "userTags": n => { onenotePage.userTags = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
