import {MobileContainedApp} from './mobileContainedApp';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileContainedApp(writer: SerializationWriter, mobileContainedApp: MobileContainedApp | undefined = {} as MobileContainedApp) : void {
        serializeEntity(writer, mobileContainedApp)
}
