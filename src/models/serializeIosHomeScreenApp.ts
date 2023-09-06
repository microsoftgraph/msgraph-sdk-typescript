import { type IosHomeScreenApp } from './iosHomeScreenApp';
import { serializeIosHomeScreenItem } from './serializeIosHomeScreenItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenApp(writer: SerializationWriter, iosHomeScreenApp: IosHomeScreenApp | undefined = {} as IosHomeScreenApp) : void {
        serializeIosHomeScreenItem(writer, iosHomeScreenApp)
        writer.writeStringValue("bundleID", iosHomeScreenApp.bundleID);
}
