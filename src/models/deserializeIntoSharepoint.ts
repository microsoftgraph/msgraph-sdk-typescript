import { createSharepointSettingsFromDiscriminatorValue } from './createSharepointSettingsFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeSharepointSettings } from './serializeSharepointSettings';
import { type Sharepoint } from './sharepoint';
import { type SharepointSettings } from './sharepointSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSharepoint(sharepoint: Sharepoint | undefined = {} as Sharepoint) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(sharepoint),
        "settings": n => { sharepoint.settings = n.getObjectValue<SharepointSettings>(createSharepointSettingsFromDiscriminatorValue); },
    }
}
