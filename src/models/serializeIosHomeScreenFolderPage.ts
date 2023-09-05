import { type IosHomeScreenApp } from './iosHomeScreenApp';
import { type IosHomeScreenFolderPage } from './iosHomeScreenFolderPage';
import { serializeIosHomeScreenApp } from './serializeIosHomeScreenApp';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenFolderPage(writer: SerializationWriter, iosHomeScreenFolderPage: IosHomeScreenFolderPage | undefined = {} as IosHomeScreenFolderPage) : void {
        writer.writeCollectionOfObjectValues<IosHomeScreenApp>("apps", iosHomeScreenFolderPage.apps, serializeIosHomeScreenApp);
        writer.writeStringValue("displayName", iosHomeScreenFolderPage.displayName);
        writer.writeStringValue("@odata.type", iosHomeScreenFolderPage.odataType);
        writer.writeAdditionalData(iosHomeScreenFolderPage.additionalData);
}
