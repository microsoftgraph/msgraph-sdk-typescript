import { serializeEntity } from './serializeEntity';
import { serializeSharepointSettings } from './serializeSharepointSettings';
import { type Sharepoint } from './sharepoint';
import { type SharepointSettings } from './sharepointSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSharepoint(writer: SerializationWriter, sharepoint: Sharepoint | undefined = {} as Sharepoint) : void {
        serializeEntity(writer, sharepoint)
        writer.writeObjectValue<SharepointSettings>("settings", sharepoint.settings, serializeSharepointSettings);
}
