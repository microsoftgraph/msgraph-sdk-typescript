import {AndroidWorkProfileCustomConfiguration} from './androidWorkProfileCustomConfiguration';
import {OmaSetting} from './omaSetting';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidWorkProfileCustomConfiguration(writer: SerializationWriter, androidWorkProfileCustomConfiguration: AndroidWorkProfileCustomConfiguration | undefined = {} as AndroidWorkProfileCustomConfiguration) : void {
        serializeDeviceConfiguration(writer, androidWorkProfileCustomConfiguration)
        writer.writeCollectionOfObjectValues<OmaSetting>("omaSettings", androidWorkProfileCustomConfiguration.omaSettings, serializeOmaSetting);
}
