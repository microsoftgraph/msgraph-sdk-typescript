import {createSharepointSettingsFromDiscriminatorValue} from './createSharepointSettingsFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeSharepointSettings} from './serializeSharepointSettings';
import {Sharepoint} from './sharepoint';
import {SharepointSettings} from './sharepointSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharepoint(sharepoint: Sharepoint | undefined = {} as Sharepoint) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(sharepoint),
        "settings": n => { sharepoint.settings = n.getObjectValue<SharepointSettings>(createSharepointSettingsFromDiscriminatorValue); },
    }
}
