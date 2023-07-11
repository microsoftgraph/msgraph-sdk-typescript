import {serializeArtifact} from './serializeArtifact';
import {UnclassifiedArtifact} from './unclassifiedArtifact';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnclassifiedArtifact(writer: SerializationWriter, unclassifiedArtifact: UnclassifiedArtifact | undefined = {} as UnclassifiedArtifact) : void {
        serializeArtifact(writer, unclassifiedArtifact)
        writer.writeStringValue("kind", unclassifiedArtifact.kind);
        writer.writeStringValue("value", unclassifiedArtifact.value);
}
