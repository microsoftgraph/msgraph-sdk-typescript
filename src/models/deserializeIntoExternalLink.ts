import { type ExternalLink } from './externalLink';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalLink(externalLink: ExternalLink | undefined = {} as ExternalLink) : Record<string, (node: ParseNode) => void> {
    return {
        "href": n => { externalLink.href = n.getStringValue(); },
        "@odata.type": n => { externalLink.odataType = n.getStringValue(); },
    }
}
