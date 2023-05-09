import {BrowserSiteList} from './browserSiteList';
import {InternetExplorerMode} from './internetExplorerMode';
import {serializeBrowserSiteList} from './serializeBrowserSiteList';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInternetExplorerMode(writer: SerializationWriter, internetExplorerMode: InternetExplorerMode | undefined = {} as InternetExplorerMode) : void {
        serializeEntity(writer, internetExplorerMode)
        writer.writeCollectionOfObjectValues<BrowserSiteList>("siteLists", internetExplorerMode.siteLists, serializeBrowserSiteList);
}
