import { ContentFormat } from './contentFormat';
import { type FormattedContent } from './formattedContent';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFormattedContent(formattedContent: FormattedContent | undefined = {} as FormattedContent) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { formattedContent.content = n.getStringValue(); },
        "format": n => { formattedContent.format = n.getEnumValue<ContentFormat>(ContentFormat); },
        "@odata.type": n => { formattedContent.odataType = n.getStringValue(); },
    }
}
