import {ExternalItemContent} from './externalItemContent';
import {ExternalItemContentType} from './externalItemContentType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalItemContent(externalItemContent: ExternalItemContent | undefined = {} as ExternalItemContent) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { externalItemContent.odataType = n.getStringValue(); },
        "type": n => { externalItemContent.type = n.getEnumValue<ExternalItemContentType>(ExternalItemContentType); },
        "value": n => { externalItemContent.value = n.getStringValue(); },
    }
}
