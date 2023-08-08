import type {MobileContainedApp} from './mobileContainedApp';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileContainedApp(writer: SerializationWriter, mobileContainedApp: MobileContainedApp | undefined = {} as MobileContainedApp) : void {
        serializeEntity(writer, mobileContainedApp)
}
