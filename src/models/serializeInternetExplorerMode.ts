import {BrowserSiteList} from './browserSiteList';
import {InternetExplorerMode} from './internetExplorerMode';
import {serializeBrowserSiteList} from './serializeBrowserSiteList';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInternetExplorerMode(internetExplorerMode: InternetExplorerMode | undefined = {} as InternetExplorerMode, writer: SerializationWriter) : void {
        serializeEntity(writer, internetExplorerMode)
        writer.writeCollectionOfObjectValues<BrowserSiteList>("siteLists", internetExplorerMode.siteLists, serializeBrowserSiteList);
}
