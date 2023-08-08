import type {Prompt} from './prompt';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrompt(prompt: Prompt | undefined = {} as Prompt) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { prompt.odataType = n.getStringValue(); },
    }
}
