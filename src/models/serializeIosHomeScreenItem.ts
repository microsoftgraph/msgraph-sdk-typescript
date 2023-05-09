import {IosHomeScreenItem} from './iosHomeScreenItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenItem(writer: SerializationWriter, iosHomeScreenItem: IosHomeScreenItem | undefined = {} as IosHomeScreenItem) : void {
        writer.writeStringValue("displayName", iosHomeScreenItem.displayName);
        writer.writeStringValue("@odata.type", iosHomeScreenItem.odataType);
        writer.writeAdditionalData(iosHomeScreenItem.additionalData);
}
