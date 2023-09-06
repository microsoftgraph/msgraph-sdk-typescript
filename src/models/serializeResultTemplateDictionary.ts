import { type ResultTemplateDictionary } from './resultTemplateDictionary';
import { serializeDictionary } from './serializeDictionary';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeResultTemplateDictionary(writer: SerializationWriter, resultTemplateDictionary: ResultTemplateDictionary | undefined = {} as ResultTemplateDictionary) : void {
        serializeDictionary(writer, resultTemplateDictionary)
}
