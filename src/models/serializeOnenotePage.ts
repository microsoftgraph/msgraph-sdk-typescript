import {Notebook} from './notebook';
import {OnenotePage} from './onenotePage';
import {OnenoteSection} from './onenoteSection';
import {PageLinks} from './pageLinks';
import {serializeNotebook} from './serializeNotebook';
import {serializeOnenoteEntitySchemaObjectModel} from './serializeOnenoteEntitySchemaObjectModel';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {serializePageLinks} from './serializePageLinks';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenotePage(writer: SerializationWriter, onenotePage: OnenotePage | undefined = {} as OnenotePage) : void {
        serializeOnenoteEntitySchemaObjectModel(writer, onenotePage)
        writer.writeStringValue("content", onenotePage.content);
        writer.writeStringValue("contentUrl", onenotePage.contentUrl);
        writer.writeStringValue("createdByAppId", onenotePage.createdByAppId);
        writer.writeDateValue("lastModifiedDateTime", onenotePage.lastModifiedDateTime);
        writer.writeNumberValue("level", onenotePage.level);
        writer.writeObjectValue<PageLinks>("links", onenotePage.links, serializePageLinks);
        writer.writeNumberValue("order", onenotePage.order);
        writer.writeObjectValue<Notebook>("parentNotebook", onenotePage.parentNotebook, serializeNotebook);
        writer.writeObjectValue<OnenoteSection>("parentSection", onenotePage.parentSection, serializeOnenoteSection);
        writer.writeStringValue("title", onenotePage.title);
        writer.writeCollectionOfPrimitiveValues<string>("userTags", onenotePage.userTags);
}
