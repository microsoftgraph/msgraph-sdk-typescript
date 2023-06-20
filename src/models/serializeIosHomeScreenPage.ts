import {IosHomeScreenItem} from './iosHomeScreenItem';
import {IosHomeScreenPage} from './iosHomeScreenPage';
import {serializeIosHomeScreenItem} from './serializeIosHomeScreenItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenPage(iosHomeScreenPage: IosHomeScreenPage | undefined = {} as IosHomeScreenPage, writer: SerializationWriter) : void {
        writer.writeStringValue("displayName", iosHomeScreenPage.displayName);
        writer.writeCollectionOfObjectValues<IosHomeScreenItem>("icons", iosHomeScreenPage.icons, serializeIosHomeScreenItem);
        writer.writeStringValue("@odata.type", iosHomeScreenPage.odataType);
        writer.writeAdditionalData(iosHomeScreenPage.additionalData);
}
