import { type ResultTemplateOption } from './resultTemplateOption';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoResultTemplateOption(resultTemplateOption: ResultTemplateOption | undefined = {} as ResultTemplateOption) : Record<string, (node: ParseNode) => void> {
    return {
        "enableResultTemplate": n => { resultTemplateOption.enableResultTemplate = n.getBooleanValue(); },
        "@odata.type": n => { resultTemplateOption.odataType = n.getStringValue(); },
    }
}
