import {IosHomeScreenApp} from './iosHomeScreenApp';
import {IosHomeScreenFolderPage} from './iosHomeScreenFolderPage';
import {serializeIosHomeScreenApp} from './serializeIosHomeScreenApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenFolderPage(iosHomeScreenFolderPage: IosHomeScreenFolderPage | undefined = {} as IosHomeScreenFolderPage, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<IosHomeScreenApp>("apps", iosHomeScreenFolderPage.apps, serializeIosHomeScreenApp);
        writer.writeStringValue("displayName", iosHomeScreenFolderPage.displayName);
        writer.writeStringValue("@odata.type", iosHomeScreenFolderPage.odataType);
        writer.writeAdditionalData(iosHomeScreenFolderPage.additionalData);
}
