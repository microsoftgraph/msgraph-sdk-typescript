import {AndroidCustomConfiguration} from './androidCustomConfiguration';
import {OmaSetting} from './omaSetting';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidCustomConfiguration(writer: SerializationWriter, androidCustomConfiguration: AndroidCustomConfiguration | undefined = {} as AndroidCustomConfiguration) : void {
        serializeDeviceConfiguration(writer, androidCustomConfiguration)
        writer.writeCollectionOfObjectValues<OmaSetting>("omaSettings", androidCustomConfiguration.omaSettings, serializeOmaSetting);
}
