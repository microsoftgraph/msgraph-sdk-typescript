import { type LocalizedLabel } from './localizedLabel';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLocalizedLabel(localizedLabel: LocalizedLabel | undefined = {} as LocalizedLabel) : Record<string, (node: ParseNode) => void> {
    return {
        "isDefault": n => { localizedLabel.isDefault = n.getBooleanValue(); },
        "languageTag": n => { localizedLabel.languageTag = n.getStringValue(); },
        "name": n => { localizedLabel.name = n.getStringValue(); },
        "@odata.type": n => { localizedLabel.odataType = n.getStringValue(); },
    }
}
