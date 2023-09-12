import { type BrowserSiteList } from './browserSiteList';
import { type InternetExplorerMode } from './internetExplorerMode';
import { serializeBrowserSiteList } from './serializeBrowserSiteList';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeInternetExplorerMode(writer: SerializationWriter, internetExplorerMode: InternetExplorerMode | undefined = {} as InternetExplorerMode) : void {
        serializeEntity(writer, internetExplorerMode)
        writer.writeCollectionOfObjectValues<BrowserSiteList>("siteLists", internetExplorerMode.siteLists, serializeBrowserSiteList);
}
