import {IosHomeScreenApp} from './iosHomeScreenApp';
import {serializeIosHomeScreenItem} from './serializeIosHomeScreenItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenApp(iosHomeScreenApp: IosHomeScreenApp | undefined = {} as IosHomeScreenApp, writer: SerializationWriter) : void {
        serializeIosHomeScreenItem(writer, iosHomeScreenApp)
        writer.writeStringValue("bundleID", iosHomeScreenApp.bundleID);
}
