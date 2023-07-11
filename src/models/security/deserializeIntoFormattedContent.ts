import {ContentFormat} from './contentFormat';
import {FormattedContent} from './formattedContent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFormattedContent(formattedContent: FormattedContent | undefined = {} as FormattedContent) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { formattedContent.content = n.getStringValue(); },
        "format": n => { formattedContent.format = n.getEnumValue<ContentFormat>(ContentFormat); },
        "@odata.type": n => { formattedContent.odataType = n.getStringValue(); },
    }
}
