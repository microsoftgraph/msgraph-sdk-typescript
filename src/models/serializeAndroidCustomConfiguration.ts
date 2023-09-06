import { type AndroidCustomConfiguration } from './androidCustomConfiguration';
import { type OmaSetting } from './omaSetting';
import { serializeDeviceConfiguration } from './serializeDeviceConfiguration';
import { serializeOmaSetting } from './serializeOmaSetting';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAndroidCustomConfiguration(writer: SerializationWriter, androidCustomConfiguration: AndroidCustomConfiguration | undefined = {} as AndroidCustomConfiguration) : void {
        serializeDeviceConfiguration(writer, androidCustomConfiguration)
        writer.writeCollectionOfObjectValues<OmaSetting>("omaSettings", androidCustomConfiguration.omaSettings, serializeOmaSetting);
}
