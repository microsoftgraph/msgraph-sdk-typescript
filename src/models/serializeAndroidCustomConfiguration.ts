import {AndroidCustomConfiguration} from './androidCustomConfiguration';
import {OmaSetting} from './omaSetting';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidCustomConfiguration(androidCustomConfiguration: AndroidCustomConfiguration | undefined = {} as AndroidCustomConfiguration, writer: SerializationWriter) : void {
        serializeDeviceConfiguration(writer, androidCustomConfiguration)
        writer.writeCollectionOfObjectValues<OmaSetting>("omaSettings", androidCustomConfiguration.omaSettings, serializeOmaSetting);
}
