import {deserializeIntoDictionary} from './deserializeIntoDictionary';
import type {ResultTemplateDictionary} from './resultTemplateDictionary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResultTemplateDictionary(resultTemplateDictionary: ResultTemplateDictionary | undefined = {} as ResultTemplateDictionary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDictionary(resultTemplateDictionary),
    }
}
