import { type MobileContainedApp } from './mobileContainedApp';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMobileContainedApp(writer: SerializationWriter, mobileContainedApp: MobileContainedApp | undefined = {} as MobileContainedApp) : void {
        serializeEntity(writer, mobileContainedApp)
}
