import {serializeEntity} from './serializeEntity';
import {serializeSharepointSettings} from './serializeSharepointSettings';
import {Sharepoint} from './sharepoint';
import {SharepointSettings} from './sharepointSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharepoint(writer: SerializationWriter, sharepoint: Sharepoint | undefined = {} as Sharepoint) : void {
        serializeEntity(writer, sharepoint)
        writer.writeObjectValue<SharepointSettings>("settings", sharepoint.settings, serializeSharepointSettings);
}
