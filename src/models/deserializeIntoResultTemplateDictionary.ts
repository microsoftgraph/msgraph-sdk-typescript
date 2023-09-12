import { deserializeIntoDictionary } from './deserializeIntoDictionary';
import { type ResultTemplateDictionary } from './resultTemplateDictionary';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoResultTemplateDictionary(resultTemplateDictionary: ResultTemplateDictionary | undefined = {} as ResultTemplateDictionary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDictionary(resultTemplateDictionary),
    }
}
