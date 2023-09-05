import { deserializeIntoArtifact } from './deserializeIntoArtifact';
import { type UnclassifiedArtifact } from './unclassifiedArtifact';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnclassifiedArtifact(unclassifiedArtifact: UnclassifiedArtifact | undefined = {} as UnclassifiedArtifact) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoArtifact(unclassifiedArtifact),
        "kind": n => { unclassifiedArtifact.kind = n.getStringValue(); },
        "value": n => { unclassifiedArtifact.value = n.getStringValue(); },
    }
}
